(window.webpackJsonp=window.webpackJsonp||[]).push([[205,100],{459:function(t,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return v}));var e=n(14),o=(n(56),n(108)),c=n.n(o),l="https://www.psnkp.co.th/server",f=function(){var t=Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function v(t,r,n){return _.apply(this,arguments)}function _(){return(_=Object(e.a)(regeneratorRuntime.mark((function t(r,n,data){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,e={Authorization:t.t0},t.next=7,c()({method:r,url:n,data:data,headers:e}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},480:function(t,r,n){"use strict";n.d(r,"i",(function(){return o})),n.d(r,"g",(function(){return c})),n.d(r,"p",(function(){return l})),n.d(r,"q",(function(){return f})),n.d(r,"m",(function(){return d})),n.d(r,"k",(function(){return v})),n.d(r,"l",(function(){return _})),n.d(r,"b",(function(){return m})),n.d(r,"o",(function(){return h})),n.d(r,"s",(function(){return w})),n.d(r,"a",(function(){return O})),n.d(r,"c",(function(){return x})),n.d(r,"d",(function(){return j})),n.d(r,"e",(function(){return y})),n.d(r,"f",(function(){return C})),n.d(r,"n",(function(){return k})),n.d(r,"h",(function(){return D})),n.d(r,"j",(function(){return $})),n.d(r,"r",(function(){return R}));var e=n(459),path="/api/car";function o(){var t=e.a+path;return Object(e.b)("get",t,{})}function c(t){var r=e.a+path+"/"+t;return Object(e.b)("delete",r,{})}function l(t){var r=e.a+path;return Object(e.b)("post",r,t)}function f(t,r){var n=e.a+path+"/"+t;return Object(e.b)("put",n,r)}function d(t){var r=e.a+path+"/"+t;return Object(e.b)("get",r,{})}function v(){var t=e.a+"/api/SelectOnCarAll";return Object(e.b)("get",t,{})}function _(){var t=e.a+"/api/SelectAllCars";return Object(e.b)("get",t,{})}function m(){var t=e.a+"/api/SelectCarNo";return Object(e.b)("get",t,{})}function h(t){var r=e.a+"/api/StockOnCar";return Object(e.b)("post",r,t)}function w(t){var r=e.a+"/api/uploadImgCars";return Object(e.b)("post",r,t)}function O(t){var r=e.a+"/api/ImageCar/"+t;return Object(e.b)("post",r,{})}function x(t){var r=e.a+"/api/change_fist_img";return Object(e.b)("post",r,t)}function j(t){var r=e.a+"/api/deleteAllImgCar";return Object(e.b)("post",r,t)}function y(t){var r=e.a+"/api/deleteFolder";return Object(e.b)("post",r,t)}function C(t){var r=e.a+"/api/delete_img_car";return Object(e.b)("post",r,t)}function k(t){var r=e.a+"/api/showCar";return Object(e.b)("post",r,t)}function D(t,r){var n=e.a+"/api/getAllinfo/"+t+"/"+r;return Object(e.b)("get",n,{})}function $(t){var r=e.a+"/api/reRollCar/"+t;return Object(e.b)("get",r,{})}function R(){var t=e.a+"/api/update_amountPrice";return Object(e.b)("get",t,{})}},482:function(t,r,n){"use strict";var e=n(2),o=(n(33),n(23),n(161),n(8),n(83),n(6),n(7),n(9),n(10),n(4)),c=n(68),l=n(92);function f(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",(function(r){t.$set(t.errorBag,input._uid,r)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(e){e&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=r(input)))})):n.valid=r(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var r=this.watchers.find((function(i){return i._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}})},510:function(t,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return c})),n.d(r,"f",(function(){return l})),n.d(r,"g",(function(){return f})),n.d(r,"e",(function(){return d})),n.d(r,"c",(function(){return v})),n.d(r,"d",(function(){return _}));var e=n(459),path="/api/users";function o(){var t=e.a+path;return Object(e.b)("get",t,{})}function c(t){var r=e.a+path+"/"+t;return Object(e.b)("delete",r,{})}function l(t){var r=e.a+path;return Object(e.b)("post",r,t)}function f(t,r){var n=e.a+path+"/"+t;return Object(e.b)("post",n,r)}function d(t){var r=e.a+path+"/"+t;return Object(e.b)("get",r,{})}function v(){var t=e.a+"/api/SelectOnSale";return Object(e.b)("get",t,{})}function _(t){var r=e.a+"/api/SelectOnTechnicianBuild/"+t;return Object(e.b)("get",r,{})}},536:function(t,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return c})),n.d(r,"e",(function(){return l})),n.d(r,"f",(function(){return f})),n.d(r,"d",(function(){return d})),n.d(r,"c",(function(){return select}));var e=n(459),path="/api/car_part";function o(){var t=e.a+path;return Object(e.b)("get",t,{})}function c(t){var r=e.a+path+"/"+t;return Object(e.b)("delete",r,{})}function l(t){var r=e.a+path;return Object(e.b)("post",r,t)}function f(t,r){var n=e.a+path+"/"+t;return Object(e.b)("post",n,r)}function d(t){var r=e.a+path+"/"+t;return Object(e.b)("get",r,{})}function select(){var t=e.a+"/api/SelectOnCarParts";return Object(e.b)("get",t,{})}},607:function(t,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return c})),n.d(r,"e",(function(){return l})),n.d(r,"f",(function(){return f})),n.d(r,"d",(function(){return d})),n.d(r,"c",(function(){return v}));var e=n(459),path="/api/purchase";function o(){var t=e.a+path;return Object(e.b)("get",t,{})}function c(t){var r=e.a+path+"/"+t;return Object(e.b)("delete",r,{})}function l(t){var r=e.a+path;return Object(e.b)("post",r,t)}function f(t,r){var n=e.a+path+"/"+t;return Object(e.b)("put",n,r)}function d(t){var r=e.a+path+"/"+t;return Object(e.b)("get",r,{})}function v(t){var r=e.a+"/api/purchase_where/"+t;return Object(e.b)("post",r,{})}},748:function(t,r,n){var content=n(860);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("b86de3b4",content,!0,{sourceMap:!1})},859:function(t,r,n){"use strict";n(748)},860:function(t,r,n){var e=n(11)(!1);e.push([t.i,'.v-text-field--outlined fieldset{border:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%!important;padding:8px!important}div[size=A4]{background:#fff;width:21cm;height:29.7cm;display:block;margin:0 auto}@media print{body,html{width:210mm;height:297mm;font-family:"Taviraj",serif}.noprint{visibility:hidden}@page :footer{display:none}@page :header{display:none}}p{font-size:18px!important;font-weight:400!important}span{font-size:14px!important;font-weight:700!important}h2,h4,h5{font-weight:100!important}h5{font-size:14px!important;font-weight:lighter!important;font-family:"Taviraj",serif}.space{margin-top:0!important}.space1{margin-top:2%!important}.b-solid-t{border-style:solid;border-width:thin}.mg{margin:0}',""]),t.exports=e},977:function(t,r,n){"use strict";n.r(r);var e=n(14),o=(n(56),n(510)),c=n(607),l=n(480),f=n(536),d={layout:"full",data:function(){return{formData:{},carParts:[],dataCars:[],first_name:""}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getCarParts();case 2:return r.next=4,t.getCars();case 4:t.print();case 5:case"end":return r.stop()}}),r)})))()},methods:{getdata:function(t){var r=this;return Object(e.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b();case 2:n.sent.data.forEach((function(element){element.id==t&&(r.first_name=element.first_name)}));case 4:case"end":return n.stop()}}),n)})))()},getCars:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.l();case 2:n=r.sent,t.dataCars=n.data;case 4:case"end":return r.stop()}}),r)})))()},getCarParts:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.c();case 2:n=r.sent,t.carParts=n.data;case 4:case"end":return r.stop()}}),r)})))()},print:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.d(t.$route.query.id);case 2:n=r.sent,t.$refs.form.reset(),t.formData=n.data,t.getdata(n.data.user_id);case 6:case"end":return r.stop()}}),r)})))()}}},v=(n(859),n(42)),_=n(51),m=n.n(_),h=n(210),w=n(158),O=n(451),x=n(482),j=n(455),component=Object(v.a)(d,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{size:"A4"}},[n("v-form",{ref:"form"},[n("br"),t._v(" "),n("div",{attrs:{align:"center"}},[n("h2",[t._v("ใบสั่งซื้ออะไหล่")])]),t._v(" "),n("v-card-text",{staticClass:"b-solid-t"},[n("div",{staticClass:"ma-3"},[n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",{attrs:{cols:"8"}}),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("h5",[t._v("\n              เลขใบเสร็จ: "),n("span",[t._v(" "+t._s(t.formData.po_number)+" ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"8"}}),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("h5",[t._v("\n              วันที่สั่งซื้อ:\n              "),n("span",[t._v("\n                "+t._s(null==t.formData.po_date?"":t.$moment(t.formData.po_date).add(543,"year").format("DD MMMM YYYY"))+"\n              ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"8"}}),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("h5",[t._v("\n              คนสั่งซื้อ: "),n("span",[t._v(" "+t._s(t.first_name)+" ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              ซื้อในนาม: "),n("span",[t._v(" "+t._s(t.formData.company_name)+" ")])])]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              ซื้อสินค้าจากบริษัท:\n              "),n("span",[t._v(" "+t._s(t.formData.partner_companie_name)+" ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              เบอร์ติดต่อ: "),n("span",[t._v(" "+t._s(t.formData.branch_tel)+" ")])])]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              เบอร์ติดต่อ: "),n("span",[t._v(" "+t._s(t.formData.partner_companie_tel)+" ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              เลขผู้เสียภาษี: "),n("span",[t._v(" "+t._s(t.formData.company_idvat)+" ")])])]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              เลขผู้เสียภาษี:\n              "),n("span",[t._v(" "+t._s(t.formData.partner_companie_idvat)+" ")])])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              ที่อยู่: "),n("span",[t._v(" "+t._s(t.formData.company_address)+" ")])])]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h5",[t._v("\n              ที่อยู่: "),n("span",[t._v(" "+t._s(t.formData.partner_companie_address)+" ")])])])],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"space",attrs:{align:"center"}},[n("h2",[t._v("รายการสั่งซื้อ")])]),t._v(" "),n("div",{staticClass:"space"},[n("table",{staticStyle:{width:"100%"}},[n("tr",[n("th",[t._v("ประเภท")]),t._v(" "),n("th",[t._v("ซื้อให้รถ")]),t._v(" "),n("th",[t._v("อะไหล่")]),t._v(" "),n("th",[t._v("จำนวน")]),t._v(" "),n("th",[t._v("หน่วย")]),t._v(" "),n("th",[t._v("ราคา (บ.)")]),t._v(" "),n("th",[t._v("รวม (บ.)")])]),t._v(" "),t._l(t.formData.purchase_details,(function(r,e){return n("tr",{key:e},[n("td",{attrs:{align:"center"}},[n("span",[t._v("\n                  "+t._s(1==r.type?"เข้าคลัง":"ให้รถ")+"\n                ")])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("span",t._l(t.dataCars,(function(e,o){return n("span",{key:o},[t._v("\n                    "+t._s(e.id==r.car_id==1?e.car_no:null)+"\n                  ")])})),0)]),t._v(" "),n("td",{attrs:{align:"center"}},t._l(t.carParts,(function(e,o){return n("span",{key:o},[t._v("\n                  "+t._s(e.id==r.car_part_id==1?e.car_part_name:null)+"\n                ")])})),0),t._v(" "),n("td",{attrs:{align:"center"}},[n("span",[t._v("\n                  "+t._s(r.car_part_amount)+"\n                ")])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("span",[t._v(" "+t._s(r.unit_name)+" ")])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("span",[t._v(" "+t._s(r.car_part_price)+" ")])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("span",[t._v(" "+t._s(r.sumValue)+" ")])])])}))],2)]),t._v(" "),n("v-row",{staticClass:"d-flex flex-row space"},[n("v-col",{attrs:{cols:"8"}}),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("h3",[t._v("\n              รวมราคาทั้งหมด: "),n("span",[t._v(t._s(t.formData.sumValueAll)+" บ.")])])])],1)],1)])],1),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"noprint",staticStyle:{width:"100%"},attrs:{block:"",dark:"",elevation:"2",color:"red darken-1",onclick:"window.print();"}},[n("span",[t._v("ปริ้น")])])],1)}),[],!1,null,null,null);r.default=component.exports;m()(component,{VBtn:h.a,VCardText:w.b,VCol:O.a,VForm:x.a,VRow:j.a})}}]);