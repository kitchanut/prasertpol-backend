(window.webpackJsonp=window.webpackJsonp||[]).push([[202,98],{454:function(t,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return d}));var e=n(14),o=(n(57),n(109)),c=n.n(o),l="https://www.psnkp.co.th/server",v=function(){var t=Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function d(t,r,n){return _.apply(this,arguments)}function _(){return(_=Object(e.a)(regeneratorRuntime.mark((function t(r,n,data){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v()){t.next=9;break}return t.next=3,f();case 3:return t.t0=t.sent,e={Authorization:t.t0},t.next=7,c()({method:r,url:n,data:data,headers:e}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},476:function(t,r,n){"use strict";var e=n(2),o=(n(33),n(23),n(161),n(8),n(85),n(6),n(7),n(11),n(12),n(4)),c=n(68),l=n(94);function v(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",(function(r){t.$set(t.errorBag,input._uid,r)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(e){e&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=r(input)))})):n.valid=r(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var r=this.watchers.find((function(i){return i._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}})},538:function(t,r,n){"use strict";n.d(r,"g",(function(){return o})),n.d(r,"h",(function(){return c})),n.d(r,"f",(function(){return l})),n.d(r,"c",(function(){return v})),n.d(r,"a",(function(){return f})),n.d(r,"d",(function(){return d})),n.d(r,"b",(function(){return _})),n.d(r,"e",(function(){return m}));var e=n(454),path="/api/financial";function o(t){var r=e.a+path;return Object(e.b)("post",r,t)}function c(t,r){var n=e.a+path+"/"+t;return Object(e.b)("put",n,r)}function l(t){var r=e.a+path+"/"+t;return Object(e.b)("get",r,{})}function v(t,r){var n=e.a+"/api/checkFinancial/"+t+"/"+r;return Object(e.b)("post",n,{})}function f(t){var r=e.a+"/api/addFinancial/"+t;return Object(e.b)("post",r,{})}function d(t,r){var n=e.a+"/api/editFinancial/"+t+"/"+r;return Object(e.b)("post",n,{})}function _(t){var r=e.a+"/api/allFinancialonWork/"+t;return Object(e.b)("post",r,{})}function m(t){var r=e.a+"/api/printFinancial/"+t;return Object(e.b)("post",r,{})}},733:function(t,r,n){var content=n(833);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("71b6c1dc",content,!0,{sourceMap:!1})},832:function(t,r,n){"use strict";n(733)},833:function(t,r,n){var e=n(9)(!1);e.push([t.i,'.v-text-field--outlined fieldset{border:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%!important;padding:8px!important}div[size=A4]{background:#fff;width:21cm;height:29.7cm;display:block;margin:0 auto}@media print{body,html{width:210mm;height:297mm;font-family:"Taviraj",serif}.noprint{visibility:hidden}@page :footer{display:none}@page :header{display:none}}p{font-size:18px!important;font-weight:400!important}span{font-weight:700!important}h5,span{font-size:14px!important}h5{font-weight:lighter!important;font-family:"Taviraj",serif}.space{margin-top:0!important}.space1{margin-top:2%!important}.b-solid-t{border-style:solid;border-width:thin}.mg{margin:0}',""]),t.exports=e},959:function(t,r,n){"use strict";n.r(r);var e=n(14),o=(n(57),n(538)),c={layout:"print",data:function(){return{btn_print:!1,formData:{},carParts:[],dataUnit:[]}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.print();case 1:case"end":return r.stop()}}),r)})))()},methods:{print:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.e(t.$route.query.idFinancial);case 2:n=r.sent,t.$refs.form.reset(),t.formData=n.data;case 5:case"end":return r.stop()}}),r)})))()}}},l=(n(832),n(42)),v=n(52),f=n.n(v),d=n(210),_=n(192),m=n(157),h=n(445),x=n(476),w=n(450),component=Object(l.a)(c,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{size:"A4"}},[n("v-card",{staticClass:"elevation-0"},[n("v-form",{ref:"form"},[n("div",{attrs:{align:"center"}},[n("h2",[t._v("หลักฐานการรับเงิน ธุรกิจการขายรถยนต์ใช้แล้ว")])]),t._v(" "),n("v-card-text",{staticClass:"b-solid-t"},[n("div",[n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",{attrs:{cols:"8"}}),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("h5",[t._v("\n                วันที่บันทึก:\n                "),t._v(" "),n("span",[t._v(t._s(null==t.formData.created_at?"":t.$moment(t.formData.date_dcreated_atocument).add(543,"year").format("DD MMMM YYYY ( HH:mm น.)")))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row mt-1",staticStyle:{"border-top":"2px solid black","border-bottom":"2px solid black"}},[n("v-col",{staticClass:"text-center",staticStyle:{"border-right":"2px solid black"},attrs:{cols:"5"}},[n("h5",[t._v("บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด")]),t._v(" "),n("h5",[t._v("\n                ที่อยู่ : 216/111 นิตโย ตำบลในเมือง อำเภอเมืองนครพนม นครพนม\n                48000\n              ")]),t._v(" "),n("h5",[t._v("โทร: 042-51332 แฟกซ์: 042-513588")]),t._v(" "),n("h5",[t._v("เลขประจำตัวผู้เสียภาษีอาการ")]),t._v(" "),n("h5",[t._v("0485548000108")])]),t._v(" "),n("v-col",[n("v-row",[n("v-col",[n("h5",[t._v("ชื่อ-นามสกุล/ที่อยู่ ของลูกค้า(ผู้ซื้อ)")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",[t._v("\n                    ชื่อ:\n                    "),n("span",[t._v(t._s(t.formData.customer_name))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                    ที่อยู่:\n                    "),n("span",[t._v("\n                      "+t._s(t.formData.customer_address)+"\n                      "+t._s(" ")+"\n                      "+t._s(null==t.formData.Amphure?"":t.formData.Amphure.name_th)+"\n                      "+t._s(" ")+"\n                      "+t._s(null==t.formData.District?"":t.formData.District.name_th)+"\n                      "+t._s(" ")+"\n                      "+t._s(null==t.formData.Province?"":t.formData.Province.name_th)+"\n                    ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                    โทร: "),n("span",[t._v(t._s(t.formData.customer_tel))])])])],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h4",[t._v("รายละเอียดรถยนต์")])]),t._v(" "),n("v-col",[n("h5",[t._v("\n                ลำดับรถ: "),n("span",[t._v(t._s(t.formData.car_no))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                ยี่ห้อ: "),n("span",[t._v(t._s(t.formData.car_model_name))])])]),t._v(" "),n("v-col",[n("h5",[t._v("\n                หมายเลขเครื่องยนต์: "),n("span",[t._v(t._s(t.formData.car_no_engine))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                รุ่น: "),n("span",[t._v(t._s(t.formData.car_series_name))])])]),t._v(" "),n("v-col",[n("h5",[t._v("\n                หมายเลขตัวถัง: "),n("span",[t._v(t._s(t.formData.car_no_body))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                ปี: "),n("span",[t._v(" "+t._s(t.formData.car_year))])])]),t._v(" "),n("v-col",[n("h5",[t._v("\n                สีรถ: "),n("span",[t._v(" "+t._s(t.formData.color_name))])])]),t._v(" "),n("v-col",[n("h5",[t._v("\n                หมายเลขทะเบียน: "),n("span",[t._v(" "+t._s(t.formData.car_regis))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                ระยะทางการใช้งาน:\n                "),n("span",[t._v(t._s(null==t.formData.car_mileage?"":Number(t.formData.car_mileage).toLocaleString("th-TH",{maximumFractionDigits:0,minimumFractionDigits:0})))]),t._v("\n                กม.\n              ")])]),t._v(" "),n("v-col",[n("h5",[t._v("\n                ภาระผูกพัน(ถ้ามี): "),n("span",[t._v(t._s(t.formData.obligation))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",[n("h5",[t._v("\n                ผู้ถือกรรมสิทธิ์: "),n("span",[t._v(t._s(t.formData.owner))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",[t._v("\n                ผู้ครอบครอง: "),n("span",[t._v(t._s(t.formData.occupy))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row rounded mt-3 mb-3",staticStyle:{"border-style":"solid","border-width":"1px","border-color":"gray"}},[n("v-col",[n("v-col",[n("h5",[t._v("\n                  รายการชำระเงินค่ารถยนต์:\n\n                  "),1==t.formData.payment_type?n("span",[t._v("วางเงินจอง")]):t._e(),t._v(" "),2==t.formData.payment_type?n("span",[t._v("วางเงินดาวน์")]):t._e(),t._v(" "),3==t.formData.payment_type?n("span",[t._v("ชำระเงินสด")]):t._e()])])],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",[t._v("\n                จำนวนเงิน:\n                "),n("span",[t._v("\n                  "+t._s(null==t.formData.bath?0:Number(t.formData.bath).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n                  บาท\n                ")]),t._v(" "),n("span",[t._v("("+t._s(t.formData.bath_string)+")")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",[t._v("\n                ผู้ขายตกลงส่งมอบสำเนาสมุดคู่มือจดทะเบียนรถยนต์ในวันที่:\n                "),t._v(" "),n("span",[t._v(t._s(null==t.formData.date_con_reg?"":t.$moment(t.formData.date_con_reg).add(543,"year").format("DD MMMM YYYY")))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",[t._v("\n                ผู้ขายตกลงส่งมอบรถในวันที่:\n                "),t._v(" "),n("span",[t._v(t._s(null==t.formData.date_deliver?"":t.$moment(t.formData.date_deliver).add(543,"year").format("DD MMMM YYYY")))])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row",staticStyle:{"border-bottom":"2px solid black"}},[n("v-col",[n("h5",[t._v("\n                ผู้ขายตกลงส่งมอบสมุดคู่มือจดทะเบียนพร้อมเอกสารที่จำเป็นสำหรับการจดทะเบียนรถยนต์ตามที่กรมขนส่งทางบกกำหนดให้กับผู้ซื้อในวันที่:\n                "),t._v(" "),n("span",[t._v(t._s(null==t.formData.date_document?"":t.$moment(t.formData.date_document).add(543,"year").format("DD MMMM YYYY")))])])])],1),t._v(" "),n("br"),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{staticClass:"text m-2"},[n("h5",[t._v("\n                ในกรณีทีไม่สามารถดำเนินการจดทะเบียนรถยนต์ใช้แล้วเป็นชื่อผู้บริโภคหรือไม่สามารถส่งมอบรถยนต์ใช้แล้วให้ผู้บริโภคหรือมีการบอกเลิกสัญญาขายรถยนต์ใช้แล้วโดยมิใช่ความผิดของผู้บริโภค\n                ผู้ประกอบการธธุระกิจคืนเงินจำนวนดังกล่าวให้ผู้บริโภค\n              ")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",{staticClass:"text-center"},[t._v("\n                ลงชื่อ "),n("span",[t._v("...............................")])])]),t._v(" "),n("v-col",[n("h5",{staticClass:"text-center"},[t._v("\n                ลงชื่อ "),n("span",[t._v("...............................")])])]),t._v(" "),n("v-col",[n("h5",{staticClass:"text-center"},[t._v("\n                ลงชื่อ "),n("span",[t._v("...............................")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",{staticClass:"text-center"},[t._v("\n                (.........................................)\n              ")])]),t._v(" "),n("v-col",[n("h5",{staticClass:"text-center"},[t._v("\n                (.........................................)\n              ")])]),t._v(" "),n("v-col",[n("h5",{staticClass:"text-center"},[t._v("\n                (.........................................)\n              ")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("h5",{staticClass:"text-center"},[t._v("ผู้ซื้อ")])]),t._v(" "),n("v-col",[n("h5",{staticClass:"text-center"},[t._v("ผู้ขาย")])]),t._v(" "),n("v-col",[n("h5",{staticClass:"text-center"},[t._v("ผู้มีอำนาจออกหลักฐานการรับเงิน")])])],1)],1)])],1),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"noprint",staticStyle:{width:"100%"},attrs:{block:"",dark:"",elevation:"2",color:"red darken-1",onclick:"window.print();"}},[n("span",[t._v("ปริ้น")])])],1)],1)}),[],!1,null,null,null);r.default=component.exports;f()(component,{VBtn:d.a,VCard:_.a,VCardText:m.b,VCol:h.a,VForm:x.a,VRow:w.a})}}]);