(window.webpackJsonp=window.webpackJsonp||[]).push([[15,100],{459:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(14),o=(r(56),r(108)),c=r.n(o),l="https://www.psnkp.co.th/server",d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,$nuxt.$auth.loggedIn;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,window.$nuxt.$auth.getToken("local");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function f(e,t,r){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function e(t,r,data){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d()){e.next=9;break}return e.next=3,m();case 3:return e.t0=e.sent,n={Authorization:e.t0},e.next=7,c()({method:t,url:r,data:data,headers:n}).then((function(e){return e})).catch((function(e){if(401==e.response.status)return $nuxt.$auth.logout()}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},483:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"c",(function(){return select}));var n=r(459),path="/api/provinces";function o(){var e=n.a+path;return Object(n.b)("get",e,{})}function c(e){var t=n.a+path+"/"+e;return Object(n.b)("delete",t,{})}function l(e){var t=n.a+path;return Object(n.b)("post",t,e)}function d(e,t){var r=n.a+path+"/"+e;return Object(n.b)("put",r,t)}function m(e){var t=n.a+path+"/"+e;return Object(n.b)("get",t,{})}function select(){var e=n.a+"/api/selectOnProvinces";return Object(n.b)("get",e,{})}},485:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"c",(function(){return select}));var n=r(459),path="/api/amphures";function o(){var e=n.a+path;return Object(n.b)("get",e,{})}function c(e){var t=n.a+path+"/"+e;return Object(n.b)("delete",t,{})}function l(e){var t=n.a+path;return Object(n.b)("post",t,e)}function d(e,t){var r=n.a+path+"/"+e;return Object(n.b)("put",r,t)}function m(e){var t=n.a+path+"/"+e;return Object(n.b)("get",t,{})}function select(){var e=n.a+"/api/selectOnAmphures";return Object(n.b)("get",e,{})}},486:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"c",(function(){return select}));var n=r(459),path="/api/districts";function o(){var e=n.a+path;return Object(n.b)("get",e,{})}function c(e){var t=n.a+path+"/"+e;return Object(n.b)("delete",t,{})}function l(e){var t=n.a+path;return Object(n.b)("post",t,e)}function d(e,t){var r=n.a+path+"/"+e;return Object(n.b)("put",r,t)}function m(e){var t=n.a+path+"/"+e;return Object(n.b)("get",t,{})}function select(){var e=n.a+"/api/selectOnDistricts";return Object(n.b)("get",e,{})}},546:function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"h",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return v})),r.d(t,"e",(function(){return _}));var n=r(459),path="/api/financial";function o(e){var t=n.a+path;return Object(n.b)("post",t,e)}function c(e,t){var r=n.a+path+"/"+e;return Object(n.b)("put",r,t)}function l(e){var t=n.a+path+"/"+e;return Object(n.b)("get",t,{})}function d(e,t){var r=n.a+"/api/checkFinancial/"+e+"/"+t;return Object(n.b)("post",r,{})}function m(e){var t=n.a+"/api/addFinancial/"+e;return Object(n.b)("post",t,{})}function f(e,t){var r=n.a+"/api/editFinancial/"+e+"/"+t;return Object(n.b)("post",r,{})}function v(e){var t=n.a+"/api/allFinancialonWork/"+e;return Object(n.b)("post",t,{})}function _(e){var t=n.a+"/api/printFinancial/"+e;return Object(n.b)("post",t,{})}},615:function(e,t,r){"use strict";r.r(t);var n=r(14),o=(r(56),r(546)),c=r(483),l=r(485),d=r(486),m=r(513),f=r.n(m),v={props:["dialogFinancial","actionFinancial","financial_id","idWork","formTitleFinancial","payment_type","car_no"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},menuDateCreated_at:!1,menuDatecon_reg:!1,menuDate_deliver:!1,menuDate_document:!1,dialogDeleteComponent:!1,rule:[function(e){return!!e||"กรุณาใส่ข้อมูล"}],dataProvinces:[],dataAmphures:[],dataSelectAmphures:[],dataDistricts:[],dataSelectDistricts:[],formDisabled:!0}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getProvinces:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c();case 2:r=t.sent,e.dataProvinces=r.data;case 4:case"end":return t.stop()}}),t)})))()},getAmphures:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c();case 2:r=t.sent,e.dataAmphures=r.data,e.dataSelectAmphures=r.data;case 5:case"end":return t.stop()}}),t)})))()},getDistricts:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.c();case 2:r=t.sent,e.dataDistricts=r.data;case 4:case"end":return t.stop()}}),t)})))()},selectSeeProvince:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.dataSelectAmphures=[],r=0;r<e.dataAmphures.length;r++)e.dataAmphures[r].province_id==e.formData.province_id&&e.dataSelectAmphures.push(e.dataAmphures[r]);case 2:case"end":return t.stop()}}),t)})))()},selectSeeAmphure:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.dataSelectDistricts=[],r=0;r<e.dataDistricts.length;r++)e.dataDistricts[r].amphure_id==e.formData.amphure_id&&e.dataSelectDistricts.push(e.dataDistricts[r]);for(n=0;n<e.dataAmphures.length;n++)e.dataAmphures[n].id==e.formData.amphure_id&&(e.formData.province_id=e.dataAmphures[n].province_id);case 3:case"end":return t.stop()}}),t)})))()},selectSeeDistrict:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.formData.zip_code="",r=0;r<e.dataDistricts.length;r++)e.dataDistricts[r].id==e.formData.district_id&&(e.formData.zip_code=e.dataDistricts[r].zip_code);case 2:case"end":return t.stop()}}),t)})))()},cvToString:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:null!=e&&(t.formData.bath_string=f()(e));case 1:case"end":return r.stop()}}),r)})))()},print_a4:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$router.resolve({name:"prints-print_financial",query:{idFinancial:e.formData.id}}),window.open(r.href,"_blank");case 2:case"end":return t.stop()}}),t)})))()},onAction:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=19;break}if(e.btnloading=!0,e.formDataLoading=!0,"add"!=e.formData.action){t.next=11;break}return t.next=6,o.g(e.formData);case 6:r=t.sent,e.$refs.form.reset(),200==r.status?e.$emit("success","Financial"):e.$emit("error","Financial"),t.next=17;break;case 11:if("edit"!=e.formData.action){t.next=17;break}return t.next=14,o.h(e.formData.id,e.formData);case 14:n=t.sent,e.$refs.form.reset(),200==n.status?e.$emit("success","Financial"):e.$emit("error","Financial");case 17:e.btnloading=!1,e.formDataLoading=!1;case 19:case"end":return t.stop()}}),t)})))()}},watch:{dialogFinancial:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogDeleteComponent=e.dialogFinancial,!e.dialogFinancial){t.next=69;break}return e.formDataLoading=!0,e.formDisabled=!0,t.next=6,e.getProvinces();case 6:return t.next=8,e.getAmphures();case 8:return t.next=10,e.getDistricts();case 10:if("check"!=e.actionFinancial){t.next=32;break}return t.next=13,o.c(e.idWork,e.payment_type);case 13:return r=t.sent,t.next=16,e.$refs.form.reset();case 16:return t.next=18,r.data;case 18:return e.formData=t.sent,t.next=21,r.data.customer_id;case 21:return e.formData.customer_id=t.sent,t.next=24,r.data.customer_name;case 24:return e.formData.owner=t.sent,t.next=27,r.data.customer_name;case 27:return e.formData.occupy=t.sent,t.next=30,e.selectSeeAmphure();case 30:t.next=67;break;case 32:if("add"!=e.actionFinancial){t.next=54;break}return t.next=35,o.a(e.idWork);case 35:return n=t.sent,t.next=38,e.$refs.form.reset();case 38:return t.next=40,n.data;case 40:return e.formData=t.sent,t.next=43,n.data.customer_id;case 43:return e.formData.customer_id=t.sent,t.next=46,n.data.customer_name;case 46:return e.formData.owner=t.sent,t.next=49,n.data.customer_name;case 49:return e.formData.occupy=t.sent,t.next=52,e.selectSeeAmphure();case 52:t.next=67;break;case 54:if("edit"!=e.actionFinancial){t.next=67;break}return t.next=57,e.$refs.form.reset();case 57:return console.log(e.financial_id),t.next=60,o.f(e.financial_id);case 60:return c=t.sent,t.next=63,c.data;case 63:return e.formData=t.sent,e.formData.action="edit",t.next=67,e.selectSeeAmphure();case 67:e.formDataLoading=!1,e.formDisabled=!1;case 69:e.btnloading=!1;case 70:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},_=r(42),D=r(51),x=r.n(D),h=r(473),k=r(210),w=r(191),y=r(158),$=r(451),O=r(458),j=r(929),C=r(452),R=r(482),S=r(147),A=r(200),F=r(192),V=r(493),T=r(494),z=r(455),P=r(456),L=r(84),W=r(50),I=r(91),component=Object(_.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{"content-class":"v-dialog--custom",fullscreen:""},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[r("v-card",[r("v-form",{ref:"form",attrs:{autocomplete:"true",disabled:e.formDisabled},on:{submit:function(t){return t.preventDefault(),e.onAction()}}},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("cancleItem")}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-toolbar-title",[e._v(" "+e._s(e.formTitleFinancial)+" ")]),e._v(" "),r("v-spacer"),e._v(" "),"edit"==this.formData.action?r("v-btn",{staticStyle:{"font-size":"18px"},attrs:{target:"_blank",dark:"",text:"",loading:e.btnloading},on:{click:function(t){return e.print_a4()}}},[e._v("\n            ปริ้น\n          ")]):e._e(),e._v(" "),r("v-toolbar-items",[r("v-btn",{staticStyle:{"font-size":"18px"},attrs:{type:"submit",dark:"",text:"",loading:e.btnloading}},[e._v("\n              บันทึก\n            ")])],1)],1),e._v(" "),e.formDataLoading?r("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}}):e._e(),e._v(" "),r("v-card-text",[r("v-row",{staticClass:"d-flex flex-row"},[r("v-col"),e._v(" "),r("v-col",{attrs:{align:"end"}},[r("h3",[e._v("รหัสงาน: W"+e._s(e.idWork))]),e._v(" "),r("h3",[e._v("ลำดับรถ: "+e._s(e.car_no))])])],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col"),e._v(" "),r("v-col",[r("v-menu",{ref:"menuDateCreated_at",attrs:{id:"menuDateCreated_at",name:"menuDateCreated_at","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{autocomplete:"true",id:"formData.created_at",name:"formData.created_at",label:"วันที่",readonly:"","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"",clearable:"",flat:"",rules:e.rule},model:{value:e.formData.created_at,callback:function(t){e.$set(e.formData,"created_at",t)},expression:"formData.created_at"}},"v-text-field",o,!1),n))]}}]),model:{value:e.menuDateCreated_at,callback:function(t){e.menuDateCreated_at=t},expression:"menuDateCreated_at"}},[e._v(" "),r("v-date-picker",{attrs:{id:"formData.created_at",name:"formData.created_at",locale:"th-TH","picker-date":""},on:{input:function(t){e.menuDateCreated_at=!1}},model:{value:e.formData.created_at,callback:function(t){e.$set(e.formData,"created_at",t)},expression:"formData.created_at"}})],1)],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row mt-2",staticStyle:{"border-top":"2px solid black","border-bottom":"2px solid black"}},[r("v-col",{staticClass:"text-center",staticStyle:{"border-right":"2px solid black"},attrs:{cols:"4"}},[r("h3",[e._v("บริษัทประเสริฐผลรุ่งเรืองนครพนม จำกัด")]),e._v(" "),r("h3",[e._v("\n                ที่อยู่ : 216/111 นิตโย ตำบลในเมือง อำเภอเมืองนครพนม นครพนม\n                48000\n              ")]),e._v(" "),r("h3",[e._v("โทร: 042-51332 แฟกซ์: 042-513588")]),e._v(" "),r("h3",[e._v("เลขประจำตัวผู้เสียภาษีอาการ")]),e._v(" "),r("h3",[e._v("0485548000108")])]),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ชื่อ-นามสกุล ของลูกค้า",id:"formData.customer_name",name:"formData.customer_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_name,callback:function(t){e.$set(e.formData,"customer_name",t)},expression:"formData.customer_name"}}),e._v(" "),r("v-row",{staticClass:"d-flex flex-row mt-1 mb-1"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ที่อยู่",id:"formData.customer_address",name:"formData.customer_address","append-icon":"",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.customer_address,callback:function(t){e.$set(e.formData,"customer_address",t)},expression:"formData.customer_address"}})],1),e._v(" "),r("v-col",[r("v-autocomplete",{attrs:{id:"formData.amphure_id",name:"formData.amphure_id",items:e.dataSelectAmphures,"item-text":"name_th","item-value":"id","no-data-text":"ไม่มีข้อมูล",label:"อำเภอ",outlined:"",dense:"","hide-details":"",rules:e.rule},on:{change:e.selectSeeAmphure},model:{value:e.formData.amphure_id,callback:function(t){e.$set(e.formData,"amphure_id",t)},expression:"formData.amphure_id"}})],1),e._v(" "),r("v-col",[r("v-autocomplete",{attrs:{id:"formData.district_id",name:"formData.district_id",items:e.dataSelectDistricts,"item-text":"name_th","item-value":"id","no-data-text":"ไม่มีข้อมูล",label:"ตำบล",outlined:"",dense:"","hide-details":"",rules:e.rule},on:{change:e.selectSeeDistrict},model:{value:e.formData.district_id,callback:function(t){e.$set(e.formData,"district_id",t)},expression:"formData.district_id"}})],1),e._v(" "),r("v-col",[r("v-autocomplete",{attrs:{id:"formData.province_id",name:"formData.province_id",items:e.dataProvinces,"item-text":"name_th","item-value":"id",label:"จังหวัด","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":"",rules:e.rule},on:{change:e.selectSeeProvince},model:{value:e.formData.province_id,callback:function(t){e.$set(e.formData,"province_id",t)},expression:"formData.province_id"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"รหัสไปรษณีย์","append-icon":"",id:"formData.zip_code",name:"formData.zip_code",outlined:"",dense:"","hide-details":"",type:"number",rules:e.rule},model:{value:e.formData.zip_code,callback:function(t){e.$set(e.formData,"zip_code",t)},expression:"formData.zip_code"}})],1)],1),e._v(" "),r("v-text-field",{attrs:{autocomplete:"true",label:"เบอร์โทร",id:"formData.customer_tel",name:"formData.customer_tel","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_tel,callback:function(t){e.$set(e.formData,"customer_tel",t)},expression:"formData.customer_tel"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row mt-5"},[r("v-col",{staticClass:"text-center"},[r("h3",[e._v("รายละเอียดรถยนต์")])])],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ลำดับรถ",id:"formData.car_no",name:"formData.car_no","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_no,callback:function(t){e.$set(e.formData,"car_no",t)},expression:"formData.car_no"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ยี่ห้อ",id:"formData.car_model_name",name:"formData.car_model_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_model_name,callback:function(t){e.$set(e.formData,"car_model_name",t)},expression:"formData.car_model_name"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"หมายเลขเครื่องยนต์",id:"formData.car_no_engine",name:"formData.car_no_engine","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_no_engine,callback:function(t){e.$set(e.formData,"car_no_engine",t)},expression:"formData.car_no_engine"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"รุ่น",id:"formData.car_series_name",name:"formData.car_series_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_series_name,callback:function(t){e.$set(e.formData,"car_series_name",t)},expression:"formData.car_series_name"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"หมายเลขตัวถัง",id:"formData.car_no_body",name:"formData.car_no_body","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_no_body,callback:function(t){e.$set(e.formData,"car_no_body",t)},expression:"formData.car_no_body"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ปี",id:"formData.car_year",name:"formData.car_year","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_year,callback:function(t){e.$set(e.formData,"car_year",t)},expression:"formData.car_year"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"สีรถ",id:"formData.color_name",name:"formData.color_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.color_name,callback:function(t){e.$set(e.formData,"color_name",t)},expression:"formData.color_name"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"หมายเลขทะเขียน",id:"formData.car_regis",name:"formData.car_regis","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_regis,callback:function(t){e.$set(e.formData,"car_regis",t)},expression:"formData.car_regis"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"เลขไมค์",id:"formData.car_mileage",name:"formData.car_mileage","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_mileage,callback:function(t){e.$set(e.formData,"car_mileage",t)},expression:"formData.car_mileage"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ภาระผูกพัน(ถ้ามี)",id:"formData.obligation",name:"formData.obligation","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.obligation,callback:function(t){e.$set(e.formData,"obligation",t)},expression:"formData.obligation"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ชื่อผู้ถือกรรมสิทธิ์",id:"formData.owner",name:"formData.owner","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.owner,callback:function(t){e.$set(e.formData,"owner",t)},expression:"formData.owner"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"ชื่อผู้ครอบครอง",id:"formData.occupy",name:"formData.occupy","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.occupy,callback:function(t){e.$set(e.formData,"occupy",t)},expression:"formData.occupy"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row rounded ma-auto mt-3 mb-3",staticStyle:{"border-style":"solid","border-width":"1px","border-color":"gray"}},[r("v-col",[r("v-radio-group",{attrs:{id:"formData.payment_type",name:"formData.payment_type",row:"",rules:e.rule,"hide-details":""},model:{value:e.formData.payment_type,callback:function(t){e.$set(e.formData,"payment_type",t)},expression:"formData.payment_type"}},[[r("div",{staticClass:"mr-3"},[e._v("รายการชำระเงินค่ารถยนต์:")])],e._v(" "),r("v-radio",{attrs:{value:"1",label:"วางเงินจอง"}}),e._v(" "),r("v-radio",{attrs:{value:"2",label:"วางเงินดาวน์"}}),e._v(" "),r("v-radio",{attrs:{value:"3",label:"ซื้อรถเงินสด"}})],2)],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",label:"จำนวนเงิน (บ.)",id:"formData.bath",name:"formData.bath","append-icon":"",outlined:"",dense:"","hide-details":"",rules:e.rule,type:"number"},on:{input:e.cvToString},model:{value:e.formData.bath,callback:function(t){e.$set(e.formData,"bath",t)},expression:"formData.bath"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{autocomplete:"true",readonly:"",label:"ตัวอักษร",id:"formData.bath_string",name:"formData.bath_string","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.bath_string,callback:function(t){e.$set(e.formData,"bath_string",t)},expression:"formData.bath_string"}})],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-menu",{ref:"menuDatecon_reg",attrs:{id:"menuDatecon_reg",name:"menuDatecon_reg","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{autocomplete:"true",label:"ผู้ขายตกลงส่งมอบสำเนาสมุดคู่มือจดทะเบียนรถยนต์",id:"formData.date_con_reg",name:"formData.date_con_reg","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"",clearable:"","flathide-details":""},model:{value:e.formData.date_con_reg,callback:function(t){e.$set(e.formData,"date_con_reg",t)},expression:"formData.date_con_reg"}},"v-text-field",o,!1),n))]}}]),model:{value:e.menuDatecon_reg,callback:function(t){e.menuDatecon_reg=t},expression:"menuDatecon_reg"}},[e._v(" "),r("v-date-picker",{attrs:{id:"formData.date_con_reg",name:"formData.date_con_reg",locale:"th-TH","picker-date":""},on:{input:function(t){e.menuDatecon_reg=!1}},model:{value:e.formData.date_con_reg,callback:function(t){e.$set(e.formData,"date_con_reg",t)},expression:"formData.date_con_reg"}})],1)],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-menu",{ref:"menuDate_deliver",attrs:{id:"menuDate_deliver",name:"menuDate_deliver","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{autocomplete:"true",label:"ผู้ขายตกลงส่งมอบรถในวันที่",id:"formData.date_deliver",name:"formData.date_deliver","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":"",clearable:""},model:{value:e.formData.date_deliver,callback:function(t){e.$set(e.formData,"date_deliver",t)},expression:"formData.date_deliver"}},"v-text-field",o,!1),n))]}}]),model:{value:e.menuDate_deliver,callback:function(t){e.menuDate_deliver=t},expression:"menuDate_deliver"}},[e._v(" "),r("v-date-picker",{attrs:{id:"formData.date_deliver",name:"formData.date_deliver",locale:"th-TH","picker-date":""},on:{input:function(t){e.menuDate_deliver=!1}},model:{value:e.formData.date_deliver,callback:function(t){e.$set(e.formData,"date_deliver",t)},expression:"formData.date_deliver"}})],1)],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row mb-2",staticStyle:{"border-bottom":"2px solid black"}},[r("v-col",[r("v-menu",{ref:"menuDate_document",attrs:{id:"menuDate_document",name:"menuDate_document","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{autocomplete:"true",label:"ผู้ขายตกลงส่งมอบสมุดคู่มือจดทะเบียนพร้อมเอกสารที่จำเป็นสำหรับการจดทะเบียนรถยนต์ตามที่กรมขนส่งทางบกกำหนดให้กับผู้ซื้อในวันที่",id:"formData.date_document",name:"formData.date_document","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":"",clearable:""},model:{value:e.formData.date_document,callback:function(t){e.$set(e.formData,"date_document",t)},expression:"formData.date_document"}},"v-text-field",o,!1),n))]}}]),model:{value:e.menuDate_document,callback:function(t){e.menuDate_document=t},expression:"menuDate_document"}},[e._v(" "),r("v-date-picker",{attrs:{id:"formData.date_document",name:"formData.date_document",locale:"th-TH","picker-date":""},on:{input:function(t){e.menuDate_document=!1}},model:{value:e.formData.date_document,callback:function(t){e.$set(e.formData,"date_document",t)},expression:"formData.date_document"}})],1)],1)],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",{staticClass:"text-center m-2"},[r("h4",[e._v("\n                ในกรณีทีไม่สามารถดำเนินการจดทะเบียนรถยนต์ใช้แล้วเป็นชื่อผู้บริโภคหรือไม่สามารถส่งมอบรถยนต์ใช้แล้วให้ผู้บริโภคหรือมีการบอกเลิกสัญญาขายรถยนต์ใช้แล้วโดยมิใช่ความผิดของผู้บริโภค\n                ผู้ประกอบการธธุระกิจคืนเงินจำนวนดังกล่าวให้ผู้บริโภค\n              ")])])],1),e._v(" "),r("v-row",{staticClass:"d-flex flex-row"},[r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",disabled:"",label:"ลายเซ็นผู้ซื้อ","append-icon":"",outlined:"",dense:"","hide-details":""}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",disabled:"",label:"ลายเซ็นผู้ขาย",readonly:"","append-icon":"",outlined:"",dense:"","hide-details":""}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{autocomplete:"true",disabled:"",label:"ลายเซ็นผู้มีอำนาจออกหลักฐานการรับเงิน","append-icon":"",readonly:"",outlined:"",dense:"","hide-details":""}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VAutocomplete:h.a,VBtn:k.a,VCard:w.a,VCardText:y.b,VCol:$.a,VContainer:O.a,VDatePicker:j.a,VDialog:C.a,VForm:R.a,VIcon:S.a,VMenu:A.a,VProgressLinear:F.a,VRadio:V.a,VRadioGroup:T.a,VRow:z.a,VSpacer:P.a,VTextField:L.a,VToolbar:W.a,VToolbarItems:I.a,VToolbarTitle:I.b})}}]);