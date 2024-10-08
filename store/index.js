import createPersistedState from "vuex-persistedstate";
// export const plugins = [createPersistedState()]

export const plugins = [
  createPersistedState({
    paths: ["selectedHeaders", "selectedHeaderIndexs"],
  }),
];

export const state = () => ({
  linkFacebook: "https://th-th.facebook.com/prasertpolrungruang/",
  status_working: [
    "",
    "ลูกค้าสนใจ",
    "ยืนยันการจอง",
    "วางมัดจำแล้ว",
    "นัดทำสัญญาแล้ว",
    "รอแบงค์อนุมัติ",
    "แบงค์ไม่อนุมัติ",
    "แบงค์อนุมัติแล้ว",
    "จัดทำชุดโอน",
    "โอนรถสำเร็จ",
    "รับเงินแล้ว",
    "ปิดงาน",
  ],
  hear_from_type: [
    "หน้าร้าน",
    "เพจบริษัท",
    "ลูกค้าเก่าแนะนำ",
    "นายหน้า",
    "หน้าร้าน",
    "ใบปลิว",
    "Marketplace",
    "ไลน์/เพจส่วนตัว",
    "ออนไลน์",
  ],
  month_Select: [
    { value: 1, title: "มกราคม" },
    { value: 2, title: "กุมภาพันธ์" },
    { value: 3, title: "มีนาคม" },
    { value: 4, title: "เมษายน" },
    { value: 5, title: "พฤษภาคม" },
    { value: 6, title: "มิถุนายน" },
    { value: 7, title: "กรกฎาคม" },
    { value: 8, title: "สิงหาคม" },
    { value: 9, title: "กันยายน" },
    { value: 10, title: "ตุลาคม" },
    { value: 11, title: "พฤศจิกายน" },
    { value: 12, title: "ธันวาคม" },
  ],
  months_th: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
  months_th_mini: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
  code_color: [
    "#007BC5",
    "#DE2119",
    "#9C427B",
    "#009442",
    "#FFF700",
    "#E67B19",
    "#FFC500",
    "#4A527B",
    "#DE224A",
    "#3A736B",
    "#9C638C",
    "#83C521",
  ],
  yearSelect: [
    { value: 1, title: "ปีนี้" },
    { value: 2, title: "ปีก่อน" },
    { value: 3, title: "2 ปีก่อน" },
  ],
  carStockSelect: [
    { value: 1, title: "รอรับเข้าคลัง" },
    { value: 2, title: "อยู่ในคลัง" },
    { value: 3, title: "ขายออก" },
    { value: 0, title: "ทั้งหมด" },
  ],
  selectWorkingStatus: [
    { value: 11, title: "ขายได้" },
    { value: 7, title: "กำลังดำเนินการ" },
    { value: 3, title: "ทั้งหมด" },
  ],
  timeSelect: [
    { value: 1, title: "วันนี้" },
    { value: 2, title: "เมื่อวาน" },
    { value: 3, title: "7 วันที่แล้ว" },
    { value: 4, title: "30 วันที่แล้ว" },
    { value: 5, title: "เดือนนี้" },
    { value: 6, title: "เดือนที่แล้ว" },
    { value: 7, title: "3 เดือนที่แล้ว" },
    { value: 8, title: "6 เดือนที่แล้ว" },
    { value: 9, title: "ปีนี้" },
    { value: 10, title: "3 ปีที่แล้ว" },
  ],
  selectedHeaders: [],
  selectedHeaderIndexs: [],
});

export const mutations = {
  setSelectedHeaders(state, value) {
    state.selectedHeaders = value;
  },
  setSelectedHeaderIndexs(state, value) {
    state.selectedHeaderIndexs = value;
  },
  setHeaderWidth(state, value) {
    state.selectedHeaders[value.index].width = value.width;
  },
  rearrangeHeader(state, value) {
    // state.selectedHeaders[value.index].width = value.width;

    const oldIndex = value.oldIndex;
    const newIndex = value.newIndex;
    if (newIndex >= state.selectedHeaders.length) {
      let k = newIndex - state.selectedHeaders.length + 1;
      while (k--) {
        state.selectedHeaders.push(undefined);
      }
    }
    state.selectedHeaders.splice(newIndex, 0, state.selectedHeaders.splice(oldIndex, 1)[0]);
  },
};
