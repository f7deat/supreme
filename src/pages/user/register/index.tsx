import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Input, Popover, Progress, message, Divider, Space } from 'antd';
import { Link, history, SelectLang, FormattedMessage } from 'umi';
import type { UserRegisterParams } from './service';
import { fakeRegister } from './service';
import Footer from '@/components/Footer';
import styles from './style.less';
import { FacebookOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <span>Bảo mật: Tốt</span>
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <span>Bảo mật: Trung bình</span>
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <span>Bảo mật: Yếu</span>
    </div>
  ),
};

const passwordProgressMap: {
  ok: 'success';
  pass: 'normal';
  poor: 'exception';
} = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const Register: FC = () => {
  const [visible, setVisible]: [boolean, any] = useState(false);
  const [popover, setPopover]: [boolean, any] = useState(false);
  const confirmDirty = false;
  let interval: number | undefined;
  const [form] = Form.useForm();

  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );

  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };

  const onFinish = async (values: UserRegisterParams) => {
    const response = await fakeRegister(values);
    if (response.succeeded) {
      message.success('Đăng ký thành công!');
      history.push({
        pathname: '/user/login',
      });
    }
  };

  const checkConfirm = (_: any, value: string) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('Mật khẩu không khớp!');
    }
    return promise.resolve();
  };

  const checkPassword = (_: any, value: string) => {
    const promise = Promise;
    // 没有值的情况
    if (!value) {
      setVisible(!!value);
      return promise.reject('Vui lòng nhập mật khẩu');
    }
    // 有值的情况
    if (!visible) {
      setVisible(!!value);
    }
    setPopover(!popover);
    if (value.length < 6) {
      return promise.reject('');
    }
    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }
    return promise.resolve();
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className='text-center mb-4'>
            <Space align='center' size="large" className='items-center'>
              <img alt="logo" src="/logo.svg" width={44} />
              <div style={{ fontSize: 33, fontWeight: 500 }}>
                DefZone.Net
              </div>
            </Space>
            <div className='p-2' style={{ color: 'rgba(0, 0, 0, 0.45)' }}><FormattedMessage id='pages.layouts.userLayout.title' /></div>
          </div>
          <h3>Đăng ký</h3>
          <Form form={form} name="UserRegister" onFinish={onFinish}>
            <FormItem
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập địa chỉ email!',
                },
                {
                  type: 'email',
                  message: 'Định dạng email không hợp lệ!',
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </FormItem>
            <Popover
              getPopupContainer={(node) => {
                if (node && node.parentNode) {
                  return node.parentNode as HTMLElement;
                }
                return node;
              }}
              content={
                visible && (
                  <div style={{ padding: '4px 0' }}>
                    {passwordStatusMap[getPasswordStatus()]}
                    {renderPasswordProgress()}
                    <div style={{ marginTop: 10 }}>
                      <span>
                        Tối thiểu 6 ký tự, bao gồm chữ in hoa, chữ thường, ký tự đặc biệt và số!
                      </span>
                    </div>
                  </div>
                )
              }
              overlayStyle={{ width: 240 }}
              placement="right"
              visible={visible}
            >
              <FormItem
                name="password"
                className={
                  form.getFieldValue('password') &&
                  form.getFieldValue('password').length > 0 &&
                  styles.password
                }
                rules={[
                  {
                    validator: checkPassword,
                  },
                ]}
              >
                <Input size="large" type="password" placeholder="Nhập mật khẩu" />
              </FormItem>
            </Popover>
            <FormItem
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Xác nhận mật khẩu',
                },
                {
                  validator: checkConfirm,
                },
              ]}
            >
              <Input size="large" type="password" placeholder="Nhập lại mật khẩu" />
            </FormItem>
            <FormItem>
              <Button size="large" className='w-full' type="primary" htmlType="submit">
                <span>Đăng ký</span>
              </Button>
            </FormItem>
          </Form>
          <div className='text-center'>
            <div className='mb-4'>Or register with</div>
            <Space align='center'>
              <FacebookOutlined key="FacebookOutlined" className={styles.icon} />
              <TwitterOutlined key="TwitterOutlined" className={styles.icon} />
              <GithubOutlined key="GithubOutlined" className={styles.icon} />
            </Space>
            <Divider />
            <Space>
              Allready member?
              <Link className={styles.login} to="/user/login">Đăng nhập</Link>
            </Space>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
