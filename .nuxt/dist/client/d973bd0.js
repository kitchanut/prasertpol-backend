(window.webpackJsonp=window.webpackJsonp||[]).push([[124,98],{454:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return x}));var r=n(14),o=(n(57),n(109)),c=n.n(o),f="https://www.psnkp.co.th/server",l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function x(t,e,n){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},457:function(t,e,n){"use strict";n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"o",(function(){return x})),n.d(e,"g",(function(){return m})),n.d(e,"q",(function(){return w})),n.d(e,"e",(function(){return k})),n.d(e,"d",(function(){return h})),n.d(e,"f",(function(){return v})),n.d(e,"k",(function(){return B})),n.d(e,"j",(function(){return _})),n.d(e,"i",(function(){return C})),n.d(e,"a",(function(){return R})),n.d(e,"n",(function(){return j})),n.d(e,"b",(function(){return I})),n.d(e,"h",(function(){return $})),n.d(e,"p",(function(){return L})),n.d(e,"c",(function(){return U}));var r=n(14),o=(n(57),n(19),n(3)),c=n(209),f=n.n(c);n(267);function l(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function k(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function _(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function C(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return V.apply(this,arguments)}function V(){return(V=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถบันทึกได้",text:"กรุณาแนบไฟล์",icon:"error",showCancelButton:!1,showConfirmButton:!0,showDenyButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},765:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(57),n(676)),c=n(457),f=n(719),l=n(598),d=n(596),x=n(605),m=n(597),w=n(604),k=n(600),h=n(601),v=n(606),B=n(602),_=n(603),C=n(599),y={props:["dialog","car_no"],components:{drawerRequestLog:f.default},data:function(){return{dialogComponent:!1,loading:!1,update:!1,drawerRequestLog:!1,type:"",id:"",search:"",headers:[{text:"จัดการ",value:"request_status",sortable:!1,width:"9%"},{text:"เวลา",value:"created_at",width:"11%"},{text:"Line",value:"pictureUrl",align:"center",width:"12%"},{text:"เซล/สาขา",value:"sale_name",width:"12%"},{text:"ประเภท",value:"type",width:"12%"},{text:"ลำดับรถ",value:"car_no_all"},{text:"รายละเอียด",value:"actions",sortable:!1,align:"center",width:"8%"}],data:[]}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,(data=new FormData).append("timeStart",""),data.append("timeEnd",""),data.append("toggle",""),data.append("search",t.car_no),e.next=8,o.b(data);case 8:n=e.sent,t.data=n.data,t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},showData:function(t,e){this.type=t,this.id=e,this.drawerRequestLog=!0},close:function(){this.update?this.$emit("success"):this.$emit("cancleItem")},editItem:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("การจอง"!=t){r.next=6;break}return r.next=3,l.g(e);case 3:r.sent,r.next=64;break;case 6:if("นัดทำสัญญา"!=t){r.next=12;break}return r.next=9,d.g(e);case 9:r.sent,r.next=64;break;case 12:if("การทำสัญญา"!=t){r.next=18;break}return r.next=15,x.g(e);case 15:r.sent,r.next=64;break;case 18:if("แบงค์อนุมัติ"!=t){r.next=24;break}return r.next=21,m.g(e);case 21:r.sent,r.next=64;break;case 24:if("ปล่อยรถ"!=t){r.next=30;break}return r.next=27,w.g(e);case 27:r.sent,r.next=64;break;case 30:if("เปลี่ยนจอง"!=t){r.next=36;break}return r.next=33,k.g(e);case 33:r.sent,r.next=64;break;case 36:if("เปลี่ยนคนจอง"!=t){r.next=42;break}return r.next=39,h.g(e);case 39:r.sent,r.next=64;break;case 42:if("อัพเดทข้อมูล"!=t){r.next=48;break}return r.next=45,v.g(e);case 45:r.sent,r.next=64;break;case 48:if("การรับเงิน"!=t){r.next=54;break}return r.next=51,B.g(e);case 51:r.sent,r.next=64;break;case 54:if("เบิกเงิน"!=t){r.next=60;break}return r.next=57,_.g(e);case 57:r.sent,r.next=64;break;case 60:if("ยกเลิกจอง"!=t){r.next=64;break}return r.next=63,C.g(e);case 63:r.sent;case 64:n.update=!0,n.getData();case 66:case"end":return r.stop()}}),r)})))()},cancleItem:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("การจอง"!=t){r.next=6;break}return r.next=3,l.a(e);case 3:r.sent,r.next=64;break;case 6:if("นัดทำสัญญา"!=t){r.next=12;break}return r.next=9,d.a(e);case 9:r.sent,r.next=64;break;case 12:if("การทำสัญญา"!=t){r.next=18;break}return r.next=15,x.a(e);case 15:r.sent,r.next=64;break;case 18:if("แบงค์อนุมัติ"!=t){r.next=24;break}return r.next=21,m.a(e);case 21:r.sent,r.next=64;break;case 24:if("ปล่อยรถ"!=t){r.next=30;break}return r.next=27,w.a(e);case 27:r.sent,r.next=64;break;case 30:if("เปลี่ยนจอง"!=t){r.next=36;break}return r.next=33,k.a(e);case 33:r.sent,r.next=64;break;case 36:if("เปลี่ยนคนจอง"!=t){r.next=42;break}return r.next=39,h.a(e);case 39:r.sent,r.next=64;break;case 42:if("อัพเดทข้อมูล"!=t){r.next=48;break}return r.next=45,v.a(e);case 45:r.sent,r.next=64;break;case 48:if("การรับเงิน"!=t){r.next=54;break}return r.next=51,B.a(e);case 51:r.sent,r.next=64;break;case 54:if("เบิกเงิน"!=t){r.next=60;break}return r.next=57,_.a(e);case 57:r.sent,r.next=64;break;case 60:if("ยกเลิกจอง"!=t){r.next=64;break}return r.next=63,C.a(e);case 63:r.sent;case 64:n.update=!0,n.getData();case 66:case"end":return r.stop()}}),r)})))()},deleteItem:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return f=c.a(),o.next=3,f.then(function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(o){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(1!=o){r.next=68;break}if(null,"การจอง"!=t){r.next=8;break}return r.next=5,l.c(e);case 5:r.sent,r.next=66;break;case 8:if("นัดทำสัญญา"!=t){r.next=14;break}return r.next=11,d.c(e);case 11:r.sent,r.next=66;break;case 14:if("การทำสัญญา"!=t){r.next=20;break}return r.next=17,x.c(e);case 17:r.sent,r.next=66;break;case 20:if("แบงค์อนุมัติ"!=t){r.next=26;break}return r.next=23,m.c(e);case 23:r.sent,r.next=66;break;case 26:if("ปล่อยรถ"!=t){r.next=32;break}return r.next=29,w.c(e);case 29:r.sent,r.next=66;break;case 32:if("เปลี่ยนจอง"!=t){r.next=38;break}return r.next=35,k.c(e);case 35:r.sent,r.next=66;break;case 38:if("เปลี่ยนคนจอง"!=t){r.next=44;break}return r.next=41,h.c(e);case 41:r.sent,r.next=66;break;case 44:if("อัพเดทข้อมูล"!=t){r.next=50;break}return r.next=47,v.c(e);case 47:r.sent,r.next=66;break;case 50:if("การรับเงิน"!=t){r.next=56;break}return r.next=53,B.c(e);case 53:r.sent,r.next=66;break;case 56:if("เบิกเงิน"!=t){r.next=62;break}return r.next=59,_.c(e);case 59:r.sent,r.next=66;break;case 62:if("ยกเลิกจอง"!=t){r.next=66;break}return r.next=65,C.c(e);case 65:r.sent;case 66:n.update=!0,n.getData();case 68:case"end":return r.stop()}}),r)})));return function(t){return o.apply(this,arguments)}}());case 3:case"end":return o.stop()}}),o)})))()}},watch:{dialog:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogComponent=t.dialog,t.dialogComponent&&(t.update=!1,t.getData());case 2:case"end":return e.stop()}}),e)})))()}}},R=y,T=n(42),j=n(52),O=n.n(j),I=n(198),D=n(210),$=n(192),V=n(453),L=n(914),P=n(446),U=n(146),S=n(155),z=n(51),A=n(93),component=Object(T.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",persistent:""},model:{value:t.dialogComponent,callback:function(e){t.dialogComponent=e},expression:"dialogComponent"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("div",{staticClass:"container",staticStyle:{"align-items":"center",display:"flex",position:"relative: padding: 0px"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.close()}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("ประวัติการแจ้ง")])],1)]),t._v(" "),n("v-container",[n("v-card",[n("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"mobile-breakpoint":0,"multi-sort":"","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:t._u([{key:"item.pictureUrl",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:""}},[n("v-avatar",{attrs:{size:"40"},on:{click:function(e){return t.showImg(r.pictureUrl)}}},[n("v-img",{attrs:{src:r.pictureUrl}})],1)],1),t._v(" "),n("div",[t._v(t._s(r.displayName))])]}},{key:"item.sale_name",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(r.sale_name))]),t._v(" "),n("div",[t._v(t._s(r.branch_name))])]}},{key:"item.car_no_all",fn:function(e){var r=e.item;return["เปลี่ยนจอง"==r.type?n("div",[n("span",[t._v(t._s(r.car_no_old))]),t._v("\n              =>\n              "),n("span",[t._v(t._s(r.car_no))])]):n("div",[n("span",[t._v(t._s(r.car_no))])])]}},{key:"item.request_status",fn:function(e){var r=e.item;return["pedding"==r.request_status?n("v-btn",{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.type,r.ref_id)}}},[n("v-icon",[t._v(" mdi-checkbox-blank-outline")])],1):"approve"==r.request_status?n("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.type,r.ref_id)}}},[n("v-icon",[t._v(" mdi-checkbox-outline")])],1):"cancle"==r.request_status?n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.type,r.ref_id)}}},[n("v-icon",[t._v(" mdi-arrow-u-left-top")])],1):t._e(),t._v(" "),"cancle"!=r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.cancleItem(r.type,r.ref_id)}}},[n("v-icon",[t._v(" mdi-close ")])],1):t._e(),t._v(" "),"cancle"==r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(r.type,r.ref_id)}}},[n("v-icon",[t._v(" mdi-delete ")])],1):t._e()]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.showData(r.type,r.ref_id)}}},[n("v-icon",[t._v(" mdi-information-variant ")])],1)]}}],null,!0)})],1)],1)],1),t._v(" "),n("drawerRequestLog",{attrs:{dialog:t.drawerRequestLog,type:t.type,id:t.id},on:{success:function(e){return t.getData()},cancleItem:function(e){t.drawerRequestLog=!1}}})],1)}),[],!1,null,"3a8b8b19",null);e.default=component.exports;O()(component,{VAvatar:I.a,VBtn:D.a,VCard:$.a,VContainer:V.a,VDataTable:L.a,VDialog:P.a,VIcon:U.a,VImg:S.a,VToolbar:z.a,VToolbarTitle:A.b})}}]);