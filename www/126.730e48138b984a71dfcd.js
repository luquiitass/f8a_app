(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{kyFE:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return b})),n.d(e,"ion_menu_button",(function(){return O})),n.d(e,"ion_menu_toggle",(function(){return j}));var i=n("rePB"),o=n("HaE+"),r=n("1OyB"),a=n("vuIU"),s=n("wEJo"),c=n("E/Mt"),u=n("bC4P"),h=n("y08P"),l=n("W6o/"),d=n("gfLf"),p=n("74mu");function f(){f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",r=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(_){s=function(t,e,n){return t[e]=n}}function c(t,e,n,i){var o=Object.create((e&&e.prototype instanceof l?e:l).prototype),r=new j(i||[]);return o._invoke=function(t,e,n){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return{value:void 0,done:!0}}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=u(t,e,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}(t,n,r),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=c;var h={};function l(){}function d(){}function p(){}var m={};s(m,o,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(E([])));v&&v!==e&&n.call(v,o)&&(m=v);var g=p.prototype=l.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var i;this._invoke=function(o,r){function a(){return new e((function(i,a){!function i(o,r,a,s){var c=u(t[o],t,r);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return i("throw",t,a,s)}))}s(c.arg)}(o,r,i,a)}))}return i=i?i.then(a,a):a()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=u(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:A}}function A(){return{value:void 0,done:!0}}return d.prototype=p,s(g,"constructor",p),s(p,"constructor",d),d.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,r,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,i,o,r){void 0===r&&(r=Promise);var a=new w(c(e,n,i,o),r);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),s(g,a,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var s=n.call(r,"catchLoc"),c=n.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}n("B4Jq"),n("Kfhc");var m='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b=function(){function t(e){var n=this;Object(r.a)(this,t),Object(s.o)(this,e),this.ionWillOpen=Object(s.g)(this,"ionWillOpen",7),this.ionWillClose=Object(s.g)(this,"ionWillClose",7),this.ionDidOpen=Object(s.g)(this,"ionDidOpen",7),this.ionDidClose=Object(s.g)(this,"ionDidClose",7),this.ionMenuChange=Object(s.g)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=h.a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=function(t){return n.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}var e,p,b,k,O;return Object(a.a)(t,[{key:"typeChanged",value:function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-".concat(e)),n.classList.add("menu-content-".concat(t)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(l.n)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(O=Object(o.a)(f().mark((function t(){var e,i,o=this;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===this.type&&(this.type=c.c.get("menuType","overlay")),e=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),(i=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))&&i.tagName){t.next=8;break}return console.error('Menu: must have a "content" element to listen for drag events on.'),t.abrupt("return");case 8:return this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),d.a._register(this),t.next=15,Promise.resolve().then(n.bind(null,"KF81"));case 15:this.gesture=t.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:function(t){return o.canStart(t)},onWillStart:function(){return o.onWillStart()},onStart:function(){return o.onStart()},onMove:function(t){return o.onMove(t)},onEnd:function(t){return o.onEnd(t)}}),this.updateState();case 17:case"end":return t.stop()}}),t,this)}))),function(){return O.apply(this,arguments)})},{key:"componentWillLoad",value:function(){this.inheritedAttributes=Object(l.i)(this.el)}},{key:"componentDidLoad",value:(k=Object(o.a)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 2:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),d.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}},{key:"onKeydown",value:function(t){"Escape"===t.key&&this.close()}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,t)}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,t)}},{key:"setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return d.a._setOpen(this,t,e)}},{key:"focusFirstDescendant",value:function(){var t=this.el,e=t.querySelector(m);e?e.focus():t.focus()}},{key:"focusLastDescendant",value:function(){var t=this.el,e=Array.from(t.querySelectorAll(m)),n=e.length>0?e[e.length-1]:null;n?n.focus():t.focus()}},{key:"trapKeyboardFocus",value:function(t,e){var n=t.target;n&&(this.el.contains(n)?this.lastFocus=n:(this.focusFirstDescendant(),this.lastFocus===e.activeElement&&this.focusLastDescendant()))}},{key:"_setOpen",value:(b=Object(o.a)(f().mark((function t(e){var n,i=arguments;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],this._isActive()&&!this.isAnimating&&e!==this._isOpen){t.next=3;break}return t.abrupt("return",!1);case 3:return this.beforeAnimation(e),t.next=6,this.loadAnimation();case 6:return t.next=8,this.startAnimation(e,n);case 8:return this.afterAnimation(e),t.abrupt("return",!0);case 10:case"end":return t.stop()}}),t,this)}))),function(t){return b.apply(this,arguments)})},{key:"loadAnimation",value:(p=Object(o.a)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.menuInnerEl.offsetWidth)!==this.width||void 0===this.animation){t.next=3;break}return t.abrupt("return");case 3:return this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t.next=7,d.a._createAnimation(this.type,this);case 7:this.animation=t.sent,c.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})},{key:"startAnimation",value:(e=Object(o.a)(f().mark((function t(e,n){var i,o,r,a,s;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=!e,o=Object(c.b)(this),r="ios"===o?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",a="ios"===o?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",s=this.animation.direction(i?"reverse":"normal").easing(i?a:r).onFinish((function(){"reverse"===s.getDirection()&&s.direction("normal")})),!n){t.next=10;break}return t.next=8,s.play();case 8:t.next=11;break;case 10:s.play({sync:!0});case 11:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!d.a._getOpenSync()&&g(window,t.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(l.m)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(t){if(this.isAnimating&&this.animation){var e=v(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else Object(l.m)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=v(t.deltaX,n,i),r=this.width,a=o/r,s=t.velocityX,c=r/2,h=s>=0&&(s>.2||t.deltaX>c),d=s<=0&&(s<-.2||t.deltaX<-c),p=n?i?h:d:i?d:h,f=!n&&p;n&&!p&&(f=!0),this.lastOnEnd=t.currentTime;var m=p?.001:-.001,b=a<0?.01:a;m+=Object(u.a)([0,0],[.4,0],[.6,1],[1,1],Object(l.k)(0,b,.9999))[0]||0;var g=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(f)}),{oneTimeCallback:!0}).progressEnd(g?1:0,this._isOpen?1-m:m,300)}else Object(l.m)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(t){Object(l.m)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(y),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(w),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(t){Object(l.m)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&(this.contentEl.classList.add(x),this.contentEl.setAttribute("aria-hidden","true")),this.ionDidOpen.emit(),this.menuInnerEl&&this.focusFirstDescendant(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.classList.remove(y),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(x),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(w),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0))}},{key:"updateState",value:function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||d.a._setActiveMenu(this),Object(l.m)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(l.m)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var t,e=this,n=this.isEndSide,o=this.type,r=this.disabled,a=this.isPaneVisible,u=this.inheritedAttributes,h=Object(c.b)(this);return Object(s.j)(s.c,{role:"navigation","aria-label":u["aria-label"]||"menu",class:(t={},Object(i.a)(t,h,!0),Object(i.a)(t,"menu-type-".concat(o),!0),Object(i.a)(t,"menu-enabled",!r),Object(i.a)(t,"menu-side-end",n),Object(i.a)(t,"menu-side-start",!n),Object(i.a)(t,"menu-pane-visible",a),t)},Object(s.j)("div",{class:"menu-inner",part:"container",ref:function(t){return e.menuInnerEl=t}},Object(s.j)("slot",null)),Object(s.j)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}},{key:"el",get:function(){return Object(s.k)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}}]),t}(),v=function(t,e,n){return Math.max(0,e!==n?-t:t)},g=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},y="show-menu",w="show-backdrop",x="menu-content-open";b.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var k=function(){var t=Object(o.a)(f().mark((function t(e){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(e);case 2:if(t.t0=n=t.sent,!t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=t.sent;case 8:return t.abrupt("return",!!t.t0);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){function t(e){var n=this;Object(r.a)(this,t),Object(s.o)(this,e),this.inheritedAttributes={},this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=Object(o.a)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.a.toggle(n.menu));case 1:case"end":return t.stop()}}),t)})))}var e;return Object(a.a)(t,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=Object(l.i)(this.el)}},{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(e=Object(o.a)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t,e=this.color,n=this.disabled,o=this.inheritedAttributes,r=Object(c.b)(this),a=c.c.get("menuIcon","ios"===r?"menu-outline":"menu-sharp"),u=this.autoHide&&!this.visible,h={type:this.type},l=o["aria-label"]||"menu";return Object(s.j)(s.c,{onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":u?"true":null,class:Object(p.a)(e,(t={},Object(i.a)(t,r,!0),Object(i.a)(t,"button",!0),Object(i.a)(t,"menu-button-hidden",u),Object(i.a)(t,"menu-button-disabled",n),Object(i.a)(t,"in-toolbar",Object(p.c)("ion-toolbar",this.el)),Object(i.a)(t,"in-toolbar-color",Object(p.c)("ion-toolbar[color]",this.el)),Object(i.a)(t,"ion-activatable",!0),Object(i.a)(t,"ion-focusable",!0),t))},Object(s.j)("button",Object.assign({},h,{disabled:n,class:"button-native",part:"native","aria-label":l}),Object(s.j)("span",{class:"button-inner"},Object(s.j)("slot",null,Object(s.j)("ion-icon",{part:"icon",icon:a,mode:r,lazy:!1,"aria-hidden":"true"}))),"md"===r&&Object(s.j)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return Object(s.k)(this)}}]),t}();O.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var j=function(){function t(e){var n=this;Object(r.a)(this,t),Object(s.o)(this,e),this.visible=!1,this.autoHide=!0,this.onClick=function(){return d.a.toggle(n.menu)}}var e;return Object(a.a)(t,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(e=Object(o.a)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t,e=Object(c.b)(this),n=this.autoHide&&!this.visible;return Object(s.j)(s.c,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},Object(i.a)(t,e,!0),Object(i.a)(t,"menu-toggle-hidden",n),t)},Object(s.j)("slot",null))}}]),t}();j.style=":host(.menu-toggle-hidden){display:none}"}}]);