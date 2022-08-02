import React, { useCallback } from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { FormattedMessage, history, useIntl, useModel } from 'umi';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import type { MenuInfo } from 'rc-menu/lib/interface';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  const { query = {}, search, pathname } = history.location;
  const { redirect } = query;
  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    localStorage.removeItem('def_token')
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname + search,
      }),
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { initialState, setInitialState } = useModel('@@initialState');

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * @vi-VN Cấu hình ngôn ngữ
   * */
  const intl = useIntl();

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      let url = `/account/${key}`;
      if (key === 'logout') {
        setInitialState((s) => ({ ...s, currentUser: undefined }));
        loginOut();
        return;
      } else if (key === 'center') {
        url += `/${initialState?.currentUser?.id}`
      }
      history.push(url);
    },
    [initialState?.currentUser?.id, setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.userName) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          <FormattedMessage id="menu.profile" defaultMessage="Hồ sơ" />
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          <FormattedMessage id="menu.account.settings" defaultMessage="Cài đặt" />
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="billing">
          <SettingOutlined />
          <FormattedMessage id="menu.account.billing" defaultMessage="Thanh toán" />
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        {intl.formatMessage({
          id: 'menu.account.logout',
          defaultMessage: 'Logout',
        })}
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
        <span className={`${styles.name} anticon`}>{currentUser.userName}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
