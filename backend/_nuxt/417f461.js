(window.webpackJsonp=window.webpackJsonp||[]).push([[245,138],{1054:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n(190),c=n(149),l=n(424),d=n(979),m=n(422),h=n(435),f=n(9),v=(n(48),n(49),n(490),n(758)),_={components:{dateSelect:n(589).default},data:function(){return{user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),loading:!1,search:"",id:"",formTitle:"Add",action:"add",waitingPushdata:!1,headers:[{text:"ลำดับ",value:"no",align:"center"},{text:"ลำดับรถ",value:"car.car_no"},{text:"ทะเบียน",value:"car.car_regis"},{text:"ผู้สนใจ",value:"customer.customer_name"},{text:"เบอร์",value:"customer_tel"},{text:"เซล",value:"user.first_name"},{text:"วันที่",value:"updated_at"},{text:"สาขา",value:"branch.branch_name"},{text:"สถานะ",value:"work_status"}],data:[],dataWorking:[],timeStart:null,timeEnd:null}},mounted:function(){},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{getData:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.data=[],(data=new FormData).append("branch_id",t.branch_id),data.append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),e.next=7,v.a(data);case 7:return n=e.sent,e.next=10,n.data;case 10:t.data=e.sent;case 11:case"end":return e.stop()}}),e)})))()},selectTimeStart:function(time){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.branch_id=time.branch_id,t.timeStart=time.timeStart,t.timeEnd=time.timeEnd,t.getData();case 4:case"end":return e.stop()}}),e)})))()}},watch:{data:function(){var t=this;return this.data.map((function(e){e.no=t.data.map((function(t){return t.id})).indexOf(e.id)+1}))}}},x=n(38),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission||2==t.user_group_permission||9==t.user_group_permission?n("div",[n(o.a,[n(c.c,[n(l.a,{attrs:{cols:"9"}},[n("dateSelect",{on:{tineSelect:t.selectTimeStart}})],1),t._v(" "),n(m.a),t._v(" "),n(l.a,{attrs:{cols:"3"}},[n(h.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),n(d.a,{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.updated_at",fn:function(e){var r=e.item;return[n("h5",[t._v("\n            "+t._s(t.$moment(r.updated_at).format("DD/MM/YYYY ( HH:mm น.)"))+"\n          ")])]}},{key:"item.work_status",fn:function(e){var o=e.item;return["1.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("ลูกค้าสนใจ")]):t._e(),t._v(" "),"2.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("ยืนยันการจอง")]):t._e(),t._v(" "),"3.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("วางมัดจำแล้ว")]):t._e(),t._v(" "),"4.1"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("มอบหมายงาน")]):t._e(),t._v(" "),"4.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("นัดทำสัญญาแล้ว")]):t._e(),t._v(" "),"5.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("รอแบงค์อนุมัติ")]):t._e(),t._v(" "),"6.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"red",dark:""}},[t._v("แบงค์ไม่อนุมัติ")]):t._e(),t._v(" "),"7.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("แบงค์อนุมัติแล้ว")]):t._e(),t._v(" "),"8.1"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("เพิ่มใบประกันรถยนต์")]):t._e(),t._v(" "),"8.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("จัดทำชุดโอน")]):t._e(),t._v(" "),"9.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("โอนรถสำเร็จ")]):t._e(),t._v(" "),"10.0"==o.work_status?n(r.a,{attrs:{"x-small":"",color:"success",dark:""}},[t._v("รับเงินแล้ว")]):t._e()]}}],null,!0)})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function h(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,m();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},436:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},445:function(t,e,n){var r=n(51),o=n(265),c=n(62);t.exports=function(t,e,n,l){var d=String(c(t)),m=d.length,h=void 0===n?" ":String(n),f=r(e);if(f<=m||""==h)return d;var v=f-m,_=o.call(h,Math.ceil(v/h.length));return _.length>v&&(_=_.slice(0,v)),l?_+d:d+_}},452:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/branches";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function m(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBranches";return Object(r.b)("get",t,{})}},454:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),o=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),c=n(435),l=n(50),d=n(1);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},459:function(t,e,n){var r=n(17);r(r.S,"Math",{sign:n(263)})},465:function(t,e,n){"use strict";var r=n(17),o=n(445),c=n(264),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},490:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"p",(function(){return m})),n.d(e,"o",(function(){return h})),n.d(e,"j",(function(){return f})),n.d(e,"i",(function(){return v})),n.d(e,"c",(function(){return _})),n.d(e,"g",(function(){return x})),n.d(e,"h",(function(){return S})),n.d(e,"f",(function(){return y})),n.d(e,"e",(function(){return D})),n.d(e,"d",(function(){return Y})),n.d(e,"n",(function(){return I})),n.d(e,"a",(function(){return w}));var r=n(429),path="/api/working";function o(){var t=r.a+"/api/working_allData";return Object(r.b)("get",t,{})}function c(t){var e=r.a+path;return Object(r.b)("post",e,t)}function l(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function m(t,e){var n=r.a+"/api/updateStatusWorking/"+t;return Object(r.b)("post",n,e)}function h(t,e){var n=r.a+"/api/updatePedding/"+t;return Object(r.b)("post",n,e)}function f(t){var e=r.a+"/api/workWhereClose";return Object(r.b)("post",e,t)}function v(t){var e=r.a+"/api/selectWhereCancle";return Object(r.b)("post",e,t)}function _(t){var e=r.a+"/api/work_cancel";return Object(r.b)("post",e,t)}function x(t){var e=r.a+"/api/get_work_cancel";return Object(r.b)("post",e,t)}function S(t){var e=r.a+"/api/working_search_id/"+t;return Object(r.b)("post",e,{})}function y(t){var e=r.a+"/api/followWork";return Object(r.b)("post",e,t)}function D(t){var e=r.a+"/api/followDown";return Object(r.b)("get",e,t)}function Y(t){var e=r.a+"/api/commission_month_by_team_branch";return Object(r.b)("post",e,t)}function I(t,e){var n=r.a+"/api/updateNote/"+t;return Object(r.b)("post",n,e)}function w(t){var e=r.a+"/api/activeWorkingID";return Object(r.b)("get",e,t)}},589:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(424),c=n(633),l=n(412),d=n(423),m=n(435),h=n(9),f=(n(48),n(120)),v=n.n(f),_=n(452),x={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:v()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:v()().endOf("day").format("YYYY-MM-DD HH:mm"),branches:[],branch_id:this.$auth.$storage.getLocalStorage("userData-branch_id"),user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){this.getBranches()},methods:{returnDate:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("tineSelect",{branch_id:t.branch_id,timeStart:t.timeStart,timeEnd:t.timeEnd});case 1:case"end":return e.stop()}}),e)})))()},getBranches:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.c();case 2:return n=e.sent,t.branches=n.data,t.branches.push({id:0,branch_name:"ทั้งหมด"}),e.next=7,t.returnDate();case 7:case"end":return e.stop()}}),e)})))()},changeSelectTime:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==t?(e.timeStart=v()().startOf("day").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):2==t?(e.timeStart=v()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==t?(e.timeStart=v()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):4==t?(e.timeStart=v()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):5==t?(e.timeStart=v()().startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("months").format("YYYY-MM-DD HH:mm")):6==t?(e.timeStart=v()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==t?(e.timeStart=v()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):8==t?(e.timeStart=v()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):9==t?(e.timeStart=v()().startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):10==t&&(e.timeStart=v()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")),e.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},S=n(38),component=Object(S.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(d.a,{staticClass:"pa-2"},[n(o.a,{directives:[{name:"show",rawName:"v-show",value:2!=t.user_group_permission,expression:"user_group_permission == 2 ? false : true"}],attrs:{cols:"3"}},[n(r.a,{attrs:{items:t.branches,"item-text":"branch_name","item-value":"id",label:"สาขา","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":""},on:{change:t.returnDate},model:{value:t.branch_id,callback:function(e){t.branch_id=e},expression:"branch_id"}})],1),t._v(" "),n(o.a,{attrs:{cols:"3"}},[n(r.a,{attrs:{items:t.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectTime},model:{value:t.selectTime,callback:function(e){t.selectTime=e},expression:"selectTime"}})],1),t._v(" "),n(o.a,{attrs:{cols:"3"}},[n(l.a,{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(m.a,t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),t._v(" "),n(o.a,{attrs:{cols:"3"}},[n(l.a,{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(m.a,t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},758:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(429);function o(t){var e=r.a+"/api/transition_working";return Object(r.b)("post",e,t)}function c(t){var e=r.a+"/api/working_where/"+t;return Object(r.b)("post",e,{})}}}]);