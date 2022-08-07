(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js ***!
  \************************************************************************************/
/*! exports provided: AngularFireMessaging, AngularFireMessagingModule, SERVICE_WORKER, VAPID_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireMessaging", function() { return AngularFireMessaging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireMessagingModule", function() { return AngularFireMessagingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_WORKER", function() { return SERVICE_WORKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAPID_KEY", function() { return VAPID_KEY; });
/* harmony import */ var _home_lucas_Apps_f8a_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_lucas_Apps_f8a_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var proxyPolyfillCompat = {
  deleteToken: null,
  getToken: null,
  onMessage: null,
  onBackgroundMessage: null,
  onTokenRefresh: null,
  requestPermission: null,
  setBackgroundMessageHandler: null,
  useServiceWorker: null,
  usePublicVapidKey: null
};
var VAPID_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('angularfire2.messaging.vapid-key');
var SERVICE_WORKER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('angularfire2.messaging.service-worker-registeration'); // SEMVER(7): drop

var firebaseLTv8 = parseInt(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].SDK_VERSION, 10) < 8;

var AngularFireMessaging = /*#__PURE__*/Object(_home_lucas_Apps_f8a_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AngularFireMessaging(options, nameOrConfig, // tslint:disable-next-line:ban-types
platformId, zone, vapidKey, _serviceWorker) {
  var _this = this;

  Object(_home_lucas_Apps_f8a_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularFireMessaging);

  var schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_7__["ɵAngularFireSchedulers"](zone);
  var serviceWorker = _serviceWorker;
  var messaging = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
    return Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["isPlatformServer"])(platformId) ? rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"] : __webpack_require__.e(/*! import() | firebase-messaging */ "firebase-messaging").then(__webpack_require__.bind(null, /*! firebase/messaging */ "./node_modules/firebase/messaging/dist/index.esm.js"));
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
    return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_7__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (app) {
    return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_7__["ɵfetchInstance"])("".concat(app.name, ".messaging"), 'AngularFireMessaging', app, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var messaging;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messaging = app.messaging();

                if (!firebaseLTv8) {
                  _context.next = 9;
                  break;
                }

                if (vapidKey) {
                  messaging.usePublicVapidKey(vapidKey);
                }

                if (!serviceWorker) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = messaging;
                _context.next = 7;
                return serviceWorker;

              case 7:
                _context.t1 = _context.sent;

                _context.t0.useServiceWorker.call(_context.t0, _context.t1);

              case 9:
                return _context.abrupt("return", messaging);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }, [vapidKey, serviceWorker]);
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({
    bufferSize: 1,
    refCount: false
  }));
  this.requestPermission = messaging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), // tslint:disable-next-line
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (messaging) {
    return firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].messaging.isSupported() ? messaging.requestPermission() : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Not supported.');
  }));
  this.getToken = messaging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (messaging) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var serviceWorkerRegistration;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].messaging.isSupported() && Notification.permission === 'granted')) {
                _context2.next = 20;
                break;
              }

              if (!firebaseLTv8) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return messaging.getToken();

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 7:
              if (!serviceWorker) {
                _context2.next = 13;
                break;
              }

              _context2.next = 10;
              return serviceWorker;

            case 10:
              _context2.t0 = _context2.sent;
              _context2.next = 14;
              break;

            case 13:
              _context2.t0 = null;

            case 14:
              serviceWorkerRegistration = _context2.t0;
              _context2.next = 17;
              return messaging.getToken({
                vapidKey: vapidKey,
                serviceWorkerRegistration: serviceWorkerRegistration
              });

            case 17:
              return _context2.abrupt("return", _context2.sent);

            case 18:
              _context2.next = 21;
              break;

            case 20:
              return _context2.abrupt("return", null);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  }));
  var notificationPermission$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (emitter) {
    navigator.permissions.query({
      name: 'notifications'
    }).then(function (notificationPerm) {
      notificationPerm.onchange = function () {
        return emitter.next();
      };
    });
  });
  var tokenChange$ = messaging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMapTo"])(notificationPermission$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMapTo"])(this.getToken));
  this.tokenChanges = messaging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
    return firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].messaging.isSupported() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(_this.getToken, tokenChange$) : rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
  }));
  this.messages = messaging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (messaging) {
    return firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].messaging.isSupported() ? new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (emitter) {
      return messaging.onMessage(function (next) {
        return emitter.next(next);
      }, function (err) {
        return emitter.error(err);
      }, function () {
        return emitter.complete();
      });
    }) : rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
  }));
  this.requestToken = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
    return _this.requestPermission;
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function () {
    return _this.tokenChanges;
  })); // SEMVER(7): drop token

  this.deleteToken = function (token) {
    return messaging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["observeOn"])(schedulers.insideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (messaging) {
      return messaging.deleteToken(token || undefined);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["defaultIfEmpty"])(false));
  };

  return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_7__["ɵlazySDKProxy"])(this, messaging, zone);
});

