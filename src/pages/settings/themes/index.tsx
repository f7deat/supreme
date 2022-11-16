import { readAllText } from '@/services/defzone/api';
import { ProCard } from '@ant-design/pro-components';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormTextArea } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect, useRef } from 'react';

const Theme: React.FC = () => {
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    readAllText('css').then((response) => {
      formRef.current?.setFields([
        {
          name: 'css',
          value: response,
        },
      ]);
    });
  }, []);

  const onFinish = async (values: any) => {
    console.log(values);
  };

  return (
    <PageContainer title="Theme">
      <ProCard title="Customize theme">
        <ProForm layout="vertical" formRef={formRef} onFinish={onFinish}>
          <ProFormTextArea label="css" name="css" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default Theme;
