(window.webpackJsonp=window.webpackJsonp||[]).push([[291,105,141],{1100:function(e,t,n){"use strict";n.r(t);var r=n(188),o=n(202),c=n(190),l=n(149),f=n(424),d=n(979),m=n(177),h=n(147),_=n(422),v=n(435),x=n(9),w=(n(48),n(49),n(498)),k=n(432),D=n(854),O=n(474),j={components:{dialogNew:D.default,dialogImage:O.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server",loading:!0,search:"",dialog:!1,id:"",formTitle:"Add",action:"add",imgUrl:"",dialogImg:!1,user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),headers:[{text:"รูปภาพ",value:"user_image"},{text:"ชื่อ นามสกุล",value:"full_name"},{text:"ตำแหน่ง",value:"user_group.user_group_name"},{text:"ทีมสาขา",value:"branch_team.branch_team_name"},{text:"สาขาย่อย",value:"branch.branch_name"},{text:"ทีม",value:"team.team_name",width:"10%"},{text:"เบอร์",value:"tel"},{text:"ตำแหน่ง (จำนวน)",value:"user_sub_groups"},{text:"สถานะ",value:"user_active",width:"5%"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],tbl_users:[]}},mounted:function(){this.getdata()},computed:{tHeader:function(){return this.headers.map((function(e){return e.text}))}},methods:{showImg:function(e){this.dialogImg=!0,this.imgUrl=e},getdata:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.b();case 2:if(n=t.sent,2==e.user_group_permission)if(1==e.branch_id){for(r=[],o=0;o<n.data.length;o++)3==n.data[o].user_group_id&&n.data[o].branch_id==e.branch_id&&r.push(n.data[o]);e.tbl_users=r}else{for(c=[],l=0;l<n.data.length;l++)e.branch_id==n.data[l].branch_id&&c.push(n.data[l]);e.tbl_users=c}else e.tbl_users=n.data;e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},AddItem:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formTitle="เพิ่มข้อมูล",e.dialog=!0,e.id="",e.action="add";case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.formTitle="แก้ไขข้อมูล",t.dialog=!0,t.id=e,t.action="edit";case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=k.a(),n.next=3,r.then((function(n){1==n&&w.a(e).then(function(){var e=Object(x.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200==n.status?k.k():k.j(),t.$nextTick((function(){t.getdata()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialog=!1,e.$nextTick((function(){e.getdata(),k.k()}));case 2:case"end":return t.stop()}}),t)})))()},addError:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialog=!1,e.$nextTick((function(){e.getdata(),k.j()}));case 2:case"end":return t.stop()}}),t)})))()}},watch:{tbl_users:function(){return this.tbl_users.map((function(e,t){e.full_name=e.first_name+" "+e.last_name}))}}},y=j,$=n(38),component=Object($.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n(c.a,[n(l.c,[[n(o.a,{attrs:{color:"primary",dark:""},on:{click:function(t){return t.stopPropagation(),e.AddItem()}}},[n(m.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n          เพิ่มรายการใหม่\n        ")],1)],e._v(" "),n(_.a),e._v(" "),n(f.a,{attrs:{cols:"3"}},[n(v.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],2),e._v(" "),n(d.a,{attrs:{headers:e.headers,items:e.tbl_users,"items-per-page":10,search:e.search,loading:e.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:e._u([{key:"item.user_image",fn:function(t){var c=t.item;return[n(o.a,{attrs:{icon:""}},[n(r.a,{attrs:{size:"40"},on:{click:function(t){return e.showImg(e.serverUrl+c.user_image)}}},[n(h.a,{attrs:{src:e.serverUrl+c.user_image}})],1)],1)]}},{key:"item.user_active",fn:function(t){return[1==t.item.user_active?n(o.a,{attrs:{"x-small":"",color:"success",dark:""}},[e._v("เปิดใช้งาน")]):n(o.a,{attrs:{"x-small":"",color:"red",dark:""}},[e._v("ปิดการใช้งาน")])]}},{key:"item.actions",fn:function(t){var r=t.item;return[n(o.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.id)}}},[n(m.a,[e._v(" mdi-pencil ")])],1),e._v(" "),n(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(t){return e.deleteItem(r.id)}}},[n(m.a,[e._v(" mdi-delete ")])],1)]}}],null,!0)}),e._v(" "),n("dialogNew",{attrs:{dialog:e.dialog,id:e.id,action:e.action,formTitle:e.formTitle},on:{cancleItem:function(t){e.dialog=!1},success:function(t){return e.addSuccess()},error:function(t){return e.addError()}}}),e._v(" "),n("dialogImage",{attrs:{dialog:e.dialogImg,imgUrl:e.imgUrl},on:{cancleItem:function(t){e.dialogImg=!1}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},429:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",f=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,$nuxt.$auth.loggedIn;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,window.$nuxt.$auth.getToken("local");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function m(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function e(t,n,data){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()){e.next=9;break}return e.next=3,d();case 3:return e.t0=e.sent,r={Authorization:e.t0},e.next=7,c()({method:t,url:n,data:data,headers:r}).then((function(e){return e})).catch((function(e){if(401==e.response.status)return $nuxt.$auth.logout()}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},430:function(e,t,n){"use strict";var r=n(435);t.a=r.a},432:function(e,t,n){"use strict";n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return d})),n.d(t,"o",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"p",(function(){return _})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"f",(function(){return w})),n.d(t,"k",(function(){return k})),n.d(t,"j",(function(){return D})),n.d(t,"i",(function(){return O})),n.d(t,"a",(function(){return y})),n.d(t,"n",(function(){return C})),n.d(t,"b",(function(){return B})),n.d(t,"h",(function(){return T})),n.d(t,"c",(function(){return I}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),l=n.n(c);n(262);function f(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function d(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function k(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function D(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function O(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(e){return e.isConfirmed})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(e){return e.isConfirmed})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(e){return e.isConfirmed})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(e){return e.isConfirmed})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return U.apply(this,arguments)}function U(){return(U=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(e){return e.isConfirmed})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){e(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(e){return e.isConfirmed})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},452:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return select}));var r=n(429),path="/api/branches";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function f(e,t){var n=r.a+path+"/"+e;return Object(r.b)("post",n,t)}function d(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/SelectOnBranches";return Object(r.b)("get",e,{})}},461:function(e,t,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("83ff91dc",content,!0,{sourceMap:!1})},462:function(e,t,n){var r=n(12)(!1);r.push([e.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),e.exports=r},474:function(e,t,n){"use strict";n.r(t);var r=n(190),o=n(428),c=n(426),l=n(9),f=(n(48),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogDeleteComponent=e.dialog;case 1:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),d=n(38),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(o.a,[n(c.a,{attrs:{width:"600px"},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[n(r.a,[n("img",{attrs:{width:"600px",height:"auto",src:e.imgUrl}})])],1)],1)}),[],!1,null,null,null);t.default=component.exports},489:function(e,t,n){"use strict";n(5),n(6),n(8),n(10),n(11);var r=n(52),o=n(3),c=n(14),l=(n(16),n(28),n(49),n(23),n(32),n(461),n(430)),f=n(588),d=n(1),m=n(7),h=n(50);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=l.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"==typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(d.H)(e).every((function(e){return null!=e&&"object"===Object(c.a)(e)}))}}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size;return e+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(d.w)(t,1024===this.base))},internalArrayValue:function(){return Object(d.H)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,r=void 0===n?"":n,o=t.size,c=void 0===o?0:o,l=e.truncateText(r);return e.showSize?"".concat(l," (").concat(Object(d.w)(c,1024===e.base),")"):l})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(m.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(d.k)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(text,t){return e.$createElement(f.a,{props:{small:e.smallChips},on:{"click:close":function(){var n=e.internalValue;n.splice(t,1),e.internalValue=n}}},[text])})):[]},genControl:function(){var e=l.a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(h.d)(e.data.style,{display:"none"})),e},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[r],file:n,index:r}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=l.a.options.methods.genTextFieldSlot.call(this);return t.data.on=v(v({},t.data.on||{}),{},{click:function(t){t.target&&"LABEL"===t.target.nodeName||e.$refs.input.click()}}),t},onInput:function(e){var t=Object(r.a)(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},498:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h}));var r=n(429),path="/api/users";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function f(e,t){var n=r.a+path+"/"+e;return Object(r.b)("post",n,t)}function d(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function m(){var e=r.a+"/api/SelectOnSale";return Object(r.b)("get",e,{})}function h(e){var t=r.a+"/api/SelectOnTechnicianBuild/"+e;return Object(r.b)("get",t,{})}},500:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return select}));var r=n(429),path="/api/branch_teams";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function f(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function d(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/SelectOnBranchTeams";return Object(r.b)("get",e,{})}},599:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return select}));var r=n(429),path="/api/user_teams";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function f(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function d(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/SelectOnUserTeams";return Object(r.b)("get",e,{})}},681:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return select}));var r=n(429),path="/api/user_groups";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function f(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function d(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/SelectOnUserGroups";return Object(r.b)("get",e,{})}},854:function(e,t,n){"use strict";n.r(t);var r=n(454),o=n(202),c=n(190),l=n(149),f=n(424),d=n(428),m=n(426),h=n(489),_=n(458),v=n(177),x=n(147),w=n(191),k=n(472),D=n(471),O=n(423),j=n(422),y=n(435),$=n(46),C=n(9),R=(n(8),n(48),n(498)),B=n(681),S=n(599),T=n(452),U=n(500),I=n(432),L={props:["dialog","action","id","formTitle"],data:function(){return{serverUrl:"https://www.psnkp.co.th/server/assets/images/users/",btnloading:!0,formDataLoading:!1,formData:{user_sub_groups:[]},branch_teams:[],branches:[],branche_masters:[],user_groups:[],user_teams_all:[],user_teams:[],user_image:"",rule:[function(e){return!!e||"กรุณาใส่ข้อมูล"}],dialogDeleteComponent:!1,currentFile:null,imagePreviewURL:null,team_show:!0,user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),user_id:this.$auth.$storage.getLocalStorage("userData-id"),branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),clickUser_teams_check:0}},mounted:function(){this.getBranch_teams(),this.getBranches(),this.getUser_group(),this.getUser_teams()},methods:{selectFile:function(e){if(null!=e){this.currentFile=e;var t=e;t?(this.imagePreviewURL=URL.createObjectURL(t),URL.revokeObjectURL(t)):this.imagePreviewURL=null}},getUser_teams:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.c();case 2:n=t.sent,e.user_teams_all=n.data,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},changeBranch_teams:function(){var e=this;this.branches=this.branche_masters.filter((function(t){return t.branch_team_id==e.formData.branch_team_id}))},changeUser_teams:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=[],o=0;o<t.user_teams_all.length;o++)t.user_teams_all[o].branch_id==e&&r.push(t.user_teams_all[o]);t.user_teams=r,1==t.clickUser_teams_check&&(t.formData.user_team_id=null);case 4:case"end":return n.stop()}}),n)})))()},clickUser_teams:function(){this.clickUser_teams_check=1},changeUser_teams_sub:function(e,t){var n=this;return Object(C.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(o=[],c=0;c<n.user_teams_all.length;c++)n.user_teams_all[c].branch_id==e&&o.push(n.user_teams_all[c]);n.formData.user_sub_groups[t].user_teams=o;case 3:case"end":return r.stop()}}),r)})))()},getUser_group:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.c();case 2:if(n=t.sent,r=[],-1==e.user_group_permission)r=n.data;else for(o=0;o<n.data.length;o++)1!=n.data[o].id&&r.push(n.data[o]);e.user_groups=r,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},getBranches:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.c();case 2:n=t.sent,e.branches=n.data,e.branche_masters=n.data,e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},getBranch_teams:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.b();case 2:n=t.sent,e.branch_teams=n.data.filter((function(e){return"1"==e.branch_team_active})),console.log(n.data);case 5:case"end":return t.stop()}}),t)})))()},onAction:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var data,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.$refs.form.validate()){n.next=22;break}if(t.btnloading=!0,t.formDataLoading=!0,(data=new FormData).append("formData",JSON.stringify(t.formData)),data.append("Image",t.currentFile),"add"!=t.action){n.next=13;break}return n.next=9,R.f(data);case 9:"success"==(r=n.sent).data?200==r.status?t.$emit("success"):t.$emit("error"):"ชื่อผู้ใช้งานซ้ำ"==r.data?I.e():"รหัสลับซ้ำ"==r.data&&I.d(),n.next=20;break;case 13:if("edit"!=t.action){n.next=20;break}return data.append("_method","PATCH"),n.next=17,R.g(e,data);case 17:o=n.sent,t.$refs.form.reset(),200==o.status?t.$emit("success"):t.$emit("error");case 20:t.btnloading=!1,t.formDataLoading=!1;case 22:case"end":return n.stop()}}),n)})))()},add_row:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={user_id:e.user_id,user_group_id:null,user_groups:e.user_groups,branch_id:null,branches:e.branches,user_team_id:null,user_teams:e.user_teams,active:"1"},t.next=3,e.formData.user_sub_groups.push(data);case 3:case"end":return t.stop()}}),t)})))()}},watch:{dialog:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogDeleteComponent=e.dialog,!e.dialogDeleteComponent){t.next=15;break}if(e.imagePreviewURL=null,"add"!=e.action){t.next=7;break}e.$nextTick(Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.form.reset(),n=e,2==e.user_group_permission?e.$nextTick(Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.formData={user_group_id:3,branch_id:e.branch_id,user_active:"1",user_sub_groups:[]};case 1:case"end":return t.stop()}}),t)})))):e.$nextTick(Object(C.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.formData={user_active:"1",user_sub_groups:[]};case 1:case"end":return e.stop()}}),e)})))),setTimeout((function(){e.changeUser_teams(e.branch_id)}),1e3);case 4:case"end":return t.stop()}}),t)})))),t.next=15;break;case 7:if("edit"!=e.action){t.next=15;break}return e.formDataLoading=!0,t.next=11,R.e(e.id);case 11:n=t.sent,e.$nextTick((function(){e.$refs.form.reset();var t=e;e.$nextTick(Object(C.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.data;case 2:t.formData=r.sent,null!=n.data.user_image&&(e.imagePreviewURL=e.serverUrl+"/"+n.data.user_image);case 4:case"end":return r.stop()}}),r)}))))})),setTimeout((function(){e.changeUser_teams(n.data.branch_id)}),1e3),e.formDataLoading=!1;case 15:e.btnloading=!1;case 16:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},P=n(38),component=Object(P.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(d.a,[n(m.a,{attrs:{"max-width":"50%"},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[n(c.a,[n(_.a,{ref:"form",attrs:{autocomplete:"on"},on:{submit:function(t){return t.preventDefault(),e.onAction(e.formData.id)}}},[n($.a,{attrs:{color:"primary",dark:"",flat:""}},[e._v("\n          "+e._s(e.formTitle)+"\n        ")]),e._v(" "),e.formDataLoading?n(w.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):e._e(),e._v(" "),n(l.b,[n(d.a,[n(O.a,[n(f.a,{attrs:{cols:"12"}},[n(y.a,{attrs:{label:"ชื่อผุ้ใช้งาน",id:"formData.email",name:"formData.email",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1)],1),e._v(" "),n(O.a,[n(f.a,{attrs:{cols:"12"}},[n(y.a,{attrs:{label:"Password",type:"Password",id:"formData.password",name:"formData.password",outlined:"",dense:"","hide-details":"",rules:"edit"==this.$props.action?[]:e.rule},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1),e._v(" "),n(O.a,[n(f.a,{attrs:{cols:"6"}},[n(y.a,{attrs:{label:"ชื่อ","append-icon":"",id:"formData.first_name",name:"formData.first_name",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.first_name,callback:function(t){e.$set(e.formData,"first_name",t)},expression:"formData.first_name"}})],1),e._v(" "),n(f.a,{attrs:{cols:"6"}},[n(y.a,{attrs:{label:"สกุล","append-icon":"",id:"formData.last_name",name:"formData.last_name",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.last_name,callback:function(t){e.$set(e.formData,"last_name",t)},expression:"formData.last_name"}})],1)],1),e._v(" "),n(O.a,[n(f.a,{attrs:{cols:"6"}},[n(y.a,{attrs:{label:"ธนาคาร",type:"text",id:"formData.bank",name:"formData.bank",outlined:"",dense:"","hide-details":""},model:{value:e.formData.bank,callback:function(t){e.$set(e.formData,"bank",t)},expression:"formData.bank"}})],1),e._v(" "),n(f.a,{attrs:{cols:"6"}},[n(y.a,{attrs:{label:"เลขบัญชี",type:"text",id:"formData.bank_no",name:"formData.bank_no",outlined:"",dense:"","hide-details":""},model:{value:e.formData.bank_no,callback:function(t){e.$set(e.formData,"bank_no",t)},expression:"formData.bank_no"}})],1)],1),e._v(" "),n(O.a,[n(f.a,{attrs:{cols:"6"}},[n(y.a,{attrs:{label:"รหัสลับ",type:"text",id:"formData.user_code",name:"formData.user_code",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.user_code,callback:function(t){e.$set(e.formData,"user_code",t)},expression:"formData.user_code"}})],1),e._v(" "),n(f.a,{attrs:{cols:"6"}},[n(y.a,{attrs:{label:"เบอร์ติดต่อ",type:"number",id:"formData.tel",name:"formData.tel",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:e.formData.tel,callback:function(t){e.$set(e.formData,"tel",t)},expression:"formData.tel"}})],1)],1),e._v(" "),n(O.a,[n(f.a,{staticClass:"text-center",attrs:{col:"12"}},[n("span",[e._v("ตำแหน่ง/สาขาหลัก")])])],1),e._v(" "),n(O.a,[n(f.a,{attrs:{cols:"12"}},[n(r.a,{attrs:{readonly:2==e.user_group_permission,id:"formData.user_group_id",name:"formData.user_group_id",items:e.user_groups,"item-text":"user_group_name","item-value":"id",label:"ตำแหน่ง",outlined:"",dense:"","no-data-text":"ไม่มีข้อมูล","hide-details":"",rules:e.rule},model:{value:e.formData.user_group_id,callback:function(t){e.$set(e.formData,"user_group_id",t)},expression:"formData.user_group_id"}})],1)],1),e._v(" "),n(O.a,[n(f.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{items:e.branch_teams,"no-data-text":"ไม่มีข้อมูล","item-text":"branch_team_name","item-value":"id",label:"ทีมสาขา",outlined:"",dense:"","hide-details":"",rules:e.rule},on:{change:e.changeBranch_teams},model:{value:e.formData.branch_team_id,callback:function(t){e.$set(e.formData,"branch_team_id",t)},expression:"formData.branch_team_id"}})],1),e._v(" "),n(f.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{items:e.branches,"no-data-text":"ไม่มีข้อมูล","item-text":"branch_name","item-value":"id",label:"สาขาย่อย",outlined:"",dense:"","hide-details":"",rules:e.rule},on:{change:e.changeUser_teams,click:e.clickUser_teams},model:{value:e.formData.branch_id,callback:function(t){e.$set(e.formData,"branch_id",t)},expression:"formData.branch_id"}})],1),e._v(" "),n(f.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{items:e.user_teams,"no-data-text":"ไม่มีข้อมูล","item-text":"team_name","item-value":"id",label:"ทีม",outlined:"",clearable:"",dense:"","hide-details":""},model:{value:e.formData.user_team_id,callback:function(t){e.$set(e.formData,"user_team_id",t)},expression:"formData.user_team_id"}})],1)],1),e._v(" "),-1==e.user_group_permission?n(O.a,[n(f.a,{staticClass:"text-center",attrs:{xs:"12",sm:"12",md:"12",xl:"12"}},[n(o.a,{attrs:{color:"green",dark:""},on:{click:function(t){return e.add_row()}}},[n("span",[e._v(" ตำแหน่ง/สาขาย่อย "),n(v.a,[e._v("mdi-plus")])],1)])],1),e._v(" "),n(f.a,{attrs:{xs:"12",sm:"12",md:"12",xl:"12"}},e._l(e.formData.user_sub_groups,(function(t,o){return n(O.a,{key:o},[n(f.a,{attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"4"}},[n(r.a,{attrs:{id:"user_sub_group.user_group_id",name:"user_sub_group.user_group_id",items:t.user_groups,"item-text":"user_group_name","item-value":"id",label:"ตำแหน่ง",outlined:"",dense:"","no-data-text":"ไม่มีข้อมูล","hide-details":"",rules:e.rule},model:{value:t.user_group_id,callback:function(n){e.$set(t,"user_group_id",n)},expression:"user_sub_group.user_group_id"}})],1),e._v(" "),n(f.a,{attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"4"}},[n(r.a,{attrs:{id:"user_sub_group.branch_id",name:"user_sub_group.branch_id",items:t.branches,"item-text":"branch_name","item-value":"id",label:"สาขา",outlined:"",dense:"","no-data-text":"ไม่มีข้อมูล","hide-details":"",rules:e.rule},on:{change:function(n){return e.changeUser_teams_sub(t.branch_id,o)}},model:{value:t.branch_id,callback:function(n){e.$set(t,"branch_id",n)},expression:"user_sub_group.branch_id"}})],1),e._v(" "),3==t.user_group_id?n(f.a,{attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"4"}},[n(r.a,{attrs:{id:"user_sub_group.user_team_id",name:"user_sub_group.user_team_id",items:t.user_teams,"item-text":"team_name","item-value":"id",label:"ทีม",outlined:"",dense:"","no-data-text":"ไม่มีข้อมูล","hide-details":""},model:{value:t.user_team_id,callback:function(n){e.$set(t,"user_team_id",n)},expression:"user_sub_group.user_team_id"}})],1):e._e(),e._v(" "),n(f.a,{attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"4"}},[n(D.a,{attrs:{id:"user_sub_group.active",name:"user_sub_group.active",row:""},model:{value:t.active,callback:function(n){e.$set(t,"active",n)},expression:"user_sub_group.active"}},[[n("div",{staticClass:"mr-1"},[e._v("เปิดใช้:")])],e._v(" "),n(k.a,{attrs:{label:"ใช่",value:"1"}}),e._v(" "),n(k.a,{attrs:{label:"ไม่",color:"red",value:"2"}})],2)],1)],1)})),1)],1):e._e(),e._v(" "),n("br"),e._v(" "),n(D.a,{attrs:{id:"formData.user_active",name:"formData.user_active",row:""},model:{value:e.formData.user_active,callback:function(t){e.$set(e.formData,"user_active",t)},expression:"formData.user_active"}},[[n("div",{staticClass:"mr-1"},[e._v("อนุญาติให้เข้าใช้งานระบบ:")])],e._v(" "),n(k.a,{attrs:{label:"เปิดใช้งาน",value:"1"}}),e._v(" "),n(k.a,{attrs:{label:"ปิดการใช้งาน",color:"red",value:"2"}})],2),e._v(" "),n("div",{staticClass:"d-flex flex-column justify-center"},[n(h.a,{attrs:{accept:"image/jpeg,image/png,image/jpg","show-size":"",label:null==e.currentFile||null==e.imagePreviewURL?"เลือกรูปภาพ":"เลือกรูปใหม่"},on:{change:e.selectFile}}),e._v(" "),null!=e.currentFile||null!=e.imagePreviewURL||""!=e.currentFile||""!=e.imagePreviewURL?n(x.a,{attrs:{contain:"",height:"250px",width:"250px",src:e.imagePreviewURL}}):e._e()],1)],1)],1),e._v(" "),n(l.a,[n(j.a),e._v(" "),n(o.a,{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("cancleItem")}}},[e._v("ยกเลิก")]),e._v(" "),n(o.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:e.btnloading}},[e._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);