(window.webpackJsonp=window.webpackJsonp||[]).push([[53,63,104,157],{429:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d}));var n=r(9),o=(r(48),r(98)),c=r.n(o),l="https://www.psnkp.co.th/server",h=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function d(t,e,r){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function t(e,r,data){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h()){t.next=9;break}return t.next=3,v();case 3:return t.t0=t.sent,n={Authorization:t.t0},t.next=7,c()({method:e,url:r,data:data,headers:n}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},452:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return h})),r.d(e,"d",(function(){return v})),r.d(e,"c",(function(){return select}));var n=r(429),path="/api/car_type";function o(){var t=n.a+path;return Object(n.b)("get",t,{})}function c(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function l(t){var e=n.a+path;return Object(n.b)("post",e,t)}function h(t,e){var r=n.a+path+"/"+t;return Object(n.b)("put",r,e)}function v(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function select(){var t=n.a+"/api/SelectOnCarType";return Object(n.b)("get",t,{})}},483:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"h",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"g",(function(){return h})),r.d(e,"d",(function(){return v})),r.d(e,"e",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"f",(function(){return m})),r.d(e,"c",(function(){return _})),r.d(e,"k",(function(){return x})),r.d(e,"j",(function(){return y})),r.d(e,"t",(function(){return O})),r.d(e,"s",(function(){return j})),r.d(e,"n",(function(){return w})),r.d(e,"m",(function(){return k})),r.d(e,"o",(function(){return C})),r.d(e,"r",(function(){return S})),r.d(e,"q",(function(){return $})),r.d(e,"p",(function(){return P})),r.d(e,"y",(function(){return z})),r.d(e,"x",(function(){return B})),r.d(e,"u",(function(){return D})),r.d(e,"v",(function(){return E})),r.d(e,"w",(function(){return R})),r.d(e,"l",(function(){return T}));var n=r(429);function o(t){var e=n.a+"/api/dashboard_manager_doughnut_stock";return Object(n.b)("post",e,t)}function c(t){var e=n.a+"/api/dashboard_manager_bar_car";return Object(n.b)("post",e,t)}function l(t){var e=n.a+"/api/dashboard_manager_bar_visit";return Object(n.b)("post",e,t)}function h(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_type";return Object(n.b)("post",e,t)}function v(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_model";return Object(n.b)("post",e,t)}function d(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_serie";return Object(n.b)("post",e,t)}function f(t){var e=n.a+"/api/dashboard_manager_bar_top_car_serie";return Object(n.b)("post",e,t)}function m(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_slacken";return Object(n.b)("post",e,t)}function _(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_down";return Object(n.b)("post",e,t)}function x(t){var e=n.a+"/api/dashboard_sale_doughnut";return Object(n.b)("post",e,t)}function y(t){var e=n.a+"/api/dashboard_sale_bar";return Object(n.b)("post",e,t)}function O(t){var e=n.a+"/api/dashboard_saleByBranch";return Object(n.b)("post",e,t)}function j(t){var e=n.a+"/api/dashboard_inventory_car";return Object(n.b)("get",e,{})}function w(t){var e=n.a+"/api/dashboard_car_registration";return Object(n.b)("get",e,{})}function k(t){var e=n.a+"/api/dashboard_car_insurances";return Object(n.b)("get",e,{})}function C(t){var e=n.a+"/api/dashboard_chanel";return Object(n.b)("post",e,t)}function S(t){var e=n.a+"/api/dashboard_files?path="+t.path;return Object(n.b)("get",e,{})}function $(t){var e=n.a+"/api/dashboard_file_main?path="+t.path;return Object(n.b)("get",e,{})}function P(t){var e=n.a+"/api/dashboard_delete_files?path="+t.path+"&month="+t.month;return Object(n.b)("get",e,{})}function z(t){var e=n.a+"/api/dashboard_top_saler";return Object(n.b)("post",e,t)}function B(t){var e=n.a+"/api/dashboard_top_profit";return Object(n.b)("post",e,t)}function D(t){var e=n.a+"/api/dashboard_sale_compare_commission_mount";return Object(n.b)("post",e,t)}function E(t){var e=n.a+"/api/dashboard_sale_compare_commission_mount_previos_year";return Object(n.b)("post",e,t)}function R(t){var e=n.a+"/api/dashboard_sale_compare_quarters";return Object(n.b)("post",e,t)}function T(t){var e=n.a+"/api/dashboard_car_booking";return Object(n.b)("get",e,t)}},508:function(t,e,r){var content=r(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("197fcea4",content,!0,{sourceMap:!1})},509:function(t,e,r){var n=r(12)(!1);n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=n},536:function(t,e,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7132a15d",content,!0,{sourceMap:!1})},537:function(t,e,r){var n=r(12)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},586:function(t,e,r){"use strict";r(5),r(6),r(10),r(11);var n=r(15),o=r(3),c=(r(8),r(508),r(4)),l=r(100),h=r(81),v=r(22),d=r(122),f=r(21),m=r(39),_=r(55),x=r(124),y=r(7),O=r(1);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,x.a,_.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},_.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(n.a)(e,2),o=r[0],c=r[1];t.$attrs.hasOwnProperty(o)&&Object(y.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),Object(O.s)(this),this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})},613:function(t,e,r){"use strict";r(5),r(6),r(8),r(10),r(11);var n=r(3),o=(r(536),r(21));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},733:function(t,e,r){"use strict";r.r(e);var n=r(485),o=n.e.reactiveProp,c={extends:n.a,mixins:[o],props:["chartData"],data:function(){return{options:{legend:{display:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{bar:{categoryPercentage:.5,barPercentage:1}}],yAxes:[{bar:{categoryPercentage:.5,barPercentage:1},ticks:{beginAtZero:!0,stepSize:1}}]},tooltips:{callbacks:{label:function(t,data){var e=data.datasets[t.datasetIndex],r=e.data[t.index];return e.label+" ("+r+") คัน"},title:function(t,data){return data.labels[t[0].index]}}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},watch:{}},l=r(38),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports},785:function(t,e,r){"use strict";r.r(e);var n=r(190),o=r(149),c=r(586),l=r(424),h=r(613),v=r(191),d=r(423),f=r(9),m=(r(8),r(48),r(483)),_=r(452),x=r(120),y=r.n(x),O={components:{BarChartTopCars:r(733).default},data:function(){return{timeStart:y()().startOf("months").format("YYYY-MM-DD HH:mm"),timeEnd:y()().endOf("months").format("YYYY-MM-DD HH:mm"),dataChart:null,loading:!1,car_types:[],listCars:[]}},mounted:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCartype();case 2:return e.next=4,t.getDataBarVisitCarSerice();case 4:case"end":return e.stop()}}),e)})))()},computed:{},methods:{getCartype:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.b();case 2:r=e.sent,t.car_types=r.data,t.car_types.filter((function(t){return 1==t.car_type_active})),console.log(r.data);case 6:case"end":return e.stop()}}),e)})))()},getDataBarVisitCarSerice:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,(r=new FormData).append("timeStart",t.timeStart),r.append("timeEnd",t.timeEnd),e.next=6,m.a(r);case 6:n=e.sent,t.listCars=n.data,t.listCars.sort((function(a,b){return a.count-b.count})),t.listCars.reverse((function(a,b){return a.count-b.count})),t.loading=!1,console.log(t.listCars);case 12:case"end":return e.stop()}}),e)})))()},selectTimeStart:function(time){this.timeStart=time.timeStart,this.timeEnd=time.timeEnd,this.getDataBarVisitCarSerice()},filterType:function(t){return this.listCars.filter((function(e){return e.car_types_id==t}))},countType:function(t){return this.listCars.filter((function(e){return e.car_types_id==t})).reduce((function(e,r){return r.car_types_id==t?e+r.count:e}),0)}}},j=r(38),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r(v.a,{attrs:{indeterminate:"",color:"yellow darken-2"}}):t._e(),t._v(" "),r(o.b,[r(d.a,{staticClass:"pa-2"},[r(l.a,{attrs:{cols:"5"}}),t._v(" "),r(l.a,{attrs:{cols:"7"}},[r("dateSelectMonth",{on:{timeSelect:t.selectTimeStart}})],1)],1),t._v(" "),r(d.a,t._l(t.car_types,(function(e){return t.filterType(e.id).length>0?r(l.a,{key:e.id,attrs:{cols:"3"}},[r(n.a,{staticStyle:{border:"1px solid #eee"},attrs:{outlined:"",height:"100%"}},[r(o.b,[r("div",[r(c.a,{staticClass:"mr-2",attrs:{ripple:!1,color:"primary"}},[t._v(" "+t._s(t.countType(e.id))+" ")]),t._v("\n              "+t._s(e.car_type_name)+" ("+t._s(e.car_type_name_en)+")\n            ")],1)]),t._v(" "),r(h.a),t._v(" "),r(o.b,t._l(t.filterType(e.id),(function(e,n){return r("div",{key:n},[r(c.a,{staticClass:"mr-2",attrs:{ripple:!1,color:""}},[t._v(" "+t._s(e.count)+" ")]),t._v(" "),r("span",[t._v(" "+t._s(e.car_serie_name))])],1)})),0)],1)],1):t._e()})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);