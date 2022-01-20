import { PageContainer } from '@ant-design/pro-layout';
import { CloudDownloadOutlined, CloudUploadOutlined, FileImageOutlined } from '@ant-design/icons';
import { Button, Col, Progress, Row, Space, Typography } from 'antd';
import { getBackup } from '../../services/defzone/api';
import { useState } from 'react';
import Import from './components/import';
import RecentFiles from './components/recent';

const Files: React.FC = () => {
  const { Text } = Typography;
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
      <Row gutter={16}>
        <Col span={18}>
          <RecentFiles />
        </Col>
        <Col span={6}>
          <div className="p-4 bg-white rounded">
            <div className="flex justify-between items-center">
              <h1 className="text-primary">45.5GB</h1>
              <h1>50GB</h1>
            </div>
            <div className="flex justify-between">
              <Text type="secondary">Used</Text>
              <span className="text-primary">Upgrade</span>
            </div>
            <Progress percent={30} showInfo={false} className="mb-4" />
            <div>
              <div className="flex gap-4">
                <div
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: '#eff0fd',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FileImageOutlined />
                </div>
                <div className="flex items-center" style={{ flexGrow: 1 }}>
                  <div style={{ flexGrow: 1 }}>
                    <div>
                      <b>Image</b>
                    </div>
                    <Text type="secondary" className="text-sm">
                      1,782 files
                    </Text>
                  </div>
                  <h3>36GB</h3>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Import visible={visibleImport} setVisible={setVisibleImport} />
    </PageContainer>
  );
};

export default Files;
