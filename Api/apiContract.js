import { request, HOSTNAME } from "./api";
const path = "/api/contract";

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

export function checkContract(idWork, idCar, idCustomer) {
  const url =
    HOSTNAME + "/api/checkContract/" + idWork + "/" + idCar + "/" + idCustomer;
  return request("post", url, {});
}

export function printContract(idContract) {
  const url = HOSTNAME + "/api/printContract/" + idContract;
  return request("post", url, {});
}

