import ProForm from '@ant-design/pro-form';
import 'braft-editor/dist/index.css';
import { Drawer, Input } from 'antd';
import BraftEditor from 'braft-editor';

interface IPostDrawerProps {
  visible: boolean;
  setVisible: any;
}

const PostDrawer = (props: IPostDrawerProps) => {
  const handleFinish = async (values: any) => {
    values.content = values.content.toHTML();
    console.log(values);
  };
  const hanldeClose = () => {
    props.setVisible(false);
  };

  return (
    <Drawer width={window.innerWidth - 300} visible={props.visible} onClose={hanldeClose}>
      <ProForm onFinish={handleFinish}>
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
        <ProForm.Item name="tags" label="Tags">
          <Input />
        </ProForm.Item>
        <ProForm.Item name="thumbnail" label="Thumbnail">
          <Input />
        </ProForm.Item>
      </ProForm>
    </Drawer>
  );
};

export default PostDrawer;
