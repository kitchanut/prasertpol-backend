(window.webpackJsonp=window.webpackJsonp||[]).push([[244,138],{1053:function(t,e,n){"use strict";n.r(e);var r=n(190),c=n(149),o=n(424),l=n(979),m=n(423),d=n(422),h=n(435),f=n(9),v=(n(48),n(49),n(16),n(610)),_=n(120),x=n.n(_),y={components:{dateSelect2:n(493).default},data:function(){return{loading:!1,timeStart:x()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:x()().endOf("day").format("YYYY-MM-DD HH:mm"),search:"",data:[],headers:[{text:"รหัสงาน",value:"codeWorking",class:"textOneLine sticky-header",align:"center"},{text:"ลำดับรถ",value:"cars.car_no",class:"textOneLine sticky-header"},{text:"เหตุผลที่ยกเลิก",value:"cancel_list",class:"textOneLine sticky-header"},{text:"ยี่ห้อ",value:"cars.car_models.car_model_name",class:"textOneLine sticky-header"},{text:"รุ่น",value:"cars.car_series.car_series_name",class:"textOneLine sticky-header",width:"150px"},{text:"รุ่นย่อย",value:"cars.car_serie_sub.car_serie_sub_name",class:"textOneLine sticky-header",width:"200px"},{text:"ทะเบียน",value:"cars.car_regis",class:"textOneLine sticky-header"},{text:"ปีรถ",value:"cars.car_year",class:"textOneLine sticky-header"},{text:"สี",value:"cars.color.color_name",class:"textOneLine sticky-header"},{text:"ดาวน์+F",value:"bookings.amount_slacken",class:"textOneLine sticky-header"},{text:"ลูกค้า",width:"200px",value:"customer_name",class:"textOneLine sticky-header"},{text:"เบอร์ลูกค้า",value:"customer_tel",class:"textOneLine sticky-header"},{text:"เซล",value:"sale",class:"textOneLine sticky-header"},{text:"ทีมเซล",value:"team.team_name",class:"textOneLine sticky-header"},{text:"สาขาย่อย",value:"branch.branch_name",class:"textOneLine sticky-header"},{text:"ทีมสาขา",value:"branch_team.branch_team_name",class:"textOneLine sticky-header"}]}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{selectTimeStart:function(time){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.timeStart=time.timeStart,t.timeEnd=time.timeEnd,t.getData();case 3:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),e.next=6,v.g(data);case 6:n=e.sent,t.data=n.data,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},handleDownload:function(){for(var t=this,e=[],r=0;r<this.tHeader.length;r++)e.push(this.headers[r].value);this.$nextTick((function(){Promise.all([n.e(5),n.e(6)]).then(n.bind(null,978)).then((function(n){var r=t.tHeader,c=t.data,data=t.formatJson(e,c);n.export_json_to_excel({header:r,data:data,filename:"รายงานการขายรถ ("+x()().format("DD/MM/YYYY ( HH:mm น.)")+")",autoWidth:!0,bookType:"xlsx"})}))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"car_models.car_model_name"==t?e.car_models.car_model_name:"car_serie_sub.car_serie_sub_name"==t?null==e.car_serie_sub?"ไม่ระบุ":e.car_serie_sub.car_serie_sub_name:"color.color_name"==t?e.color.color_name:"branch.branch_name"==t?e.branch.branch_name:"car_series.car_series_name"==t?e.car_series.car_series_name:"car_types"==t?e.car_types.car_type_name+"("+e.car_types.car_type_name_en+")":"car_gear"==t?1==e.car_gear?"AT":"MT":"car_price_vat"==t?Number(e.car_price_vat).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"net_price"==t?Number(e.net_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"contract.contract_date"==t?e.contract?x()(e.contract.contract_date).format("DD/MM/YYYY"):null:"amount_down"==t?Number(e.amount_down).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"amount_price"==t?Number(e.amount_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"province.name_th"==t?null==e.province?"":e.province.name_th:"car_regis"==t?null==e.car_regis?"":e.car_regis:"province_current.name_th"==t?null==e.province_current?"":e.province_current.name_th:"car_regis_current"==t?null==e.car_regis_current?"":e.car_regis_current:"working.customer_name"==t?e.working?e.working.customer_name:null:"created_at"==t?x()(e.created_at).format("DD/MM/YYYY ( HH:mm น.)"):e[t]}))}))}},watch:{data:function(){return this.data.map((function(t){t.codeWorking="W"+t.id}))}}},S=n(38),component=Object(S.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(r.a,[n(c.b,[n("dateSelect2",{on:{timeSelect:t.selectTimeStart}}),t._v(" "),n(m.a,[n(d.a),t._v(" "),n(o.a,[n(h.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),n("br"),t._v(" "),n(l.a,{attrs:{headers:t.headers,items:t.data,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","mobile-breakpoint":0,"multi-sort":!0,"footer-props":{"items-per-page-options":[5,10,20,50,100,-1]}},scopedSlots:t._u([{key:"item.sale",fn:function(e){var r=e.item;return[null==r.sale_id||0==r.sale_id?n("span",{staticClass:"red--text"},[t._v("\n            ยังไม่เลือก\n          ")]):n("span",[t._v("\n            "+t._s(null==r.sale?"":r.sale.first_name)+"\n          ")])]}},{key:"item.car_types",fn:function(e){var r=e.item;return[n("span",[t._v(t._s(r.car_types.car_type_name)+" ("+t._s(r.car_types.car_type_name_en)+")")])]}},{key:"item.amount_down",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.amount_down).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.amount_price",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.amount_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.car_price_vat",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.car_price_vat).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.net_price",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(Number(n.net_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.car_gear",fn:function(e){var r=e.item;return["1"==r.car_gear?n("h5",{staticClass:"green--text"},[t._v("AT")]):t._e(),t._v(" "),"2"==r.car_gear?n("h5",{staticClass:"orange--text"},[t._v("MT")]):t._e()]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(9),c=(n(48),n(98)),o=n.n(c),l="https://www.psnkp.co.th/server",m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function h(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,o()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},436:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},445:function(t,e,n){var r=n(51),c=n(265),o=n(62);t.exports=function(t,e,n,l){var m=String(o(t)),d=m.length,h=void 0===n?" ":String(n),f=r(e);if(f<=d||""==h)return m;var v=f-d,_=c.call(h,Math.ceil(v/h.length));return _.length>v&&(_=_.slice(0,v)),l?_+m:m+_}},454:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),c=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),o=n(435),l=n(50),m=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=h(h({},c.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=c.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:c.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},c.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(m.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=c.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),h(h({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=c.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===m.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===m.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==m.y.backspace&&t!==m.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,c.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(m.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(m.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=c.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?c.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[m.y.home,m.y.end].includes(e)||c.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){c.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){c.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){c.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],c=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",c),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",c),t.preventDefault()}}}})},459:function(t,e,n){var r=n(17);r(r.S,"Math",{sign:n(263)})},465:function(t,e,n){"use strict";var r=n(17),c=n(445),o=n(264),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*l,"String",{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},493:function(t,e,n){"use strict";n.r(e);var r=n(454),c=n(424),o=n(633),l=n(412),m=n(423),d=n(435),h=n(9),f=(n(48),n(120)),v=n.n(f),_={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:v()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:v()().endOf("day").format("YYYY-MM-DD HH:mm")}},mounted:function(){},methods:{returnDate:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("timeSelect",{timeStart:t.timeStart,timeEnd:t.timeEnd});case 1:case"end":return e.stop()}}),e)})))()},changeSelectTime:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==t?(e.timeStart=v()().startOf("day").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):2==t?(e.timeStart=v()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==t?(e.timeStart=v()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):4==t?(e.timeStart=v()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):5==t?(e.timeStart=v()().startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("months").format("YYYY-MM-DD HH:mm")):6==t?(e.timeStart=v()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==t?(e.timeStart=v()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):8==t?(e.timeStart=v()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):9==t?(e.timeStart=v()().startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):10==t&&(e.timeStart=v()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")),e.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},x=n(38),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(m.a,{staticClass:"py-2",attrs:{"no-gutters":""}},[n(c.a,{attrs:{cols:"4 pr-2"}},[n(r.a,{attrs:{items:t.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectTime},model:{value:t.selectTime,callback:function(e){t.selectTime=e},expression:"selectTime"}})],1),t._v(" "),n(c.a,{attrs:{cols:"4 pr-2"}},[n(l.a,{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n(d.a,t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",c,!1),r))]}}]),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n(o.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),t._v(" "),n(c.a,{attrs:{cols:"4"}},[n(l.a,{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n(d.a,t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",c,!1),r))]}}]),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n(o.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return m})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return f}));var r=n(429);function c(t){var e=r.a+"/api/booking_car";return Object(r.b)("post",e,t)}function o(t){var e=r.a+"/api/report_purchase_car";return Object(r.b)("post",e,t)}function l(t){var e=r.a+"/api/report_sale_car";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/report_work_cancle";return Object(r.b)("post",e,t)}function d(t){var e=r.a+"/api/report_booking_duplicate";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/report_profit";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/report_commission";return Object(r.b)("post",e,t)}}}]);