import ProBraftEditor from '@/components/pro-braft-editor';
import BraftEditor from 'braft-editor';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { ProFormTextArea, ProFormText } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';
import { addPost, updatePost } from '@/services/ant-design-pro/api';
import { message } from 'antd';
import { history } from 'umi';

type GeneralTabProps = {
  id: string;
  post?: API.Post;
};

const GeneralTab: React.FC<GeneralTabProps> = (props) => {
  const { post } = props;
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (props.id) {
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
          name: 'status',
          value: post?.status,
        },
      ]);
    } else {
      formRef.current?.resetFields();
    }
  }, [post, props.id]);

  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
    const response = values.id ? await updatePost(values) : await addPost(values);
    if (response.succeeded) {
      message.success('Saved!');
      history.push(`/blog/post/center/${response.data.id}`);
    } else {
      message.error(response.message);
    }
  };

  return (
    <ProForm onFinish={handleFinish} formRef={formRef}>
      <ProFormText name="id" hidden={true} />
      <ProFormText name="title" label="Tiêu đề" rules={[{ required: true }]} />
      <ProFormTextArea name="description" label="Mô tả" />
      <ProForm.Item name="content" label="Nội dung" rules={[{ required: true }]}>
        <ProBraftEditor />
      </ProForm.Item>
    </ProForm>
  );
};

export default GeneralTab;
