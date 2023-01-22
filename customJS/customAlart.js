import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

Vue.use(VueSweetalert2, options);

export function MiddleSuccess() {
  Vue.swal({
    text: "สำเร็จ",
    icon: "success",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function MiddleWarning() {
  Vue.swal({
    text: "ทำรายการไม่ถูกต้อง",
    icon: "warning",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function carNoDuplicate() {
  Vue.swal({
    text: "ลำดับรถซ้ำ",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function carRegDuplicate() {
  Vue.swal({
    text: "ทะเบียนหรือจังหวัดซ้ำ",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function MiddleDuplicate() {
  Vue.swal({
    text: "มีข้อมูลซ้ำกัน",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function checkShareUrl() {
  Vue.swal({
    title: "การแชร์ถูกยกเลิก !",
    text: "เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",
    icon: "warning",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function Errorlogin() {
  Vue.swal({
    text: "ชื่อผู้ใช้งานหรือรหัสผ่านผิด",
    icon: "warning",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function notPermission() {
  Vue.swal({
    text: "บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",
    icon: "warning",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function MiddleError() {
  Vue.swal({
    text: "เกิดข้อผิดพลาด",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function DuplicateEmail() {
  Vue.swal({
    text: "ชื่อผู้ใช้งานซ้ำ",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function DuplicateCode() {
  Vue.swal({
    text: "รหัสลับซ้ำกัน",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function ErrorJob() {
  Vue.swal({
    text: "คุณยังไม่ได้ไปรับอะไหล่",
    icon: "error",
    confirmButtonText: "ตกลง",
    showCloseButton: true,
  });
}

export function TopSuccess() {
  Vue.swal({
    position: "top-end",
    icon: "success",
    title: "สำเร็จ",
    showConfirmButton: false,
    timer: 1500,
  });
}

export function TopError() {
  Vue.swal({
    position: "top-end",
    icon: "error",
    title: "เกิดข้อผิดพลาด",
    showConfirmButton: false,
    timer: 1500,
  });
}

export async function RerollConfirmed() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ยืนยันการเรียกคืน ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ไม่",
        confirmButtonText: "ใช่",
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function Confirmed() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ยืนยันการลบ ?",
        text: "ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ไม่",
        confirmButtonText: "ลบ",
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function ConfirmedRepeat() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "กำลังเพิ่มซ้ำ",
        text: "มีข้อมูลอยู่แล้วยืนยันทำรายการหรือไม่ ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ไม่",
        confirmButtonText: "ใช่",
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function checkSelect() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ข้อมูลยังไม่ครบ",
        text: "กรุณาใส่ข้อมูลที่เป็นสีแดง",
        icon: "error",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
        showCloseButton: true,
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function ConfirmedStatus() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ยืนยันการอัพเดตสถานะ",
        text: "ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ไม่",
        confirmButtonText: "ใช่",
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function ReceivingMoneyFail() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ไม่สามารถปิดงานได้",
        text: "ยังมีรายการที่ทำไม่ครบ",
        icon: "error",
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
        showCloseButton: true,
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function noFileConfirm() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ไม่สามารถบันทึกได้",
        text: "กรุณาแนบไฟล์",
        icon: "error",
        showCancelButton: false,
        showConfirmButton: true,
        showDenyButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
        showCloseButton: true,
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}

export async function ConfirmedStock() {
  return new Promise((resolve, reject) => {
    resolve(
      Vue.swal({
        title: "ยืนยันรับรายการเข้าคลัง ?",
        text: "ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ไม่",
        confirmButtonText: "ใช่",
      }).then((result) => {
        return result.isConfirmed;
      })
    );
  });
}
