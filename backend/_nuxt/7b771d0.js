(window.webpackJsonp=window.webpackJsonp||[]).push([[266,14,87,105],{1075:function(t,e,r){"use strict";r.r(e);var n=r(188),o=r(202),c=r(190),l=r(149),f=r(424),d=r(979),m=r(177),_=r(147),v=r(422),x=r(435),h=r(9),w=(r(48),r(49),r(520)),k=r(432),D=r(617),R=r(474),$={components:{dialogNew:D.default,dialogImage:R.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server",loading:!0,id:"",search:"",dialog:!1,formTitle:"Add",dialogImg:!1,imgUrl:null,action:"add",headers:[{text:"รูปภาพ",value:"car_part_image",align:"center",width:"10%"},{text:"ประเภท",value:"car_part_types.car_part_type_name",width:"15%"},{text:"ชื่อ",value:"car_part_name",width:"15%"},{text:"รหัส",value:"car_part_code"},{text:"หน่วย",value:"unit.unit_name"},{text:"ราคาซื้อ",value:"car_part_price"},{text:"ราคาขาย",value:"car_part_buy"},{text:"ส่วนลด",value:"car_part_discount"},{text:"สถานะ",value:"car_part_active"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.b();case 2:r=e.sent,t.data=r.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},AddItem:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.formTitle="แก้ไขข้อมูล",e.dialog=!0,e.id=t,e.action="edit";case 4:case"end":return r.stop()}}),r)})))()},addSuccess:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),k.k()}));case 2:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),k.j()}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=k.a(),r.next=3,n.then((function(r){1==r&&w.a(t).then(function(){var t=Object(h.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200==r.status?k.k():k.j(),e.$nextTick((function(){e.getData()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:e.$nextTick((function(){e.getData()}));case 4:case"end":return r.stop()}}),r)})))()},showImg:function(t){this.dialogImg=!0,this.imgUrl=t}},watch:{}},y=$,C=r(38),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return-1==t.user_group_permission?r("div",[r(c.a,[r(l.c,[[r(o.a,{attrs:{color:"primary",dark:""},on:{click:function(e){return e.stopPropagation(),t.AddItem()}}},[r(m.a,{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n          เพิ่มรายการใหม่\n        ")],1)],t._v(" "),r(v.a),t._v(" "),r(f.a,{attrs:{cols:"3"}},[r(x.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2),t._v(" "),r(d.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลัง\n    โหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.car_part_image",fn:function(e){var c=e.item;return[null!=c.car_part_image?r(o.a,{attrs:{icon:""}},[r(n.a,{attrs:{size:"40"},on:{click:function(e){return t.showImg(t.serverUrl+"/"+c.car_part_image)}}},[r(_.a,{attrs:{src:t.serverUrl+"/"+c.car_part_image}})],1)],1):t._e()]}},{key:"item.car_part_price",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(Number(r.car_part_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n      ")]}},{key:"item.car_part_buy",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(Number(r.car_part_buy).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n      ")]}},{key:"item.car_part_discount",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(Number(r.car_part_discount).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n      ")]}},{key:"item.car_part_active",fn:function(e){return["1"==e.item.car_part_active?r(o.a,{attrs:{"x-small":"",color:"success",dark:""}},[t._v("เปิดใช้งาน")]):r(o.a,{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ปิดการใช้งาน")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[r(o.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(n.id)}}},[r(m.a,[t._v(" mdi-pencil ")])],1),t._v(" "),r(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(n.id)}}},[r(m.a,[t._v(" mdi-delete ")])],1)]}}],null,!0)}),t._v(" "),r("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}}),t._v(" "),r("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(e){t.dialogImg=!1}}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m}));var n=r(9),o=(r(48),r(98)),c=r.n(o),l="https://www.psnkp.co.th/server",f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,r){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(regeneratorRuntime.mark((function t(e,r,data){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,n={Authorization:t.t0},t.next=7,c()({method:e,url:r,data:data,headers:n}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,e,r){"use strict";r.d(e,"l",(function(){return f})),r.d(e,"m",(function(){return d})),r.d(e,"o",(function(){return m})),r.d(e,"g",(function(){return _})),r.d(e,"p",(function(){return v})),r.d(e,"e",(function(){return x})),r.d(e,"d",(function(){return h})),r.d(e,"f",(function(){return w})),r.d(e,"k",(function(){return k})),r.d(e,"j",(function(){return D})),r.d(e,"i",(function(){return R})),r.d(e,"a",(function(){return y})),r.d(e,"n",(function(){return T})),r.d(e,"b",(function(){return O})),r.d(e,"h",(function(){return U})),r.d(e,"c",(function(){return I}));var n=r(9),o=(r(48),r(18),r(2)),c=r(200),l=r.n(c);r(262);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function k(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function D(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function R(){return $.apply(this,arguments)}function $(){return($=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return C.apply(this,arguments)}function C(){return(C=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return j.apply(this,arguments)}function j(){return(j=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return B.apply(this,arguments)}function B(){return(B=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return L.apply(this,arguments)}function L(){return(L=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return A.apply(this,arguments)}function A(){return(A=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},474:function(t,e,r){"use strict";r.r(e);var n=r(190),o=r(428),c=r(426),l=r(9),f=(r(48),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogDeleteComponent=t.dialog;case 1:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),d=r(38),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(o.a,[r(c.a,{attrs:{width:"600px"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r(n.a,[r("img",{attrs:{width:"600px",height:"auto",src:t.imgUrl}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return select}));var n=r(429),path="/api/unit";function o(){var t=n.a+path;return Object(n.b)("get",t,{})}function c(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function l(t){var e=n.a+path;return Object(n.b)("post",e,t)}function f(t,e){var r=n.a+path+"/"+t;return Object(n.b)("put",r,e)}function d(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function select(){var t=n.a+"/api/SelectOnUnit";return Object(n.b)("get",t,{})}},520:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return select}));var n=r(429),path="/api/car_part";function o(){var t=n.a+path;return Object(n.b)("get",t,{})}function c(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function l(t){var e=n.a+path;return Object(n.b)("post",e,t)}function f(t,e){var r=n.a+path+"/"+t;return Object(n.b)("post",r,e)}function d(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function select(){var t=n.a+"/api/SelectOnCarParts";return Object(n.b)("get",t,{})}},530:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return select}));var n=r(429),path="/api/car_part_types";function o(){var t=n.a+path;return Object(n.b)("get",t,{})}function c(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function l(t){var e=n.a+path;return Object(n.b)("post",e,t)}function f(t,e){var r=n.a+path+"/"+t;return Object(n.b)("put",r,e)}function d(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function select(){var t=n.a+"/api/SelectOnCarPartType";return Object(n.b)("get",t,{})}},582:function(t,e,r){"use strict";r.r(e);var n=r(202),o=r(190),c=r(149),l=r(424),f=r(428),d=r(426),m=r(458),_=r(191),v=r(472),x=r(471),h=r(423),w=r(422),k=r(435),D=r(46),R=r(9),$=(r(48),r(509)),y={props:["dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],dialogDeleteComponent:!1}},mounted:function(){},methods:{onAction:function(t){var e=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$refs.form.validate()){r.next=19;break}if(e.btnloading=!0,e.formDataLoading=!0,"add"!=e.action){r.next=11;break}return r.next=6,$.e(e.formData);case 6:n=r.sent,e.$refs.form.reset(),200==n.status?e.$emit("success"):e.$emit("error"),r.next=17;break;case 11:if("edit"!=e.action){r.next=17;break}return r.next=14,$.f(t,e.formData);case 14:o=r.sent,e.$refs.form.reset(),200==o.status?e.$emit("success"):e.$emit("error");case 17:e.btnloading=!1,e.formDataLoading=!1;case 19:case"end":return r.stop()}}),r)})))()}},watch:{dialog:function(){var t=this;return Object(R.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.$props.dialog){e.next=13;break}if("add"!=t.action){e.next=6;break}t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formData={unit_active:"1"};case 1:case"end":return t.stop()}}),t)}))))})),e.next=13;break;case 6:if("edit"!=t.action){e.next=13;break}return t.formDataLoading=!0,e.next=10,$.d(t.id);case 10:r=e.sent,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.data;case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))})),t.formDataLoading=!1;case 13:t.btnloading=!1;case 14:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},C=r(38),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(f.a,[r(d.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r(o.a,[r(m.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[r(D.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?r(_.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),r(c.b,[r(f.a,[r(h.a,[r(l.a,{attrs:{cols:"12"}},[r(k.a,{attrs:{autocomplete:"true",label:"ชื่อหน่วย","append-icon":"",id:"formData.unit_name",name:"formData.unit_name",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.unit_name,callback:function(e){t.$set(t.formData,"unit_name",e)},expression:"formData.unit_name"}})],1)],1),t._v(" "),r(x.a,{attrs:{id:"formData.unit_active",name:"formData.unit_active",rules:[function(t){return!!t}],row:""},model:{value:t.formData.unit_active,callback:function(e){t.$set(t.formData,"unit_active",e)},expression:"formData.unit_active"}},[[r("div",{staticClass:"mr-1"},[t._v("แสดงตอนเลือก:")])],t._v(" "),r(v.a,{attrs:{label:"เปิดใช้งาน",value:"1"}}),t._v(" "),r(v.a,{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2)],1)],1),t._v(" "),r(c.a,[r(w.a),t._v(" "),r(n.a,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),r(n.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},602:function(t,e,r){"use strict";r.r(e);var n=r(202),o=r(190),c=r(149),l=r(424),f=r(428),d=r(426),m=r(458),_=r(191),v=r(472),x=r(471),h=r(423),w=r(422),k=r(435),D=r(46),R=r(9),$=(r(48),r(530)),y={props:["dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},dialogDeleteComponent:!1,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}]}},mounted:function(){},methods:{onAction:function(t){var e=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$refs.form.validate()){r.next=20;break}if(e.btnloading=!0,"add"!=e.action){r.next=12;break}return r.next=5,$.e(e.formData);case 5:n=r.sent,e.$refs.form.reset(),200==n.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1,r.next=20;break;case 12:if("edit"!=e.action){r.next=20;break}return r.next=15,$.f(t,e.formData);case 15:o=r.sent,e.$refs.form.reset(),200==o.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1;case 20:case"end":return r.stop()}}),r)})))()}},watch:{dialog:function(){var t=this;return Object(R.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.$props.dialog){e.next=15;break}if("add"!=t.action){e.next=7;break}return e.next=5,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{car_part_type_active:"1"};case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))}));case 5:e.next=15;break;case 7:if("edit"!=t.action){e.next=15;break}return t.formDataLoading=!0,e.next=11,$.d(t.id);case 11:return r=e.sent,e.next=14,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.data;case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))}));case 14:t.formDataLoading=!1;case 15:t.btnloading=!1;case 16:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},C=r(38),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(f.a,[r(d.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r(o.a,[r(m.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[r(D.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?r(_.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),r(c.b,[r(f.a,[r(h.a,[r(l.a,{attrs:{cols:"12"}},[r(k.a,{attrs:{autocomplete:"true",label:"ชื่อประเภท","append-icon":"",id:"formData.car_part_type_name",name:"formData.car_part_type_name",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_part_type_name,callback:function(e){t.$set(t.formData,"car_part_type_name",e)},expression:"formData.car_part_type_name"}})],1)],1),t._v(" "),r(x.a,{attrs:{id:"formData.car_part_type_active",name:"formData.car_part_type_active",rules:t.rule,row:""},model:{value:t.formData.car_part_type_active,callback:function(e){t.$set(t.formData,"car_part_type_active",e)},expression:"formData.car_part_type_active"}},[[r("div",{staticClass:"mr-1"},[t._v("แสดงตอนเลือก:")])],t._v(" "),r(v.a,{attrs:{label:"เปิดใช้งาน",value:"1"}}),t._v(" "),r(v.a,{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2)],1)],1),t._v(" "),r(c.a,[r(w.a),t._v(" "),r(n.a,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),r(n.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},603:function(t,e,r){"use strict";r.r(e);var n=r(114),o=r(19),c=r(9),l=(r(48),r(432)),f={components:{dialogNew:r(582).default},data:function(){return{formTitle:"เพิ่มข้อมูล",dialog:!1,id:"",action:"add"}},mounted:function(){},methods:{AddItem:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},addSuccess:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.$emit("success","AddUnit"),l.k()}));case 3:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.$emit("error","AddUnit"),l.j()}));case 3:case"end":return e.stop()}}),e)})))()}}},d=r(38),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r(n.a,{on:{click:function(e){return t.AddItem()}}},[r(o.a,[r(o.c,{staticStyle:{color:"#1976d2"}},[t._v(" + เพิ่มข้อมูลใหม่ ")])],1)],1),t._v(" "),r("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}})],1)}),[],!1,null,null,null);e.default=component.exports},617:function(t,e,r){"use strict";r.r(e);var n=r(454),o=r(202),c=r(190),l=r(149),f=r(424),d=r(428),m=r(426),_=r(489),v=r(458),x=r(147),h=r(191),w=r(472),k=r(471),D=r(423),R=r(422),$=r(435),y=r(46),C=r(9),T=(r(48),r(520)),j=r(530),O=r(509),B=r(618),U=r(603),L={props:["dialog","action","id","formTitle"],components:{selectAddCarPartType:B.default,selectAddUnit:U.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server/assets/images/car_parts/",btnloading:!0,formDataLoading:!1,formData:{},rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],car_part_types:[],dataUnit:[],dialogDeleteComponent:!1,currentFile:null,imagePreviewURL:null}},mounted:function(){},methods:{selectFile:function(t){this.currentFile=t;var e=t;e?(this.imagePreviewURL=URL.createObjectURL(e),URL.revokeObjectURL(e)):this.imagePreviewURL=null},getCarTypes:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.c();case 2:r=e.sent,t.car_part_types=r.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},getUnit:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.c();case 2:r=e.sent,t.dataUnit=r.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},onAction:function(t){var e=this;return Object(C.a)(regeneratorRuntime.mark((function r(){var data,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$refs.form.validate()){r.next=23;break}if(e.btnloading=!0,e.formDataLoading=!0,(data=new FormData).append("formData",JSON.stringify(e.formData)),data.append("Image",e.currentFile),"add"!=e.action){r.next=14;break}return r.next=9,T.e(data);case 9:n=r.sent,e.$refs.form.reset(),200==n.status?e.$emit("success"):e.$emit("error"),r.next=21;break;case 14:if("edit"!=e.action){r.next=21;break}return data.append("_method","PATCH"),r.next=18,T.f(t,data);case 18:o=r.sent,e.$refs.form.reset(),200==o.status?e.$emit("success"):e.$emit("error");case 21:e.btnloading=!1,e.formDataLoading=!1;case 23:case"end":return r.stop()}}),r)})))()},addSuccess:function(t){var e=this;return Object(C.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("AddCarPartType"!=t){r.next=5;break}return r.next=3,e.getCarTypes();case 3:r.next=8;break;case 5:if("AddUnit"!=t){r.next=8;break}return r.next=8,e.getUnit();case 8:case"end":return r.stop()}}),r)})))()},addError:function(t){var e=this;return Object(C.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("AddCarPartType"!=t){r.next=5;break}return r.next=3,e.getCarTypes();case 3:r.next=8;break;case 5:if("AddUnit"!=t){r.next=8;break}return r.next=8,e.getUnit();case 8:case"end":return r.stop()}}),r)})))()}},watch:{dialog:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.$props.dialog){e.next=16;break}if(t.getCarTypes(),t.getUnit(),t.imagePreviewURL=null,"add"!=t.action){e.next=9;break}t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formData={car_part_active:"1"};case 1:case"end":return t.stop()}}),t)}))))})),e.next=16;break;case 9:if("edit"!=t.action){e.next=16;break}return t.formDataLoading=!0,e.next=13,T.d(t.id);case 13:r=e.sent,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.data;case 2:e.formData=n.sent,null!=r.data.car_part_image&&(t.imagePreviewURL=t.serverUrl+r.data.id+"/"+r.data.car_part_image);case 4:case"end":return n.stop()}}),n)}))))})),t.formDataLoading=!1;case 16:t.btnloading=!1;case 17:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},I=r(38),component=Object(I.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(d.a,[r(m.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r(c.a,[r(v.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[r(y.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?r(h.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),r(l.b,[r(d.a,[r(D.a,[r(f.a,{attrs:{cols:"12"}},[r(n.a,{attrs:{id:"formData.car_part_type_id",name:"formData.car_part_type_id",items:t.car_part_types,"item-text":"car_part_type_name","item-value":"id",label:"ประเภทอะไหล่",outlined:"",dense:"","hide-details":"","no-data-text":"ไม่มีข้อมูล",rules:t.rule},scopedSlots:t._u([{key:"append-item",fn:function(){return[r("selectAddCarPartType",{on:{success:t.addSuccess,error:t.addError}})]},proxy:!0}]),model:{value:t.formData.car_part_type_id,callback:function(e){t.$set(t.formData,"car_part_type_id",e)},expression:"formData.car_part_type_id"}})],1)],1),t._v(" "),r(D.a,[r(f.a,{attrs:{cols:"12"}},[r($.a,{attrs:{autocomplete:"true",label:"ชื่อ","append-icon":"",id:"formData.car_part_name",name:"formData.car_part_name",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_part_name,callback:function(e){t.$set(t.formData,"car_part_name",e)},expression:"formData.car_part_name"}})],1)],1),t._v(" "),r(D.a,[r(f.a,{attrs:{cols:"6"}},[r(n.a,{attrs:{id:"formData.unit_id",name:"formData.unit_id",items:t.dataUnit,"item-text":"unit_name","item-value":"id","no-data-text":"ไม่มีข้อมูล",label:"หน่วย",outlined:"",dense:"","hide-details":"",rules:t.rule},scopedSlots:t._u([{key:"append-item",fn:function(){return[r("selectAddUnit",{on:{success:t.addSuccess,error:t.addError}})]},proxy:!0}]),model:{value:t.formData.unit_id,callback:function(e){t.$set(t.formData,"unit_id",e)},expression:"formData.unit_id"}})],1),t._v(" "),r(f.a,{attrs:{cols:"6"}},[r($.a,{attrs:{autocomplete:"true",label:"รหัส","append-icon":"",id:"formData.car_part_code",name:"formData.car_part_code",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_part_code,callback:function(e){t.$set(t.formData,"car_part_code",e)},expression:"formData.car_part_code"}})],1)],1),t._v(" "),r(D.a,[r(f.a,{attrs:{cols:"4"}},[r($.a,{attrs:{autocomplete:"true",label:"ราคาซื้อ","append-icon":"",id:"formData.car_part_price",name:"formData.car_part_price",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_part_price,callback:function(e){t.$set(t.formData,"car_part_price",e)},expression:"formData.car_part_price"}})],1),t._v(" "),r(f.a,{attrs:{cols:"4"}},[r($.a,{attrs:{autocomplete:"true",label:"ราคาขาย","append-icon":"",id:"formData.car_part_buy",name:"formData.car_part_buy",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_part_buy,callback:function(e){t.$set(t.formData,"car_part_buy",e)},expression:"formData.car_part_buy"}})],1),t._v(" "),r(f.a,{attrs:{cols:"4"}},[r($.a,{attrs:{autocomplete:"true",label:"ส่วนลด","append-icon":"",id:"formData.car_part_discount",name:"formData.car_part_discount",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_part_discount,callback:function(e){t.$set(t.formData,"car_part_discount",e)},expression:"formData.car_part_discount"}})],1)],1),t._v(" "),r(k.a,{attrs:{id:"formData.car_part_active",name:"formData.car_part_active",rules:t.rule,row:""},model:{value:t.formData.car_part_active,callback:function(e){t.$set(t.formData,"car_part_active",e)},expression:"formData.car_part_active"}},[[r("div",{staticClass:"mr-1"},[t._v("แสดงตอนเลือก:")])],t._v(" "),r(w.a,{attrs:{label:"เปิดใช้งาน",value:"1"}}),t._v(" "),r(w.a,{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2),t._v(" "),r("div",{staticClass:"d-flex flex-column justify-center"},[r(_.a,{attrs:{accept:"image/*","show-size":"",label:null==t.currentFile||null==t.imagePreviewURL?"เลือกรูปภาพ":"เลือกรูปใหม่"},on:{change:t.selectFile}}),t._v(" "),null!=t.currentFile||null!=t.imagePreviewURL?r(x.a,{attrs:{contain:"",height:"250px",src:t.imagePreviewURL}}):t._e()],1)],1)],1),t._v(" "),r(l.a,[r(R.a),t._v(" "),r(o.a,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),r(o.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},618:function(t,e,r){"use strict";r.r(e);var n=r(114),o=r(19),c=r(9),l=(r(48),r(432)),f={components:{dialogNew:r(602).default},data:function(){return{formTitle:"เพิ่มข้อมูล",dialog:!1,id:"",action:"add"}},mounted:function(){},methods:{AddItem:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},addSuccess:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.$emit("success","AddCarPartType"),l.k()}));case 3:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.$emit("error","AddCarPartType"),l.j()}));case 3:case"end":return e.stop()}}),e)})))()}}},d=r(38),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r(n.a,{on:{click:function(e){return t.AddItem()}}},[r(o.a,[r(o.c,{staticStyle:{color:"#1976d2"}},[t._v(" + เพิ่มข้อมูลใหม่ ")])],1)],1),t._v(" "),r("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);