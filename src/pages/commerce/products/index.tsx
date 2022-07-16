import AppSetting from '@/appSetting';
import { deletePost } from '@/services/ant-design-pro/api';
import { queryProducts } from '@/services/defzone/commerce';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Avatar, Button, message, Popconfirm, Space } from 'antd';
import moment from 'moment';
import { useRef } from 'react';
import { Link, FormattedMessage } from 'umi';

const ProducPage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const handleRemove = (id: number) => {
    deletePost(id).then((response) => {
      if (response.succeeded) {
        message.success('deleted!');
        actionRef.current?.reload();
      } else {
        message.error('error!');
      }
    });
  };

  const columns: ProColumns<API.ProductListItem>[] = [
    {
      title: 'Name',
      dataIndex: 'title',
      render: (_, record) => (
        <Space>
          <Avatar src={record.thumbnail} />
          <a href={`${AppSetting.domain}/shop/product/${record.url}-${record.id}`} target="_blank">{record.title}</a>
        </Space>
      ),
    },
    {
      title: 'Created',
      render: (_, record) => moment(record.modifiedDate).format('DD/MM/YYYY hh:mm:ss'),
      search: false,
    },
    {
      title: 'View',
      dataIndex: 'view',
      search: false,
    },
    {
      title: <FormattedMessage id="global.status" defaultMessage="Status" />,
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Draft',
          status: 'Default',
        },
        1: {
          text: 'Active',
          status: 'Processing',
        },
      },
    },
    {
      valueType: 'option',
      render: (_, record) => [
        <Link to={`/commerce/products/center/${record.id}`} key={0}>
          <Button type="primary" icon={<EditOutlined />} />
        </Link>,
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => handleRemove(record.id)}
          okText="Yes"
          cancelText="No"
          key={1}
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>,
      ],
    },
  ];

  const Extra = () => (
    <Link to="/commerce/products/center">
      <Button type="primary">Add new</Button>
    </Link>
  );

  return (
    <PageContainer extra={<Extra />}>
      <ProTable<API.ProductListItem, API.PageParams>
        headerTitle="Danh sách"
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={queryProducts}
        columns={columns}
        rowSelection={{}}
        actionRef={actionRef}
      />
    </PageContainer>
  );
};

export default ProducPage;
