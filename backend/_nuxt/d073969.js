(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1068:function(t,n,e){"use strict";e.r(n);var r=e(202),o=e(190),c=e(149),l=e(424),f=e(979),d=e(177),m=e(422),h=e(435),w=e(9),x=(e(48),e(49),e(654)),_=e(432),v={components:{dialogNew:e(965).default},data:function(){return{loading:!0,search:"",dialog:!1,id:"",formTitle:"Add",action:"add",headers:[{text:"รหัสสี",value:"amount_slacken_code_color",width:"10%"},{text:"ชื่อช่วงผ่อน",value:"amount_slacken_name",width:"15%"},{text:"เริ่มต้น",value:"amount_slacken_start",width:"10%"},{text:"สิ้นสุด",value:"amount_slacken_end",width:"10%"},{text:"สถานะ",value:"amount_slacken_active",width:"5%"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.b();case 2:e=n.sent,t.data=e.data,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},AddItem:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return n.stop()}}),n)})))()},editItem:function(t){var n=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.formTitle="แก้ไขข้อมูล",n.dialog=!0,n.id=t,n.action="edit";case 4:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var n=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.a(),e.next=3,r.then((function(e){1==e&&x.a(t).then(function(){var t=Object(w.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200==e.status?_.k():_.j(),n.$nextTick((function(){n.getData()}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}));case 3:case"end":return e.stop()}}),e)})))()},addSuccess:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),_.k()}));case 2:case"end":return n.stop()}}),n)})))()},addError:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),_.j()}));case 2:case"end":return n.stop()}}),n)})))()}},watch:{}},B=v,k=e(38),component=Object(k.a)(B,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return-1==t.user_group_permission?e("div",[e(o.a,[e(c.c,[[e(r.a,{attrs:{color:"primary",dark:""},on:{click:function(n){return n.stopPropagation(),t.AddItem()}}},[e(d.a,{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n          เพิ่มรายการใหม่\n        ")],1)],t._v(" "),e(m.a),t._v(" "),e(l.a,{attrs:{cols:"3"}},[e(h.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1)],2),t._v(" "),e(f.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:t._u([{key:"item.amount_slacken_code_color",fn:function(n){var r=n.item;return[e("span",{style:[{"background-color":r.amount_slacken_code_color},{padding:"2px"},{"border-radius":"3px"}]},[t._v("\n          "+t._s(r.amount_slacken_code_color)+"\n        ")])]}},{key:"item.amount_slacken_start",fn:function(n){var e=n.item;return[t._v("\n        "+t._s(Number(e.amount_slacken_start).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n      ")]}},{key:"item.amount_slacken_end",fn:function(n){var e=n.item;return[t._v("\n        "+t._s(Number(e.amount_slacken_end).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n      ")]}},{key:"item.amount_slacken_active",fn:function(n){return["1"==n.item.amount_slacken_active?e(r.a,{attrs:{"x-small":"",color:"success",dark:""}},[t._v("เปิดใช้งาน")]):e(r.a,{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ปิดการใช้งาน")])]}},{key:"item.actions",fn:function(n){var o=n.item;return[e(r.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(n){return t.editItem(o.id)}}},[e(d.a,[t._v(" mdi-pencil ")])],1),t._v(" "),e(r.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(n){return t.deleteItem(o.id)}}},[e(d.a,[t._v(" mdi-delete ")])],1)]}}],null,!0)}),t._v(" "),e("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(n){t.dialog=!1},success:function(n){return t.addSuccess()},error:function(n){return t.addError()}}})],1)],1):t._e()}),[],!1,null,null,null);n.default=component.exports},432:function(t,n,e){"use strict";e.d(n,"l",(function(){return f})),e.d(n,"m",(function(){return d})),e.d(n,"o",(function(){return m})),e.d(n,"g",(function(){return h})),e.d(n,"p",(function(){return w})),e.d(n,"e",(function(){return x})),e.d(n,"d",(function(){return _})),e.d(n,"f",(function(){return v})),e.d(n,"k",(function(){return B})),e.d(n,"j",(function(){return k})),e.d(n,"i",(function(){return C})),e.d(n,"a",(function(){return R})),e.d(n,"n",(function(){return j})),e.d(n,"b",(function(){return D})),e.d(n,"h",(function(){return P})),e.d(n,"c",(function(){return $}));var r=e(9),o=(e(48),e(18),e(2)),c=e(200),l=e.n(c);e(262);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function k(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function C(){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return F.apply(this,arguments)}function F(){return(F=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})}}]);