(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{eGHz:function(e,t,r){"use strict";r.r(t),r.d(t,"pwa_camera",(function(){return l}));var i=r("HaE+"),n=r("1OyB"),a=r("vuIU"),o=r("At8z");function s(){s=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function l(e,t,r,i){var n=Object.create((t&&t.prototype instanceof d?t:d).prototype),a=new C(i||[]);return n._invoke=function(e,t,r){var i="suspendedStart";return function(n,a){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var o=r.delegate;if(o){var s=b(o,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var c=h(e,t,r);if("normal"===c.type){if(i=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),n}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var u={};function d(){}function f(){}function g(){}var p={};c(p,n,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==t&&r.call(m,n)&&(p=m);var w=g.prototype=d.prototype=Object.create(p);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var i;this._invoke=function(n,a){function o(){return new t((function(i,o){!function i(n,a,o,s){var c=h(e[n],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){i("next",e,o,s)}),(function(e){i("throw",e,o,s)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return i("throw",e,o,s)}))}s(c.arg)}(n,a,i,o)}))}return i=i?i.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var i=h(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,u;var n=i.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=g,c(w,"constructor",g),c(g,"constructor",f),f.displayName=c(g,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,o,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(y.prototype),c(y.prototype,a,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,i,n,a){void 0===a&&(a=Promise);var o=new y(l(t,r,i,n),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(w),c(w,o,"Generator"),c(w,n,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var i=t.pop();if(i in e)return r.value=i,r.done=!1,r}return r.done=!0,r}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(r,i){return o.type="throw",o.arg=e,t.next=r,i&&(t.method="next",t.arg=void 0),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var c=window.ImageCapture;void 0===c&&(c=function(){function e(t){var r=this;if(Object(n.a)(this,e),"video"!==t.kind)throw new DOMException("NotSupportedError");this._videoStreamTrack=t,"readyState"in this._videoStreamTrack||(this._videoStreamTrack.readyState="live"),this._previewStream=new MediaStream([t]),this.videoElement=document.createElement("video"),this.videoElementPlaying=new Promise((function(e){r.videoElement.addEventListener("playing",e)})),HTMLMediaElement?this.videoElement.srcObject=this._previewStream:this.videoElement.src=URL.createObjectURL(this._previewStream),this.videoElement.muted=!0,this.videoElement.setAttribute("playsinline",""),this.videoElement.play(),this.canvasElement=document.createElement("canvas"),this.canvas2dContext=this.canvasElement.getContext("2d")}return Object(a.a)(e,[{key:"videoStreamTrack",get:function(){return this._videoStreamTrack}},{key:"getPhotoCapabilities",value:function(){return new Promise((function(e,t){var r={current:0,min:0,max:0};e({exposureCompensation:r,exposureMode:"none",fillLightMode:["none"],focusMode:"none",imageHeight:r,imageWidth:r,iso:r,redEyeReduction:!1,whiteBalanceMode:"none",zoom:r}),t(new DOMException("OperationError"))}))}},{key:"setOptions",value:function(){return new Promise((function(e,t){}))}},{key:"takePhoto",value:function(){var e=this;return new Promise((function(t,r){if("live"!==e._videoStreamTrack.readyState)return r(new DOMException("InvalidStateError"));e.videoElementPlaying.then((function(){try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),e.canvasElement.toBlob(t)}catch(i){r(new DOMException("UnknownError"))}}))}))}},{key:"grabFrame",value:function(){var e=this;return new Promise((function(t,r){if("live"!==e._videoStreamTrack.readyState)return r(new DOMException("InvalidStateError"));e.videoElementPlaying.then((function(){try{e.canvasElement.width=e.videoElement.videoWidth,e.canvasElement.height=e.videoElement.videoHeight,e.canvas2dContext.drawImage(e.videoElement,0,0),t(window.createImageBitmap(e.canvasElement))}catch(i){r(new DOMException("UnknownError"))}}))}))}}]),e}()),window.ImageCapture=c;var l=function(){function e(t){var r=this;Object(n.a)(this,e),Object(o.h)(this,t),this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.showShutterOverlay=!1,this.flashIndex=0,this.hasCamera=null,this.rotation=0,this.deviceError=null,this.hasMultipleCameras=!1,this.hasFlash=!1,this.flashModes=[],this.flashMode="off",this.handlePickFile=function(e){},this.handleShutterClick=function(e){console.debug("shutter click"),r.capture()},this.handleRotateClick=function(e){r.rotate()},this.handleClose=function(e){r.handlePhoto&&r.handlePhoto(null)},this.handleFlashClick=function(e){r.cycleFlash()},this.handleCancelPhoto=function(e){var t=r.stream&&r.stream.getTracks()[0],i=t&&t.getConstraints();r.photo=null,r.photoSrc=null,i?r.initCamera({video:{facingMode:i.facingMode}}):r.initCamera()},this.handleAcceptPhoto=function(e){r.handlePhoto&&r.handlePhoto(r.photo)},this.handleFileInputChange=function(){var e=Object(i.a)(s().mark((function e(t){var i,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.target.files[0],e.prev=2,e.next=5,r.getOrientation(i);case 5:n=e.sent,console.debug("Got orientation",n),r.photoOrientation=n,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:r.handlePhoto&&r.handlePhoto(i);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),this.handleVideoMetadata=function(e){console.debug("Video metadata",e)},this.isServer=Object(o.e)(this,"isServer")}var t,r,c,l,h,u,d,f;return Object(a.a)(e,[{key:"componentDidLoad",value:(f=Object(i.a)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isServer){e.next=2;break}return e.abrupt("return");case 2:return this.defaultConstraints={video:{facingMode:this.facingMode}},e.next=5,this.queryDevices();case 5:return e.next=7,this.initCamera();case 7:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"componentDidUnload",value:function(){this.stopStream(),this.photoSrc&&URL.revokeObjectURL(this.photoSrc)}},{key:"hasImageCapture",value:function(){return"ImageCapture"in window}},{key:"queryDevices",value:(d=Object(i.a)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:t=e.sent.filter((function(e){return"videoinput"==e.kind})),this.hasCamera=!!t.length,this.hasMultipleCameras=t.length>1,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.deviceError=e.t0;case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return d.apply(this,arguments)})},{key:"initCamera",value:(u=Object(i.a)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||(t=this.defaultConstraints),e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia(Object.assign({video:!0,audio:!1},t));case 4:this.initStream(e.sent),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),this.deviceError=e.t0,this.handleNoDeviceError&&this.handleNoDeviceError(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(e){return u.apply(this,arguments)})},{key:"initStream",value:(h=Object(i.a)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.stream=t,this.videoElement.srcObject=t,!this.hasImageCapture()){e.next=8;break}return this.imageCapture=new window.ImageCapture(t.getVideoTracks()[0]),e.next=6,this.initPhotoCapabilities(this.imageCapture);case 6:e.next=10;break;case 8:this.deviceError="No image capture",this.handleNoDeviceError&&this.handleNoDeviceError();case 10:this.el.forceUpdate();case 11:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"initPhotoCapabilities",value:(l=Object(i.a)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPhotoCapabilities();case 2:(r=e.sent).fillLightMode&&r.fillLightMode.length>1&&(this.flashModes=r.fillLightMode.map((function(e){return e})),this.flashMode?(this.flashMode=this.flashModes[this.flashModes.indexOf(this.flashMode)]||"off",this.flashIndex=this.flashModes.indexOf(this.flashMode)||0):this.flashIndex=0);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"stopStream",value:function(){this.videoElement&&(this.videoElement.srcObject=null),this.stream&&this.stream.getTracks().forEach((function(e){return e.stop()}))}},{key:"capture",value:(c=Object(i.a)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.hasImageCapture()){e.next=13;break}return e.prev=1,e.next=4,this.imageCapture.takePhoto({fillLightMode:this.flashModes.length>1?this.flashMode:void 0});case 4:return t=e.sent,e.next=7,this.flashScreen();case 7:this.promptAccept(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Unable to take photo!",e.t0);case 13:this.stopStream();case 14:case"end":return e.stop()}}),e,this,[[1,10]])}))),function(){return c.apply(this,arguments)})},{key:"promptAccept",value:(r=Object(i.a)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.photo=t,e.next=3,this.getOrientation(t);case 3:if(r=e.sent,console.debug("Got orientation",r),this.photoOrientation=r,!r){e.next=18;break}e.t0=r,e.next=1===e.t0||2===e.t0?10:3===e.t0||4===e.t0?12:5===e.t0||6===e.t0?14:7===e.t0||8===e.t0?16:18;break;case 10:return this.rotation=0,e.abrupt("break",18);case 12:return this.rotation=180,e.abrupt("break",18);case 14:return this.rotation=90,e.abrupt("break",18);case 16:return this.rotation=270,e.abrupt("break",18);case 18:this.photoSrc=URL.createObjectURL(t);case 19:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"getOrientation",value:function(e){return new Promise((function(t){var r=new FileReader;r.onload=function(e){var r=new DataView(e.target.result);if(65496!==r.getUint16(0,!1))return t(-2);for(var i=r.byteLength,n=2;n<i;){var a=r.getUint16(n,!1);if(n+=2,65505===a){if(1165519206!==r.getUint32(n+=2,!1))return t(-1);var o=18761===r.getUint16(n+=6,!1);n+=r.getUint32(n+4,o);var s=r.getUint16(n,o);n+=2;for(var c=0;c<s;c++)if(274===r.getUint16(n+12*c,o))return t(r.getUint16(n+12*c+8,o))}else{if(65280!=(65280&a))break;n+=r.getUint16(n,!1)}}return t(-1)},r.readAsArrayBuffer(e.slice(0,65536))}))}},{key:"rotate",value:function(){this.stopStream();var e=this.stream&&this.stream.getTracks()[0];if(e){var t=e.getConstraints().facingMode;if(!t){var r=e.getCapabilities();r.facingMode&&(t=r.facingMode[0])}this.initCamera("environment"===t?{video:{facingMode:"user"}}:{video:{facingMode:"environment"}})}}},{key:"setFlashMode",value:function(e){console.debug("New flash mode: ",e),this.flashMode=e}},{key:"cycleFlash",value:function(){this.flashModes.length>0&&(this.flashIndex=(this.flashIndex+1)%this.flashModes.length,this.setFlashMode(this.flashModes[this.flashIndex]))}},{key:"flashScreen",value:(t=Object(i.a)(s().mark((function e(){var t=this;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){t.showShutterOverlay=!0,setTimeout((function(){t.showShutterOverlay=!1,e()}),100)})));case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"iconExit",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconPhotos",value:function(){return Object(o.g)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},Object(o.g)("path",{d:"M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z"}),Object(o.g)("path",{d:"M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z"}))}},{key:"iconConfirm",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconReverseCamera",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"iconRetake",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconFlashOff",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"iconFlashOn",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E"}},{key:"iconFlashAuto",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"render",value:function(){var e=this;return Object(o.g)("div",{class:"camera-wrapper"},Object(o.g)("div",{class:"camera-header"},Object(o.g)("section",{class:"items"},Object(o.g)("div",{class:"item close",onClick:function(t){return e.handleClose(t)}},Object(o.g)("img",{src:this.iconExit()})),Object(o.g)("div",{class:"item flash",onClick:function(t){return e.handleFlashClick(t)}},this.flashModes.length>0&&Object(o.g)("div",null,"off"==this.flashMode?Object(o.g)("img",{src:this.iconFlashOff()}):"","auto"==this.flashMode?Object(o.g)("img",{src:this.iconFlashAuto()}):"","flash"==this.flashMode?Object(o.g)("img",{src:this.iconFlashOn()}):"")))),(!1===this.hasCamera||!!this.deviceError)&&Object(o.g)("div",{class:"no-device"},Object(o.g)("h2",null,this.noDevicesText),Object(o.g)("label",{htmlFor:"_pwa-elements-camera-input"},this.noDevicesButtonText),Object(o.g)("input",{type:"file",id:"_pwa-elements-camera-input",onChange:this.handleFileInputChange,accept:"image/*",class:"select-file-button"})),this.photoSrc?Object(o.g)("div",{class:"accept"},Object(o.g)("div",{class:"accept-image",style:Object.assign({backgroundImage:"url(".concat(this.photoSrc,")")},{})})):Object(o.g)("div",{class:"camera-video"},this.showShutterOverlay&&Object(o.g)("div",{class:"shutter-overlay"}),this.hasImageCapture()?Object(o.g)("video",{ref:function(t){return e.videoElement=t},onLoadedMetaData:this.handleVideoMetadata,autoplay:!0,playsinline:!0}):Object(o.g)("canvas",{ref:function(t){return e.canvasElement=t},width:"100%",height:"100%"}),Object(o.g)("canvas",{class:"offscreen-image-render",ref:function(t){return e.offscreenCanvas=t},width:"100%",height:"100%"})),this.hasCamera&&Object(o.g)("div",{class:"camera-footer"},this.photo?Object(o.g)("section",{class:"items"},Object(o.g)("div",{class:"item accept-cancel",onClick:function(t){return e.handleCancelPhoto(t)}},Object(o.g)("img",{src:this.iconRetake()})),Object(o.g)("div",{class:"item accept-use",onClick:function(t){return e.handleAcceptPhoto(t)}},Object(o.g)("img",{src:this.iconConfirm()}))):[Object(o.g)("div",{class:"pick-image",onClick:this.handlePickFile},Object(o.g)("label",{htmlFor:"_pwa-elements-file-pick"},this.iconPhotos()),Object(o.g)("input",{type:"file",id:"_pwa-elements-file-pick",onChange:this.handleFileInputChange,accept:"image/*",class:"pick-image-button"})),Object(o.g)("div",{class:"shutter",onClick:this.handleShutterClick},Object(o.g)("div",{class:"shutter-button"})),Object(o.g)("div",{class:"rotate",onClick:this.handleRotateClick},Object(o.g)("img",{src:this.iconReverseCamera()}))]))}},{key:"el",get:function(){return Object(o.f)(this)}}],[{key:"assetsDirs",get:function(){return["icons"]}},{key:"style",get:function(){return":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,\u201cSegoe UI\u201d,\u201cRoboto\u201d,\u201cDroid Sans\u201d,\u201cHelvetica Neue\u201d,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}"}}]),e}()}}]);