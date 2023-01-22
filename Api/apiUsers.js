import { request, HOSTNAME } from "./api";
const path = "/api/users";

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

export function selectSale() {
  const url = HOSTNAME + "/api/SelectOnSale";
  return request("get", url, {});
}

export function selectTechnicianBuild(branch_id) {
  const url = HOSTNAME + "/api/SelectOnTechnicianBuild/" + branch_id;
  return request("get", url, {});
}

export function selectBuild() {
  const url = HOSTNAME + "/api/SelectOnBuild";
  return request("get", url, {});
}
