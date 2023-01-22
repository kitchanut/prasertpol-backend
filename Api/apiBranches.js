import { request, HOSTNAME } from "./api";
const path = "/api/branches";

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
  return request("post", url, params);
}

export function show(id) {
  const url = HOSTNAME + path + "/" + id;
  return request("get", url, {});
}
export function select() {
  const url = HOSTNAME + "/api/SelectOnBranches";
  return request("get", url, {});
}
export function autoSelect(id) {
  const url = HOSTNAME + "/api/selectOnBranch/" + id;
  return request("post", url, {});
}

export function get_Province() {
  const url = HOSTNAME + "/api/SelectOnProvince";
  return request("get", url, {});
}
