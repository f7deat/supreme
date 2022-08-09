import { request } from 'umi';
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

export async function queryRole() {
  const response = await request<API.RoleListItem[]>(`/role/list`);
  const data = {
    data: response,
    current: 1,
    pageSize: 10,
    total: 10,
  };
  return Promise.resolve(data);
}

export async function deleteUser(id: string) {
  return request(`/user/delete/${id}`, {
    method: 'POST',
  });
}

export async function addToRole(userId: string, roleName: string) {
  return request(`/user/add-to-role`, {
    method: 'POST',
    data: {
      userId,
      roleName,
    },
  });
}

export async function queryRoleByUser(id: string) {
  return request(`/user/roles/${id}`);
}

export async function syncRole() {
  return request(`/role/sync`, {
    method: 'POST',
  });
}
