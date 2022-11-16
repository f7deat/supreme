import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm } from 'antd';
import { useRef } from 'react';
import { FormattedMessage, history } from 'umi';
import { queryPosts, deletePost } from '@/services/ant-design-pro/api';
import AppSetting from '@/appSetting';

const PostList: React.FC = () => {
  const ref = useRef<ActionType>();

  const handleRemove = (id: number) => {
    deletePost(id).then((response) => {
      if (response.succeeded) {
        message.success('deleted!');
        ref.current?.reload();
      } else {
        message.error('error!');
      }
    });
  };

  const columns: ProColumns<API.PostListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      render: (dom, entity) => {
        return (
          <a
            href={`${AppSetting.domain}/post/${entity.url}-${entity.id}.html`}
            target="_blank"
            rel="noreferrer"
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: 'Lượt xem',
      dataIndex: 'view',
      search: false,
      render: (dom, entity) => entity.view.toLocaleString(),
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'modifiedDate',
      valueType: 'dateTime',
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
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => history.push(`/blog/post/center/${record.id}`)}
          key={0}
        />,
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
  return (
    <PageContainer
      extra={
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => history.push('/blog/post/center')}
        >
          Writing
        </Button>
      }
    >
      <ProTable<API.PostListItem, API.PageParams>
        headerTitle="Danh sách"
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={queryPosts}
        columns={columns}
        rowSelection={{}}
        actionRef={ref}
      />
    </PageContainer>
  );
};

export default PostList;
