import { request, HOSTNAME } from "./api";
const path = "/api/outlaycost";

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
  const url = HOSTNAME + "/api/outlaycost_where";
  return request("post", url, params);
}

export function uploadFile_outlay(params) {
  const url = HOSTNAME + "/api/uploadFile_outlay";
  return request("post", url, params);
}

export function delete_uploadFile_outlay(params) {
  const url = HOSTNAME + "/api/delete_uploadFile_outlay";
  return request("post", url, params);
}

export function cancle_uploadFile_outlay(params) {
  const url = HOSTNAME + "/api/cancle_uploadFile_outlay";
  return request("post", url, params);
}

export function delete_outlay(id) {
  const url = HOSTNAME + "/api/delete_outlay" + "/" + id;
  return request("get", url, {});
}

export function report_withdraw_money(params) {
  const url = HOSTNAME + "/api/report_withdraw_money";
  return request("post", url, params);
}

export function comfirm_outlay(id) {
  const url = HOSTNAME + "/api/comfirm_outlay" + "/" + id;
  return request("get", url, {});
}

export function outlaycost_car(params) {
  const url = HOSTNAME + "/api/outlaycost_car";
  return request("post", url, params);
}

export function outlaycost_getwithTime(params) {
  const url = HOSTNAME + "/api/outlaycost_getwithTime";
  return request("post", url, params);
}
