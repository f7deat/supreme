import request from '../config';
import type { ChangePasswordType } from '../typings/user';

/** LIST USER GET /api/user/list */
export async function getUsers(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request<API.CategoryListItem[]>(`/user/list`, {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function changePassword(body: ChangePasswordType) {
  return request(`/user/change-password`, {
    method: 'POST',
    data: body,
  });
}

export async function getRoles() {
  const response = await request<API.RoleListItem[]>(`/role/get-list`);
  const data = {
    data: response,
    current: 1,
    pageSize: 10,
    total: 10,
  };
  return Promise.resolve(data);
}

export async function queryRoleByUser(id: string) {
  return request(`/user/roles/${id}`);
}
