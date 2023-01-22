import { request, HOSTNAME } from "./api";
const path = "/api/purchase";

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
export function selectPoNumber(po_number) {
  const url = HOSTNAME + "/api/purchase_where/" + po_number;
  return request("post", url, {});
}
export function selectAll(idBranch) {
  const url = HOSTNAME + "/api/purchase_all_where/" + idBranch;
  return request("post", url, {});
}
