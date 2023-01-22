import { request, HOSTNAME } from "./api";
const path = "/api/transition_stock_parts";

export function index(params) {
  const url = HOSTNAME + path;
  return request("post", url, params);
}

export function selectWhereJob(idPart) {
  const url = HOSTNAME + "/api/transition_stock_parts_where/" + idPart;
  return request("post", url, {});
}
