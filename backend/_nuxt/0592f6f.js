(window.webpackJsonp=window.webpackJsonp||[]).push([[111,98],{454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c}));var r=n(14),o=(n(57),n(109)),l=n.n(o),d="https://www.psnkp.co.th/server",v=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,$nuxt.$auth.loggedIn;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.$nuxt){e.next=4;break}return e.next=3,window.$nuxt.$auth.getToken("local");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function c(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function e(t,n,data){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v()){e.next=9;break}return e.next=3,f();case 3:return e.t0=e.sent,r={Authorization:e.t0},e.next=7,l()({method:t,url:n,data:data,headers:r}).then((function(e){return e})).catch((function(e){if(401==e.response.status)return $nuxt.$auth.logout()}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},476:function(e,t,n){"use strict";var r=n(2),o=(n(33),n(23),n(161),n(8),n(85),n(6),n(7),n(11),n(12),n(4)),l=n(68),d=n(94);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},490:function(e,t,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5c8fbe94",content,!0,{sourceMap:!1})},491:function(e,t,n){var r=n(9)(!1);r.push([e.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=r},506:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return v})),n.d(t,"m",(function(){return f})),n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return x})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return w})),n.d(t,"c",(function(){return O})),n.d(t,"l",(function(){return j}));var r=n(454),path="/api/working";function o(){var e=r.a+"/api/working_allData";return Object(r.b)("get",e,{})}function l(e){var t=r.a+path;return Object(r.b)("post",t,e)}function d(e,t){var n=r.a+path+"/"+e;return Object(r.b)("put",n,t)}function v(e){var t=r.a+path+"/"+e;return Object(r.b)("get",t,{})}function f(e,t){var n=r.a+"/api/updateStatusWorking/"+e;return Object(r.b)("post",n,t)}function c(e){var t=r.a+"/api/workWhereClose";return Object(r.b)("post",t,e)}function x(e){var t=r.a+"/api/selectWhereCancle";return Object(r.b)("post",t,e)}function h(e){var t=r.a+"/api/work_cancel";return Object(r.b)("post",t,e)}function _(e){var t=r.a+"/api/get_work_cancel";return Object(r.b)("post",t,e)}function m(e){var t=r.a+"/api/working_search_id/"+e;return Object(r.b)("post",t,{})}function w(e){var t=r.a+"/api/followWork";return Object(r.b)("post",t,e)}function O(e){var t=r.a+"/api/followDown";return Object(r.b)("get",t,e)}function j(e,t){var n=r.a+"/api/updateNote/"+e;return Object(r.b)("post",n,t)}},512:function(e,t,n){"use strict";n(6),n(7),n(8),n(11),n(12);var r=n(2),o=(n(17),n(490),n(86)),l=n(4);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(l.a)(o.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},653:function(e,t,n){"use strict";n.r(t);var r=n(14),o=(n(57),n(506)),l={components:{},props:["dialogNote","idNote"],data:function(){return{btnloading:!0,formDataLoading:!1,formData:{},dialogDeleteComponent:!1,user_group_permission:this.$auth.$storage.getLocalStorage("userData-user_group_permission")}},mounted:function(){},methods:{onAction:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=10;break}return t.btnloading=!0,t.formDataLoading=!0,e.next=5,o.l(t.idNote,t.formData);case 5:n=e.sent,t.$refs.form.reset(),200==n.status?t.$emit("success","note"):t.$emit("error","note"),t.btnloading=!1,t.formDataLoading=!1;case 10:case"end":return e.stop()}}),e)})))()}},watch:{dialogNote:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogDeleteComponent=e.dialogNote,!e.dialogNote){t.next=10;break}return e.formDataLoading=!0,t.next=5,o.i(e.idNote);case 5:n=t.sent,e.formData.note=n.data.note,e.formData.note_sale=n.data.note_sale,e.formDataLoading=!1,e.loading=!1;case 10:e.btnloading=!1;case 11:case"end":return t.stop()}}),t)})))()},dialogDeleteComponent:function(){this.dialogDeleteComponent||this.$emit("cancleItem")}}},d=n(42),v=n(52),f=n.n(v),c=n(210),x=n(192),h=n(157),_=n(445),m=n(453),w=n(446),O=n(476),j=n(193),y=n(450),D=n(451),k=n(512),$=n(51),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-dialog",{attrs:{id:"dialogDeleteComponent",name:"dialogDeleteComponent",width:"500px",fullscreen:"xs"==e.$vuetify.breakpoint.name||"sm"==e.$vuetify.breakpoint.name},model:{value:e.dialogDeleteComponent,callback:function(t){e.dialogDeleteComponent=t},expression:"dialogDeleteComponent"}},[n("v-card",[n("v-form",{ref:"form",attrs:{autocomplete:"true"},on:{submit:function(t){return t.preventDefault(),e.onAction(e.formData.id)}}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[e._v("\n          หมายเหตุ\n        ")]),e._v(" "),e.formDataLoading?n("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}}):e._e(),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("v-textarea",{attrs:{label:"หมายเหตุ (เซล)","append-icon":"",id:"formData.note_sale",name:"formData.note_sale",outlined:"",dense:"","hide-details":""},model:{value:e.formData.note_sale,callback:function(t){e.$set(e.formData,"note_sale",t)},expression:"formData.note_sale"}})],1)],1),e._v(" "),n("v-row",{directives:[{name:"show",rawName:"v-show",value:-1==e.user_group_permission||9==e.user_group_permission||10==e.user_group_permission,expression:"user_group_permission == -1 || user_group_permission == 9 || user_group_permission == 10"}]},[n("v-col",[n("v-textarea",{attrs:{label:"หมายเหตุ (ส่วนกลาง)","append-icon":"",id:"formData.note",name:"formData.note",outlined:"",dense:"","hide-details":""},model:{value:e.formData.note,callback:function(t){e.$set(e.formData,"note",t)},expression:"formData.note"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.$emit("cancleItem")}}},[e._v("ยกเลิก")]),e._v(" "),n("v-btn",{attrs:{type:"submit",color:"success darken-1",text:"",loading:e.btnloading}},[e._v("บันทึก")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:c.a,VCard:x.a,VCardActions:h.a,VCardText:h.b,VCol:_.a,VContainer:m.a,VDialog:w.a,VForm:O.a,VProgressLinear:j.a,VRow:y.a,VSpacer:D.a,VTextarea:k.a,VToolbar:$.a})}}]);