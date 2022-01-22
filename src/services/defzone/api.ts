import request from '../config';

/** GET BACKUP */
export async function getBackup() {
  return request(`/file/backup`, {
    responseType: 'blob',
  });
}

/** Danh sách bài viết theo user */
export async function queryPostsByUser(id: string) {
  return request(`/post/list-in-user/${id}`);
}

export async function queryFiles(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request(`/file/list`, {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function querySetting(key: string) {
  return request(`/appsetting/details/${key}`);
}

export async function saveSetting(body: any) {
  return request(`/appsetting/save`, {
    data: body,
    method: 'POST',
  });
}

export async function queryUser() {
  return request<API.CurrentUser>(`/user`, {
    method: 'GET',
  });
}
