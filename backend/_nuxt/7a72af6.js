(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1018:function(t,n,e){"use strict";e.r(n);var r=e(454),o=e(202),c=e(190),f=e(149),l=e(424),d=e(489),m=e(458),w=e(191),h=e(423),x=e(435),v=e(497),_=e(9),y=(e(18),e(48),e(519)),k=e(490),C=e(531),B=e(432),D={layout:"liff",auth:!1,data:function(){return{serverUrl:"https://www.psnkp.co.th/server",loading:!1,formDataLoading:!1,isCombine:!1,dataWorking:[],formData:{},id_card:null,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}]}},mounted:function(){this.initializeLiff("1657381597-POvX0Vk7")},methods:{getDataWork:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.a();case 2:e=n.sent,t.dataWorking=e.data;case 4:case"end":return n.stop()}}),n)})))()},filterObject:function(t,n,e){return t.cars.car_no.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1},checkUserLine:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function n(){var data,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return data={lineUUID:t.formData.lineUUID,pictureUrl:t.formData.pictureUrl,displayName:t.formData.displayName},n.next=3,C.a(data);case 3:e=n.sent,t.isCombine=e.data.isCombine,t.isCombine&&(t.formData.sale_name=e.data.data.first_name+" "+e.data.data.last_name+" ("+e.data.data.user_code+")",t.formData.branch_name=e.data.data.branch.branch_team.branch_team_name),t.getDataWork();case 7:case"end":return n.stop()}}),n)})))()},onAction:function(t){var n=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.$refs.form.validate()){t.next=16;break}return n.loading=!0,n.formDataLoading=!0,(e=new FormData).append("formData",JSON.stringify(n.formData)),e.append("id_card",n.id_card),t.next=8,y.f(e);case 8:return r=t.sent,console.log(r.data),200==r.status?(B.k(),r.data.note||(r.data.note="-"),o=[{type:"text",text:"แจ้งอัพเดทข้อมูล: "+r.data.car_no},{type:"flex",altText:"แจ้งอัพเดทข้อมูล: "+r.data.car_no,contents:{type:"bubble",hero:{type:"image",url:n.serverUrl+r.data.id_card,size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:n.serverUrl+r.data.id_card}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:"แจ้งอัพเดทข้อมูล",weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",spacing:"xs",contents:[{type:"text",text:"ลำดับรถ:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.car_no,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"ชื่อเซล:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.sale_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"สาขา:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.branch_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"รายละเอียด:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.note,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"primary",height:"sm",action:{type:"uri",label:"รูปบัตรประจำตัวประชาชน",uri:n.serverUrl+r.data.id_card}},{type:"button",style:"link",height:"sm",action:{type:"uri",label:"แชร์",uri:"https://liff.line.me/1657381597-Kla8617N"+"?type=update&id=".concat(r.data.id)}},{type:"box",layout:"vertical",contents:[],margin:"sm"}],flex:0}}}],liff.sendMessages(o).then((function(){})).catch((function(t){window.alert("Error sending message: "+t)}))):B.j(),n.loading=!1,n.formDataLoading=!1,t.next=15,n.delay(1500);case 15:n.closeWindow();case 16:case"end":return t.stop()}}),t)})))()},delay:function(t){return new Promise((function(n){setTimeout(n,t)}))},selectIDCard:function(t){this.id_card=t},selectBookingSheet:function(t){this.booking_sheet=t},initializeLiff:function(t){var n=this;liff.init({liffId:t},(function(){liff.isLoggedIn()?n.runApp():liff.login()}))},runApp:function(){var t=this;liff.getProfile().then(function(){var n=Object(_.a)(regeneratorRuntime.mark((function n(e){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$auth.$storage.setLocalStorage("userData-lineUUID",e.userId),t.$auth.$storage.setLocalStorage("userData-linepictureUrl",e.pictureUrl),t.$auth.$storage.setLocalStorage("userData-linedisplayName",e.displayName),t.formData.lineUUID=e.userId,t.formData.displayName=e.displayName,t.formData.pictureUrl=e.pictureUrl,t.formData.request_status="pedding",t.checkUserLine();case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())},closeWindow:function(){liff.closeWindow()}}},j=D,O=e(38),component=Object(O.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e(c.a,[e(m.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(n){return n.preventDefault(),t.onAction(t.formData.id)}}},[t.formDataLoading?e(w.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),e(f.c,{attrs:{"primary-title":""}},[t._v(" แจ้งอัพเดทข้อมูล")]),t._v(" "),e(f.b,[e(x.a,{attrs:{label:"ชื่อเล่นและชื่อจริงของเซล*",outlined:"",dense:"","hide-details":"",disabled:t.isCombine,rules:t.rule},model:{value:t.formData.sale_name,callback:function(n){t.$set(t.formData,"sale_name",n)},expression:"formData.sale_name"}}),t._v(" "),e(x.a,{staticClass:"mt-3",attrs:{label:"สาขา*",outlined:"",dense:"","hide-details":"",disabled:t.isCombine,rules:t.rule},model:{value:t.formData.branch_name,callback:function(n){t.$set(t.formData,"branch_name",n)},expression:"formData.branch_name"}}),t._v(" "),e(r.a,{staticClass:"mt-3",attrs:{filter:t.filterObject,items:t.dataWorking,"item-value":"id",label:"ลำดับรถ*","single-line":"",outlined:"",dense:"","hide-details":""},on:{change:function(n){t.formData.car_no=t.dataWorking.find((function(n){return n.id==t.formData.working_id})).cars.car_no}},scopedSlots:t._u([{key:"selection",fn:function(n){var e=n.item;return[t._v("\n          "+t._s(e.cars.car_no)+" | "+t._s(e.customer?e.customer.customer_name:"ยังไม่เลือกลูกค้า")+"\n        ")]}},{key:"item",fn:function(n){var e=n.item;return[t._v("\n          W"+t._s(e.id)+" | "+t._s(e.cars.car_no)+" |\n          "+t._s(e.customer?e.customer.customer_name:"ยังไม่เลือกลูกค้า"))]}}]),model:{value:t.formData.working_id,callback:function(n){t.$set(t.formData,"working_id",n)},expression:"formData.working_id"}}),t._v(" "),e(v.a,{staticClass:"mt-3",attrs:{rows:"2",outlined:"",label:"รายละเอียด*",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.note,callback:function(n){t.$set(t.formData,"note",n)},expression:"formData.note"}}),t._v(" "),e(d.a,{staticClass:"mt-3",attrs:{label:"รูปบัตรประจำตัวประชาชนลูกค้า*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.id_card,callback:function(n){t.id_card=n},expression:"id_card"}})],1),t._v(" "),e(f.a,[e(h.a,[e(l.a,[e(o.a,{attrs:{dark:"",block:"",color:"warning"},on:{click:t.closeWindow}},[t._v(" ยกเลิก ")])],1),t._v(" "),e(l.a,[e(o.a,{attrs:{block:"",type:"submit",color:"success darken-1",loading:t.loading}},[t._v(" บันทึก ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},429:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return m}));var r=e(9),o=(e(48),e(98)),c=e.n(o),f="https://www.psnkp.co.th/server",l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,n,e){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(regeneratorRuntime.mark((function t(n,e,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:n,url:e,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,n,e){"use strict";e.d(n,"l",(function(){return l})),e.d(n,"m",(function(){return d})),e.d(n,"o",(function(){return m})),e.d(n,"g",(function(){return w})),e.d(n,"p",(function(){return h})),e.d(n,"e",(function(){return x})),e.d(n,"d",(function(){return v})),e.d(n,"f",(function(){return _})),e.d(n,"k",(function(){return y})),e.d(n,"j",(function(){return k})),e.d(n,"i",(function(){return C})),e.d(n,"a",(function(){return D})),e.d(n,"n",(function(){return O})),e.d(n,"b",(function(){return T})),e.d(n,"h",(function(){return $})),e.d(n,"c",(function(){return W}));var r=e(9),o=(e(48),e(18),e(2)),c=e(200),f=e.n(c);e(262);function l(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function y(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function k(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function C(){return B.apply(this,arguments)}function B(){return(B=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return U.apply(this,arguments)}function U(){return(U=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(){return z.apply(this,arguments)}function z(){return(z=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(f.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},490:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"l",(function(){return c})),e.d(n,"m",(function(){return f})),e.d(n,"k",(function(){return l})),e.d(n,"p",(function(){return d})),e.d(n,"o",(function(){return m})),e.d(n,"j",(function(){return w})),e.d(n,"i",(function(){return h})),e.d(n,"c",(function(){return x})),e.d(n,"g",(function(){return v})),e.d(n,"h",(function(){return _})),e.d(n,"f",(function(){return y})),e.d(n,"e",(function(){return k})),e.d(n,"d",(function(){return C})),e.d(n,"n",(function(){return B})),e.d(n,"a",(function(){return D}));var r=e(429),path="/api/working";function o(){var t=r.a+"/api/working_allData";return Object(r.b)("get",t,{})}function c(t){var n=r.a+path;return Object(r.b)("post",n,t)}function f(t,n){var e=r.a+path+"/"+t;return Object(r.b)("post",e,n)}function l(t){var n=r.a+path+"/"+t;return Object(r.b)("get",n,{})}function d(t,n){var e=r.a+"/api/updateStatusWorking/"+t;return Object(r.b)("post",e,n)}function m(t,n){var e=r.a+"/api/updatePedding/"+t;return Object(r.b)("post",e,n)}function w(t){var n=r.a+"/api/workWhereClose";return Object(r.b)("post",n,t)}function h(t){var n=r.a+"/api/selectWhereCancle";return Object(r.b)("post",n,t)}function x(t){var n=r.a+"/api/work_cancel";return Object(r.b)("post",n,t)}function v(t){var n=r.a+"/api/get_work_cancel";return Object(r.b)("post",n,t)}function _(t){var n=r.a+"/api/working_search_id/"+t;return Object(r.b)("post",n,{})}function y(t){var n=r.a+"/api/followWork";return Object(r.b)("post",n,t)}function k(t){var n=r.a+"/api/followDown";return Object(r.b)("get",n,t)}function C(t){var n=r.a+"/api/commission_month_by_team_branch";return Object(r.b)("post",n,t)}function B(t,n){var e=r.a+"/api/updateNote/"+t;return Object(r.b)("post",e,n)}function D(t){var n=r.a+"/api/activeWorkingID";return Object(r.b)("get",n,t)}},519:function(t,n,e){"use strict";e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return c})),e.d(n,"e",(function(){return f})),e.d(n,"c",(function(){return l})),e.d(n,"a",(function(){return d})),e.d(n,"d",(function(){return m})),e.d(n,"b",(function(){return w}));var r=e(429),path="/api/request_update";function o(t){var n=r.a+path;return Object(r.b)("post",n,t)}function c(t,n){var e=r.a+path+"/"+t;return Object(r.b)("put",e,n)}function f(t){var n=r.a+path+"/"+t;return Object(r.b)("get",n,{})}function l(t){var n=r.a+path+"/"+t;return Object(r.b)("delete",n,{})}function d(t){var n=r.a+path+"/cancle/"+t;return Object(r.b)("delete",n,{})}function m(t){var n=r.a+path+"/indexCustom";return Object(r.b)("post",n,t)}function w(t){var n=r.a+path+"/countData";return Object(r.b)("post",n,t)}},531:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(429);function o(t){var n=r.a+"/api/liff/check_register";return Object(r.b)("post",n,t)}}}]);