(window.webpackJsonp=window.webpackJsonp||[]).push([[296,109],{1105:function(t,e,n){"use strict";n.r(e);var r=n(188),o=n(202),c=n(190),l=n(149),f=n(424),d=n(984),m=n(177),h=n(147),w=n(422),x=n(435),v=n(9),B=(n(48),n(49),n(812)),C=n(432),_=n(979),k=n(474),R={components:{dialogNew:_.default,dialogImage:k.default},data:function(){return{loading:!0,search:"",dialogImg:!1,imgUrl:"",dialog:!1,id:"",formTitle:"Add",action:"add",headers:[{text:"ID",value:"id",width:"7%",align:"center"},{text:"picture",value:"pictureUrl",width:"8%"},{text:"displayName",value:"displayName",width:"20%"},{text:"ชื่อในระบบ",value:"user_name",width:"20%"},{text:"สังกัดสาขา",value:"user.branch.branch_team.branch_team_name"},{text:"สถานะ",value:"user.user_active",width:"10%"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],data:[],user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.b();case 2:n=e.sent,t.data=n.data,console.log(t.data),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},AddItem:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.formTitle="เพิ่มข้อมูล",t.dialog=!0,t.id="",t.action="add";case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){var e=this;return Object(v.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.formTitle="แก้ไขข้อมูล",e.dialog=!0,e.id=t,e.action="edit";case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(v.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=C.a(),n.next=3,r.then((function(n){1==n&&B.a(t).then(function(){var t=Object(v.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 200==n.status?C.k():C.j(),t.next=3,e.$nextTick((function(){e.getData()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),C.k()}));case 2:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),C.j()}));case 2:case"end":return e.stop()}}),e)})))()}},watch:{data:function(){var t=this;return this.data.map((function(e){e.no=t.data.map((function(t){return t.id})).indexOf(e.id)+1}))}}},T=R,y=n(38),component=Object(y.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission?n("div",[n(c.a,[n(l.c,[void 0,t._v(" "),n(w.a),t._v(" "),n(f.a,{attrs:{cols:"3"}},[n(x.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2),t._v(" "),n(d.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:t._u([{key:"item.pictureUrl",fn:function(e){var c=e.item;return[n(o.a,{attrs:{icon:""}},[n(r.a,{attrs:{size:"40"},on:{click:function(e){t.imgUrl=c.pictureUrl,t.dialogImg=!0}}},[n(h.a,{attrs:{src:c.pictureUrl}})],1)],1)]}},{key:"item.user_name",fn:function(e){var r=e.item;return[r.user?n("span",[t._v(" "+t._s(r.user.first_name)+" "+t._s(r.user.last_name)+" ")]):t._e()]}},{key:"item.user.user_active",fn:function(e){var r=e.item;return[r.user?n("div",[1==r.user.user_active?n(o.a,{attrs:{"x-small":"",color:"success",dark:""}},[t._v("เปิดใช้งาน")]):n(o.a,{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ปิดการใช้งาน")])],1):t._e()]}},{key:"item.actions",fn:function(e){var r=e.item;return[n(o.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n(m.a,[t._v(" mdi-pencil")])],1),t._v(" "),n(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n(m.a,[t._v(" mdi-delete ")])],1)]}}],null,!0)})],1),t._v(" "),n("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}}),t._v(" "),n("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(e){t.dialogImg=!1}}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},432:function(t,e,n){"use strict";n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return d})),n.d(e,"o",(function(){return m})),n.d(e,"g",(function(){return h})),n.d(e,"p",(function(){return w})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return v})),n.d(e,"f",(function(){return B})),n.d(e,"k",(function(){return C})),n.d(e,"j",(function(){return _})),n.d(e,"i",(function(){return k})),n.d(e,"a",(function(){return T})),n.d(e,"n",(function(){return j})),n.d(e,"b",(function(){return I})),n.d(e,"h",(function(){return U})),n.d(e,"c",(function(){return P}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),l=n.n(c);n(262);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function B(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function C(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function _(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function k(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return y.apply(this,arguments)}function y(){return(y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return D.apply(this,arguments)}function D(){return(D=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},474:function(t,e,n){"use strict";n.r(e);var r=n(428),o=n(426),c=n(9),l=(n(48),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogDeleteComponent=t.dialog;case 1:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),f=n(38),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(r.a,[n(o.a,{attrs:{width:"600px"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n("img",{attrs:{width:"600px",height:"auto",src:t.imgUrl}})])],1)}),[],!1,null,null,null);e.default=component.exports}}]);