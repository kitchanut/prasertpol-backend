(window.webpackJsonp=window.webpackJsonp||[]).push([[109,98,102],{454:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return m}));var n=r(14),o=(r(57),r(109)),c=r.n(o),l="https://www.psnkp.co.th/server",_=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function m(t,e,r){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function t(e,r,data){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_()){t.next=9;break}return t.next=3,v();case 3:return t.t0=t.sent,n={Authorization:t.t0},t.next=7,c()({method:e,url:r,data:data,headers:n}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},492:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(57),{props:["dialog","imgUrl"],data:function(){return{dialogDeleteComponent:!1}},mounted:function(){},methods:{},watch:{dialog:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogDeleteComponent=t.dialog;case 1:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}}),c=r(42),l=r(52),_=r.n(l),v=r(192),m=r(453),d=r(446),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-dialog",{attrs:{width:"600px"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r("v-card",[r("img",{attrs:{width:"600px",height:"auto",src:t.imgUrl}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:v.a,VContainer:m.a,VDialog:d.a})},510:function(t,e,r){"use strict";r.d(e,"j",(function(){return o})),r.d(e,"k",(function(){return c})),r.d(e,"i",(function(){return l})),r.d(e,"e",(function(){return _})),r.d(e,"l",(function(){return v})),r.d(e,"d",(function(){return m})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return f})),r.d(e,"h",(function(){return y})),r.d(e,"b",(function(){return h})),r.d(e,"f",(function(){return k})),r.d(e,"g",(function(){return D}));var n=r(454),path="/api/outlaycost";function o(t){var e=n.a+path;return Object(n.b)("post",e,t)}function c(t,e){var r=n.a+path+"/"+t;return Object(n.b)("put",r,e)}function l(t){var e=n.a+path+"/"+t;return Object(n.b)("get",e,{})}function _(t){var e=n.a+"/api/outlaycost_where";return Object(n.b)("post",e,t)}function v(t){var e=n.a+"/api/uploadFile_outlay";return Object(n.b)("post",e,t)}function m(t){var e=n.a+"/api/delete_uploadFile_outlay";return Object(n.b)("post",e,t)}function d(t){var e=n.a+"/api/cancle_uploadFile_outlay";return Object(n.b)("post",e,t)}function f(t){var e=n.a+"/api/delete_outlay/"+t;return Object(n.b)("get",e,{})}function y(t){var e=n.a+"/api/report_withdraw_money";return Object(n.b)("post",e,t)}function h(t){var e=n.a+"/api/comfirm_outlay/"+t;return Object(n.b)("get",e,{})}function k(t){var e=n.a+"/api/outlaycost_car";return Object(n.b)("post",e,t)}function D(t){var e=n.a+"/api/outlaycost_getwithTime";return Object(n.b)("post",e,t)}},567:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(57),r(510)),c={props:["dialog","data_car","data_outlay_cost","type","data_income"],components:{dialogImage:r(492).default},data:function(){return{formDataBuy:{saleDetail:{},customer:[{customer_name:""}],working:[{created_at:""}],receiving_moneys:[{receiving_money_all:0}],queryCar:[{car_models:[{car_model_name:""}],car_buy:0,created_at:""}],partner_car:[{partner_car_name:""}],user:[{first_name:""}],sale:[{first_name:""}],dataPreviewBanks:[],dataBooking:[]},btnloading:!0,formDataLoading:!0,dialogDeleteComponent:!1,loading:!1,search_outlay:"",search_income:"",imgUrl:"",dialogImg:!1,user_id:this.$auth.$storage.getLocalStorage("userData-id"),BookingHeaders:[{text:"รหัสงาน",value:"codeWorking",align:"center"},{text:"ผู้สนใจ",value:"customer"},{text:"เซล",value:"sale"},{text:"เวลาจอง",value:"created_at"},{text:"สาขา",value:"branch.branch_name"},{text:"สถานะ",value:"work_status"}],OutlayHeaders:[{text:"ลำดับ",value:"row_no",align:"center"},{text:"ไฟล์",value:"file"},{text:"วันที่",value:"date",width:"15%"},{text:"เลขธุรกรรม",value:"no"},{text:"ร้าน",value:"shop"},{text:"รายการ",value:"detail"},{text:"จำนวนเงิน",value:"money"},{text:"สาขา",value:"branch.branch_name"},{text:"โดย",value:"user.first_name"},{text:"จัดการ",value:"actions",sortable:!1}],IncomeHeaders:[{text:"ลำดับ",value:"row_no",align:"center"},{text:"ไฟล์",value:"file"},{text:"วันที่",value:"date",width:"15%"},{text:"เลขธุรกรรม",value:"no"},{text:"ร้าน",value:"shop"},{text:"รายการ",value:"detail"},{text:"จำนวนเงิน",value:"money"},{text:"สาขา",value:"branch.branch_name"},{text:"โดย",value:"user.first_name"},{text:"จัดการ",value:"actions",sortable:!1}]}},mounted:function(){},methods:{deleteItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o.c(t).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200==r.status?(customAlart.TopSuccess(),e.$nextTick((function(){e.getOutlay()}))):customAlart.TopError();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})))()}},watch:{dialog:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dialogDeleteComponent=t.dialog,t.$props.dialog&&(t.formDataLoading=!1,t.formDataBuy=t.data_car),t.btnloading=!1;case 3:case"end":return e.stop()}}),e)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},l=c,_=r(42),v=r(52),m=r.n(v),d=r(198),f=r(210),y=r(192),h=r(157),k=r(445),D=r(453),x=r(914),w=r(446),C=r(146),B=r(155),Y=r(195),$=r(123),j=r(32),O=r(201),I=r(450),M=r(451),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-dialog",{attrs:{"max-width":"80%"},model:{value:t.dialogDeleteComponent,callback:function(e){t.dialogDeleteComponent=e},expression:"dialogDeleteComponent"}},[r("v-card",[r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("h1",{staticClass:"text-center"},[t._v("ข้อมูลรถ")]),t._v(" "),r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}}),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-qrcode")]),t._v("\n                        ลำดับรถ:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar?"":t.formDataBuy.queryCar.car_no)+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car ")]),t._v("\n                        ประเภทรถ:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_types?"":t.formDataBuy.queryCar.car_types.car_type_name+t.formDataBuy.queryCar.car_types.car_type_name_en)+"\n                        ")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car ")]),t._v("\n                        ยี่ห้อรถ:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_models?"":t.formDataBuy.queryCar.car_models.car_model_name)+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-multiple ")]),t._v("\n                        รุ่น:\n                        "),r("span",[t._v(t._s(null==t.formDataBuy.queryCar.car_series?"":t.formDataBuy.queryCar.car_series.car_series_name))])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-connected ")]),t._v("\n                        รุ่นย่อย:\n                        "),r("span",[t._v(t._s(null==t.formDataBuy.queryCar.car_serie_sub?"":t.formDataBuy.queryCar.car_serie_sub.car_serie_sub_name))])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-engine ")]),t._v("\n                        เครื่องยนต์:\n                        "),r("span",[t._v(t._s(null==t.formDataBuy.queryCar.car_engine_amount?"":t.formDataBuy.queryCar.car_engine_amount))])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-engine ")]),t._v("\n                        เลขเครื่อง:\n                        "),r("span",[t._v(t._s(null==t.formDataBuy.queryCar.car_no_engine?"":t.formDataBuy.queryCar.car_no_engine))])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-engine ")]),t._v("\n                        เลขตัวถัง:\n                        "),r("span",[t._v(t._s(null==t.formDataBuy.queryCar.car_no_body?"":t.formDataBuy.queryCar.car_no_body))])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-shift-pattern ")]),t._v("\n                        เกียร์:\n                        "),r("span",[t._v(t._s(null==t.formDataBuy.queryCar.car_gear?"":1==t.formDataBuy.queryCar.car_gear?"อัตโนมัติ (AT)":"ธรรมดา (MT)")+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-arrow-right ")]),t._v("\n                        ปีผลิต:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_year?"":t.formDataBuy.queryCar.car_year))])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-arrow-right ")]),t._v("\n\n                        ปีจดทะเบียน:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_mark_year?"":t.$moment(t.formDataBuy.queryCar.car_mark_year).format("DD/MM/YYYY"))+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-speedometer ")]),t._v("\n                        เลขไมค์:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_mileage?"":Number(t.formDataBuy.queryCar.car_mileage).toLocaleString("th-TH"))+"\n                        ")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-speedometer ")]),t._v("\n                        เลขไมค์ประกัน:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_mileage_balance?"":Number(t.formDataBuy.queryCar.car_mileage_balance).toLocaleString("th-TH"))+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v("\n                          mdi-card-bulleted-settings-outline\n                        ")]),t._v("\n                        ทะเบียนเก่า:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_regis?"":t.formDataBuy.queryCar.car_regis)+"\n                        ")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v("\n                        ทะเบียนจังหวัด:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.province?"":t.formDataBuy.queryCar.province.name_th)+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v("\n                          mdi-card-bulleted-settings-outline\n                        ")]),t._v("\n                        ทะเบียนใหม่:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.car_regis_current?"":t.formDataBuy.queryCar.car_regis_current)+"\n                        ")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v("\n                        ทะเบียนจังหวัด:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.province_current?"":t.formDataBuy.queryCar.province_current.name_th)+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-turbocharger ")]),t._v("\n                        ใช้เชื้อเพลิง:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.fuel_type?"":1==t.formDataBuy.queryCar.fuel_type?"น้ำมัน":2==t.formDataBuy.queryCar.fuel_type?"ไฟฟ้า":"น้ำมัน/ไฟฟ้า")+"\n                        ")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-car-tire-alert ")]),t._v("\n                        ชนิดเชื้อเพลิง:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.fuels?"":t.formDataBuy.queryCar.fuels.fuel_name)+"\n                        ")])],1)])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h3",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker")]),t._v("\n                        สาขา:\n                        "),r("span",[t._v("\n                          "+t._s(null==t.formDataBuy.queryCar.branch?"":t.formDataBuy.queryCar.branch.branch_name)+"\n                        ")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"6"}})],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"8"},[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("h1",{staticClass:"text-center"},[t._v("การจอง")]),t._v(" "),r("br"),t._v(" "),r("v-data-table",{attrs:{headers:t.BookingHeaders,items:t.formDataBuy.dataBooking,"items-per-page":10,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.codeWorking",fn:function(e){var n=e.item;return[r("h5",[t._v("W"+t._s(n.id))])]}},{key:"item.customer",fn:function(e){var n=e.item;return[null==n.customer_id?r("h5",{staticClass:"red--text"},[t._v("\n                        "+t._s(n.customer_name)+"\n                        "),r("br"),t._v("\n                        "+t._s(n.customer_tel)+"\n                      ")]):r("h5",{staticClass:"green--text"},[t._v(t._s(n.customer_name)+"\n                        "),r("br"),t._v("\n                        "+t._s(n.customer_tel)+"\n                      ")])]}},{key:"item.sale",fn:function(e){var n=e.item;return[null==n.sale_id||0==n.sale_id?r("h5",{staticClass:"red--text"},[t._v("\n                        ยังไม่เลือก\n                      ")]):r("h5",{staticClass:"green--text"},[t._v("\n                        "+t._s(n.sale.first_name)+"\n                      ")])]}},{key:"item.appointment_bank_type",fn:function(e){var n=e.item;return[1==n.appointment_bank_type?r("v-btn",{staticClass:"mt-1",attrs:{"x-small":"",color:"green",dark:""}},[t._v("ครบ")]):t._e(),t._v(" "),2==n.appointment_bank_type?r("v-btn",{staticClass:"mt-1",attrs:{"x-small":"",color:"red",dark:""}},[t._v("ไม่ครบ")]):t._e()]}},{key:"item.work_status",fn:function(e){var n=e.item;return["1"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("ลูกค้าสนใจ")]):t._e(),t._v(" "),"2"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("ยืนยันการจอง")]):t._e(),t._v(" "),"3"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("วางมัดจำแล้ว")]):t._e(),t._v(" "),"4"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("นัดทำสัญญาแล้ว")]):t._e(),t._v(" "),"5"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("รอแบงค์อนุมัติ")]):t._e(),t._v(" "),"6"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"red",dark:""}},[t._v("แบงค์ไม่อนุมัติ")]):t._e(),t._v(" "),"7"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("แบงค์อนุมัติแล้ว")]):t._e(),t._v(" "),"8"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("จัดทำชุดโอน")]):t._e(),t._v(" "),"9"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"primary",dark:""}},[t._v("โอนรถสำเร็จ")]):t._e(),t._v(" "),"10"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"success",dark:""}},[t._v("รับเงินแล้ว")]):t._e(),t._v(" "),"11"==n.work_status?r("v-btn",{attrs:{"x-small":"",color:"success",dark:""}},[t._v("ปิดงาน")]):t._e(),t._v(" "),1==n.status_del?r("span",{staticClass:"mt-1"}):t._e(),t._v(" "),0==n.status_del?r("v-btn",{staticClass:"mt-1",attrs:{"x-small":"",color:"red",dark:""}},[t._v("ยกเลิก")]):t._e()]}},{key:"item.created_at",fn:function(e){var n=e.item;return[t.$moment().unix()>Number(t.$moment(n.created_at).unix())+25200?r("span",{staticStyle:{color:"red"}},[t._v("\n                        "+t._s(t.$moment(n.created_at).fromNow(!0))+"\n                      ")]):r("span",{staticStyle:{color:"blue"}},[t._v("\n                        "+t._s(t.$moment(n.created_at).fromNow(!0))+"\n                      ")])]}},{key:"item.appointment_date",fn:function(e){var n=e.item;return[null!=n.appointment_date?r("span",[t._v("\n                        "+t._s(t.$moment(n.appointment_date).format("DD/MM/YYYY"))+"\n                      ")]):t._e()]}},{key:"item.appointment_money_date",fn:function(e){var n=e.item;return[null!=n.appointment_money_date?r("span",[t._v("\n                        "+t._s(t.$moment(n.appointment_money_date).format("DD/MM/YYYY"))+"\n                      ")]):t._e()]}},{key:"item.appointment_book_date",fn:function(e){var n=e.item;return[null!=n.appointment_book_date?r("span",[t._v("\n                        "+t._s(t.$moment(n.appointment_book_date).format("DD/MM/YYYY"))+"\n                      ")]):t._e()]}},{key:"item.appointment_mkt_date",fn:function(e){var n=e.item;return[null!=n.appointment_mkt_date?r("span",[t._v("\n                        "+t._s(t.$moment(n.appointment_mkt_date).format("DD/MM/YYYY"))+"\n                      ")]):t._e()]}},{key:"item.car_price",fn:function(e){var r=e.item;return[t._v("\n                      "+t._s(Number(r.car_price).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n                    ")]}}],null,!0)})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("h1",{staticClass:"text-center"},[t._v("การขาย")]),t._v(" "),r("br"),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"5"}},[r("h3",[t._v("ขายโดย:")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-end"},[t._v(t._s(t.formDataBuy.saleDetail.sale_name))])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"5"}},[r("h3",[t._v("ขายให้กับ:")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-end"},[t._v(t._s(t.formDataBuy.saleDetail.customer_name))])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"5"}},[r("h3",[t._v("ยื่นเรื่องซื้อวันที่:")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-end"},[t._v(t._s("ยังไม่มีข้อมูล"==t.formDataBuy.saleDetail.sale_booking?"ยังไม่มีข้อมูล":t.$moment(t.formDataBuy.saleDetail.sale_booking).format("DD/MM/YYYY ( HH:mm น.)")))])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"5"}},[r("h3",[t._v("ปล่อยรถเมื่อ:")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-end"},[t._v(t._s("ยังไม่มีข้อมูล"==t.formDataBuy.saleDetail.sale_date?"ยังไม่มีข้อมูล":t.$moment(t.formDataBuy.saleDetail.sale_date).format("DD/MM/YYYY ( HH:mm น.)")))])],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("h1",{staticClass:"text-center"},[t._v("รายรับ")]),t._v(" "),r("br"),t._v(" "),r("v-data-table",{attrs:{headers:t.IncomeHeaders,items:t.data_income,"items-per-page":10,search:t.search_income,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.file",fn:function(e){var n=e.item;return[null==n.file?r("div",[r("span",[t._v("-")])]):r("div",[r("v-btn",{attrs:{icon:""}},[r("v-avatar",{attrs:{size:"40"},on:{click:function(e){return t.showImg(t.serverUrl+n.file)}}},[r("v-img",{attrs:{src:t.serverUrl+n.file}})],1)],1)],1)]}},{key:"item.date",fn:function(e){var n=e.item;return[r("span",[t._v("\n                        "+t._s(t.$moment(n.date).format("DD/MM/YYYY"))+"\n                      ")])]}},{key:"item.money",fn:function(e){var r=e.item;return[t._v("\n                      "+t._s(Number(r.money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n                    ")]}},{key:"item.type",fn:function(e){return[1==e.item.type?r("span",[t._v("ตัวรถ")]):r("span",[t._v("อื่น ๆ")])]}},{key:"item.type_bill",fn:function(e){return[1==e.item.type_bill?r("span",[t._v("เงินสด")]):r("span",[t._v("ใบกำกับภาษี")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[t.user_id==n.user_id?r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),r("v-list",[t.user_id==n.user_id?r("v-list-item",{on:{click:function(e){return t.deleteItemIncome(n.id)}}},[r("v-list-item-title",[t._v("ลบ")])],1):t._e()],1)],1):t._e()]}}],null,!0)})],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{outlined:""}},[r("v-card-text",[r("h1",{staticClass:"text-center"},[t._v("ค่าใช้จ่ายตัวรถ")]),t._v(" "),r("br"),t._v(" "),r("v-data-table",{attrs:{headers:t.OutlayHeaders,items:t.data_outlay_cost,"items-per-page":10,search:t.search_outlay,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่"},scopedSlots:t._u([{key:"item.file",fn:function(e){var n=e.item;return[null==n.file?r("div",[r("span",[t._v("-")])]):r("div",[r("v-btn",{attrs:{icon:""}},[r("v-avatar",{attrs:{size:"40"},on:{click:function(e){return t.showImg(t.serverUrl+n.file)}}},[r("v-img",{attrs:{src:t.serverUrl+n.file}})],1)],1)],1)]}},{key:"item.date",fn:function(e){var n=e.item;return[r("span",[t._v("\n                        "+t._s(t.$moment(n.date).format("DD/MM/YYYY"))+"\n                      ")])]}},{key:"item.money",fn:function(e){var r=e.item;return[t._v("\n                      "+t._s(Number(r.money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:2}))+"\n                    ")]}},{key:"item.type",fn:function(e){return[1==e.item.type?r("span",[t._v("ตัวรถ")]):r("span",[t._v("อื่น ๆ")])]}},{key:"item.broken",fn:function(e){return[1==e.item.broken?r("span",[t._v("ไม่")]):r("span",[t._v("หัก")])]}},{key:"item.type_bill",fn:function(e){return[1==e.item.type_bill?r("span",[t._v("เงินสด")]):r("span",[t._v("ใบกำกับภาษี")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[t.user_id==n.user_id?r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),r("v-list",[r("v-list-item",{on:{click:function(e){return t.deleteItem(n.id)}}},[r("v-list-item-title",[t._v("ลบ")])],1)],1)],1):t._e()]}}],null,!0)})],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.$emit("cancleItem")}}},[t._v("ยกเลิก")])],1)],1),t._v(" "),r("dialogImage",{attrs:{dialog:t.dialogImg,imgUrl:t.imgUrl},on:{cancleItem:function(e){t.dialogImg=!1}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAvatar:d.a,VBtn:f.a,VCard:y.a,VCardActions:h.a,VCardText:h.b,VCol:k.a,VContainer:D.a,VDataTable:x.a,VDialog:w.a,VIcon:C.a,VImg:B.a,VList:Y.a,VListItem:$.a,VListItemTitle:j.c,VMenu:O.a,VRow:I.a,VSpacer:M.a})}}]);