import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { DrawerForm, ProFormSelect } from '@ant-design/pro-form';
import 'braft-editor/dist/index.css';
import { Input, message } from 'antd';
import BraftEditor from 'braft-editor';
import { useEffect, useRef, useState } from 'react';
import { getPost, addPost, updatePost } from '@/services/ant-design-pro/api';
import { getAllCategory } from '@/services/defzone/category';

interface IPostDrawerProps {
  visible: boolean;
  setVisible: any;
  postId: number;
  reload: any;
}

const PostDrawer = (props: IPostDrawerProps) => {
  const formRef = useRef<ProFormInstance>();
  const [options, setOptions] = useState<any>();

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
            name: 'tags',
            value: post.tags,
          },
          {
            name: 'content',
            value: BraftEditor.createEditorState(post.content),
          },
          {
            name: 'categories',
            value: categories,
          },
        ]);
      });
    } else {
      formRef.current?.resetFields();
    }
  }, [props.postId]);

  const hanldeClose = () => {
    props.setVisible(false);
    props.reload();
  };

  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
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

  return (
    <DrawerForm
      width={window.innerWidth - 300}
      visible={props.visible}
      onFinish={handleFinish}
      onVisibleChange={props.setVisible}
      formRef={formRef}
    >
      <ProForm.Item name="id" hidden={true}>
        <Input />
      </ProForm.Item>
      <ProForm.Item name="title" label="Tiêu đề">
        <Input />
      </ProForm.Item>
      <ProForm.Item name="url" label="Đường dẫn">
        <Input />
      </ProForm.Item>
      <ProForm.Item name="description" label="Mô tả">
        <Input.TextArea />
      </ProForm.Item>
      <ProForm.Item name="content" label="Nội dung">
        <BraftEditor />
      </ProForm.Item>
      <ProForm.Item name="categories" label="Danh mục">
        <ProFormSelect fieldProps={{ mode: 'multiple' }} options={options} />
      </ProForm.Item>
      <ProForm.Item name="tags" label="Tags">
        <Input />
      </ProForm.Item>
      <ProForm.Item name="thumbnail" label="Thumbnail">
        <Input />
      </ProForm.Item>
    </DrawerForm>
  );
};

export default PostDrawer;
