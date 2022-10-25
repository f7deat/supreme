import { Button, message, Popover } from 'antd';
import { useEffect, useRef } from 'react';
import EditableTagGroup from '@/pages/post/components/editable-tag-group';
import { EyeOutlined, FolderOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProFormText, ProFormDateTimePicker, ProForm } from '@ant-design/pro-components';
import { saveSetting } from '@/services/defzone/post';

type PostCenterSettingProps = {
  data?: API.Post;
  setTags: any;
  tags: string[];
};

const PostCenterSetting: React.FC<PostCenterSettingProps> = (props) => {
  const { data, setTags, tags } = props;
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    formRef.current?.setFields([
      {
        name: 'id',
        value: data?.id,
      },
      {
        name: 'createdDate',
        value: data?.createdDate,
      },
      {
        name: 'modifiedDate',
        value: data?.modifiedDate,
      },
      {
        name: 'thumbnail',
        value: data?.thumbnail,
      },
    ]);
    if (data?.tags) {
      setTags(data.tags.split(','));
    }
  }, [data, setTags]);

  const onFinish = async (values: any) => {
    values.createdDate = new Date(values.createdDate);
    values.modifiedDate = new Date(values.modifiedDate);
    values.tags = tags.join(',');

    const response = await saveSetting(values);
    if (response.succeeded) {
      message.success(response.message);
    } else {
      message.error(response.message);
    }
  };

  return (
    <ProForm formRef={formRef} onFinish={onFinish}>
      <ProFormText name="id" hidden />
      <div className="flex gap-4">
        <ProFormDateTimePicker name="createdDate" label="Created date" />
        <ProFormDateTimePicker name="modifiedDate" label="Modified date" />
      </div>
      <div className="mb-2">Ảnh đại diện</div>
      <div className="flex gap-4">
        <div className="flex-grow">
          <ProFormText name="thumbnail" />
        </div>
        <Button type="primary" icon={<FolderOutlined />}>
          Explorer
        </Button>
        <Popover>
          <Button icon={<EyeOutlined />}>Preview</Button>
        </Popover>
      </div>
      <div className="mb-2">Tags</div>
      <div className="mb-4">
        <EditableTagGroup tags={tags} setTags={setTags} />
      </div>
    </ProForm>
  );
};

export default PostCenterSetting;
