import { request, HOSTNAME } from "./api";

export function dashboardManagerDoughnutStock(params) {
  const url = HOSTNAME + "/api/dashboard_manager_doughnut_stock";
  return request("post", url, params);
}
export function dashboardManagerCar(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_car";
  return request("post", url, params);
}
export function dashboardManagerPie(params) {
  const url = HOSTNAME + "/api/dashboard_manager_pie";
  return request("post", url, params);
}
export function dashboardManagerBarVisit(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_visit";
  return request("post", url, params);
}
export function dashboardManagerBarVisitCarType(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_visit_car_type";
  return request("post", url, params);
}
export function dashboardManagerBarVisitCarModel(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_visit_car_model";
  return request("post", url, params);
}
export function dashboardManagerBarVisitCarSerie(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_visit_car_serie";
  return request("post", url, params);
}
export function dashboardManagerBarTopCarSerie(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_top_car_serie";
  return request("post", url, params);
}

export function dashboardManagerBarVisitCarSlacken(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_visit_car_slacken";
  return request("post", url, params);
}
export function dashboardManagerBarVisitCarDown(params) {
  const url = HOSTNAME + "/api/dashboard_manager_bar_visit_car_down";
  return request("post", url, params);
}

export function dashboardSaleDoughnut(params) {
  const url = HOSTNAME + "/api/dashboard_sale_doughnut";
  return request("post", url, params);
}
export function dashboardSaleBar(params) {
  const url = HOSTNAME + "/api/dashboard_sale_bar";
  return request("post", url, params);
}

export function dashboard_saleByBranch(params) {
  const url = HOSTNAME + "/api/dashboard_saleByBranch";
  return request("post", url, params);
}

export function dashboard_inventory_car(params) {
  const url = HOSTNAME + "/api/dashboard_inventory_car";
  return request("get", url, {});
}
