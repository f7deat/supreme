import { FormattedMessage } from 'umi';
import { queryFiles } from '@/services/defzone/api';
import { Button, Col, Modal, Row } from 'antd';
import { useEffect, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { CloudUploadOutlined, PaperClipOutlined } from '@ant-design/icons';
import PreviewFile from './preview';

type ExplorerProps = {
  visible: boolean;
  onVisibleChange: any;
  onSelect?: any;
};

const Explorer: React.FC<ExplorerProps> = (props) => {
  const [dataSource, setDataSource] = useState<API.FileListItem[]>();
  const [previewFile, setPreviewFile] = useState<API.FileListItem>();

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
      render: (dom, record) => (
        <Button type="link" onClick={() => setPreviewFile(record)}>
          {dom}
        </Button>
      ),
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
        <Button onClick={() => handleSelect(record.name)} icon={<PaperClipOutlined />} />
      ),
      search: false,
    },
  ];
  return (
    <Modal
      title="File Explorer"
      visible={props.visible}
      width={window.innerWidth - window.innerWidth / 2}
      onCancel={() => props.onVisibleChange(false)}
      bodyStyle={{ padding: 0 }}
    >
      <Row>
        <Col span={6}>
          <div className="p-4">
            <PreviewFile src={previewFile} />
          </div>
          <div className="text-center mt-4">
            <Button icon={<CloudUploadOutlined />}>Upload</Button>
          </div>
        </Col>
        <Col span={18}>
          <ProTable<API.FileListItem>
            columns={columns}
            search={false}
            rowKey="id"
            dataSource={dataSource}
            rowSelection={{}}
            options={{
              search: true,
            }}
          />
        </Col>
      </Row>
    </Modal>
  );
};
export default Explorer;
