(window.webpackJsonp=window.webpackJsonp||[]).push([[195,157],{429:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return v}));var r=n(9),l=(n(48),n(98)),o=n.n(l),c="https://www.psnkp.co.th/server",d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function v(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=9;break}return t.next=3,_();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,o()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return l=t.sent,t.abrupt("return",l);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},490:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"l",(function(){return o})),n.d(e,"m",(function(){return c})),n.d(e,"k",(function(){return d})),n.d(e,"o",(function(){return _})),n.d(e,"j",(function(){return v})),n.d(e,"i",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return x})),n.d(e,"f",(function(){return y})),n.d(e,"e",(function(){return w})),n.d(e,"d",(function(){return k})),n.d(e,"n",(function(){return F})),n.d(e,"a",(function(){return C}));var r=n(429),path="/api/working";function l(){var t=r.a+"/api/working_allData";return Object(r.b)("get",t,{})}function o(t){var e=r.a+path;return Object(r.b)("post",e,t)}function c(t,e){var n=r.a+path+"/"+t;return Object(r.b)("post",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function _(t,e){var n=r.a+"/api/updateStatusWorking/"+t;return Object(r.b)("post",n,e)}function v(t){var e=r.a+"/api/workWhereClose";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/selectWhereCancle";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/work_cancel";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/get_work_cancel";return Object(r.b)("post",e,t)}function x(t){var e=r.a+"/api/working_search_id/"+t;return Object(r.b)("post",e,{})}function y(t){var e=r.a+"/api/followWork";return Object(r.b)("post",e,t)}function w(t){var e=r.a+"/api/followDown";return Object(r.b)("get",e,t)}function k(t){var e=r.a+"/api/commission_month_by_team_branch";return Object(r.b)("post",e,t)}function F(t,e){var n=r.a+"/api/updateNote/"+t;return Object(r.b)("post",n,e)}function C(t){var e=r.a+"/api/activeWorkingID";return Object(r.b)("get",e,t)}},500:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return _})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/branch_teams";function l(){var t=r.a+path;return Object(r.b)("get",t,{})}function o(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function c(t){var e=r.a+path;return Object(r.b)("post",e,t)}function d(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function _(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBranchTeams";return Object(r.b)("get",t,{})}},508:function(t,e,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("197fcea4",content,!0,{sourceMap:!1})},509:function(t,e,n){var r=n(12)(!1);r.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},513:function(t,e,n){var content=n(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("7c06aa28",content,!0,{sourceMap:!1})},514:function(t,e,n){var r=n(12)(!1);r.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=r},586:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(15),l=n(3),o=(n(8),n(508),n(4)),c=n(100),d=n(81),_=n(22),v=n(122),h=n(21),m=n(39),f=n(55),x=n(124),y=n(7),w=n(1);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(_.a,x.a,f.a,h.a,Object(v.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return F(F(F(F({"v-chip":!0},f.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(f.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),l=n[0],o=n[1];t.$attrs.hasOwnProperty(l)&&Object(y.a)(l,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),Object(w.s)(this),this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=F(F({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var l=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(l,data),e)}})},592:function(t,e,n){"use strict";n(5),n(6),n(8),n(10),n(11);var r=n(3),l=(n(16),n(513),n(1)),o=n(21),c=n(4);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(c.a)(o.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(l.h)(this.height)}},[this.$createElement("table",Object(l.s)(this))])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[Object(l.s)(this,"top"),this.genWrapper(),Object(l.s)(this,"bottom")])}})},990:function(t,e,n){"use strict";n.r(e);var r=n(190),l=n(149),o=n(586),c=n(592),d=n(9),_=(n(48),n(8),n(500)),v=n(490),h={data:function(){return{loading:!1,data:[],branchTeams:[]}},mounted:function(){this.getBranchTeam(),this.getData()},methods:{getBranchTeam:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,_.b();case 3:n=e.sent,t.branchTeams=n.data.filter((function(t){return 1==t.branch_team_active})),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,v.f();case 3:n=e.sent,t.data=n.data.data,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},countField:function(t,e){return 1==t||2==t||5==t||7==t||8==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).reduce((function(e,n){return n.work_status>=t?e+1:e}),0):"appointment_bank_type"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=5})).reduce((function(t,e){return"ไม่ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_bank_type_success"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=5})).reduce((function(t,e){return"ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_sentbook_date"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return" "!=e.appointment_sentbook_date?t+1:t}),0):"appointment_money_price"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return e.appointment_money_price>0?t+1:t}),0):void 0},countFieldSeparate:function(t,e){return"appointment_bank_type"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=5})).reduce((function(t,e){return"ไม่ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_bank_type_success"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return 5==t.work_status})).reduce((function(t,e){return"ครบ"==e.appointment_bank_type?t+1:t}),0):"appointment_sentbook_date"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return" "!=e.appointment_sentbook_date?t+1:t}),0):"appointment_money_price"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return" "!=t.appointment_sentbook_date})).reduce((function(t,e){return e.appointment_money_price<=0?t+1:t}),0):"all"==t?this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).filter((function(t){return t.work_status>=1})).reduce((function(t,e){return e.work_status>=1?t+1:t}),0):this.data.filter((function(t){return"all"==e||t.branch_team_name==e})).reduce((function(e,n){return n.work_status==t?e+1:e}),0)}}},m=n(38),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(r.a,[n(l.c,[t._v("\n      แยกรายสถานะ\n    ")]),t._v(" "),[n(c.a,{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("\n                ทีมสาขา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                1.สนใจ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                2.จอง\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                3.มัดจำ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                4.รอทำสัญญา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                5.ทำสัญญาแล้ว/รอแบงค์อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{color:"green"}},[t._v("\n                เอกสารครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{color:"red"}},[t._v("\n                เอกสารไม่ครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                6.ไม่อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                7.อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                8.ปล่อยรถ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                9.รอตรวจสอบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                10.รอปิดงาน\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ส่งเล่มทำเงิน\n              ")]),t._v(" "),n("th",{staticClass:"text-center",staticStyle:{color:"red"}},[t._v("\n                ยังไม่ได้รับเงิน\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                รวมทุกสถานะ\n              ")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ทั้งหมด")]),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(1,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(2,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(3,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(4,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(5,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_bank_type_success","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_bank_type","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(6,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(7,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(8,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(9,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate(10,"all"))+" ")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_sentbook_date","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("appointment_money_price","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countFieldSeparate("all","all")))])])],1)]),t._v(" "),t._l(t.branchTeams,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.branch_team_name))]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v(t._s(t.countFieldSeparate(1,e.branch_team_name)))]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(2,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(3,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(4,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(5,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countFieldSeparate("appointment_bank_type_success",e.branch_team_name)>0?n("div",{staticStyle:{color:"green"}},[t._v(t._s(t.countFieldSeparate("appointment_bank_type_success",e.branch_team_name)))]):n("div",[t._v(t._s(t.countFieldSeparate("appointment_bank_type_success",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countFieldSeparate("appointment_bank_type",e.branch_team_name)>0?n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countFieldSeparate("appointment_bank_type",e.branch_team_name)))]):n("div",[t._v(t._s(t.countFieldSeparate("appointment_bank_type",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(6,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(7,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(8,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(9,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate(10,e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate("appointment_sentbook_date",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countFieldSeparate("appointment_sentbook_date",e.branch_team_name)-t.countFieldSeparate("appointment_money_price",e.branch_team_name)>0?n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countFieldSeparate("appointment_money_price",e.branch_team_name)))]):n("div",[t._v(t._s(t.countFieldSeparate("appointment_money_price",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[n("div",[t._v(t._s(t.countFieldSeparate("all",e.branch_team_name)))])])])}))],2)]},proxy:!0}])})]],2),t._v(" "),n(r.a,{staticClass:"mt-5"},[n(l.c,[t._v("\n      สถานะแบบต่อเนื่อง\n    ")]),t._v(" "),[n(c.a,{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("\n                ทีมสาขา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                สนใจ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                จอง\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                เซนต์สัญญา\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                เอกสารครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                เอกสารไม่ครบ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                อนุมัติ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ปล่อยรถ\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ส่งเล่มทำเงิน\n              ")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("\n                ได้รับเงินแล้ว\n              ")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ทั้งหมด")]),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(1,"all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(2,"all"))+" ("+t._s(t.countField(1,"all")-t.countField(2,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(5,"all"))+" ("+t._s(t.countField(2,"all")-t.countField(5,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_bank_type_success","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_bank_type","all")))])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(7,"all"))+" ("+t._s(t.countField(5,"all")-t.countField(7,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField(8,"all"))+" ("+t._s(t.countField(7,"all")-t.countField(8,"all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_sentbook_date","all"))+" ("+t._s(t.countField(8,"all")-t.countField("appointment_sentbook_date","all"))+")")])])],1),t._v(" "),n("td",{attrs:{align:"center"}},[n(o.a,{staticClass:"ma-2",attrs:{small:""}},[n("b",[t._v(t._s(t.countField("appointment_money_price","all"))+" ("+t._s(t.countField("appointment_sentbook_date","all")-t.countField("appointment_money_price","all"))+")")])])],1)]),t._v(" "),t._l(t.branchTeams,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.branch_team_name))]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v(t._s(t.countField(1,e.branch_team_name)))]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(1,e.branch_team_name)==t.countField(2,e.branch_team_name)?n("div",[t._v(t._s(t.countField(2,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(2,e.branch_team_name))+" ("+t._s(t.countField(1,e.branch_team_name)-t.countField(2,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(2,e.branch_team_name)==t.countField(5,e.branch_team_name)?n("div",[t._v(t._s(t.countField(5,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(5,e.branch_team_name))+" ("+t._s(t.countField(2,e.branch_team_name)-t.countField(5,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[0==t.countField("appointment_bank_type_success",e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_bank_type_success",e.branch_team_name)))]):n("div",{staticStyle:{color:"green"}},[t._v(t._s(t.countField("appointment_bank_type_success",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[0==t.countField("appointment_bank_type",e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_bank_type",e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField("appointment_bank_type",e.branch_team_name)))])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(5,e.branch_team_name)==t.countField(7,e.branch_team_name)?n("div",[t._v(t._s(t.countField(7,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(7,e.branch_team_name))+" ("+t._s(t.countField(5,e.branch_team_name)-t.countField(7,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField(7,e.branch_team_name)==t.countField(8,e.branch_team_name)?n("div",[t._v(t._s(t.countField(8,e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField(8,e.branch_team_name))+" ("+t._s(t.countField(7,e.branch_team_name)-t.countField(8,e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField("appointment_sentbook_date",e.branch_team_name)==t.countField(8,e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_sentbook_date",e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField("appointment_sentbook_date",e.branch_team_name))+" ("+t._s(t.countField(8,e.branch_team_name)-t.countField("appointment_sentbook_date",e.branch_team_name))+")")])]),t._v(" "),n("td",{attrs:{align:"center"}},[t.countField("appointment_money_price",e.branch_team_name)==t.countField("appointment_sentbook_date",e.branch_team_name)?n("div",[t._v(t._s(t.countField("appointment_money_price",e.branch_team_name)))]):n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.countField("appointment_money_price",e.branch_team_name))+" ("+t._s(t.countField("appointment_sentbook_date",e.branch_team_name)-t.countField("appointment_money_price",e.branch_team_name))+")")])])])}))],2)]},proxy:!0}])})]],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);