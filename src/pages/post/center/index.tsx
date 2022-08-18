import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormText } from '@ant-design/pro-form';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import { Button, Card, Image, Input, message, Popover } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { getPost, addPost, updatePost } from '@/services/ant-design-pro/api';
import { getAllCategory } from '@/services/defzone/category';
import { EyeOutlined, FolderOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import EditableTagGroup from '../components/editable-tag-group';
import { history, useParams } from 'umi';
import PostCenterSetting from './components/setting';
import ProBraftEditor from '@/components/pro-braft-editor';
import BraftEditor from 'braft-editor';
import Gallery from '@/components/gallery';

type GeneralTabProps = {
  id: string;
  categories?: API.Category;
  post?: API.Post;
}

const GeneralTab: React.FC<GeneralTabProps> = (props) => {

  const { post, categories } = props;
  const [options, setOptions] = useState<any>();
  const [thumbnail, setThumbnail] = useState<string>('');
  const [visibleExplorer, setVisibleExplorer] = useState<boolean>(false);
  const formRef = useRef<ProFormInstance>();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    getAllCategory().then((response) => {
      setOptions(
        response.map((x: API.CategoryListItem) => {
          return {
            value: x.id,
            label: x.name,
          };
        }),
      );
    });
  }, []);

  useEffect(() => {
    if (props.id) {
      setThumbnail(post?.thumbnail || '');
      if (post?.tags) {
        setTags(post.tags.split(','));
      }
      formRef.current?.setFields([
        {
          name: 'id',
          value: post?.id,
        },
        {
          name: 'title',
          value: post?.title,
        },
        {
          name: 'url',
          value: post?.url,
        },
        {
          name: 'description',
          value: post?.description,
        },
        {
          name: 'thumbnail',
          value: post?.thumbnail,
        },
        {
          name: 'content',
          value: BraftEditor.createEditorState(post?.content),
        },
        {
          name: 'categories',
          value: categories,
        },
        {
          name: 'status',
          value: post?.status,
        },
      ]);
    } else {
      formRef.current?.resetFields();
      setTags([]);
      setThumbnail('');
    }
  }, [categories, post, props.id]);

  const content = <Image src={thumbnail} width={200} height={150} />;

  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
    if (tags) {
      values.tags = tags.join(',');
    } else {
      values.tags = '';
    }
    const response = props.id ? await updatePost(values) : addPost(values);
    if (response.succeeded) {
      history.push('/blog/post');
    } else {
      message.error(response.message);
    }
  };

  return (

    <ProForm onFinish={handleFinish} formRef={formRef}>
      <ProForm.Item name="id" hidden={true}>
        <Input />
      </ProForm.Item>
      <ProFormText name="title" label="Tiêu đề" rules={[{ required: true }]} />
      <ProForm.Item name="url" label="Đường dẫn">
        <Input />
      </ProForm.Item>
      <ProForm.Item name="description" label="Mô tả">
        <Input.TextArea />
      </ProForm.Item>
      <ProForm.Item name="content" label="Nội dung" rules={[{ required: true }]}>
        <ProBraftEditor />
      </ProForm.Item>
      <div className="mb-2">Ảnh đại diện</div>
      <div className="flex gap-4">
        <div className="flex-grow">
          <ProForm.Item name="thumbnail">
            <Input />
          </ProForm.Item>
        </div>
        <Button
          type="primary"
          icon={<FolderOutlined />}
          onClick={() => setVisibleExplorer(true)}
        >
          Explorer
        </Button>
        <Popover content={content}>
          <Button icon={<EyeOutlined />}>Preview</Button>
        </Popover>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow">
          <ProForm.Item name="categories" label="Danh mục">
            <ProFormSelect fieldProps={{ mode: 'multiple' }} options={options} />
          </ProForm.Item>
        </div>
        <ProForm.Item name="status" label="Trạng thái" initialValue={1}>
          <ProFormSelect
            allowClear={false}
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
          />
        </ProForm.Item>
      </div>
      <div className="mb-2">Tags</div>
      <div className="mb-4">
        <EditableTagGroup tags={tags} setTags={setTags} />
      </div>
      <Gallery visible={visibleExplorer} />
    </ProForm>
  )
}

const PostCenter = () => {
  const params = useParams<any>();

  const [tabKey, setTabKey] = useState<string>('');
  const [post, setPost] = useState<API.Post>();
  const [categories, setCategories] = useState<API.Category>();

  useEffect(() => {
    getPost(params.id).then(response => {

      setPost(response.post);
      setCategories(response.categories);
    })
  }, [params.id])

  const onTabChange = (key: string) => {
    setTabKey(key)
  }

  const renderChildrenByTabKey = () => {
    if (tabKey === 'setting') {
      return <PostCenterSetting data={post} />;
    }
    return <GeneralTab id={params.id} post={post} categories={categories} />;
  }

  return (
    <PageContainer title="Start writing" onTabChange={onTabChange} tabList={[
      {
        tab: 'General',
        key: 'general'
      },
      {
        tab: 'Setting',
        key: 'setting'
      }
    ]}>
      <Card>
        {renderChildrenByTabKey()}
      </Card>
    </PageContainer>
  );
};

export default PostCenter;
