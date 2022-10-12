import { request } from 'umi';

export async function queryBackups() {
  return request(`file/backup/list`);
}
