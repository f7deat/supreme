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
        formRef.current?.setFields([
          {
            name: 'access_token',
            value: response.value,
          },
        ]);
      });
    }
  }, [props.visible]);

  const handleFinish = async (values: any) => {
    const body = {
      id: Number(values.id),
      value: values.access_token,
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
        <ProFormText name="access_token" label="Access token" />
      </ProForm>
      <div className="py-2 text-right">
        <a href="https://f7deat.github.io/fuzzy" target="_blank" rel="noreferrer">
          Exchange token
        </a>
      </div>
    </Drawer>
  );
};
export default FacebookSetting;
