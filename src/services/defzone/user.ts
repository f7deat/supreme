import request from '../config';

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
