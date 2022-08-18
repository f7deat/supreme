import AppSetting from '@/appSetting';
import CategoryListComponent from '@/components/category-list';
import { addMenu, deleteMenu, queryFindMenu, queryMenus, queryAllParrentMenu, updateMenu, syncMenu, backupMenu } from '@/services/defzone/api';
import { DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Input, message, Popconfirm, Popover } from 'antd';
import moment from 'moment';
import { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

const MenuPage: React.FC = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState(false);
  const [visibleCategory, setVisibleCategory] = useState(false);

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

  const renderUrl = (rawUrl: string) => {
    if (rawUrl.startsWith('http')) {
      return rawUrl;
    }
    return AppSetting.domain + rawUrl;
  }

  const columns: ProColumns<API.MenuListItem>[] = [
    {
      title: 'Tiêu đề',
      render: (_, record) => <a href={`${renderUrl(record.url)}`} target="_blank" rel="noreferrer">{record.name}</a>,
      dataIndex: 'name',
    },
    {
      title: 'Url',
      dataIndex: 'url',
      search: false
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

  const sync = () => {
    syncMenu().then(response => {
      if (response.succeeded) {
        message.success('succeeded');
        actionRef.current?.reload()
      }
    })
  }

  const backup = async () => {
    const response = await backupMenu()
    const blob = new Blob([JSON.stringify(response)], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `menu-${moment().format('YYYY-MM-DD')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const toolBarRender = () => [
    <Button key={0} icon={<PlusOutlined />} onClick={() => setVisible(true)}>
      Add New
    </Button>,
    <Button key={1} icon={<SyncOutlined />} onClick={() => sync()}>
      Import
    </Button>,
    <Button key={2} icon={<DownloadOutlined />} onClick={() => backup()}>
      Backup
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
        title={intl.formatMessage({
          id: 'global.settings'
        })}
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
          required
          label={intl.formatMessage({
            id: 'global.name',
          })}
        />
        <Popover
          content={<CategoryListComponent />}
          title="Choose one category"
          trigger="click"
          visible={visibleCategory}
          onVisibleChange={setVisibleCategory}
        >
          <ProForm.Item name="url" label="Url" required>
            <Input.Search allowClear onSearch={() => setVisibleCategory(true)} />
          </ProForm.Item>
        </Popover>
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
