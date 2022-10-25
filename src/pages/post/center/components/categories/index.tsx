import { getAllCategory } from '@/services/defzone/category';
import { mapCategories, queryPostCategory } from '@/services/defzone/post';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef, useState } from 'react';

type CategoryTabProps = {
  id: string;
};

const CategoryTab: React.FC<CategoryTabProps> = (props) => {
  const [options, setOptions] = useState<any>();
  const formRef = useRef<ProFormInstance>();

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
    queryPostCategory(props.id).then((response) => {
      formRef.current?.setFieldsValue({ categories: response });
    });
  }, [props.id]);

  const onFinish = async (values: any) => {
    const response = await mapCategories(Number(props.id), values.categories);
    if (response.succeeded) {
      message.success('Saved!');
    } else {
      message.error(response.message);
    }
  };

  return (
    <ProForm formRef={formRef} onFinish={onFinish}>
      <ProFormSelect
        fieldProps={{ mode: 'multiple' }}
        options={options}
        name="categories"
        label="Categories"
      />
    </ProForm>
  );
};

export default CategoryTab;
