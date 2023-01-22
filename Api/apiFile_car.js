import { request, HOSTNAME } from "./api";
const path = "/api/file_cars";

export function index() {
  const url = HOSTNAME + path;
  return request("get", url, {});
}

export function destroy(id) {
  const url = HOSTNAME + path + "/" + id;
  return request("delete", url, {});
}

export function store(params) {
  const url = HOSTNAME + path;
  return request("post", url, params);
}

export function update(id, params) {
  const url = HOSTNAME + path + "/" + id;
  return request("put", url, params);
}

export function show(id) {
  const url = HOSTNAME + path + "/" + id;
  return request("get", url, {});
}

export function file_car(params) {
  const url = HOSTNAME + "/api/file_car";
  return request("post", url, params);
}

export function upload_file_car(params) {
  const url = HOSTNAME + "/api/upload_file_car";
  return request("post", url, params);
}

export function delete_file_car(params) {
  const url = HOSTNAME + "/api/delete_file_car";
  return request("post", url, params);
}

export function change_date_file_car(params) {
  const url = HOSTNAME + "/api/change_date_file_car";
  return request("post", url, params);
}
