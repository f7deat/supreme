import { FormattedMessage } from 'umi';
import { queryFiles } from '@/services/defzone/api';
import { Button, Drawer, Image, Popover, Table } from 'antd';
import { useEffect, useState } from 'react';
import type { ColumnType } from 'antd/lib/table';
import { DOMAIN } from '@/services/config';

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
      }).then((response) => setDataSource(response.data));
    }
  }, [props.visible]);

  const handleSelect = (name: string) => {
    props.onSelect(`${DOMAIN}/files/${name}`);
    props.onVisibleChange(false);
  };

  const columns: ColumnType<API.FileListItem>[] = [
    {
      title: '#',
      render: (dom: any, record: any, index: number) => index + 1,
    },
    {
      title: <FormattedMessage defaultMessage="Name" id="global.name" />,
      render: (dom, record) => PreViewFile(record),
    },
    {
      title: 'Uploaded date',
      dataIndex: 'uploadedDate',
    },
    {
      title: 'Size',
      render: (value) => value.size + 'KB',
    },
    {
      title: 'Action',
      render: (value, record) => (
        <Button type="primary" onClick={() => handleSelect(record.name)}>
          Choose
        </Button>
      ),
    },
  ];
  return (
    <Drawer
      visible={props.visible}
      width={window.innerWidth - 500}
      onClose={() => props.onVisibleChange(false)}
    >
      <Table<API.FileListItem>
        columns={columns}
        key="id"
        dataSource={dataSource}
        rowSelection={{}}
      />
    </Drawer>
  );
};
export default Explorer;
