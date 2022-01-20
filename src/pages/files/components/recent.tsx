import type { ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { queryFiles } from '@/services/defzone/api';
import UploadFiles from './upload';

const RecentFiles: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [visibleUpload, setVisibleUpload] = useState<boolean>(false);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Last modified',
      dataIndex: 'modifiedDate',
    },
    {
      title: 'Option',
      render: () => (
        <Button type="primary" danger>
          <DeleteOutlined />
        </Button>
      ),
    },
  ];
  return (
    <div>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle="Recent files"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
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
