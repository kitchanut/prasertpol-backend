(window.webpackJsonp=window.webpackJsonp||[]).push([[219,100],{459:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(14),o=(n(56),n(108)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function f(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,m();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},464:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},465:function(t,e,n){var r=n(11)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},468:function(t,e,n){var r=n(58),o=n(272),c=n(69);t.exports=function(t,e,n,l){var d=String(c(t)),m=d.length,f=void 0===n?" ":String(n),h=r(e);if(h<=m||""==f)return d;var v=h-m,_=o.call(f,Math.ceil(v/f.length));return _.length>v&&(_=_.slice(0,v)),l?_+d:d+_}},473:function(t,e,n){"use strict";n(6),n(7),n(9),n(10);var r=n(2),o=(n(39),n(8),n(83),n(160),n(33),n(23),n(464),n(440)),c=n(84),l=n(30),d=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},h),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},481:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return select}));var r=n(459),path="/api/car_model";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function m(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnCarModel";return Object(r.b)("get",t,{})}},487:function(t,e,n){var r=n(20);r(r.S,"Math",{sign:n(273)})},489:function(t,e,n){"use strict";var r=n(20),o=n(468),c=n(271),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},490:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"f",(function(){return m})),n.d(e,"c",(function(){return select})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return h}));var r=n(459),path="/api/car_series";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function m(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnCarSeries";return Object(r.b)("get",t,{})}function f(t,e){var n=r.a+"/api/SelectOnCarSerie/"+t+"/"+e;return Object(r.b)("post",n,{})}function h(t){var e=r.a+"/api/SelectOnCarSerieOnly/"+t;return Object(r.b)("post",e,{})}},498:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"e",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return select}));var r=n(459),path="/api/car_serie_sub";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function m(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function f(){var t=r.a+"/api/SelectOnCarSerieSubs";return Object(r.b)("get",t,{})}function select(t){var e=r.a+"/api/SelectOnCarSerieSub/"+t;return Object(r.b)("post",e,{})}},521:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(56),n(130)),c=n.n(o),l={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:c()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:c()().endOf("day").format("YYYY-MM-DD HH:mm")}},mounted:function(){},methods:{returnDate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("timeSelect",{timeStart:t.timeStart,timeEnd:t.timeEnd});case 1:case"end":return e.stop()}}),e)})))()},changeSelectTime:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==t?(e.timeStart=c()().startOf("day").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):2==t?(e.timeStart=c()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==t?(e.timeStart=c()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):4==t?(e.timeStart=c()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):5==t?(e.timeStart=c()().startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("months").format("YYYY-MM-DD HH:mm")):6==t?(e.timeStart=c()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==t?(e.timeStart=c()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):8==t?(e.timeStart=c()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):9==t?(e.timeStart=c()().startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")):10==t&&(e.timeStart=c()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=c()().endOf("day").format("YYYY-MM-DD HH:mm")),e.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},d=n(42),m=n(51),f=n.n(m),h=n(473),v=n(451),_=n(929),x=n(200),S=n(455),y=n(84),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"py-2"},[n("v-col",{attrs:{cols:"4"}},[n("v-autocomplete",{attrs:{items:t.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectTime},model:{value:t.selectTime,callback:function(e){t.selectTime=e},expression:"selectTime"}})],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n("v-date-picker",{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n("v-date-picker",{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAutocomplete:h.a,VCol:v.a,VDatePicker:_.a,VMenu:x.a,VRow:S.a,VTextField:y.a})},586:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return h}));var r=n(459);function o(t){var e=r.a+"/api/booking_car";return Object(r.b)("post",e,t)}function c(t){var e=r.a+"/api/report_purchase_car";return Object(r.b)("post",e,t)}function l(t){var e=r.a+"/api/report_sale_car";return Object(r.b)("post",e,t)}function d(t){var e=r.a+"/api/report_work_cancle";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/report_booking_duplicate";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/report_profit";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/report_commission";return Object(r.b)("post",e,t)}},991:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(56),n(39),n(8),n(586)),c=n(481),l=n(490),d=n(498),m=n(130),f=n.n(m),h={components:{dateSelect2:n(521).default},data:function(){return{loading:!1,dialogFilter:!1,timeStart:f()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:f()().endOf("day").format("YYYY-MM-DD HH:mm"),search:"",dialogAllInfoCar:!1,formTitleAllInfoCar:"ภาพรวมลำดับรถ",data:[],data_filter:[],car_model_id:null,car_serie_id:null,car_serie_sub_id:null,year_start:null,year_end:null,carModel:[],carSerie:[],carSerieSub:[],years:[],headers:[{text:"วันที่ปล่อยรถ",value:"contract.contract_date"},{text:"ลำดับ",value:"cars.car_no",align:"center",class:"textOneLine"},{text:"สาขา",value:"branch.branch_name",class:"textOneLine"},{text:"รายละเอียดรถ",value:"car_detail",class:"textOneLine"},{text:"รายรับ",value:"income_sum",class:"textOneLine",align:"right"},{text:"ค่าตัวรถ",value:"expenses_car",class:"textOneLine",align:"right"},{text:"ค่าดำเนินการ",value:"cars.amount_overCost",class:"textOneLine",align:"right"},{text:"ค่าใช้จ่าย",value:"expenses_without_car_sum",class:"textOneLine",align:"right"},{text:"รวมรายจ่าย",value:"expenses_sum",class:"textOneLine",align:"right"},{text:"กำไร/ขาดทุน",value:"profitOrLoss",class:"textOneLine",align:"right"}]}},mounted:function(){this.getData(),this.getCarmodels(),this.getYearCurrent()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{selectTimeStart:function(time){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.timeStart=time.timeStart,t.timeEnd=time.timeEnd,t.getData();case 3:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),e.next=6,o.d(data);case 6:n=e.sent,console.log(n.data),t.data=n.data,t.data_filter=t.data,t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},getCarmodels:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c();case 2:n=e.sent,t.carModel=n.data,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},eventSelectModel:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getCarseries(),t.car_serie_id=null;case 2:case"end":return e.stop()}}),e)})))()},getCarseries:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.e(t.car_model_id);case 2:n=e.sent,t.carSerie=n.data;case 4:case"end":return e.stop()}}),e)})))()},getCarSerieSub:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.c(t.car_serie_id);case 2:n=e.sent,t.carSerieSub=n.data;case 4:case"end":return e.stop()}}),e)})))()},filterData:function(){var t=this;console.log(this.car_model_id),this.data_filter=this.data.filter((function(e){return!t.car_model_id||e.cars.car_models_id==t.car_model_id})).filter((function(e){return!t.car_serie_id||e.cars.car_serie_id==t.car_serie_id})).filter((function(e){return!t.car_serie_sub_id||e.cars.car_serie_sub_id==t.car_serie_sub_id})).filter((function(e){return!t.year_start&&!t.year_end||(t.year_start&&!t.year_end?e.cars.car_year>=t.year_start:!t.year_start&&t.year_end?e.cars.car_year<=t.year_end&&null!=e.cars.car_year:e.cars.car_year>=t.year_start&&e.cars.car_year<=t.year_end)}))},getYearCurrent:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=(new Date).getFullYear(),r=n-50,i=n;i>=r;i--)t.years.push(i);t.$nextTick((function(){t.years.push(9999)}));case 4:case"end":return e.stop()}}),e)})))()},AllInfoCar:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=n.$router.resolve({name:"infocar-infocar",query:{id:t,formTitleAllInfoCar:e}}),window.open(o.href,"_blank");case 2:case"end":return r.stop()}}),r)})))()},handleDownload:function(){for(var t=this,e=[],r=0;r<this.tHeader.length;r++)e.push(this.headers[r].value);this.$nextTick((function(){Promise.all([n.e(5),n.e(6)]).then(n.bind(null,928)).then((function(n){var r=t.tHeader,o=t.data,data=t.formatJson(e,o);n.export_json_to_excel({header:r,data:data,filename:"รายงานกำไรขาดทุน ("+f()().format("DD/MM/YYYY ( HH:mm น.)")+")",autoWidth:!0,bookType:"xlsx"})}))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){}))}))}},watch:{data:function(){return this.data.map((function(t){var e=t.income.reduce((function(t,e){return t+e.money}),0),n=t.sum_over_all_expenses.reduce((function(t,e){return t+e.money}),0);t.profitOrLoss=e-n,t.income_sum=t.income.reduce((function(t,e){return t+e.money}),0),t.expenses_without_car_sum=t.expenses_without_car.reduce((function(t,e){return t+e.money}),0),t.expenses_sum=t.sum_over_all_expenses.reduce((function(t,e){return t+e.money}),0),t.car_detail="<div>ยี่ห้อ: "+t.cars.car_models.car_model_name+"</div><div>รุ่น: "+t.cars.car_series.car_series_name+"</div><div>รุ่นย่อย: "+t.cars.car_serie_sub.car_serie_sub_name+"</div><div>ปี: "+t.cars.car_year+"</div><div>สี: "+t.cars.color.color_name+"</div>"}))}}},v=n(42),_=n(51),x=n.n(_),S=n(473),y=n(210),D=n(191),O=n(158),Y=n(451),w=n(930),I=n(452),M=n(198),k=n(86),H=n(147),j=n(455),C=n(440),T=n(456),F=n(84),E=n(50),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-text",[n("v-row",{staticClass:"d-flex align-center"},[n("v-col",[n("v-dialog",{attrs:{width:"550"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"blur",rawName:"v-blur"}],staticClass:"ml-2",staticStyle:{"min-width":"0px",padding:"0 8px"},attrs:{color:null!=t.car_serie_id||null!=t.car_model_id||null!=t.car_serie_sub_id||null!=t.year_start||null!=t.year_end?"warning":""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-filter-variant")])],1)]}}]),model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[t._v(" "),n("v-card",[n("v-toolbar",{staticStyle:{"font-size":"20px"},attrs:{color:"warning",dark:"",flat:"",dense:"",height:"6"}}),t._v(" "),n("v-fab-transition",[n("v-btn",{staticStyle:{top:"10px",right:"10px"},attrs:{icon:"",absolute:"",fab:"",small:""},on:{click:function(e){t.dialogFilter=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("h3",{staticClass:"text-center",staticStyle:{"font-size":"22px",margin:"10px"}},[t._v("\n                กรองข้อมูล\n              ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"mt-5"},[n("v-row",{staticClass:"d-flex align-center mt-3",attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{"font-size":"16px"},attrs:{cols:"4"}},[t._v("ยี่ห้อรถ:")]),t._v(" "),n("v-col",[n("v-autocomplete",{attrs:{items:t.carModel,"item-text":"car_model_name","item-value":"id",outlined:"",dense:"","hide-details":"",clearable:""},on:{change:function(e){t.filterData(),t.eventSelectModel()}},model:{value:t.car_model_id,callback:function(e){t.car_model_id=e},expression:"car_model_id"}})],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex align-center mt-3",attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{"font-size":"16px"},attrs:{cols:"4"}},[t._v("รุ่นรถ:")]),t._v(" "),n("v-col",[n("v-autocomplete",{attrs:{items:t.carSerie,"item-text":"car_series_name","item-value":"id",outlined:"",dense:"","hide-details":"false",clearable:""},on:{change:function(e){t.filterData(),t.getCarSerieSub()}},model:{value:t.car_serie_id,callback:function(e){t.car_serie_id=e},expression:"car_serie_id"}})],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex align-center mt-3",attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{"font-size":"16px"},attrs:{cols:"4"}},[t._v("รุ่นย่อย:")]),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-autocomplete",{attrs:{items:t.carSerieSub,"item-text":"car_serie_sub_name","item-value":"id",outlined:"",dense:"","hide-details":"false",clearable:""},on:{change:function(e){return t.filterData()}},model:{value:t.car_serie_sub_id,callback:function(e){t.car_serie_sub_id=e},expression:"car_serie_sub_id"}})],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex align-center mt-3",attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{"font-size":"16px"},attrs:{cols:"4"}},[t._v("รุ่นปี ค.ศ. :")]),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-row",{staticClass:"d-flex align-center",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"5"}},[n("v-select",{attrs:{items:t.years,outlined:"",dense:"","hide-details":"false",clearable:""},on:{change:function(e){return t.filterData()}},model:{value:t.year_start,callback:function(e){t.year_start=e},expression:"year_start"}})],1),t._v(" "),n("v-col",{staticStyle:{"font-size":"16px"},attrs:{cols:"2 text-center"}},[t._v("-")]),t._v(" "),n("v-col",{attrs:{cols:"5"}},[n("v-select",{attrs:{items:t.years,outlined:"",dense:"","hide-details":"false",clearable:""},on:{change:function(e){return t.filterData()}},model:{value:t.year_end,callback:function(e){t.year_end=e},expression:"year_end"}})],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"warning",text:""},on:{click:function(e){t.car_serie_id=null,t.car_model_id=null,t.car_serie_sub_id=null,t.year_start=null,t.year_end=null,t.filterData()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-replay")]),t._v("ล้างข้อมูล\n                ")],1)],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"7"}},[n("dateSelect2",{on:{timeSelect:t.selectTimeStart}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":"",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),n("br"),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.data_filter,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","mobile-breakpoint":0,"multi-sort":!0,"footer-props":{"items-per-page-options":[5,10,20,50,100,-1]}},scopedSlots:t._u([{key:"item.car_detail",fn:function(e){var r=e.item;return[n("div",{domProps:{innerHTML:t._s(r.car_detail)}})]}},{key:"item.cars.car_no",fn:function(e){var r=e.item;return[n("a",{attrs:{small:"",color:"primary"},on:{click:function(e){return t.AllInfoCar(r.cars.id,r.cars.car_no)}}},[t._v(t._s(r.cars.car_no))])]}},{key:"item.income_sum",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.income_sum).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.expenses_without_car_sum",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.expenses_without_car_sum).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.cars.amount_overCost",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.cars.amount_overCost).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.expenses_car",fn:function(e){var r=e.item;return t._l(r.sum_over_all_expenses,(function(e,r){return n("span",{key:r},["ค่าตัวรถ"==e.detail?n("span",[t._v("\n              "+t._s(Number(e.money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n            ")]):t._e()])}))}},{key:"item.expenses_sum",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.expenses_sum).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.profitOrLoss",fn:function(e){var r=e.item;return[r.profitOrLoss<0?n("span",{staticStyle:{color:"red"}},[t._v(t._s(Number(r.profitOrLoss).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2})))]):n("span",[t._v(t._s(Number(r.profitOrLoss).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2})))])]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VAutocomplete:S.a,VBtn:y.a,VCard:D.a,VCardActions:O.a,VCardText:O.b,VCol:Y.a,VDataTable:w.a,VDialog:I.a,VDivider:M.a,VFabTransition:k.c,VIcon:H.a,VRow:j.a,VSelect:C.a,VSpacer:T.a,VTextField:F.a,VToolbar:E.a})}}]);