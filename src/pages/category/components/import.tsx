import { DOMAIN } from "@/services/config";
import { InboxOutlined } from "@ant-design/icons";
import { message, Modal, Upload } from "antd"

type CategoryImportProps = {
    visible: boolean;
    setVisible: any;
}

const CategoryImport: React.FC<CategoryImportProps> = (props) => {
    const { Dragger } = Upload;

    const propsDragger = {
        name: 'file',
        multiple: true,
        action: `${DOMAIN}/api/category/import`,
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
    };

    const handleOk = () => {
        props.setVisible(false);
    }

    return (
        <Modal title="Import Categories" visible={props.visible} onOk={handleOk} onCancel={() => props.setVisible(false)}>
            <Dragger {...propsDragger}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
        </Modal>
    )
}

export default CategoryImport