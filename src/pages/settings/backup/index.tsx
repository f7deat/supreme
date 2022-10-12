import { queryBackups } from '@/services/file';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { FormattedMessage } from 'umi';

const Backup: React.FC = () => {
  const handleOption = (values: any) => {
    console.log(values);
  };

  const columns: ProColumns<any>[] = [
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
        >
          Export
        </Button>,
        <Button icon={<ArrowUpOutlined />} key={1} danger onClick={() => handleOption(record)}>
          Import
        </Button>,
      ],
    },
  ];

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
    </PageContainer>
  );
};

export default Backup;
