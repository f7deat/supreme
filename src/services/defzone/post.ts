import { request } from 'umi';

export enum PostStatus {
  DRAFT,
  PUBLISH,
}

export async function queryPostByUser(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
  userId: string;
  type: number;
}) {
  return request(`post/list`, {
    params: {
      ...params,
    },
  });
}

export async function queryViewCount() {
  return request(`post/view`);
}

export async function queryPieChart() {
  return request(`dashboard/chart-post-by-categories`);
}

export async function queryPostCount() {
  return request(`post/count`);
}

async function setStatus(id: number, status: PostStatus) {
  return request(`post/set-status`, {
    method: 'POST',
    data: {
      id,
      status,
    },
  });
}

export async function publishRequest(id: number) {
  return setStatus(id, PostStatus.PUBLISH);
}

export async function queryPostCategory(id: string) {
  return request(`post/categories/${id}`);
}

export async function mapCategories(id: number, listCategoryId: number[]) {
  return request(`post/map-categories`, {
    method: 'POST',
    data: {
      id,
      listCategoryId,
    },
  });
}

export async function saveSetting(data: any) {
  return request(`post/save-setting`, {
    method: 'POST',
    data,
  });
}

export async function queryPost(id: string) {
  return request(`post/${id}`);
}
