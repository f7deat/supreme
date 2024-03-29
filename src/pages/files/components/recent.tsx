import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteFile, queryFiles } from '@/services/defzone/api';
import UploadFiles from './upload';

const RecentFiles: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [visibleUpload, setVisibleUpload] = useState<boolean>(false);

  const handleRemove = async (id: string) => {
    const response = await deleteFile(id);
    if (response.succeeded) {
      message.success('File was deleted!');
      actionRef.current?.reload();
    }
  };

  const columns: ProColumns<API.FileListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Uploaded date',
      dataIndex: 'uploadedDate',
      search: false,
      valueType: 'dateTime'
    },
    {
      title: 'Size',
      render: (dom, entity) => entity.size.toLocaleString() + 'KB',
      search: false,
    },
    {
      title: 'Option',
      search: false,
      render: (dom, entity) => (
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => handleRemove(entity.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];
  return (
    <div>
      <ProTable<API.FileListItem, API.FileRecentParams>
        headerTitle="Recent files"
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical'
        }}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => setVisibleUpload(true)}>
            <PlusOutlined /> Tải lên
          </Button>,
        ]}
        request={queryFiles}
        columns={columns}
        rowSelection={{}}
      />

      <UploadFiles visible={visibleUpload} setVisible={setVisibleUpload} />
    </div>
  );
};
export default RecentFiles;
