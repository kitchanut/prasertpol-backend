(window.webpackJsonp=window.webpackJsonp||[]).push([[226,100,104],{459:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(14),o=(n(56),n(108)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function h(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,m();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},464:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},465:function(t,e,n){var r=n(11)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},468:function(t,e,n){var r=n(58),o=n(272),c=n(69);t.exports=function(t,e,n,l){var d=String(c(t)),m=d.length,h=void 0===n?" ":String(n),f=r(e);if(f<=m||""==h)return d;var v=f-m,x=o.call(h,Math.ceil(v/h.length));return x.length>v&&(x=x.slice(0,v)),l?x+d:d+x}},473:function(t,e,n){"use strict";n(6),n(7),n(9),n(10);var r=n(2),o=(n(39),n(8),n(83),n(160),n(33),n(23),n(464),n(440)),c=n(84),l=n(30),d=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},478:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return select}));var r=n(459),path="/api/branches";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function m(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBranches";return Object(r.b)("get",t,{})}},487:function(t,e,n){var r=n(20);r(r.S,"Math",{sign:n(273)})},489:function(t,e,n){"use strict";var r=n(20),o=n(468),c=n(271),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},497:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(56),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogDeleteComponent=t.dialog;case 1:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),c=n(42),l=n(51),d=n.n(l),m=n(191),h=n(458),f=n(452),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-dialog",{attrs:{width:"600px"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[n("v-card",[n("img",{attrs:{width:"600px",height:"auto",src:t.imgUrl}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:m.a,VContainer:h.a,VDialog:f.a})},517:function(t,e,n){"use strict";n.d(e,"j",(function(){return o})),n.d(e,"k",(function(){return c})),n.d(e,"i",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"l",(function(){return m})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"h",(function(){return x})),n.d(e,"b",(function(){return S})),n.d(e,"f",(function(){return _})),n.d(e,"g",(function(){return y}));var r=n(459),path="/api/outlaycost";function o(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function l(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function d(t){var e=r.a+"/api/outlaycost_where";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/uploadFile_outlay";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/delete_uploadFile_outlay";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/cancle_uploadFile_outlay";return Object(r.b)("post",e,t)}function v(t){var e=r.a+"/api/delete_outlay/"+t;return Object(r.b)("get",e,{})}function x(t){var e=r.a+"/api/report_withdraw_money";return Object(r.b)("post",e,t)}function S(t){var e=r.a+"/api/comfirm_outlay/"+t;return Object(r.b)("get",e,{})}function _(t){var e=r.a+"/api/outlaycost_car";return Object(r.b)("post",e,t)}function y(t){var e=r.a+"/api/outlaycost_getwithTime";return Object(r.b)("post",e,t)}},549:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(56),n(130)),c=n.n(o),l=n(478),d={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:c()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:c()().endOf("day").format("YYYY-MM-DD HH:mm"),branches:[],branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getBranches()},methods:{returnDate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("tineSelect",{branch_id:t.branch_id,timeStart:t.timeStart,timeEnd:t.timeEnd});case 1:case"end":return e.stop()}}),e)})))()},getBranches:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.c();case 2:return n=e.sent,t.branches=n.data,t.branches.push({id:0,branch_name:"ทั้งหมด"}),e.next=7,t.returnDate();case 7:case"end":return e.stop()}}),e)})))()},changeSelectTime:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==t?(e.timeStart=c()().startOf("day").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):2==t?(e.timeStart=c()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==t?(e.timeStart=c()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):4==t?(e.timeStart=c()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):5==t?(e.timeStart=c()().startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("months").format("YYYY-MM-DD HH:mm")):6==t?(e.timeStart=c()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==t?(e.timeStart=c()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):8==t?(e.timeStart=c()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):9==t?(e.timeStart=c()().startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):10==t&&(e.timeStart=c()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")),e.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},m=n(42),h=n(51),f=n.n(h),v=n(473),x=n(451),S=n(929),_=n(200),y=n(455),D=n(84),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pa-2"},[n("v-col",{directives:[{name:"show",rawName:"v-show",value:2!=t.user_group_permission,expression:"user_group_permission == 2 ? false : true"}],attrs:{cols:"3"}},[n("v-autocomplete",{attrs:{items:t.branches,"item-text":"branch_name","item-value":"id",label:"สาขา","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":""},on:{change:t.returnDate},model:{value:t.branch_id,callback:function(e){t.branch_id=e},expression:"branch_id"}})],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-autocomplete",{attrs:{items:t.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectTime},model:{value:t.selectTime,callback:function(e){t.selectTime=e},expression:"selectTime"}})],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n("v-date-picker",{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n("v-date-picker",{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAutocomplete:v.a,VCol:x.a,VDatePicker:S.a,VMenu:_.a,VRow:y.a,VTextField:D.a})},998:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(56),n(39),n(517)),c=n(497),l={components:{dateSelect:n(549).default,dialogImage:c.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server",loading:!0,search:"",branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),headers:[{text:"ไฟล์",value:"file"},{text:"วันที่",value:"date",width:"15%"},{text:"เลขธุรกรรม",value:"no"},{text:"ร้าน",value:"shop"},{text:"รายการ",value:"detail"},{text:"ลำดับรถ",value:"car.car_no"},{text:"หักเงิน",value:"broken"},{text:"ประเภท",value:"type"},{text:"บิล",value:"type_bill"},{text:"จำนวนเงิน",value:"money"},{text:"สาขา",value:"branch.branch_name"},{text:"โดย",value:"user.first_name"},{text:"สถานะ",value:"status_check"}],data:[],imgUrl:"",dialogImg:!1}},mounted:function(){},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{selectTimeStart:function(time){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.branch_id=time.branch_id,t.timeStart=time.timeStart,t.timeEnd=time.timeEnd,e.next=5,t.getData();case 5:case"end":return e.stop()}}),e)})))()},showImg:function(t){this.dialogImg=!0,this.imgUrl=t},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.data=[],(data=new FormData).append("branch_id",t.branch_id),data.append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),e.next=7,o.h(data);case 7:return n=e.sent,e.next=10,n.data;case 10:t.data=e.sent,t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()}},watch:{}},d=n(42),m=n(51),h=n.n(m),f=n(196),v=n(210),x=n(191),S=n(451),_=n(930),y=n(156),D=n(455),I=n(456),Y=n(84),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission||2==t.user_group_permission||8==t.user_group_permission||9==t.user_group_permission||10==t.user_group_permission||11==t.user_group_permission?n("div",[n("v-card",[n("div",[n("v-row",[n("v-col",{attrs:{cols:"10"}},[n("dateSelect",{on:{tineSelect:t.selectTimeStart}})],1)],1),t._v(" "),n("v-row",[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.file",fn:function(e){var r=e.item;return[null==r.file?n("div",[n("span",[t._v("-")])]):n("div",[n("v-btn",{attrs:{icon:""}},[n("v-avatar",{attrs:{size:"40"},on:{click:function(e){return t.showImg(t.serverUrl+r.file)}}},[n("v-img",{attrs:{src:t.serverUrl+r.file}})],1)],1)],1)]}},{key:"item.date",fn:function(e){var r=e.item;return[n("span",[t._v("\n            "+t._s(t.$moment(r.date).format("DD/MM/YYYY"))+"\n          ")])]}},{key:"item.money",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.type",fn:function(e){return[1==e.item.type?n("span",[t._v("ตัวรถ")]):n("span",[t._v("อื่น ๆ")])]}},{key:"item.broken",fn:function(e){return[1==e.item.broken?n("span",[t._v("ไม่")]):n("span",[t._v("หัก")])]}},{key:"item.type_bill",fn:function(e){return[1==e.item.type_bill?n("span",[t._v("เงินสด")]):n("span",[t._v("ใบกำกับภาษี")])]}},{key:"item.status_check",fn:function(e){return[1==e.item.status_check?n("span",{staticStyle:{color:"green"}},[t._v("เช็คแล้ว")]):n("span",{staticStyle:{color:"red"}},[t._v("ยังไม่เช็ค")])]}}],null,!0)}),t._v(" "),n("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(e){t.dialogImg=!1}}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAvatar:f.a,VBtn:v.a,VCard:x.a,VCol:S.a,VDataTable:_.a,VImg:y.a,VRow:D.a,VSpacer:I.a,VTextField:Y.a})}}]);