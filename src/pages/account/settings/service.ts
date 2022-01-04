import { DOMAIN, TOKEN } from '@/services/config';
import { request } from 'umi';
import type { ChangePasswordType, CurrentUser, GeographicItemType } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/accountSettingCurrentUser');
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  return request('/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}

export async function changePassword(body: ChangePasswordType) {
  return request(`${DOMAIN}/api/user/change-password`, {
    method: 'POST',
    headers: {
      authorization: TOKEN,
    },
    data: body,
  });
}
