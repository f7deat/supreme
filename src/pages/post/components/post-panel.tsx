import ProForm from '@ant-design/pro-form';
import { Drawer, Input } from 'antd';

interface IPostDrawerProps {
  visible: boolean;
  setVisible: any;
}

const PostDrawer = (props: IPostDrawerProps) => {
  const handleFinish = async (values: any) => {
    console.log(values);
  };
  const hanldeClose = () => {
    props.setVisible(false);
  };
  return (
    <Drawer width={window.innerWidth - 300} visible={props.visible} onClose={hanldeClose}>
      <ProForm onFinish={handleFinish}>
        <ProForm.Item name="title">
          <Input />
        </ProForm.Item>
      </ProForm>
    </Drawer>
  );
};

export default PostDrawer;
