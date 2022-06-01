import { addMenu, deleteMenu, queryFindMenu, queryMenus, queryAllParrentMenu, updateMenu } from '@/services/defzone/api';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormSelect } from '@ant-design/pro-form';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm } from 'antd';
import moment from 'moment';
import { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

const MenuPage: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState(false);

  const handleRemove = (id: string) => {
    deleteMenu(id).then(response => {
      if (response.succeeded) {
        message.success(response.message)
        actionRef.current?.reload();
      } else {
        message.error(response.message)
      }
    })
  }

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const handleUpdate = async (id: string) => {
    setVisible(true);
    const response = await queryFindMenu(id);
    await waitTime();
    formRef.current?.setFields([
      {
        name: 'id',
        value: response.id,
      },
      {
        name: 'name',
        value: response.name,
      },
      {
        name: 'url',
        value: response.url,
      },
      {
        name: 'icon',
        value: response.icon,
      },
      {
        name: 'parrentId',
        value: response.parrentId,
      },
      {
        name: 'status',
        value: response.status,
      }
    ])
  }

  const columns: ProColumns<API.MenuListItem>[] = [
    {
      title: 'Tiêu đề',
      dataIndex: 'name',
    },
    {
      title: 'Modified Date',
      dataIndex: 'modifiedDate',
      render: (_, record) => moment(record.modifiedDate).format('DD/MM/YYYY hh:mm:ss'),
      search: false
    },
    {
      title: <FormattedMessage id="global.status" defaultMessage="Status" />,
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: 'Draft',
          status: 'Default',
        },
        1: {
          text: 'Active',
          status: 'Processing',
        },
      },
    },
    {
      title: '',
      valueType: 'option',
      render: (_, record) => [
        <Button type='primary' icon={<EditOutlined />} onClick={() => handleUpdate(record.id)} key={0} />,
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
    if (values.id) {
      updateMenu(values).then(response => {
        if (response.succeeded) {
          message.success(response.message);
          actionRef.current?.reload();
          setVisible(false)
        }
      })
    } else {
      addMenu(values).then((response) => {
        if (response.succeeded) {
          actionRef.current?.reload();
          message.success('succeeded');
          setVisible(false)
        }
      });
    }
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
        <ProFormText name="id" hidden />
        <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'global.name',
          })}
        />
        <ProFormText name="url" label="Url" />
        <ProFormText name="icon" label="Icon" />
        <ProFormSelect name="parrentId" label="Parrent" request={queryAllParrentMenu} />
        <ProFormSelect name="status" label="Status" options={[
          {
            label: 'Draft',
            value: 0
          },
          {
            label: 'Active',
            value: 1
          }
        ]} />
      </DrawerForm>
    </PageContainer>
  );
};

export default MenuPage;
