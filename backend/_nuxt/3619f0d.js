(window.webpackJsonp=window.webpackJsonp||[]).push([[93,138],{429:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(9),o=(n(48),n(98)),c=n.n(o),f="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,l();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},458:function(t,e,n){"use strict";var r=n(3),o=(n(36),n(28),n(151),n(8),n(74),n(5),n(6),n(10),n(11),n(4)),c=n(82),f=n(121),d=n(1);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(f.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},Object(d.s)(this))}})},580:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return m})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return v}));var r=n(429),path="/api/receiving_money";function o(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function c(t){var e=r.a+path;return Object(r.b)("post",e,t)}function f(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function l(t,e,n){var o=r.a+"/api/checkReceivingMoney/"+t+"/"+e+"/"+n;return Object(r.b)("post",o,{})}function m(t){var e=r.a+"/api/commission";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/printReceivingMoney/"+t;return Object(r.b)("post",e,{})}function v(t){var e=r.a+"/api/receiving_money/getDataWithCarNo/"+t;return Object(r.b)("get",e,{})}},836:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n(190),c=n(149),f=n(424),d=n(428),l=n(426),m=n(458),h=n(191),v=n(423),w=n(422),O=n(435),x=n(46),_=n(9),j=(n(48),n(580)),k={props:["car_no","dialog","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],dialogDeleteComponent:!1}},mounted:function(){},methods:{onAction:function(t){var e=this;return Object(_.a)(regeneratorRuntime.mark((function n(){var data,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.$refs.form.validate()){n.next=17;break}if(e.btnloading=!0,e.formDataLoading=!0,(data=new FormData).append("formData",JSON.stringify(e.formData)),"add"!=e.action){n.next=8;break}n.next=15;break;case 8:if("edit"!=e.action){n.next=15;break}return data.append("_method","PATCH"),n.next=12,j.h(t,data);case 12:r=n.sent,e.$refs.form.reset(),200==r.status?e.$emit("success"):e.$emit("error");case 15:e.btnloading=!1,e.formDataLoading=!1;case 17:case"end":return n.stop()}}),n)})))()}},watch:{dialog:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.$props.dialog){e.next=12;break}if("add"!=t.action){e.next=5;break}e.next=12;break;case 5:if("edit"!=t.action){e.next=12;break}return t.formDataLoading=!0,e.next=9,j.f(t.id);case 9:n=e.sent,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(_.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.data;case 2:e.formData=r.sent,t.formData.user_id=t.$auth.$storage.getLocalStorage("userData-id");case 4:case"end":return r.stop()}}),r)}))))})),t.formDataLoading=!1;case 12:t.btnloading=!1;case 13:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},D=n(38),component=Object(D.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(d.a,[n(l.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n(o.a,[n(m.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[n(x.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?n(h.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),n(c.b,[n(d.a,[n(v.a,[n(f.a,[n("h2",[t._v("ลำดับรถ: "+t._s(t.car_no))])])],1),t._v(" "),n("br"),t._v(" "),n(v.a,[n(f.a,{attrs:{cols:"12"}},[n(O.a,{attrs:{autocomplete:"true",label:"ค่าคอม","append-icon":"",type:"number",id:"formData.commission",name:"formData.commission",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.commission,callback:function(e){t.$set(t.formData,"commission",e)},expression:"formData.commission"}})],1)],1)],1)],1),t._v(" "),n(c.a,[n(w.a),t._v(" "),n(r.a,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),n(r.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);