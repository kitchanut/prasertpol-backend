(window.webpackJsonp=window.webpackJsonp||[]).push([[236,138],{1045:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(202),c=n(615),l=n(190),m=n(149),d=n(424),f=n(979),h=n(633),v=n(619),_=n(177),x=n(412),y=n(423),S=n(422),D=n(435),O=n(9),w=(n(48),n(49),n(8),n(16),n(610)),Y=n(500),k=n(120),I=n.n(k),T={components:{dateSelect2:n(493).default},data:function(){return{loading:!1,toggleTeam:null,toggleView:"com",menu:!1,menuTimeStart:!1,menuTimeEnd:!1,mount:[(new Date).toISOString().substr(0,7)],timeStart:I()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:I()().endOf("day").format("YYYY-MM-DD HH:mm"),dialogAllInfoCar:!1,formTitleAllInfoCar:"ภาพรวมลำดับรถ",branch_team_id:0,branch_teams:[],dataSelectBranch_teams:[],search:"",data:[],data_filter:[]}},mounted:function(){this.getBranch_teams()},computed:{tHeader:function(){return this.headers.map((function(t){return t.text}))},headers:function(){return"team"==this.toggleTeam?[{text:"สาขา",value:"branch_team.branch_team_name",class:"textOneLine"},{text:"จำนวนคัน",value:"number_of_cars",class:"textOneLine",align:"end"},{text:"กำไร",value:"number_of_profit_cars",class:"textOneLine",align:"end"},{text:"ขาดทุน",value:"number_of_loss_cars",class:"textOneLine",align:"end"},{text:"รวมรายรับ",value:"income_sum_money",class:"textOneLine",align:"end"},{text:"ค่าตัวรถ",value:"expenses_only_car_sum_money",class:"textOneLine",align:"end"},{text:"ค่าดำเนินการ",value:"amount_overCost",class:"textOneLine",align:"end"},{text:"ค่าใช้จ่าย",value:"expenses_without_car_sum_money",class:"textOneLine",align:"end"},{text:"รวมรายจ่าย",value:"sum_over_all_expenses_sum_money",class:"textOneLine",align:"end"},{text:"กำไร/ขาดทุน",value:"profitOrLoss",class:"textOneLine",align:"end"},{text:"%",value:"persent",class:"textOneLine",align:"end"}]:[{text:"ลำดับ",value:"cars.car_no",align:"center",class:"textOneLine",width:"10%"},{text:"วันที่ปล่อยรถ",value:"contract.contract_date",width:"10%"},{text:"วันรับเงิน",value:"appointment_banks.appointment_money_date",width:"10%"},{text:"สาขา",value:"branch_team.branch_team_name",class:"textOneLine"},{text:"รวมรายรับ",value:"income_sum_money",class:"textOneLine",align:"end"},{text:"ค่าตัวรถ",value:"expenses_only_car_sum_money",class:"textOneLine",align:"end"},{text:"ค่าดำเนินการ",value:"amount_overCost",class:"textOneLine",align:"end"},{text:"ค่าใช้จ่าย",value:"expenses_without_car_sum_money",class:"textOneLine",align:"end"},{text:"รวมรายจ่าย",value:"sum_over_all_expenses_sum_money",class:"textOneLine",align:"end"},{text:"กำไร/ขาดทุน",value:"profitOrLoss",class:"textOneLine",align:"end"},{text:"%",value:"persent",class:"textOneLine",align:"end"}]}},methods:{getBranch_teams:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.c();case 2:n=e.sent,t.branch_teams=n.data,t.dataSelectBranch_teams=n.data,t.dataSelectBranch_teams.push({id:0,branch_team_name:"ทั้งหมด"});case 6:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,(data=new FormData).append("timeStart",t.timeStart),data.append("timeEnd",t.timeEnd),data.append("type",t.toggleView),data.append("mount",t.mount),data.append("branch_team_id",t.branch_team_id),e.next=9,w.d(data);case 9:200==(n=e.sent).status?(t.data=n.data,t.filterData()):alert("เกิดข้อผิดพลาด"),t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()},filterData:function(){var t=this;"team"==this.toggleTeam?(this.data_filter=[],this.branch_teams.forEach((function(e,n){var r=t.data.filter((function(t){return t.branch_team_id==e.id})).reduce((function(t,e){return t+Number(e.cars.amount_overCost)}),0),o=t.data.filter((function(t){return"ค่าคอมจากธนาคาร"!=t.detail})).filter((function(t){return t.branch_team_id==e.id})).map((function(map){return map.income.reduce((function(t,e){return t+e.money}),0)})).reduce((function(t,e){return t+e}),0),c=r+t.data.filter((function(t){return t.branch_team_id==e.id})).map((function(map){return map.expenses.reduce((function(t,e){return t+e.money}),0)})).reduce((function(t,e){return t+e}),0),l=t.data.filter((function(t){return t.branch_team_id==e.id})).map((function(map){return map.expenses.reduce((function(t,e){return"ค่าตัวรถ"==e.detail?t+e.money:t}),0)})).reduce((function(t,e){return t+e}),0),m=t.data.filter((function(t){return t.branch_team_id==e.id})).length,d=t.data.filter((function(t){return t.branch_team_id==e.id})).map((function(map){return map.income.reduce((function(t,e){return t+e.money}),0)>map.expenses.reduce((function(t,e){return t+e.money}),0)})).reduce((function(t,e){return 1==e?t+1:t}),0),f=t.data.filter((function(t){return t.branch_team_id==e.id})).map((function(map){return map.income.reduce((function(t,e){return t+e.money}),0)<map.expenses.reduce((function(t,e){return t+e.money}),0)})).reduce((function(t,e){return 1==e?t+1:t}),0);t.data_filter.push({cars:{},contract:{},appointment_banks:{},branch_team:{branch_team_name:e.branch_team_name},amount_overCost:r,income_sum_money:o,sum_over_all_expenses_sum_money:c,expenses_only_car_sum_money:l,expenses_without_car_sum_money:c-l-r,profitOrLoss:o-c,persent:(o-c)/o*100,number_of_cars:m,number_of_profit_cars:d,number_of_loss_cars:f})}))):(this.data.map((function(t){t.amount_overCost=t.cars.amount_overCost,t.income_sum_money=t.income.filter((function(t){return"ค่าคอมจากธนาคาร"!=t.detail})).reduce((function(t,e){return t+e.money}),0),t.sum_over_all_expenses_sum_money=Number(t.expenses.reduce((function(t,e){return t+e.money}),0))+Number(t.amount_overCost),t.expenses_only_car_sum_money=t.expenses.reduce((function(t,e){return"ค่าตัวรถ"==e.detail?t+e.money:t}),0),t.expenses_without_car_sum_money=t.sum_over_all_expenses_sum_money-t.expenses_only_car_sum_money-Number(t.amount_overCost),t.profitOrLoss=t.income_sum_money-t.sum_over_all_expenses_sum_money,t.persent=t.profitOrLoss/t.income_sum_money*100})),this.data_filter=this.data)},countField:function(t){return this.data_filter.reduce((function(e,n){return" "!=n[t]?e+Number(n[t]):e}),0)},AllInfoCar:function(t,e){var n=this;return Object(O.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=n.$router.resolve({name:"infocar-infocar",query:{id:t,formTitleAllInfoCar:e}}),window.open(o.href,"_blank");case 2:case"end":return r.stop()}}),r)})))()},handleDownload:function(){for(var t=this,e=[],r=0;r<this.tHeader.length;r++)e.push(this.headers[r].value);this.$nextTick((function(){Promise.all([n.e(5),n.e(6)]).then(n.bind(null,978)).then((function(n){var r=t.tHeader,o=t.data_filter,data=t.formatJson(e,o);n.export_json_to_excel({header:r,data:data,filename:"รายงานกำไรขาดทุน ("+I()().format("DD/MM/YYYY ( HH:mm น.)")+")",autoWidth:!0,bookType:"xlsx"})}))}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"cars.car_no"==t?e.cars.car_no:"contract.contract_date"==t&&e.contract?e.contract.contract_date:"appointment_banks.appointment_money_date"==t&&e.appointment_banks?e.appointment_banks.appointment_money_date:"branch_team.branch_team_name"==t&&e.branch_team?e.branch_team.branch_team_name:e[t]}))}))}},watch:{toggleTeam:function(){this.filterData()}}},H=n(38),component=Object(H.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(l.a,[n(m.b,{staticClass:"pb-0"},[n(y.a,{staticClass:"d-flex align-center",attrs:{"no-gutters":""}},[n(c.a,{staticClass:"mr-2",staticStyle:{height:"40px !important"},attrs:{mandatory:"",color:"primary"},model:{value:t.toggleTeam,callback:function(e){t.toggleTeam=e},expression:"toggleTeam"}},[n(o.a,{staticStyle:{"min-width":"0px",height:"40px !important"},attrs:{value:null}},[t._v(" คัน ")]),t._v(" "),n(o.a,{staticStyle:{"min-width":"0px",height:"40px !important"},attrs:{value:"team"}},[t._v(" ทีม ")])],1),t._v(" "),n(c.a,{staticClass:"mr-2",staticStyle:{height:"40px !important"},attrs:{mandatory:"",color:"success"},model:{value:t.toggleView,callback:function(e){t.toggleView=e},expression:"toggleView"}},[n(o.a,{staticStyle:{"min-width":"0px",height:"40px !important"},attrs:{value:"com"}},[t._v(" เดือนคอม ")]),t._v(" "),n(o.a,{staticStyle:{"min-width":"0px",height:"40px !important"},attrs:{value:"release"}},[t._v(" ปล่อย ")]),t._v(" "),n(o.a,{staticStyle:{"min-width":"0px",height:"40px !important"},attrs:{value:"money"}},[t._v(" รับเงิน ")])],1),t._v(" "),"release"==t.toggleView||"money"==t.toggleView?n(d.a,{attrs:{cols:"2"}},[n(x.a,{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(D.a,t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",o,!1),r))]}}],null,!1,2913205397),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n(h.a,{attrs:{locale:"th-TH","picker-date":""},on:{input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1):t._e(),t._v(" "),"release"==t.toggleView||"money"==t.toggleView?n(d.a,{attrs:{cols:"2 ml-1"}},[n(x.a,{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(D.a,t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}],null,!1,2618148425),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n(h.a,{attrs:{locale:"th-TH","picker-date":""},on:{input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1):t._e(),t._v(" "),"com"==t.toggleView?n(d.a,{attrs:{cols:"2"}},[n(x.a,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.mount,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},on:{"update:returnValue":function(e){t.mount=e},"update:return-value":function(e){t.mount=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(D.a,t._g(t._b({staticClass:"mt-0",attrs:{label:"เดือนคอม","append-icon":"mdi-calendar",readonly:"","hide-details":"",outlined:"",dense:""},model:{value:t.mount,callback:function(e){t.mount=e},expression:"mount"}},"v-text-field",o,!1),r))]}}],null,!1,3641613810),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n(h.a,{attrs:{multiple:"",type:"month",locale:"th","no-title":"",scrollable:""},on:{update:function(e){return t.$refs.menu.save(t.mount)},change:function(e){return t.$refs.menu.save(t.mount)}},model:{value:t.mount,callback:function(e){t.mount=e},expression:"mount"}},[n(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),t._v(" "),n(S.a),t._v(" "),n(o.a,{attrs:{text:"",color:"warning"},on:{click:function(e){t.mount=[]}}},[t._v(" clear ")]),t._v(" "),n(o.a,{attrs:{text:"",color:"success"},on:{click:function(e){t.$refs.menu.save(t.mount),t.getData()}}},[t._v("\n                OK\n              ")])],1)],1)],1):t._e(),t._v(" "),n(d.a,{attrs:{cols:"2 ml-1"}},[n(r.a,{attrs:{items:t.dataSelectBranch_teams,label:"ทีมสาขา","item-text":"branch_team_name","item-value":"id","no-data-text":"ไม่มีข้อมูล",outlined:"",dense:"","hide-details":""},model:{value:t.branch_team_id,callback:function(e){t.branch_team_id=e},expression:"branch_team_id"}})],1),t._v(" "),"com"!=t.toggleView?n(o.a,{directives:[{name:"blur",rawName:"v-blur"}],staticClass:"ml-2 my-1",staticStyle:{"min-width":"0px",padding:"0px 8px",height:"40px"},attrs:{color:"primary",elevation:"0"},on:{click:function(e){return t.getData()}}},[n(_.a,[t._v("mdi-magnify")])],1):t._e(),t._v(" "),n(o.a,{staticClass:"ml-1 my-1",staticStyle:{"min-width":"0px",padding:"0 8px",height:"40px"},attrs:{color:"success",elevation:"0"},on:{click:function(e){return t.handleDownload()}}},[n(_.a,[t._v("mdi-microsoft-excel")])],1),t._v(" "),n(S.a),t._v(" "),n(d.a,{attrs:{cols:"2"}},[n(D.a,{attrs:{id:"search",name:"search","append-icon":"mdi-magnify",label:"ค้นหา","single-line":"","hide-details":"",outlined:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),n("br"),t._v(" "),n(v.a),t._v(" "),n(f.a,{attrs:{headers:t.headers,items:t.data_filter,search:t.search,loading:t.loading,"no-data-text":"ยังไม่มีการเพิ่มข้อมูล","loading-text":"กำลังโหลดข้อมูลกรุณารอสักครู่",dense:"","mobile-breakpoint":0,"multi-sort":!0,"footer-props":{"items-per-page-options":[5,10,20,50,100,-1]}},scopedSlots:t._u([{key:"body.prepend",fn:function(){return[n("tr",t._l(t.headers,(function(header,e){return n("td",{key:e,staticStyle:{"text-align":"right"}},["number_of_cars"==header.value?n("b",{staticStyle:{color:"blue"}},[t._v("\n              "+t._s(t.countField(header.value))+"\n            ")]):"number_of_profit_cars"==header.value?n("b",{staticStyle:{color:"green"}},[t._v("\n              "+t._s(t.countField(header.value))+"\n            ")]):"number_of_loss_cars"==header.value?n("b",{staticStyle:{color:"red"}},[t._v("\n              "+t._s(t.countField(header.value))+"\n            ")]):"end"==header.align&&"income_sum_money"==header.value?n("b",{staticStyle:{color:"blue"}},[t._v("\n              "+t._s(Number(t.countField(header.value)).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n            ")]):"end"==header.align&&"sum_over_all_expenses_sum_money"==header.value?n("b",{staticStyle:{color:"orange"}},[t._v("\n              "+t._s(Number(t.countField(header.value)).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n            ")]):"end"==header.align&&"profitOrLoss"==header.value?n("b",{style:t.countField(header.value)>0?"color: green":"color: red"},[t._v("\n              "+t._s(Number(t.countField(header.value)).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n            ")]):"end"==header.align&&"persent"!=header.value?n("b",[t._v("\n              "+t._s(Number(t.countField(header.value)).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n            ")]):"persent"==header.value?n("b",{style:t.countField("profitOrLoss")>0?"color: green":"color: red"},[t._v("\n              "+t._s(Number(t.countField("profitOrLoss")/t.countField("income_sum_money")*100).toLocaleString("th-TH",{maximumFractionDigits:0,minimumFractionDigits:0}))+"%\n            ")]):t._e()])})),0)]},proxy:!0},{key:"item.number_of_cars",fn:function(e){var r=e.item;return[r.number_of_cars>0?n("span",{staticStyle:{color:"blue"}},[t._v(t._s(r.number_of_cars))]):t._e()]}},{key:"item.number_of_profit_cars",fn:function(e){var r=e.item;return[r.number_of_profit_cars>0?n("span",{staticStyle:{color:"green"}},[t._v(t._s(r.number_of_profit_cars))]):t._e()]}},{key:"item.number_of_loss_cars",fn:function(e){var r=e.item;return[r.number_of_loss_cars>0?n("span",{staticStyle:{color:"red"}},[t._v(t._s(r.number_of_loss_cars))]):t._e()]}},{key:"item.cars.car_no",fn:function(e){var r=e.item;return[n("a",{attrs:{small:"",color:"primary"},on:{click:function(e){return t.AllInfoCar(r.cars.id,r.cars.car_no)}}},[t._v(t._s(r.cars.car_no))])]}},{key:"item.income_sum_money",fn:function(e){var r=e.item;return[n("div",{staticStyle:{color:"blue"}},[t._v("\n          "+t._s(Number(r.income_sum_money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n        ")])]}},{key:"item.expenses_without_car_sum_money",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(Number(n.expenses_without_car_sum_money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n      ")]}},{key:"item.amount_overCost",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(Number(n.amount_overCost).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n      ")]}},{key:"item.expenses_only_car_sum_money",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(Number(n.expenses_only_car_sum_money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n      ")]}},{key:"item.sum_over_all_expenses_sum_money",fn:function(e){var r=e.item;return[n("div",{staticStyle:{color:"orange"}},[t._v("\n          "+t._s(Number(r.sum_over_all_expenses_sum_money).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0}))+"\n        ")])]}},{key:"item.profitOrLoss",fn:function(e){var r=e.item;return[r.profitOrLoss<0?n("span",{staticStyle:{color:"red"}},[t._v(t._s(Number(r.profitOrLoss).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0})))]):n("span",{staticStyle:{color:"green"}},[t._v(t._s(Number(r.profitOrLoss).toLocaleString("th-TH",{maximumFractionDigits:2,minimumFractionDigits:0})))])]}},{key:"item.persent",fn:function(e){var r=e.item;return[r.persent<0?n("span",{staticStyle:{color:"red"}},[t._v(t._s(Number(r.persent).toLocaleString("th-TH",{maximumFractionDigits:0,minimumFractionDigits:0}))+"%")]):n("span",{staticStyle:{color:"green"}},[t._v(t._s(Number(r.persent).toLocaleString("th-TH",{maximumFractionDigits:0,minimumFractionDigits:0}))+"%")])]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(9),o=(n(48),n(98)),c=n.n(o),l="https://www.psnkp.co.th/server",m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function f(t,e,n){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,data){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,c()({method:e,url:n,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return o=t.sent,t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},436:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("50788f08",content,!0,{sourceMap:!1})},437:function(t,e,n){var r=n(12)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},440:function(t,e,n){var r=n(17);r(r.S,"Object",{is:n(260)})},445:function(t,e,n){var r=n(51),o=n(265),c=n(62);t.exports=function(t,e,n,l){var m=String(c(t)),d=m.length,f=void 0===n?" ":String(n),h=r(e);if(h<=d||""==f)return m;var v=h-d,_=o.call(f,Math.ceil(v/f.length));return _.length>v&&(_=_.slice(0,v)),l?_+m:m+_}},454:function(t,e,n){"use strict";n(5),n(6),n(10),n(11);var r=n(3),o=(n(49),n(8),n(74),n(199),n(36),n(28),n(436),n(453)),c=n(435),l=n(50),m=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=f(f({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return h}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(m.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},h),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===m.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===m.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==m.y.backspace&&t!==m.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(m.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(m.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[m.y.home,m.y.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},459:function(t,e,n){var r=n(17);r(r.S,"Math",{sign:n(263)})},465:function(t,e,n){"use strict";var r=n(17),o=n(445),c=n(264),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},493:function(t,e,n){"use strict";n.r(e);var r=n(454),o=n(424),c=n(633),l=n(412),m=n(423),d=n(435),f=n(9),h=(n(48),n(120)),v=n.n(h),_={data:function(){return{timeSelect:this.$store.state.timeSelect,menuTimeStart:!1,menuTimeEnd:!1,selectTime:1,timeStart:v()().startOf("day").format("YYYY-MM-DD HH:mm"),timeEnd:v()().endOf("day").format("YYYY-MM-DD HH:mm")}},mounted:function(){},methods:{returnDate:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("timeSelect",{timeStart:t.timeStart,timeEnd:t.timeEnd});case 1:case"end":return e.stop()}}),e)})))()},changeSelectTime:function(t){var e=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:1==t?(e.timeStart=v()().startOf("day").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):2==t?(e.timeStart=v()().startOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").add(-1,"days").format("YYYY-MM-DD HH:mm")):3==t?(e.timeStart=v()().startOf("day").add(-7,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):4==t?(e.timeStart=v()().startOf("day").add(-30,"days").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):5==t?(e.timeStart=v()().startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("months").format("YYYY-MM-DD HH:mm")):6==t?(e.timeStart=v()().add(-1,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().add(-1,"months").endOf("months").format("YYYY-MM-DD HH:mm")):7==t?(e.timeStart=v()().add(-3,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):8==t?(e.timeStart=v()().add(-6,"months").startOf("months").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):9==t?(e.timeStart=v()().startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")):10==t&&(e.timeStart=v()().add(-3,"years").startOf("years").format("YYYY-MM-DD HH:mm"),e.timeEnd=v()().endOf("day").format("YYYY-MM-DD HH:mm")),e.returnDate();case 2:case"end":return n.stop()}}),n)})))()}}},x=n(38),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(m.a,{staticClass:"py-2"},[n(o.a,{attrs:{cols:"4"}},[n(r.a,{attrs:{items:t.timeSelect,"no-data-text":"ไม่มีข้อมูล","item-text":"title","item-value":"value",label:"ช่วงเวลา:",outlined:"",dense:"","hide-details":""},on:{change:t.changeSelectTime},model:{value:t.selectTime,callback:function(e){t.selectTime=e},expression:"selectTime"}})],1),t._v(" "),n(o.a,{attrs:{cols:"4"}},[n(l.a,{ref:"menuTimeStart",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(d.a,t._g(t._b({attrs:{label:"วันที่เริ่มต้น","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeStart,callback:function(e){t.menuTimeStart=e},expression:"menuTimeStart"}},[t._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeStart=!1}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1)],1),t._v(" "),n(o.a,{attrs:{cols:"4"}},[n(l.a,{ref:"menuTimeEnd",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n(d.a,t._g(t._b({attrs:{label:"วันที่สิ้นสุด","persistent-hint":"","prepend-icon":"",outlined:"",dense:"","hide-details":"","flathide-details":""},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}},"v-text-field",o,!1),r))]}}]),model:{value:t.menuTimeEnd,callback:function(e){t.menuTimeEnd=e},expression:"menuTimeEnd"}},[t._v(" "),n(c.a,{attrs:{locale:"th-TH","picker-date":""},on:{change:t.changeSelectTime,input:function(e){t.menuTimeEnd=!1}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},500:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return m})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return select}));var r=n(429),path="/api/branch_teams";function o(){var t=r.a+path;return Object(r.b)("get",t,{})}function c(t){var e=r.a+path+"/"+t;return Object(r.b)("delete",e,{})}function l(t){var e=r.a+path;return Object(r.b)("post",e,t)}function m(t,e){var n=r.a+path+"/"+t;return Object(r.b)("put",n,e)}function d(t){var e=r.a+path+"/"+t;return Object(r.b)("get",e,{})}function select(){var t=r.a+"/api/SelectOnBranchTeams";return Object(r.b)("get",t,{})}},525:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("01907af4",content,!0,{sourceMap:!1})},526:function(t,e,n){var r=n(12)(!1);r.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=r},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return m})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return h}));var r=n(429);function o(t){var e=r.a+"/api/booking_car";return Object(r.b)("post",e,t)}function c(t){var e=r.a+"/api/report_purchase_car";return Object(r.b)("post",e,t)}function l(t){var e=r.a+"/api/report_sale_car";return Object(r.b)("post",e,t)}function m(t){var e=r.a+"/api/report_work_cancle";return Object(r.b)("post",e,t)}function d(t){var e=r.a+"/api/report_booking_duplicate";return Object(r.b)("post",e,t)}function f(t){var e=r.a+"/api/report_profit";return Object(r.b)("post",e,t)}function h(t){var e=r.a+"/api/report_commission";return Object(r.b)("post",e,t)}},615:function(t,e,n){"use strict";n(5),n(6),n(8),n(10),n(11);var r=n(3),o=(n(525),n(204)),c=n(22),l=n(4);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(o.a,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return d(d({},o.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,d({},o.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})}}]);