import { ModalForm } from '@ant-design/pro-form';
import { Button, Checkbox, Divider, Upload } from 'antd';
import type { RcFile } from 'antd/lib/upload';
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';

type ImportProps = {
  visible: boolean;
  setVisible: any;
};

const Import: React.FC<ImportProps> = (props) => {
  const [fileList, setFileList] = useState<any>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  const propsFiles = {
    onRemove: (file: any) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file: RcFile) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const handleUpload = () => {
    setUploading(true);

    setUploading(false);
  };

  return (
    <ModalForm
      visible={props.visible}
      onVisibleChange={props.setVisible}
      onFinish={() => props.setVisible(false)}
    >
      <Divider orientation="left">Chọn bảng cần Import</Divider>
      <div>
        <div>
          <Checkbox>Table: dbo.[Posts]</Checkbox>
        </div>
        <div>
          <Checkbox>Table: dbo.[PostCategories]</Checkbox>
        </div>
        <div>
          <Checkbox>Table: dbo.[Categories]</Checkbox>
        </div>
      </div>
      <Divider />
      <div style={{ textAlign: 'center' }}>
        <Upload {...propsFiles} maxCount={1}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </div>
    </ModalForm>
  );
};
export default Import;