AngularFireMessaging.ɵfac = function AngularFireMessaging_Factory(t) {
  return new (t || AngularFireMessaging)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](VAPID_KEY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](SERVICE_WORKER, 8));
};
/** @nocollapse */


AngularFireMessaging.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  factory: function AngularFireMessaging_Factory() {
    return new AngularFireMessaging(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](VAPID_KEY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](SERVICE_WORKER, 8));
  },
  token: AngularFireMessaging,
  providedIn: "any"
});
/** @nocollapse */

AngularFireMessaging.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_OPTIONS"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_APP_NAME"]]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [VAPID_KEY]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [SERVICE_WORKER]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularFireMessaging, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_OPTIONS"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_fire__WEBPACK_IMPORTED_MODULE_7__["FIREBASE_APP_NAME"]]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [VAPID_KEY]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [SERVICE_WORKER]
      }]
    }];
  }, null);
})();

Object(_angular_fire__WEBPACK_IMPORTED_MODULE_7__["ɵapplyMixins"])(AngularFireMessaging, [proxyPolyfillCompat]);

var AngularFireMessagingModule = /*#__PURE__*/Object(_home_lucas_Apps_f8a_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AngularFireMessagingModule() {
  Object(_home_lucas_Apps_f8a_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularFireMessagingModule);
});

AngularFireMessagingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AngularFireMessagingModule
});
AngularFireMessagingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function AngularFireMessagingModule_Factory(t) {
    return new (t || AngularFireMessagingModule)();
  },
  providers: [AngularFireMessaging]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularFireMessagingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      providers: [AngularFireMessaging]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <app-offline></app-offline>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title (click)=\"actionShetCategoryService.showActionCategory()\"> \n      {{auth.user && auth.user.category ? auth.user.category.name : 'Seleccionar categoría'}} \n      <ion-icon name=\"chevron-down-outline\"></ion-icon>\n    </ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n      \n      <ion-button routerLink=\"/notifications\" routerDirection=\"forward\"  >\n        <ion-icon name=\"notifications-outline\"></ion-icon>      \n        <ion-badge id=\"notifications-badge\" *ngIf=\"notificationsCount > 0\">{{notificationsCount}}</ion-badge>\n      </ion-button> \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n  <ion-header>\n    <ion-toolbar >\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <ion-list>\n      <ion-item routerLink=\"/my-profile\" routerDirection=\"forward\" >\n        <app-menu-user style=\"width: 100%;\"></app-menu-user>\n      </ion-item>\n      <!-- <ion-item>Mis Equipos</ion-item>\n      <ion-item>Mis Jugadores</ion-item>\n      <ion-item>Mis Partidos</ion-item> -->\n\n      <ion-item lines=\"full\" *ngIf=\"false\">\n        <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n        <ion-label>\n          Toggle Dark Theme\n        </ion-label>\n        <ion-toggle id=\"themeToggle\" slot=\"end\"></ion-toggle>\n      </ion-item>\n\n\n      <ion-item routerLink=\"/admin_home\" routerDirection=\"forward\" *ngIf=\"auth.isAdmin()\"  >Administrar APP</ion-item>\n      <ion-item routerLink=\"/my-profile\" routerDirection=\"forward\" >Mi perfil</ion-item>\n      <ion-item routerLink=\"/list-fields\" routerDirection=\"forward\" >Canchas</ion-item>\n      <ion-item routerLink=\"/payment\" routerDirection=\"forward\" *ngIf=\"paymentTeamService.isActive()\" >Mis pagos</ion-item>\n      <ion-item routerLink=\"/contact\" routerDirection=\"forward\" >Contacto</ion-item>\n      <ion-item (click)=\"logout()\" style=\"cursor: pointer;\">\n        <ion-label>Cerrar Sesión</ion-label>\n      </ion-item>\n      <div class=\"ion-text-center ion-padding bg-l2\">\n        <ion-text >Versión: 1.14 </ion-text>\n      </div>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n\n <ion-tabs slot=\"top\" color=\"primary\">\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"results\">\n        <ion-icon name=\"clipboard-outline\"></ion-icon>\n        <ion-label>Resultado</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"games\">\n        <ion-icon name=\"easel-outline\"></ion-icon>\n        <ion-label>Partidos</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"teams\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n        <ion-label>Equipos</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"players\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        <ion-label>Jugadores</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"publications\">\n        <ion-icon name=\"happy-outline\"></ion-icon>        \n        <ion-label>3° Tiempo</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  \n  </ion-tabs>\n\n\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        //canActivate : [AuthGuard],
        children: [
            {
                path: 'teams',
                loadChildren: function () { return Promise.all(/*! import() | teams-teams-module */[__webpack_require__.e("default~pages-payment-team-payment-team-module~teams-teams-module"), __webpack_require__.e("teams-teams-module")]).then(__webpack_require__.bind(null, /*! ./teams/teams.module */ "./src/app/pages/home/teams/teams.module.ts")).then(function (m) { return m.TeamsPageModule; }); }
            },
            {
                path: 'results',
                loadChildren: function () { return Promise.all(/*! import() | results-results-module */[__webpack_require__.e("common"), __webpack_require__.e("results-results-module")]).then(__webpack_require__.bind(null, /*! ./results/results.module */ "./src/app/pages/home/results/results.module.ts")).then(function (m) { return m.ResultsPageModule; }); }
            },
            {
                path: 'games',
                loadChildren: function () { return Promise.all(/*! import() | games-games-module */[__webpack_require__.e("default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035"), __webpack_require__.e("default~games-games-module~pages-game-create-game-admin-create-game-admin-module"), __webpack_require__.e("common"), __webpack_require__.e("games-games-module")]).then(__webpack_require__.bind(null, /*! ./games/games.module */ "./src/app/pages/home/games/games.module.ts")).then(function (m) { return m.GamesPageModule; }); }
            },
            {
                path: 'players',
                loadChildren: function () { return __webpack_require__.e(/*! import() | players-players-module */ "players-players-module").then(__webpack_require__.bind(null, /*! ./players/players.module */ "./src/app/pages/home/players/players.module.ts")).then(function (m) { return m.PlayersPageModule; }); }
            },
            {
                path: 'publications',
                loadChildren: function () { return __webpack_require__.e(/*! import() | publications-publications-module */ "publications-publications-module").then(__webpack_require__.bind(null, /*! ./publications/publications.module */ "./src/app/pages/home/publications/publications.module.ts")).then(function (m) { return m.PublicationsPageModule; }); }
            },
            {
                path: '',
                redirectTo: '/home/results',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'publications',
        loadChildren: function () { return __webpack_require__.e(/*! import() | publications-publications-module */ "publications-publications-module").then(__webpack_require__.bind(null, /*! ./publications/publications.module */ "./src/app/pages/home/publications/publications.module.ts")).then(function (m) { return m.PublicationsPageModule; }); }
    },
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#notification-button {\n  position: relative;\n  width: 42px;\n  top: 1px;\n  right: 1px;\n  overflow: visible !important;\n}\n\n#notifications-badge {\n  background-color: red;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  border-radius: 100%;\n}\n\nion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZmljYXRpb24tYnV0dG9uIHsgICAgICAgICAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgdG9wOjFweDtcbiAgICByaWdodDogMXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcbn1cblxuXG4jbm90aWZpY2F0aW9ucy1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zcHg7XG4gICAgcmlnaHQ6IC0zcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuaW9uLWljb257XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/payment-team.service */ "./src/app/services/payment-team.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_services_messaging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/messaging.service */ "./src/app/services/messaging.service.ts");
/* harmony import */ var src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sharer.service */ "./src/app/services/sharer.service.ts");
/* harmony import */ var src_app_services_action_sheet_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/action-sheet-category.service */ "./src/app/services/action-sheet-category.service.ts");












