(window.webpackJsonp=window.webpackJsonp||[]).push([[241,138],{1050:function(e,t,n){"use strict";n.r(t);var r=n(202),o=n(190),c=n(149),l=n(424),m=n(979),d=n(177),h=n(423),f=n(422),_=n(435),v=n(9),x=(n(48),n(49),n(16),n(610)),y=n(120),w=n.n(y),S={components:{dateSelect2:n(493).default},data:function(){return{loading:!1,timeStart:w()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:w()().endOf("day").format("YYYY-MM-DD HH:mm"),search:"",data:[],headers:[]}},created:function(){-1==this.user_group_permission||9==this.user_group_permission?this.headers=[{text:"วันปล่อยรถ",value:"contract.contract_date",width:"120px"},{text:"ลำดับ",value:"car_no",align:"center",class:"textOneLine"},{text:"ประเภท",value:"car_types",class:"textOneLine"},{text:"สาขา",value:"branch.branch_name",class:"textOneLine"},{text:"ค่ายรถ",value:"car_models.car_model_name",width:"100px",class:"textOneLine"},{text:"รุ่น",value:"car_series.car_series_name",width:"150px",class:"textOneLine"},{text:"รุ่นย่อย",value:"car_serie_sub.car_serie_sub_name",width:"200px",class:"textOneLine"},{text:"เกียร์",value:"car_gear",class:"textOneLine"},{text:"ปี",value:"car_year",class:"textOneLine"},{text:"สี",value:"color.color_name",class:"textOneLine"},{text:"ทะเบียน (เก่า)",value:"car_regis",class:"textOneLine"},{text:"จังหวัด",value:"province.name_th",class:"textOneLine"},{text:"จัด",value:"amount_price",class:"textOneLine"},{text:"ดาวน์",value:"amount_down",class:"textOneLine"},{text:"ตั้งขาย",value:"car_price_vat",class:"textOneLine"},{text:"ราคาสุทธิ",value:"net_price",class:"textOneLine"},{text:"ทะเบียน (ใหม่)",value:"car_regis_current",class:"textOneLine"},{text:"จังหวัด",value:"province_current.name_th",class:"textOneLine"},{text:"ผู้ซื้อ",value:"working.customer_name",class:"textOneLine",width:"180px"},{text:"เบอร์โทร",value:"working.customer.customer_tel",class:"textOneLine",width:"150px"},{text:"อายุ",value:"working.customer.age",class:"textOneLine",width:"100px"},{text:"อาชีพ",value:"working.customer.job",class:"textOneLine",width:"150px"},{text:"ที่อยู่",value:"working.customer.address",class:"textOneLine",width:"250px"},{text:"ผลเครดิต",value:"working.credit",class:"textOneLine",width:"110px"},{text:"ไฟแนนซ์",value:"working.receiving_money.bank_name",width:"200px"},{text:"เล่มที่",value:"working.receiving_money.book_no"},{text:"เลขที่",value:"working.receiving_money.number_no"},{text:"ก่อน vat",align:"right",value:"working.receiving_money.receiving_money_sum"},{text:"vat",align:"right",value:"working.receiving_money.receiving_money_sum_vat"},{text:"รวม vat",align:"right",value:"working.receiving_money.receiving_money_all"}]:this.headers=[{text:"วันปล่อยรถ",value:"contract.contract_date",width:"120px"},{text:"ลำดับ",value:"car_no",align:"center",class:"textOneLine"},{text:"ประเภท",value:"car_types",class:"textOneLine"},{text:"สาขา",value:"branch.branch_name",class:"textOneLine"},{text:"ค่ายรถ",value:"car_models.car_model_name",width:"100px",class:"textOneLine"},{text:"รุ่น",value:"car_series.car_series_name",width:"150px",class:"textOneLine"},{text:"รุ่นย่อย",value:"car_serie_sub.car_serie_sub_name",width:"200px",class:"textOneLine"},{text:"เกียร์",value:"car_gear",class:"textOneLine"},{text:"ปี",value:"car_year",class:"textOneLine"},{text:"สี",value:"color.color_name",class:"textOneLine"},{text:"ทะเบียน (เก่า)",value:"car_regis",class:"textOneLine"},{text:"จังหวัด",value:"province.name_th",class:"textOneLine"},{text:"ทะเบียน (ใหม่)",value:"car_regis_current",class:"textOneLine"},{text:"จังหวัด",value:"province_current.name_th",class:"textOneLine"},{text:"ผู้ซื้อ",value:"working.customer_name",class:"textOneLine",width:"180px"},{text:"เบอร์โทร",value:"working.customer.customer_tel",class:"textOneLine",width:"150px"},{text:"ไฟแนนซ์",value:"working.receiving_money.bank_name",width:"200px"},{text:"เล่มที่",value:"working.receiving_money.book_no"},{text:"เลขที่",value:"working.receiving_money.number_no"},{text:"ก่อน vat",align:"right",value:"working.receiving_money.receiving_money_sum"},{text:"vat",align:"right",value:"working.receiving_money.receiving_money_sum_vat"},{text:"รวม vat",align:"right",value:"working.receiving_money.receiving_money_all"}]},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(e){return e.text}))}},methods:{selectTimeStart:function(time){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timeStart=time.timeStart,e.timeEnd=time.timeEnd,e.getData();case 3:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,(data=new FormData).append("timeStart",e.timeStart),data.append("timeEnd",e.timeEnd),t.next=6,x.f(data);case 6:n=t.sent,console.log(n.data),e.data=n.data,e.loading=!1;case 10:case"end":return t.stop()}}),t)})))()},handleDownload:function(){for(var e=this,t=[],r=0;r<this.tHeader.length;r++)t.push(this.headers[r].value);this.$nextTick((function(){Promise.all([n.e(5),n.e(6)]).then(n.bind(null,978)).then((function(n){var r=e.tHeader,o=e.data,data=e.formatJson(t,o);n.export_json_to_excel({header:r,data:data,filename:"รายงานการขายรถ ("+w()().format("DD/MM/YYYY ( HH:mm น.)")+")",autoWidth:!0,bookType:"xlsx"})}))}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"car_models.car_model_name"==e?t.car_models.car_model_name:"car_serie_sub.car_serie_sub_name"==e?null==t.car_serie_sub?"ไม่ระบุ":t.car_serie_sub.car_serie_sub_name:"color.color_name"==e?t.color.color_name:"branch.branch_name"==e?t.branch.branch_name:"car_series.car_series_name"==e?t.car_series.car_series_name:"car_types"==e?t.car_types.car_type_name+"("+t.car_types.car_type_name_en+")":"car_gear"==e?1==t.car_gear?"AT":"MT":"car_price"!=e?"car_price_vat"==e?Number(t.car_price_vat).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"net_price"==e?Number(t.net_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"contract.contract_date"==e?t.contract?w()(t.contract.contract_date).format("DD/MM/YYYY"):null:"amount_down"==e?Number(t.amount_down).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"amount_price"==e?Number(t.amount_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}):"province.name_th"==e?null==t.province?"":t.province.name_th:"car_regis"==e?null==t.car_regis?"":t.car_regis:"province_current.name_th"==e?null==t.province_current?"":t.province_current.name_th:"car_regis_current"==e?null==t.car_regis_current?"":t.car_regis_current:"working.customer_name"==e?t.working?t.working.customer_name:null:"working.receiving_money.bank_name"==e?t.working?null==t.working.receiving_money?"":t.working.receiving_money.bank_name:null:"working.receiving_money.book_no"==e?t.working?null==t.working.receiving_money?"":t.working.receiving_money.book_no:null:"working.receiving_money.number_no"==e?t.working?null==t.working.receiving_money?"":t.working.receiving_money.number_no:null:"working.receiving_money.receiving_money_sum"==e?t.working?null==t.working.receiving_money?"":t.working.receiving_money.receiving_money_sum:null:"working.receiving_money.receiving_money_sum_vat"==e?t.working?null==t.working.receiving_money?"":t.working.receiving_money.receiving_money_sum_vat:null:"working.receiving_money.receiving_money_all"==e?t.working?null==t.working.receiving_money?"":t.working.receiving_money.receiving_money_all:null:"created_at"==e?w()(t.created_at).format("DD/MM/YYYY ( HH:mm น.)"):t[e]:t.working?t.working.appointment_banks?Number(t.working.appointment_banks.car_price).toLocaleString("th-TH",{maximumFractionDigits:0,minimumFractionDigits:0}):void 0:0}))}))}}},D=n(38),component=Object(D.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n(o.a,[n(c.b,[n("dateSelect2",{on:{timeSelect:e.selectTimeStart}}),e._v(" "),n(h.a,[n(l.a,{staticClass:"d-flex align-end"},[n(r.a,{staticClass:"ml-2",attrs:{color:"success"},on:{click:function(t){return e.handleDownload()}}},[n(d.a,{attrs:{left:""}},[e._v("mdi-microsoft-excel")]),e._v("\n            Excel\n          ")],1)],1),e._v(" "),n(f.a),e._v(" "),n(l.a,[n(_.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),n("br"),e._v(" "),n(m.a,{attrs:{headers:e.headers,items:e.data,search:e.search,loading:e.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","mobile-breakpoint":0,"multi-sort":!0,"footer-props":{"items-per-page-options":[5,10,20,50,100,-1]}},scopedSlots:e._u([{key:"item.contract.contract_date",fn:function(t){var r=t.item;return[null!=r.contract?n("span",[e._v("\n            "+e._s(e.$moment(r.contract.contract_date).format("DD/MM/YYYY"))+"\n          ")]):e._e()]}},{key:"item.car_price",fn:function(t){var r=t.item;return[r.working?n("span",[e._v("\n            "+e._s(Number(r.working.appointment_banks.car_price).toLocaleString("th-TH",{maximumFractionDigits:0,minimumFractionDigits:0}))+"\n          ")]):e._e()]}},{key:"item.car_types",fn:function(t){var r=t.item;return[n("span",[e._v(e._s(r.car_types.car_type_name)+" ("+e._s(r.car_types.car_type_name_en)+")")])]}},{key:"item.amount_down",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(Number(n.amount_down).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.amount_price",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(Number(n.amount_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.car_price_vat",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(Number(n.car_price_vat).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.net_price",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(Number(n.net_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n        ")]}},{key:"item.car_gear",fn:function(t){var r=t.item;return["1"==r.car_gear?n("h5",{staticClass:"green--text"},[e._v("AT")]):e._e(),e._v(" "),"2"==r.car_gear?n("h5",{staticClass:"orange--text"},[e._v("MT")]):e._e()]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},429:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",m=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,$nuxt.$auth.loggedIn;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,window.$nuxt.$auth.getToken("local");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function h(e,t,n){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function e(t,n,data){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m()){e.next=9;break}return e.next=3,d();case 3:return e.t0=e.sent,r={Authorization:e.t0},e.next=7,c()({method:t,url:n,data:data,headers:r}).then((function(e){return e})).catch((function(e){if(401==e.response.status)return $nuxt.$auth.logout()}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},436:function(e,t,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(e,t,n){var r=n(12)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},440:function(e,t,n){var r=n(17);r(r.S,"Object",{is:n(260)})},445:function(e,t,n){var r=n(51),o=n(265),c=n(62);e.exports=function(e,t,n,l){var m=String(c(e)),d=m.length,h=void 0===n?" ":String(n),f=r(t);if(f<=d||""==h)return m;var _=f-d,v=o.call(h,Math.ceil(_/h.length));return v.length>_&&(v=v.slice(0,_)),l?v+m:m+v}},454:function(e,t,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),o=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),c=n(435),l=n(50),m=n(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(m.r)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===m.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===m.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==m.y.backspace&&e!==m.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(m.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(m.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[m.y.home,m.y.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},459:function(e,t,n){var r=n(17);r(r.S,"Math",{sign:n(263)})},465:function(e,t,n){"use strict";var r=n(17),o=n(445),c=n(264),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},493:function(e,t,n){"use strict";n.r(t);var r=n(454),o=n(424),c=n(633),l=n(412),m=n(423),d=n(435),h=n(9),f=(n(48),n(120)),_=n.n(f),v={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:_()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:_()().endOf("day").format("YYYY-MM-DD HH:mm")}},mounted:function(){},methods:{returnDate:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("timeSelect",{timeStart:e.timeStart,timeEnd:e.timeEnd});case 1:case"end":return t.stop()}}),t)})))()},changeSelectTime:function(e){var t=this;return Object(h.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==e?(t.timeStart=_()().startOf("day").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")):2==e?(t.timeStart=_()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==e?(t.timeStart=_()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")):4==e?(t.timeStart=_()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")):5==e?(t.timeStart=_()().startOf("months").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("months").format("YYYY-MM-DD HH:mm")):6==e?(t.timeStart=_()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==e?(t.timeStart=_()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")):8==e?(t.timeStart=_()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")):9==e?(t.timeStart=_()().startOf("years").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")):10==e&&(t.timeStart=_()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),t.timeEnd=_()().endOf("day").format("YYYY-MM-DD HH:mm")),t.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},x=n(38),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(m.a,{staticClass:"py-2",attrs:{"no-gutters":""}},[n(o.a,{attrs:{cols:"4 pr-2"}},[n(r.a,{attrs:{items:e.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:e.changeSelectTime},model:{value:e.selectTime,callback:function(t){e.selectTime=t},expression:"selectTime"}})],1),e._v(" "),n(o.a,{attrs:{cols:"4 pr-2"}},[n(l.a,{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n(d.a,e._g(e._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:e.timeStart,callback:function(t){e.timeStart=t},expression:"timeStart"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menuTimeStart,callback:function(t){e.menuTimeStart=t},expression:"menuTimeStart"}},[e._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:e.changeSelectTime,input:function(t){e.menuTimeStart=!1}},model:{value:e.timeStart,callback:function(t){e.timeStart=t},expression:"timeStart"}})],1)],1),e._v(" "),n(o.a,{attrs:{cols:"4"}},[n(l.a,{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n(d.a,e._g(e._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:e.timeEnd,callback:function(t){e.timeEnd=t},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menuTimeEnd,callback:function(t){e.menuTimeEnd=t},expression:"menuTimeEnd"}},[e._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:e.changeSelectTime,input:function(t){e.menuTimeEnd=!1}},model:{value:e.timeEnd,callback:function(t){e.timeEnd=t},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(429);function o(e){var t=r.a+"/api/booking_car";return Object(r.b)("post",t,e)}function c(e){var t=r.a+"/api/report_purchase_car";return Object(r.b)("post",t,e)}function l(e){var t=r.a+"/api/report_sale_car";return Object(r.b)("post",t,e)}function m(e){var t=r.a+"/api/report_work_cancle";return Object(r.b)("post",t,e)}function d(e){var t=r.a+"/api/report_booking_duplicate";return Object(r.b)("post",t,e)}function h(e){var t=r.a+"/api/report_profit";return Object(r.b)("post",t,e)}function f(e){var t=r.a+"/api/report_commission";return Object(r.b)("post",t,e)}}}]);