(window.webpackJsonp=window.webpackJsonp||[]).push([[290,137],{1099:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n(190),c=n(149),f=n(424),l=n(984),d=n(177),m=n(422),v=n(435),h=n(9),x=(n(48),n(49),n(532)),w=n(432),_={components:{dialogNew:n(857).default},data:function(){return{loading:!0,id:"",search:"",dialog:!1,formTitle:"Add",action:"add",headers:[{text:"ลำดับ",value:"no",align:"center"},{text:"ชื่อ",value:"repair_name"},{text:"ระยะเวลา (นาที)",value:"repair_time"},{text:"สถานะ",value:"repair_active"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.b();case 2:n=e.sent,t.data=n.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},AddItem:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.formTitle="แก้ไขข้อมูล",e.dialog=!0,e.id=t,e.action="edit";case 4:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.getData(),w.k()}));case 3:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.getData(),w.j()}));case 3:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=w.a(),n.next=3,r.then((function(n){1==n&&x.a(t).then(function(){var t=Object(h.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 200==n.status?w.k():w.j(),t.next=3,e.$nextTick((function(){e.getData()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()}},watch:{data:function(){var t=this;return this.data.map((function(e){e.no=t.data.map((function(t){return t.id})).indexOf(e.id)+1}))}}},k=_,B=n(38),component=Object(B.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission?n("div",[n(o.a,[n(c.c,[[n(r.a,{attrs:{color:"primary",dark:""},on:{click:function(e){return e.stopPropagation(),t.AddItem()}}},[n(d.a,{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n          เพิ่มรายการใหม่\n        ")],1)],t._v(" "),n(m.a),t._v(" "),n(f.a,{attrs:{cols:"3"}},[n(v.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2),t._v(" "),n(l.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลัง\n    โหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.repair_active",fn:function(e){return["1"==e.item.repair_active?n(r.a,{attrs:{"x-small":"",color:"success",dark:""}},[t._v("เปิดใช้งาน")]):n(r.a,{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ปิดการใช้งาน")])]}},{key:"item.actions",fn:function(e){var o=e.item;return[n(r.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(o.id)}}},[n(d.a,[t._v(" mdi-pencil ")])],1),t._v(" "),n(r.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(o.id)}}},[n(d.a,[t._v(" mdi-delete ")])],1)]}}],null,!0)}),t._v(" "),n("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:t.addSuccess,error:t.addError}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(9),o=(n(48),n(98)),c=n.n(o),f="https://www.psnkp.co.th/server",l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,n){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,e,n){"use strict";n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"o",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"p",(function(){return h})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"k",(function(){return k})),n.d(e,"j",(function(){return B})),n.d(e,"i",(function(){return C})),n.d(e,"a",(function(){return D})),n.d(e,"n",(function(){return O})),n.d(e,"b",(function(){return $})),n.d(e,"h",(function(){return P})),n.d(e,"c",(function(){return L}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),f=n.n(c);n(262);function l(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function k(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function B(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function C(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},520:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/car_part";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function f(t){var e=r.a+path;return Object(r.b)("post",e,t)}function l(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnCarParts";return Object(r.b)("get",t,{})}},532:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/repair";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function f(t){var e=r.a+path;return Object(r.b)("post",e,t)}function l(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnRepair";return Object(r.b)("get",t,{})}},857:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(202),c=n(190),f=n(149),l=n(424),d=n(428),m=n(426),v=n(457),h=n(177),x=n(191),w=n(472),_=n(471),k=n(423),B=n(422),C=n(435),R=n(46),D=n(73),j=n(9),O=(n(48),n(532)),T=n(520),$={props:["dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{repair_details:{}},rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],carParts:[],dialogDeleteComponent:!1}},mounted:function(){},methods:{onAction:function(t){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=21;break}if(e.btnloading=!0,e.formDataLoading=!0,"add"!=e.action){t.next=13;break}return t.next=6,O.e(e.formData);case 6:n=t.sent,e.$refs.form.reset(),200==n.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1,t.next=21;break;case 13:if("edit"!=e.action){t.next=21;break}return t.next=16,O.f(e.id,e.formData);case 16:r=t.sent,e.$refs.form.reset(),200==r.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1;case 21:case"end":return t.stop()}}),t)})))()},getCarParts:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.c();case 2:n=e.sent,t.carParts=n.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},add_row:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={car_part_id:""},e.next=3,t.formData.repair_details.push(data);case 3:case"end":return e.stop()}}),e)})))()},rm_row:function(t){var e=this;return Object(j.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.formData.repair_details.splice(t,1);case 2:case"end":return n.stop()}}),n)})))()}},watch:{dialog:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.dialogDeleteComponent){e.next=16;break}if(t.getCarParts(),"add"!=t.action){e.next=8;break}return e.next=6,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{repair_details:[{}],repair_active:"1"};case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))}));case 6:e.next=16;break;case 8:if("edit"!=t.action){e.next=16;break}return t.formDataLoading=!0,e.next=12,O.d(t.id);case 12:return n=e.sent,e.next=15,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.data;case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))}));case 15:t.formDataLoading=!1;case 16:t.btnloading=!1;case 17:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},y=n(38),component=Object(y.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(d.a,[n(m.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n(c.a,[n(v.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[n(R.a,{attrs:{color:"primary",dark:"",flat:""}},[n(o.a,{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("cancleItem")}}},[n(h.a,[t._v("mdi-close")])],1),t._v(" "),n(D.b,[t._v(" "+t._s(t.formTitle)+" ")]),t._v(" "),n(B.a),t._v(" "),n(D.a,[n(o.a,{staticStyle:{"font-size":"18px"},attrs:{type:"submit",loading:t.btnloading,dark:"",text:""}},[t._v("\n              บันทึก\n            ")])],1)],1),t._v(" "),t.formDataLoading?n(x.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),n(f.b,[n(d.a,[n(k.a,[n(l.a,{attrs:{cols:"6"}},[n(C.a,{attrs:{autocomplete:"true",label:"ชื่อ","append-icon":"",id:"formData.repair_name",name:"formData.repair_name",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.repair_name,callback:function(e){t.$set(t.formData,"repair_name",e)},expression:"formData.repair_name"}})],1),t._v(" "),n(l.a,{attrs:{cols:"6"}},[n(C.a,{attrs:{autocomplete:"true",label:"เวลาที่ใช้ในการทำ (นาที)","append-icon":"",id:"formData.repair_time",name:"formData.repair_time",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.repair_time,callback:function(e){t.$set(t.formData,"repair_time",e)},expression:"formData.repair_time"}})],1)],1),t._v(" "),n("br"),t._v(" "),n(k.a,{staticClass:"d-flex justify-center"},[n("h2",[t._v("อะไหล่ที่ใช้ซ่อม")])]),t._v(" "),n("br"),t._v(" "),t._l(t.formData.repair_details,(function(e,c){return n(k.a,{key:c},[n(l.a,{attrs:{cols:"7"}},[n(r.a,{attrs:{id:"purchase_detail.car_part_id",name:"purchase_detail.car_part_id",items:t.carParts,"item-text":"car_part_name","item-value":"id","no-data-text":"ไม่มีข้อมูล",label:"อะไหล่",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:e.car_part_id,callback:function(n){t.$set(e,"car_part_id",n)},expression:"purchase_detail.car_part_id"}})],1),t._v(" "),n(l.a,{attrs:{cols:"4"}},[n(C.a,{attrs:{autocomplete:"true",label:"จำนวน","append-icon":"",id:"purchase_detail.car_part_value",name:"purchase_detail.car_part_value",type:"number",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:e.car_part_value,callback:function(n){t.$set(e,"car_part_value",n)},expression:"purchase_detail.car_part_value"}})],1),t._v(" "),n(l.a,{attrs:{cols:"1"}},[n(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.rm_row(c)}}},[n(h.a,[t._v(" mdi-delete ")])],1)],1)],1)})),t._v(" "),n("br"),t._v(" "),n(k.a,{staticClass:"d-flex"},[n(l.a,[n(o.a,{attrs:{color:"green",block:""},on:{click:function(e){return t.add_row()}}},[n(h.a,{attrs:{color:"white"}},[t._v("mdi-plus")]),t._v(" "),n("span",{staticStyle:{color:"white"}},[t._v("เพิ่มรายการ")])],1)],1)],1),t._v(" "),n("br"),t._v(" "),n(_.a,{attrs:{rules:t.rule,id:"formData.repair_active",name:"formData.repair_active",row:""},model:{value:t.formData.repair_active,callback:function(e){t.$set(t.formData,"repair_active",e)},expression:"formData.repair_active"}},[[n("div",{staticClass:"mr-1"},[t._v("แสดงตอนเลือก:")])],t._v(" "),n(w.a,{attrs:{label:"เปิดใช้งาน",value:"1"}}),t._v(" "),n(w.a,{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2)],2)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);