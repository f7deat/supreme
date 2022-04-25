import React from 'react';
import { Divider, Image, Input, message } from 'antd';
import ProForm, {
  ProFormDependency,
  ProFormFieldSet,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { queryProvince, queryCity } from '../service';

import styles from './BaseView.less';
import { queryUser } from '@/services/defzone/api';
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
    <a href='https://gravatar.com' target="_blank">Change avatar</a>
  </div>
);

const BaseView: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<API.CurrentUser>()
  useEffect(() => {
    queryUser().then(response => {
      setCurrentUser(response)
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
              disabled
            />
            <ProFormText
              name="email"
              label="Email"
              initialValue={currentUser?.email}
              rules={[
                {
                  required: true,
                  message: 'Please input email!',
                },
              ]}
              disabled
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

          <ProForm.Group title="Province" size={8}>
            <ProFormSelect
              name="country"
              options={[
                {
                  label: 'Viet Nam',
                  value: 'vi-VN',
                },
              ]}
              disabled
            />
            <ProFormSelect
              fieldProps={{
                labelInValue: true,
              }}
              disabled
              name="province"
              request={async () => {
                return queryProvince().then(({ data }) => {
                  return data.map((item) => {
                    return {
                      label: item.name,
                      value: item.id,
                    };
                  });
                });
              }}
            />
            <ProFormDependency name={['province']}>
              {({ province }) => {
                return (
                  <ProFormSelect
                    params={{
                      key: province?.value,
                    }}
                    name="city"
                    disabled={!province}
                    request={async () => {
                      if (!province?.key) {
                        return [];
                      }
                      return queryCity(province.key || '').then(({ data }) => {
                        return data.map((item) => {
                          return {
                            label: item.name,
                            value: item.id,
                          };
                        });
                      });
                    }}
                  />
                );
              }}
            </ProFormDependency>
          </ProForm.Group>
          <ProFormText
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input address!',
              },
            ]}
            disabled
          />
        </ProForm>
      </div>
    </div>
  );
};

export default BaseView;
