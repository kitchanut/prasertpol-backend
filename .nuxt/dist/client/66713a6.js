(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{599:function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"b",(function(){return f}));var r=n(454),path="/api/request_cancle";function c(t){var e=r.a+path;return Object(r.b)("post",e,t)}function o(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function l(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function m(t){var e=r.a+path+"/cancle/"+t;return Object(r.b)("delete",e,{})}function v(t){var e=r.a+path+"/indexCustom";return Object(r.b)("post",e,t)}function f(t){var e=r.a+path+"/countData";return Object(r.b)("post",e,t)}},987:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(57),n(39),n(599)),o=n(457),d=n(492),l=n(129),m=n.n(l),v=n(516),f={components:{dialogImage:d.default,dateSelect2:v.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server",timeStart:m()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:m()().endOf("day").format("YYYY-MM-DD HH:mm"),toggle:"pedding",loading:!0,dialogImg:!1,imgUrl:"",dialog:!1,id:"",formTitle:"",action:"",user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),search:"",headers:[{text:"จัดการ",value:"actions",sortable:!1,width:"9%"},{text:"Line",value:"pictureUrl",align:"center",width:"12%"},{text:"เซล/สาขา",value:"sale_name",width:"15%"},{text:"ลำดับรถ",value:"car_no",width:"10%"},{text:"เหตุผล",value:"note"},{text:"รูปบัตร",value:"id_card",width:"8%"},{text:"วันแจ้ง",value:"created_at",width:"11%"}],data:[],count:[]}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))}},methods:{selectTimeStart:function(time){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.timeStart=time.timeStart,t.timeEnd=time.timeEnd,t.getData();case 3:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.countData(),(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),data.append("toggle",t.toggle),e.next=8,c.d(data);case 8:n=e.sent,t.data=n.data,t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},countData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),e.next=5,c.b(data);case 5:n=e.sent,t.count=n.data;case 7:case"end":return e.stop()}}),e)})))()},showImg:function(t){this.dialogImg=!0,this.imgUrl=t},editItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.g(t).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nextTick((function(){e.getData()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})))()},cancleItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a(t);case 2:n.sent,e.getData();case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=o.a(),n.next=3,d.then((function(n){1==n&&c.c(t).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nextTick((function(){e.getData()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:case"end":return n.stop()}}),n)})))()},addSuccess:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),o.k()}));case 2:case"end":return e.stop()}}),e)})))()},addError:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!1,t.$nextTick((function(){t.getData(),o.j()}));case 2:case"end":return e.stop()}}),e)})))()}},watch:{data:function(){return this.data.map((function(t,e){t.no=e+1}))}}},h=f,_=n(42),w=n(52),x=n.n(w),k=n(198),R=n(210),D=n(908),I=n(192),O=n(157),j=n(445),S=n(914),y=n(146),V=n(155),T=n(450),U=n(451),E=n(86),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1==t.user_group_permission?n("div",[n("v-card",[n("v-card-text",[n("dateSelect2",{on:{timeSelect:t.selectTimeStart}}),t._v(" "),n("v-row",{staticClass:"d-flex align-center"},[n("v-btn-toggle",{staticClass:"ml-5",attrs:{mandatory:"",color:"primary"},on:{change:function(e){return t.getData()}},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[n("v-btn",{attrs:{value:"pedding"}},[t._v("รอดำเนินการ ("+t._s(t.count.pedding)+")")]),t._v(" "),n("v-btn",{attrs:{value:"approve"}},[t._v("ดำเนินการแล้ว ("+t._s(t.count.approve)+")")]),t._v(" "),n("v-btn",{attrs:{value:"cancle"}},[t._v("ยกเลิก ("+t._s(t.count.cancle)+")")]),t._v(" "),n("v-btn",{attrs:{value:"all"}},[t._v("ทั้งหมด ("+t._s(t.count.all)+")")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",[n("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":"",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.data,"items-per-page":10,search:t.search,loading:t.loading,"loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:t._u([{key:"item.note",fn:function(e){var r=e.item;return[n("span",{staticStyle:{"white-space":"pre"}},[t._v(t._s(r.note))])]}},{key:"item.pictureUrl",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:""}},[n("v-avatar",{attrs:{size:"40"},on:{click:function(e){return t.showImg(r.pictureUrl)}}},[n("v-img",{attrs:{src:r.pictureUrl}})],1)],1),t._v(" "),n("div",[t._v(t._s(r.displayName))])]}},{key:"item.sale_name",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(r.sale_name))]),t._v(" "),n("div",[t._v(t._s(r.branch_name))])]}},{key:"item.id_card",fn:function(e){var r=e.item;return[n("v-img",{attrs:{width:"50px",src:t.serverUrl+r.id_card},on:{click:function(e){return t.showImg(t.serverUrl+r.id_card)}}})]}},{key:"item.actions",fn:function(e){var r=e.item;return["pedding"==r.request_status?n("v-btn",{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n("v-icon",[t._v(" mdi-checkbox-blank-outline")])],1):"approve"==r.request_status?n("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n("v-icon",[t._v(" mdi-checkbox-outline")])],1):"cancle"==r.request_status?n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(e){return t.editItem(r.id)}}},[n("v-icon",[t._v(" mdi-arrow-u-left-top")])],1):t._e(),t._v(" "),"cancle"!=r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.cancleItem(r.id)}}},[n("v-icon",[t._v(" mdi-delete ")])],1):t._e(),t._v(" "),"cancle"==r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n("v-icon",[t._v(" mdi-delete ")])],1):t._e()]}}],null,!0)})],1),t._v(" "),n("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(e){t.dialogImg=!1}}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;x()(component,{VAvatar:k.a,VBtn:R.a,VBtnToggle:D.a,VCard:I.a,VCardText:O.b,VCol:j.a,VDataTable:S.a,VIcon:y.a,VImg:V.a,VRow:T.a,VSpacer:U.a,VTextField:E.a})}}]);