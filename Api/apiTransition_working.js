import { request, HOSTNAME } from "./api";
const path = "/api/transition_working";

export function index(params) {
  const url = HOSTNAME + path;
  return request("post", url, params);
}

export function transition_working_id(id) {
  const url = HOSTNAME + "/api/working_where/" + id;
  return request("post", url, {});
}
