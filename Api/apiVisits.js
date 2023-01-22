import { request, HOSTNAME } from './api'
const path = '/api/visits'

export function index() {
  const url = HOSTNAME + path
  return request('get', url, {});
}

export function destroy(id) {
  const url = HOSTNAME + path + '/' + id
  return request('delete', url, {});
}

export function store(params) {
  const url = HOSTNAME + path
  return request('post', url, params);
}

export function update(id, params) {
  const url = HOSTNAME + path + '/' + id
  return request('put', url, params);
}

export function show(id) {
  const url = HOSTNAME + path + '/' + id
  return request('get', url, {});
}

export function MyUpdate(id, params) {
  const url = HOSTNAME + path + '/update/' + id
  return request('post', url, params);
}

export function getbyPatient(id) {
  const url = HOSTNAME + path + '/getbyPatient/' + id
  return request('get', url, {});
}

export function GroupbyMonth() {
  const url = HOSTNAME + path + '/GroupbyMonth'
  return request('get', url, {});
}

export function getImage() {
  const url = HOSTNAME + path + '/getImage'
  return request('get', url, {});
}
