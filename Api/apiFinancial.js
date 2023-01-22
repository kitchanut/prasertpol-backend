import { request, HOSTNAME } from "./api";
const path = "/api/financial";

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

export function dataWork(idWork, payment_type) {
  const url = HOSTNAME + "/api/checkFinancial/" + idWork + "/" + payment_type;
  return request("post", url, {});
}

export function addFinancial(idWork) {
  const url = HOSTNAME + "/api/addFinancial/" + idWork;
  return request("post", url, {});
}

export function editFinancial(idWork, payment_type) {
  const url = HOSTNAME + "/api/editFinancial/" + idWork + "/" + payment_type;
  return request("post", url, {});
}

export function allFinancialonWork(idWork) {
  const url = HOSTNAME + "/api/allFinancialonWork/" + idWork;
  return request("post", url, {});
}

export function printFinancial(idFinancial) {
  const url = HOSTNAME + "/api/printFinancial/" + idFinancial;
  return request("post", url, {});
}
