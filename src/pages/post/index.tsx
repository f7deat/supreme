import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';
import { FormattedMessage } from 'umi';
import { getPosts, deletePost } from '@/services/ant-design-pro/api';
import PostDrawer from './components/post-panel';
import moment from 'moment';
import { DOMAIN } from '@/services/config';

const Post: React.FC = () => {
  /**
   * @en-US: Pop-up window of new window
   * @vi-VN: Cửa sổ thêm/sửa
   *  */
  const [panelVisible, setPanelVisible] = useState<boolean>(false);
  const [postId, setPostId] = useState<number>(0);
  const ref = useRef<ActionType>();

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const reload = () => {
    ref.current?.reload();
  };

  const handleUpdate = (id: number) => {
    setPostId(id);
    waitTime();
    setPanelVisible(true);
  };

  const handleAdd = () => {
    setPostId(0);
    waitTime(2000);
    setPanelVisible(true);
  };
  const handleRemove = (id: number) => {
    deletePost(id).then((response) => {
      if (response.succeeded) {
        message.success('deleted!');
        reload();
      } else {
        message.error('error!');
      }
    });
  };

  const columns: ProColumns<API.PostListItem>[] = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      render: (dom, entity) => {
        return (
          <a href={`${DOMAIN}/post/${entity.url}-${entity.id}.html`} target="_blank">
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
      search: false,
      render: (dom, entity) => moment(entity.modifiedDate).format('DD/MM/YYYY hh:mm:ss'),
    },
    {
      title: <FormattedMessage id="global.status" defaultMessage="Status" />,
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: 'Draft',
          status: 'Default',
        },
        1: {
          text: 'Active',
          status: 'Processing',
        },
        2: {
          text: (
            <FormattedMessage id="pages.searchTable.nameStatus.online" defaultMessage="Online" />
          ),
          status: 'Success',
        },
        3: {
          text: (
            <FormattedMessage
              id="pages.searchTable.nameStatus.abnormal"
              defaultMessage="Abnormal"
            />
          ),
          status: 'Error',
        },
      },
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button type="primary" icon={<EditOutlined />} onClick={() => handleUpdate(record.id)} />,
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
    <PageContainer title="Bài viết">
      <ProTable<API.PostListItem, API.PageParams>
        headerTitle="Danh sách"
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" danger>
            Import
          </Button>,
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Viết bài
          </Button>,
        ]}
        request={getPosts}
        columns={columns}
        rowSelection={{}}
        actionRef={ref}
      />
      <PostDrawer
        visible={panelVisible}
        setVisible={setPanelVisible}
        postId={postId}
        reload={reload}
      />
    </PageContainer>
  );
};

export default Post;
