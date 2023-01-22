import { request, HOSTNAME } from "./api";
const path = "/api/insurcertificate";

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

export function checkInsurCertificate(idWork, jobType) {
  const url = HOSTNAME + "/api/checkInsurCertificate/" + idWork + "/" + jobType;
  return request("post", url, {});
}

export function printInsurCertificate(idInsu) {
  const url = HOSTNAME + "/api/printInsurCertificate/" + idInsu;
  return request("post", url, {});
}

