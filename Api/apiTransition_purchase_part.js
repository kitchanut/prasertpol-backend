import { request, HOSTNAME } from "./api";
const path = "/api/transition_purchase";

export function index(params) {
  const url = HOSTNAME + path;
  return request("post", url, params);
}

export function selectWhereID(idPO) {
  const url = HOSTNAME + "/api/po_number_where/" + idPO;
  return request("post", url, {});
}
