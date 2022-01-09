import React from 'react';
import { List, message } from 'antd';
import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import { useState } from 'react';
import { changePassword } from '@/services/defzone/user';
import type { ChangePasswordType } from '@/services/typings/user';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">Mạnh</span>,
  medium: <span className="medium">Trung bình</span>,
  weak: <span className="weak">Yếu</span>,
};

const SecurityView: React.FC = () => {
  const [drawerPasswordVisible, setDrawerPasswordVisible] = useState<boolean>(false);
  const [drawerPhoneNumberVisible, setDrawerPhoneNumberVisible] = useState<boolean>(false);

  const handleFinish = async (values: ChangePasswordType) => {
    changePassword(values).then((response) => {
      if (response.succeeded) {
        message.success('Succeeded!');
        setDrawerPasswordVisible(false);
      }
    });
  };

  const handlePhoneNumberFinish = async (values: any) => {
    console.log(values);
  };

  const getData = () => [
    {
      title: 'Mật khẩu',
      description: <>Hiện trạng: {passwordStrength.strong}</>,
      actions: [
        <a key="Modify" onClick={() => setDrawerPasswordVisible(true)}>
          Chỉnh sửa
        </a>,
      ],
    },
    {
      title: 'Số điện thoại',
      description: `Số điện thoại hiện tại: 138****8293`,
      actions: [<a key="Modify">Chỉnh sửa</a>],
    },
    {
      title: 'Câu hỏi bảo mật',
      description: 'Chưa có câu hỏi bí mật được tạo',
      actions: [<a key="Set">Cài đặt</a>],
    },
    {
      title: 'Email',
      description: `Email hiện tại: ant***sign.com`,
      actions: [<a key="Modify">Chỉnh sửa</a>],
    },
    {
      title: 'Liên kết',
      description: 'Chưa liên kết các tài khoản mạng xã hội',
      actions: [<a key="bind">Link</a>],
    },
  ];

  const data = getData();
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
      <DrawerForm
        visible={drawerPasswordVisible}
        onVisibleChange={setDrawerPasswordVisible}
        onFinish={handleFinish}
      >
        <ProFormText name="oldPassword" label="Mật khẩu cũ" />
        <ProFormText name="newPassword" label="Mật khẩu mới" />
        <ProFormText name="confirmPassword" label="Nhập lại mật khẩu" />
      </DrawerForm>
      <DrawerForm
        visible={drawerPhoneNumberVisible}
        onVisibleChange={setDrawerPhoneNumberVisible}
        onFinish={handlePhoneNumberFinish}
      >
        <ProFormText name="phoneNumber" />
      </DrawerForm>
    </>
  );
};

export default SecurityView;
