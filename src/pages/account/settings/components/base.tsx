import React from 'react';
import { Input, message } from 'antd';
import ProForm, {
  ProFormDependency,
  ProFormFieldSet,
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
  <>
    <div className={styles.avatar_title}>Avatar</div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
    <a href='https://gravatar.com' target="_blank">Change avatar</a>
  </>
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
    <div className={styles.baseView}>
      <div className={styles.left}>
        <ProForm
          layout="vertical"
          onFinish={handleFinish}
          submitter={{
            resetButtonProps: {
              style: {
                display: 'none',
              },
            },
            submitButtonProps: {
              children: '更新基本信息',
            },
          }}
          hideRequiredMark
        >
          <ProFormText
            width="md"
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
          <ProFormText
            width="md"
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
          <ProFormTextArea
            name="profile"
            label="Bio"
            placeholder="At least 30 character..."
            disabled
          />
          <ProFormSelect
            width="sm"
            name="country"
            label="Country"
            options={[
              {
                label: 'Viet Nam',
                value: 'vi-VN',
              },
            ]}
            disabled
          />

          <ProForm.Group title="Province" size={8}>
            <ProFormSelect
              width="sm"
              fieldProps={{
                labelInValue: true,
              }}
              disabled
              name="province"
              className={styles.item}
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
                    width="sm"
                    disabled={!province}
                    className={styles.item}
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
            width="md"
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
        </ProForm>
      </div>
      <div className={styles.right}>
        <AvatarView avatar={getAvatarURL()} />
      </div>
    </div>
  );
};

export default BaseView;
