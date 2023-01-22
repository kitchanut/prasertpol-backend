import { request, HOSTNAME } from "./api";
const path = "/api/car";

export function index() {
  const url = HOSTNAME + path;
  return request("get", url, {});
}

export function destroy(id) {
  const url = HOSTNAME + path + "/" + id;
  return request("delete", url, {});
  // return request("put", url, {});
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
  const url = HOSTNAME + "/api/SelectOnCars";
  return request("get", url, {});
}
export function selectAll() {
  const url = HOSTNAME + "/api/SelectOnCarAll";
  return request("get", url, {});
}

export function selectall() {
  const url = HOSTNAME + "/api/SelectAllCars";
  return request("get", url, {});
}

export function SelectCarNo() {
  const url = HOSTNAME + "/api/SelectCarNo";
  return request("get", url, {});
}

export function stockCar(params) {
  const url = HOSTNAME + "/api/StockOnCar";
  return request("post", url, params);
}

export function UpdateOnCar(id, params) {
  const url = HOSTNAME + "/api/UpdateOnCar/" + id;
  return request("post", url, params);
}

export function SelectDetail(id) {
  const url = HOSTNAME + "/api/SelectOnCar/" + id;
  return request("post", url, {});
}
export function getLastCarNo() {
  const url = HOSTNAME + "/api/lastCarNo";
  return request("post", url, {});
}
export function uploadImgCars(params) {
  const url = HOSTNAME + "/api/uploadImgCars";
  return request("post", url, params);
}

export function ImageCar(id) {
  const url = HOSTNAME + "/api/ImageCar/" + id;
  return request("post", url, {});
}

export function changeFistImg(params) {
  const url = HOSTNAME + "/api/change_fist_img";
  return request("post", url, params);
}

export function deleteAllImgCar(params) {
  const url = HOSTNAME + "/api/deleteAllImgCar";
  return request("post", url, params);
}

export function deleteFolder(params) {
  const url = HOSTNAME + "/api/deleteFolder";
  return request("post", url, params);
}

export function deleteImgCar(params) {
  const url = HOSTNAME + "/api/delete_img_car";
  return request("post", url, params);
}

export function filePop(params) {
  const url = HOSTNAME + "/api/upload_file_Pop";
  return request("post", url, params);
}
export function showCar(params) {
  const url = HOSTNAME + "/api/showCar";
  return request("post", url, params);
}

export function getAllinfo(id, user_group_permission) {
  const url = HOSTNAME + "/api/getAllinfo/" + id + "/" + user_group_permission;
  return request("get", url, {});
}

export function reRollCar(id) {
  const url = HOSTNAME + "/api/reRollCar/" + id;
  return request("get", url, {});
  // return request("put", url, {});
}

export function update_amountPrice() {
  const url = HOSTNAME + "/api/update_amountPrice";
  return request("get", url, {});
}

export function price_record_add(params) {
  const url = HOSTNAME + "/api/price_record_add";
  return request("post", url, params);
}

export function price_record_update(params) {
  const url = HOSTNAME + "/api/price_record_update";
  return request("post", url, params);
}
