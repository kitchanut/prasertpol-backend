(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1014:function(t,n,e){"use strict";e.r(n);var r=e(424),c=e(428),o=e(147),f=e(423),l=e(9),d=(e(48),e(457)),v={layout:"full",auth:!1,data:function(){return{myLiffId:"1657381597-rgo89b63",serverUrl:"https://www.psnkp.co.th/server",id:""}},mounted:function(){console.log(this.$route.query.id),this.init(this.$route.query.id)},methods:{init:function(t){var n=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,liff.init({liffId:n.myLiffId},Object(l.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!liff.isLoggedIn()){e.next=10;break}return e.next=3,d.a(t);case 3:return c=e.sent,r=n.flexMessage(c.data),e.next=7,liff.shareTargetPicker(r);case 7:liff.closeWindow(),e.next=11;break;case 10:liff.login();case 11:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})))()},flexMessage:function(data){var image=[];return data.forEach((function(element){image.push({type:"image",url:element.src,size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:element.src}})})),[{type:"flex",altText:"รูปรถ",contents:{type:"bubble",body:{type:"box",layout:"vertical",contents:image}}}]}}},h=e(38),component=Object(h.a)(v,(function(){var t=this.$createElement,n=this._self._c||t;return n(c.a,{attrs:{"fill-height":"",fluid:""}},[n(f.a,{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n(r.a,{attrs:{cols:"12",sm:"4"}},[n(o.a,{attrs:{contain:"","aspect-ratio":"1.3",src:e(269)}})],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},429:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return v}));var r=e(9),c=(e(48),e(98)),o=e.n(c),f="https://www.psnkp.co.th/server",l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,$nuxt.$auth.loggedIn;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.$nuxt){t.next=4;break}return t.next=3,window.$nuxt.$auth.getToken("local");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function v(t,n,e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(n,e,data){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l()){t.next=9;break}return t.next=3,d();case 3:return t.t0=t.sent,r={Authorization:t.t0},t.next=7,o()({method:n,url:e,data:data,headers:r}).then((function(t){return t})).catch((function(t){if(401==t.response.status)return $nuxt.$auth.logout()}));case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},457:function(t,n,e){"use strict";e.d(n,"i",(function(){return c})),e.d(n,"g",(function(){return o})),e.d(n,"p",(function(){return f})),e.d(n,"q",(function(){return l})),e.d(n,"m",(function(){return d})),e.d(n,"k",(function(){return v})),e.d(n,"l",(function(){return h})),e.d(n,"b",(function(){return m})),e.d(n,"o",(function(){return w})),e.d(n,"s",(function(){return x})),e.d(n,"a",(function(){return j})),e.d(n,"c",(function(){return O})),e.d(n,"d",(function(){return k})),e.d(n,"e",(function(){return y})),e.d(n,"f",(function(){return R})),e.d(n,"n",(function(){return $})),e.d(n,"h",(function(){return C})),e.d(n,"j",(function(){return I})),e.d(n,"r",(function(){return _}));var r=e(429),path="/api/car";function c(){var t=r.a+path;return Object(r.b)("get",t,{})}function o(t){var n=r.a+path+"/"+t;return Object(r.b)("delete",n,{})}function f(t){var n=r.a+path;return Object(r.b)("post",n,t)}function l(t,n){var e=r.a+path+"/"+t;return Object(r.b)("put",e,n)}function d(t){var n=r.a+path+"/"+t;return Object(r.b)("get",n,{})}function v(){var t=r.a+"/api/SelectOnCarAll";return Object(r.b)("get",t,{})}function h(){var t=r.a+"/api/SelectAllCars";return Object(r.b)("get",t,{})}function m(){var t=r.a+"/api/SelectCarNo";return Object(r.b)("get",t,{})}function w(t){var n=r.a+"/api/StockOnCar";return Object(r.b)("post",n,t)}function x(t){var n=r.a+"/api/uploadImgCars";return Object(r.b)("post",n,t)}function j(t){var n=r.a+"/api/ImageCar/"+t;return Object(r.b)("post",n,{})}function O(t){var n=r.a+"/api/change_fist_img";return Object(r.b)("post",n,t)}function k(t){var n=r.a+"/api/deleteAllImgCar";return Object(r.b)("post",n,t)}function y(t){var n=r.a+"/api/deleteFolder";return Object(r.b)("post",n,t)}function R(t){var n=r.a+"/api/delete_img_car";return Object(r.b)("post",n,t)}function $(t){var n=r.a+"/api/showCar";return Object(r.b)("post",n,t)}function C(t,n){var e=r.a+"/api/getAllinfo/"+t+"/"+n;return Object(r.b)("get",e,{})}function I(t){var n=r.a+"/api/reRollCar/"+t;return Object(r.b)("get",n,{})}function _(){var t=r.a+"/api/update_amountPrice";return Object(r.b)("get",t,{})}}}]);