var HomePage = /** @class */ (function () {
    function HomePage(platform, splashScreen, statusBar, auth, alertController, _location, paymentTeamService, chatService, messagingService, toastCtrl, shareService, actionShetCategoryService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.auth = auth;
        this.alertController = alertController;
        this._location = _location;
        this.paymentTeamService = paymentTeamService;
        this.chatService = chatService;
        this.messagingService = messagingService;
        this.toastCtrl = toastCtrl;
        this.shareService = shareService;
        this.actionShetCategoryService = actionShetCategoryService;
        this.currentPageTitle = 'Dashboard';
        this.appPages = [
            {
                title: 'Dashboard',
                url: '',
                icon: 'easel'
            },
            {
                title: 'Timeline',
                url: '/timeline',
                icon: 'film'
            },
            {
                title: 'Settings',
                url: '/settings',
                icon: 'settings'
            }
        ];
        this.initializeApp();
        this.listenForMessages();
        this.requestPermission();
    }
    HomePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.updateUserApi()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.loadTheme();
            //this.actionShetCategoryService.init();
        });
        this.chatService.init();
        this.shareService.addThisInit();
        /*
        setInterval(()=>{
          if(this.auth.user)
            this.auth.userModel.api_functionModel(this.auth.user.id,'changesNotifications').subscribe(
              response => {
                if(response['status'] == 'success'){
                  let count  = response['data']['counts_not'];
    
                  if(count > this.auth.user.counts_not ){
                    this.auth.user.counts_not = count;
                    this.auth.user.teams = response['data']['teams']
                    this.auth.user.player = response['data']['player']
    
                    this.auth.saveUser();
                  }
                }
              }
            )
        },50000)
        */
    };
    HomePage.prototype.loadTheme = function () {
        var _this = this;
        return;
        this.toggle = document.querySelector('#themeToggle');
        // Listen for the toggle check/uncheck to toggle the dark class on the <body>
        this.toggle.addEventListener('ionChange', function (ev) {
            document.body.classList.toggle('dark', ev.detail.checked);
        });
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        // Listen for changes to the prefers-color-scheme media query
        this.prefersDark.addListener(function (e) { return _this.checkToggle(e.matches); });
    };
    // Called when the app loads
    HomePage.prototype.loadApp = function () {
        this.checkToggle(this.prefersDark.matches);
    };
    // Called by the media query to check/uncheck the toggle
    HomePage.prototype.checkToggle = function (shouldCheck) {
        this.toggle.checked = shouldCheck;
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
    };
    Object.defineProperty(HomePage.prototype, "notificationsCount", {
        get: function () {
            return this.auth.user && this.auth.user.counts_not ? this.auth.user.counts_not : 0;
        },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.showExitConfirm = function () {
        this.alertController.create({
            header: 'App termination',
            message: 'Do you want to close the app?',
            backdropDismiss: false,
            buttons: [{
                    text: 'Stay',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Exit',
                    handler: function () {
                        navigator['app'].exitApp();
                    }
                }]
        })
            .then(function (alert) {
            alert.present();
        });
    };
    HomePage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave');
        this.chatService.hide();
    };
    HomePage.prototype.listenForMessages = function () {
        var _this = this;
        this.messagingService.getMessages().subscribe(function (msg) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('msj firebase', msg);
                        return [4 /*yield*/, this.alertController.create({
                                header: msg.notification.title,
                                subHeader: msg.notification.body,
                                message: msg.data.info,
                                buttons: ['OK'],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    HomePage.prototype.requestPermission = function () {
        var _this = this;
        this.messagingService.requestPermission().subscribe(function (token) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.auth.setTokenMessaging(token);
                console.log('token', token);
                return [2 /*return*/];
            });
        }); }, function (err) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.error('error token firebase', err);
                return [2 /*return*/];
            });
        }); });
    };
    HomePage.prototype.deleteToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.messagingService.deleteToken();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Token removed',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_7__["PaymentTeamService"] },
        { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"] },
        { type: src_app_services_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_10__["SharerService"] },
        { type: src_app_services_action_sheet_category_service__WEBPACK_IMPORTED_MODULE_11__["ActionSheetCategoryService"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/action-sheet-category.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/action-sheet-category.service.ts ***!
  \***********************************************************/
/*! exports provided: ActionSheetCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetCategoryService", function() { return ActionSheetCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-user.service */ "./src/app/services/auth-user.service.ts");






var ActionSheetCategoryService = /** @class */ (function () {
    function ActionSheetCategoryService(actionSheetController, requestService, authUser) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.requestService = requestService;
        this.authUser = authUser;
        this.categories = null;
        this.actionSheet = null;
        this.modelCategory = new _api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Category', requestService);
        this.modelUser = new _api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('User', requestService);
        this.authUser.userOb.subscribe(function (hasUser) {
            if (hasUser)
                _this.init();
        });
    }
    ActionSheetCategoryService.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('init categories');
                        if (!(this.categories == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modelCategory.api_function('all').subscribe(function (response) {
                                if (response['status'] == 'success') {
                                    _this.categories = response['data'];
                                    //this.mustSelect();
                                }
                            }, function (error) {
                                alert(error.response.message);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ActionSheetCategoryService.prototype.mustSelect = function () {
        if (!this.authUser.hasSelectCategory()) {
            this.showActionCategory();
        }
        else {
            this.category = this.authUser.user.category;
        }
    };
    ActionSheetCategoryService.prototype.showActionCategory = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons, _a, _b, role, data;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        buttons = [];
                        if (!!Array.isArray(this.categories)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                    case 2:
                        this.categories.map(function (category) {
                            buttons.push({
                                text: category.name,
                                role: 'destructive',
                                id: category.id,
                                data: {
                                    type: ''
                                },
                                handler: function () {
                                    _this.selectCategory(category);
                                }
                            });
                        });
                        if (this.actionSheet != null) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Categorías',
                                cssClass: 'my-custom-class',
                                buttons: buttons
                            })];
                    case 3:
                        _a.actionSheet = _c.sent();
                        return [4 /*yield*/, this.actionSheet.present()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.actionSheet.onDidDismiss()];
                    case 5:
                        _b = _c.sent(), role = _b.role, data = _b.data;
                        console.log(data);
                        this.actionSheet = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionSheetCategoryService.prototype.selectCategory = function (category) {
        var _this = this;
        if (this.category && this.category.name == category.name) {
            return;
        }
        this.modelUser.api_functionModel(this.authUser.user.id, 'setCategory', { 'id': category.id }).subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.category = category;
                        return [4 /*yield*/, this.authUser.setCategory(this.category)];
                    case 1:
                        _a.sent();
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        }); }, function (error) {
            alert('error al seleccionar categoría');
        });
    };
    ActionSheetCategoryService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"] }
    ]; };
    ActionSheetCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ActionSheetCategoryService);
    return ActionSheetCategoryService;
}());



/***/ }),

/***/ "./src/app/services/messaging.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




var MessagingService = /** @class */ (function () {
    function MessagingService(afMessaging) {
        this.afMessaging = afMessaging;
        this.token = null;
    }
    MessagingService.prototype.requestPermission = function () {
        return this.afMessaging.requestToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
            console.log('Store token to server: ', token);
        }));
    };
    MessagingService.prototype.getMessages = function () {
        return this.afMessaging.messages;
    };
    MessagingService.prototype.deleteToken = function () {
        if (this.token) {
            this.afMessaging.deleteToken(this.token);
            this.token = null;
        }
    };
    MessagingService.ctorParameters = function () { return [
        { type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessaging"] }
    ]; };
    MessagingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MessagingService);
    return MessagingService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map