import { extend } from 'umi-request';

const request = extend({
  prefix: `https://defzone.net/api`,
  headers: {
    authorization: `Bearer ${localStorage.getItem('def_token')}`,
  },
});

export default request;
