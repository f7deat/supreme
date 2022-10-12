import { Button, Col, Input, Popover, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { getAllCategory } from '@/services/defzone/category';
import EditableTagGroup from '@/pages/post/components/editable-tag-group';
import { EyeOutlined, FolderOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import ProForm, {
  ProFormSelect,
  ProFormText,
  ProFormDateTimePicker,
} from '@ant-design/pro-components';

type PostCenterSettingProps = {
  data?: API.Post;
  categories: any;
  setTags: any;
  handleFinish: any;
  tags: string[];
};

const PostCenterSetting: React.FC<PostCenterSettingProps> = (props) => {
  const { data, categories, setTags, handleFinish, tags } = props;
  const formRef = useRef<ProFormInstance>();
  const [options, setOptions] = useState<any>();

  useEffect(() => {
    getAllCategory().then((response) => {
      setOptions(
        response.map((x: API.CategoryListItem) => {
          return {
            value: x.id,
            label: x.name,
          };
        }),
      );
    });
  }, []);

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
        name: 'categories',
        value: categories,
      },
      {
        name: 'thumbnail',
        value: data?.thumbnail,
      },
    ]);
    if (data?.tags) {
      setTags(data.tags.split(','));
    }
  }, [data, categories, setTags]);

  return (
    <ProForm onFinish={handleFinish} formRef={formRef}>
      <Row gutter={16}>
        <Col span={12}>
          <ProFormText name="id" hidden />
          <ProForm.Item name="categories" label="Danh mục">
            <ProFormSelect fieldProps={{ mode: 'multiple' }} options={options} />
          </ProForm.Item>
          <ProFormDateTimePicker name="createdDate" label="Created date" />

          <ProForm.Item name="status" label="Trạng thái" initialValue={1}>
            <ProFormSelect
              allowClear={false}
              options={[
                {
                  value: 0,
                  label: 'Draft',
                },
                {
                  value: 1,
                  label: 'Active',
                },
              ]}
            />
          </ProForm.Item>
          <div className="mb-2">Tags</div>
          <div className="mb-4">
            <EditableTagGroup tags={tags} setTags={setTags} />
          </div>
        </Col>
        <Col span={12}>
          <div className="mb-2">Ảnh đại diện</div>
          <div className="flex gap-4">
            <div className="flex-grow">
              <ProForm.Item name="thumbnail">
                <Input />
              </ProForm.Item>
            </div>
            <Button type="primary" icon={<FolderOutlined />}>
              Explorer
            </Button>
            <Popover>
              <Button icon={<EyeOutlined />}>Preview</Button>
            </Popover>
          </div>
        </Col>
      </Row>
    </ProForm>
  );
};

export default PostCenterSetting;
