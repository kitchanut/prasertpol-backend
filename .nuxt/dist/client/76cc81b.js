(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1032:function(t,n,e){"use strict";e.r(n);var r=e(14),o=(e(39),e(57),e(595)),c=e(457),f=e(473),l={components:{dialogNew:e(900).default},data:function(){return{user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),loading:!0,search:"",id:"",dialog:!1,formTitle:"Add",action:"add",branches:[],branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),headers:[{text:"ลำดับ",value:"no",width:"7%",align:"center"},{text:"ชื่ออะไหล่",value:"car_part.car_part_name",width:"15%"},{text:"จำนวน",value:"car_part_amount",width:"15%"},{text:"สาขา",value:"branch.branch_name",width:"15%"},{text:"จัดการ",value:"actions",sortable:!1,width:"12%"}],data:[],dataParts:[],countGuide:0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getBranches();case 2:return n.next=4,t.getDataParts();case 4:t.selectSee();case 5:case"end":return n.stop()}}),n)})))()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getDataParts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a();case 2:e=n.sent,t.dataParts=e.data,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},getBranches:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.c();case 2:return e=n.sent,t.branches=e.data,n.next=6,t.branches.push({id:0,branch_name:"ทั้งหมด"});case 6:t.loading=!1;case 7:case"end":return n.stop()}}),n)})))()},editItem:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.formTitle="ปรับสินค้าในสต็อก",n.dialog=!0,n.id=t,n.action="edit";case 4:case"end":return e.stop()}}),e)})))()},selectSee:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.data=[],n.countGuide=0,0==t)n.data=n.dataParts;else for(r=0;r<n.dataParts.length;r++)n.dataParts[r].branch_id==n.branch_id&&n.data.push(n.dataParts[r]);case 3:case"end":return e.stop()}}),e)})))()},addSuccess:function(t){var n=this;"StockPart"==t&&(this.dialog=!1),this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getDataParts();case 2:n.selectSee(),c.k();case 4:case"end":return t.stop()}}),t)}))))},addError:function(t){var n=this;"StockPart"==t&&(this.dialog=!1),this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getDataParts();case 2:c.j();case 3:case"end":return t.stop()}}),t)}))))}},watch:{data:function(){var t=this;return this.data.map((function(n){n.no=t.data.map((function(t){return t.id})).indexOf(n.id)+1}))}}},d=e(42),m=e(52),h=e.n(m),w=e(472),x=e(210),v=e(192),B=e(157),_=e(445),C=e(914),T=e(146),k=e(451),R=e(86),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return-1==t.user_group_permission||7==t.user_group_permission||6==t.user_group_permission||11==t.user_group_permission?e("div",[e("br"),t._v(" "),e("div",[e("v-card",[e("v-card-title",[[-1==t.user_group_permission?e("v-col",{attrs:{cols:"5"}},[e("v-autocomplete",{attrs:{items:t.branches,"item-text":"branch_name","item-value":"id",label:"สาขา","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":""},on:{change:t.selectSee},model:{value:t.branch_id,callback:function(n){t.branch_id=n},expression:"branch_id"}})],1):t._e()],t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{attrs:{cols:"3"}},[e("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1)],2),t._v(" "),e("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.car_part_amount",fn:function(n){var r=n.item;return[r.car_part_amount<=10?e("div",[e("h5",{staticClass:"red--text"},[t._v("\n                "+t._s(Number(r.car_part_amount).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n              ")])]):t._e(),t._v(" "),r.car_part_amount>10?e("div",[t._v("\n              "+t._s(Number(r.car_part_amount).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n            ")]):t._e()]}},{key:"item.actions",fn:function(n){var r=n.item;return[e("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(n){return t.editItem(r.id)}}},[e("v-icon",[t._v(" mdi-pencil ")])],1)]}}],null,!0)})],1)],1),t._v(" "),e("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(n){t.dialog=!1},success:t.addSuccess,error:t.addError}})],1):t._e()}),[],!1,null,null,null);n.default=component.exports;h()(component,{VAutocomplete:w.a,VBtn:x.a,VCard:v.a,VCardTitle:B.c,VCol:_.a,VDataTable:C.a,VIcon:T.a,VSpacer:k.a,VTextField:R.a})},457:function(t,n,e){"use strict";e.d(n,"l",(function(){return l})),e.d(n,"m",(function(){return d})),e.d(n,"o",(function(){return m})),e.d(n,"g",(function(){return h})),e.d(n,"q",(function(){return w})),e.d(n,"e",(function(){return x})),e.d(n,"d",(function(){return v})),e.d(n,"f",(function(){return B})),e.d(n,"k",(function(){return _})),e.d(n,"j",(function(){return C})),e.d(n,"i",(function(){return T})),e.d(n,"a",(function(){return R})),e.d(n,"n",(function(){return O})),e.d(n,"b",(function(){return P})),e.d(n,"h",(function(){return D})),e.d(n,"p",(function(){return $})),e.d(n,"c",(function(){return I}));var r=e(14),o=(e(57),e(19),e(3)),c=e(209),f=e.n(c);e(267);function l(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function C(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function T(){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return V.apply(this,arguments)}function V(){return(V=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return F.apply(this,arguments)}function F(){return(F=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถบันทึกได้",text:"กรุณาแนบไฟล์",icon:"error",showCancelButton:!1,showConfirmButton:!0,showDenyButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},473:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return c})),e.d(n,"e",(function(){return f})),e.d(n,"f",(function(){return l})),e.d(n,"d",(function(){return d})),e.d(n,"c",(function(){return select}));var r=e(454),path="/api/branches";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var n=r.a+path+"/"+t;return Object(r.b)("delete",n,{})}function f(t){var n=r.a+path;return Object(r.b)("post",n,t)}function l(t,n){var e=r.a+path+"/"+t;return Object(r.b)("post",e,n)}function d(t){var n=r.a+path+"/"+t;return Object(r.b)("get",n,{})}function select(){var t=r.a+"/api/SelectOnBranches";return Object(r.b)("get",t,{})}}}]);