import { request, HOSTNAME } from "./api";
const path = "/api/car_series";

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

export function select() {
  const url = HOSTNAME + "/api/SelectOnCarSeries";
  return request("get", url, {});
}

export function selectDropdown(car_types_id, car_models_id) {
  const url =
    HOSTNAME + "/api/SelectOnCarSerie/" + car_types_id + "/" + car_models_id;
  return request("post", url, {});
}

export function selectDropdownCarSerieOnly(car_models_id) {
  const url = HOSTNAME + "/api/SelectOnCarSerieOnly/" + car_models_id;
  return request("post", url, {});
}
