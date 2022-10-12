import { request } from 'umi';

export async function queryProducts() {
  return request(`product/list`);
}

export async function queryAddProduct(params: any) {
  return request(`product/add-new`, {
    method: 'POST',
    data: params,
  });
}

export async function queryUpdateProduct(params: any) {
  return request(`product/update-new`, {
    method: 'POST',
    data: params,
  });
}

export async function queryTotalProduct() {
  return request(`product/count`);
}
