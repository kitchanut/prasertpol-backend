import { request, HOSTNAME } from "./api";
const path = "/api/transition_withdraw_parts";

export function index() {
  const url = HOSTNAME + path;
  return request("get", url, {});
}
export function selectWhere(idPart) {
  const url = HOSTNAME + "/api/transition_withdraw_parts_where/" + idPart;
  return request("post", url, {});
}
