import { request, HOSTNAME } from "./api";
const path = "/api/auth/logout";

export function index() {
  const url = HOSTNAME + path;
  return request("post", url, {});
}
