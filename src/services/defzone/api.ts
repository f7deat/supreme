import request from '../config';

/** GET BACKUP */
export async function getBackup() {
  return request(`/file/backup`, {
    responseType: 'blob',
  });
}
