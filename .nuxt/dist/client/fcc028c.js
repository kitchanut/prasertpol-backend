(window.webpackJsonp=window.webpackJsonp||[]).push([[248,98],{1005:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(57),n(39),n(493)),c=n(457),f={components:{dialogNew:n(515).default},data:function(){return{loading:!0,search:"",dialog:!1,id:"",formTitle:"Add",action:"add",headers:[{text:"ลำดับ",value:"no",width:"7%",align:"center"},{text:"รุ่น",value:"car_serie.car_series_name",width:"15%"},{text:"ชื่อรุ่นย่อย",value:"car_serie_sub_name",width:"15%"},{text:"สถานะ",value:"car_serie_sub_active",width:"5%"},{text:"จัดการ",value:"actions",sortable:!1,width:"5%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b();case 2:n=e.sent,t.data=n.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},AddItem:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.formTitle="แก้ไขข้อมูล",e.dialog=!0,e.id=t,e.action="edit";case 4:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.getData(),c.k()}));case 3:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,t.$nextTick((function(){t.getData(),c.j()}));case 3:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f=c.a(),n.next=3,f.then((function(n){1==n&&o.a(t).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 200==n.status?c.k():c.j(),t.next=3,e.$nextTick((function(){e.getData()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()}},watch:{data:function(){var t=this;return this.data.map((function(e){e.no=t.data.map((function(t){return t.id})).indexOf(e.id)+1}))}}},l=f,d=n(42),m=n(52),v=n.n(m),h=n(210),w=n(192),x=n(157),_=n(445),C=n(914),k=n(146),B=n(451),R=n(86),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission?n("div",[n("v-card",[n("v-card-title",[[n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return e.stopPropagation(),t.AddItem()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("\n            เพิ่มรายการใหม่\n          ")],1)],t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.car_serie_sub_active",fn:function(e){return["1"==e.item.car_serie_sub_active?n("v-btn",{attrs:{"x-small":"",color:"success",dark:""}},[t._v("เปิดใช้งาน")]):n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ปิดการใช้งาน")])]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n("v-icon",[t._v(" mdi-pencil ")])],1),t._v(" "),n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)}),t._v(" "),n("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:w.a,VCardTitle:x.c,VCol:_.a,VDataTable:C.a,VIcon:k.a,VSpacer:B.a,VTextField:R.a})},454:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(14),o=(n(57),n(109)),c=n.n(o),f="https://www.psnkp.co.th/server",l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,n){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},457:function(t,e,n){"use strict";n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"o",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"q",(function(){return h})),n.d(e,"e",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"f",(function(){return _})),n.d(e,"k",(function(){return C})),n.d(e,"j",(function(){return k})),n.d(e,"i",(function(){return B})),n.d(e,"a",(function(){return D})),n.d(e,"n",(function(){return T})),n.d(e,"b",(function(){return $})),n.d(e,"h",(function(){return V})),n.d(e,"p",(function(){return I})),n.d(e,"c",(function(){return A}));var r=n(14),o=(n(57),n(19),n(3)),c=n(209),f=n.n(c);n(267);function l(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function C(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function k(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function B(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถบันทึกได้",text:"กรุณาแนบไฟล์",icon:"error",showCancelButton:!1,showConfirmButton:!0,showDenyButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},483:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return select})),n.d(e,"d",(function(){return m}));var r=n(454),path="/api/car_series";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function f(t){var e=r.a+path;return Object(r.b)("post",e,t)}function l(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnCarSeries";return Object(r.b)("get",t,{})}function m(t,e){var n=r.a+"/api/SelectOnCarSerie/"+t+"/"+e;return Object(r.b)("post",n,{})}},493:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return select}));var r=n(454),path="/api/car_serie_sub";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function f(t){var e=r.a+path;return Object(r.b)("post",e,t)}function l(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function m(){var t=r.a+"/api/SelectOnCarSerieSubs";return Object(r.b)("get",t,{})}function select(t){var e=r.a+"/api/SelectOnCarSerieSub/"+t;return Object(r.b)("post",e,{})}},515:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(57),n(483)),c=n(493),f={props:["dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},carSerie:[],dialogDeleteComponent:!1,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}]}},mounted:function(){},methods:{getCarSerie:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c();case 2:n=e.sent,t.carSerie=n.data;case 4:case"end":return e.stop()}}),e)})))()},onAction:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.$refs.form.validate()){n.next=20;break}if(e.btnloading=!0,"add"!=e.action){n.next=12;break}return n.next=5,c.f(e.formData);case 5:r=n.sent,e.$refs.form.reset(),200==r.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1,n.next=20;break;case 12:if("edit"!=e.action){n.next=20;break}return n.next=15,c.g(t,e.formData);case 15:o=n.sent,e.$refs.form.reset(),200==o.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1;case 20:case"end":return n.stop()}}),n)})))()}},watch:{dialog:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.$props.dialog){e.next=16;break}if(t.getCarSerie(),"add"!=t.action){e.next=8;break}return e.next=6,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,{car_serie_sub_active:"1"};case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))}));case 6:e.next=16;break;case 8:if("edit"!=t.action){e.next=16;break}return t.formDataLoading=!0,e.next=12,c.e(t.id);case 12:return n=e.sent,e.next=15,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.data;case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)}))))}));case 15:t.formDataLoading=!1;case 16:t.btnloading=!1;case 17:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},l=n(42),d=n(52),m=n.n(d),v=n(472),h=n(210),w=n(192),x=n(157),_=n(445),C=n(453),k=n(446),B=n(476),R=n(193),D=n(488),O=n(489),T=n(450),j=n(451),$=n(86),y=n(51),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-dialog",{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n("v-card",[n("v-form",{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-autocomplete",{attrs:{name:"formData.car_serie_id",id:"formData.car_serie_id",items:t.carSerie,"item-text":"car_series_name","item-value":"id",label:"รุ่นรถ",outlined:"",dense:"","no-data-text":"ไม่มีข้อมูล","hide-details":"",rules:t.rule},model:{value:t.formData.car_serie_id,callback:function(e){t.$set(t.formData,"car_serie_id",e)},expression:"formData.car_serie_id"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{autocomplete:"true",label:"ชื่อรุ่นย่อย","append-icon":"",name:"formData.car_serie_sub_name",id:"formData.car_serie_sub_name",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_serie_sub_name,callback:function(e){t.$set(t.formData,"car_serie_sub_name",e)},expression:"formData.car_serie_sub_name"}})],1)],1),t._v(" "),n("v-radio-group",{attrs:{name:"formData.car_serie_sub_active",id:"formData.car_serie_sub_active",rules:t.rule,row:""},model:{value:t.formData.car_serie_sub_active,callback:function(e){t.$set(t.formData,"car_serie_sub_active",e)},expression:"formData.car_serie_sub_active"}},[[n("div",{staticClass:"mr-1"},[t._v("แสดงตอนเลือก:")])],t._v(" "),n("v-radio",{attrs:{label:"เปิดใช้งาน",value:"1"}}),t._v(" "),n("v-radio",{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),n("v-btn",{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAutocomplete:v.a,VBtn:h.a,VCard:w.a,VCardActions:x.a,VCardText:x.b,VCol:_.a,VContainer:C.a,VDialog:k.a,VForm:B.a,VProgressLinear:R.a,VRadio:D.a,VRadioGroup:O.a,VRow:T.a,VSpacer:j.a,VTextField:$.a,VToolbar:y.a})}}]);