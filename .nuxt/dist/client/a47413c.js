(window.webpackJsonp=window.webpackJsonp||[]).push([[182,98],{454:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m}));var r=n(14),o=(n(57),n(109)),c=n.n(o),l="https://www.psnkp.co.th/server",f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,n){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},457:function(t,e,n){"use strict";n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return d})),n.d(e,"o",(function(){return m})),n.d(e,"g",(function(){return x})),n.d(e,"q",(function(){return h})),n.d(e,"e",(function(){return w})),n.d(e,"d",(function(){return v})),n.d(e,"f",(function(){return _})),n.d(e,"k",(function(){return y})),n.d(e,"j",(function(){return C})),n.d(e,"i",(function(){return B})),n.d(e,"a",(function(){return j})),n.d(e,"n",(function(){return O})),n.d(e,"b",(function(){return T})),n.d(e,"h",(function(){return z})),n.d(e,"p",(function(){return I})),n.d(e,"c",(function(){return L}));var r=n(14),o=(n(57),n(19),n(3)),c=n(209),l=n.n(c);n(267);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function y(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function C(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function B(){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(){return U.apply(this,arguments)}function U(){return(U=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return V.apply(this,arguments)}function V(){return(V=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถบันทึกได้",text:"กรุณาแนบไฟล์",icon:"error",showCancelButton:!1,showConfirmButton:!0,showDenyButton:!1,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},475:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"p",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"m",(function(){return d})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return x})),n.d(e,"b",(function(){return h})),n.d(e,"o",(function(){return w})),n.d(e,"s",(function(){return v})),n.d(e,"a",(function(){return _})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return C})),n.d(e,"e",(function(){return B})),n.d(e,"f",(function(){return D})),n.d(e,"n",(function(){return j})),n.d(e,"h",(function(){return k})),n.d(e,"j",(function(){return O})),n.d(e,"r",(function(){return R}));var r=n(454),path="/api/car";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function f(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function m(){var t=r.a+"/api/SelectOnCarAll";return Object(r.b)("get",t,{})}function x(){var t=r.a+"/api/SelectAllCars";return Object(r.b)("get",t,{})}function h(){var t=r.a+"/api/SelectCarNo";return Object(r.b)("get",t,{})}function w(t){var e=r.a+"/api/StockOnCar";return Object(r.b)("post",e,t)}function v(t){var e=r.a+"/api/uploadImgCars";return Object(r.b)("post",e,t)}function _(t){var e=r.a+"/api/ImageCar/"+t;return Object(r.b)("post",e,{})}function y(t){var e=r.a+"/api/change_fist_img";return Object(r.b)("post",e,t)}function C(t){var e=r.a+"/api/deleteAllImgCar";return Object(r.b)("post",e,t)}function B(t){var e=r.a+"/api/deleteFolder";return Object(r.b)("post",e,t)}function D(t){var e=r.a+"/api/delete_img_car";return Object(r.b)("post",e,t)}function j(t){var e=r.a+"/api/showCar";return Object(r.b)("post",e,t)}function k(t,e){var n=r.a+"/api/getAllinfo/"+t+"/"+e;return Object(r.b)("get",n,{})}function O(t){var e=r.a+"/api/reRollCar/"+t;return Object(r.b)("get",e,{})}function R(){var t=r.a+"/api/update_amountPrice";return Object(r.b)("get",t,{})}},526:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(454);function o(t){var e=r.a+"/api/liff/check_register";return Object(r.b)("post",e,t)}},601:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return x}));var r=n(454),path="/api/request_change_customer";function o(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function l(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function f(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function d(t){var e=r.a+path+"/cancle/"+t;return Object(r.b)("delete",e,{})}function m(t){var e=r.a+path+"/indexCustom";return Object(r.b)("post",e,t)}function x(t){var e=r.a+path+"/countData";return Object(r.b)("post",e,t)}},940:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(19),n(57),n(601)),c=n(475),l=n(526),f=n(457),d={layout:"liff",auth:!1,data:function(){return{serverUrl:"https://www.psnkp.co.th/server",loading:!1,formDataLoading:!1,menuReleaseDate:!1,isCombine:!1,dataCar:[],formData:{},id_card:null,sale_sheet:null,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],ruleMustImage:[function(t){return!!t},function(t){return!t||t.size<2e6||"ขนาดรูปต้องน้อยกว่า 2 MB"}],ruleImage:[function(t){return!t||t.size<2e6||"ขนาดรูปต้องน้อยกว่า 2 MB"}]}},mounted:function(){this.initializeLiff("1657381597-4mPBbdwv")},methods:{checkUserLine:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={lineUUID:t.formData.lineUUID,pictureUrl:t.formData.pictureUrl,displayName:t.formData.displayName},e.next=3,l.a(data);case 3:n=e.sent,t.isCombine=n.data.isCombine,t.isCombine&&(t.formData.sale_name=n.data.data.first_name+" "+n.data.data.last_name+" ("+n.data.data.user_code+")",t.formData.branch_name=n.data.data.branch.branch_team.branch_team_name);case 6:case"end":return e.stop()}}),e)})))()},getCars:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b();case 2:n=e.sent,t.dataCar=n.data;case 4:case"end":return e.stop()}}),e)})))()},onAction:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=16;break}return e.loading=!0,e.formDataLoading=!0,(n=new FormData).append("formData",JSON.stringify(e.formData)),n.append("id_card",e.id_card),n.append("sale_sheet",e.sale_sheet),t.next=9,o.f(n);case 9:return 200==(r=t.sent).status?(f.k(),r.data.note||(r.data.note="-"),c=[{type:"text",text:"แจ้งเปลี่ยนคนจอง: "+r.data.car_no},{type:"flex",altText:"แจ้งเปลี่ยนคนจอง: "+r.data.car_no,contents:{type:"bubble",hero:{type:"image",url:e.serverUrl+r.data.id_card,size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:e.serverUrl+r.data.id_card}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:"แจ้งเปลี่ยนคนจอง",weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",spacing:"xs",contents:[{type:"text",text:"ลำดับรถ:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.car_no,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"ชื่อเซล:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.sale_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"สาขา:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.branch_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"คนเดิม:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.customer_old,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"คนใหม่:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.customer_new,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"อาชีพ:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.customer_job,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"เหตุผล:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.note,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"primary",height:"sm",action:{type:"uri",label:"รูปบัตรประจำตัวประชาชนคนใหม่",uri:e.serverUrl+r.data.id_card}},{type:"button",style:"secondary",height:"sm",action:{type:"uri",label:"ใบสรุปเอกสารการขายใหม่",uri:e.serverUrl+r.data.sale_sheet}},{type:"button",style:"link",height:"sm",action:{type:"uri",label:"แชร์",uri:"https://liff.line.me/1657381597-Kla8617N"+"?type=changeCustomer&id=".concat(r.data.id)}},{type:"box",layout:"vertical",contents:[],margin:"sm"}],flex:0}}}],liff.sendMessages(c).then((function(){})).catch((function(t){window.alert("Error sending message: "+t)}))):f.j(),e.loading=!1,e.formDataLoading=!1,t.next=15,e.delay(1500);case 15:e.closeWindow();case 16:case"end":return t.stop()}}),t)})))()},delay:function(t){return new Promise((function(e){setTimeout(e,t)}))},initializeLiff:function(t){var e=this;liff.init({liffId:t},(function(){liff.isLoggedIn()?e.runApp():liff.login()}))},runApp:function(){var t=this;liff.getProfile().then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$auth.$storage.setLocalStorage("userData-lineUUID",n.userId),t.$auth.$storage.setLocalStorage("userData-linepictureUrl",n.pictureUrl),t.$auth.$storage.setLocalStorage("userData-linedisplayName",n.displayName),t.formData.lineUUID=n.userId,t.formData.displayName=n.displayName,t.formData.pictureUrl=n.pictureUrl,t.formData.request_status="pedding",t.checkUserLine(),t.getCars();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},closeWindow:function(){liff.closeWindow()}}},m=d,x=n(42),h=n(52),w=n.n(h),v=n(472),_=n(210),y=n(192),C=n(157),B=n(445),D=n(568),j=n(476),k=n(193),O=n(450),R=n(433),T=n(86),$=n(512),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-form",{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[t.formDataLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[t._v("แจ้งเปลี่ยนคนจอง")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{label:"ชื่อเล่นและชื่อจริงของเซล*",outlined:"",dense:"","hide-details":"",disabled:t.isCombine,rules:t.rule},model:{value:t.formData.sale_name,callback:function(e){t.$set(t.formData,"sale_name",e)},expression:"formData.sale_name"}}),t._v(" "),n("v-text-field",{staticClass:"mt-3",attrs:{label:"สาขา*",outlined:"",dense:"","hide-details":"",disabled:t.isCombine,rules:t.rule},model:{value:t.formData.branch_name,callback:function(e){t.$set(t.formData,"branch_name",e)},expression:"formData.branch_name"}}),t._v(" "),n("v-autocomplete",{staticClass:"mt-3",attrs:{id:"formData.car_id",name:"formData.car_id",items:t.dataCar,"item-text":"car_no","item-value":"car_no",label:"ลำดับรถ*","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_no,callback:function(e){t.$set(t.formData,"car_no",e)},expression:"formData.car_no"}}),t._v(" "),n("v-text-field",{staticClass:"mt-3",attrs:{label:"ชื่อลูกค้าเดิม*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.customer_old,callback:function(e){t.$set(t.formData,"customer_old",e)},expression:"formData.customer_old"}}),t._v(" "),n("v-text-field",{staticClass:"mt-3",attrs:{label:"ชื่อลูกค้าใหม่*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.customer_new,callback:function(e){t.$set(t.formData,"customer_new",e)},expression:"formData.customer_new"}}),t._v(" "),n("v-select",{staticClass:"mt-3",attrs:{label:"อาชีพลูกค้าใหม่*",items:["ข้าราชการ","พนักงานเอกชน","เกษตร","ค้าขาย","อื่น ๆ"],outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.customer_job,callback:function(e){t.$set(t.formData,"customer_job",e)},expression:"formData.customer_job"}}),t._v(" "),"อื่น ๆ"==t.formData.customer_job?n("v-text-field",{staticClass:"mt-3",attrs:{autocomplete:"true",label:"ระบุอาชีพ*",id:"formData.customer_job_list",name:"formData.customer_job_list","append-icon":"",outlined:"",dense:"","hide-details":"",rules:"อื่น ๆ"==t.formData.customer_job?t.rule:""},model:{value:t.formData.customer_job_list,callback:function(e){t.$set(t.formData,"customer_job_list",e)},expression:"formData.customer_job_list"}}):t._e(),t._v(" "),n("v-textarea",{staticClass:"mt-3",attrs:{rows:"2",outlined:"",label:"เหตุผล*",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}}),t._v(" "),n("v-file-input",{staticClass:"mt-3",attrs:{label:"รูปบัตรประจำตัวประชาชนลูกค้าใหม่*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"",rules:t.ruleMustImage},model:{value:t.id_card,callback:function(e){t.id_card=e},expression:"id_card"}}),t._v(" "),n("v-file-input",{staticClass:"mt-3",attrs:{label:"เอกสารสรุปการขายใหม่*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"",rules:t.ruleMustImage},model:{value:t.sale_sheet,callback:function(e){t.sale_sheet=e},expression:"sale_sheet"}})],1),t._v(" "),n("v-card-actions",[n("v-row",[n("v-col",[n("v-btn",{attrs:{dark:"",block:"",color:"warning"},on:{click:t.closeWindow}},[t._v("\n            ยกเลิก\n          ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{block:"",type:"submit",color:"success darken-1",loading:t.loading}},[t._v("\n            บันทึก\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VAutocomplete:v.a,VBtn:_.a,VCard:y.a,VCardActions:C.a,VCardText:C.b,VCardTitle:C.c,VCol:B.a,VFileInput:D.a,VForm:j.a,VProgressLinear:k.a,VRow:O.a,VSelect:R.a,VTextField:T.a,VTextarea:$.a})}}]);