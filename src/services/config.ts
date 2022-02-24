import { extend } from 'umi-request';

export const DOMAIN = 'https://defzone.net';

const token = () => localStorage.getItem('def_token');

const request = extend({
  prefix: `https://defzone.net/api`,
  headers: {
    authorization: `Bearer ${token()}`,
  },
});

export default request;
