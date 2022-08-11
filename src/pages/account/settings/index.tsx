import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Col, Menu, Row } from 'antd';
import BaseView from './components/base';
import BindingView from './components/binding';
import NotificationView from './components/notification';
import SecurityView from './components/security';
import { queryUser } from '@/services/defzone/api';

const { Item } = Menu;

type SettingsStateKeys = 'base' | 'security' | 'binding' | 'notification';
type SettingsState = {
  mode: 'inline' | 'horizontal';
  selectKey: SettingsStateKeys;
};

const Settings: React.FC = () => {

  const [user, setUser] = useState<API.User>();

  useEffect(() => {
    queryUser('').then(response => {
      setUser(response);
    })
  }, [])

  const menuMap: Record<string, React.ReactNode> = {
    base: 'Cơ bản',
    security: 'Bảo mật',
    binding: 'Liên kết',
    notification: 'Thông báo',
  };

  const [initConfig, setInitConfig] = useState<SettingsState>({
    mode: 'inline',
    selectKey: 'base',
  });

  const getMenu = () => {
    return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
  };

  const renderChildren = () => {
    const { selectKey } = initConfig;
    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
        return <SecurityView user={user} />;
      case 'binding':
        return <BindingView />;
      case 'notification':
        return <NotificationView />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <Card>
        <Row gutter={24}>
          <Col span={4}>
            <Menu
              mode={initConfig.mode}
              selectedKeys={[initConfig.selectKey]}
              onClick={({ key }) => {
                setInitConfig({
                  ...initConfig,
                  selectKey: key as SettingsStateKeys,
                });
              }}
            >
              {getMenu()}
            </Menu>
          </Col>
          <Col span={20}>
            <div>{menuMap[initConfig.selectKey]}</div>
            {renderChildren()}
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};
export default Settings;
