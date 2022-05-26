import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Col, message, Popconfirm, Popover, Row, Select } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  FolderOutlined,
  CheckCircleTwoTone,
} from '@ant-design/icons';
import { addToRole, deleteUser, getUsers } from '@/services/defzone/user';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { useRef, useState } from 'react';
import Role from './components/role';
import { history } from 'umi';

const User: React.FC = () => {
  const { Option } = Select;
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * @vi-VN Cấu hình ngôn ngữ
   * */
  const intl = useIntl();
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleAddToRole, setVisibleAddToRole] = useState<boolean>(false);
  const [roleId, setRoleId] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [roleName, setRoleName] = useState<string>('')
  const actionRef = useRef<ActionType>()

  const handleRemove = (id: string) => {
    deleteUser(id).then(response => {
      if (response.succeeded) {
        message.success('succeeded!')
        actionRef.current?.reload()
      }
    })
  };

  const handleAddToRole = () => {
    addToRole(userId, roleName).then(response => {
      if (response.succeeded) {
        message.success('Succeeded!')
      }
    })
  }

  const AddToRole = () => (
    <div className='flex'>
      <Select defaultValue="member" onChange={(value) => setRoleName(value)}>
        <Option value="member">Member</Option>
        <Option value="admin">Admin</Option>
      </Select>
      <Button onClick={handleAddToRole}>Add</Button>
    </div>
  )

  const handleUpdate = (id: string) => {
    history.push(`/account/center/${id}`)
  };

  const ActiveIcon = (active: boolean) => {
    let twoToneColor = '#eb2f96';
    if (active) {
      twoToneColor = '#52c41a';
    }
    return <CheckCircleTwoTone twoToneColor={twoToneColor} />;
  };

  const columns: ProColumns<API.UserListItem>[] = [
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
        <Button type="primary" icon={<EditOutlined />} onClick={() => handleUpdate(record.id)} />,
        <Popover
          content={<AddToRole />}
          title="Add to role"
          trigger="click"
          visible={visibleAddToRole}
          onVisibleChange={setVisibleAddToRole}
        >
          <Button icon={<FolderOutlined />} onClick={() => setUserId(record.id)} />
        </Popover>,
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => handleRemove(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>,
      ],
    },
  ];

  const Extra = () => (
    <div>
      <Button icon={<PlusOutlined />} type="primary" onClick={() => history.push('/account/new')}>Create new</Button>
    </div>
  )

  return (
    <PageContainer title={intl.formatMessage({ id: 'menu.users', defaultMessage: 'Thành viên' })} extra={<Extra />}>
      <Row gutter={16}>
        <Col span={10}>
          <Role roleId={roleId} setRoleId={setRoleId} />
        </Col>
        <Col span={14}>
          <ProTable<API.UserListItem, API.PageParams>
            headerTitle={intl.formatMessage({
              id: 'pages.searchTable.title',
              defaultMessage: 'Enquiry form',
            })}
            rowKey="id"
            search={{
              layout: 'vertical'
            }}
            request={getUsers}
            columns={columns}
            rowSelection={{}}
            actionRef={actionRef}
          />
          <DrawerForm visible={visible} onVisibleChange={setVisible}>
            <ProFormText name="phoneNumber" />
          </DrawerForm>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default User;
