(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1069:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(202),c=n(190),f=n(149),d=n(424),l=n(979),m=n(177),h=n(422),w=n(435),x=n(9),v=(n(48),n(49),n(466)),B=n(460),C=n(432),k={components:{dialogNew:n(966).default},data:function(){return{loading:!0,id:"",search:"",dialog:!1,formTitle:"Add",action:"add",idProvince:"",dataProvinces:[],dataAmphures:[],headers:[{text:"รหัสอำเภอ",value:"code",width:"15%"},{text:"ชื่อจังหวัด",value:"province.name_th",width:"15%"},{text:"ชื่ออำเภอ",value:"name_th",width:"15%"},{text:"จัดการ",value:"actions",sortable:!1,width:"12%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getProvinces(),this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getProvinces:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.c();case 2:return n=e.sent,t.dataProvinces=n.data,e.next=6,t.dataProvinces.push({id:0,name_th:"ทั้งหมด"});case 6:case"end":return e.stop()}}),e)})))()},selectSee:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.data=[],0!=t.idProvince){e.next=5;break}t.data=t.dataAmphures,e.next=13;break;case 5:n=0;case 6:if(!(n<t.dataAmphures.length)){e.next=13;break}if(t.dataAmphures[n].province_id!=t.idProvince){e.next=10;break}return e.next=10,t.data.push(t.dataAmphures[n]);case 10:n++,e.next=6;break;case 13:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.b();case 2:n=e.sent,t.dataAmphures=n.data,""!=t.idProvince&&t.selectSee(),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},AddItem:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.formTitle="แก้ไขข้อมูล",e.dialog=!0,e.id=t,e.action="edit";case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=C.a(),n.next=3,r.then((function(n){1==n&&v.a(t).then(function(){var t=Object(x.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 200==n.status?C.k():C.j(),t.next=3,e.$nextTick((function(){e.getData()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.getData(),C.k()}));case 3:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.getData(),C.j()}));case 3:case"end":return e.stop()}}),e)})))()}},watch:{}},R=k,T=n(38),component=Object(T.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission?n("div",[n(c.a,[n(f.c,[[n(d.a,{attrs:{cols:"2"}},[n(o.a,{attrs:{color:"primary",dark:""},on:{click:function(e){return e.stopPropagation(),t.AddItem()}}},[n(m.a,{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n            เพิ่มรายการใหม่\n          ")],1)],1),t._v(" "),n(d.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{items:t.dataProvinces,"item-text":"name_th","item-value":"id","no-data-text":"ไม่มีข้อมูล",label:"ค้นหาตามจังหวัด",outlined:"",dense:"","hide-details":""},on:{change:t.selectSee},model:{value:t.idProvince,callback:function(e){t.idProvince=e},expression:"idProvince"}})],1)],t._v(" "),n(h.a),t._v(" "),n(d.a,{attrs:{cols:"3"}},[n(w.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2),t._v(" "),n(l.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.actions",fn:function(e){var r=e.item;return[n(o.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n(m.a,[t._v(" mdi-pencil ")])],1),t._v(" "),n(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n(m.a,[t._v(" mdi-delete ")])],1)]}}],null,!0)}),t._v(" "),n("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},432:function(t,e,n){"use strict";n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return l})),n.d(e,"o",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"p",(function(){return w})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return v})),n.d(e,"f",(function(){return B})),n.d(e,"k",(function(){return C})),n.d(e,"j",(function(){return k})),n.d(e,"i",(function(){return R})),n.d(e,"a",(function(){return _})),n.d(e,"n",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"h",(function(){return I})),n.d(e,"c",(function(){return D}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),f=n.n(c);n(262);function d(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function l(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function C(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function k(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function R(){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return A.apply(this,arguments)}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})}}]);