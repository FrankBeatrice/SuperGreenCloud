webpackJsonp([12],{"/r0H":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:e.$style.container}},[e.to?n("nuxt-link",{attrs:{to:e.to}},[e._v(e._s(e.label)+" >")]):e.onClick?n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.onClick()}}},[e._v(e._s(e.label)+" >")]):n("span",[e._v(e._s(e.label)+" >")])],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[]};t.a=r},"4G/J":function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:this.$style.container}},[t("section",{attrs:{id:this.$style.body}},[t("h1",[this._v("\n      Ok all good, move on:)\n    ")])]),t("section",{attrs:{id:this.$style.nav}},[t("NextButton",{attrs:{to:this.nextUrl}})],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};t.a=r},GWgG:function(e,t,n){(t=e.exports=n("FZ+f")(!1)).push([e.i,"#_3RV38cDQq8V797ijuFIDbm_0{flex-direction:column;min-height:100vh}#_2F_w7NfCe5H2C1w2qc_CjV_0,#_3RV38cDQq8V797ijuFIDbm_0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column}#_2F_w7NfCe5H2C1w2qc_CjV_0{flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}#_2F_w7NfCe5H2C1w2qc_CjV_0 img{max-height:200pt}#_1_N9rWx5fBSriDYNXU3U7S_0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}",""]),t.locals={container:"_3RV38cDQq8V797ijuFIDbm_0",body:"_2F_w7NfCe5H2C1w2qc_CjV_0",nav:"_1_N9rWx5fBSriDYNXU3U7S_0"}},"Ii/5":function(e,t,n){var o=n("GWgG");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("3f3ed1fc",o,!1,{sourceMap:!1})},JlQJ:function(e,t,n){"use strict";var o=n("bEYm");t.a={components:{NextButton:o.a},layout:"fullscreen",computed:{controller:function(){return this.$store.getters["controllers/getSelected"]},nextUrl:function(){var e=this.controller;return 0==e.state.value?"/setup-controller-preset":4==e.wifi_status.value?"/setup-controller-wifi-sta":"/"}}}},PNWn:function(e,t,n){var o=n("oJLy");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("78001a34",o,!1,{sourceMap:!1})},VWkV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var o=n("JlQJ"),r=n("4G/J"),i=!1,s={};e.hot&&e.hot.accept(['!!vue-style-loader?{"sourceMap":false}!css-loader?{"sourceMap":false,"minimize":true,"importLoaders":true,"alias":{"/assets":"/home/stant/SuperGreenLab/SuperGreenDesktop/assets","/static":"/home/stant/SuperGreenLab/SuperGreenDesktop/static"},"localIdentName":"[hash:base64]_0","modules":true}!../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-c3ad5966","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./new-step-done.vue'],function(){var e=s.$style;if(e){var t=n("Ii/5");JSON.stringify(t)!==JSON.stringify(e)&&(s.$style=t,n("c37E").rerender("data-v-c3ad5966"))}});var a=function(e){i||(s.$style=n("Ii/5"),Object.defineProperty(this,"$style",{get:function(){return s.$style}}))},c=n("VU/8")(o.a,r.a,!1,a,null,null);c.options.__file="pages/new-step-done.vue",t.default=c.exports}.call(t,n("f1Eh")(e))},bEYm:function(e,t,n){"use strict";(function(e){var o=n("bd1q"),r=n("/r0H"),i=!1,s={};e.hot&&e.hot.accept(['!!vue-style-loader?{"sourceMap":false}!css-loader?{"sourceMap":false,"minimize":true,"importLoaders":true,"alias":{"/assets":"/home/stant/SuperGreenLab/SuperGreenDesktop/assets","/static":"/home/stant/SuperGreenLab/SuperGreenDesktop/static"},"localIdentName":"[hash:base64]_0","modules":true}!../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-6fcb0ce0","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./nextbutton.vue'],function(){var e=s.$style;if(e){var t=n("PNWn");JSON.stringify(t)!==JSON.stringify(e)&&(s.$style=t,n("c37E").rerender("data-v-6fcb0ce0"))}});var a=function(e){i||(s.$style=n("PNWn"),Object.defineProperty(this,"$style",{get:function(){return s.$style}}))},c=n("VU/8")(o.a,r.a,!1,a,null,null);c.options.__file="components/nextbutton.vue",t.a=c.exports}).call(t,n("f1Eh")(e))},bd1q:function(e,t,n){"use strict";t.a={props:{onClick:Function,to:String,label:{type:String,default:"Next"}}}},c37E:function(e,t){var n,o,r=Object.create(null);"undefined"!=typeof window&&(window.__VUE_HOT_MAP__=r);var i=!1,s="beforeCreate";function a(e,t){if(t.functional){var n=t.render;t.render=function(t,o){var i=r[e].instances;return o&&i.indexOf(o.parent)<0&&i.push(o.parent),n(t,o)}}else c(t,s,function(){var t=r[e];t.Ctor||(t.Ctor=this.constructor),t.instances.push(this)}),c(t,"beforeDestroy",function(){var t=r[e].instances;t.splice(t.indexOf(this),1)})}function c(e,t,n){var o=e[t];e[t]=o?Array.isArray(o)?o.concat(n):[o,n]:[n]}function l(e){return function(t,n){try{e(t,n)}catch(e){console.error(e),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function u(e,t){for(var n in e)n in t||delete e[n];for(var o in t)e[o]=t[o]}t.install=function(e,r){i||(i=!0,n=e.__esModule?e.default:e,o=n.version.split(".").map(Number),r,n.config._lifecycleHooks.indexOf("init")>-1&&(s="init"),t.compatible=o[0]>=2,t.compatible||console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))},t.createRecord=function(e,t){if(!r[e]){var n=null;"function"==typeof t&&(t=(n=t).options),a(e,t),r[e]={Ctor:n,options:t,instances:[]}}},t.isRecorded=function(e){return void 0!==r[e]},t.rerender=l(function(e,t){var n=r[e];if(t){if("function"==typeof t&&(t=t.options),n.Ctor)n.Ctor.options.render=t.render,n.Ctor.options.staticRenderFns=t.staticRenderFns,n.instances.slice().forEach(function(e){e.$options.render=t.render,e.$options.staticRenderFns=t.staticRenderFns,e._staticTrees&&(e._staticTrees=[]),Array.isArray(n.Ctor.options.cached)&&(n.Ctor.options.cached=[]),Array.isArray(e.$options.cached)&&(e.$options.cached=[]),e.$forceUpdate()});else if(n.options.render=t.render,n.options.staticRenderFns=t.staticRenderFns,n.options.functional){if(Object.keys(t).length>2)u(n.options,t);else{var o=n.options._injectStyles;if(o){var i=t.render;n.options.render=function(e,t){return o.call(t),i(e,t)}}}n.options._Ctor=null,Array.isArray(n.options.cached)&&(n.options.cached=[]),n.instances.slice().forEach(function(e){e.$forceUpdate()})}}else n.instances.slice().forEach(function(e){e.$forceUpdate()})}),t.reload=l(function(e,t){var n=r[e];if(t)if("function"==typeof t&&(t=t.options),a(e,t),n.Ctor){o[1]<2&&(n.Ctor.extendOptions=t);var i=n.Ctor.super.extend(t);n.Ctor.options=i.options,n.Ctor.cid=i.cid,n.Ctor.prototype=i.prototype,i.release&&i.release()}else u(n.options,t);n.instances.slice().forEach(function(e){e.$vnode&&e.$vnode.context?e.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")})})},f1Eh:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},oJLy:function(e,t,n){(t=e.exports=n("FZ+f")(!1)).push([e.i,"#_1fFt5OYGuNAAYPj_5nO8YN_0{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5pt}#_1fFt5OYGuNAAYPj_5nO8YN_0>a{color:#5dbd37;text-decoration:none;font-size:15pt;font-weight:700;-webkit-transition:opacity .2s;transition:opacity .2s}#_1fFt5OYGuNAAYPj_5nO8YN_0>a:hover{opacity:.3}",""]),t.locals={container:"_1fFt5OYGuNAAYPj_5nO8YN_0"}}});