import { DOMAIN } from '@/services/config';
import { DrawerForm } from '@ant-design/pro-form';
import { message, Upload } from 'antd';
type UploadProps = {
  visible: boolean;
  setVisible: any;
};
const UploadFiles: React.FC<UploadProps> = (props) => {
  const { Dragger } = Upload
  const uploadProps = {
    name: 'file',
    multiple: true,
    action: `${DOMAIN}/api/file/upload`,
    headers: {
      authorization: `Bearer ${localStorage.getItem('def_token')}`,
    },
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    label: 'Drag or drop to upload!'
  };
  return (
    <DrawerForm visible={props.visible} onVisibleChange={props.setVisible}>
      <Dragger {...uploadProps} />
    </DrawerForm>
  );
};
export default UploadFiles;
