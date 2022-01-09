import { getRoles } from '@/services/defzone/user';
import { FolderViewOutlined, SyncOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';

type RoleProps = {
  setRoleId: any;
  roleId: string;
};

const Role: React.FC<RoleProps> = (props) => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * @vi-VN Cấu hình ngôn ngữ
   * */
  const columns: ProColumns<API.RoleListItem>[] = [
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Tác vụ',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          icon={<FolderViewOutlined />}
          danger={props.roleId === entity.id}
          onClick={() => props.setRoleId(entity.id)}
        />,
      ],
      width: 60,
    },
  ];

  return (
    <div>
      <ProTable<API.RoleListItem, API.PageParams>
        headerTitle="Quyền"
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" icon={<SyncOutlined />}>
            Đồng bộ
          </Button>,
        ]}
        request={getRoles}
        columns={columns}
        rowSelection={{}}
      />
    </div>
  );
};

export default Role;
