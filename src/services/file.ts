import { request } from 'umi';

export async function queryBackups() {
  return request(`file/backup/list`);
}

export async function getExport(url: string) {
  return request(url, {
    method: 'POST',
  });
}

export async function importData(url: string, data: FormData) {
  return request(url, {
    method: 'POST',
    data,
  });
}
