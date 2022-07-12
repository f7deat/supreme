import { HomeOutlined, ContactsOutlined, ClusterOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Row, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import type { tabKeyType } from './data.d';
import styles from './center.less';
import { queryUser } from '@/services/defzone/api';
import { queryRoleByUser } from '@/services/defzone/user';

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

const Center: React.FC<RouteChildrenProps> = (props) => {
  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  const [currentUser, setCurrentUser] = useState<API.CurrentUser>();
  const [roles, setRoles] = useState<any>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    queryUser(props.match?.params['id']).then((response) => {
      setCurrentUser(response);
      queryRoleByUser(response.id).then((rolesResponse) => {
        setRoles(rolesResponse);
      });
    });
  }, [props.match?.params]);

  //  渲染用户信息
  const renderUserInfo = ({ phoneNumber, group }: Partial<API.CurrentUser>) => {
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

  const Extra = () => (
    <Link to={`/account/settings/${currentUser?.id}`}>
      <Button icon={<EditOutlined />} type="primary">
        Edit
      </Button>
    </Link>
  );

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            {currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.userName}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={roles || []} />
                <Divider style={{ marginTop: 16 }} dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>Tags</div>
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
            extra={<Extra />}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
