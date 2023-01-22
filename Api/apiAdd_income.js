import { request, HOSTNAME } from "./api";
const path = "/api/income";

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

export function index_where(params) {
  const url = HOSTNAME + "/api/income_where";
  return request("post", url, params);
}

export function uploadFile_income(params) {
  const url = HOSTNAME + "/api/uploadFile_income";
  return request("post", url, params);
}

export function delete_uploadFile_income(params) {
  const url = HOSTNAME + "/api/delete_uploadFile_income";
  return request("post", url, params);
}

export function cancle_uploadFile_income(params) {
  const url = HOSTNAME + "/api/cancle_uploadFile_income";
  return request("post", url, params);
}

export function delete_income(id) {
  const url = HOSTNAME + "/api/delete_income" + "/" + id;
  return request("get", url, {});
}

export function report_income(params) {
  const url = HOSTNAME + "/api/report_income";
  return request("post", url, params);
}

export function comfirm_income(id) {
  const url = HOSTNAME + "/api/comfirm_income" + "/" + id;
  return request("get", url, {});
}

export function income_car(params) {
  const url = HOSTNAME + "/api/income_car";
  return request("post", url, params);
}
