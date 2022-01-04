import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  getListParrentCategory,
} from '@/services/defzone/category';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProForm, { DrawerForm } from '@ant-design/pro-form';
import { useEffect, useRef, useState } from 'react';

const Category: React.FC = () => {
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * @vi-VN Cấu hình ngôn ngữ
   * */
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const [drawerVisit, setDrawerVisit] = useState<boolean>();
  const [parrentCategries, setParrentCategories] = useState<any>();
  const ref = useRef<ActionType>();

  useEffect(() => {
    getListParrentCategory().then((response) =>
      setParrentCategories(
        response.map((x: API.CategoryListItem) => {
          return { value: x.id, label: x.name };
        }),
      ),
    );
  }, []);

  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const handleFinish = async (values: any) => {
    addCategory(values).then((response) => {
      if (response.succeeded) {
        message.success('succeeded!');
      } else {
        message.error(response.message);
      }
    });
  };

  const handleRemove = (id: number) => {
    deleteCategory(id).then((response) => {
      if (response.succeeded) {
        ref?.current?.reload();
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    });
  };

  const handleUpdate = (id: number) => {
    getCategory(id).then(async (response) => {
      setDrawerVisit(true);
      await waitTime();
      if (formRef.current) {
        console.log('zxcz');
      }
      formRef.current?.setFields([
        {
          name: 'name',
          value: response.name,
        },
        {
          name: 'normalizeName',
          value: response.normalizeName,
        },
        {
          name: 'description',
          value: response.description,
        },
        {
          name: 'parrentId',
          value: response.parrentId,
        },
        {
          name: 'status',
          value: response.status,
        },
        {
          name: 'thumbnail',
          value: response.thumbnail,
        },
      ]);
    });
  };

  const columns: ProColumns<API.CategoryListItem>[] = [
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Button type="primary" icon={<EditOutlined />} onClick={() => handleUpdate(record.id)} />,
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => handleRemove(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer title="Danh mục">
      <ProTable<API.CategoryListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" danger>
            Import
          </Button>,
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setDrawerVisit(true)}>
            Thêm mới
          </Button>,
        ]}
        request={getCategories}
        columns={columns}
        rowSelection={{}}
        actionRef={ref}
      />
      <DrawerForm<{
        name: string;
        company: string;
      }>
        title="Manager"
        formRef={formRef}
        onVisibleChange={setDrawerVisit}
        visible={drawerVisit}
        autoFocusFirstInput
        drawerProps={{
          forceRender: true,
          destroyOnClose: true,
        }}
        onFinish={handleFinish}
      >
        <ProForm.Group>
          <ProFormText name="name" width="md" label="Tên danh mục" />
          <ProFormText
            width="md"
            name="normalizeName"
            label="Normalize name"
            tooltip="Name without special character"
          />
        </ProForm.Group>
        <ProFormTextArea name="description" label="Description" />
        <ProForm.Group>
          <ProFormSelect
            options={parrentCategries}
            width="md"
            name="parrentId"
            label="Danh mục cha"
          />
          <ProFormSelect
            width="md"
            initialValue={1}
            options={[
              {
                value: 0,
                label: 'Draft',
              },
              {
                value: 1,
                label: 'Active',
              },
            ]}
            name="status"
            label="Trạng thái"
          />
        </ProForm.Group>
        <ProFormText name="thumbnail" label="Thumbnail" />
      </DrawerForm>
    </PageContainer>
  );
};

export default Category;
