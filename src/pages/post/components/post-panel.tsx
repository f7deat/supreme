import type { ProFormInstance } from '@ant-design/pro-form';
import { ProFormText } from '@ant-design/pro-form';
import ProForm, { DrawerForm, ProFormSelect } from '@ant-design/pro-form';
import 'braft-editor/dist/index.css';
import { Button, Image, Input, message, Popover } from 'antd';
import BraftEditor from 'braft-editor';
import { useEffect, useRef, useState } from 'react';
import { getPost, addPost, updatePost } from '@/services/ant-design-pro/api';
import { getAllCategory } from '@/services/defzone/category';
import EditableTagGroup from './editable-tag-group';
import { EyeOutlined, FolderOutlined } from '@ant-design/icons';
import Explorer from '@/pages/files/components/explorer';

interface IPostDrawerProps {
  visible: boolean;
  setVisible: any;
  postId: number;
  reload: any;
}

const PostDrawer = (props: IPostDrawerProps) => {
  const formRef = useRef<ProFormInstance>();
  const [options, setOptions] = useState<any>();
  const [thumbnail, setThumbnail] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [visibleExplorer, setVisibleExplorer] = useState<boolean>(false)

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
    if (props.postId !== 0) {
      getPost(props.postId).then((response) => {
        const { post, categories } = response;
        setThumbnail(post.thumbnail)
        if (post.tags) {
          setTags(post.tags.split(','))
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
      setTags([])
      setThumbnail('')
    }
  }, [props.postId]);

  const hanldeClose = () => {
    props.setVisible(false);
    props.reload();
  };

  const content = (
    <Image src={thumbnail} width={200} height={150} />
  )

  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
    if (tags) {
      values.tags = tags.join(',');
    } else {
      values.tags = '';
    }
    if (props.postId !== 0) {
      // UPDATE POST
      updatePost(values).then((response) => {
        if (response.succeeded) {
          message.success('succeeded!');
          hanldeClose();
        } else {
          message.error('faild!');
        }
      });
    } else {
      // ADD POST
      addPost(values).then((response) => {
        if (response.succeeded) {
          message.success('succeeded!');
          hanldeClose();
        } else {
          message.error('faild!');
        }
      });
    }
  };

  const hanldeSelectThumbnail = (imageUrl: string) => {
    setThumbnail(imageUrl)
    formRef.current?.setFieldsValue({
      'thumbnail': imageUrl
    })
  }

  return (
    <DrawerForm
      width={window.innerWidth - window.innerWidth / 4}
      visible={props.visible}
      onFinish={handleFinish}
      onVisibleChange={props.setVisible}
      formRef={formRef}
    >
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
        <BraftEditor language="en" style={{ border: '1px solid #d1d1d1' }} />
      </ProForm.Item>
      <div className='mb-2'>Ảnh đại diện</div>
      <div className='flex gap-4'>
        <div className='flex-grow'>
          <ProForm.Item name="thumbnail">
            <Input />
          </ProForm.Item>
        </div>
        <Button type='primary' icon={<FolderOutlined />} onClick={() => setVisibleExplorer(true)}>Explorer</Button>
        <Popover content={content}>
          <Button icon={<EyeOutlined />}>Preview</Button>
        </Popover>
      </div>
      <div className='flex gap-4'>
        <div className='flex-grow'>
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
      <div className='mb-2'>Tags</div>
      <EditableTagGroup tags={tags} setTags={setTags} />
      <Explorer visible={visibleExplorer} onVisibleChange={setVisibleExplorer} onSelect={hanldeSelectThumbnail} />
    </DrawerForm>
  );
};

export default PostDrawer;
