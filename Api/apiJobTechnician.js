import { request, HOSTNAME } from "./api";
const path = "/api/technician";

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

export function selectJob(idJob) {
  const url = HOSTNAME + "/api/SelectOnJob/" + idJob;
  return request("post", url, {});
}
export function updateOnJob(id, status) {
  const url = HOSTNAME + "/api/updateOnJob/" + id + "/" + status;
  return request("post", url, {});
}
export function checkTechnician(idWork, idCar) {
  const url = HOSTNAME + "/api/checkTechnician/" + idWork + "/" + idCar;
  return request("post", url, {});
}

export function selectWhereBranch(params) {
  const url = HOSTNAME + "/api/JobTechnicianWhere";
  return request("post", url, params);
}

export function selectWhereCar(idCar) {
  const url = HOSTNAME + "/api/JobTechnicianWhereCar/" + idCar;
  return request("post", url, {});
}
