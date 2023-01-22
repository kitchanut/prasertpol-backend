import { request, HOSTNAME } from "./api";
const path = "/api/booking";

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

export function checkBooking(idWork, idCar, idCustomer) {
  const url =
    HOSTNAME + "/api/checkBooking/" + idWork + "/" + idCar + "/" + idCustomer;
  return request("post", url, {});
}

export function printBooking(idBooking) {
  const url = HOSTNAME + "/api/printBooking/" + idBooking;
  return request("post", url, {});
}
