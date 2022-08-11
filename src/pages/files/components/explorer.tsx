import { FormattedMessage } from 'umi';
import { queryFiles } from '@/services/defzone/api';
import { Button, Drawer, Image, Popover } from 'antd';
import { useEffect, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

type ExplorerProps = {
  visible: boolean;
  onVisibleChange: any;
  onSelect?: any;
};

const PreViewFile = (file: API.FileListItem) => {
  switch (file.extension.toLowerCase()) {
    case '.png':
    case '.jpg':
      return (
        <Popover
          content={<Image src={`https://defzone.net/files/${file.name}`} width={100} />}
          className="font-bold text-primary cursor-default"
        >
          {file.name}
        </Popover>
      );
    default:
      return <div className="font-bold text-primary cursor-default">{file.name}</div>;
  }
};

const Explorer: React.FC<ExplorerProps> = (props) => {
  const [dataSource, setDataSource] = useState<API.FileListItem[]>();
  useEffect(() => {
    if (props.visible) {
      queryFiles({
        current: 1,
        pageSize: 10,
        name: '',
      }).then((response) => setDataSource(response.data));
    }
  }, [props.visible]);

  const handleSelect = (name: string) => {
    props.onSelect(`/files/${name}`);
    props.onVisibleChange(false);
  };

  const columns: ProColumns<API.FileListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: <FormattedMessage defaultMessage="Name" id="global.name" />,
      dataIndex: 'name',
      render: (dom, record) => PreViewFile(record),
    },
    {
      title: 'Uploaded date',
      dataIndex: 'uploadedDate',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: 'Size',
      render: (dom, record) => record.size + 'KB',
      search: false,
    },
    {
      title: 'Action',
      render: (value, record) => (
        <Button type="primary" onClick={() => handleSelect(record.name)}>
          Choose
        </Button>
      ),
      search: false,
    },
  ];
  return (
    <Drawer
      title="File Explorer"
      visible={props.visible}
      width={window.innerWidth - window.innerWidth / 2}
      onClose={() => props.onVisibleChange(false)}
    >
      <ProTable<API.FileListItem>
        columns={columns}
        search={false}
        rowKey="id"
        dataSource={dataSource}
        rowSelection={{}}
        options={{
          search: true
        }}

      />
    </Drawer>
  );
};
export default Explorer;
