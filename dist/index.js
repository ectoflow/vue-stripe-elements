!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],e):"object"==typeof exports?exports["vue-stripe-elements"]=e():t["vue-stripe-elements"]=e()}(self,(function(){return function(){var t={569:function(t,e,n){var r=n(794);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},766:function(t,e,n){var r=n(977),o=n(97),i=n(782),u=function(t){return function(e,n,u){var c,s=r(e),f=o(s.length),a=i(u,f);if(t&&n!=n){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},624:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},478:function(t,e,n){var r=n(402),o=n(929),i=n(683),u=n(615);t.exports=function(t,e){for(var n=o(e),c=u.f,s=i.f,f=0;f<n.length;f++){var a=n[f];r(t,a)||c(t,a,s(e,a))}}},57:function(t,e,n){var r=n(494),o=n(615),i=n(677);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},677:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},494:function(t,e,n){var r=n(544);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},668:function(t,e,n){var r=n(583),o=n(794),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},690:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},263:function(t,e,n){var r=n(583),o=n(683).f,i=n(57),u=n(270),c=n(460),s=n(478),f=n(451);t.exports=function(t,e){var n,a,p,l,v,d=t.target,h=t.global,m=t.stat;if(n=h?r:m?r[d]||c(d,{}):(r[d]||{}).prototype)for(a in e){if(l=e[a],p=t.noTargetGet?(v=o(n,a))&&v.value:n[a],!f(h?a:d+(m?".":"#")+a,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;s(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(n,a,l,t)}}},544:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},897:function(t,e,n){var r=n(287),o=n(583),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},583:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},402:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},639:function(t){t.exports={}},275:function(t,e,n){var r=n(494),o=n(544),i=n(668);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},44:function(t,e,n){var r=n(544),o=n(624),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},734:function(t,e,n){var r=n(314),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},743:function(t,e,n){var r,o,i,u=n(491),c=n(583),s=n(794),f=n(57),a=n(402),p=n(314),l=n(137),v=n(639),d=c.WeakMap;if(u){var h=p.state||(p.state=new d),m=h.get,y=h.has,b=h.set;r=function(t,e){return e.facade=t,b.call(h,t,e),e},o=function(t){return m.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var g=l("state");v[g]=!0,r=function(t,e){return e.facade=t,f(t,g,e),e},o=function(t){return a(t,g)?t[g]:{}},i=function(t){return a(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},451:function(t,e,n){var r=n(544),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==f||n!=s&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},794:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},268:function(t){t.exports=!1},491:function(t,e,n){var r=n(583),o=n(734),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},615:function(t,e,n){var r=n(494),o=n(275),i=n(569),u=n(670),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},683:function(t,e,n){var r=n(494),o=n(112),i=n(677),u=n(977),c=n(670),s=n(402),f=n(275),a=Object.getOwnPropertyDescriptor;e.f=r?a:function(t,e){if(t=u(t),e=c(e,!0),f)try{return a(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},815:function(t,e,n){var r=n(356),o=n(690).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},12:function(t,e){e.f=Object.getOwnPropertySymbols},356:function(t,e,n){var r=n(402),o=n(977),i=n(766).indexOf,u=n(639);t.exports=function(t,e){var n,c=o(t),s=0,f=[];for(n in c)!r(u,n)&&r(c,n)&&f.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(f,n)||f.push(n));return f}},432:function(t,e,n){var r=n(356),o=n(690);t.exports=Object.keys||function(t){return r(t,o)}},112:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},929:function(t,e,n){var r=n(897),o=n(815),i=n(12),u=n(569);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},287:function(t,e,n){var r=n(583);t.exports=r},270:function(t,e,n){var r=n(583),o=n(57),i=n(402),u=n(460),c=n(734),s=n(743),f=s.get,a=s.enforce,p=String(String).split("String");(t.exports=function(t,e,n,c){var s,f=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(s=a(n)).source||(s.source=p.join("string"==typeof e?e:""))),t!==r?(f?!v&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},955:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},460:function(t,e,n){var r=n(583),o=n(57);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},137:function(t,e,n){var r=n(836),o=n(284),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},314:function(t,e,n){var r=n(583),o=n(460),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},836:function(t,e,n){var r=n(268),o=n(314);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},782:function(t,e,n){var r=n(89),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},977:function(t,e,n){var r=n(44),o=n(955);t.exports=function(t){return r(o(t))}},89:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},97:function(t,e,n){var r=n(89),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},324:function(t,e,n){var r=n(955);t.exports=function(t){return Object(r(t))}},670:function(t,e,n){var r=n(794);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},284:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},751:function(t,e,n){var r=n(263),o=n(324),i=n(432);r({target:"Object",stat:!0,forced:n(544)((function(){i(1)}))},{keys:function(t){return i(o(t))}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";n.r(r),n.d(r,{StripeElement:function(){return s},StripeElements:function(){return p},createElement:function(){return i},createElements:function(){return o},initStripe:function(){return e}});var t=function(){var t=this.$createElement;return(this._self._c||t)("div")};t._withStripped=!0;n(751);var e=function(t,e){return void 0===window.Stripe?console.error("Stripe v3 library is not loaded"):window.Stripe(t,e)},o=function(t,e){return void 0===t?console.error("Instance object is not defined, make sure you initialized Stripe before creating elements"):t.elements(e)},i=function(t,e,n){return void 0===t?console.error("Elements object is not defined. You can not create stripe element without it"):void 0===e?console.error("elementType is required. You can not create stripe element without it"):t.create(e,n)};function u(t,e,n,r,o,i,u,c){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=s):o&&(s=c?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var a=f.render;f.render=function(t,e){return s.call(e),a(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,s):[s]}return{exports:t,options:f}}var c=u({name:"StripeElement",props:{elements:{type:Object,required:!0},type:{type:String,default:function(){return"card"}},options:{type:[Object,void 0],default:function(){}}},data:function(){return{stripeElement:void 0,domElement:document.createElement("div")}},computed:{elementsUsable:function(){return!!this.elements&&Object.keys(this.elements).length>0}},watch:{options:{handler:function(t){t&&this.stripeElement&&this.stripeElement.update(t)},deep:!0}},beforeDestroy:function(){this.stripeElement&&(this.stripeElement.unmount(),this.stripeElement.destroy())},mounted:function(){this.elementsUsable&&(this.mountElement(),this.handleEvents())},methods:{mountElement:function(){var t=this.domElement;return this.stripeElement=i(this.elements,this.type,this.options),this.stripeElement.mount(t),this.$el.appendChild(t),this.stripeElement},handleEvents:function(){var t=this;["change","ready","focus","blur","escape"].forEach((function(e){t.stripeElement.on(e,t.eventHandler.bind(t,e))}))},eventHandler:function(t,e){return this.$emit(t,e)}}},t,[],!1,null,null,null);c.options.__file="src/components/StripeElement.vue";var s=c.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.elementsUsable?n("div",[t._t("default",null,{instance:t.instance,elements:t.elements})],2):t._e()};f._withStripped=!0;var a=u({name:"StripeElements",props:{stripeKey:{type:String,required:!0},instanceOptions:{type:Object,default:function(){return{}}},elementsOptions:{type:Object,default:function(){return{}}}},data:function(){return{instance:{},elements:{}}},computed:{elementsUsable:function(){var t=this.elements;return!!t&&Object.keys(t).length>0}},mounted:function(){this.instance=e(this.stripeKey,this.instanceOptions),this.elements=o(this.instance,this.elementsOptions)}},f,[],!1,null,null,null);a.options.__file="src/components/StripeElements.vue";var p=a.exports}(),r}()}));