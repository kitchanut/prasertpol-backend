(window.webpackJsonp=window.webpackJsonp||[]).push([[192,98],{454:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return h}));var n=r(14),o=(r(57),r(109)),c=r.n(o),f="https://www.psnkp.co.th/server",l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function h(t,e,r){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function t(e,r,data){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,n={Authorization:t.t0},t.next=7,c()({method:e,url:r,data:data,headers:n}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},457:function(t,e,r){"use strict";r.d(e,"l",(function(){return l})),r.d(e,"m",(function(){return d})),r.d(e,"o",(function(){return h})),r.d(e,"g",(function(){return m})),r.d(e,"q",(function(){return w})),r.d(e,"e",(function(){return _})),r.d(e,"d",(function(){return x})),r.d(e,"f",(function(){return v})),r.d(e,"k",(function(){return B})),r.d(e,"j",(function(){return $})),r.d(e,"i",(function(){return k})),r.d(e,"a",(function(){return y})),r.d(e,"n",(function(){return j})),r.d(e,"b",(function(){return S})),r.d(e,"h",(function(){return D})),r.d(e,"p",(function(){return V})),r.d(e,"c",(function(){return E}));var n=r(14),o=(r(57),r(19),r(3)),c=r(209),f=r.n(c);r(267);function l(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function $(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function k(){return C.apply(this,arguments)}function C(){return(C=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return O.apply(this,arguments)}function O(){return(O=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return T.apply(this,arguments)}function T(){return(T=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return R.apply(this,arguments)}function R(){return(R=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return L.apply(this,arguments)}function L(){return(L=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(){return P.apply(this,arguments)}function P(){return(P=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถบันทึกได้",text:"กรุณาแนบไฟล์",icon:"error",showCancelButton:!1,showConfirmButton:!0,showDenyButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return I.apply(this,arguments)}function I(){return(I=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},473:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return f})),r.d(e,"f",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return select}));var n=r(454),path="/api/branches";function o(){var t=n.a+path;return Object(n.b)("get",t,{})}function c(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function f(t){var e=n.a+path;return Object(n.b)("post",e,t)}function l(t,e){var r=n.a+path+"/"+t;return Object(n.b)("post",r,e)}function d(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function select(){var t=n.a+"/api/SelectOnBranches";return Object(n.b)("get",t,{})}},476:function(t,e,r){"use strict";var n=r(2),o=(r(33),r(23),r(161),r(8),r(85),r(6),r(7),r(11),r(12),r(4)),c=r(68),f=r(94);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(f.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},691:function(t,e,r){"use strict";r(131)("sub",(function(t){return function(){return t(this,"sub","","")}}))},692:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype=new Error,n.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,o,a=0,i=0,c="";o=e.charAt(i++);~o&&(r=a%4?64*r+o:o,a++%4)?c+=String.fromCharCode(255&r>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function c(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(o(t).replace(/(.)/g,(function(t,e){var r=e.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(e)}catch(t){return o(e)}}function f(t){this.message=t}f.prototype=new Error,f.prototype.name="InvalidTokenError",e.a=function(t,e){if("string"!=typeof t)throw new f("Invalid token specified");var r=!0===(e=e||{}).header?0:1;try{return JSON.parse(c(t.split(".")[r]))}catch(t){throw new f("Invalid token specified: "+t.message)}}},920:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(57),r(6),r(691),r(473)),c=r(457),f=r(692),l={layout:"full",name:"Login",auth:"guest",beforeCreate:function(){this.$vuetify.theme.dark=!1},data:function(){return{show1:!1,user:{email:"",password:"",type:"web"},loading:!1}},methods:{onClick:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,i,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.loading=!0,r=Object.keys(localStorage),i=r.length;i--;)localStorage.removeItem(r[i]);return e.prev=3,e.next=6,t.$auth.loginWith("local",{headers:{Accept:"application/json"},data:t.user});case 6:if(200!=(l=e.sent).status){e.next=34;break}return e.next=10,Object(f.a)(l.data.access_token);case 10:return d=e.sent,t.$auth.$storage.setLocalStorage("userData-sub_group",d.sub_group),t.$auth.$storage.setLocalStorage("userData-user_code",d.user_code.user_code),t.$auth.$storage.setLocalStorage("userData-id",d.sub),t.$auth.$storage.setLocalStorage("userData-first_name",d.first_name),t.$auth.$storage.setLocalStorage("userData-last_name",d.last_name),t.$auth.$storage.setLocalStorage("userData-user_team",d.user_team.user_team),t.$auth.$storage.setLocalStorage("userData-user_team_id",d.user_team_id),t.$auth.$storage.setLocalStorage("userData-user_group_permission",d.user_group_permission.user_group_permission),t.$auth.$storage.setLocalStorage("dialog-low-cars",!0),t.$auth.$storage.setLocalStorage("userData-user_group_name",d.user_group_name.user_group_name),t.$auth.$storage.setLocalStorage("userData-branch_id",d.branch_id.branch_id),t.$auth.$storage.setLocalStorage("userData-branch_name",d.branch_name.branch_name),t.$auth.$storage.setLocalStorage("userDataOrg-user_team",d.user_team.user_team),t.$auth.$storage.setLocalStorage("userDataOrg-user_team_id",d.user_team_id),t.$auth.$storage.setLocalStorage("userDataOrg-user_group_permission",d.user_group_permission.user_group_permission),t.$auth.$storage.setLocalStorage("userDataOrg-user_group_name",d.user_group_name.user_group_name),t.$auth.$storage.setLocalStorage("userDataOrg-branch_id",d.branch_id.branch_id),t.$auth.$storage.setLocalStorage("userDataOrg-branch_name",d.branch_name.branch_name),e.next=31,o.d(d.branch_id.branch_id);case 31:h=e.sent,t.$auth.$storage.setLocalStorage("userDataOrg-branch_team_id",h.data.branch_team_id),t.$nextTick(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!=d.user_group_permission.user_group_permission){e.next=5;break}return e.next=3,t.$router.push("/index_status");case 3:case 8:case 13:case 18:case 23:case 28:case 33:case 38:case 43:case 48:case 53:case 58:case 63:e.next=65;break;case 5:if(2!=d.user_group_permission.user_group_permission){e.next=10;break}return e.next=8,t.$router.push("/index_status");case 10:if(3!=d.user_group_permission.user_group_permission){e.next=15;break}return e.next=13,t.$router.push("/work/works");case 15:if(4!=d.user_group_permission.user_group_permission){e.next=20;break}return e.next=18,t.$router.push("/work/work_Technician");case 20:if(5!=d.user_group_permission.user_group_permission){e.next=25;break}return e.next=23,t.$router.push("/work/work_Technician");case 25:if(6!=d.user_group_permission.user_group_permission){e.next=30;break}return e.next=28,t.$router.push("/purchases/purchase_parts");case 30:if(7!=d.user_group_permission.user_group_permission){e.next=35;break}return e.next=33,t.$router.push("/stock/stock_parts");case 35:if(8!=d.user_group_permission.user_group_permission){e.next=40;break}return e.next=38,t.$router.push("/stock/stock_cars");case 40:if(9!=d.user_group_permission.user_group_permission){e.next=45;break}return e.next=43,t.$router.push("/index_status");case 45:if(10!=d.user_group_permission.user_group_permission){e.next=50;break}return e.next=48,t.$router.push("/work/works");case 50:if(11!=d.user_group_permission.user_group_permission){e.next=55;break}return e.next=53,t.$router.push("/work/works");case 55:if(12!=d.user_group_permission.user_group_permission){e.next=60;break}return e.next=58,t.$router.push("/work/works");case 60:if(13!=d.user_group_permission.user_group_permission){e.next=65;break}return e.next=63,t.$router.push("settings/promotion");case 65:case"end":return e.stop()}}),e)}))));case 34:e.next=39;break;case 36:e.prev=36,e.t0=e.catch(3),401===e.t0.response.status&&(c.g(),t.loading=!1);case 39:t.loading=!1;case 40:case"end":return e.stop()}}),e,null,[[3,36]])})))()}}},d=r(42),h=r(52),m=r.n(h),w=r(210),_=r(157),x=r(445),v=r(453),B=r(476),$=r(155),k=r(450),C=r(86),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.3",src:r(272)}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card-title",{staticClass:"justify-center"},[t._v("\n        กรุณาลงชื่อเพื่อเข้าใช้งาน\n      ")]),t._v(" "),n("v-card-text",{staticClass:"text--primary mt-5"},[n("v-form",{attrs:{autocomplete:"on"},on:{submit:function(e){return e.preventDefault(),t.onClick()}}},[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account","single-line":"",type:"text",placeholder:"ชื่อผู้ใช้งาน",id:"user.email",name:"user.email",dense:"",outlined:"",rules:[function(t){return!!t||"กรุณาใส่ชื่อผู้ใช้งาน"}]},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-key-variant","append-icon":t.show1?"mdi-eye":"mdi-eye-off","single-line":"",type:t.show1?"text":"password",placeholder:"รหัสผ่าน",id:"user.password",name:"user.password",dense:"",outlined:"",rules:[function(t){return!!t||"กรุณาใส่รหัสผ่าน"}]},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t._v(" "),n("v-btn",{staticClass:"pt-5 pb-5",attrs:{block:"",type:"submit",color:"primary",loading:t.loading,disabled:t.loading}},[t._v("เข้าสู่ระบบ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:w.a,VCardText:_.b,VCardTitle:_.c,VCol:x.a,VContainer:v.a,VForm:B.a,VImg:$.a,VRow:k.a,VTextField:C.a})}}]);