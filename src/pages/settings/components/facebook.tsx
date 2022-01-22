import { querySetting, saveSetting } from '@/services/defzone/api';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Drawer, message } from 'antd';
import { useEffect, useRef } from 'react';

type FacebookSettingProps = {
  visible: boolean;
  onClose: any;
};

const FacebookSetting: React.FC<FacebookSettingProps> = (props) => {
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (props.visible) {
      querySetting('FACEBOOK').then((response) => {
        const value = JSON.parse(response.value);
        formRef.current?.setFields([
          {
            name: 'id',
            value: response.id,
          },
          {
            name: 'client_id',
            value: value.client_id,
          },
          {
            name: 'client_secret',
            value: value.client_secret,
          },
          {
            name: 'access_token',
            value: value.access_token,
          },
        ]);
      });
    }
  }, [props.visible]);

  const handleFinish = async (values: any) => {
    const value = {
      client_id: values.client_id,
      access_token: values.access_token,
      client_secret: values.client_secret,
    };
    const body = {
      id: Number(values.id),
      value: JSON.stringify(value),
      key: 1,
      name: 'facebook',
      description: 'zxc',
    };
    saveSetting(body).then((response) => {
      if (response.succeeded) {
        message.success('succeeded!');
      } else {
        message.error('Error');
      }
    });
  };

  return (
    <Drawer visible={props.visible} onClose={() => props.onClose(false)}>
      <ProForm formRef={formRef} onFinish={handleFinish}>
        <ProFormText name="client_id" label="Client Id" />
        <ProFormText name="client_secret" label="Client Secret" />
        <ProFormText name="access_token" label="Access token" />
      </ProForm>
      <div className='py-2 text-right'>
        <a href='https://f7deat.github.io/fuzzy' target="_blank">Exchange token</a>
      </div>
    </Drawer>
  );
};
export default FacebookSetting;
