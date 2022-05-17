import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Image, message, Popconfirm } from 'antd';
// @ts-ignore
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
import { DrawerForm } from '@ant-design/pro-form';
import { useEffect, useRef, useState } from 'react';
import Explorer from '../files/components/explorer';
import PostCategory from './components/posts';
import CategoryImport from './components/import';

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
  const [visiblePosts, setVisiblePosts] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [visibleImport, setVisibleImport] = useState<boolean>(false);
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

  const handleAdd = () => {
    formRef.current?.resetFields();
    setPreviewImage('');
    setDrawerVisit(true);
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

  const handleShowPosts = (id: number) => {
    setSelectedCategoryId(id);
    setVisiblePosts(true);
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
      width: 150,
      render: (_, record) => [
        <Button key={0} icon={<FolderOpenOutlined />} onClick={() => handleShowPosts(record.id)} />,
        <Button
          key={1}
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleUpdate(record.id)}
        />,
        <Popconfirm
          key={2}
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
    formRef.current?.setFieldsValue({ thumbnail: url });
    setPreviewImage(url);
  };

  const Extra = () => (
    <div>
      <Button type="primary" danger onClick={() => setVisibleImport(true)}>
        Import
      </Button>
    </div>
  );

  return (
    <PageContainer
      title={intl.formatMessage({
        id: 'menu.blog.category',
        defaultMessage: 'Category',
      })}
      extra={<Extra />}
    >
      <ProTable<API.CategoryListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'menu.blog.category',
          defaultMessage: 'Categry',
        })}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Button type="primary" key={0} icon={<PlusOutlined />} onClick={handleAdd}>
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
      >
        <ProFormText name="id" hidden={true} />
        <div className="flex gap-4">
          <div className="w-1/2">
            <ProFormText name="name" label="Tên danh mục" className="w-full" />
          </div>
          <div className="w-1/2">
            <ProFormText
              name="normalizeName"
              label="Normalize name"
              tooltip="Name without special character"
              className="w-full"
            />
          </div>
        </div>
        <ProFormTextArea name="description" label="Description" />
        <div className="flex gap-4">
          <div className="w-1/2">
            <ProFormSelect
              options={parrentCategries}
              name="parrentId"
              label="Danh mục cha"
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <ProFormSelect
              className="w-full"
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
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-grow">
            <ProFormText name="thumbnail" className="w-full" />
          </div>
          <Button
            style={{ marginBottom: 24 }}
            icon={<FolderOpenOutlined />}
            onClick={() => setExplorerVisible(true)}
          >
            Explorer
          </Button>
        </div>

        <Image src={previewImage} />
      </DrawerForm>
      <Explorer
        visible={explorerVisible}
        onVisibleChange={setExplorerVisible}
        onSelect={handleSelectThumbnail}
      />
      <PostCategory visible={visiblePosts} onClose={setVisiblePosts} id={selectedCategoryId} />
      <CategoryImport visible={visibleImport} setVisible={setVisibleImport} />
    </PageContainer>
  );
};

export default Category;
