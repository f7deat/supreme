import { ModalForm, ProFormUploadDragger } from '@ant-design/pro-form';

type ImportProps = {
  visible: boolean;
  setVisible: any;
};

const Import: React.FC<ImportProps> = (props) => {
  return (
    <ModalForm visible={props.visible} onVisibleChange={props.setVisible}>
      <ProFormUploadDragger />
    </ModalForm>
  );
};
export default Import;
