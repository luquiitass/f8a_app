!function(){function e(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(h){return void n(h)}c.done?t(s):Promise.resolve(s).then(o,r)}function t(t){return function(){var n=this,o=arguments;return new Promise((function(r,i){var a=t.apply(n,o);function c(t){e(a,r,i,c,s,"next",t)}function s(t){e(a,r,i,c,s,"throw",t)}c(void 0)}))}}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"37vE":function(e,o,r){"use strict";r.r(o),r.d(o,"pwa_camera_modal_instance",(function(){return a}));var i=r("At8z"),a=function(){function e(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object(i.h)(this,n),this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.handlePhoto=function(){var e=t(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.onPhoto.emit(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.handleNoDeviceError=function(){var e=t(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.noDeviceError.emit(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onPhoto=Object(i.d)(this,"onPhoto",7),this.noDeviceError=Object(i.d)(this,"noDeviceError",7)}var o,r,a;return o=e,a=[{key:"style",get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}}],(r=[{key:"handleBackdropClick",value:function(e){e.target!==this.el&&this.onPhoto.emit(null)}},{key:"handleComponentClick",value:function(e){e.stopPropagation()}},{key:"handleBackdropKeyUp",value:function(e){"Escape"===e.key&&this.onPhoto.emit(null)}},{key:"render",value:function(){var e=this;return Object(i.g)("div",{class:"wrapper",onClick:function(t){return e.handleBackdropClick(t)}},Object(i.g)("div",{class:"content"},Object(i.g)("pwa-camera",{onClick:function(t){return e.handleComponentClick(t)},handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}},{key:"el",get:function(){return Object(i.f)(this)}}])&&n(o.prototype,r),a&&n(o,a),e}()}}])}();