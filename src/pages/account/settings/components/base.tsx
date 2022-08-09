import React, { useRef } from 'react';
import { Divider, Image, Input, message } from 'antd';
import type {
  ProFormInstance
} from '@ant-design/pro-form';
import ProForm, {
  ProFormFieldSet,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';

import styles from './BaseView.less';
import { queryCountry, queryUser } from '@/services/defzone/api';
import { useState } from 'react';
import { useEffect } from 'react';

const validatorPhone = (rule: any, value: string[], callback: (message?: string) => void) => {
  if (!value[0]) {
    callback('Please input your area code!');
  }
  if (!value[1]) {
    callback('Please input your phone number!');
  }
  callback();
};
// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }: { avatar: string }) => (
  <div className='flex gap-4'>
    <div className={styles.avatar}>
      <Image src={avatar} alt="avatar" width={72} height={72} />
    </div>
    <a href='https://gravatar.com' target="_blank" rel='noreferrer'>Change avatar</a>
  </div>
);

const BaseView: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<API.User>()
  const formRef = useRef<ProFormInstance>()
  useEffect(() => {
    queryUser('').then(response => {
      setCurrentUser(response);
      formRef.current?.setFields([
        {
          name: 'email',
          value: response.email
        }
      ])
    })
  }, [])

  const getAvatarURL = () => {

    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };

  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };
  return (
    <div>
      <div>
        <AvatarView avatar={getAvatarURL()} />
      </div>
      <Divider />
      <div>
        <ProForm
          layout="vertical"
          onFinish={handleFinish}
          submitter={{
            submitButtonProps: {
              children: '更新基本信息',
            },
          }}
          hideRequiredMark
          formRef={formRef}
        >
          <ProFormGroup>
            <ProFormText
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please input name!',
                },
              ]}
            />
            <ProFormText
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input email!',
                },
              ]}
            />
            <ProFormFieldSet
              name="phoneNumber"
              label="Phone number"
              rules={[
                {
                  required: true,
                  message: 'Please input phone number!',
                },
                { validator: validatorPhone },
              ]}
            >
              <Input className={styles.area_code} disabled />
              <Input className={styles.phone_number} disabled />
            </ProFormFieldSet>
          </ProFormGroup>
          <ProFormTextArea
            name="profile"
            label="Bio"
            placeholder="At least 30 character..."
            disabled
          />

          <ProForm.Group title="Address">
            <ProFormSelect
              fieldProps={{
                labelInValue: true,
              }}
              name="country"
              required
              showSearch
              request={async () => {
                return queryCountry().then((response) => {
                  return response.map((item: any) => {
                    return {
                      label: item.name.common,
                      value: item.name.common,
                    };
                  });
                });
              }}
            />
            <ProFormText
              name="line"
              rules={[
                {
                  required: true,
                  message: 'Please input line!',
                },
              ]}
            />
          </ProForm.Group>
        </ProForm>

      </div>
    </div>
  );
};

export default BaseView;
