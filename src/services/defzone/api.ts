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
