import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { EditOutlined, DeleteOutlined, PlusOutlined, FolderOutlined } from '@ant-design/icons';
import { getUsers } from '@/services/defzone/user';

const User: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * @vi-VN Cấu hình ngôn ngữ
   * */
  const intl = useIntl();

  const handleAdd = () => {};
  const handleRemove = (id: number) => {
    console.log(id);
  };

  const handleUpdate = (id: number) => {
    console.log(id);
  };

  const columns: ProColumns<API.CategoryListItem>[] = [
    {
      title: 'Email',
      dataIndex: 'email',
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
        <Button icon={<FolderOutlined />} />,
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

  return (
    <PageContainer title={intl.formatMessage({ id: 'menu.users', defaultMessage: 'Thành viên' })}>
      <ProTable<API.CategoryListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" danger>
            Import
          </Button>,
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Thêm mới
          </Button>,
        ]}
        request={getUsers}
        columns={columns}
        rowSelection={{}}
      />
    </PageContainer>
  );
};
export default User;
