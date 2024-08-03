import { request, HOSTNAME } from "./api";
const path = "/api/appointment_bank";

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

export function checkAppointmentBank(idWork) {
  const url = HOSTNAME + "/api/checkAppointmentBank/" + idWork;
  return request("post", url, {});
}
