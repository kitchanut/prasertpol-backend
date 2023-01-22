import { request, HOSTNAME } from "./api";
const path = "/api/receiving_money";

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

export function checkReceivingMoney(idWork, receivingMoney_type) {
  const url =
    HOSTNAME + "/api/checkReceivingMoney/" + idWork + "/" + receivingMoney_type;
  return request("post", url, {});
}

export function selectCommission(params) {
  const url = HOSTNAME + "/api/commission";
  return request("post", url, params);
}

export function printReceivingMoney(id) {
  const url = HOSTNAME + "/api/printReceivingMoney/" + id;
  return request("post", url, {});
}

export function printCommi(user_id) {
  const url = HOSTNAME + "/api/printCommi/" + user_id;
  return request("post", url, {});
}

export function getWithWorkID(working_id) {
  const url = HOSTNAME + "/api/receiving_money/getWithWorkID/" + working_id;
  return request("get", url, {});
}
