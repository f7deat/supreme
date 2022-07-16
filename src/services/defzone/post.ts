import { request } from 'umi';

export async function queryPostByUser(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
  userId: string;
  type: number;
}) {
  return request(`/post/list`, {
    params: {
      ...params,
    },
  });
}
