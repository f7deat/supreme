import { PageContainer } from '@ant-design/pro-layout';
import { CloudDownloadOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { getBackup } from '../../services/defzone/api';
import { useState } from 'react';
import Import from './components/import';

const Files: React.FC = () => {
  const [visibleImport, setVisibleImport] = useState<boolean>(false);

  const handleBackup = async () => {
    const response = await getBackup();
    // Create blob link to download
    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `backup.json`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  };

  const Extra = () => (
    <Space>
      <Button icon={<CloudDownloadOutlined />} type="primary" onClick={() => handleBackup()}>
        Backup
      </Button>
      <Button
        icon={<CloudUploadOutlined />}
        type="primary"
        danger
        onClick={() => setVisibleImport(true)}
      >
        Import
      </Button>
    </Space>
  );

  return (
    <PageContainer title="File Manager" extra={<Extra />}>
      <div />
      <Import visible={visibleImport} setVisible={setVisibleImport} />
    </PageContainer>
  );
};

export default Files;
