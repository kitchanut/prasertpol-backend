(window.webpackJsonp=window.webpackJsonp||[]).push([[257,105,138],{1066:function(t,e,n){"use strict";n.r(e);var r=n(188),o=n(202),c=n(615),l=n(190),d=n(149),m=n(424),f=n(979),h=n(177),v=n(147),x=n(423),w=n(422),y=n(435),S=n(9),D=(n(48),n(49),n(519)),I=n(432),O=n(474),_=n(120),Y=n.n(_),k=n(493),C={components:{dialogImage:O.default,dateSelect2:k.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server",timeStart:Y()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:Y()().endOf("day").format("YYYY-MM-DD HH:mm"),toggle:"pedding",loading:!0,dialogImg:!1,imgUrl:"",dialog:!1,id:"",formTitle:"",action:"",user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),search:"",headers:[{text:"จัดการ",value:"actions",sortable:!1,width:"9%"},{text:"Line",value:"pictureUrl",align:"center",width:"12%"},{text:"เซล/สาขา",value:"sale_name",width:"15%"},{text:"ลำดับรถ",value:"car_no",width:"10%"},{text:"หมายเหตุ",value:"note"},{text:"รูปบัตร",value:"id_card",width:"8%"},{text:"วันแจ้ง",value:"created_at",width:"11%"}],data:[],count:[]}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{selectTimeStart:function(time){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.timeStart=time.timeStart,t.timeEnd=time.timeEnd,t.getData();case 3:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.countData(),(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),data.append("toggle",t.toggle),e.next=8,D.d(data);case 8:n=e.sent,t.data=n.data,t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},countData:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),e.next=5,D.b(data);case 5:n=e.sent,t.count=n.data;case 7:case"end":return e.stop()}}),e)})))()},showImg:function(t){this.dialogImg=!0,this.imgUrl=t},editItem:function(t){var e=this;return Object(S.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:D.g(t).then(function(){var t=Object(S.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nextTick((function(){e.getData()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})))()},cancleItem:function(t){var e=this;return Object(S.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.a(t);case 2:n.sent,e.getData();case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(S.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=I.a(),n.next=3,r.then((function(n){1==n&&D.c(t).then(function(){var t=Object(S.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nextTick((function(){e.getData()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),I.k()}));case 2:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),I.j()}));case 2:case"end":return e.stop()}}),e)})))()}},watch:{data:function(){return this.data.map((function(t,e){t.no=e+1}))}}},M=C,j=n(38),component=Object(j.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission?n("div",[n(l.a,[n(d.b,[n("dateSelect2",{on:{timeSelect:t.selectTimeStart}}),t._v(" "),n(x.a,{staticClass:"d-flex align-center"},[n(c.a,{staticClass:"ml-5",attrs:{mandatory:"",color:"primary"},on:{change:function(e){return t.getData()}},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[n(o.a,{attrs:{value:"pedding"}},[t._v("รอดำเนินการ ("+t._s(t.count.pedding)+")")]),t._v(" "),n(o.a,{attrs:{value:"approve"}},[t._v("ดำเนินการแล้ว ("+t._s(t.count.approve)+")")]),t._v(" "),n(o.a,{attrs:{value:"cancle"}},[t._v("ยกเลิก ("+t._s(t.count.cancle)+")")]),t._v(" "),n(o.a,{attrs:{value:"all"}},[t._v("ทั้งหมด ("+t._s(t.count.all)+")")])],1),t._v(" "),n(w.a),t._v(" "),n(m.a,[n(y.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":"",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),n(f.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:t._u([{key:"item.note",fn:function(e){var r=e.item;return[n("span",{staticStyle:{"white-space":"pre"}},[t._v(t._s(r.note))])]}},{key:"item.pictureUrl",fn:function(e){var c=e.item;return[n(o.a,{attrs:{icon:""}},[n(r.a,{attrs:{size:"40"},on:{click:function(e){return t.showImg(c.pictureUrl)}}},[n(v.a,{attrs:{src:c.pictureUrl}})],1)],1),t._v(" "),n("div",[t._v(t._s(c.displayName))])]}},{key:"item.sale_name",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(r.sale_name))]),t._v(" "),n("div",[t._v(t._s(r.branch_name))])]}},{key:"item.id_card",fn:function(e){var r=e.item;return[n(v.a,{attrs:{width:"50px",src:t.serverUrl+r.id_card},on:{click:function(e){return t.showImg(t.serverUrl+r.id_card)}}})]}},{key:"item.actions",fn:function(e){var r=e.item;return["pedding"==r.request_status?n(o.a,{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n(h.a,[t._v(" mdi-checkbox-blank-outline")])],1):"approve"==r.request_status?n(o.a,{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n(h.a,[t._v(" mdi-checkbox-outline")])],1):"cancle"==r.request_status?n(o.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n(h.a,[t._v(" mdi-arrow-u-left-top")])],1):t._e(),t._v(" "),"cancle"!=r.request_status?n(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.cancleItem(r.id)}}},[n(h.a,[t._v(" mdi-delete ")])],1):t._e(),t._v(" "),"cancle"==r.request_status?n(o.a,{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n(h.a,[t._v(" mdi-delete ")])],1):t._e()]}}],null,!0)})],1),t._v(" "),n("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(e){t.dialogImg=!1}}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function f(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,m();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,e,n){"use strict";n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return m})),n.d(e,"o",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"p",(function(){return v})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return w})),n.d(e,"f",(function(){return y})),n.d(e,"k",(function(){return S})),n.d(e,"j",(function(){return D})),n.d(e,"i",(function(){return I})),n.d(e,"a",(function(){return _})),n.d(e,"n",(function(){return k})),n.d(e,"b",(function(){return M})),n.d(e,"h",(function(){return B})),n.d(e,"c",(function(){return H}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),l=n.n(c);n(262);function d(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function f(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function y(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function S(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function D(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function I(){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return Y.apply(this,arguments)}function Y(){return(Y=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},436:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},445:function(t,e,n){var r=n(51),o=n(265),c=n(62);t.exports=function(t,e,n,l){var d=String(c(t)),m=d.length,f=void 0===n?" ":String(n),h=r(e);if(h<=m||""==f)return d;var v=h-m,x=o.call(f,Math.ceil(v/f.length));return x.length>v&&(x=x.slice(0,v)),l?x+d:d+x}},454:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),o=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),c=n(435),l=n(50),d=n(1);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},h),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},459:function(t,e,n){var r=n(17);r(r.S,"Math",{sign:n(263)})},465:function(t,e,n){"use strict";var r=n(17),o=n(445),c=n(264),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},474:function(t,e,n){"use strict";n.r(e);var r=n(190),o=n(428),c=n(426),l=n(9),d=(n(48),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogDeleteComponent=t.dialog;case 1:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),m=n(38),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(o.a,[n(c.a,{attrs:{width:"600px"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n(r.a,[n("img",{attrs:{width:"600px",height:"auto",src:t.imgUrl}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(424),c=n(633),l=n(412),d=n(423),m=n(435),f=n(9),h=(n(48),n(120)),v=n.n(h),x={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:v()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:v()().endOf("day").format("YYYY-MM-DD HH:mm")}},mounted:function(){},methods:{returnDate:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("timeSelect",{timeStart:t.timeStart,timeEnd:t.timeEnd});case 1:case"end":return e.stop()}}),e)})))()},changeSelectTime:function(t){var e=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==t?(e.timeStart=v()().startOf("day").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):2==t?(e.timeStart=v()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==t?(e.timeStart=v()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):4==t?(e.timeStart=v()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):5==t?(e.timeStart=v()().startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("months").format("YYYY-MM-DD HH:mm")):6==t?(e.timeStart=v()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==t?(e.timeStart=v()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):8==t?(e.timeStart=v()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):9==t?(e.timeStart=v()().startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):10==t&&(e.timeStart=v()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")),e.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},w=n(38),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(d.a,{staticClass:"py-2"},[n(o.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{items:t.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectTime},model:{value:t.selectTime,callback:function(e){t.selectTime=e},expression:"selectTime"}})],1),t._v(" "),n(o.a,{attrs:{cols:"4"}},[n(l.a,{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(m.a,t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),t._v(" "),n(o.a,{attrs:{cols:"4"}},[n(l.a,{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(m.a,t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},519:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return h}));var r=n(429),path="/api/request_update";function o(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function l(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function m(t){var e=r.a+path+"/cancle/"+t;return Object(r.b)("delete",e,{})}function f(t){var e=r.a+path+"/indexCustom";return Object(r.b)("post",e,t)}function h(t){var e=r.a+path+"/countData";return Object(r.b)("post",e,t)}},525:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("01907af4",content,!0,{sourceMap:!1})},526:function(t,e,n){var r=n(12)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},615:function(t,e,n){"use strict";n(5),n(6),n(8),n(10),n(11);var r=n(3),o=(n(525),n(204)),c=n(22),l=n(4);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(o.a,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,m({},o.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})}}]);