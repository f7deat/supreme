import { InboxOutlined } from '@ant-design/icons';
import { ModalForm } from '@ant-design/pro-form';
import { message, Upload } from 'antd';
type UploadProps = {
  visible: boolean;
  setVisible: any;
};
const UploadFiles: React.FC<UploadProps> = (props) => {
  const { Dragger } = Upload;
  const uploadProps = {
    name: 'file',
    multiple: true,
    action: `/api/file/upload`,
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
    label: 'Drag or drop to upload!',
  };
  return (
    <ModalForm visible={props.visible} onVisibleChange={props.setVisible} title="Upload file">
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
        </p>
      </Dragger>
    </ModalForm>
  );
};
export default UploadFiles;
