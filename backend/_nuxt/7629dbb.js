(window.webpackJsonp=window.webpackJsonp||[]).push([[95,138],{440:function(e,t,r){var n=r(17);n(n.S,"Object",{is:r(260)})},451:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return m})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return select}));var n=r(429),path="/api/car_type";function o(){var e=n.a+path;return Object(n.b)("get",e,{})}function c(e){var t=n.a+path+"/"+e;return Object(n.b)("delete",t,{})}function l(e){var t=n.a+path;return Object(n.b)("post",t,e)}function m(e,t){var r=n.a+path+"/"+e;return Object(n.b)("put",r,t)}function d(e){var t=n.a+path+"/"+e;return Object(n.b)("get",t,{})}function select(){var e=n.a+"/api/SelectOnCarType";return Object(n.b)("get",e,{})}},477:function(e,t,r){"use strict";r.r(t);var n=r(114),o=r(19),c=r(9),l=(r(48),r(432)),m={components:{dialogNew:r(482).default},data:function(){return{formTitle:"เพิ่มข้อมูล",dialog:!1,id:"",action:"add"}},mounted:function(){},methods:{AddItem:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formTitle="เพิ่มข้อมูล",e.dialog=!0,e.id="",e.action="add";case 4:case"end":return t.stop()}}),t)})))()},addSuccess:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dialog=!1,t.next=3,e.$nextTick((function(){e.$emit("success","AddCarType"),l.k()}));case 3:case"end":return t.stop()}}),t)})))()},addError:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dialog=!1,t.next=3,e.$nextTick((function(){e.$emit("error","AddCarType"),l.j()}));case 3:case"end":return t.stop()}}),t)})))()}}},d=r(38),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r(n.a,{on:{click:function(t){return e.AddItem()}}},[r(o.a,[r(o.c,{staticStyle:{color:"#1976d2"}},[e._v(" + เพิ่มข้อมูลใหม่ ")])],1)],1),e._v(" "),r("dialogNew",{attrs:{dialog:e.dialog,id:e.id,action:e.action,formTitle:e.formTitle},on:{cancleItem:function(t){e.dialog=!1},success:function(t){return e.addSuccess()},error:function(t){return e.addError()}}})],1)}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return m})),r.d(t,"d",(function(){return d})),r.d(t,"a",(function(){return f}));var n=r(429),path="/api/customer";function o(){var e=n.a+path;return Object(n.b)("get",e,{})}function c(e){var t=n.a+path+"/"+e;return Object(n.b)("delete",t,{})}function l(e){var t=n.a+path;return Object(n.b)("post",t,e)}function m(e,t){var r=n.a+path+"/"+e;return Object(n.b)("put",r,t)}function d(e){var t=n.a+path+"/"+e;return Object(n.b)("get",t,{})}function f(e){var t=n.a+"/api/SelectCustomer/"+e;return Object(n.b)("post",t,{})}},482:function(e,t,r){"use strict";r.r(t);var n=r(202),o=r(190),c=r(149),l=r(428),m=r(426),d=r(458),f=r(191),_=r(472),v=r(471),x=r(453),D=r(422),k=r(435),y=r(46),h=r(9),$=(r(48),r(451)),C={props:["dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},rule:[function(e){return!!e||"กรุณาใส่ข้อมูล"}],dialogDeleteComponent:!1}},mounted:function(){},methods:{onAction:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.$refs.form.validate()){r.next=20;break}if(t.btnloading=!0,"add"!=t.action){r.next=12;break}return r.next=5,$.e(t.formData);case 5:n=r.sent,t.$refs.form.reset(),200==n.status?t.$emit("success"):t.$emit("error"),t.btnloading=!1,t.formDataLoading=!1,r.next=20;break;case 12:if("edit"!=t.action){r.next=20;break}return r.next=15,$.f(e,t.formData);case 15:o=r.sent,t.$refs.form.reset(),200==o.status?t.$emit("success"):t.$emit("error"),t.btnloading=!1,t.formDataLoading=!1;case 20:case"end":return r.stop()}}),r)})))()}},watch:{dialog:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogDeleteComponent=e.dialog,!e.dialogDeleteComponent){t.next=14;break}if("add"!=e.action){t.next=6;break}e.$nextTick((function(){e.$refs.form.reset();var t=e;e.$nextTick(Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,{car_type_active:"1"};case 2:t.formData=e.sent;case 3:case"end":return e.stop()}}),e)}))))})),t.next=14;break;case 6:if("edit"!=e.action){t.next=14;break}return e.formDataLoading=!0,t.next=10,$.d(e.id);case 10:return r=t.sent,t.next=13,e.$nextTick((function(){e.$refs.form.reset();var t=e;e.$nextTick(Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.data;case 2:t.formData=e.sent;case 3:case"end":return e.stop()}}),e)}))))}));case 13:e.formDataLoading=!1;case 14:e.btnloading=!1;case 15:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},w=r(38),component=Object(w.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(l.a,[r(m.a,{attrs:{width:"500px"},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[r(o.a,[r(d.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(t){return t.preventDefault(),e.onAction(e.formData.id)}}},[r(y.a,{attrs:{color:"primary",dark:"",flat:""}},[e._v("\n          "+e._s(e.formTitle)+"\n        ")]),e._v(" "),e.formDataLoading?r(f.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):e._e(),e._v(" "),r(c.b,[r(l.a,[r(k.a,{attrs:{autocomplete:"true",label:"ไอคอน","append-icon":"",id:"formData.car_type_icon",name:"formData.car_type_icon",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_type_icon,callback:function(t){e.$set(e.formData,"car_type_icon",t)},expression:"formData.car_type_icon"}}),e._v(" "),r(k.a,{staticClass:"mt-3",attrs:{autocomplete:"true",label:"รหัสสี","append-icon":"",id:"formData.car_type_code_color",name:"formData.car_type_code_color",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_type_code_color,callback:function(t){e.$set(e.formData,"car_type_code_color",t)},expression:"formData.car_type_code_color"}}),e._v(" "),r(x.a,{staticClass:"mt-3",attrs:{items:[{value:1,text:"เก๋ง"},{value:2,text:"กระบะ"}],"item-value":"value","item-text":"text",label:"ประเภทหลัก",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_type_main,callback:function(t){e.$set(e.formData,"car_type_main",t)},expression:"formData.car_type_main"}}),e._v(" "),r(k.a,{staticClass:"mt-3",attrs:{autocomplete:"true",label:"ประเภทรถไทย","append-icon":"",id:"formData.car_type_name",name:"formData.car_type_name",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.car_type_name,callback:function(t){e.$set(e.formData,"car_type_name",t)},expression:"formData.car_type_name"}}),e._v(" "),r(k.a,{staticClass:"mt-3",attrs:{autocomplete:"true",label:"ประเภทรถอังกฤษ","append-icon":"",id:"formData.car_type_name_en",name:"formData.car_type_name_en",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.car_type_name_en,callback:function(t){e.$set(e.formData,"car_type_name_en",t)},expression:"formData.car_type_name_en"}}),e._v(" "),r(v.a,{staticClass:"mt-3",attrs:{id:"formData.car_type_active",name:"formData.car_type_active",rules:e.rule,row:""},model:{value:e.formData.car_type_active,callback:function(t){e.$set(e.formData,"car_type_active",t)},expression:"formData.car_type_active"}},[[r("div",{staticClass:"mr-1"},[e._v("แสดงตอนเลือก:")])],e._v(" "),r(_.a,{attrs:{label:"เปิดใช้งาน",value:"1"}}),e._v(" "),r(_.a,{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2)],1)],1),e._v(" "),r(c.a,[r(D.a),e._v(" "),r(n.a,{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("cancleItem")}}},[e._v("ยกเลิก")]),e._v(" "),r(n.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:e.btnloading}},[e._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},485:function(e,t,r){"use strict";r.r(t);var n=r(202),o=r(190),c=r(149),l=r(424),m=r(428),d=r(426),f=r(458),_=r(191),v=r(472),x=r(471),D=r(423),k=r(422),y=r(435),h=r(46),$=r(9),C=(r(48),r(478)),w=r(455),j=r(451),O=r(480),R=r(477),T={components:{selectAddCarModel:O.default,selectAddCarType:R.default},props:["dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formTitleModel:"เพิ่มข้อมูล",formData:{},rule:[function(e){return!!e||"กรุณาใส่ข้อมูล"}],cartypes:[],carmodels:[],dialogDeleteComponent:!1}},mounted:function(){},methods:{getCartypes:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.c();case 2:r=t.sent,e.cartypes=r.data,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},getCarmodels:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.c();case 2:r=t.sent,e.carmodels=r.data,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},addSuccess:function(e){var t=this;return Object($.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("AddCarType"!=e){r.next=5;break}return r.next=3,t.getCartypes();case 3:r.next=8;break;case 5:if("AddCarModel"!=e){r.next=8;break}return r.next=8,t.getCarmodels();case 8:case"end":return r.stop()}}),r)})))()},addError:function(e){var t=this;return Object($.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("AddCarType"!=e){r.next=5;break}return r.next=3,t.getCartypes();case 3:r.next=8;break;case 5:if("AddCarModel"!=e){r.next=8;break}return r.next=8,t.getCarmodels();case 8:case"end":return r.stop()}}),r)})))()},onAction:function(e){var t=this;return Object($.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=21;break}if(t.btnloading=!0,t.formDataLoading=!0,"add"!=t.action){e.next=13;break}return e.next=6,C.e(t.formData);case 6:r=e.sent,t.$refs.form.reset(),200==r.status?t.$emit("success","AddCustomer"):t.$emit("error","AddCustomer"),t.btnloading=!1,t.formDataLoading=!1,e.next=21;break;case 13:if("edit"!=t.action){e.next=21;break}return e.next=16,C.f(t.id,t.formData);case 16:n=e.sent,t.$refs.form.reset(),200==n.status?t.$emit("success","AddCustomer"):t.$emit("error","AddCustomer"),t.btnloading=!1,t.formDataLoading=!1;case 21:case"end":return e.stop()}}),e)})))()}},watch:{dialog:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogDeleteComponent=e.dialog,!e.dialog){t.next=17;break}if(e.getCartypes(),e.getCarmodels(),"add"!=e.action){t.next=8;break}e.$nextTick((function(){e.$refs.form.reset();var t=e;e.$nextTick(Object($.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formData={customer_job:"1"};case 1:case"end":return e.stop()}}),e)}))))})),t.next=15;break;case 8:if("edit"!=e.action){t.next=15;break}return e.formDataLoading=!0,t.next=12,C.d(e.id);case 12:r=t.sent,e.$nextTick((function(){e.$refs.form.reset();var t=e;e.$nextTick(Object($.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.data;case 2:t.formData=e.sent;case 3:case"end":return e.stop()}}),e)}))))})),e.formDataLoading=!1;case 15:t.next=18;break;case 17:e.$emit("cancleItem");case 18:e.btnloading=!1;case 19:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},A=r(38),component=Object(A.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(m.a,[r(d.a,{attrs:{width:"550px",fullscreen:"xs"==e.$vuetify.breakpoint.name||"sm"==e.$vuetify.breakpoint.name},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[r(o.a,[r(f.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(t){return t.preventDefault(),e.onAction(e.formData.id)}}},[r(h.a,{attrs:{color:"primary",dark:"",flat:""}},[e._v("\n          "+e._s(e.formTitle)+"\n        ")]),e._v(" "),e.formDataLoading?r(_.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):e._e(),e._v(" "),r(c.b,[r(m.a,[r(D.a,[r(l.a,{attrs:{cols:"12"}},[r(y.a,{attrs:{autocomplete:"true",label:"ชื่อลูกค้า","append-icon":"",id:"formData.customer_name",name:"formData.customer_name",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.customer_name,callback:function(t){e.$set(e.formData,"customer_name",t)},expression:"formData.customer_name"}})],1)],1),e._v(" "),r(D.a,[r(l.a,{staticClass:"pt-0",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r(y.a,{attrs:{autocomplete:"true",label:"ชื่อเล่น","append-icon":"",id:"formData.customer_nickname",name:"formData.customer_nickname",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_nickname,callback:function(t){e.$set(e.formData,"customer_nickname",t)},expression:"formData.customer_nickname"}})],1),e._v(" "),r(l.a,{staticClass:"pt-0",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r(y.a,{attrs:{autocomplete:"true",label:"ปีเกิด (พ.ศ.)","append-icon":"",id:"formData.customer_birthday_year",name:"formData.customer_birthday_year",onkeypress:"return  (event.charCode >= 48 && event.charCode <= 57)",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.customer_birthday_year,callback:function(t){e.$set(e.formData,"customer_birthday_year",t)},expression:"formData.customer_birthday_year"}})],1),e._v(" "),r(l.a,{staticClass:"pt-0",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[r(y.a,{attrs:{autocomplete:"true",label:"เบอร์ติดต่อ","append-icon":"",id:"formData.customer_tel",name:"formData.customer_tel",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.customer_tel,callback:function(t){e.$set(e.formData,"customer_tel",t)},expression:"formData.customer_tel"}})],1)],1),e._v(" "),r(D.a,{staticClass:"d-flex flex-row rounded ma-auto mt-3 mb-3",staticStyle:{"border-style":"solid","border-width":"1px","border-color":"gray"}},[r(l.a,{attrs:{cols:"12"}},[r(x.a,{attrs:{id:"formData.customer_job",name:"formData.customer_job",rules:[function(e){return!!e}],"hide-details":""},model:{value:e.formData.customer_job,callback:function(t){e.$set(e.formData,"customer_job",t)},expression:"formData.customer_job"}},[[r("div",[e._v("อาชีพ:")])],e._v(" "),r(v.a,{attrs:{value:"1",label:"ข้าราชการ"}}),e._v(" "),r(v.a,{attrs:{value:"2",label:"พนักงานเอกชน"}}),e._v(" "),r(v.a,{attrs:{value:"3",label:"เกษตร"}}),e._v(" "),r(v.a,{attrs:{value:"4",label:"ค้าขาย"}}),e._v(" "),r(v.a,{attrs:{value:"5",label:"อื่น ๆ "}})],2)],1)],1),e._v(" "),r(D.a,[5==e.formData.customer_job?r(l.a,[r(y.a,{attrs:{autocomplete:"true",label:"อาชีพ",id:"formData.customer_job_list",name:"formData.customer_job_list","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_job_list,callback:function(t){e.$set(e.formData,"customer_job_list",t)},expression:"formData.customer_job_list"}})],1):e._e()],1)],1)],1),e._v(" "),r(c.a,[r(k.a),e._v(" "),r(n.a,{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("cancleItem")}}},[e._v("ยกเลิก")]),e._v(" "),r(n.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:e.btnloading}},[e._v("บันทึก\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);