import { DrawerForm, ProFormUploadDragger } from '@ant-design/pro-form';
type UploadProps = {
  visible: boolean;
  setVisible: any;
};
const UploadFiles: React.FC<UploadProps> = (props) => {
  return (
    <DrawerForm visible={props.visible} onVisibleChange={props.setVisible}>
      <ProFormUploadDragger />
    </DrawerForm>
  );
};
export default UploadFiles;
