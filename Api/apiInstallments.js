import { request, HOSTNAME } from "./api";
const path = "/api/installments";

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

export function getByWorkingID(working_id) {
  const url = HOSTNAME + path + "/getByWorkingID/" + working_id;
  return request("get", url, {});
}

export function getByUser(user_group_permission, user_id, branch_id) {
  const url = HOSTNAME + path + "/getByUser/" + user_group_permission + "/" + user_id + "/" + branch_id;
  return request("get", url, {});
}
