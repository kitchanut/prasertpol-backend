(window.webpackJsonp=window.webpackJsonp||[]).push([[175,98],{454:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return v}));var r=n(14),l=(n(57),n(109)),_=n.n(l),c="https://www.psnkp.co.th/server",o=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function v(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,_()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return l=t.sent,t.abrupt("return",l);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},506:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"j",(function(){return _})),n.d(e,"k",(function(){return c})),n.d(e,"i",(function(){return o})),n.d(e,"m",(function(){return d})),n.d(e,"h",(function(){return v})),n.d(e,"g",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return w})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return k})),n.d(e,"l",(function(){return F}));var r=n(454),path="/api/working";function l(){var t=r.a+"/api/working_allData";return Object(r.b)("get",t,{})}function _(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function o(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function d(t,e){var n=r.a+"/api/updateStatusWorking/"+t;return Object(r.b)("post",n,e)}function v(t){var e=r.a+"/api/workWhereClose";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/selectWhereCancle";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/work_cancel";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/get_work_cancel";return Object(r.b)("post",e,t)}function w(t){var e=r.a+"/api/working_search_id/"+t;return Object(r.b)("post",e,{})}function y(t){var e=r.a+"/api/followWork";return Object(r.b)("post",e,t)}function k(t){var e=r.a+"/api/followDown";return Object(r.b)("get",e,t)}function F(t,e){var n=r.a+"/api/updateNote/"+t;return Object(r.b)("post",n,e)}},539:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return _})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return select}));var r=n(454),path="/api/branch_teams";function l(){var t=r.a+path;return Object(r.b)("get",t,{})}function _(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function c(t){var e=r.a+path;return Object(r.b)("post",e,t)}function o(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBranchTeams";return Object(r.b)("get",t,{})}},574:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7c06aa28",content,!0,{sourceMap:!1})},575:function(t,e,n){var r=n(9)(!1);r.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=r},633:function(t,e,n){"use strict";n(6),n(7),n(8),n(11),n(12);var r=n(2),l=(n(17),n(574),n(0)),_=n(13),c=n(4);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(c.a)(_.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(l.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},919:function(t,e,n){"use strict";n.r(e);var r=n(14),l=(n(57),n(8),n(539)),_=n(506),c={data:function(){return{loading:!1,data:[],branchTeams:[]}},mounted:function(){this.getBranchTeam(),this.getData()},methods:{getBranchTeam:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,l.b();case 3:n=e.sent,t.branchTeams=n.data.filter((function(t){return 1==t.branch_team_active})),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,_.d();case 3:n=e.sent,t.data=n.data.data,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},countField:function(t,e){return 1==t||2==t||5==t||7==t||8==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).reduce((function(e,n){return n.work_status>=t?e+1:e}),0):"appointment_bank_type"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=5})).reduce((function(t,e){return"ไม่ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_bank_type_success"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=5})).reduce((function(t,e){return"ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_sentbook_date"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return" "!=e.appointment_sentbook_date?t+1:t}),0):"appointment_money_price"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return e.appointment_money_price>0?t+1:t}),0):void 0},countFieldSeparate:function(t,e){return"appointment_bank_type"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=5})).reduce((function(t,e){return"ไม่ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_bank_type_success"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return 5==t.work_status})).reduce((function(t,e){return"ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_sentbook_date"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return" "!=e.appointment_sentbook_date?t+1:t}),0):"appointment_money_price"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return e.appointment_money_price<=0?t+1:t}),0):"all"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=1})).reduce((function(t,e){return e.work_status>=1?t+1:t}),0):this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).reduce((function(e,n){return n.work_status==t?e+1:e}),0)}}},o=n(42),d=n(52),v=n.n(d),h=n(192),m=n(157),f=n(200),w=n(633),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v("\n      แยกรายสถานะ\n    ")]),t._v(" "),[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("\n                ทีมสาขา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                1.สนใจ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                2.จอง\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                3.มัดจำ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                4.รอทำสัญญา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                5.ทำสัญญาแล้ว/รอแบงค์อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{color:"green"}},[t._v("\n                เอกสารครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{color:"red"}},[t._v("\n                เอกสารไม่ครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                6.ไม่อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                7.อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                8.ปล่อยรถ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                9.รอตรวจสอบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                10.รอปิดงาน\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ส่งเล่มทำเงิน\n              ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{color:"red"}},[t._v("\n                ยังไม่ได้รับเงิน\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                รวมทุกสถานะ\n              ")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ทั้งหมด")]),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(1,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(2,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(3,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(4,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(5,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_bank_type_success","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_bank_type","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(6,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(7,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(8,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(9,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(10,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_sentbook_date","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_money_price","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("all","all")))])])],1)]),t._v(" "),t._l(t.branchTeams,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.branch_team_name))]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v(t._s(t.countFieldSeparate(1,e.branch_team_name)))]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(2,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(3,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(4,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(5,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countFieldSeparate("appointment_bank_type_success",e.branch_team_name)>0?n("div",{staticStyle:{color:"green"}},[t._v(t._s(t.countFieldSeparate("appointment_bank_type_success",e.branch_team_name)))]):n("div",[t._v(t._s(t.countFieldSeparate("appointment_bank_type_success",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countFieldSeparate("appointment_bank_type",e.branch_team_name)>0?n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countFieldSeparate("appointment_bank_type",e.branch_team_name)))]):n("div",[t._v(t._s(t.countFieldSeparate("appointment_bank_type",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(6,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(7,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(8,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(9,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(10,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate("appointment_sentbook_date",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countFieldSeparate("appointment_sentbook_date",e.branch_team_name)-t.countFieldSeparate("appointment_money_price",e.branch_team_name)>0?n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countFieldSeparate("appointment_money_price",e.branch_team_name)))]):n("div",[t._v(t._s(t.countFieldSeparate("appointment_money_price",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate("all",e.branch_team_name)))])])])}))],2)]},proxy:!0}])})]],2),t._v(" "),n("v-card",{staticClass:"mt-5"},[n("v-card-title",[t._v("\n      สถานะแบบต่อเนื่อง\n    ")]),t._v(" "),[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("\n                ทีมสาขา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                สนใจ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                จอง\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                เซนต์สัญญา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                เอกสารครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                เอกสารไม่ครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ปล่อยรถ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ส่งเล่มทำเงิน\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ได้รับเงินแล้ว\n              ")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ทั้งหมด")]),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(1,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(2,"all"))+" ("+t._s(t.countField(1,"all")-t.countField(2,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(5,"all"))+" ("+t._s(t.countField(2,"all")-t.countField(5,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_bank_type_success","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_bank_type","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(7,"all"))+" ("+t._s(t.countField(5,"all")-t.countField(7,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(8,"all"))+" ("+t._s(t.countField(7,"all")-t.countField(8,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_sentbook_date","all"))+" ("+t._s(t.countField(8,"all")-t.countField("appointment_sentbook_date","all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n("v-chip",{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_money_price","all"))+" ("+t._s(t.countField("appointment_sentbook_date","all")-t.countField("appointment_money_price","all"))+")")])])],1)]),t._v(" "),t._l(t.branchTeams,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.branch_team_name))]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v(t._s(t.countField(1,e.branch_team_name)))]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(1,e.branch_team_name)==t.countField(2,e.branch_team_name)?n("div",[t._v(t._s(t.countField(2,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(2,e.branch_team_name))+" ("+t._s(t.countField(1,e.branch_team_name)-t.countField(2,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(2,e.branch_team_name)==t.countField(5,e.branch_team_name)?n("div",[t._v(t._s(t.countField(5,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(5,e.branch_team_name))+" ("+t._s(t.countField(2,e.branch_team_name)-t.countField(5,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[0==t.countField("appointment_bank_type_success",e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_bank_type_success",e.branch_team_name)))]):n("div",{staticStyle:{color:"green"}},[t._v(t._s(t.countField("appointment_bank_type_success",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[0==t.countField("appointment_bank_type",e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_bank_type",e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField("appointment_bank_type",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(5,e.branch_team_name)==t.countField(7,e.branch_team_name)?n("div",[t._v(t._s(t.countField(7,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(7,e.branch_team_name))+" ("+t._s(t.countField(5,e.branch_team_name)-t.countField(7,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(7,e.branch_team_name)==t.countField(8,e.branch_team_name)?n("div",[t._v(t._s(t.countField(8,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(8,e.branch_team_name))+" ("+t._s(t.countField(7,e.branch_team_name)-t.countField(8,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField("appointment_sentbook_date",e.branch_team_name)==t.countField(8,e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_sentbook_date",e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField("appointment_sentbook_date",e.branch_team_name))+" ("+t._s(t.countField(8,e.branch_team_name)-t.countField("appointment_sentbook_date",e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField("appointment_money_price",e.branch_team_name)==t.countField("appointment_sentbook_date",e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_money_price",e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField("appointment_money_price",e.branch_team_name))+" ("+t._s(t.countField("appointment_sentbook_date",e.branch_team_name)-t.countField("appointment_money_price",e.branch_team_name))+")")])])])}))],2)]},proxy:!0}])})]],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:h.a,VCardTitle:m.c,VChip:f.a,VSimpleTable:w.a})}}]);