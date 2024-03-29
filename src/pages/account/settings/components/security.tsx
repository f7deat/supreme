import React from 'react';
import { Button, List, message, Image, Row, Col, Typography, Divider } from 'antd';
import { DrawerForm, ModalForm, ProFormText } from '@ant-design/pro-form';
import { useState } from 'react';
import { changePassword } from '@/services/defzone/user';
import type { ChangePasswordType } from '@/services/typings/user';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">Mạnh</span>,
  medium: <span className="medium">Trung bình</span>,
  weak: <span className="weak">Yếu</span>,
};

type SecurityViewProps = {
  user?: API.User
}

const SecurityView: React.FC<SecurityViewProps> = (props) => {

  const { user } = props;

  const [drawerPasswordVisible, setDrawerPasswordVisible] = useState<boolean>(false);
  const [drawerPhoneNumberVisible, setDrawerPhoneNumberVisible] = useState<boolean>(false);
  const [visible2fa, setVisible2fa] = useState<boolean>(false);

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
      title: 'Two-factor authentication (2FA)',
      description: 'Chưa liên kết các tài khoản mạng xã hội',
      actions: [
        <Button key={0} type="primary" onClick={() => setVisible2fa(true)}>Enable</Button>
      ],
    },
  ];

  const data = getData();
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.description} />
            {item.actions.map(action => action)}
          </List.Item>
        )}
      />
      <ModalForm
        visible={drawerPasswordVisible}
        onVisibleChange={setDrawerPasswordVisible}
        onFinish={handleFinish}
        title="Change password"
      >
        <ProFormText name="oldPassword" label="Mật khẩu cũ" />
        <ProFormText name="newPassword" label="Mật khẩu mới" />
        <ProFormText name="confirmPassword" label="Nhập lại mật khẩu" />
      </ModalForm>
      <DrawerForm
        visible={drawerPhoneNumberVisible}
        onVisibleChange={setDrawerPhoneNumberVisible}
        onFinish={handlePhoneNumberFinish}
      >
        <ProFormText name="phoneNumber" />
      </DrawerForm>
      <ModalForm visible={visible2fa} onVisibleChange={setVisible2fa} title="Sign-in 2FA Setup">
        <Typography.Title level={4}>Protect your account by requiring an additional layer of security to sign in</Typography.Title>
        <Divider dashed />
        <Row gutter={24}>
          <Col span={12}>
            <Typography.Title level={5} >How to enable app based authentication</Typography.Title>
            <Divider />
            <div>1. Download and install an app (such as Google Authenticator) on your mobile device</div>
            <div>2. Scan the QR code</div>
            <div>3. Enter and verify the authentication code generated by the app</div>
          </Col>
          <Col span={12}>
            <div className='text-center'>
              <Image src={`https://chart.googleapis.com/chart?cht=qr&chl=${user?.email}&choe=UTF-8&chs=200x200`} />
            </div>
          </Col>
        </Row>
      </ModalForm>
    </>
  );
};

export default SecurityView;
