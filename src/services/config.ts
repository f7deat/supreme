import { extend } from 'umi-request';

export const DOMAIN = 'https://defzone.net';

const request = extend({
  prefix: 'https://defzone.net/api',
});

request.interceptors.request.use((url, options) => {
  const token = localStorage.getItem('def_token');
  const headers = {
    authorization: `Bearer ${token}`,
  };
  return {
    url: url,
    options: { ...options, headers: headers },
  };
});

export default request;
