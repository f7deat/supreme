import { request } from 'umi';
import { DOMAIN, TOKEN } from '../config';

const _prefix = `${DOMAIN}/api/category`;

/** LIST CATEGORY GET /api/all */
export async function getCategories() {
  return request<API.CategoryListItem[]>(`${_prefix}/all`, {
    method: 'GET',
    headers: {
      authorization: TOKEN,
    },
  });
}
