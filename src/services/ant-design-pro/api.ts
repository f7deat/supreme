// @ts-ignore
// eslint-disable-next-line no-use-before-define
import { request } from 'umi';
import { DOMAIN } from '../config';

const gateway = `${DOMAIN}/api`;
const token = localStorage.getItem('def_token');

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return request<API.CurrentUser>(`${gateway}/user/get`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    //...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: Record<string, any>) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: Record<string, any>) {
  return request<API.LoginResult>(`${gateway}/user/password-sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: Record<string, any>) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: Record<string, any>,
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: Record<string, any>) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: Record<string, any>) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: Record<string, any>) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
/** 删除规则 GET /api/post */
export async function getPosts(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<API.PostListItem>(`${gateway}/post/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

/** Get single post GET /api/post/get/{id} */
export async function getPost(id: number) {
  return request<any>(`${gateway}/post/get/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

/** Add post POST /api/post/add */
export async function addPost(body: any) {
  return request(`${gateway}/post/add`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: {
      post: body,
      listCategoryId: body.categories,
    },
  });
}

/** Update post POST /api/post/update */
export async function updatePost(body: any) {
  return request(`${gateway}/post/update`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: {
      post: body,
      listCategoryId: body.categories,
    },
  });
}

/** Remove post DELETE /api/post/delete */
export async function deletePost(postId: number) {
  return request(`${gateway}/post/remove/${postId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function getCategoriesInPost(postId: number) {
  return request(`${gateway}/post/get-list-category-id-in-post/${postId}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
