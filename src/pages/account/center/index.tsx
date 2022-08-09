import { HomeOutlined, ContactsOutlined, ClusterOutlined, EditOutlined, UserAddOutlined, MessageOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Row, Space, Tag, Image, Typography, Empty, Tooltip, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Link, useAccess, useParams } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import type { tabKeyType } from './data.d';
import { queryUser } from '@/services/defzone/api';
import { queryRoleByUser } from '@/services/defzone/user';
import { FormattedMessage } from 'umi';
import RoleComponent from './components/roles';

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div>
      <div className='font-bold mb-2'>Nhóm</div>
      {(tags || []).map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
};

const Center: React.FC<RouteChildrenProps> = () => {

  const { canAdmin } = useAccess()

  const params = useParams<any>();

  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  const [currentUser, setCurrentUser] = useState<API.User>();
  const [roles, setRoles] = useState<any>();
  const [visibleRole, setVisibleRole] = useState<boolean>(false);

  useEffect(() => {
    queryUser(params.id).then((response) => {
      setCurrentUser(response);
      queryRoleByUser(response.id).then((rolesResponse) => {
        setRoles(rolesResponse);
      });
    });

  }, [params.id]);


  const operationTabList = [
    {
      key: 'articles',
      tab: <FormattedMessage id="menu.blog.post" />,
    },
    {
      key: 'applications',
      tab: 'Ứng dụng',
    },
    {
      key: 'projects',
      tab: 'Dự án',
    },
  ];

  const renderUserInfo = ({ phoneNumber, group }: Partial<API.CurrentUser>) => {
    return (
      <div>
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
    return <Empty />;
  };

  const onConfirm = () => {

  }

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col span={7}>
          <Card bordered={false} actions={[
            <Link to="/account/settings" key="setting">
              <SettingOutlined />
            </Link>,
            <EditOutlined key="edit" />,
            <Popconfirm title="Are you sure?" onConfirm={onConfirm} key="delete" disabled={canAdmin}>
              <DeleteOutlined />
            </Popconfirm>,
            <Tooltip key="role" title="Assign roles">
              <UserAddOutlined onClick={() => setVisibleRole(true || canAdmin)} />
            </Tooltip>
          ]}>
            {currentUser && (
              <div>
                <div className="text-center">
                  <div className='mb-4'>
                    <Image src={currentUser.avatar} width={250} />
                  </div>
                  <Typography.Title level={4}>{currentUser.email}</Typography.Title>
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
        <Col span={17}>
          <Card
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
      <RoleComponent visible={visibleRole} onVisibleChange={setVisibleRole} />
    </PageContainer>
  );
};
export default Center;
