(window.webpackJsonp=window.webpackJsonp||[]).push([[106,100,118],{269:function(e,t,n){"use strict";var r=n(210);t.a=r.a},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(14),o=(n(56),n(108)),c=n.n(o),l="https://www.psnkp.co.th/server",d=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,$nuxt.$auth.loggedIn;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,window.$nuxt.$auth.getToken("local");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function m(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function e(t,n,data){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d()){e.next=9;break}return e.next=3,f();case 3:return e.t0=e.sent,r={Authorization:e.t0},e.next=7,c()({method:t,url:n,data:data,headers:r}).then((function(e){return e})).catch((function(e){if(401==e.response.status)return $nuxt.$auth.logout()}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},464:function(e,t,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("50788f08",content,!0,{sourceMap:!1})},465:function(e,t,n){var r=n(11)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},468:function(e,t,n){var r=n(58),o=n(272),c=n(69);e.exports=function(e,t,n,l){var d=String(c(e)),f=d.length,m=void 0===n?" ":String(n),h=r(t);if(h<=f||""==m)return d;var v=h-f,_=o.call(m,Math.ceil(v/m.length));return _.length>v&&(_=_.slice(0,v)),l?_+d:d+_}},473:function(e,t,n){"use strict";n(6),n(7),n(9),n(10);var r=n(2),o=(n(39),n(8),n(83),n(160),n(33),n(23),n(464),n(440)),c=n(84),l=n(30),d=n(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},h),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},482:function(e,t,n){"use strict";var r=n(2),o=(n(33),n(23),n(161),n(8),n(83),n(6),n(7),n(9),n(10),n(4)),c=n(68),l=n(92);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},483:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return select}));var r=n(459),path="/api/provinces";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function d(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function f(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/selectOnProvinces";return Object(r.b)("get",e,{})}},485:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return select}));var r=n(459),path="/api/amphures";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function d(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function f(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/selectOnAmphures";return Object(r.b)("get",e,{})}},486:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return select}));var r=n(459),path="/api/districts";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function d(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function f(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/selectOnDistricts";return Object(r.b)("get",e,{})}},487:function(e,t,n){var r=n(20);r(r.S,"Math",{sign:n(273)})},489:function(e,t,n){"use strict";var r=n(20),o=n(468),c=n(271),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},532:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return select}));var r=n(459),path="/api/repair";function o(){var e=r.a+path;return Object(r.b)("get",e,{})}function c(e){var t=r.a+path+"/"+e;return Object(r.b)("delete",t,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function d(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function f(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function select(){var e=r.a+"/api/SelectOnRepair";return Object(r.b)("get",e,{})}},585:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(459),path="/api/insurcertificate";function o(e){var t=r.a+path;return Object(r.b)("post",t,e)}function c(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function l(e,t){var n=r.a+"/api/checkInsurCertificate/"+e+"/"+t;return Object(r.b)("post",n,{})}function d(e){var t=r.a+"/api/printInsurCertificate/"+e;return Object(r.b)("post",t,{})}},663:function(e,t,n){"use strict";n.r(t);var r=n(14),o=(n(56),n(585)),c=n(532),l=n(483),d=n(485),f=n(486),m={props:["dialogInsurCertificate","actionInsurCertificate","idWork","jobType","formTitleInsurCertificate"],data:function(){return{btnloading:!0,dialogDeleteComponent:!1,formDataLoading:!1,menuDateInsurance_certificate_date:!1,formData:{repair_details:[{}]},rule:[function(e){return!!e||"กรุณาใส่ข้อมูล"}],repair_lists:[],menuDate:!1,dataProvinces:[],dataAmphures:[],dataDistricts:[]}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getProvince:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0;case 1:if(!(r<t.dataProvinces.length)){n.next=9;break}if(t.dataProvinces[r].id!=e){n.next=6;break}return n.next=5,t.dataProvinces[r].name_th;case 5:return n.abrupt("return",n.sent);case 6:r++,n.next=1;break;case 9:case"end":return n.stop()}}),n)})))()},getAmphures:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0;case 1:if(!(r<t.dataAmphures.length)){n.next=9;break}if(t.dataAmphures[r].id!=e){n.next=6;break}return n.next=5,t.dataAmphures[r].name_th;case 5:return n.abrupt("return",n.sent);case 6:r++,n.next=1;break;case 9:case"end":return n.stop()}}),n)})))()},getDistrict:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0;case 1:if(!(r<t.dataDistricts.length)){n.next=9;break}if(t.dataDistricts[r].id!=e){n.next=6;break}return n.next=5,t.dataDistricts[r].name_th;case 5:return n.abrupt("return",n.sent);case 6:r++,n.next=1;break;case 9:case"end":return n.stop()}}),n)})))()},getRepairlists:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c();case 2:n=t.sent,e.repair_lists=n.data,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},print_a4:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$router.resolve({name:"prints-print_warranty",query:{idInsu:e.formData.id}}),window.open(n.href,"_blank");case 2:case"end":return t.stop()}}),t)})))()},onAction:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=19;break}if(t.formDataLoading=!0,t.btnloading=!0,"add"!=t.formData.action){e.next=11;break}return e.next=6,o.c(t.formData);case 6:n=e.sent,t.$refs.form.reset(),200==n.status?t.$emit("success","InsurCertificate"):t.$emit("error","InsurCertificate"),e.next=17;break;case 11:if("edit"!=t.formData.action){e.next=17;break}return e.next=14,o.d(t.formData.id,t.formData);case 14:r=e.sent,t.$refs.form.reset(),200==r.status?t.$emit("success","InsurCertificate"):t.$emit("error","InsurCertificate");case 17:t.btnloading=!1,t.formDataLoading=!1;case 19:case"end":return e.stop()}}),e)})))()}},watch:{dialogInsurCertificate:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogDeleteComponent=e.dialogInsurCertificate,!e.dialogInsurCertificate){t.next=36;break}return t.next=4,l.c();case 4:return n=t.sent,e.dataProvinces=n.data,t.next=8,d.c();case 8:return r=t.sent,e.dataAmphures=r.data,t.next=12,f.c();case 12:if(c=t.sent,e.dataDistricts=c.data,e.formDataLoading=!0,e.getRepairlists(),"check"!=e.actionInsurCertificate){t.next=35;break}return t.next=19,o.a(e.idWork,e.jobType);case 19:return m=t.sent,t.next=22,e.$refs.form.reset();case 22:return t.next=24,m.data;case 24:if(e.formData=t.sent,"add"!=m.data.action){t.next=35;break}return t.next=28,e.getAmphures(m.data.amphure_id);case 28:return e.formData.amphure=t.sent,t.next=31,e.getDistrict(m.data.district_id);case 31:return e.formData.district=t.sent,t.next=34,e.getProvince(m.data.province_id);case 34:e.formData.province=t.sent;case 35:e.formDataLoading=!1;case 36:e.btnloading=!1;case 37:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},h=n(42),v=n(51),_=n.n(v),x=n(473),D=n(210),I=n(191),w=n(158),O=n(451),k=n(458),y=n(929),j=n(452),S=n(482),$=n(200),C=n(192),V=n(455),P=n(456),R=n(84),T=n(50),z=n(91),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-dialog",{attrs:{"max-width":"70%"},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[n("v-card",[n("v-form",{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(t){return t.preventDefault(),e.onAction()}}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[e._v(" "+e._s(e.formTitleInsurCertificate)+" ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",["edit"==e.formData.action?n("v-btn",{staticStyle:{"font-size":"18px"},attrs:{target:"_blank",dark:"",text:"",loading:e.btnloading},on:{click:function(t){return e.print_a4()}}},[e._v("\n              ปริ้น\n            ")]):e._e()],1)],1),e._v(" "),e.formDataLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}}):e._e(),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",{attrs:{align:"end"}},[n("h3",[e._v("รหัสงาน: W"+e._s(e.idWork))]),e._v(" "),n("h3",[e._v("ลำดับรถ: "+e._s(e.formData.car_no))])])],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",{attrs:{cols:"8"}}),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-menu",{ref:"menuDate",attrs:{id:"menuDate",name:"menuDate","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{autocomplete:"true",label:"วันที่ปล่อยรถ",id:"formData.insurance_certificate_date",name:"formData.insurance_certificate_date",readonly:"","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":"",clearable:"",rules:e.rule},model:{value:e.formData.insurance_certificate_date,callback:function(t){e.$set(e.formData,"insurance_certificate_date",t)},expression:"formData.insurance_certificate_date"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menuDate,callback:function(t){e.menuDate=t},expression:"menuDate"}},[e._v(" "),n("v-date-picker",{attrs:{id:"formData.insurance_certificate_date",name:"formData.insurance_certificate_date",locale:"th-TH","picker-date":""},on:{input:function(t){e.menuDate=!1}},model:{value:e.formData.insurance_certificate_date,callback:function(t){e.$set(e.formData,"insurance_certificate_date",t)},expression:"formData.insurance_certificate_date"}})],1)],1)],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"ชื่อ-สกุลผู้ซื้อ",id:"formData.customer_name",name:"formData.customer_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_name,callback:function(t){e.$set(e.formData,"customer_name",t)},expression:"formData.customer_name"}})],1)],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row mt-1 mb-1"},[n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"ที่อยู่ตามทะเบียนบ้าน",id:"formData.customer_address",name:"formData.customer_address","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_address,callback:function(t){e.$set(e.formData,"customer_address",t)},expression:"formData.customer_address"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"จังหวัด",id:"formData.province",name:"formData.province","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.province,callback:function(t){e.$set(e.formData,"province",t)},expression:"formData.province"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"อำเภอ",id:"formData.amphure",name:"formData.amphure","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.amphure,callback:function(t){e.$set(e.formData,"amphure",t)},expression:"formData.amphure"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"ตำบล",id:"formData.district",name:"formData.district","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.district,callback:function(t){e.$set(e.formData,"district",t)},expression:"formData.district"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"รหัสไปรษณีย์","append-icon":"",id:"formData.zip_code",name:"formData.zip_code",outlined:"",dense:"","hide-details":"",type:"number",rules:e.rule},model:{value:e.formData.zip_code,callback:function(t){e.$set(e.formData,"zip_code",t)},expression:"formData.zip_code"}})],1)],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"เบอร์โทร",id:"formData.customer_tel",name:"formData.customer_tel","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.customer_tel,callback:function(t){e.$set(e.formData,"customer_tel",t)},expression:"formData.customer_tel"}})],1)],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row mt-5"},[n("v-col",{staticClass:"text-center"},[n("h3",[e._v("รายละเอียดรถยนต์")])])],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"ลำดับรถ",id:"formData.car_no",name:"formData.car_no","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_no,callback:function(t){e.$set(e.formData,"car_no",t)},expression:"formData.car_no"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"ทะเบียนรถ",id:"formData.car_regis",name:"formData.car_regis","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_regis,callback:function(t){e.$set(e.formData,"car_regis",t)},expression:"formData.car_regis"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"ยี่ห้อ",id:"formData.car_model_name",name:"formData.car_model_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_model_name,callback:function(t){e.$set(e.formData,"car_model_name",t)},expression:"formData.car_model_name"}})],1)],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"เลขไมค์ ณ วันปล่อยรถ",id:"formData.car_mileage",name:"formData.car_mileage","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.car_mileage,callback:function(t){e.$set(e.formData,"car_mileage",t)},expression:"formData.car_mileage"}})],1)],1),e._v(" "),n("v-row",{staticClass:"d-flex flex-row"},[n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"พนักงานขาย",id:"formData.first_name",name:"formData.first_name","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.first_name,callback:function(t){e.$set(e.formData,"first_name",t)},expression:"formData.first_name"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{autocomplete:"true",label:"เบอร์โทร",id:"formData.tel",name:"formData.tel","append-icon":"",outlined:"",dense:"","hide-details":""},model:{value:e.formData.tel,callback:function(t){e.$set(e.formData,"tel",t)},expression:"formData.tel"}})],1)],1),e._v(" "),"edit"==e.formData.action?n("v-col",[n("v-row",{staticClass:"d-flex flex-row mt-5"},[n("v-col",{staticClass:"text-center"},[n("h3",[e._v("รายการที่เคยซ่อมหลังการขาย")])])],1),e._v(" "),e._l(e.formData.repair_details,(function(t,r){return n("v-row",{key:r},[n("v-col",{staticClass:"text-center",attrs:{cols:"1"}},[n("h3",{staticClass:"mt-2"},[e._v(e._s(r+1))])]),e._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-menu",{attrs:{id:"menuDateInsurance_certificate_date",name:"menuDateInsurance_certificate_date","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("v-text-field",e._g(e._b({attrs:{autocomplete:"true",id:"repair_detail.repair_date",name:"repair_detail.repair_date",label:"วัน/เดือน/ปี",disabled:"","persistent-hint":"","prepend-icon":"",outlined:"",dense:"",clearable:"","hide-details":"",flat:""},model:{value:t.repair_date,callback:function(n){e.$set(t,"repair_date",n)},expression:"repair_detail.repair_date"}},"v-text-field",c,!1),o))]}}],null,!0),model:{value:e.menuDateInsurance_certificate_date,callback:function(t){e.menuDateInsurance_certificate_date=t},expression:"menuDateInsurance_certificate_date"}},[e._v(" "),n("v-date-picker",{attrs:{id:"repair_detail.repair_date",name:"repair_detail.repair_date",locale:"th-TH","picker-date":""},on:{input:function(t){e.menuDateInsurance_certificate_date=!1}},model:{value:t.repair_date,callback:function(n){e.$set(t,"repair_date",n)},expression:"repair_detail.repair_date"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-autocomplete",{attrs:{id:"repair_detail.repair_id",name:"repair_detail.repair_id",items:e.repair_lists,"item-text":"repair_name","item-value":"id","no-data-text":"ไม่มีข้อมูล",label:"ชื่อรายการ",disabled:"",outlined:"",dense:"","hide-details":"",rules:e.rule},model:{value:t.repair_id,callback:function(n){e.$set(t,"repair_id",n)},expression:"repair_detail.repair_id"}})],1),e._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{autocomplete:"true",label:"เลขไมค์",id:"repair_detail.car_mileage",name:"repair_detail.car_mileage","append-icon":"",outlined:"",disabled:"",dense:"","hide-details":""},model:{value:t.car_mileage,callback:function(n){e.$set(t,"car_mileage",n)},expression:"repair_detail.car_mileage"}})],1),e._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{autocomplete:"true",label:"คงเหลือ",id:"repair_detail.car_mileage_balance",name:"repair_detail.car_mileage_balance","append-icon":"",outlined:"",dense:"",disabled:"","hide-details":""},model:{value:t.car_mileage_balance,callback:function(n){e.$set(t,"car_mileage_balance",n)},expression:"repair_detail.car_mileage_balance"}})],1)],1)}))],2):e._e()],1),e._v("\n\n        "+e._s(e.formData)+"\n\n        "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("cancleItem")}}},[e._v("ยกเลิก")]),e._v(" "),n("v-btn",{attrs:{type:"submit",color:"success darken-1",text:"",loading:e.btnloading}},[e._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VAutocomplete:x.a,VBtn:D.a,VCard:I.a,VCardActions:w.a,VCardText:w.b,VCol:O.a,VContainer:k.a,VDatePicker:y.a,VDialog:j.a,VForm:S.a,VMenu:$.a,VProgressLinear:C.a,VRow:V.a,VSpacer:P.a,VTextField:R.a,VToolbar:T.a,VToolbarItems:z.a,VToolbarTitle:z.b})}}]);