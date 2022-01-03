import type { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Drawer, message, Popconfirm } from 'antd';
import { useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
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

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const handleUpdate = (id: number) => {
    setPostId(id);
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
      } else {
        message.error('error!');
      }
    });
  };

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const [currentRow, setCurrentRow] = useState<API.RuleListItem>();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * @vi-VN Cấu hình ngôn ngữ
   * */
  const intl = useIntl();

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
      render: (dom, entity) => entity.view.toLocaleString(),
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'modifiedDate',
      render: (dom, entity) => moment(entity.modifiedDate).format('DD/MM/YYYY hh:mm:ss'),
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: (
            <FormattedMessage
              id="pages.searchTable.nameStatus.default"
              defaultMessage="Shut down"
            />
          ),
          status: 'Default',
        },
        1: {
          text: (
            <FormattedMessage id="pages.searchTable.nameStatus.running" defaultMessage="Running" />
          ),
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
          title="Are you sure to delete this task?"
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
            Viết bài
          </Button>,
        ]}
        request={getPosts}
        columns={columns}
        rowSelection={{}}
      />
      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
      <PostDrawer visible={panelVisible} setVisible={setPanelVisible} postId={postId} />
    </PageContainer>
  );
};

export default Post;
