import ProBraftEditor from '@/components/pro-braft-editor';
import BraftEditor from 'braft-editor';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { ProFormTextArea, ProFormText } from '@ant-design/pro-components';
import { useRef, useEffect } from 'react';

type GeneralTabProps = {
  id: string;
  categories?: API.Category;
  post?: API.Post;
  handleFinish: any;
};

const GeneralTab: React.FC<GeneralTabProps> = (props) => {
  const { post, categories, handleFinish } = props;
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
    }
  }, [categories, post, props.id]);

  return (
    <ProForm onFinish={handleFinish} formRef={formRef}>
      <ProFormText name="id" hidden={true} />
      <ProFormText name="title" label="Tiêu đề" rules={[{ required: true }]} />
      <ProFormText name="url" label="Đường dẫn" />
      <ProFormTextArea name="description" label="Mô tả" />
      <ProForm.Item name="content" label="Nội dung" rules={[{ required: true }]}>
        <ProBraftEditor />
      </ProForm.Item>
    </ProForm>
  );
};

export default GeneralTab;
