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
  name: string;
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
  return request<API.CurrentUser>(`/user`);
}

/** Total storage file size (KB) */
export async function queryTotalUsed() {
  return { data: await request<number>(`/file/total-used`) };
}

export async function upload(data: any) {
  return request(`/file/upload`, {
    method: 'POST',
    data,
  });
}

/** Delete file */
export async function deleteFile(id: string) {
  return request(`/file/delete/${id}`, {
    method: 'POST',
  });
}

export async function queryPostByCategory(
  id: number,
  params: {
    current?: number;
    pageSize?: number;
  },
) {
  return request(`/post/list-by-category/${id}`, {
    params: {
      ...params,
    },
  });
}

export async function queryPopularPosts() {
  return request(`/post/get-list-popular`);
}

export async function readAllText(type: string) {
  return request(`/file/read-all-text`, {
    params: {
      type,
    },
  });
}

export async function queryMenus(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
  name?: string;
}) {
  return request(`/menu/list`, {
    params: {
      ...params,
    },
  });
}

export async function queryParrents() {
  return request(`/menu/all-parrent`);
}

export async function addMenu(params: API.MenuListItem) {
  return request(`/menu/add`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function queryBillings(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request(`/billing/list`, {
    params: {
      ...params,
    },
  });
}

export async function addBilling(params: API.BillingListItem) {
  return request(`/billing/add`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
