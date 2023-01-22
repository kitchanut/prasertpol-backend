import { request, HOSTNAME } from "./api";
const path = "/api/transition_repair";

export function index() {
  const url = HOSTNAME + path;
  return request("get", url, {});
}

export function selectWhereJob(idJob) {
  const url = HOSTNAME + "/api/transition_repair_where/" + idJob;
  return request("post", url, {});
}
