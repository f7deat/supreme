import { request } from 'umi';

/** LIST CATEGORY GET /api/all */
export async function getAllCategory() {
  return request<API.CategoryListItem[]>(`/category/all`, {
    method: 'GET',
  });
}

/** LIST PARENT CATEGORY GET /api/list */
export async function getCategories(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request<API.CategoryListItem>(`/category/list`, {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

/** ADD CATEGORY POST /api/category/add */
export async function addCategory(body: any) {
  return request(`/category/add`, {
    method: 'POST',
    data: body,
  });
}

/** UPDATE CATEGORY POST /api/category/update */
export async function updateCategory(body: any) {
  return request(`/category/update`, {
    method: 'POST',
    data: body,
  });
}

/** LIST PARRENT CATEGORY GET /api/category/list-parrent */
export async function getListParrentCategory() {
  return request<API.CategoryListItem[]>(`/category/list-parrent`, {
    method: 'GET',
  });
}

/** DELETE CATEGORY GET /api/category/delete */
export async function deleteCategory(id: number) {
  return request(`/category/delete/${id}`, {
    method: 'POST',
  });
}

/** GET SINGLE CATEGORY GET /api/category/get */
export async function queryCategory(id: number) {
  return request(`/category/${id}`);
}

export async function queryListType() {
  return request(`/category/list-type`);
}
