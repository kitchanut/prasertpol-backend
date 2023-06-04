import { request, HOSTNAME } from "./api";
const path = "/api/working";

export function index() {
  const url = HOSTNAME + path;
  return request("get", url, {});
}

export function allData() {
  const url = HOSTNAME + "/api/working_allData";
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

export function CheckWorking(name, tel) {
  const url = HOSTNAME + "/api/CheckWorking/" + name + "/" + tel;
  return request("post", url, {});
}

export function updateStatusWorking(workingID, params) {
  const url = HOSTNAME + "/api/updateStatusWorking/" + workingID;
  return request("post", url, params);
}

export function selectWhere(params) {
  const url = HOSTNAME + "/api/workWhere";
  return request("post", url, params);
}

export function selectWhereClose(params) {
  const url = HOSTNAME + "/api/workWhereClose";
  return request("post", url, params);
}

export function selectWhereCancle(params) {
  const url = HOSTNAME + "/api/selectWhereCancle";
  return request("post", url, params);
}

export function cancel(params) {
  const url = HOSTNAME + "/api/work_cancel";
  return request("post", url, params);
}

export function getWorking_cancel(params) {
  const url = HOSTNAME + "/api/get_work_cancel";
  return request("post", url, params);
}

export function search(id) {
  const url = HOSTNAME + "/api/working_search_id/" + id;
  return request("post", url, {});
}

export function followWork(params) {
  const url = HOSTNAME + "/api/followWork";
  return request("post", url, params);
}

export function followDown(params) {
  const url = HOSTNAME + "/api/followDown";
  return request("get", url, params);
}

export function commission_month_by_team_branch(params) {
  const url = HOSTNAME + "/api/commission_month_by_team_branch";
  return request("post", url, params);
}

export function updateNote(workingID, params) {
  const url = HOSTNAME + "/api/updateNote/" + workingID;
  return request("post", url, params);
}
