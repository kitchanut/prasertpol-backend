(window.webpackJsonp=window.webpackJsonp||[]).push([[57,63,64,138],{429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function f(t,e,n){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,h();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},436:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},454:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),o=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),c=n(435),l=n(50),d=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.y.backspace&&t!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.y.home,d.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},486:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"f",(function(){return v})),n.d(e,"c",(function(){return y})),n.d(e,"k",(function(){return x})),n.d(e,"j",(function(){return I})),n.d(e,"o",(function(){return _})),n.d(e,"n",(function(){return S})),n.d(e,"m",(function(){return D})),n.d(e,"l",(function(){return O}));var r=n(429);function o(t){var e=r.a+"/api/dashboard_manager_doughnut_stock";return Object(r.b)("post",e,t)}function c(t){var e=r.a+"/api/dashboard_manager_bar_car";return Object(r.b)("post",e,t)}function l(t){var e=r.a+"/api/dashboard_manager_bar_visit";return Object(r.b)("post",e,t)}function d(t){var e=r.a+"/api/dashboard_manager_bar_visit_car_type";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/dashboard_manager_bar_visit_car_model";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/dashboard_manager_bar_visit_car_serie";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/dashboard_manager_bar_top_car_serie";return Object(r.b)("post",e,t)}function v(t){var e=r.a+"/api/dashboard_manager_bar_visit_car_slacken";return Object(r.b)("post",e,t)}function y(t){var e=r.a+"/api/dashboard_manager_bar_visit_car_down";return Object(r.b)("post",e,t)}function x(t){var e=r.a+"/api/dashboard_sale_doughnut";return Object(r.b)("post",e,t)}function I(t){var e=r.a+"/api/dashboard_sale_bar";return Object(r.b)("post",e,t)}function _(t){var e=r.a+"/api/dashboard_saleByBranch";return Object(r.b)("post",e,t)}function S(t){var e=r.a+"/api/dashboard_inventory_car";return Object(r.b)("get",e,{})}function D(t){var e=r.a+"/api/dashboard_car_registration";return Object(r.b)("get",e,{})}function O(t){var e=r.a+"/api/dashboard_car_insurances";return Object(r.b)("get",e,{})}},584:function(t,e,n){"use strict";n.r(e);var r=n(491),o=r.d.reactiveProp,c={extends:r.a,mixins:[o],props:["chartData"],data:function(){return{options:{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{}],yAxes:[{ticks:{min:0,stepSize:1}}]},tooltips:{callbacks:{label:function(t,data){return data.datasets[t.datasetIndex].data[t.index]+" คน"},title:function(t,data){return data.labels[t[0].index]}}}}}},mounted:function(){this.addPlugin({id:"my-plugin",beforeDraw:l}),this.renderChart(this.chartData,this.options)},watch:{}},l={id:"horizontalLine",afterDraw:function(t){var e,n,line,style,r=t.scales["y-axis-0"],canvas=t.chart,o=canvas.ctx;if(t.options.horizontalLine)for(n=0;n<t.options.horizontalLine.length;n++)style=(line=t.options.horizontalLine[n]).style?line.style:"#080808",e=line.y?r.getPixelForValue(line.y):0,o.lineWidth=3,e&&(window.chart=t,o.beginPath(),o.moveTo(0,e),o.lineTo(canvas.width,e),o.strokeStyle=style,o.stroke()),line.text&&(o.fillStyle=style,o.fillText(line.text,0,e+o.lineWidth));else;}},d=c,h=n(38),component=Object(h.a)(d,undefined,undefined,!1,null,null,null);e.default=component.exports},585:function(t,e,n){"use strict";n.r(e);var r=n(491),o=r.d.reactiveProp,c={extends:r.a,mixins:[o],props:["chartData"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{bar:{categoryPercentage:.5,barPercentage:1}}],yAxes:[{bar:{categoryPercentage:.5,barPercentage:1},ticks:{beginAtZero:!0,stepSize:1}}]},tooltips:{callbacks:{label:function(t,data){var e=data.datasets[t.datasetIndex],n=e.data[t.index];return e.label+" ("+n+") คัน"},title:function(t,data){return data.labels[t[0].index]}}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},watch:{}},l=n(38),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports},831:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(190),c=n(424),l=n(423),d=n(9),h=(n(48),n(486)),f=n(120),m=n.n(f),v={components:{BarChartVisit:n(584).default},props:["branch_id"],data:function(){return{years_id:1,yearStart:m()().startOf("year").format("YYYY-MM-DD HH:mm"),yearEnd:m()().endOf("year").format("YYYY-MM-DD HH:mm"),yearSelect:this.$store.state.yearSelect,dataChart:null}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDataBarVisitCarModel();case 2:case"end":return e.stop()}}),e)})))()},computed:{},methods:{selectYear:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDataBarVisitCarModel();case 2:case"end":return e.stop()}}),e)})))()},getDataBarVisitCarModel:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("branch_id",t.branch_id),n.append("timeStart",t.yearStart),n.append("timeEnd",t.yearEnd),e.next=6,h.f(n);case 6:r=e.sent,t.dataChart={labels:t.$store.state.months_th,datasets:r.data};case 8:case"end":return e.stop()}}),e)})))()},changeSelectYear:function(t){var e=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return 1==t?(e.yearStart=m()().startOf("years").format("YYYY-MM-DD HH:mm"),e.yearEnd=m()().endOf("years").format("YYYY-MM-DD HH:mm")):2==t?(e.yearStart=m()().add(-1,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.yearEnd=m()().add(-1,"years").endOf("years").format("YYYY-MM-DD HH:mm")):3==t?(e.yearStart=m()().add(-2,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.yearEnd=m()().add(-2,"years").endOf("years").format("YYYY-MM-DD HH:mm")):4==t&&(e.yearStart=m()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.yearEnd=m()().add(-3,"years").endOf("years").format("YYYY-MM-DD HH:mm")),n.next=3,e.selectYear();case 3:case"end":return n.stop()}}),n)})))()}},watch:{branch_id:function(){this.getDataBarVisitCarModel()}}},y=n(38),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("งวดผ่อน")]),t._v(" "),n(o.a,{staticClass:"mt-5"},[n(l.a,{staticClass:"pa-2 mt-5"},[n(c.a),t._v(" "),n(c.a,{attrs:{cols:"3"}},[n(r.a,{attrs:{items:t.yearSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"เลือกปี:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectYear},model:{value:t.years_id,callback:function(e){t.years_id=e},expression:"years_id"}})],1)],1),t._v(" "),n(l.a,[n(c.a,[n("BarChartVisitCar",{staticClass:"mt-5",attrs:{"chart-data":t.dataChart}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BarChartVisitCar:n(585).default})}}]);