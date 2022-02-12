(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive4927a4c1Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4392cd63Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/form-entry/form-entry.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/form-entry/form-entry.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEntrysFormEntryFormEntryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Ingreso</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"modelEntry.errorsForm.clear()\" >\n       \n       \n      \n        <ion-item >\n          <ion-label position=\"floating\" >Monto</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"entry.amount\" name=\"amount\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelEntry.errorsForm.get('amount') }}</div>\n\n        <br>\n\n        <ion-item >\n          <ion-label position=\"floating\" >Descripción</ion-label>\n          <ion-textarea type=\"text\" [(ngModel)]=\"entry.description\" name=\"description\" ></ion-textarea>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelEntry.errorsForm.get('description') }}</div>\n\n        <br>\n\n        <ion-item>\n          <ion-label position=\"floating\" >Fecha</ion-label>\n          <ion-datetime [(ngModel)]=\"entry.date\" name=\"date\"    displayFormat=\"DD-MM-YYYY\" ></ion-datetime>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelEntry.errorsForm.get('date') }}</div>\n        \n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/form-expense/form-expense.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/form-expense/form-expense.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesExpensesFormExpenseFormExpensePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Gasto</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"modelExpense.errorsForm.clear()\" >\n       \n       \n      \n        <ion-item >\n          <ion-label position=\"floating\" >Monto</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"expense.amount\" name=\"amount\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelExpense.errorsForm.get('amount') }}</div>\n\n        <br>\n\n        <ion-item >\n          <ion-label position=\"floating\" >Descripción</ion-label>\n          <ion-textarea type=\"text\" [(ngModel)]=\"expense.description\" name=\"description\" ></ion-textarea>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelExpense.errorsForm.get('description') }}</div>\n\n        <br>\n\n        <ion-item>\n          <ion-label position=\"floating\" >Fecha</ion-label>\n          <ion-datetime [(ngModel)]=\"expense.date\" name=\"date\"    displayFormat=\"DD-MM-YYYY\" ></ion-datetime>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelExpense.errorsForm.get('date') }}</div>\n        \n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/add-result/add-result.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/add-result/add-result.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameAddResultAddResultPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Añadir resultado</ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"confirm()\"  (keyup)=\"serviceGame.errorsForm.clear()\" >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"10\">{{game.team_l.name}}</ion-col>\n            <ion-col size=\"2\">\n              <ion-select [(ngModel)]=\"game.l_goals\" name=\"l_goals\" >\n                <ion-select-option [value]=\"e\" *ngFor=\"let e of numGoals\">{{ e }}</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col size=\"10\">{{game.team_v.name}}</ion-col>\n            <ion-col size=\"2\">\n              <ion-select [(ngModel)]=\"game.v_goals\" name=\"v_goals\" >\n                <ion-select-option [value]=\"e\" *ngFor=\"let e of numGoals\">{{ e }}</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <br>\n        <ion-list>\n          <ion-radio-group [(ngModel)]=\"status\" name=\"status\" (ionChange)=log($event)>\n            <ion-list-header>\n              Estado del partido\n            </ion-list-header>\n        \n            <ion-item>\n              <ion-label>Finalizado</ion-label>\n              <ion-radio value=\"Jugado\"></ion-radio>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label>Suspendido</ion-label>\n              <ion-radio value=\"Suspendido\"></ion-radio>\n            </ion-item>\n        \n          </ion-radio-group>\n        </ion-list>\n\n        <br>\n        <ion-item *ngIf=\"status == 'Suspendido'\">\n          <ion-label position=\"floating\" >Motivo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"game.description\" name=\"description\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('description') }}</div>\n\n        <br>\n\n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPositionPositionFormPositionFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Posición</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePosition.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"posicion.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePosition.errorsForm.get('name') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTypeEventTypeEventFormTypeEventFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tipo de evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceTypeEvent.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"typeEvent.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTypeEvent.errorsForm.get('name') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Path icono local</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"typeEvent.icon\" name=\"icon\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTypeEvent.errorsForm.get('icon') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserUserFormUserFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{user.id ? 'Modificar' : 'Nuevo Usuario'}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n\n  <ion-buttons slot=\"secondary\">\n    <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\n    </ion-button>  \n  </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceUser.errorsForm.clear()\" >\n\n \n        <div>\n          <img id=\"img_user\" [src]=\"photoService.photo.getPath()\" >\n          <div class=\"ion-text-center\">\n            <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('photo') }}</div>\n            <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoService.addOneNewToGallery()\">{{photoService.isLoadPthoto() ? 'Modificar Foto' :'Seleccionar Foto' }}</ion-button>\n          </div>\n        </div>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Nombre</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.first_name\" name=\"first_name\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('first_name') }}</div>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Apellido</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.last_name\" name=\"last_name\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('last_name') }}</div>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Email</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('email') }}</div>\n    \n        <ion-item *ngIf=\"!id\">\n          <ion-label position=\"floating\" >Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('password') }}</div>\n    \n        <ion-item *ngIf=\"!id\">\n          <ion-label position=\"floating\" >Confirmar Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password_confirmation\" name=\"password_confirmation\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('password_confirmation') }}</div>\n       \n        <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"saving\" class=\"ion-margin-top\">\n          <ion-spinner name=\"lines\" *ngIf=\"saving\" ></ion-spinner>\n          Guardar\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUtilListRedirectListRedirectPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n      \n    <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n      <ion-label>Sin Opciones</ion-label>\n    </ion-list-header>\n \n    <ion-item *ngFor=\"let item of list\"  (click)=\"goTo(item)\">\n      <span>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </span>\n      <ion-label >\n        <h3>{{item.name}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/explore-container/explore-container.component.ts ***!
      \******************************************************************/

    /*! exports provided: ExploreContainerComponent */

    /***/
    function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
        return ExploreContainerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      ExploreContainerComponent.ctorParameters = function () {
        return [];
      };

      ExploreContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore-container.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore-container.component.scss */
        "./src/app/explore-container/explore-container.component.scss"))["default"]]
      })], ExploreContainerComponent);
      /***/
    },

    /***/
    "./src/app/explore-container/explore-container.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/explore-container/explore-container.module.ts ***!
      \***************************************************************/

    /*! exports provided: ExploreContainerComponentModule */

    /***/
    function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
        return ExploreContainerComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-container.component */
      "./src/app/explore-container/explore-container.component.ts");

      var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
      })], ExploreContainerComponentModule);
      /***/
    },

    /***/
    "./src/app/pages/entrys/form-entry/form-entry.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/pages/entrys/form-entry/form-entry.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEntrysFormEntryFormEntryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJ5cy9mb3JtLWVudHJ5L2Zvcm0tZW50cnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/entrys/form-entry/form-entry.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/entrys/form-entry/form-entry.page.ts ***!
      \************************************************************/

    /*! exports provided: FormEntryPage */

    /***/
    function srcAppPagesEntrysFormEntryFormEntryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormEntryPage", function () {
        return FormEntryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var FormEntryPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(FormEntryPage, _src_app_models_modal);

        var _super = _createSuper(FormEntryPage);

        function FormEntryPage(navParms, modalController, location, requestService, dialogService, authUser, util) {
          var _this;

          _classCallCheck(this, FormEntryPage);

          _this = _super.call(this, location, modalController);
          _this.navParms = navParms;
          _this.modalController = modalController;
          _this.requestService = requestService;
          _this.dialogService = dialogService;
          _this.authUser = authUser;
          _this.util = util;
          _this.team_id = navParms.get('team_id');
          _this.modelEntry = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Entry', requestService);
          return _this;
        }

        _createClass(FormEntryPage, [{
          key: "initObject",
          value: function initObject() {
            this.entry = {
              user_id: this.authUser.user.id,
              amount: 0,
              team_id: this.team_id,
              date: new Date().toISOString()
            };
            console.log('new entry', this.entry); //this.addUser();
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.dialogService.loadingProgres();

                    case 2:
                      console.log('submit');
                      this.modelEntry.api_create(this.entry).subscribe(function (respose) {
                        _this2.dialogService.dimissLoaging();

                        if (respose['status'] == 'success') {
                          _this2.dimiss(respose['Entry']);
                        }
                      }, function (error) {
                        _this2.dialogService.dimissLoaging();
                      }, function () {
                        _this2.dialogService.dimissLoaging();
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dimiss",
          value: function dimiss(entry) {
            this.modalController.dismiss({
              entry: entry
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }, {
          key: "log",
          value: function log(event) {
            console.log(event);
          }
        }]);

        return FormEntryPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]);

      FormEntryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }];
      };

      FormEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-entry.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/form-entry/form-entry.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form-entry.page.scss */
        "./src/app/pages/entrys/form-entry/form-entry.page.scss"))["default"]]
      })], FormEntryPage);
      /***/
    },

    /***/
    "./src/app/pages/expenses/form-expense/form-expense.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/pages/expenses/form-expense/form-expense.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesExpensesFormExpenseFormExpensePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2VzL2Zvcm0tZXhwZW5zZS9mb3JtLWV4cGVuc2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/expenses/form-expense/form-expense.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/expenses/form-expense/form-expense.page.ts ***!
      \******************************************************************/

    /*! exports provided: FormExpensePage */

    /***/
    function srcAppPagesExpensesFormExpenseFormExpensePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormExpensePage", function () {
        return FormExpensePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var FormExpensePage = /*#__PURE__*/function (_src_app_models_modal2) {
        _inherits(FormExpensePage, _src_app_models_modal2);

        var _super2 = _createSuper(FormExpensePage);

        function FormExpensePage(navParms, modalController, location, requestService, dialogService, authUser, util) {
          var _this3;

          _classCallCheck(this, FormExpensePage);

          _this3 = _super2.call(this, location, modalController);
          _this3.navParms = navParms;
          _this3.modalController = modalController;
          _this3.requestService = requestService;
          _this3.dialogService = dialogService;
          _this3.authUser = authUser;
          _this3.util = util;
          _this3.team_id = navParms.get('team_id');
          _this3.modelExpense = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Expense', requestService);
          return _this3;
        }

        _createClass(FormExpensePage, [{
          key: "initObject",
          value: function initObject() {
            this.expense = {
              user_id: this.authUser.user.id,
              amount: 0,
              team_id: this.team_id,
              date: new Date().toISOString()
            };
            console.log('new expense', this.expense); //this.addUser();
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.dialogService.loadingProgres();

                    case 2:
                      console.log('submit');
                      this.modelExpense.api_create(this.expense).subscribe(function (respose) {
                        _this4.dialogService.dimissLoaging();

                        if (respose['status'] == 'success') {
                          _this4.dimiss(respose['Expense']);
                        }
                      }, function (error) {
                        _this4.dialogService.dimissLoaging();
                      }, function () {
                        _this4.dialogService.dimissLoaging();
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "dimiss",
          value: function dimiss(expense) {
            this.modalController.dismiss({
              expense: expense
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }, {
          key: "log",
          value: function log(event) {
            console.log(event);
          }
        }]);

        return FormExpensePage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]);

      FormExpensePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }];
      };

      FormExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-expense',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-expense.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/form-expense/form-expense.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form-expense.page.scss */
        "./src/app/pages/expenses/form-expense/form-expense.page.scss"))["default"]]
      })], FormExpensePage);
      /***/
    },

    /***/
    "./src/app/pages/game/add-result/add-result.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/pages/game/add-result/add-result.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameAddResultAddResultPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvYWRkLXJlc3VsdC9hZGQtcmVzdWx0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/game/add-result/add-result.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/game/add-result/add-result.page.ts ***!
      \**********************************************************/

    /*! exports provided: AddResultPage */

    /***/
    function srcAppPagesGameAddResultAddResultPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddResultPage", function () {
        return AddResultPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");

      var AddResultPage = /*#__PURE__*/function (_src_app_models_modal3) {
        _inherits(AddResultPage, _src_app_models_modal3);

        var _super3 = _createSuper(AddResultPage);

        function AddResultPage(navParms, modalController, location, requestService, dialogService, chatService) {
          var _this5;

          _classCallCheck(this, AddResultPage);

          _this5 = _super3.call(this, location, modalController);
          _this5.navParms = navParms;
          _this5.modalController = modalController;
          _this5.requestService = requestService;
          _this5.dialogService = dialogService;
          _this5.chatService = chatService;
          _this5.numGoals = [];
          _this5.status = 'Jugado';
          _this5.serviceGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Game', requestService);
          _this5.game = Object.assign({}, navParms.get('game'));

          for (var i = 0; i <= 30; i++) {
            _this5.numGoals.push(i);
          }

          console.log(_this5.game);
          return _this5;
        }

        _createClass(AddResultPage, [{
          key: "initObject",
          value: function initObject() {}
        }, {
          key: "confirm",
          value: function confirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var msj;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      msj = "Ten presente que al ".concat(this.status, " este partido ya no podr\xE1s modificar los datos, solo el administrador general podr\xE1 hacerlo.");
                      this.dialogService.presentAlertConfirm('Confirmar', msj, function () {
                        _this6.submit();
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.game.status = this.status;
                      _context6.next = 3;
                      return this.dialogService.loadingProgres();

                    case 3:
                      console.log('submit');
                      this.serviceGame.api_update(this.game).subscribe(function (respose) {
                        _this7.dialogService.dimissLoaging();

                        if (respose['status'] == 'success') {
                          _this7.dimiss(_this7.game);
                        }
                      }, function (error) {
                        _this7.dialogService.dimissLoaging();
                      }, function () {
                        _this7.dialogService.dimissLoaging();
                      });

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dimiss",
          value: function dimiss(game) {
            this.modalController.dismiss({
              game: game
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }, {
          key: "log",
          value: function log(event) {
            console.log(event);
          }
        }]);

        return AddResultPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_3__["ModalForm"]);

      AddResultPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
        }];
      };

      AddResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-result',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-result.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/add-result/add-result.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-result.page.scss */
        "./src/app/pages/game/add-result/add-result.page.scss"))["default"]]
      })], AddResultPage);
      /***/
    },

    /***/
    "./src/app/pages/home/games/games.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/home/games/games.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeGamesGamesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".team-list {\n  display: block;\n}\n\n.vs {\n  width: 6%;\n}\n\n.game {\n  width: 100%;\n  /*background-image: url(/assets/images/img_fondo_part.png);\n  color: white;*/\n  padding: 10px;\n  /*background-color: white;*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  font-size: small;\n}\n\n.team {\n  display: flex;\n  align-items: center;\n  width: 47%;\n  flex-flow: column-reverse;\n}\n\n.team-name {\n  margin-left: 15px;\n  margin-right: 15px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n\n.contenedor {\n  margin: 10px auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n}\n\n.date {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9nYW1lcy9nYW1lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0E7Z0JBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBR0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQURKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZ2FtZXMvZ2FtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tbGlzdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi52c3tcbiAgICB3aWR0aDogNiU7XG59XG5cbi5nYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ltZ19mb25kb19wYXJ0LnBuZyk7XG4gICAgY29sb3I6IHdoaXRlOyovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cblxuICAgIGZvbnQtc2l6ZTogc21hbGw7XG5cbn1cblxuLnRlYW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcblxuXG59XG5cbi50ZWFtLW5hbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4OztcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4uaW1nLXRlYW17XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjsgXG4gICAgd2lkdGg6MzBweDsgXG4gICAgaGVpZ2h0OjMwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5kYXRle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/home/results/results.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/results/results.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeResultsResultsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".game {\n  color: #FFF;\n  width: 100%;\n  padding: 3px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n}\n\n.team {\n  position: relative;\n  background-image: url('img_fondo_res4.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  width: 100%;\n  padding-top: 15px;\n}\n\n.name-team {\n  display: inline-block;\n  width: 70%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.goals-team {\n  display: inline-block;\n  width: 30%;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 20px;\n}\n\n.comment {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0dBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWV7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMCAycHggd2hpdGUsIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50ZWFte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfZm9uZG9fcmVzNC5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ubmFtZS10ZWFte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4uZ29hbHMtdGVhbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbW1lbnR7XG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgOjEwcHg7XG4gICAgcmlnaHQgOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/position/position-form/position-form.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/position/position-form/position-form.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPositionPositionFormPositionFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc2l0aW9uL3Bvc2l0aW9uLWZvcm0vcG9zaXRpb24tZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/position/position-form/position-form.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/position/position-form/position-form.page.ts ***!
      \********************************************************************/

    /*! exports provided: PositionFormPage */

    /***/
    function srcAppPagesPositionPositionFormPositionFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionFormPage", function () {
        return PositionFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/photo.service */
      "./src/app/services/photo.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var PositionFormPage = /*#__PURE__*/function () {
        function PositionFormPage(request, dialogService, viewCtrl, photoService, navParams) {
          _classCallCheck(this, PositionFormPage);

          this.request = request;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.photoService = photoService;
          this.servicePosition = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Position', request);
          this.id = navParams.get('id');
        }

        _createClass(PositionFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initObject();
          }
        }, {
          key: "initObject",
          value: function initObject() {
            var _this8 = this;

            this.posicion = {
              name: ''
            };

            if (this.id) {
              this.servicePosition.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this8.posicion = data['Position'];
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this9 = this;

            if (this.posicion.id) {
              this.servicePosition.api_update(this.posicion).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this9.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this9.dismiss(data['Position']);
                }
              });
            } else {
              this.servicePosition.api_create(this.posicion).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this9.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this9.dismiss(data['Position']);
                }
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(posicion) {
            this.viewCtrl.dismiss({
              posicion: posicion
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }]);

        return PositionFormPage;
      }();

      PositionFormPage.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }];
      };

      PositionFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./position-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./position-form.page.scss */
        "./src/app/pages/position/position-form/position-form.page.scss"))["default"]]
      })], PositionFormPage);
      /***/
    },

    /***/
    "./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTypeEventTypeEventFormTypeEventFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R5cGVFdmVudC90eXBlLWV2ZW50LWZvcm0vdHlwZS1ldmVudC1mb3JtLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/typeEvent/type-event-form/type-event-form.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/typeEvent/type-event-form/type-event-form.page.ts ***!
      \*************************************************************************/

    /*! exports provided: TypeEventFormPage */

    /***/
    function srcAppPagesTypeEventTypeEventFormTypeEventFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeEventFormPage", function () {
        return TypeEventFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TypeEventFormPage = /*#__PURE__*/function () {
        function TypeEventFormPage(request, dialogService, viewCtrl, navParams) {
          _classCallCheck(this, TypeEventFormPage);

          this.request = request;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.serviceTypeEvent = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('TypeEvent', request);
          console.log('ver');
          this.id = navParams.get('id');
        }

        _createClass(TypeEventFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initObject();
          }
        }, {
          key: "initObject",
          value: function initObject() {
            var _this10 = this;

            this.typeEvent = {
              'name': '',
              'icon': ''
            };

            if (this.id) {
              this.serviceTypeEvent.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this10.typeEvent = data['TypeEvent'];
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this11 = this;

            if (this.typeEvent.id) {
              this.serviceTypeEvent.api_update(this.typeEvent).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this11.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this11.dismiss(data['TypeEvent']);
                }
              });
            } else {
              this.serviceTypeEvent.api_create(this.typeEvent).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this11.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this11.dismiss(data['TypeEvent']);
                }
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(typeEvent) {
            this.viewCtrl.dismiss({
              typeEvent: typeEvent
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }]);

        return TypeEventFormPage;
      }();

      TypeEventFormPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }];
      };

      TypeEventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./type-event-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./type-event-form.page.scss */
        "./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss"))["default"]]
      })], TypeEventFormPage);
      /***/
    },

    /***/
    "./src/app/pages/user/user-form/user-form.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/user/user-form/user-form.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserUserFormUserFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1mb3JtL3VzZXItZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/user/user-form/user-form.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/user/user-form/user-form.page.ts ***!
      \********************************************************/

    /*! exports provided: UserFormPage */

    /***/
    function srcAppPagesUserUserFormUserFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserFormPage", function () {
        return UserFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/modelImage */
      "./src/app/api/models/modelImage.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");

      var UserFormPage = /*#__PURE__*/function (_src_app_models_modal4) {
        _inherits(UserFormPage, _src_app_models_modal4);

        var _super4 = _createSuper(UserFormPage);

        function UserFormPage(request, dialogService, viewCtrl, navParams, platform, utilDialog, location, chatService) {
          var _this12;

          _classCallCheck(this, UserFormPage);

          _this12 = _super4.call(this, location, viewCtrl);
          _this12.request = request;
          _this12.dialogService = dialogService;
          _this12.viewCtrl = viewCtrl;
          _this12.platform = platform;
          _this12.utilDialog = utilDialog;
          _this12.chatService = chatService;
          _this12.saving = false;
          _this12.serviceUser = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('User', request);
          _this12.photoService = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);

          _this12.photoService.init('images/users/profile/', true, 'assets/images/profile.jpg');

          _this12.photoService.setElementImg('img_user', 700);

          _this12.id = navParams.get('id');
          return _this12;
        }

        _createClass(UserFormPage, [{
          key: "initObject",
          value: function initObject() {
            var _this13 = this;

            this.user = {
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              password_confirmation: '',
              role: 'user'
            };

            if (this.id) {
              this.serviceUser.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this13.user = data['User'];

                  _this13.photoService.setImage(_this13.user.photo);

                  console.log(_this13.photoService.photo.getPath());
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this14 = this;

            this.saving = true;

            if (this.photoService.isLoadPthoto()) {
              this.user.photo = this.photoService.getImageUpload();
            }

            if (this.user.id) {
              this.serviceUser.api_update(this.user).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this14.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this14.dismiss(data['User']);
                }

                _this14.saving = false;
              }, function (error) {
                _this14.saving = false;
              });
            } else {
              this.serviceUser.api_create(this.user).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this14.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this14.dismiss(data['User']);
                }

                _this14.saving = false;
              }, function (error) {
                _this14.saving = false;
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(user) {
            this.viewCtrl.dismiss({
              user: user
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }]);

        return UserFormPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__["ModalForm"]);

      UserFormPage.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]
        }];
      };

      UserFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-form.page.scss */
        "./src/app/pages/user/user-form/user-form.page.scss"))["default"]]
      })], UserFormPage);
      /***/
    },

    /***/
    "./src/app/pages/util/list-redirect/list-redirect.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/pages/util/list-redirect/list-redirect.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUtilListRedirectListRedirectPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3V0aWwvbGlzdC1yZWRpcmVjdC9saXN0LXJlZGlyZWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/util/list-redirect/list-redirect.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/util/list-redirect/list-redirect.page.ts ***!
      \****************************************************************/

    /*! exports provided: ListRedirectPage */

    /***/
    function srcAppPagesUtilListRedirectListRedirectPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListRedirectPage", function () {
        return ListRedirectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ListRedirectPage = /*#__PURE__*/function () {
        function ListRedirectPage(dialogService, viewCtrl, navParams, navCtrl) {
          _classCallCheck(this, ListRedirectPage);

          var _a, _b;

          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.navParams = navParams;
          this.navCtrl = navCtrl;
          this.list = (_a = navParams.get('list')) !== null && _a !== void 0 ? _a : [];
          this.title = (_b = navParams.get('title')) !== null && _b !== void 0 ? _b : 'Opciones';
        }

        _createClass(ListRedirectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dimiss",
          value: function dimiss() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "goTo",
          value: function goTo(item) {
            console.log('goTo');
            this.navCtrl.navigateForward(item.route);
            this.viewCtrl.dismiss();
          }
        }]);

        return ListRedirectPage;
      }();

      ListRedirectPage.ctorParameters = function () {
        return [{
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      ListRedirectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-redirect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list-redirect.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list-redirect.page.scss */
        "./src/app/pages/util/list-redirect/list-redirect.page.scss"))["default"]]
      })], ListRedirectPage);
      /***/
    },

    /***/
    "./src/app/services/lists-home.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/lists-home.service.ts ***!
      \************************************************/

    /*! exports provided: ListsHomeService */

    /***/
    function srcAppServicesListsHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListsHomeService", function () {
        return ListsHomeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _util_array_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util-array.service */
      "./src/app/services/util-array.service.ts");

      var ListsHomeService = /*#__PURE__*/function () {
        function ListsHomeService(utilArray) {
          _classCallCheck(this, ListsHomeService);

          this.utilArray = utilArray;
          this.results = [];
          this.games = [];
          this.players = [];
          this.teams = [];
          this.publications = [];
        }

        _createClass(ListsHomeService, [{
          key: "remove",
          value: function remove(nameList, id) {
            if (this[nameList]) {
              this.utilArray.listDelete(this[nameList], id);
            }
          }
        }, {
          key: "update",
          value: function update(nameList, item) {
            if (this[nameList]) {
              this.utilArray.listUpdate(this[nameList], item.id, item);
            }
          }
        }]);

        return ListsHomeService;
      }();

      ListsHomeService.ctorParameters = function () {
        return [{
          type: _util_array_service__WEBPACK_IMPORTED_MODULE_2__["UtilArrayService"]
        }];
      };

      ListsHomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ListsHomeService);
      /***/
    },

    /***/
    "./src/app/services/sharer.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/sharer.service.ts ***!
      \********************************************/

    /*! exports provided: SharerService */

    /***/
    function srcAppServicesSharerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharerService", function () {
        return SharerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");

      var SharerService = /*#__PURE__*/function () {
        function SharerService(requestService, dialogService, iab, util) {
          _classCallCheck(this, SharerService);

          this.requestService = requestService;
          this.dialogService = dialogService;
          this.iab = iab;
          this.util = util;
          this.addThisVisible = false;
          this.loadedAddThis = false;
          this.scriptLoaded = null;
          this.addthis_share = {
            url: "",
            title: "",
            description: "",
            media: ""
          };
          this.modelGame = new _api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requestService);
          if (!this.loadedAddThis) this.addThisInit();
        }

        _createClass(SharerService, [{
          key: "shareGameFacebook",
          value: function shareGameFacebook(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var browser;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      browser = this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url_base + '/shareResult/' + id, '', {
                        fullscreen: "yes"
                      }); //await this.dialogService.loadingProgres('Creando imagen...');

                      /*this.modelGame.api_functionModel(id,'createPreview',{},{responseType: 'blob'}).subscribe(
                        async response => {
                          console.log(response);
                          this.dialogService.dimissLoaging();
                          console.log('preview creada ...  esperando')
                          await this.util.delay(4000)
                          console.log('continua ...');
                          const browser = this.iab.create('http://192.168.1.15/f8a/pulic/shareResult/' + id );
                                     browser.show();
                                 }
                      ),
                      error => {
                        console.error(error);
                        this.dialogService.dimissLoaging();
                      }*/

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "addThisInit",
          value: function addThisInit() {
            var _this15 = this;

            try {
              this.addMeta();
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.setAttribute('async', 'async');
              script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6169932652121667";

              script.onload = function () {
                console.log('load AddThis');
                _this15.loadedAddThis = true;
                _this15.scriptLoaded = _this15;
                document.body.classList.add('share-disabled');
              };

              document.body.appendChild(script);
            } catch (e) {
              console.error(e);
            }
          }
        }, {
          key: "addMeta",
          value: function addMeta() {
            var link = document.createElement('meta');
            link.setAttribute('property', 'og:url');
            link.content = document.location;
            document.getElementsByTagName('head')[0].appendChild(link);
            var title = document.createElement('meta');
            title.setAttribute('property', 'og:title');
            title.content = 'Title lucas';
            document.getElementsByTagName('head')[0].appendChild(title);
            console.log('add meta');
          }
        }, {
          key: "toggleAddThis",
          value: function toggleAddThis() {
            console.log('toggle');
            this.addThisVisible = !this.addThisVisible;
            this.updateVisibiliti();
          }
        }, {
          key: "showAddThis",
          value: function showAddThis() {
            this.addThisVisible = true;
            this.updateVisibiliti();
          }
        }, {
          key: "hideAddThis",
          value: function hideAddThis() {
            this.addThisVisible = false;
            this.updateVisibiliti();
          }
        }, {
          key: "updateVisibiliti",
          value: function updateVisibiliti() {
            if (!this.loadedAddThis) return;
            var element = document.getElementsByClassName('addthis-smartlayers');

            if (element) {
              if (window['addthis']) {
                var addThis = window['addthis'];
                addThis.layers.refresh();
                addThis.toolbox();
              }

              if (this.addThisVisible) {
                document.body.classList.remove('share-disabled'); //element[1]['style'].visibility = 'visible';
              } else {
                document.body.classList.add('share-disabled'); //element[1]['style'].visibility = 'hidden';
              }
            }
          }
        }]);

        return SharerService;
      }();

      SharerService.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      SharerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharerService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map