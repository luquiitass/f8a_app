(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"2lz6":function(t,n,e){"use strict";e.r(n),e.d(n,"ion_infinite_scroll",(function(){return h})),e.d(n,"ion_infinite_scroll_content",(function(){return f}));var i=e("rePB"),r=e("HaE+"),o=e("1OyB"),s=e("vuIU"),l=e("wEJo"),a=e("E/Mt"),c=e("39oe");function u(){u=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(S){l=function(t,n,e){return t[n]=e}}function a(t,n,e,i){var r=Object.create((n&&n.prototype instanceof f?n:f).prototype),o=new E(i||[]);return r._invoke=function(t,n,e){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return{value:void 0,done:!0}}for(e.method=r,e.arg=o;;){var s=e.delegate;if(s){var l=w(s,e);if(l){if(l===h)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===i)throw i="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i="executing";var a=c(t,n,e);if("normal"===a.type){if(i=e.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(i="completed",e.method="throw",e.arg=a.arg)}}}(t,e,o),r}function c(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=a;var h={};function f(){}function d(){}function p(){}var g={};l(g,r,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==n&&e.call(v,r)&&(g=v);var y=p.prototype=f.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){var i;this._invoke=function(r,o){function s(){return new n((function(i,s){!function i(r,o,s,l){var a=c(t[r],t,o);if("throw"!==a.type){var u=a.arg,h=u.value;return h&&"object"==typeof h&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){i("next",t,s,l)}),(function(t){i("throw",t,s,l)})):n.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return i("throw",t,s,l)}))}l(a.arg)}(r,o,i,s)}))}return i=i?i.then(s,s):s()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=c(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(e.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,l(y,"constructor",p),l(p,"constructor",d),d.displayName=l(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,o,(function(){return this})),t.AsyncIterator=x,t.async=function(n,e,i,r,o){void 0===o&&(o=Promise);var s=new x(a(n,e,i,r),o);return t.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(y),l(y,s,"Generator"),l(y,r,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(e,i){return s.type="throw",s.arg=t,n.next=e,i&&(n.method="next",n.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=e.call(o,"catchLoc"),a=e.call(o,"finallyLoc");if(l&&a){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=n,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var r=i.arg;k(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var h=function(){function t(n){var e=this;Object(o.a)(this,t),Object(l.o)(this,n),this.ionInfinite=Object(l.g)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var t=e.scrollEl;if(!t||!e.canStart())return 1;var n=e.el.offsetHeight;if(0===n)return 2;var i=t.scrollTop,r=t.offsetHeight,o=0!==e.thrPc?r*e.thrPc:e.thrPx;if(("bottom"===e.position?t.scrollHeight-n-i-o-r:i-n-o)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4}}var n,e;return Object(s.a)(t,[{key:"thresholdChanged",value:function(){var t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}},{key:"disabledChanged",value:function(){var t=this.disabled;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t)}},{key:"connectedCallback",value:(e=Object(r.a)(u().mark((function t(){var n,e=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.el.closest("ion-content")){t.next=4;break}return console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),t.abrupt("return");case 4:return t.next=6,n.getScrollElement();case 6:this.scrollEl=t.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(l.f)((function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)}));case 10:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:(n=Object(r.a)(u().mark((function t(){var n,e,i=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.scrollEl,this.isLoading&&n){t.next=3;break}return t.abrupt("return");case 3:this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,e=n.scrollHeight-n.scrollTop,requestAnimationFrame((function(){Object(l.h)((function(){var t=n.scrollHeight-e;requestAnimationFrame((function(){Object(l.f)((function(){n.scrollTop=t,i.isBusy=!1}))}))}))})));case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var t,n=Object(a.b)(this),e=this.disabled;return Object(l.j)(l.c,{class:(t={},Object(i.a)(t,n,!0),Object(i.a)(t,"infinite-scroll-loading",this.isLoading),Object(i.a)(t,"infinite-scroll-enabled",!e),t)})}},{key:"el",get:function(){return Object(l.k)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),t}();h.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var f=function(){function t(n){Object(o.a)(this,t),Object(l.o)(this,n)}return Object(s.a)(t,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var t=Object(a.b)(this);this.loadingSpinner=a.c.get("infiniteLoadingSpinner",a.c.get("spinner","ios"===t?"lines":"crescent"))}}},{key:"render",value:function(){var t,n=Object(a.b)(this);return Object(l.j)(l.c,{class:(t={},Object(i.a)(t,n,!0),Object(i.a)(t,"infinite-scroll-content-".concat(n),!0),t)},Object(l.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(l.j)("div",{class:"infinite-loading-spinner"},Object(l.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(l.j)("div",{class:"infinite-loading-text",innerHTML:Object(c.a)(this.loadingText)})))}}]),t}();f.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);