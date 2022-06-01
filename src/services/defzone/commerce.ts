import request from '../config';
export async function queryProducts() {
  return request(`/commerce/list`);
}
