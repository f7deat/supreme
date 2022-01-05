import { HomeOutlined, ContactsOutlined, ClusterOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Row, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import type { CurrentUser, tabKeyType } from './data.d';
import { getRolesInUser, queryCurrent } from './service';
import styles from './center.less';

const operationTabList = [
  {
    key: 'articles',
    tab: (
      <span>
        Bài viết <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  {
    key: 'applications',
    tab: (
      <span>
        Ứng dụng <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
  {
    key: 'projects',
    tab: (
      <span>
        Dự án <span style={{ fontSize: 14 }}>(8)</span>
      </span>
    ),
  },
];

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>Nhóm</div>
      {(tags || []).map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
};

const Center: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  const [currentUser, setCurrentUser] = useState<CurrentUser>();
  const [roles, setRoles] = useState<any>();
  useEffect(() => {
    queryCurrent().then((response) => {
      setCurrentUser(response);
      getRolesInUser(response.id).then((rolesResponse) => {
        setRoles(rolesResponse);
        console.log(rolesResponse);
      });
    });
  }, []);

  //  渲染用户信息
  const renderUserInfo = ({ phoneNumber, group, geographic }: Partial<CurrentUser>) => {
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {phoneNumber}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {group}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {(geographic || { province: { label: '' } }).province.label}
          {
            (
              geographic || {
                city: {
                  label: '',
                },
              }
            ).city.label
          }
        </p>
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'projects') {
      return <Projects />;
    }
    if (tabValue === 'applications') {
      return <Applications />;
    }
    if (tabValue === 'articles') {
      return <Articles />;
    }
    return null;
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            {currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img
                    alt=""
                    src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                  />
                  <div className={styles.name}>{currentUser.userName}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={roles || []} />
                <Divider style={{ marginTop: 16 }} dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>Tags</div>
                  <Row gutter={36}>
                    {currentUser.notice &&
                      currentUser.notice.map((item: any) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <Link to={item.href}>
                            <Avatar size="small" src={item.logo} />
                            {item.member}
                          </Link>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
