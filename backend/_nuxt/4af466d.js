(window.webpackJsonp=window.webpackJsonp||[]).push([[134,138],{429:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m}));var n=r(9),o=(r(48),r(98)),c=r.n(o),l="https://www.psnkp.co.th/server",f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,r){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function t(e,r,data){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,n={Authorization:t.t0},t.next=7,c()({method:e,url:r,data:data,headers:n}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},440:function(t,e,r){var n=r(17);n(n.S,"Object",{is:r(260)})},458:function(t,e,r){"use strict";var n=r(3),o=(r(36),r(28),r(151),r(8),r(74),r(5),r(6),r(10),r(11),r(4)),c=r(82),l=r(121),f=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},Object(f.s)(this))}})},677:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return f}));var n=r(429),path="/api/repair_price";function o(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function c(t,e){var r=n.a+path+"/"+t;return Object(n.b)("put",r,e)}function l(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function f(t){var e=n.a+"/api/RepairPrice/"+t;return Object(n.b)("post",e,{})}},729:function(t,e,r){"use strict";r.r(e);var n=r(202),o=r(190),c=r(149),l=r(424),f=r(428),d=r(426),m=r(458),h=r(191),v=r(423),w=r(422),x=r(435),y=r(46),O=r(9),_=(r(48),r(677)),k={props:["dialog","repair_name","car_part_buy","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},dialogDeleteComponent:!1,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],repairName:"",carPartBuy:""}},mounted:function(){},methods:{onAction:function(t){var e=this;return Object(O.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$refs.form.validate()){r.next=11;break}if(e.btnloading=!0,e.formDataLoading=!0,"edit"!=e.action){r.next=11;break}return r.next=6,_.d(t,e.formData);case 6:n=r.sent,e.$refs.form.reset(),200==n.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1;case 11:case"end":return r.stop()}}),r)})))()}},watch:{dialog:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.dialogDeleteComponent){e.next=9;break}if("edit"!=t.action){e.next=9;break}return t.formDataLoading=!0,e.next=6,_.c(t.id);case 6:r=e.sent,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(O.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.data;case 2:e.formData=n.sent,e.repairName=t.repair_name,e.carPartBuy=t.car_part_buy;case 5:case"end":return n.stop()}}),n)}))))})),t.formDataLoading=!1;case 9:t.btnloading=!1;case 10:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},j=r(38),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(f.a,[r(d.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r(o.a,[r(m.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[r(y.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?r(h.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),r(c.b,[r(f.a,[r(v.a,[r(l.a,{attrs:{cols:"4"}},[r(x.a,{attrs:{autocomplete:"true",readonly:"",label:"รายการซ่อม","append-icon":"",id:"repairName",name:"repairName",outlined:"",dense:"","hide-details":""},model:{value:t.repairName,callback:function(e){t.repairName=e},expression:"repairName"}})],1),t._v(" "),r(l.a,{attrs:{cols:"4"}},[r(x.a,{attrs:{autocomplete:"true",readonly:"",label:"ราคาประมาณ","append-icon":"",id:"carPartBuy",name:"carPartBuy",outlined:"",dense:"","hide-details":""},model:{value:t.carPartBuy,callback:function(e){t.carPartBuy=e},expression:"carPartBuy"}})],1),t._v(" "),r(l.a,{attrs:{cols:"4"}},[r(x.a,{attrs:{autocomplete:"true",label:"ราคาที่คิด","append-icon":"",id:"formData.price",name:"formData.price",type:"number",outlined:"",dense:"","hide-details":""},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}})],1)],1)],1)],1),t._v(" "),r(c.a,[r(w.a),t._v(" "),r(n.a,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),r(n.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);