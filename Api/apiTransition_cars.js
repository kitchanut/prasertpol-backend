import { request, HOSTNAME } from "./api";
const path = "/api/transition_cars";

export function index(params) {
  const url = HOSTNAME + path;
  return request("post", url, params);
}

export function car_regis(branch_id) {
  const url = HOSTNAME + "/api/car_regis/" + branch_id;
  return request("post", url, {});
}

export function selectWhereCar(idCar) {
  const url = HOSTNAME + "/api/transition_car_where/" + idCar;
  return request("post", url, {});
}
