(window.webpackJsonp=window.webpackJsonp||[]).push([[284,134,138],{1093:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(202),c=n(190),l=n(149),d=n(424),f=n(979),h=n(177),m=n(422),v=n(435),x=n(9),w=(n(48),n(49),n(457)),_=n(677),y=n(432),O={components:{dialogNew:n(729).default},data:function(){return{user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),loading:!1,search:"",dialog:!1,id:"",repair_name:"",car_part_buy:"",formTitle:"Add",action:"add",headers:[{text:"ลำดับ",value:"no",align:"center"},{text:"เวลา",value:"created_at"},{text:"รหัสงานช่าง",value:"job_technician_id"},{text:"รายการซ่อม",value:"repair.repair_name"},{text:"ราคาประมาณ",value:"car_part_buy"},{text:"ราคาจริง",value:"price"},{text:"ซ่อมตอน",value:"typeRepair"},{text:"จัดการ",value:"actions",sortable:!1,width:"10%"}],data:[],dataCar:[],car_id:""}},mounted:function(){this.getDataCar()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{filterObject:function(t,e,n){return t.car_no.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1||t.car_regis.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},getDataCar:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.l();case 2:return n=e.sent,e.next=5,n.data;case 5:t.dataCar=e.sent;case 6:case"end":return e.stop()}}),e)})))()},selectSee:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.data=[],t.loading=!0,e.next=4,_.b(t.car_id);case 4:return n=e.sent,e.next=7,n.data;case 7:t.data=e.sent,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},editItem:function(t,e,n){var r=this;return Object(x.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r.formTitle="แก้ไขราคาซ่อมของงาน: J"+t,r.repair_name=e,r.car_part_buy=n,r.dialog=!0,r.id=t,r.action="edit";case 6:case"end":return o.stop()}}),o)})))()},addSuccess:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.selectSee(),y.k()}));case 2:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.selectSee(),y.j()}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=y.a(),n.next=3,r.then((function(n){1==n&&_.a(t).then(function(){var t=Object(x.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200==n.status?y.k():y.j(),e.$nextTick((function(){e.selectSee()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()}},watch:{data:function(){var t=this;return this.data.map((function(e){e.no=t.data.map((function(t){return t.id})).indexOf(e.id)+1}))}}},I=O,C=n(38),component=Object(C.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission||9==t.user_group_permission||11==t.user_group_permission?n("div",[n(c.a,[n(l.c,[n(d.a,{attrs:{cols:"5"}},[n(r.a,{attrs:{filter:t.filterObject,"no-data-text":"ไม่มีข้อมูล",items:t.dataCar,"item-text":"car_no","item-value":"id",label:"ค้นหาตามลำดับรถ",outlined:"",dense:"","hide-details":""},on:{change:t.selectSee},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v(" "+t._s(n.car_no)+" ("+t._s(n.car_regis)+") ")]}},{key:"item",fn:function(e){var n=e.item;return[t._v(" "+t._s(n.car_no)+" ("+t._s(n.car_regis)+") ")]}}],null,!1,2365672956),model:{value:t.car_id,callback:function(e){t.car_id=e},expression:"car_id"}})],1),t._v(" "),n(m.a),t._v(" "),n(d.a,{attrs:{cols:"3"}},[n(v.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),n(f.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.job_technician_id",fn:function(e){var n=e.item;return[t._v("\n        "+t._s("J"+n.job_technician_id)+"\n      ")]}},{key:"item.created_at",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(t.$moment(n.created_at).format("DD/MM/YYYY ( HH:mm น.)"))+"\n      ")]}},{key:"item.typeRepair",fn:function(e){var r=e.item;return[1==r.job_type?n("h5",{staticClass:"blue--text"},[t._v("ก่อนขาย")]):t._e(),t._v(" "),2==r.job_type?n("h5",{staticClass:"red--text"},[t._v("หลังขาย")]):t._e()]}},{key:"item.actions",fn:function(e){var r=e.item;return[n(o.a,{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id,r.repair.repair_name,r.car_part_buy)}}},[n(h.a,[t._v(" mdi-pencil ")])],1)]}}],null,!0)}),t._v(" "),n("dialogNew",{attrs:{dialog:t.dialog,id:t.id,action:t.action,formTitle:t.formTitle,repair_name:t.repair_name,car_part_buy:t.car_part_buy},on:{cancleItem:function(e){t.dialog=!1},success:function(e){return t.addSuccess()},error:function(e){return t.addError()}}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function h(t,e,n){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,f();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,e,n){"use strict";n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"o",(function(){return h})),n.d(e,"g",(function(){return m})),n.d(e,"p",(function(){return v})),n.d(e,"e",(function(){return x})),n.d(e,"d",(function(){return w})),n.d(e,"f",(function(){return _})),n.d(e,"k",(function(){return y})),n.d(e,"j",(function(){return O})),n.d(e,"i",(function(){return I})),n.d(e,"a",(function(){return j})),n.d(e,"n",(function(){return S})),n.d(e,"b",(function(){return D})),n.d(e,"h",(function(){return T})),n.d(e,"c",(function(){return P}));var r=n(9),o=(n(48),n(18),n(2)),c=n(200),l=n.n(c);n(262);function d(){o.default.swal({text:"ลำดับรถซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function f(){o.default.swal({text:"ทะเบียนหรือจังหวัดซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function h(){o.default.swal({title:"การแชร์ถูกยกเลิก !",text:"เนื่องจากรถยังไม่แสดงหน้าร้านหรือถูกขายออกไปแล้ว",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function m(){o.default.swal({text:"ชื่อผู้ใช้งานหรือรหัสผ่านผิด",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function v(){o.default.swal({text:"บัญชีนี้ไม่สามารถใช้งานฟังก์ชันนี้ได้",icon:"warning",confirmButtonText:"ตกลง",showCloseButton:!0})}function x(){o.default.swal({text:"ชื่อผู้ใช้งานซ้ำ",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function w(){o.default.swal({text:"รหัสลับซ้ำกัน",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function _(){o.default.swal({text:"คุณยังไม่ได้ไปรับอะไหล่",icon:"error",confirmButtonText:"ตกลง",showCloseButton:!0})}function y(){o.default.swal({position:"top-end",icon:"success",title:"สำเร็จ",showConfirmButton:!1,timer:1500})}function O(){o.default.swal({position:"top-end",icon:"error",title:"เกิดข้อผิดพลาด",showConfirmButton:!1,timer:1500})}function I(){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการเรียกคืน ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return B.apply(this,arguments)}function B(){return(B=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการลบ ?",text:"ลบไปแล้วไม่สามารถกู้ข้อมูลกลับมาได้",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ลบ"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ข้อมูลยังไม่ครบ",text:"กรุณาใส่ข้อมูลที่เป็นสีแดง",icon:"error",showCancelButton:!0,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return $.apply(this,arguments)}function $(){return($=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันการอัพเดตสถานะ",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return R.apply(this,arguments)}function R(){return(R=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ไม่สามารถปิดงานได้",text:"ยังมีรายการที่ทำไม่ครบ",icon:"error",showCancelButton:!1,showConfirmButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ยกเลิก",confirmButtonText:"ตกลง",showCloseButton:!0}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return L.apply(this,arguments)}function L(){return(L=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){t(o.default.swal({title:"ยืนยันรับรายการเข้าคลัง ?",text:"ทำการตรวจสอบข้อมูลครบเรียบร้อยแล้ว",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"ไม่",confirmButtonText:"ใช่"}).then((function(t){return t.isConfirmed})))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.default.use(l.a,{confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"})},436:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},454:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),o=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),c=n(435),l=n(50),d=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},457:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"p",(function(){return l})),n.d(e,"q",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"o",(function(){return x})),n.d(e,"s",(function(){return w})),n.d(e,"a",(function(){return _})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return I})),n.d(e,"f",(function(){return C})),n.d(e,"n",(function(){return j})),n.d(e,"h",(function(){return B})),n.d(e,"j",(function(){return S})),n.d(e,"r",(function(){return k}));var r=n(429),path="/api/car";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function f(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function h(){var t=r.a+"/api/SelectOnCarAll";return Object(r.b)("get",t,{})}function m(){var t=r.a+"/api/SelectAllCars";return Object(r.b)("get",t,{})}function v(){var t=r.a+"/api/SelectCarNo";return Object(r.b)("get",t,{})}function x(t){var e=r.a+"/api/StockOnCar";return Object(r.b)("post",e,t)}function w(t){var e=r.a+"/api/uploadImgCars";return Object(r.b)("post",e,t)}function _(t){var e=r.a+"/api/ImageCar/"+t;return Object(r.b)("post",e,{})}function y(t){var e=r.a+"/api/change_fist_img";return Object(r.b)("post",e,t)}function O(t){var e=r.a+"/api/deleteAllImgCar";return Object(r.b)("post",e,t)}function I(t){var e=r.a+"/api/deleteFolder";return Object(r.b)("post",e,t)}function C(t){var e=r.a+"/api/delete_img_car";return Object(r.b)("post",e,t)}function j(t){var e=r.a+"/api/showCar";return Object(r.b)("post",e,t)}function B(t,e){var n=r.a+"/api/getAllinfo/"+t+"/"+e;return Object(r.b)("get",n,{})}function S(t){var e=r.a+"/api/reRollCar/"+t;return Object(r.b)("get",e,{})}function k(){var t=r.a+"/api/update_amountPrice";return Object(r.b)("get",t,{})}},458:function(t,e,n){"use strict";var r=n(3),o=(n(36),n(28),n(151),n(8),n(74),n(5),n(6),n(10),n(11),n(4)),c=n(82),l=n(121),d=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},Object(d.s)(this))}})},677:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d}));var r=n(429),path="/api/repair_price";function o(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function l(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function d(t){var e=r.a+"/api/RepairPrice/"+t;return Object(r.b)("post",e,{})}},729:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n(190),c=n(149),l=n(424),d=n(428),f=n(426),h=n(458),m=n(191),v=n(423),x=n(422),w=n(435),_=n(46),y=n(9),O=(n(48),n(677)),I={props:["dialog","repair_name","car_part_buy","action","id","formTitle"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},dialogDeleteComponent:!1,rule:[function(t){return!!t||"กรุณาใส่ข้อมูล"}],repairName:"",carPartBuy:""}},mounted:function(){},methods:{onAction:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.$refs.form.validate()){n.next=11;break}if(e.btnloading=!0,e.formDataLoading=!0,"edit"!=e.action){n.next=11;break}return n.next=6,O.d(t,e.formData);case 6:r=n.sent,e.$refs.form.reset(),200==r.status?e.$emit("success"):e.$emit("error"),e.btnloading=!1,e.formDataLoading=!1;case 11:case"end":return n.stop()}}),n)})))()}},watch:{dialog:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dialogDeleteComponent=t.dialog,!t.dialogDeleteComponent){e.next=9;break}if("edit"!=t.action){e.next=9;break}return t.formDataLoading=!0,e.next=6,O.c(t.id);case 6:n=e.sent,t.$nextTick((function(){t.$refs.form.reset();var e=t;t.$nextTick(Object(y.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.data;case 2:e.formData=r.sent,e.repairName=t.repair_name,e.carPartBuy=t.car_part_buy;case 5:case"end":return r.stop()}}),r)}))))})),t.formDataLoading=!1;case 9:t.btnloading=!1;case 10:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},C=n(38),component=Object(C.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(d.a,[n(f.a,{attrs:{"max-width":"50%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n(o.a,[n(h.a,{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(e){return e.preventDefault(),t.onAction(t.formData.id)}}},[n(_.a,{attrs:{color:"primary",dark:"",flat:""}},[t._v("\n          "+t._s(t.formTitle)+"\n        ")]),t._v(" "),t.formDataLoading?n(m.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),n(c.b,[n(d.a,[n(v.a,[n(l.a,{attrs:{cols:"4"}},[n(w.a,{attrs:{autocomplete:"true",readonly:"",label:"รายการซ่อม","append-icon":"",id:"repairName",name:"repairName",outlined:"",dense:"","hide-details":""},model:{value:t.repairName,callback:function(e){t.repairName=e},expression:"repairName"}})],1),t._v(" "),n(l.a,{attrs:{cols:"4"}},[n(w.a,{attrs:{autocomplete:"true",readonly:"",label:"ราคาประมาณ","append-icon":"",id:"carPartBuy",name:"carPartBuy",outlined:"",dense:"","hide-details":""},model:{value:t.carPartBuy,callback:function(e){t.carPartBuy=e},expression:"carPartBuy"}})],1),t._v(" "),n(l.a,{attrs:{cols:"4"}},[n(w.a,{attrs:{autocomplete:"true",label:"ราคาที่คิด","append-icon":"",id:"formData.price",name:"formData.price",type:"number",outlined:"",dense:"","hide-details":""},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}})],1)],1)],1)],1),t._v(" "),n(c.a,[n(x.a),t._v(" "),n(r.a,{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")]),t._v(" "),n(r.a,{attrs:{type:"submit",color:"success darken-1",text:"",loading:t.btnloading}},[t._v("บันทึก\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);