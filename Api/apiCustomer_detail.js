import { request, HOSTNAME } from "./api";
const path = "/api/customer_detail";

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

export function SelectCustomerDetail(id) {
  const url = HOSTNAME + "/api/SelectCustomerDetail/" + id;
  return request("post", url, {});
}
