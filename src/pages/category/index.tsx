import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Image, message, Popconfirm, Space } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { EditOutlined, DeleteOutlined, PlusOutlined, FolderOpenOutlined } from '@ant-design/icons';
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  getListParrentCategory,
  updateCategory,
} from '@/services/defzone/category';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProForm, { DrawerForm } from '@ant-design/pro-form';
import { useEffect, useRef, useState } from 'react';
import Explorer from '../files/components/explorer';

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
  const [previewImage, setPreviewImage] = useState<string>();
  const [explorerVisible, setExplorerVisible] = useState<boolean>(false);
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
    if (values.id) {
      const response = await updateCategory(values);
      if (response.succeeded) {
        message.success('succeeded!');
        setDrawerVisit(false);
      } else {
        message.error(response.message);
      }
    } else {
      const response = await addCategory(values);
      if (response.succeeded) {
        message.success('succeeded!');
        setDrawerVisit(false);
      } else {
        message.error(response.message);
      }
    }
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
      setPreviewImage(response.thumbnail);
    });
  };

  const columns: ProColumns<API.CategoryListItem>[] = [
    {
      title: 'Tên',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      title: <FormattedMessage id="global.status" defaultMessage="Status" />,
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Đang ẩn',
          status: 'Default',
        },
        1: {
          text: 'Hoạt động',
          status: 'Processing',
        },
      },
      width: 150,
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

  const handleSelectThumbnail = (url: string) => {
    formRef.current?.setFieldsValue({ thumbnail: url })
    setPreviewImage(url)
  }

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
      <DrawerForm
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
        width={736}
      >
        <ProFormText name="id" hidden={true} />
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
        <Space align="end">
          <ProFormText name="thumbnail" label="Thumbnail" width="xl" />
          <Button
            style={{ marginBottom: 24 }}
            icon={<FolderOpenOutlined />}
            onClick={() => setExplorerVisible(true)}
          >
            Explorer
          </Button>
        </Space>

        <Image src={previewImage} />
      </DrawerForm>
      <Explorer
        visible={explorerVisible}
        onVisibleChange={setExplorerVisible}
        onSelect={handleSelectThumbnail}
      />
    </PageContainer>
  );
};

export default Category;
