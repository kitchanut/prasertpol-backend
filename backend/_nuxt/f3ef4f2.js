(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{765:function(e,t,n){"use strict";n.r(t);var r=n(14),c=(n(57),n(676)),o=n(457),l=n(719),d=n(598),x=n(596),f=n(605),k=n(597),m=n(604),v=n(600),_=n(601),h=n(606),w=n(602),y=n(603),R=n(599),D={props:["dialog","car_no"],components:{drawerRequestLog:l.default},data:function(){return{dialogComponent:!1,loading:!1,update:!1,drawerRequestLog:!1,type:"",id:"",search:"",headers:[{text:"จัดการ",value:"request_status",sortable:!1,width:"9%"},{text:"เวลา",value:"created_at",width:"11%"},{text:"Line",value:"pictureUrl",align:"center",width:"12%"},{text:"เซล/สาขา",value:"sale_name",width:"12%"},{text:"ประเภท",value:"type",width:"12%"},{text:"ลำดับรถ",value:"car_no_all"},{text:"รายละเอียด",value:"actions",sortable:!1,align:"center",width:"8%"}],data:[]}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,(data=new FormData).append("timeStart",""),data.append("timeEnd",""),data.append("toggle",""),data.append("search",e.car_no),t.next=8,c.b(data);case 8:n=t.sent,e.data=n.data,e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},showData:function(e,t){this.type=e,this.id=t,this.drawerRequestLog=!0},close:function(){this.update?this.$emit("success"):this.$emit("cancleItem")},editItem:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("การจอง"!=e){r.next=6;break}return r.next=3,d.g(t);case 3:r.sent,r.next=64;break;case 6:if("นัดทำสัญญา"!=e){r.next=12;break}return r.next=9,x.g(t);case 9:r.sent,r.next=64;break;case 12:if("การทำสัญญา"!=e){r.next=18;break}return r.next=15,f.g(t);case 15:r.sent,r.next=64;break;case 18:if("แบงค์อนุมัติ"!=e){r.next=24;break}return r.next=21,k.g(t);case 21:r.sent,r.next=64;break;case 24:if("ปล่อยรถ"!=e){r.next=30;break}return r.next=27,m.g(t);case 27:r.sent,r.next=64;break;case 30:if("เปลี่ยนจอง"!=e){r.next=36;break}return r.next=33,v.g(t);case 33:r.sent,r.next=64;break;case 36:if("เปลี่ยนคนจอง"!=e){r.next=42;break}return r.next=39,_.g(t);case 39:r.sent,r.next=64;break;case 42:if("อัพเดทข้อมูล"!=e){r.next=48;break}return r.next=45,h.g(t);case 45:r.sent,r.next=64;break;case 48:if("การรับเงิน"!=e){r.next=54;break}return r.next=51,w.g(t);case 51:r.sent,r.next=64;break;case 54:if("เบิกเงิน"!=e){r.next=60;break}return r.next=57,y.g(t);case 57:r.sent,r.next=64;break;case 60:if("ยกเลิกจอง"!=e){r.next=64;break}return r.next=63,R.g(t);case 63:r.sent;case 64:n.update=!0,n.getData();case 66:case"end":return r.stop()}}),r)})))()},cancleItem:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("การจอง"!=e){r.next=6;break}return r.next=3,d.a(t);case 3:r.sent,r.next=64;break;case 6:if("นัดทำสัญญา"!=e){r.next=12;break}return r.next=9,x.a(t);case 9:r.sent,r.next=64;break;case 12:if("การทำสัญญา"!=e){r.next=18;break}return r.next=15,f.a(t);case 15:r.sent,r.next=64;break;case 18:if("แบงค์อนุมัติ"!=e){r.next=24;break}return r.next=21,k.a(t);case 21:r.sent,r.next=64;break;case 24:if("ปล่อยรถ"!=e){r.next=30;break}return r.next=27,m.a(t);case 27:r.sent,r.next=64;break;case 30:if("เปลี่ยนจอง"!=e){r.next=36;break}return r.next=33,v.a(t);case 33:r.sent,r.next=64;break;case 36:if("เปลี่ยนคนจอง"!=e){r.next=42;break}return r.next=39,_.a(t);case 39:r.sent,r.next=64;break;case 42:if("อัพเดทข้อมูล"!=e){r.next=48;break}return r.next=45,h.a(t);case 45:r.sent,r.next=64;break;case 48:if("การรับเงิน"!=e){r.next=54;break}return r.next=51,w.a(t);case 51:r.sent,r.next=64;break;case 54:if("เบิกเงิน"!=e){r.next=60;break}return r.next=57,y.a(t);case 57:r.sent,r.next=64;break;case 60:if("ยกเลิกจอง"!=e){r.next=64;break}return r.next=63,R.a(t);case 63:r.sent;case 64:n.update=!0,n.getData();case 66:case"end":return r.stop()}}),r)})))()},deleteItem:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function c(){var l;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l=o.a(),c.next=3,l.then(function(){var c=Object(r.a)(regeneratorRuntime.mark((function r(c){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(1!=c){r.next=68;break}if(null,"การจอง"!=e){r.next=8;break}return r.next=5,d.c(t);case 5:r.sent,r.next=66;break;case 8:if("นัดทำสัญญา"!=e){r.next=14;break}return r.next=11,x.c(t);case 11:r.sent,r.next=66;break;case 14:if("การทำสัญญา"!=e){r.next=20;break}return r.next=17,f.c(t);case 17:r.sent,r.next=66;break;case 20:if("แบงค์อนุมัติ"!=e){r.next=26;break}return r.next=23,k.c(t);case 23:r.sent,r.next=66;break;case 26:if("ปล่อยรถ"!=e){r.next=32;break}return r.next=29,m.c(t);case 29:r.sent,r.next=66;break;case 32:if("เปลี่ยนจอง"!=e){r.next=38;break}return r.next=35,v.c(t);case 35:r.sent,r.next=66;break;case 38:if("เปลี่ยนคนจอง"!=e){r.next=44;break}return r.next=41,_.c(t);case 41:r.sent,r.next=66;break;case 44:if("อัพเดทข้อมูล"!=e){r.next=50;break}return r.next=47,h.c(t);case 47:r.sent,r.next=66;break;case 50:if("การรับเงิน"!=e){r.next=56;break}return r.next=53,w.c(t);case 53:r.sent,r.next=66;break;case 56:if("เบิกเงิน"!=e){r.next=62;break}return r.next=59,y.c(t);case 59:r.sent,r.next=66;break;case 62:if("ยกเลิกจอง"!=e){r.next=66;break}return r.next=65,R.c(t);case 65:r.sent;case 66:n.update=!0,n.getData();case 68:case"end":return r.stop()}}),r)})));return function(e){return c.apply(this,arguments)}}());case 3:case"end":return c.stop()}}),c)})))()}},watch:{dialog:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.dialogComponent=e.dialog,e.dialogComponent&&(e.update=!1,e.getData());case 2:case"end":return t.stop()}}),t)})))()}}},I=D,C=n(42),L=n(52),V=n.n(L),O=n(198),j=n(210),S=n(192),N=n(453),U=n(914),E=n(446),T=n(146),Y=n(155),$=n(51),H=n(93),component=Object(C.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",persistent:""},model:{value:e.dialogComponent,callback:function(t){e.dialogComponent=t},expression:"dialogComponent"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("div",{staticClass:"container",staticStyle:{"align-items":"center",display:"flex",position:"relative: padding: 0px"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.close()}}},[n("v-icon",[e._v("mdi-close")])],1),e._v(" "),n("v-toolbar-title",[e._v("ประวัติการแจ้ง")])],1)]),e._v(" "),n("v-container",[n("v-card",[n("v-data-table",{attrs:{headers:e.headers,items:e.data,"items-per-page":10,search:e.search,loading:e.loading,"mobile-breakpoint":0,"multi-sort":"","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:e._u([{key:"item.pictureUrl",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{icon:""}},[n("v-avatar",{attrs:{size:"40"},on:{click:function(t){return e.showImg(r.pictureUrl)}}},[n("v-img",{attrs:{src:r.pictureUrl}})],1)],1),e._v(" "),n("div",[e._v(e._s(r.displayName))])]}},{key:"item.sale_name",fn:function(t){var r=t.item;return[n("div",[e._v(e._s(r.sale_name))]),e._v(" "),n("div",[e._v(e._s(r.branch_name))])]}},{key:"item.car_no_all",fn:function(t){var r=t.item;return["เปลี่ยนจอง"==r.type?n("div",[n("span",[e._v(e._s(r.car_no_old))]),e._v("\n              =>\n              "),n("span",[e._v(e._s(r.car_no))])]):n("div",[n("span",[e._v(e._s(r.car_no))])])]}},{key:"item.request_status",fn:function(t){var r=t.item;return["pedding"==r.request_status?n("v-btn",{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-checkbox-blank-outline")])],1):"approve"==r.request_status?n("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-checkbox-outline")])],1):"cancle"==r.request_status?n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-arrow-u-left-top")])],1):e._e(),e._v(" "),"cancle"!=r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(t){return e.cancleItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-close ")])],1):e._e(),e._v(" "),"cancle"==r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(t){return e.deleteItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-delete ")])],1):e._e()]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.showData(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-information-variant ")])],1)]}}],null,!0)})],1)],1)],1),e._v(" "),n("drawerRequestLog",{attrs:{dialog:e.drawerRequestLog,type:e.type,id:e.id},on:{success:function(t){return e.getData()},cancleItem:function(t){e.drawerRequestLog=!1}}})],1)}),[],!1,null,"3a8b8b19",null);t.default=component.exports;V()(component,{VAvatar:O.a,VBtn:j.a,VCard:S.a,VContainer:N.a,VDataTable:U.a,VDialog:E.a,VIcon:T.a,VImg:Y.a,VToolbar:$.a,VToolbarTitle:H.b})},990:function(e,t,n){"use strict";n.r(t);var r=n(14),c=(n(57),n(39),n(676)),o=n(457),l=n(492),d=n(765),x=n(719),f=n(598),k=n(596),m=n(648),v=n(605),_=n(597),h=n(604),w=n(600),y=n(601),R=n(606),D=n(602),I=n(603),C=n(599),L=n(129),V=n.n(L),O=n(516),j={components:{drawerRequestLog:x.default,dialogRequestLog:d.default,dialogImage:l.default,dateSelect2:O.default},data:function(){return{serverUrl:"https://www.psnkp.co.th/server",timeStart:V()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:V()().endOf("day").format("YYYY-MM-DD HH:mm"),toggle:"all",loading:!0,drawerRequestLog:!1,dialogRequestLog:!1,car_no:"",dialogImg:!1,imgUrl:"",dialog:!1,type:"",id:"",formTitle:"",action:"",user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission"),searchCarNo:"",search:"",headers:[{text:"จัดการ",value:"request_status",sortable:!1,width:"9%"},{text:"เวลา",value:"created_at",width:"11%"},{text:"Line",value:"pictureUrl",align:"center",width:"12%"},{text:"เซล/สาขา",value:"sale_name",width:"12%"},{text:"ประเภท",value:"type",width:"12%"},{text:"ลำดับรถ",value:"car_no_all"},{text:"รายละเอียด",value:"actions",sortable:!1,align:"center",width:"8%"}],data:[],count:[],item:{}}},mounted:function(){this.getData()},computed:{tHeader:function(){return this.headers.map((function(e){return e.text}))}},methods:{selectTimeStart:function(time){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timeStart=time.timeStart,e.timeEnd=time.timeEnd,e.getData();case 3:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,null==e.searchCarNo&&(e.searchCarNo=""),e.countData(),(data=new FormData).append("timeStart",e.timeStart),data.append("timeEnd",e.timeEnd),data.append("toggle",e.toggle),data.append("search",e.searchCarNo),t.next=10,c.b(data);case 10:n=t.sent,e.data=n.data,e.loading=!1;case 13:case"end":return t.stop()}}),t)})))()},countData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(data=new FormData).append("timeStart",e.timeStart),data.append("timeEnd",e.timeEnd),data.append("search",e.searchCarNo),t.next=6,c.a(data);case 6:n=t.sent,e.count=n.data;case 8:case"end":return t.stop()}}),t)})))()},setSearchCarNo:function(){var e=this;this.searchCarNo="",this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getData();case 1:case"end":return t.stop()}}),t)}))))},showData:function(e,t){this.type=e,this.id=t,this.drawerRequestLog=!0},showRequestLog:function(e){this.car_no=e,this.dialogRequestLog=!0},showImg:function(e){this.dialogImg=!0,this.imgUrl=e},editItem:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("การจอง"!=e){r.next=6;break}return r.next=3,f.g(t);case 3:r.sent,r.next=70;break;case 6:if("นัดทำสัญญา"!=e){r.next=12;break}return r.next=9,k.g(t);case 9:r.sent,r.next=70;break;case 12:if("ฝากเซนต์"!=e){r.next=18;break}return r.next=15,m.e(t);case 15:r.sent,r.next=70;break;case 18:if("การทำสัญญา"!=e){r.next=24;break}return r.next=21,v.g(t);case 21:r.sent,r.next=70;break;case 24:if("แบงค์อนุมัติ"!=e){r.next=30;break}return r.next=27,_.g(t);case 27:r.sent,r.next=70;break;case 30:if("ปล่อยรถ"!=e){r.next=36;break}return r.next=33,h.g(t);case 33:r.sent,r.next=70;break;case 36:if("เปลี่ยนจอง"!=e){r.next=42;break}return r.next=39,w.g(t);case 39:r.sent,r.next=70;break;case 42:if("เปลี่ยนคนจอง"!=e){r.next=48;break}return r.next=45,y.g(t);case 45:r.sent,r.next=70;break;case 48:if("อัพเดทข้อมูล"!=e){r.next=54;break}return r.next=51,R.g(t);case 51:r.sent,r.next=70;break;case 54:if("การรับเงิน"!=e){r.next=60;break}return r.next=57,D.g(t);case 57:r.sent,r.next=70;break;case 60:if("เบิกเงิน"!=e){r.next=66;break}return r.next=63,I.g(t);case 63:r.sent,r.next=70;break;case 66:if("ยกเลิกจอง"!=e){r.next=70;break}return r.next=69,C.g(t);case 69:r.sent;case 70:n.getData();case 71:case"end":return r.stop()}}),r)})))()},cancleItem:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("การจอง"!=e){r.next=6;break}return r.next=3,f.a(t);case 3:r.sent,r.next=70;break;case 6:if("นัดทำสัญญา"!=e){r.next=12;break}return r.next=9,k.a(t);case 9:r.sent,r.next=70;break;case 12:if("ฝากเซนต์"!=e){r.next=18;break}return r.next=15,m.a(t);case 15:r.sent,r.next=70;break;case 18:if("การทำสัญญา"!=e){r.next=24;break}return r.next=21,v.a(t);case 21:r.sent,r.next=70;break;case 24:if("แบงค์อนุมัติ"!=e){r.next=30;break}return r.next=27,_.a(t);case 27:r.sent,r.next=70;break;case 30:if("ปล่อยรถ"!=e){r.next=36;break}return r.next=33,h.a(t);case 33:r.sent,r.next=70;break;case 36:if("เปลี่ยนจอง"!=e){r.next=42;break}return r.next=39,w.a(t);case 39:r.sent,r.next=70;break;case 42:if("เปลี่ยนคนจอง"!=e){r.next=48;break}return r.next=45,y.a(t);case 45:r.sent,r.next=70;break;case 48:if("อัพเดทข้อมูล"!=e){r.next=54;break}return r.next=51,R.a(t);case 51:r.sent,r.next=70;break;case 54:if("การรับเงิน"!=e){r.next=60;break}return r.next=57,D.a(t);case 57:r.sent,r.next=70;break;case 60:if("เบิกเงิน"!=e){r.next=66;break}return r.next=63,I.a(t);case 63:r.sent,r.next=70;break;case 66:if("ยกเลิกจอง"!=e){r.next=70;break}return r.next=69,C.a(t);case 69:r.sent;case 70:n.getData();case 71:case"end":return r.stop()}}),r)})))()},deleteItem:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function c(){var l;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l=o.a(),c.next=3,l.then(function(){var c=Object(r.a)(regeneratorRuntime.mark((function r(c){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(1!=c){r.next=73;break}if(null,"การจอง"!=e){r.next=8;break}return r.next=5,f.c(t);case 5:r.sent,r.next=72;break;case 8:if("นัดทำสัญญา"!=e){r.next=14;break}return r.next=11,k.c(t);case 11:r.sent,r.next=72;break;case 14:if("ฝากเซนต์"!=e){r.next=20;break}return r.next=17,m.b(t);case 17:r.sent,r.next=72;break;case 20:if("การทำสัญญา"!=e){r.next=26;break}return r.next=23,v.c(t);case 23:r.sent,r.next=72;break;case 26:if("แบงค์อนุมัติ"!=e){r.next=32;break}return r.next=29,_.c(t);case 29:r.sent,r.next=72;break;case 32:if("ปล่อยรถ"!=e){r.next=38;break}return r.next=35,h.c(t);case 35:r.sent,r.next=72;break;case 38:if("เปลี่ยนจอง"!=e){r.next=44;break}return r.next=41,w.c(t);case 41:r.sent,r.next=72;break;case 44:if("เปลี่ยนคนจอง"!=e){r.next=50;break}return r.next=47,y.c(t);case 47:r.sent,r.next=72;break;case 50:if("อัพเดทข้อมูล"!=e){r.next=56;break}return r.next=53,R.c(t);case 53:r.sent,r.next=72;break;case 56:if("การรับเงิน"!=e){r.next=62;break}return r.next=59,D.c(t);case 59:r.sent,r.next=72;break;case 62:if("เบิกเงิน"!=e){r.next=68;break}return r.next=65,I.c(t);case 65:r.sent,r.next=72;break;case 68:if("ยกเลิกจอง"!=e){r.next=72;break}return r.next=71,C.c(t);case 71:r.sent;case 72:n.getData();case 73:case"end":return r.stop()}}),r)})));return function(e){return c.apply(this,arguments)}}());case 3:case"end":return c.stop()}}),c)})))()}},watch:{data:function(){if(this.data)return this.data.map((function(e,t){e.no=t+1,"เปลี่ยนจอง"==e.type?e.car_no_all=e.car_no_old+" => "+e.car_no:e.car_no_all=e.car_no}))}}},S=j,N=n(42),U=n(52),E=n.n(U),T=n(198),Y=n(210),$=n(908),H=n(192),F=n(157),M=n(445),B=n(914),z=n(146),A=n(155),J=n(450),G=n(451),K=n(86),component=Object(N.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-text",[n("dateSelect2",{on:{timeSelect:e.selectTimeStart}}),e._v(" "),n("v-row",{staticClass:"d-flex align-center"},[n("v-col",[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"ค้นหาลำดับรถ","single-line":"","hide-details":"",clearable:"",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getData()},"click:clear":function(t){return e.setSearchCarNo()}},model:{value:e.searchCarNo,callback:function(t){e.searchCarNo=t},expression:"searchCarNo"}})],1),e._v(" "),n("v-col",[n("v-btn-toggle",{attrs:{mandatory:"",color:"primary"},on:{change:function(t){return e.getData()}},model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}},[n("v-btn",{attrs:{height:"42",value:"all"}},[e._v("ทั้งหมด ("+e._s(e.count.all)+")")]),e._v(" "),n("v-btn",{attrs:{height:"42",value:"pedding"}},[e._v("รอดำเนินการ ("+e._s(e.count.pedding)+")")]),e._v(" "),n("v-btn",{attrs:{height:"42",value:"approve"}},[e._v("ดำเนินการแล้ว ("+e._s(e.count.approve)+")")]),e._v(" "),n("v-btn",{attrs:{height:"42",value:"cancle"}},[e._v("ยกเลิก ("+e._s(e.count.cancle)+")")])],1)],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",[n("v-text-field",{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":"",clearable:"",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getData()}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),e._v(" "),n("v-data-table",{attrs:{headers:e.headers,items:e.data,"items-per-page":10,search:e.search,loading:e.loading,"mobile-breakpoint":0,"multi-sort":"","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่","no-data-text":"ยังไม่มีการเพิ่มข้อมูล"},scopedSlots:e._u([{key:"item.pictureUrl",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{icon:""}},[n("v-avatar",{attrs:{size:"40"},on:{click:function(t){return e.showImg(r.pictureUrl)}}},[n("v-img",{attrs:{src:r.pictureUrl}})],1)],1),e._v(" "),n("div",[e._v(e._s(r.displayName))])]}},{key:"item.sale_name",fn:function(t){var r=t.item;return[n("div",[e._v(e._s(r.sale_name))]),e._v(" "),n("div",[e._v(e._s(r.branch_name))])]}},{key:"item.car_no_all",fn:function(t){var r=t.item;return["เปลี่ยนจอง"==r.type?n("div",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.showRequestLog(r.car_no_old)}}},[e._v(e._s(r.car_no_old))]),e._v("\n          =>\n          "),n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.showRequestLog(r.car_no)}}},[e._v(e._s(r.car_no))])]):n("div",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.showRequestLog(r.car_no)}}},[e._v(e._s(r.car_no))])])]}},{key:"item.request_status",fn:function(t){var r=t.item;return["pedding"==r.request_status?n("v-btn",{attrs:{color:"warning",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-checkbox-blank-outline")])],1):"approve"==r.request_status?n("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-checkbox-outline")])],1):"cancle"==r.request_status?n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.editItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-arrow-u-left-top")])],1):e._e(),e._v(" "),"cancle"!=r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(t){return e.cancleItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-close ")])],1):e._e(),e._v(" "),"cancle"==r.request_status?n("v-btn",{attrs:{color:"red",fab:"","x-small":"",dark:""},on:{click:function(t){return e.deleteItem(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-delete ")])],1):e._e()]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:"primary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.showData(r.type,r.ref_id)}}},[n("v-icon",[e._v(" mdi-information-variant ")])],1)]}}],null,!0)})],1),e._v(" "),n("dialogRequestLog",{attrs:{dialog:e.dialogRequestLog,car_no:e.car_no},on:{success:function(t){e.dialogRequestLog=!1,e.getData()},cancleItem:function(t){e.dialogRequestLog=!1}}}),e._v(" "),n("drawerRequestLog",{attrs:{dialog:e.drawerRequestLog,type:e.type,id:e.id},on:{success:function(t){return e.getData()},cancleItem:function(t){e.drawerRequestLog=!1}}}),e._v(" "),n("dialogImage",{attrs:{dialog:e.dialogImg,imgUrl:e.imgUrl},on:{cancleItem:function(t){e.dialogImg=!1}}})],1)}),[],!1,null,"4549d430",null);t.default=component.exports;E()(component,{VAvatar:T.a,VBtn:Y.a,VBtnToggle:$.a,VCard:H.a,VCardText:F.b,VCol:M.a,VDataTable:B.a,VIcon:z.a,VImg:A.a,VRow:J.a,VSpacer:G.a,VTextField:K.a})}}]);