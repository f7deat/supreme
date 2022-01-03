import { request } from 'umi';

const gateway = 'https://localhost:44308/api';
const token = localStorage.getItem('def_token');

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return request<API.CurrentUser>(`${gateway}/user/get`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    //...(options || {}),
  });
}
