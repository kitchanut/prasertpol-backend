(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{429:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return m}));var r=e(9),o=(e(48),e(98)),c=e.n(o),l="https://www.psnkp.co.th/server",f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,n,e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(n,e,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:n,url:e,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,n,e){"use strict";e.d(n,"l",(function(){return f})),e.d(n,"m",(function(){return d})),e.d(n,"o",(function(){return m})),e.d(n,"g",(function(){return h})),e.d(n,"p",(function(){return w})),e.d(n,"e",(function(){return v})),e.d(n,"d",(function(){return x})),e.d(n,"f",(function(){return _})),e.d(n,"k",(function(){return C})),e.d(n,"j",(function(){return B})),e.d(n,"i",(function(){return k})),e.d(n,"a",(function(){return O})),e.d(n,"n",(function(){return $})),e.d(n,"b",(function(){return T})),e.d(n,"h",(function(){return I})),e.d(n,"c",(function(){return A}));var r=e(9),o=(e(48),e(18),e(2)),c=e(200),l=e.n(c);e(262);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function C(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function B(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function k(){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},455:function(t,n,e){"use strict";e.d(n,"i",(function(){return o})),e.d(n,"g",(function(){return c})),e.d(n,"p",(function(){return l})),e.d(n,"q",(function(){return f})),e.d(n,"m",(function(){return d})),e.d(n,"k",(function(){return m})),e.d(n,"l",(function(){return h})),e.d(n,"b",(function(){return w})),e.d(n,"o",(function(){return v})),e.d(n,"s",(function(){return x})),e.d(n,"a",(function(){return _})),e.d(n,"c",(function(){return C})),e.d(n,"d",(function(){return B})),e.d(n,"e",(function(){return k})),e.d(n,"f",(function(){return D})),e.d(n,"n",(function(){return O})),e.d(n,"h",(function(){return j})),e.d(n,"j",(function(){return $})),e.d(n,"r",(function(){return y}));var r=e(429),path="/api/car";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var n=r.a+path+"/"+t;return Object(r.b)("delete",n,{})}function l(t){var n=r.a+path;return Object(r.b)("post",n,t)}function f(t,n){var e=r.a+path+"/"+t;return Object(r.b)("put",e,n)}function d(t){var n=r.a+path+"/"+t;return Object(r.b)("get",n,{})}function m(){var t=r.a+"/api/SelectOnCarAll";return Object(r.b)("get",t,{})}function h(){var t=r.a+"/api/SelectAllCars";return Object(r.b)("get",t,{})}function w(){var t=r.a+"/api/SelectCarNo";return Object(r.b)("get",t,{})}function v(t){var n=r.a+"/api/StockOnCar";return Object(r.b)("post",n,t)}function x(t){var n=r.a+"/api/uploadImgCars";return Object(r.b)("post",n,t)}function _(t){var n=r.a+"/api/ImageCar/"+t;return Object(r.b)("post",n,{})}function C(t){var n=r.a+"/api/change_fist_img";return Object(r.b)("post",n,t)}function B(t){var n=r.a+"/api/deleteAllImgCar";return Object(r.b)("post",n,t)}function k(t){var n=r.a+"/api/deleteFolder";return Object(r.b)("post",n,t)}function D(t){var n=r.a+"/api/delete_img_car";return Object(r.b)("post",n,t)}function O(t){var n=r.a+"/api/showCar";return Object(r.b)("post",n,t)}function j(t,n){var e=r.a+"/api/getAllinfo/"+t+"/"+n;return Object(r.b)("get",e,{})}function $(t){var n=r.a+"/api/reRollCar/"+t;return Object(r.b)("get",n,{})}function y(){var t=r.a+"/api/update_amountPrice";return Object(r.b)("get",t,{})}},522:function(t,n,e){"use strict";e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return c})),e.d(n,"e",(function(){return l})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return d})),e.d(n,"d",(function(){return m})),e.d(n,"b",(function(){return h}));var r=e(429),path="/api/request_moneyWithdraw";function o(t){var n=r.a+path;return Object(r.b)("post",n,t)}function c(t,n){var e=r.a+path+"/"+t;return Object(r.b)("put",e,n)}function l(t){var n=r.a+path+"/"+t;return Object(r.b)("get",n,{})}function f(t){var n=r.a+path+"/"+t;return Object(r.b)("delete",n,{})}function d(t){var n=r.a+path+"/cancle/"+t;return Object(r.b)("delete",n,{})}function m(t){var n=r.a+path+"/indexCustom";return Object(r.b)("post",n,t)}function h(t){var n=r.a+path+"/countData";return Object(r.b)("post",n,t)}},848:function(t,n,e){"use strict";e.r(n);var r=e(454),o=e(202),c=e(190),l=e(149),f=e(426),d=e(613),m=e(491),h=e(457),w=e(422),v=e(435),x=e(498),_=e(46),C=e(9),B=(e(48),e(522)),k=e(455),D=e(432),O={props:["id","action","appearance"],data:function(){return{dialog:!1,formDataLoading:!1,formTitle:"",dataCar:[],formData:{},id_card:null,sale_sheet:null,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],ruleMustImage:[function(t){return!!t},function(t){return!t||t.size<1e7||"ขนาดรูปต้องน้อยกว่า 10 MB"}],ruleImage:[function(t){return!t||t.size<1e7||"ขนาดรูปต้องน้อยกว่า 10 MB"}]}},mounted:function(){this.getCars()},methods:{getCars:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.b();case 2:e=n.sent,t.dataCar=e.data;case 4:case"end":return n.stop()}}),n)})))()},onAction:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.$refs.form.validate()){n.next=15;break}if(t.formDataLoading=!0,"add"!=t.action){n.next=13;break}return t.loading=!0,t.formDataLoading=!0,(e=new FormData).append("formData",JSON.stringify(t.formData)),e.append("id_card",t.id_card),e.append("sale_sheet",t.sale_sheet),n.next=11,B.f(e);case 11:200==n.sent.status?(t.$emit("success"),D.k()):t.$emit("error");case 13:t.dialog=!1,t.formDataLoading=!1;case 15:case"end":return n.stop()}}),n)})))()}},watch:{dialog:function(){var t=this;this.dialog&&this.$nextTick((function(){t.formData={},t.$refs.form.reset(),t.$nextTick(Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"add"==t.action&&(t.formTitle="เพิ่มข้อมูล",t.formData.sale_name=t.$auth.$storage.getLocalStorage("userData-first_name"),t.formData.branch_name=t.$auth.$storage.getLocalStorage("userDataOrg-branch_team_name"));case 1:case"end":return n.stop()}}),n)}))))}))}}},j=e(38),component=Object(j.a)(O,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[e(f.a,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return["text"==t.appearance?e("span",t._g(t._b({},"span",o,!1),r),[t._v("แจ้งเบิกเงิน")]):t._e()]}}]),model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[t._v(" "),e(c.a,[e(h.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(n){return n.preventDefault(),t.onAction()}}},[e(_.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v(" "+t._s(t.formTitle))]),t._v(" "),e(l.b,[e(v.a,{attrs:{label:"ชื่อเล่นและชื่อจริงของเซล*",outlined:"",dense:"","hide-details":"",disabled:"",rules:t.rule},model:{value:t.formData.sale_name,callback:function(n){t.$set(t.formData,"sale_name",n)},expression:"formData.sale_name"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"สาขา*",outlined:"",dense:"","hide-details":"",disabled:"",rules:t.rule},model:{value:t.formData.branch_name,callback:function(n){t.$set(t.formData,"branch_name",n)},expression:"formData.branch_name"}}),t._v(" "),e(r.a,{staticClass:"mt-3",attrs:{items:t.dataCar,"item-text":"car_no","item-value":"car_no",label:"ลำดับรถ*","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_no,callback:function(n){t.$set(t.formData,"car_no",n)},expression:"formData.car_no"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"ชื่อลูกค้าที่ซื้อ*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.customer_name,callback:function(n){t.$set(t.formData,"customer_name",n)},expression:"formData.customer_name"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"ชื่อที่เบิก*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.customer_withdraw,callback:function(n){t.$set(t.formData,"customer_withdraw",n)},expression:"formData.customer_withdraw"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"ประเภท เช่น ค่าน้ำมัน ค่านำพา คืนเงินจอง อื่นๆ*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.type,callback:function(n){t.$set(t.formData,"type",n)},expression:"formData.type"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"จำนวนเงิน*",type:"number",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.amount,callback:function(n){t.$set(t.formData,"amount",n)},expression:"formData.amount"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"ธนาคาร*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.bank_name,callback:function(n){t.$set(t.formData,"bank_name",n)},expression:"formData.bank_name"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{label:"หมายเลขบัญชี*",type:"number",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.account,callback:function(n){t.$set(t.formData,"account",n)},expression:"formData.account"}}),t._v(" "),e(x.a,{staticClass:"mt-3",attrs:{rows:"2",outlined:"",label:"หมายเหตุ",dense:"","hide-details":""},model:{value:t.formData.note,callback:function(n){t.$set(t.formData,"note",n)},expression:"formData.note"}}),t._v(" "),e(m.a,{staticClass:"mt-3",attrs:{label:"รูปบัตรประจำตัวประชาชนลูกค้า*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"auto",rules:t.ruleMustImage},model:{value:t.id_card,callback:function(n){t.id_card=n},expression:"id_card"}}),t._v(" "),e(m.a,{staticClass:"mt-3",attrs:{label:"เอกสารสรุปการขาย*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"auto",rules:t.ruleMustImage},model:{value:t.sale_sheet,callback:function(n){t.sale_sheet=n},expression:"sale_sheet"}})],1),t._v(" "),e(d.a),t._v(" "),e(l.a,[e(w.a),t._v(" "),e(o.a,{attrs:{color:"red darken-1",text:""},on:{click:function(n){t.dialog=!1}}},[t._v("ยกเลิก")]),t._v(" "),e(o.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.formDataLoading}},[t._v("บันทึก ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);