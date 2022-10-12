import { request } from 'umi';

export async function currentUser() {
  return request<API.User>(`user`);
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: Record<string, any>) {
  return request<API.LoginResult>(`user/password-sign-in`, {
    method: 'POST',
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
/** 删除规则 GET /apipost */
export async function queryPosts(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<API.PostListItem>(`post/list`, {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function getPost(id: string) {
  return request<API.PostBody>(`post/get/${id}`);
}

/** Add post POST /apipost/add */
export async function addPost(body: any) {
  return request(`post/add`, {
    method: 'POST',
    data: {
      ...body,
    },
  });
}

/** Update post POST /apipost/update */
export async function updatePost(body: any) {
  return request(`post/update`, {
    method: 'POST',
    data: {
      ...body,
    },
  });
}

/** Remove post DELETE /apipost/delete */
export async function deletePost(postId: number) {
  return request(`post/delete/${postId}`, {
    method: 'POST',
  });
}

export async function getCategoriesInPost(postId: number) {
  return request(`post/get-list-category-id-in-post/${postId}`, {
    method: 'GET',
  });
}
