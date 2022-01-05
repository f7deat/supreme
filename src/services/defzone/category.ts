import { request } from 'umi';
import { DOMAIN, TOKEN } from '../config';

const _prefix = `${DOMAIN}/api/category`;

/** LIST CATEGORY GET /api/all */
export async function getAllCategory() {
  return request<API.CategoryListItem[]>(`${_prefix}/all`, {
    method: 'GET',
    headers: {
      authorization: TOKEN,
    },
  });
}

/** LIST PARENT CATEGORY GET /api/list */
export async function getCategories(params: {
  /** PAGE INDEX */
  current?: number;
  /** PAGE SIZE */
  pageSize?: number;
}) {
  return request<API.CategoryListItem>(`${_prefix}/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    headers: {
      authorization: TOKEN,
    },
  });
}

/** ADD CATEGORY POST /api/category/add */
export async function addCategory(body: any) {
  return request(`${_prefix}/add`, {
    method: 'POST',
    headers: {
      authorization: TOKEN,
    },
    data: body,
  });
}

/** UPDATE CATEGORY POST /api/category/update */
export async function updateCategory(body: any) {
  return request(`${_prefix}/update`, {
    method: 'POST',
    headers: {
      authorization: TOKEN,
    },
    data: body,
  });
}

/** LIST PARRENT CATEGORY GET /api/category/list-parrent */
export async function getListParrentCategory() {
  return request<API.CategoryListItem[]>(`${_prefix}/list-parrent`, {
    method: 'GET',
    headers: {
      authorization: TOKEN,
    },
  });
}

/** DELETE CATEGORY GET /api/category/delete */
export async function deleteCategory(id: number) {
  return request(`${_prefix}/delete/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: TOKEN,
    },
  });
}

/** GET SINGLE CATEGORY GET /api/category/get */
export async function getCategory(id: number) {
  return request(`${_prefix}/${id}`, {
    method: 'GET',
    headers: {
      authorization: TOKEN,
    },
  });
}
