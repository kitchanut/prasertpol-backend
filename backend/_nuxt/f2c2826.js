(window.webpackJsonp=window.webpackJsonp||[]).push([[218,100],{459:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m}));var r=n(14),o=(n(56),n(108)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,h();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},464:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},465:function(t,e,n){var r=n(11)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},473:function(t,e,n){"use strict";n(6),n(7),n(9),n(10);var r=n(2),o=(n(39),n(8),n(83),n(160),n(33),n(23),n(464),n(440)),c=n(84),l=n(30),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},528:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return f}));var r=n(459),path="/api/technician";function o(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function l(t){var e=r.a+"/api/SelectOnJob/"+t;return Object(r.b)("post",e,{})}function d(t,e){var n=r.a+"/api/updateOnJob/"+t+"/"+e;return Object(r.b)("post",n,{})}function h(t,e){var n=r.a+"/api/checkTechnician/"+t+"/"+e;return Object(r.b)("post",n,{})}function m(t){var e=r.a+"/api/JobTechnicianWhere";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/JobTechnicianWhereCar/"+t;return Object(r.b)("post",e,{})}},606:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));var r=n(459);function o(t){var e=r.a+"/api/transition_cars";return Object(r.b)("post",e,t)}function c(t){var e=r.a+"/api/car_regis/"+t;return Object(r.b)("post",e,{})}function l(t){var e=r.a+"/api/transition_car_where/"+t;return Object(r.b)("post",e,{})}},653:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(459);function o(t){var e=r.a+"/api/transition_repair_where/"+t;return Object(r.b)("post",e,{})}},990:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(56),n(39),n(606)),c=n(653),l=n(528),d={data:function(){return{user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),loading:!1,search:"",waitingPushdata:!0,id:"",formTitle:"Add",action:"add",idJob:"",headers:[{text:"ลำดับ",value:"no",align:"center"},{text:"เวลา",value:"timer"},{text:"รหัสงานช่าง",value:"job_technician_id"},{text:"รายการซ่อม",value:"repair.repair_name"},{text:"ลิฟท์ซ่อม",value:"car_lift.carlift_name"},{text:"งานของ",value:"repair_type"},{text:"พนักงานซ่อม",value:"user.first_name"},{text:"ซ่อมตอน",value:"typeRepair"},{text:"สถานะ",value:"work_status"}],headersTwo:[{text:"ลิฟท์ซ่อม",value:"car_lift.carlift_name"},{text:"งานของ",value:"repair_type"},{text:"พนักงานซ่อม",value:"user.first_name"},{text:"สั่ง",value:"created_at",width:"8%"},{text:"เริ่ม",value:"job_start",width:"8%"},{text:"พัก",value:"job_pasue",width:"8%"},{text:"เสร็จ",value:"job_end",width:"8%"},{text:"ยกเลิก",value:"job_cancel",width:"9%"},{text:"สถานะ",value:"job_status",width:"10%"}],branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),data:[],dataCar:[],dataHistory:[]}},mounted:function(){this.getDataCar(),this.loading=!1},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getDataCar:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a(t.branch_id);case 2:return n=e.sent,e.next=5,n.data;case 5:t.dataCar=e.sent,t.waitingPushdata=!1;case 7:case"end":return e.stop()}}),e)})))()},selectSee:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.data=[],e.dataHistory=[],e.loading=!0,e.waitingPushdata=!0,n.next=6,l.d(t);case 6:return r=n.sent,n.next=9,r.data;case 9:e.data=n.sent,e.loading=!1,e.waitingPushdata=!1;case 12:case"end":return n.stop()}}),n)})))()},seeHistoryTime:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.idJob="",e.dataHistory=[],n.next=4,c.a(t);case 4:return r=n.sent,n.next=7,r.data;case 7:return e.dataHistory=n.sent,n.next=10,t;case 10:e.idJob=n.sent;case 11:case"end":return n.stop()}}),n)})))()}},watch:{data:function(){var t=this;return this.data.map((function(e){e.no=t.data.map((function(t){return t.id})).indexOf(e.id)+1}))}}},h=n(42),m=n(51),f=n.n(m),v=n(473),_=n(210),x=n(191),y=n(158),I=n(451),j=n(930),S=n(456),w=n(84),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission||9==t.user_group_permission||11==t.user_group_permission?n("div",[n("v-card",[n("v-card-title",[n("v-col",{attrs:{cols:"5"}},[n("v-autocomplete",{attrs:{disabled:t.waitingPushdata,"no-data-text":"ไม่มีข้อมูล",items:t.dataCar,"item-text":"car_no","item-value":"id",label:"ค้นหาตามลำดับรถ",outlined:"",dense:"","hide-details":""},on:{change:t.selectSee},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v("\n              ลำดับ: "+t._s(n.car_no)+" ( "+t._s(n.car_regis)+" )\n            ")]}},{key:"item",fn:function(e){var n=e.item;return[t._v("\n              ลำดับ: "+t._s(n.car_no)+" ( "+t._s(n.car_regis)+" )\n            ")]}}],null,!1,421375324)})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.job_technician_id",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{"x-small":"",color:"blue",dark:""},on:{click:function(e){return t.seeHistoryTime(r.id)}}},[t._v("\n            "+t._s("J"+r.id)+"\n          ")])]}},{key:"item.repair_type",fn:function(e){var r=e.item;return[4==r.repair_type?n("h5",[t._v("ช่าง")]):t._e(),t._v(" "),5==r.repair_type?n("h5",[t._v("บิ้ว")]):t._e()]}},{key:"item.timer",fn:function(e){var r=e.item;return[1==r.job_status?n("div",[n("h5",[t._v("\n              "+t._s(t.$moment(r.created_at).format("DD/MM/YYYY ( HH:mm น.)"))+"\n            ")])]):t._e(),t._v(" "),2==r.job_status?n("div",[n("h5",[t._v("\n              "+t._s(t.$moment(r.job_start).format("DD/MM/YYYY ( HH:mm น.)"))+"\n            ")])]):t._e(),t._v(" "),3==r.job_status?n("div",[n("h5",[t._v("\n              "+t._s(t.$moment(r.job_pasue).format("DD/MM/YYYY ( HH:mm น.)"))+"\n            ")])]):t._e(),t._v(" "),4==r.job_status?n("div",[n("h5",[t._v("\n              "+t._s(t.$moment(r.job_end).format("DD/MM/YYYY ( HH:mm น.)"))+"\n            ")])]):t._e(),t._v(" "),5==r.job_status?n("div",[n("h5",[t._v("\n              "+t._s(t.$moment(r.job_cancel).format("DD/MM/YYYY ( HH:mm น.)"))+"\n            ")])]):t._e()]}},{key:"item.typeRepair",fn:function(e){var r=e.item;return[1==r.job_type?n("h5",{staticClass:"blue--text"},[t._v("ก่อนขาย")]):t._e(),t._v(" "),2==r.job_type?n("h5",{staticClass:"red--text"},[t._v("หลังขาย")]):t._e()]}},{key:"item.work_status",fn:function(e){var r=e.item;return["1"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("รอเริ่มงาน")]):t._e(),t._v(" "),"2"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"blue",dark:""}},[t._v("กำลังซ่อม")]):t._e(),t._v(" "),"3"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("พักงาน")]):t._e(),t._v(" "),"4"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"success",dark:""}},[t._v("ทำเสร็จแล้ว")]):t._e(),t._v(" "),"5"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ยกเลิก")]):t._e()]}}],null,!0)})],1),t._v(" "),n("br"),t._v(" "),""!=t.idJob?n("v-card",[n("v-card-title",[n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"text-center"},[t._v("รายละเอียดการซ่อมของ J"+t._s(t.idJob))])])],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headersTwo,items:t.dataHistory,"items-per-page":10,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.repair_type",fn:function(e){var r=e.item;return[4==r.repair_type?n("h5",[t._v("ช่าง")]):t._e(),t._v(" "),5==r.repair_type?n("h5",[t._v("บิ้ว")]):t._e()]}},{key:"item.created_at",fn:function(e){var r=e.item;return[1==r.job_status?n("h5",[t._v("\n            "+t._s(t.$moment(r.created_at).format("DD/MM/YYYY ( HH:mm น.)"))+"\n          ")]):t._e()]}},{key:"item.job_start",fn:function(e){var r=e.item;return[2==r.job_status?n("h5",[t._v("\n            "+t._s(t.$moment(r.job_start).format("DD/MM/YYYY ( HH:mm น.)"))+"\n          ")]):t._e()]}},{key:"item.job_pasue",fn:function(e){var r=e.item;return[3==r.job_status?n("h5",[t._v("\n            "+t._s(t.$moment(r.job_pasue).format("DD/MM/YYYY ( HH:mm น.)"))+"\n          ")]):t._e()]}},{key:"item.job_end",fn:function(e){var r=e.item;return[4==r.job_status?n("h5",[t._v("\n            "+t._s(t.$moment(r.job_end).format("DD/MM/YYYY ( HH:mm น.)"))+"\n          ")]):t._e()]}},{key:"item.job_cancel",fn:function(e){var r=e.item;return[5==r.job_status?n("h5",[t._v("\n            "+t._s(t.$moment(r.job_cancel).format("DD/MM/YYYY ( HH:mm น.)"))+"\n          ")]):t._e()]}},{key:"item.job_status",fn:function(e){var r=e.item;return["1"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("รอเริ่มงาน")]):t._e(),t._v(" "),"2"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"blue",dark:""}},[t._v("กำลังซ่อม")]):t._e(),t._v(" "),"3"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("พักงาน")]):t._e(),t._v(" "),"4"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"success",dark:""}},[t._v("ทำเสร็จแล้ว")]):t._e(),t._v(" "),"5"==r.job_status?n("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("ยกเลิก")]):t._e()]}}],null,!0)})],1):t._e()],1):t._e()}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAutocomplete:v.a,VBtn:_.a,VCard:x.a,VCardTitle:y.c,VCol:I.a,VDataTable:j.a,VSpacer:S.a,VTextField:w.a})}}]);