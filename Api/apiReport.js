import { request, HOSTNAME } from "./api";

export function booking_car(params) {
  const url = HOSTNAME + "/api/booking_car";
  return request("post", url, params);
}

export function report_purchase_car(params) {
  const url = HOSTNAME + "/api/report_purchase_car";
  return request("post", url, params);
}

export function report_sale_car(params) {
  const url = HOSTNAME + "/api/report_sale_car";
  return request("post", url, params);
}

export function report_work_cancle(params) {
  const url = HOSTNAME + "/api/report_work_cancle";
  return request("post", url, params);
}

export function report_booking_duplicate(params) {
  const url = HOSTNAME + "/api/report_booking_duplicate";
  return request("post", url, params);
}

export function report_profit(params) {
  const url = HOSTNAME + "/api/report_profit";
  return request("post", url, params);
}

export function report_commission(params) {
  const url = HOSTNAME + "/api/report_commission";
  return request("post", url, params);
}
