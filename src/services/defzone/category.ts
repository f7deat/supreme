import { request } from 'umi';

/** LIST CATEGORY GET /api/all */
export async function getAllCategory() {
  return request<API.CategoryListItem[]>(`category/all`);
}

/** LIST PARENT CATEGORY GET /api/list */
export async function getCategories(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request<API.CategoryListItem>(`category/list`, {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

/** ADD CATEGORY POST /apicategory/add */
export async function addCategory(body: any) {
  return request(`category/add`, {
    method: 'POST',
    data: body,
  });
}

/** UPDATE CATEGORY POST /apicategory/update */
export async function updateCategory(body: any) {
  return request(`category/update`, {
    method: 'POST',
    data: body,
  });
}

/** LIST PARRENT CATEGORY GET /apicategory/list-parrent */
export async function getListParrentCategory() {
  return request<API.CategoryListItem[]>(`category/list-parrent`, {
    method: 'GET',
  });
}

/** DELETE CATEGORY GET /apicategory/delete */
export async function deleteCategory(id: number) {
  return request(`category/delete/${id}`, {
    method: 'POST',
  });
}

/** GET SINGLE CATEGORY GET /apicategory/get */
export async function queryCategory(id: number) {
  return request(`category/${id}`);
}

export async function queryListType() {
  return request(`category/list-type`);
}

export async function exportCategory() {
  return request(`category/export`, {
    method: 'POST',
  });
}
