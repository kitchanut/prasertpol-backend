(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1027:function(t,n,r){"use strict";r.r(n);var e=r(202),o=r(190),c=r(149),l=r(424),_=r(458),f=r(423),d=r(9),v=(r(48),r(609)),m={layout:"print",data:function(){return{formData:{}}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.print();case 1:case"end":return n.stop()}}),n)})))()},methods:{print:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.b(t.$route.query.idContract);case 2:r=n.sent,t.$refs.form.reset(),t.formData=r.data;case 5:case"end":return n.stop()}}),n)})))()}}},h=(r(920),r(38)),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{size:"A4"}},[r(o.a,{staticClass:"elevation-0"},[r(_.a,{ref:"form"},[r("div",{attrs:{align:"center"}},[r("h2",[t._v("สัญญาขายรถยนต์")])]),t._v(" "),r(c.b,{staticClass:"b-solid-t"},[r("div",[r("div",{staticClass:"ma-3"},[r(f.a,{staticClass:"d-flex flex-row"},[r(l.a,{attrs:{cols:"7"}}),t._v(" "),r(l.a,{attrs:{cols:"4"}},[r("h5",[t._v("\n                  เขียนที่: "),r("span",[t._v(t._s(t.formData.contract_at))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,{attrs:{cols:"7"}}),t._v(" "),r(l.a,{attrs:{cols:"4"}},[r("h5",[t._v("\n                  วันที่ปล่อย\n                  "),r("span",[t._v(t._s(null==t.formData.contract_date?"":t.$moment(t.formData.contract_date).add(543,"year").format("DD MMMM YYYY"))+"\n                  ")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,{attrs:{cols:"1"}}),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ข้าพเจ้า:\n                  "),r("span",[t._v(" บริษัท ประเสริฐผลรุ่งเรืองนครพนม จำกัด ")])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ตกลงขายรถยนต์:\n                  "),r("span",[t._v(t._s(t.formData.car_model_name))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  หมายเลขทะเบียน:\n                  "),r("span",[t._v(t._s(t.formData.car_regis))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  หมายเลขเครื่องยนต์:\n                  "),r("span",[t._v(t._s(t.formData.car_no_engine))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,{attrs:{cols:"6"}},[r("h5",[t._v("\n                  หมายเลขตัวถัง: "),r("span",[t._v(t._s(t.formData.car_no_body))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ปีผลิต (ค.ศ.):\n                  "),r("span",[t._v(t._s(null==t.formData.car_year?"":t.$moment(t.formData.car_year).format("DD/MM/YYYY")))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  สี: "),r("span",[t._v(t._s(t.formData.color_name))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,{attrs:{cols:"1"}}),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ขายให้แก่: "),r("span",[t._v(t._s(t.formData.customer_name))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  อายุ (ปี):\n                  "),r("span",[t._v(t._s(543+Number((new Date).getFullYear())-Number(t.formData.customer_birthday_year)))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  ที่อยู่ตามทะเบียนบ้าน:\n                  "),r("span",[t._v("\n                    "+t._s(t.formData.customer_address)+"\n                    "+t._s(" ")+"\n                    "+t._s(null==t.formData.Amphure?"":t.formData.Amphure.name_th)+"\n                    "+t._s(" ")+"\n                    "+t._s(null==t.formData.District?"":t.formData.District.name_th)+"\n                    "+t._s(" ")+"\n                    "+t._s(null==t.formData.Province?"":t.formData.Province.name_th)+"\n                  ")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  บัตร:\n                  "),r("span",[t._v(t._s(t.formData.credit))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  หมายเลข: "),r("span",[t._v(t._s(t.formData.credit_no))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ออกให้ ณ: "),r("span",[t._v(t._s(t.formData.credit_address))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  เป็นจำนวนเงินทั้งสิ้น:\n                  "),r("span",[t._v(t._s(null==t.formData.contract_bath?0:t.formData.contract_bath))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  บาท:\n                  "),r("span",[t._v("("+t._s(0==t.formData.contract_bath||null==t.formData.contract_bath?"ศูนย์บาทถ้วน":t.formData.contract_bath_string)+")\n                  ")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  ข้าพเจ้าได้รับเงินมัดจำไว้เป็นเงิน:\n                  "),r("span",[t._v(t._s(null==t.formData.contract_bath_deposit?0:t.formData.contract_bath_deposit))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  บาท:\n                  "),r("span",[t._v("("+t._s(0==t.formData.contract_bath_deposit||null==t.formData.contract_bath_deposit?"ศูนย์บาทถ้วน":t.formData.contract_bath_deposit_string)+")")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  ผู้ซื้อยังคงค้างอีกเป็นจำนวนเงิน:\n                  "),r("span",[t._v(t._s(null==t.formData.contract_bath_hold?0:t.formData.contract_bath_hold))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  บาท:\n                  "),r("span",[t._v("("+t._s(0==t.formData.contract_bath_hold||null==t.formData.contract_bath_hold?"ศูนย์บาทถ้วน":t.formData.contract_bath_deposit_string)+")")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  ผู้ซื้อจะนำเงินมาชำระให้ครบจำนวนตามที่ตกลงภายในวันที่ :\n                  "),r("span",[t._v("\n                    "+t._s(null==t.formData.date_bath_Refund?"":t.$moment(t.formData.date_bath_Refund).add(543,"year").format("DD MMMM YYYY")))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row rounded ma-auto mt-5 mb-5",staticStyle:{"border-style":"solid","border-width":"1px","border-color":"gray"},attrs:{align:"center",justify:"center"}},[r(l.a,{staticClass:"text-center"},[r("h4",[t._v("\n                  หากผู้ซ้อไม่นำเงินมาชำระให้ตามกำหนด\n                  ผู้ซื้อยินยอมให้รับเงินมัดจำและคืนรถให้ทันที่ในสภาพเรียบร้อยทุกประการ\n                  ถ้าหากเกิดความเสียหายใด ๆ ก็ดี ผู้ซื้อยอมชดใช้ให้ทั้งสิ้น\n                  ตลอดทั้งคดีเพ่ง และคดีอาญา\n                  ส่วนผู้ขายเมื่อได้รับเงินครบถ้วนตามสัญญาแล้ว\n                  ผู้ขายจะทำการโอนกรรมสิทธิ์รถคันนี้ให้แก่ผู้ซื้อทันที\n                  อากรแสตมป์ซื้อ-ขาย ผู้ซื้อเป็นผู้ออก จะได้ติดให้ครบถ้วน\n                  เมื่อวันทำการโอนทะเบียนยานพาหนะ ฯ ผู้ซื้อ\n                  และผู้ขายได้อ่านข้อความเข้าใจดีแล้ว และตกลงกันทั้งสองฝ่าย\n                  จึงได้ลงลายมือไว้เป็นหลักฐานต่อหน้าพยาน\n                ")])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row"},[r(l.a,[r("h5",[t._v("\n                  ลงนาม:\n                  "),r("span",[t._v(".......................................... ผู้ขาย")])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ลงนาม:\n                  "),r("span",[t._v(".......................................... ผู้ซื้อ")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  ลงนาม:\n                  "),r("span",[t._v(".......................................... พยาน")])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  ลงนาม:\n                  "),r("span",[t._v(".......................................... พยาน")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  โทร:\n                  "),r("span",[t._v("...............................................\n                    ผู้ขาย")])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                  โทร:\n                  "),r("span",[t._v("...............................................\n                    ผู้ซื้อ")])])])],1),t._v(" "),r("div",{staticStyle:{"background-color":"#d9d9d9"}},[r(f.a,{staticClass:"d-flex space"},[r(l.a,{attrs:{cols:"1"}}),t._v(" "),r(l.a,[r("h5",[t._v("\n                    ข้าพเจ้าผู้ซื้อ:\n                    "),r("span",[t._v(t._s(t.formData.customer_name))])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                    ได้รับรถยนต์:\n                    "),r("span",[t._v(t._s(t.formData.car_model_name))])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex rounded ma-auto mt-3 mb-3 space"},[r(l.a,[r("h5",[t._v("\n                    หมายเลขทะเบียน:\n                    "),r("span",[t._v(t._s(t.formData.car_regis))])])]),t._v(" "),r(l.a,{attrs:{cols:"6"}},[r("h5",[r("span",[t._v("ไว้ในครอบครอง เมื่อวันที่ ..... ")]),t._v(" "),r("span",[t._v("เดือน ......... ")]),t._v(" "),r("span",[t._v("พ.ศ. ..... ")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex rounded ma-auto mt-3 mb-3 space"},[r(l.a,[r("h5",[t._v("\n                    เวลา:\n                    "),r("span",[t._v("\n                      .............. น. ใน\n                      สภาพเรียบร้อยทุกประกานหากเกิดการเสียดายใด ๆ\n                      ก็ดีหลังจากที่ได้รับรถยนต์\n                      ดังกล่าวมาข้าพเจ้าขอรับผิดชอบค่าเสียหาย\n                      และความผิดตามภฏหมายต่าง ๆ ทั้งสิ้น")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex rounded ma-auto mt-3 mb-3 space"},[r(l.a,[r("h5",[t._v("\n                    ลงนาม:\n                    "),r("span",[t._v("....................................\n                      ผู้ขาย(ผู้มอบรถ)")])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                    ลงนาม:\n                    "),r("span",[t._v("....................................\n                      ผู้ซื้อ(ผู้รับรถ)")])])])],1),t._v(" "),r(f.a,{staticClass:"d-flex rounded ma-auto mt-3 mb-3 space"},[r(l.a,[r("h5",[t._v("\n                    ลงนาม:\n                    "),r("span",[t._v(".................................... พยาน")])])]),t._v(" "),r(l.a,[r("h5",[t._v("\n                    ลงนาม:\n                    "),r("span",[t._v(".................................... พยาน")])])])],1)],1),t._v(" "),r(f.a,{staticClass:"d-flex flex-row space"},[r(l.a,[r("h5",[t._v("\n                  หมายเหตุ:\n                  "),r("span",[t._v(".................................................................................................................................................................")])])])],1)],1)])])],1),t._v(" "),r("br"),t._v(" "),r(e.a,{staticClass:"noprint",staticStyle:{width:"100%"},attrs:{block:"",dark:"",elevation:"2",color:"red darken-1",onclick:"window.print();"}},[r("span",[t._v("ปริ้น")])])],1)],1)}),[],!1,null,null,null);n.default=component.exports},429:function(t,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return d}));var e=r(9),o=(r(48),r(98)),c=r.n(o),l="https://www.psnkp.co.th/server",_=function(){var t=Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function d(t,n,r){return v.apply(this,arguments)}function v(){return(v=Object(e.a)(regeneratorRuntime.mark((function t(n,r,data){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_()){t.next=9;break}return t.next=3,f();case 3:return t.t0=t.sent,e={Authorization:t.t0},t.next=7,c()({method:n,url:r,data:data,headers:e}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},458:function(t,n,r){"use strict";var e=r(3),o=(r(36),r(28),r(151),r(8),r(74),r(5),r(6),r(10),r(11),r(4)),c=r(82),l=r(121),_=r(1);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(e.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}n.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var n=Object.values(t).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,n=function(input){return input.$watch("hasError",(function(n){t.$set(t.errorBag,input._uid,n)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(e){e&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=n(input)))})):r.valid=n(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var n=this.watchers.find((function(i){return i._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return n.$emit("submit",t)}}},Object(_.s)(this))}})},609:function(t,n,r){"use strict";r.d(n,"c",(function(){return o})),r.d(n,"d",(function(){return c})),r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return _}));var e=r(429),path="/api/contract";function o(t){var n=e.a+path;return Object(e.b)("post",n,t)}function c(t,n){var r=e.a+path+"/"+t;return Object(e.b)("post",r,n)}function l(t,n,r){var o=e.a+"/api/checkContract/"+t+"/"+n+"/"+r;return Object(e.b)("post",o,{})}function _(t){var n=e.a+"/api/printContract/"+t;return Object(e.b)("post",n,{})}},803:function(t,n,r){var content=r(921);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("6a568d66",content,!0,{sourceMap:!1})},920:function(t,n,r){"use strict";r(803)},921:function(t,n,r){var e=r(12)(!1);e.push([t.i,'.v-text-field--outlined fieldset{border:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%!important;padding:8px!important}div[size=A4]{background:#fff;width:21cm;height:29.7cm;display:block;margin:0 auto}@media print{body,html{width:210mm;height:297mm;font-family:"Taviraj",serif}.noprint{visibility:hidden}@page :footer{display:none}@page :header{display:none}}p{font-size:18px!important;font-weight:400!important}span{font-size:14px!important;font-weight:700!important}h2,h4,h5{font-weight:100!important}h5{font-size:14px!important;font-weight:lighter!important;font-family:"Taviraj",serif}.space{margin-top:0!important}.space1{margin-top:2%!important}.b-solid-t{border-style:solid;border-width:thin}.mg{margin:0}',""]),t.exports=e}}]);