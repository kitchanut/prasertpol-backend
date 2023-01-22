import { request, HOSTNAME } from './api'
const path = '/api/liff'

export function check_register(params) {
  const url = HOSTNAME + path + '/check_register';
  return request('post', url, params);
}
