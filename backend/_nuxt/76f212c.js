(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{429:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return _}));var n=r(9),o=(r(48),r(98)),d=r.n(o),l="https://www.psnkp.co.th/server",c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function _(t,e,r){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function t(e,r,data){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c()){t.next=9;break}return t.next=3,h();case 3:return t.t0=t.sent,n={Authorization:t.t0},t.next=7,d()({method:e,url:r,data:data,headers:n}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},451:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"d",(function(){return h})),r.d(e,"c",(function(){return select}));var n=r(429),path="/api/branches";function o(){var t=n.a+path;return Object(n.b)("get",t,{})}function d(t){var e=n.a+path+"/"+t;return Object(n.b)("delete",e,{})}function l(t){var e=n.a+path;return Object(n.b)("post",e,t)}function c(t,e){var r=n.a+path+"/"+t;return Object(n.b)("post",r,e)}function h(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function select(){var t=n.a+"/api/SelectOnBranches";return Object(n.b)("get",t,{})}},483:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"h",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"g",(function(){return c})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return _})),r.d(e,"a",(function(){return v})),r.d(e,"f",(function(){return f})),r.d(e,"c",(function(){return m})),r.d(e,"k",(function(){return w})),r.d(e,"j",(function(){return y})),r.d(e,"s",(function(){return x})),r.d(e,"r",(function(){return O})),r.d(e,"m",(function(){return j})),r.d(e,"l",(function(){return k})),r.d(e,"n",(function(){return S})),r.d(e,"q",(function(){return $})),r.d(e,"p",(function(){return R})),r.d(e,"o",(function(){return F})),r.d(e,"x",(function(){return C})),r.d(e,"w",(function(){return B})),r.d(e,"t",(function(){return P})),r.d(e,"u",(function(){return z})),r.d(e,"v",(function(){return H}));var n=r(429);function o(t){var e=n.a+"/api/dashboard_manager_doughnut_stock";return Object(n.b)("post",e,t)}function d(t){var e=n.a+"/api/dashboard_manager_bar_car";return Object(n.b)("post",e,t)}function l(t){var e=n.a+"/api/dashboard_manager_bar_visit";return Object(n.b)("post",e,t)}function c(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_type";return Object(n.b)("post",e,t)}function h(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_model";return Object(n.b)("post",e,t)}function _(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_serie";return Object(n.b)("post",e,t)}function v(t){var e=n.a+"/api/dashboard_manager_bar_top_car_serie";return Object(n.b)("post",e,t)}function f(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_slacken";return Object(n.b)("post",e,t)}function m(t){var e=n.a+"/api/dashboard_manager_bar_visit_car_down";return Object(n.b)("post",e,t)}function w(t){var e=n.a+"/api/dashboard_sale_doughnut";return Object(n.b)("post",e,t)}function y(t){var e=n.a+"/api/dashboard_sale_bar";return Object(n.b)("post",e,t)}function x(t){var e=n.a+"/api/dashboard_saleByBranch";return Object(n.b)("post",e,t)}function O(t){var e=n.a+"/api/dashboard_inventory_car";return Object(n.b)("get",e,{})}function j(t){var e=n.a+"/api/dashboard_car_registration";return Object(n.b)("get",e,{})}function k(t){var e=n.a+"/api/dashboard_car_insurances";return Object(n.b)("get",e,{})}function S(t){var e=n.a+"/api/dashboard_chanel";return Object(n.b)("post",e,t)}function $(t){var e=n.a+"/api/dashboard_files?path="+t.path;return Object(n.b)("get",e,{})}function R(t){var e=n.a+"/api/dashboard_file_main?path="+t.path;return Object(n.b)("get",e,{})}function F(t){var e=n.a+"/api/dashboard_delete_files?path="+t.path+"&month="+t.month;return Object(n.b)("get",e,{})}function C(t){var e=n.a+"/api/dashboard_top_saler";return Object(n.b)("post",e,t)}function B(t){var e=n.a+"/api/dashboard_top_profit";return Object(n.b)("post",e,t)}function P(t){var e=n.a+"/api/dashboard_sale_compare_commission_mount";return Object(n.b)("post",e,t)}function z(t){var e=n.a+"/api/dashboard_sale_compare_commission_mount_previos_year";return Object(n.b)("post",e,t)}function H(t){var e=n.a+"/api/dashboard_sale_compare_quarters";return Object(n.b)("post",e,t)}},513:function(t,e,r){var content=r(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7c06aa28",content,!0,{sourceMap:!1})},514:function(t,e,r){var n=r(12)(!1);n.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=n},592:function(t,e,r){"use strict";r(5),r(6),r(8),r(10),r(11);var n=r(3),o=(r(16),r(513),r(1)),d=r(21),l=r(4);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(l.a)(d.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.h)(this.height)}},[this.$createElement("table",Object(o.s)(this))])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[Object(o.s)(this,"top"),this.genWrapper(),Object(o.s)(this,"bottom")])}})},791:function(t,e,r){var content=r(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7d46fe4c",content,!0,{sourceMap:!1})},873:function(t,e,r){"use strict";r(791)},874:function(t,e,r){var n=r(12)(!1);n.push([t.i,".sticky-header{position:sticky;z-index:2;background-color:#fff;border-bottom:#ddd}",""]),t.exports=n},987:function(t,e,r){"use strict";r.r(e);var n=r(190),o=r(592),d=r(9),l=(r(8),r(48),r(483)),c=r(451),h={data:function(){return{branches:[],car_series:[],data:[],rect:{},windowHeight:0}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var element;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBranches();case 2:return e.next=4,t.getData();case 4:element=document.getElementById("first_header"),t.rect=element.getBoundingClientRect(),t.windowHeight=window.innerHeight;case 7:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.r();case 2:r=e.sent,t.data=r.data.inventory_car,t.car_series=r.data.car_series,console.log(r.data);case 6:case"end":return e.stop()}}),e)})))()},getBranches:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c();case 2:r=e.sent,t.branches=r.data;case 4:case"end":return e.stop()}}),e)})))()},countFieldSeparate:function(t,e,r){return this.data.filter((function(e){return"all"==t||e.branch_id==t})).filter((function(t){return"all"==e||t.car_serie_id==e})).filter((function(t){return"all"==r||t.car_stock==r})).reduce((function(t,e){return e.count+t}),0)}}},_=(r(873),r(38)),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(n.a,{attrs:{outlined:""}},[r(o.a,{staticClass:"table-border",attrs:{dense:"","fixed-header":"",height:t.windowHeight-115},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",{attrs:{id:"first_header"}},[r("th",[t._v("ยี่ห้อ")]),t._v(" "),r("th",[r("div",{staticStyle:{width:"200px"}},[t._v("รุ่นรถ")])]),t._v(" "),r("th",[t._v("ทั้งหมด")]),t._v(" "),r("th",[t._v("ขั้นต่ำ")]),t._v(" "),r("th",[t._v("รอรับรถ")]),t._v(" "),t._l(t.branches,(function(e,n){return r("th",{key:n,attrs:{align:"center"}},[t._v("\n            "+t._s(e.branch_name)+"\n          ")])}))],2),t._v(" "),r("tr",{staticClass:"sticky-header",style:"top: "+(t.rect.top+29)+"px",attrs:{id:"second_header"}},[r("th"),t._v(" "),r("th",{staticClass:"sticky-header"}),t._v(" "),r("th",{staticClass:"text-center",staticStyle:{color:"blue"}},[r("b",[t._v(t._s(t.countFieldSeparate("all","all","all")))])]),t._v(" "),r("th"),t._v(" "),r("th",{staticClass:"text-center",staticStyle:{color:"orange"}},[r("b",[t._v(t._s(t.countFieldSeparate("all","all",1)))])]),t._v(" "),t._l(t.branches,(function(e,n){return r("th",{key:n,staticClass:"text-center"},[t.countFieldSeparate(e.id,"all",2)>0?r("b",[t._v(t._s(t.countFieldSeparate(e.id,"all",2)))]):t._e()])}))],2)]),t._v(" "),r("tbody",t._l(t.car_series,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.car_model_name))]),t._v(" "),r("td",[t._v(t._s(e.label))]),t._v(" "),r("td",{attrs:{align:"center"}},[r("span",{style:t.countFieldSeparate("all",e.car_serie_id,"all")>=e.car_series_minimum?"color: blue":"color: red"},[r("b",[t._v("\n                "+t._s(t.countFieldSeparate("all",e.car_serie_id,"all"))+"\n              ")])])]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v(t._s(e.car_series_minimum))]),t._v(" "),r("td",{attrs:{align:"center"}},[t.countFieldSeparate("all",e.car_serie_id,1)>0?r("b",{staticStyle:{color:"orange"}},[t._v(t._s(t.countFieldSeparate("all",e.car_serie_id,1)))]):t._e()]),t._v(" "),t._l(t.branches,(function(n,o){return r("td",{key:o,attrs:{align:"center"}},[t.countFieldSeparate(n.id,e.car_serie_id,2)>0?r("b",{staticStyle:{color:"green"}},[t._v(t._s(t.countFieldSeparate(n.id,e.car_serie_id,2)))]):t._e()])}))],2)})),0)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);