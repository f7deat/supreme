import { DOMAIN, TOKEN } from '@/services/config';
import { request } from 'umi';
import type { ListItemDataType } from './data.d';

export async function queryCurrent() {
  return request(`${DOMAIN}/api/user/get`, {
    headers: {
      authorization: TOKEN,
    },
  });
}

export async function getRolesInUser(id: string) {
  return request(`${DOMAIN}/api/user/roles/${id}`, {
    method: 'GET',
    headers: {
      authorization: TOKEN,
    },
  });
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}
