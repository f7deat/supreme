import { getRoles, syncRole } from '@/services/defzone/user';
import { FolderViewOutlined, SyncOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message } from 'antd';

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

  const sync = () => {
    syncRole().then(response => {
      if (response.succeeded) {
        console.log(response)
      } else {
        message.error(response.errors[0].description)
      }
    })
  }

  return (
    <div>
      <ProTable<API.RoleListItem, API.PageParams>
        headerTitle="Quyền"
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" icon={<SyncOutlined />} onClick={sync}>
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
