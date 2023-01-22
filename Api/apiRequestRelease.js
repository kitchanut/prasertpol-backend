import { request, HOSTNAME } from './api'
const path = '/api/request_release'

export function index() {
  const url = HOSTNAME + path
  return request('get', url, {});
}
export function store(params) {
  const url = HOSTNAME + path
  return request('post', url, params);
}

export function update(id, params) {
  const url = HOSTNAME + path + '/' +id
  return request('put', url, params);
}

export function show(id) {
  const url = HOSTNAME + path + '/' +id
  return request('get', url, {});
}

export function destroy(id) {
  const url = HOSTNAME + path + '/' + id
  return request('delete', url, {});
}

export function cancle(id) {
  const url = HOSTNAME + path + '/cancle/' + id
  return request('delete', url, {});
}

export function indexCustom(params) {
  const url = HOSTNAME + path +"/indexCustom";
  return request("post", url, params);
}

export function countData(params) {
  const url = HOSTNAME + path + "/countData";
  return request("post", url, params);
}

