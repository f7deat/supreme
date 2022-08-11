import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Avatar, Button, Dropdown, Menu, message, Popconfirm, Space, Tooltip } from 'antd';
import { FormattedMessage, Link, useIntl } from 'umi';
import {
  DeleteOutlined,
  PlusOutlined,
  CheckCircleTwoTone,
  DownOutlined,
  FolderViewOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { deleteUser, getUsers, queryRole } from '@/services/defzone/user';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { useRef, useState } from 'react';
import { history } from 'umi';
import { useEffect } from 'react';

const User: React.FC = () => {
  const intl = useIntl();

  const [visible, setVisible] = useState<boolean>(false);
  const [roles, setRoles] = useState<API.RoleListItem[]>([]);

  const actionRef = useRef<ActionType>();

  useEffect(() => {
    queryRole().then(response => {
      setRoles(response)
    })
  }, [])

  const handleRemove = (id: string) => {
    deleteUser(id).then((response) => {
      if (response.succeeded) {
        message.success('succeeded!');
        actionRef.current?.reload();
      }
    });
  };

  const handleUpdate = (id: string) => {
    history.push(`/account/center/${id}`);
  };

  const ActiveIcon = (active: boolean) => {
    let twoToneColor = '#eb2f96';
    if (active) {
      twoToneColor = '#52c41a';
    }
    return <CheckCircleTwoTone twoToneColor={twoToneColor} />;
  };

  const columns: ProColumns<API.User>[] = [
    {
      title: 'Username',
      dataIndex: 'userName',
      render: (dom, record) => (
        <Space>
          <Avatar src={record.avatar} />
          <Link to={`/account/center/${record.id}`}>{record.userName}</Link>
        </Space>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (dom, entity) => (
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {ActiveIcon(entity.emailConfirmed)}
          {dom}
        </div>
      ),
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button
          type="primary"
          key={0}
          icon={<FolderViewOutlined />}
          onClick={() => handleUpdate(record.id)}
        />,
        <Tooltip title="Confirm email" key={1}>
          <Button icon={<MailOutlined />} disabled={record.emailConfirmed} />
        </Tooltip>,
        <Popconfirm
          key={2}
          title="Are you sure to delete this?"
          onConfirm={() => handleRemove(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>,
      ]
    },
  ];

  const Extra = () => (
    <div>
      <Button icon={<PlusOutlined />} type="primary" onClick={() => history.push('/account/new')}>
        Create new
      </Button>
    </div>
  );

  const menu = (
    <Menu
      items={roles?.map(role => {
        return {
          key: role.id,
          label: role.name
        }
      })}
    />
  );

  return (
    <PageContainer
      title={intl.formatMessage({ id: 'menu.users', defaultMessage: 'Thành viên' })}
      extra={<Extra />}
    >
      <ProTable<API.User, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={getUsers}
        columns={columns}
        rowSelection={{}}
        actionRef={actionRef}
        toolBarRender={() => [
          <Dropdown key={0} overlay={menu}>
            <Button>
              <span>Role</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        ]}
      />
      <DrawerForm visible={visible} onVisibleChange={setVisible}>
        <ProFormText name="phoneNumber" />
      </DrawerForm>
    </PageContainer>
  );
};
export default User;
