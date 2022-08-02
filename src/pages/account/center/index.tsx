import { HomeOutlined, ContactsOutlined, ClusterOutlined, EditOutlined, UserAddOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Row, Space, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Link, useParams } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import type { tabKeyType } from './data.d';
import styles from './center.less';
import { queryUser } from '@/services/defzone/api';
import { queryRoleByUser } from '@/services/defzone/user';
import { FormattedMessage } from 'umi';

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

  const params = useParams<any>();

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


  const operationTabList = [
    {
      key: 'articles',
      tab: <FormattedMessage id="menu.blog.post" />,
    },
    {
      key: 'applications',
      tab: (
        <span>
          Ứng dụng
        </span>
      ),
    },
    {
      key: 'projects',
      tab: (
        <span>
          Dự án
        </span>
      ),
    },
  ];

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
      return <Articles userId={params.id} />;
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
    <PageContainer extra={<Extra />}>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} actions={[
            <SettingOutlined key="setting" />
          ]}>
            {currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.userName}</div>
                  <div className='mb-4'>{currentUser?.signature}</div>
                  <Space>
                    <Button icon={<UserAddOutlined />} type="primary">Follow</Button>
                    <Button icon={<MessageOutlined />}>Message</Button>
                  </Space>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <TagList tags={roles || []} />
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
    </PageContainer>
  );
};
export default Center;
