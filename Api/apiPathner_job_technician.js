import { request, HOSTNAME } from "./api";
const path = "/api/job_pathner_technician";

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

export function selectWhereBranch(params) {
  const url = HOSTNAME + "/api/PathnerJobTechnicianWhere";
  return request("post", url, params);
}

export function selectWhereCar(idCar) {
  const url = HOSTNAME + "/api/JobTechnicianWhereCar_out/" + idCar;
  return request("post", url, {});
}
