import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormText } from '@ant-design/pro-form';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import 'braft-editor/dist/index.css';
import { Button, Card, Image, Input, message, Popover } from 'antd';
import BraftEditor from 'braft-editor';
import { useEffect, useRef, useState } from 'react';
import { getPost, addPost, updatePost } from '@/services/ant-design-pro/api';
import { getAllCategory } from '@/services/defzone/category';
import { EyeOutlined, FolderOutlined } from '@ant-design/icons';
import Explorer from '@/pages/files/components/explorer';
import { PageContainer } from '@ant-design/pro-layout';
import EditableTagGroup from '../components/editable-tag-group';
import { history, useParams } from 'umi';

const PostCenter = () => {
  const params = useParams<any>();

  const formRef = useRef<ProFormInstance>();
  const [options, setOptions] = useState<any>();
  const [thumbnail, setThumbnail] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [visibleExplorer, setVisibleExplorer] = useState<boolean>(false);

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
    if (params.id) {
      getPost(params.id).then((response) => {
        const { post, categories } = response;
        setThumbnail(post.thumbnail);
        if (post.tags) {
          setTags(post.tags.split(','));
        }
        formRef.current?.setFields([
          {
            name: 'id',
            value: post.id,
          },
          {
            name: 'title',
            value: post.title,
          },
          {
            name: 'url',
            value: post.url,
          },
          {
            name: 'description',
            value: post.description,
          },
          {
            name: 'thumbnail',
            value: post.thumbnail,
          },
          {
            name: 'content',
            value: BraftEditor.createEditorState(post.content),
          },
          {
            name: 'categories',
            value: categories,
          },
          {
            name: 'status',
            value: post.status,
          },
        ]);
      });
    } else {
      formRef.current?.resetFields();
      setTags([]);
      setThumbnail('');
    }
  }, [params.id]);

  const content = <Image src={thumbnail} width={200} height={150} />;

  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
    if (tags) {
      values.tags = tags.join(',');
    } else {
      values.tags = '';
    }
    const response = params.id ? await updatePost(values) : addPost(values);
    if (response.succeeded) {
      history.push('/blog/post');
    } else {
      message.error(response.message);
    }
  };

  const hanldeSelectThumbnail = (imageUrl: string) => {
    setThumbnail(imageUrl);
    formRef.current?.setFieldsValue({
      thumbnail: imageUrl,
    });
  };

  return (
    <PageContainer title="Start writing">
      <Card>
        <ProForm onFinish={handleFinish} formRef={formRef}>
          <ProForm.Item name="id" hidden={true}>
            <Input />
          </ProForm.Item>
          <ProFormText name="title" label="Ti??u ?????" rules={[{ required: true }]} />
          <ProForm.Item name="url" label="???????ng d???n">
            <Input />
          </ProForm.Item>
          <ProForm.Item name="description" label="M?? t???">
            <Input.TextArea />
          </ProForm.Item>
          <ProForm.Item name="content" label="N???i dung" rules={[{ required: true }]}>
            <BraftEditor language="en" style={{ border: '1px solid #d1d1d1' }} />
          </ProForm.Item>
          <div className="mb-2">???nh ?????i di???n</div>
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
              <ProForm.Item name="categories" label="Danh m???c">
                <ProFormSelect fieldProps={{ mode: 'multiple' }} options={options} />
              </ProForm.Item>
            </div>
            <ProForm.Item name="status" label="Tr???ng th??i" initialValue={1}>
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
          <Explorer
            visible={visibleExplorer}
            onVisibleChange={setVisibleExplorer}
            onSelect={hanldeSelectThumbnail}
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default PostCenter;
