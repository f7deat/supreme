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

export async function queryViewCount() {
  return request(`/post/view`)
}

export async function queryPieChart() {
  return request(`/dashboard/chart-post-by-categories`);
}