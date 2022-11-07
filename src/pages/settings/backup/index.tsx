import { getExport, importData, queryBackups } from '@/services/file';
import { ArrowDownOutlined, ArrowUpOutlined, InboxOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText, PageContainer, ProTable } from '@ant-design/pro-components';
import type { ProColumns, ProFormInstance } from '@ant-design/pro-components';
import type { UploadProps } from 'antd';
import { Button, message, Space } from 'antd';
import { useRef, useState } from 'react';
import { FormattedMessage } from 'umi';
import Dragger from 'antd/lib/upload/Dragger';
import type { RcFile, UploadFile } from 'antd/lib/upload/interface';

const Backup: React.FC = () => {
  const formRef = useRef<ProFormInstance>();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [visbile, setVisible] = useState<boolean>(false);
  const [fileUpload, setFileUpload] = useState<UploadFile>();

  const handleOption = async (values: API.BackupListItem) => {
    setDisabled(true);
    const response = await getExport(values.exportUrl);
    const blob = new Blob(response);
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'file.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDisabled(false);
  };

  const handleImport = (values: API.BackupListItem) => {
    formRef.current?.setFields([
      {
        name: 'importUrl',
        value: values.importUrl,
      },
    ]);
    setVisible(true);
  };

  const columns: ProColumns<API.BackupListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button
          icon={<ArrowDownOutlined />}
          key={0}
          type="primary"
          onClick={() => handleOption(record)}
          disabled={disabled}
        >
          Export
        </Button>,
        <Button
          icon={<ArrowUpOutlined />}
          key={1}
          danger
          onClick={() => handleImport(record)}
          disabled={disabled}
        >
          Import
        </Button>,
      ],
    },
  ];

  const props: UploadProps = {
    name: 'file',
    beforeUpload(file) {
      setFileUpload(file);
      return false;
    },
  };

  const onFinish = async (values: API.BackupListItem) => {
    const formData = new FormData();
    formData.append('file', fileUpload as RcFile);
    const response = await importData(values.importUrl, formData);
    if (response.succeeded) {
      message.success('Imported!');
      setVisible(false);
    }
  };

  return (
    <PageContainer
      title="Backup"
      extra={
        <Space>
          <Button>Backup</Button>
          <Button danger type="primary">
            Restore
          </Button>
        </Space>
      }
    >
      <ProTable request={queryBackups} columns={columns} rowKey="name" />
      <ModalForm
        onVisibleChange={setVisible}
        visible={visbile}
        formRef={formRef}
        title="Import"
        onFinish={onFinish}
      >
        <ProFormText name="importUrl" disabled label="Import Url" />
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or
            other band files
          </p>
        </Dragger>
      </ModalForm>
    </PageContainer>
  );
};

export default Backup;
