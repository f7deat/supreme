import { extend } from 'umi-request';

export const DOMAIN = 'https://defzone.net';

const request = extend({
  prefix: `https://defzone.net/api`,
  headers: {
    authorization: `Bearer ${localStorage.getItem('def_token')}`,
  },
});

export default request;
