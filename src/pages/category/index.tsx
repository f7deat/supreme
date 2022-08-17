import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, message, Popconfirm, Space, Tag } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { EditOutlined, DeleteOutlined, PlusOutlined, FolderOpenOutlined } from '@ant-design/icons';
import {
  deleteCategory,
  getCategories,
  queryListType,
} from '@/services/defzone/category';
import { useEffect, useRef, useState } from 'react';
import PostCategory from './components/posts';
import CategoryImport from './components/import';
import AppSetting from '@/appSetting';
import CategorySetting from './components/settings';
import type { DefaultOptionType } from 'antd/lib/select';

const Category: React.FC = () => {
  const intl = useIntl();
  const [drawerVisit, setDrawerVisit] = useState<boolean>(false);
  const [visiblePosts, setVisiblePosts] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [visibleImport, setVisibleImport] = useState<boolean>(false);
  const [types, setTypes] = useState<DefaultOptionType[]>([])
  const ref = useRef<ActionType>();

  useEffect(() => {
    queryListType().then(response => {
      setTypes(response.map((x: string, i: number) => {
        return {
          value: i,
          label: x
        }
      }));
    })
  }, [])

  const reload = () => ref?.current?.reload();

  const handleAdd = () => {
    setDrawerVisit(true);
  };

  const handleRemove = (id: number) => {
    deleteCategory(id).then((response) => {
      if (response.succeeded) {
        reload();
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    });
  };

  const handleUpdate = (id: number) => {
    setSelectedCategoryId(id);
    setDrawerVisit(true);
  };

  const handleShowPosts = (id: number) => {
    setSelectedCategoryId(id);
    setVisiblePosts(true);
  };

  const renderType = (value: number) => types.find(x => x.value === value)?.label

  const columns: ProColumns<API.CategoryListItem>[] = [
    {
      title: 'Tên',
      dataIndex: 'name',
      render: (dom, entity) => (
        <a href={`${AppSetting.domain}/category/details/${entity.id}`} target="_blank" rel='noreferrer'>{dom}</a>
      ),
    },
    {
      title: <FormattedMessage id="global.status" defaultMessage="Status" />,
      dataIndex: 'status',
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
      title: 'Type',
      dataIndex: 'type',
      render: (_, record) => <Tag key={record.id} color={record.type === 0 ? 'green' : 'cyan'}>{renderType(record.type)}</Tag>,
      valueType: 'option'
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

  const Extra = () => (
    <Space>
      <Button type="primary" key={0} danger onClick={() => setVisibleImport(true)}>
        Import
      </Button>
      <Button type="primary" key={1} icon={<PlusOutlined />} onClick={handleAdd}>
        Thêm mới
      </Button>
    </Space>
  );

  return (
    <PageContainer extra={<Extra />}>
      <ProTable<API.CategoryListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'menu.blog.category',
          defaultMessage: 'Categry',
        })}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={getCategories}
        columns={columns}
        rowSelection={{}}
        actionRef={ref}
      />
      <CategorySetting types={types} visible={drawerVisit} setVisible={setDrawerVisit} categoryId={selectedCategoryId} onFinish={reload} />
      <PostCategory visible={visiblePosts} onClose={setVisiblePosts} id={selectedCategoryId} />
      <CategoryImport visible={visibleImport} setVisible={setVisibleImport} />
    </PageContainer>
  );
};

export default Category;
