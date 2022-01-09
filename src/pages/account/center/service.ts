import request from '@/services/config';
import type { ListItemDataType } from './data.d';

export async function queryCurrent() {
  return request(`/user/get`);
}

export async function getRolesInUser(id: string) {
  return request(`/user/roles/${id}`);
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}
