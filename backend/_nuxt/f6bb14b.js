(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1016:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(202),c=n(190),l=n(149),d=n(424),f=n(633),m=n(489),h=n(458),v=n(412),x=n(191),_=n(472),y=n(471),w=n(423),k=n(453),C=n(435),O=n(497),D=n(9),j=(n(8),n(18),n(48),n(568)),B=n(457),S=n(531),$=n(487),z=n(495),R=n(432),I={layout:"liff",auth:!1,data:function(){return{serverUrl:"https://www.psnkp.co.th/server",loading:!1,formDataLoading:!1,isCombine:!1,menuSignDate:!1,dataCar:[],dataBank:[],dataBank_branch:[],dataBank_branch_all:[],formData:{},id_card:null,booking_sheet:null,booking_slip:null,sign_sheet:null,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],ruleMustImage:[function(t){return!!t},function(t){return!t||t.size<2e6||"ขนาดรูปต้องน้อยกว่า 2 MB"}]}},mounted:function(){this.initializeLiff("1657381597-2WGVzXPY")},methods:{checkUserLine:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={lineUUID:t.formData.lineUUID,pictureUrl:t.formData.pictureUrl,displayName:t.formData.displayName},e.next=3,S.a(data);case 3:n=e.sent,t.isCombine=n.data.isCombine,t.isCombine&&(t.formData.sale_name=n.data.data.first_name+" "+n.data.data.last_name+" ("+n.data.data.user_code+")",t.formData.branch_name=n.data.data.branch.branch_team.branch_team_name);case 6:case"end":return e.stop()}}),e)})))()},getCars:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.b();case 2:n=e.sent,t.dataCar=n.data;case 4:case"end":return e.stop()}}),e)})))()},getBank:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.c();case 2:return n=e.sent,e.next=5,n.data;case 5:t.dataBank=e.sent;case 6:case"end":return e.stop()}}),e)})))()},getBank_branch:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.c();case 2:return n=e.sent,e.next=5,n.data;case 5:t.dataBank_branch_all=e.sent;case 6:case"end":return e.stop()}}),e)})))()},change_branch:function(t){var e=this;return Object(D.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=e.dataBank.filter((function(e){return e.bank_name==t})),o=[],c=0;c<e.dataBank_branch_all.length;c++)e.dataBank_branch_all[c].bank_id==r[0].id&&o.push(e.dataBank_branch_all[c]);e.dataBank_branch=o;case 4:case"end":return n.stop()}}),n)})))()},onAction:function(t){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=17;break}return e.loading=!0,e.formDataLoading=!0,(n=new FormData).append("formData",JSON.stringify(e.formData)),n.append("id_card",e.id_card),n.append("sign_sheet",e.sign_sheet),n.append("booking_sheet",e.booking_sheet),t.next=10,j.f(n);case 10:return 200==(r=t.sent).status?(R.k(),r.data.note||(r.data.note="-"),r.data.document_list||(r.data.document_list=" "),o=[{type:"text",text:"แจ้งการทำสัญญา: "+r.data.car_no},{type:"flex",altText:"แจ้งการทำสัญญา: "+r.data.car_no,contents:{type:"bubble",hero:{type:"image",url:e.serverUrl+r.data.id_card,size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:e.serverUrl+r.data.id_card}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:"แจ้งการทำสัญญา",weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",spacing:"xs",contents:[{type:"text",text:"ลำดับรถ:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.car_no,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"ชื่อเซล:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.sale_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"สาขา:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.branch_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"วันที่เซนต์:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.sign_date,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"ธนาคาร:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.bank_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"สาขา:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.bank_branch_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"MKT:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.mtk_name,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"เบอร์โทร",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.mtk_tel,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"ผลเครดิต:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.credit,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"เอกสาร:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.document,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:" ",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.document_list,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",spacing:"sm",contents:[{type:"text",text:"หมายเหตุ:",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:r.data.note,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"primary",height:"sm",action:{type:"uri",label:"รูปบัตรประจำตัวประชาชน",uri:e.serverUrl+r.data.id_card}},{type:"button",style:"primary",height:"sm",action:{type:"uri",label:"เอกสารสรุปงานขาย",uri:e.serverUrl+r.data.booking_sheet},color:"#FFC107"},{type:"button",style:"secondary",height:"sm",action:{type:"uri",label:"ใบงานเซนต์",uri:e.serverUrl+r.data.sign_sheet}},{type:"button",style:"link",height:"sm",action:{type:"uri",label:"แชร์",uri:"https://liff.line.me/1657381597-Kla8617N"+"?type=sign&id=".concat(r.data.id)}},{type:"box",layout:"vertical",contents:[],margin:"sm"}],flex:0}}}],liff.sendMessages(o).then((function(){})).catch((function(t){window.alert("Error sending message: "+t)}))):R.j(),e.loading=!1,e.formDataLoading=!1,t.next=16,e.delay(1500);case 16:e.closeWindow();case 17:case"end":return t.stop()}}),t)})))()},delay:function(t){return new Promise((function(e){setTimeout(e,t)}))},initializeLiff:function(t){var e=this;liff.init({liffId:t},(function(){liff.isLoggedIn()?e.runApp():liff.login()}))},runApp:function(){var t=this;liff.getProfile().then(function(){var e=Object(D.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$auth.$storage.setLocalStorage("userData-lineUUID",n.userId),t.$auth.$storage.setLocalStorage("userData-linepictureUrl",n.pictureUrl),t.$auth.$storage.setLocalStorage("userData-linedisplayName",n.displayName),t.formData.lineUUID=n.userId,t.formData.displayName=n.displayName,t.formData.pictureUrl=n.pictureUrl,t.formData.request_status="pedding",t.checkUserLine(),t.getCars(),t.getBank(),t.getBank_branch();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},closeWindow:function(){liff.closeWindow()}}},T=I,P=n(38),component=Object(P.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(c.a,[n(h.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[t.formDataLoading?n(x.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),n(l.c,{attrs:{"primary-title":""}},[t._v("แจ้งการทำสัญญา")]),t._v(" "),n(l.b,[n(C.a,{attrs:{label:"ชื่อเล่นและชื่อจริงของเซล*",outlined:"",dense:"","hide-details":"",disabled:t.isCombine,rules:t.rule},model:{value:t.formData.sale_name,callback:function(e){t.$set(t.formData,"sale_name",e)},expression:"formData.sale_name"}}),t._v(" "),n(C.a,{staticClass:"mt-3",attrs:{label:"สาขา*",outlined:"",dense:"","hide-details":"",disabled:t.isCombine,rules:t.rule},model:{value:t.formData.branch_name,callback:function(e){t.$set(t.formData,"branch_name",e)},expression:"formData.branch_name"}}),t._v(" "),n(r.a,{staticClass:"mt-3",attrs:{id:"formData.car_id",name:"formData.car_id",items:t.dataCar,"item-text":"car_no","item-value":"car_no",label:"ลำดับรถ*","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.car_no,callback:function(e){t.$set(t.formData,"car_no",e)},expression:"formData.car_no"}}),t._v(" "),n(v.a,{ref:"menuSignDate",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(C.a,t._g(t._b({staticClass:"mt-3",attrs:{autocomplete:"true",label:"วันที่เซนต์สัญญา*","persistent-hint":"",outlined:"",dense:"","hide-details":"","flathide-details":"",rules:t.rule,readonly:"",clearable:""},model:{value:t.formData.sign_date,callback:function(e){t.$set(t.formData,"sign_date",e)},expression:"formData.sign_date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuSignDate,callback:function(e){t.menuSignDate=e},expression:"menuSignDate"}},[t._v(" "),n(f.a,{attrs:{locale:"th-TH","picker-date":""},on:{input:function(e){t.menuSignDate=!1}},model:{value:t.formData.sign_date,callback:function(e){t.$set(t.formData,"sign_date",e)},expression:"formData.sign_date"}})],1),t._v(" "),n(k.a,{staticClass:"mt-3",attrs:{items:t.dataBank,"item-text":"bank_name","no-data-text":"ไม่มีข้อมูล","item-value":"bank_name",label:"ธนาคาร*",outlined:"",dense:"","hide-details":"",rules:t.rule},on:{change:function(e){return t.change_branch(t.formData.bank_name)}},model:{value:t.formData.bank_name,callback:function(e){t.$set(t.formData,"bank_name",e)},expression:"formData.bank_name"}}),t._v(" "),n(k.a,{staticClass:"mt-3",attrs:{items:t.dataBank_branch,"item-text":"bank_branch_name","no-data-text":"ไม่มีข้อมูล","item-value":"bank_branch_name",label:"สาขาธนาคาร*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.bank_branch_name,callback:function(e){t.$set(t.formData,"bank_branch_name",e)},expression:"formData.bank_branch_name"}}),t._v(" "),n(C.a,{staticClass:"mt-3",attrs:{label:"ชื่อ MKT*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.mtk_name,callback:function(e){t.$set(t.formData,"mtk_name",e)},expression:"formData.mtk_name"}}),t._v(" "),n(C.a,{staticClass:"mt-3",attrs:{label:"เบอร์โทร MTK*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.mtk_tel,callback:function(e){t.$set(t.formData,"mtk_tel",e)},expression:"formData.mtk_tel"}}),t._v(" "),n(C.a,{staticClass:"mt-3",attrs:{label:"ผลเครดิต*",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.credit,callback:function(e){t.$set(t.formData,"credit",e)},expression:"formData.credit"}}),t._v(" "),n(y.a,{staticClass:"mt-3",attrs:{rules:t.rule,"hide-details":"",row:""},model:{value:t.formData.document,callback:function(e){t.$set(t.formData,"document",e)},expression:"formData.document"}},[[n("div",{staticClass:"mr-1"},[t._v("เอกสาร:")])],t._v(" "),n(_.a,{attrs:{label:"ครบ",value:"ครบ"}}),t._v(" "),n(_.a,{attrs:{label:"ไม่ครบ",color:"red",value:"ไม่ครบ"}})],2),t._v(" "),"ไม่ครบ"==t.formData.document?n(O.a,{staticClass:"mt-3",attrs:{rows:"2",label:"รายการเอกสารที่ไม่ครบ",outlined:"",dense:"","hide-details":"",rules:t.rule},model:{value:t.formData.document_list,callback:function(e){t.$set(t.formData,"document_list",e)},expression:"formData.document_list"}}):t._e(),t._v(" "),n(O.a,{staticClass:"mt-3",attrs:{rows:"2",outlined:"",label:"หมายเหตุ",dense:"","hide-details":""},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}}),t._v(" "),n(m.a,{staticClass:"mt-3",attrs:{label:"รูปบัตรประจำตัวประชาชนลูกค้า*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"auto",rules:t.ruleMustImage},model:{value:t.id_card,callback:function(e){t.id_card=e},expression:"id_card"}}),t._v(" "),n(m.a,{staticClass:"mt-3",attrs:{label:"เอกสารสรุปงานขาย*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"auto",rules:t.ruleMustImage},model:{value:t.booking_sheet,callback:function(e){t.booking_sheet=e},expression:"booking_sheet"}}),t._v(" "),n(m.a,{staticClass:"mt-3",attrs:{label:"ใบงานเซนต์*","prepend-icon":"","append-icon":"mdi-image","show-size":"",outlined:"",dense:"","hide-details":"auto",rules:t.ruleMustImage},model:{value:t.sign_sheet,callback:function(e){t.sign_sheet=e},expression:"sign_sheet"}})],1),t._v(" "),n(l.a,[n(w.a,[n(d.a,[n(o.a,{attrs:{dark:"",block:"",color:"warning"},on:{click:t.closeWindow}},[t._v("\n            ยกเลิก\n          ")])],1),t._v(" "),n(d.a,[n(o.a,{attrs:{block:"",type:"submit",color:"success darken-1",loading:t.loading}},[t._v("\n            บันทึก\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";var r=n(202);e.a=r.a},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,f();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,e,n){"use strict";n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"o",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"p",(function(){return v})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return _})),n.d(e,"f",(function(){return y})),n.d(e,"k",(function(){return w})),n.d(e,"j",(function(){return k})),n.d(e,"i",(function(){return C})),n.d(e,"a",(function(){return D})),n.d(e,"n",(function(){return B})),n.d(e,"b",(function(){return $})),n.d(e,"h",(function(){return R})),n.d(e,"c",(function(){return T}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),l=n.n(c);n(262);function d(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function f(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function y(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function k(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function C(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return z.apply(this,arguments)}function z(){return(z=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},439:function(t,e,n){"use strict";var r=n(83),o=n(2);e.a=o.default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},442:function(t,e,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2e2bc7da",content,!0,{sourceMap:!1})},443:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(18),n(75),n(76),n(8);var r=n(438),o=n(439),c=n(201),l=n(4);function d(t){t.preventDefault()}e.a=Object(l.a)(r.a,o.a,c.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},444:function(t,e,n){var r=n(12)(!1);r.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},445:function(t,e,n){var r=n(51),o=n(265),c=n(62);t.exports=function(t,e,n,l){var d=String(c(t)),f=d.length,m=void 0===n?" ":String(n),h=r(e);if(h<=f||""==m)return d;var v=h-f,x=o.call(m,Math.ceil(v/m.length));return x.length>v&&(x=x.slice(0,v)),l?x+d:d+x}},446:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("999cb8a8",content,!0,{sourceMap:!1})},447:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=r},448:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5e62c9d0",content,!0,{sourceMap:!1})},449:function(t,e,n){var r=n(12)(!1);r.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=r},457:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"p",(function(){return l})),n.d(e,"q",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return h})),n.d(e,"b",(function(){return v})),n.d(e,"o",(function(){return x})),n.d(e,"s",(function(){return _})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return O})),n.d(e,"n",(function(){return D})),n.d(e,"h",(function(){return j})),n.d(e,"j",(function(){return B})),n.d(e,"r",(function(){return S}));var r=n(429),path="/api/car";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function f(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function m(){var t=r.a+"/api/SelectOnCarAll";return Object(r.b)("get",t,{})}function h(){var t=r.a+"/api/SelectAllCars";return Object(r.b)("get",t,{})}function v(){var t=r.a+"/api/SelectCarNo";return Object(r.b)("get",t,{})}function x(t){var e=r.a+"/api/StockOnCar";return Object(r.b)("post",e,t)}function _(t){var e=r.a+"/api/uploadImgCars";return Object(r.b)("post",e,t)}function y(t){var e=r.a+"/api/ImageCar/"+t;return Object(r.b)("post",e,{})}function w(t){var e=r.a+"/api/change_fist_img";return Object(r.b)("post",e,t)}function k(t){var e=r.a+"/api/deleteAllImgCar";return Object(r.b)("post",e,t)}function C(t){var e=r.a+"/api/deleteFolder";return Object(r.b)("post",e,t)}function O(t){var e=r.a+"/api/delete_img_car";return Object(r.b)("post",e,t)}function D(t){var e=r.a+"/api/showCar";return Object(r.b)("post",e,t)}function j(t,e){var n=r.a+"/api/getAllinfo/"+t+"/"+e;return Object(r.b)("get",n,{})}function B(t){var e=r.a+"/api/reRollCar/"+t;return Object(r.b)("get",e,{})}function S(){var t=r.a+"/api/update_amountPrice";return Object(r.b)("get",t,{})}},459:function(t,e,n){var r=n(17);r(r.S,"Math",{sign:n(263)})},465:function(t,e,n){"use strict";var r=n(17),o=n(445),c=n(264),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},471:function(t,e,n){"use strict";n(5),n(6),n(8),n(10),n(11);var r=n(3),o=(n(16),n(442),n(446),n(438)),c=n(61),l=n(4);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(l.a)(c.a,o.a);e.a=m.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},o.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=o.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:c.a.options.methods.onClick},render:function(t){var e=o.a.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}})},472:function(t,e,n){"use strict";n(5),n(6),n(8),n(10),n(11);var r=n(99),o=n(3),c=(n(23),n(448),n(470)),l=n(81),d=n(438),f=n(82),m=n(22),h=n(122),v=n(439),x=n(21),_=n(443),y=n(1),w=n(4),k=n(50),C=["title"];function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(w.a)(f.a,m.a,v.a,Object(h.a)("radioGroup"),x.a);e.a=j.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:{type:Boolean,default:null},id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:{type:Boolean,default:null},value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return D(D({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){if(!this.isDisabled)return _.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return d.a.options.computed.computedId.call(this)},hasLabel:d.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){var t;return null!==(t=this.disabled)&&void 0!==t?t:!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){var t;return null!==(t=this.readonly)&&void 0!==t?t:!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return _.a.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(c.a,{on:{click:_.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(y.s)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,C));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(D({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(k.c)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}})},487:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/bank";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function f(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBank";return Object(r.b)("get",t,{})}},495:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/bank_branch";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function f(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBank_branch";return Object(r.b)("get",t,{})}},531:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(429);function o(t){var e=r.a+"/api/liff/check_register";return Object(r.b)("post",e,t)}},568:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return h}));var r=n(429),path="/api/request_sign";function o(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function l(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function f(t){var e=r.a+path+"/cancle/"+t;return Object(r.b)("delete",e,{})}function m(t){var e=r.a+path+"/indexCustom";return Object(r.b)("post",e,t)}function h(t){var e=r.a+path+"/countData";return Object(r.b)("post",e,t)}}}]);