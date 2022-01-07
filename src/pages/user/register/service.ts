import request from '@/services/config';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserRegisterParams {
  email: string;
  password: string;
  confirmPassword: string;
  mobile?: string;
  captcha?: string;
  prefix?: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request(`/user/create`, {
    method: 'POST',
    data: params,
  });
}
