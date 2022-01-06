import { DOMAIN } from '@/services/config';
import { request } from 'umi';

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
  return request(`${DOMAIN}/api/user/create`, {
    method: 'POST',
    data: params,
  });
}
