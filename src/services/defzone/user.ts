import { request } from 'umi';
import { DOMAIN, TOKEN } from '../config';

const _prefix = `${DOMAIN}/api/user`;

/** LIST USER GET /api/user/list */
export async function getUsers(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request<API.CategoryListItem[]>(`${_prefix}/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    headers: {
      authorization: TOKEN,
    },
  });
}
