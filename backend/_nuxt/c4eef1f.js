(window.webpackJsonp=window.webpackJsonp||[]).push([[270,102],{1027:function(t,n,e){"use strict";e.r(n);var r=e(14),o=(e(57),e(39),e(744)),c=e(457),l=e(898),f=e(492),d={components:{dialogNew:l.default,dialogImage:f.default},data:function(){return{loading:!0,search:"",dialogImg:!1,imgUrl:"",dialog:!1,id:"",formTitle:"Add",action:"add",headers:[{text:"ID",value:"id",width:"7%",align:"center"},{text:"picture",value:"pictureUrl",width:"8%"},{text:"displayName",value:"displayName",width:"20%"},{text:"ชื่อในระบบ",value:"user_name",width:"20%"},{text:"สังกัดสาขา",value:"user.branch.branch_team.branch_team_name"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b();case 2:e=n.sent,t.data=e.data,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},AddItem:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return n.stop()}}),n)})))()},editItem:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.formTitle="แก้ไขข้อมูล",n.dialog=!0,n.id=t,n.action="edit";case 4:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=c.a(),e.next=3,l.then((function(e){1==e&&o.a(t).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 200==e.status?c.k():c.j(),t.next=3,n.$nextTick((function(){n.getData()}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}));case 3:case"end":return e.stop()}}),e)})))()},addSuccess:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),c.k()}));case 2:case"end":return n.stop()}}),n)})))()},addError:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),c.j()}));case 2:case"end":return n.stop()}}),n)})))()}},watch:{data:function(){var t=this;return this.data.map((function(n){n.no=t.data.map((function(t){return t.id})).indexOf(n.id)+1}))}}},m=d,h=e(42),w=e(52),x=e.n(w),v=e(198),B=e(210),C=e(192),k=e(157),T=e(445),_=e(914),R=e(146),y=e(155),j=e(451),O=e(86),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return-1==t.user_group_permission?e("div",[e("v-card",[e("v-card-title",[void 0,t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{attrs:{cols:"3"}},[e("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1)],2),t._v(" "),e("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:t._u([{key:"item.pictureUrl",fn:function(n){var r=n.item;return[e("v-btn",{attrs:{icon:""}},[e("v-avatar",{attrs:{size:"40"},on:{click:function(n){t.imgUrl=r.pictureUrl,t.dialogImg=!0}}},[e("v-img",{attrs:{src:r.pictureUrl}})],1)],1)]}},{key:"item.user_name",fn:function(n){var r=n.item;return[r.user?e("span",[t._v("\n          "+t._s(r.user.first_name)+" "+t._s(r.user.last_name)+"\n        ")]):t._e()]}},{key:"item.actions",fn:function(n){var r=n.item;return[e("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(n){return t.editItem(r.id)}}},[e("v-icon",[t._v(" mdi-pencil")])],1),t._v(" "),e("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(n){return t.deleteItem(r.id)}}},[e("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)})],1),t._v(" "),e("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(n){t.dialog=!1},success:function(n){return t.addSuccess()},error:function(n){return t.addError()}}}),t._v(" "),e("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(n){t.dialogImg=!1}}})],1):t._e()}),[],!1,null,null,null);n.default=component.exports;x()(component,{VAvatar:v.a,VBtn:B.a,VCard:C.a,VCardTitle:k.c,VCol:T.a,VDataTable:_.a,VIcon:R.a,VImg:y.a,VSpacer:j.a,VTextField:O.a})},457:function(t,n,e){"use strict";e.d(n,"l",(function(){return f})),e.d(n,"m",(function(){return d})),e.d(n,"o",(function(){return m})),e.d(n,"g",(function(){return h})),e.d(n,"q",(function(){return w})),e.d(n,"e",(function(){return x})),e.d(n,"d",(function(){return v})),e.d(n,"f",(function(){return B})),e.d(n,"k",(function(){return C})),e.d(n,"j",(function(){return k})),e.d(n,"i",(function(){return T})),e.d(n,"a",(function(){return R})),e.d(n,"n",(function(){return j})),e.d(n,"b",(function(){return D})),e.d(n,"h",(function(){return V})),e.d(n,"p",(function(){return $})),e.d(n,"c",(function(){return S}));var r=e(14),o=(e(57),e(19),e(3)),c=e(209),l=e.n(c);e(267);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function C(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function k(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function T(){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(){return U.apply(this,arguments)}function U(){return(U=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถบันทึกได้",text:"กรุณาแนบไฟล์",icon:"error",showCancelButton:!1,showConfirmButton:!0,showDenyButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},492:function(t,n,e){"use strict";e.r(n);var r=e(14),o=(e(57),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.dialogDeleteComponent=t.dialog;case 1:case"end":return n.stop()}}),n)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),c=e(42),l=e(52),f=e.n(l),d=e(192),m=e(453),h=e(446),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-dialog",{attrs:{width:"600px"},model:{value:t.dialogDeleteComponent,callback:function(n){t.dialogDeleteComponent=n},expression:"dialogDeleteComponent"}},[e("v-card",[e("img",{attrs:{width:"600px",height:"auto",src:t.imgUrl}})])],1)],1)}),[],!1,null,null,null);n.default=component.exports;f()(component,{VCard:d.a,VContainer:m.a,VDialog:h.a})}}]);