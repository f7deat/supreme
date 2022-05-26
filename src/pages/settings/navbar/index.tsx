import { addMenu, deleteMenu, queryMenus, queryParrents } from '@/services/defzone/api';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormSelect } from '@ant-design/pro-form';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';
import { useIntl } from 'umi';

const MenuPage: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState(false);

  const handleRemove = (id: number) => {
    deleteMenu(id).then(response => {
      if (response.succeeded) {
        message.success(response.message)
        actionRef.current?.reload();
      } else {
        message.error(response.message)
      }
    })
  }

  const columns: ProColumns<API.MenuListItem>[] = [
    {
      title: 'Tiêu đề',
      dataIndex: 'name',
    },
    {
      title: 'Modified Date',
      dataIndex: 'modifiedDate',
      search: false
    },
    {
      title: '',
      render: (_, record) => [
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => handleRemove(record.id)}
          okText="Yes"
          cancelText="No"
          key={1}
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ]
    }
  ];

  async function handleFinish(values: API.MenuListItem) {
    addMenu(values).then((response) => {
      if (response.succeeded) {
        actionRef.current?.reload();
        message.success('succeeded');
      }
    });
  }

  const toolBarRender = () => [
    <Button icon={<PlusOutlined />} onClick={() => setVisible(true)}>
      Add New
    </Button>,
  ];

  return (
    <PageContainer title="Navbar">
      <ProTable<API.MenuListItem, API.PageParams>
        headerTitle="Danh sách"
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={queryMenus}
        columns={columns}
        rowSelection={{}}
        toolBarRender={toolBarRender}
        actionRef={actionRef}
      />
      <DrawerForm<API.MenuListItem>
        title="新建表单"
        formRef={formRef}
        autoFocusFirstInput
        drawerProps={{
          destroyOnClose: true,
        }}
        onFinish={handleFinish}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'global.name',
          })}
        />
        <ProFormText name="url" label="Url" />
        <ProFormSelect name="parrentId" label="Parrent" request={queryParrents} />
      </DrawerForm>
    </PageContainer>
  );
};

export default MenuPage;
