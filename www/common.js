(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");




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

  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
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



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
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



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
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


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/form-entry/form-entry.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/form-entry/form-entry.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Ingreso</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"modelEntry.errorsForm.clear()\" >\n       \n       \n      \n        <ion-item >\n          <ion-label position=\"floating\" >Monto</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"entry.amount\" name=\"amount\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelEntry.errorsForm.get('amount') }}</div>\n\n        <br>\n\n        <ion-item >\n          <ion-label position=\"floating\" >Descripción</ion-label>\n          <ion-textarea type=\"text\" [(ngModel)]=\"entry.description\" name=\"description\" ></ion-textarea>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelEntry.errorsForm.get('description') }}</div>\n\n        <br>\n\n        <ion-item>\n          <ion-label position=\"floating\" >Fecha</ion-label>\n          <ion-datetime [(ngModel)]=\"entry.date\" name=\"date\"    displayFormat=\"DD-MM-YYYY\" ></ion-datetime>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelEntry.errorsForm.get('date') }}</div>\n        \n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/form-expense/form-expense.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/form-expense/form-expense.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Gasto</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"modelExpense.errorsForm.clear()\" >\n       \n       \n      \n        <ion-item >\n          <ion-label position=\"floating\" >Monto</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"expense.amount\" name=\"amount\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelExpense.errorsForm.get('amount') }}</div>\n\n        <br>\n\n        <ion-item >\n          <ion-label position=\"floating\" >Descripción</ion-label>\n          <ion-textarea type=\"text\" [(ngModel)]=\"expense.description\" name=\"description\" ></ion-textarea>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelExpense.errorsForm.get('description') }}</div>\n\n        <br>\n\n        <ion-item>\n          <ion-label position=\"floating\" >Fecha</ion-label>\n          <ion-datetime [(ngModel)]=\"expense.date\" name=\"date\"    displayFormat=\"DD-MM-YYYY\" ></ion-datetime>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelExpense.errorsForm.get('date') }}</div>\n        \n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/add-result/add-result.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/add-result/add-result.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Añadir resultado</ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"confirm()\"  (keyup)=\"serviceGame.errorsForm.clear()\" >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"10\">{{game.team_l.name}}</ion-col>\n            <ion-col size=\"2\">\n              <ion-select [(ngModel)]=\"game.l_goals\" name=\"l_goals\" >\n                <ion-select-option [value]=\"e\" *ngFor=\"let e of numGoals\">{{ e }}</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <br>\n          <ion-row>\n            <ion-col size=\"10\">{{game.team_v.name}}</ion-col>\n            <ion-col size=\"2\">\n              <ion-select [(ngModel)]=\"game.v_goals\" name=\"v_goals\" >\n                <ion-select-option [value]=\"e\" *ngFor=\"let e of numGoals\">{{ e }}</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <br>\n        <ion-list>\n          <ion-radio-group [(ngModel)]=\"status\" name=\"status\" (ionChange)=log($event)>\n            <ion-list-header>\n              Estado del partido\n            </ion-list-header>\n        \n            <ion-item>\n              <ion-label>Finalizado</ion-label>\n              <ion-radio value=\"Jugado\"></ion-radio>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label>Suspendido</ion-label>\n              <ion-radio value=\"Suspendido\"></ion-radio>\n            </ion-item>\n        \n          </ion-radio-group>\n        </ion-list>\n\n        <br>\n        <ion-item *ngIf=\"status == 'Suspendido'\">\n          <ion-label position=\"floating\" >Motivo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"game.description\" name=\"description\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('description') }}</div>\n\n        <br>\n\n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Posición</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePosition.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"posicion.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePosition.errorsForm.get('name') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Tipo de evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceTypeEvent.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"typeEvent.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTypeEvent.errorsForm.get('name') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Path icono local</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"typeEvent.icon\" name=\"icon\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTypeEvent.errorsForm.get('icon') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{user.id ? 'Modificar' : 'Nuevo Usuario'}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n\n  <ion-buttons slot=\"secondary\">\n    <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\n    </ion-button>  \n  </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceUser.errorsForm.clear()\" >\n\n \n        <div>\n          <img id=\"img_user\" [src]=\"photoService.photo.getPath()\" >\n          <div class=\"ion-text-center\">\n            <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('photo') }}</div>\n            <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoService.addOneNewToGallery()\">{{photoService.isLoadPthoto() ? 'Modificar Foto' :'Seleccionar Foto' }}</ion-button>\n          </div>\n        </div>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Nombre</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.first_name\" name=\"first_name\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('first_name') }}</div>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Apellido</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.last_name\" name=\"last_name\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('last_name') }}</div>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Email</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('email') }}</div>\n    \n        <ion-item *ngIf=\"!id\">\n          <ion-label position=\"floating\" >Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('password') }}</div>\n    \n        <ion-item *ngIf=\"!id\">\n          <ion-label position=\"floating\" >Confirmar Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password_confirmation\" name=\"password_confirmation\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('password_confirmation') }}</div>\n       \n        <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"saving\" class=\"ion-margin-top\">\n          <ion-spinner name=\"lines\" *ngIf=\"saving\" ></ion-spinner>\n          Guardar\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n      \n    <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n      <ion-label>Sin Opciones</ion-label>\n    </ion-list-header>\n \n    <ion-item *ngFor=\"let item of list\"  (click)=\"goTo(item)\">\n      <span>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </span>\n      <ion-label >\n        <h3>{{item.name}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ExploreContainerComponent = /** @class */ (function () {
    function ExploreContainerComponent() {
    }
    ExploreContainerComponent.prototype.ngOnInit = function () { };
    ExploreContainerComponent.ctorParameters = function () { return []; };
    ExploreContainerComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore-container',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
        })
    ], ExploreContainerComponent);
    return ExploreContainerComponent;
}());



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");






var ExploreContainerComponentModule = /** @class */ (function () {
    function ExploreContainerComponentModule() {
    }
    ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
            declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
            exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
        })
    ], ExploreContainerComponentModule);
    return ExploreContainerComponentModule;
}());



/***/ }),

/***/ "./src/app/pages/entrys/form-entry/form-entry.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/entrys/form-entry/form-entry.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJ5cy9mb3JtLWVudHJ5L2Zvcm0tZW50cnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/entrys/form-entry/form-entry.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/entrys/form-entry/form-entry.page.ts ***!
  \************************************************************/
/*! exports provided: FormEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEntryPage", function() { return FormEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");










var FormEntryPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormEntryPage, _super);
    function FormEntryPage(navParms, modalController, location, requestService, dialogService, authUser, util) {
        var _this = _super.call(this, location, modalController) || this;
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
    FormEntryPage.prototype.initObject = function () {
        this.entry = {
            user_id: this.authUser.user.id,
            amount: 0,
            team_id: this.team_id,
            date: new Date().toISOString()
        };
        console.log('new entry', this.entry);
        //this.addUser();
    };
    FormEntryPage.prototype.submit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        console.log('submit');
                        this.modelEntry.api_create(this.entry).subscribe(function (respose) {
                            _this.dialogService.dimissLoaging();
                            if (respose['status'] == 'success') {
                                _this.dimiss(respose['Entry']);
                            }
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                        }, function () {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FormEntryPage.prototype.dimiss = function (entry) {
        this.modalController.dismiss({
            entry: entry
        });
    };
    FormEntryPage.prototype.close = function () {
        this.modalController.dismiss();
    };
    FormEntryPage.prototype.log = function (event) {
        console.log(event);
    };
    FormEntryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] }
    ]; };
    FormEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-entry',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-entry.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/form-entry/form-entry.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-entry.page.scss */ "./src/app/pages/entrys/form-entry/form-entry.page.scss")).default]
        })
    ], FormEntryPage);
    return FormEntryPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]));



/***/ }),

/***/ "./src/app/pages/expenses/form-expense/form-expense.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/expenses/form-expense/form-expense.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2VzL2Zvcm0tZXhwZW5zZS9mb3JtLWV4cGVuc2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/expenses/form-expense/form-expense.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expenses/form-expense/form-expense.page.ts ***!
  \******************************************************************/
/*! exports provided: FormExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExpensePage", function() { return FormExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");










var FormExpensePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormExpensePage, _super);
    function FormExpensePage(navParms, modalController, location, requestService, dialogService, authUser, util) {
        var _this = _super.call(this, location, modalController) || this;
        _this.navParms = navParms;
        _this.modalController = modalController;
        _this.requestService = requestService;
        _this.dialogService = dialogService;
        _this.authUser = authUser;
        _this.util = util;
        _this.team_id = navParms.get('team_id');
        _this.modelExpense = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Expense', requestService);
        return _this;
    }
    FormExpensePage.prototype.initObject = function () {
        this.expense = {
            user_id: this.authUser.user.id,
            amount: 0,
            team_id: this.team_id,
            date: new Date().toISOString()
        };
        console.log('new expense', this.expense);
        //this.addUser();
    };
    FormExpensePage.prototype.submit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        console.log('submit');
                        this.modelExpense.api_create(this.expense).subscribe(function (respose) {
                            _this.dialogService.dimissLoaging();
                            if (respose['status'] == 'success') {
                                _this.dimiss(respose['Expense']);
                            }
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                        }, function () {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FormExpensePage.prototype.dimiss = function (expense) {
        this.modalController.dismiss({
            expense: expense
        });
    };
    FormExpensePage.prototype.close = function () {
        this.modalController.dismiss();
    };
    FormExpensePage.prototype.log = function (event) {
        console.log(event);
    };
    FormExpensePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] }
    ]; };
    FormExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-expense',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-expense.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/form-expense/form-expense.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-expense.page.scss */ "./src/app/pages/expenses/form-expense/form-expense.page.scss")).default]
        })
    ], FormExpensePage);
    return FormExpensePage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]));



/***/ }),

/***/ "./src/app/pages/game/add-result/add-result.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/game/add-result/add-result.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvYWRkLXJlc3VsdC9hZGQtcmVzdWx0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/game/add-result/add-result.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/game/add-result/add-result.page.ts ***!
  \**********************************************************/
/*! exports provided: AddResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResultPage", function() { return AddResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");









var AddResultPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddResultPage, _super);
    function AddResultPage(navParms, modalController, location, requestService, dialogService, chatService) {
        var _this = _super.call(this, location, modalController) || this;
        _this.navParms = navParms;
        _this.modalController = modalController;
        _this.requestService = requestService;
        _this.dialogService = dialogService;
        _this.chatService = chatService;
        _this.numGoals = [];
        _this.status = 'Jugado';
        _this.serviceGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Game', requestService);
        _this.game = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, navParms.get('game'));
        for (var i = 0; i <= 30; i++) {
            _this.numGoals.push(i);
        }
        console.log(_this.game);
        return _this;
    }
    AddResultPage.prototype.initObject = function () {
    };
    AddResultPage.prototype.confirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var msj;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                msj = "Ten presente que al " + this.status + " este partido ya no podr\u00E1s modificar los datos, solo el administrador general podr\u00E1 hacerlo.";
                this.dialogService.presentAlertConfirm('Confirmar', msj, function () {
                    _this.submit();
                });
                return [2 /*return*/];
            });
        });
    };
    AddResultPage.prototype.submit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.game.status = this.status;
                        return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        console.log('submit');
                        this.serviceGame.api_update(this.game).subscribe(function (respose) {
                            _this.dialogService.dimissLoaging();
                            if (respose['status'] == 'success') {
                                _this.dimiss(_this.game);
                            }
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                        }, function () {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddResultPage.prototype.dimiss = function (game) {
        this.modalController.dismiss({
            game: game
        });
    };
    AddResultPage.prototype.close = function () {
        this.modalController.dismiss();
    };
    AddResultPage.prototype.log = function (event) {
        console.log(event);
    };
    AddResultPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
        { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"] }
    ]; };
    AddResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-result',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/add-result/add-result.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-result.page.scss */ "./src/app/pages/game/add-result/add-result.page.scss")).default]
        })
    ], AddResultPage);
    return AddResultPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_3__["ModalForm"]));



/***/ }),

/***/ "./src/app/pages/home/games/games.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/home/games/games.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team-list {\n  display: block;\n}\n\n.vs {\n  width: 6%;\n}\n\n.game {\n  width: 100%;\n  /*background-image: url(/assets/images/img_fondo_part.png);\n  color: white;*/\n  padding: 10px;\n  /*background-color: white;*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  font-size: small;\n}\n\n.team {\n  display: flex;\n  align-items: center;\n  width: 47%;\n  flex-flow: column-reverse;\n}\n\n.team-name {\n  margin-left: 15px;\n  margin-right: 15px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n\n.contenedor {\n  margin: 10px auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n}\n\n.date {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9nYW1lcy9nYW1lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0E7Z0JBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBR0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQURKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZ2FtZXMvZ2FtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tbGlzdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi52c3tcbiAgICB3aWR0aDogNiU7XG59XG5cbi5nYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ltZ19mb25kb19wYXJ0LnBuZyk7XG4gICAgY29sb3I6IHdoaXRlOyovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlOyovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG5cblxuICAgIGZvbnQtc2l6ZTogc21hbGw7XG5cbn1cblxuLnRlYW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcblxuXG59XG5cbi50ZWFtLW5hbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4OztcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4uaW1nLXRlYW17XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjsgXG4gICAgd2lkdGg6MzBweDsgXG4gICAgaGVpZ2h0OjMwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5kYXRle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/home/results/results.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/results/results.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game {\n  color: #FFF;\n  width: 100%;\n  padding: 3px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n}\n\n.team {\n  position: relative;\n  background-image: url('img_fondo_res4.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  width: 100%;\n  padding-top: 15px;\n}\n\n.name-team {\n  display: inline-block;\n  width: 70%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.goals-team {\n  display: inline-block;\n  width: 30%;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 20px;\n}\n\n.comment {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0dBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWV7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMCAycHggd2hpdGUsIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50ZWFte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfZm9uZG9fcmVzNC5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ubmFtZS10ZWFte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4uZ29hbHMtdGVhbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbW1lbnR7XG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgOjEwcHg7XG4gICAgcmlnaHQgOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/position/position-form/position-form.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/position/position-form/position-form.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc2l0aW9uL3Bvc2l0aW9uLWZvcm0vcG9zaXRpb24tZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/position/position-form/position-form.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/position/position-form/position-form.page.ts ***!
  \********************************************************************/
/*! exports provided: PositionFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionFormPage", function() { return PositionFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");







var PositionFormPage = /** @class */ (function () {
    function PositionFormPage(request, dialogService, viewCtrl, photoService, navParams) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.servicePosition = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Position', request);
        this.id = navParams.get('id');
    }
    PositionFormPage.prototype.ngOnInit = function () {
        this.initObject();
    };
    PositionFormPage.prototype.initObject = function () {
        var _this = this;
        this.posicion = { name: '' };
        if (this.id) {
            this.servicePosition.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                    _this.posicion = data['Position'];
                }
            });
        }
    };
    PositionFormPage.prototype.submit = function () {
        var _this = this;
        if (this.posicion.id) {
            this.servicePosition.api_update(this.posicion).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Position']);
                }
            });
        }
        else {
            this.servicePosition.api_create(this.posicion).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Position']);
                }
            });
        }
    };
    PositionFormPage.prototype.dismiss = function (posicion) {
        this.viewCtrl.dismiss({
            posicion: posicion,
        });
    };
    PositionFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PositionFormPage.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
    ]; };
    PositionFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./position-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./position-form.page.scss */ "./src/app/pages/position/position-form/position-form.page.scss")).default]
        })
    ], PositionFormPage);
    return PositionFormPage;
}());



/***/ }),

/***/ "./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R5cGVFdmVudC90eXBlLWV2ZW50LWZvcm0vdHlwZS1ldmVudC1mb3JtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/typeEvent/type-event-form/type-event-form.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/typeEvent/type-event-form/type-event-form.page.ts ***!
  \*************************************************************************/
/*! exports provided: TypeEventFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeEventFormPage", function() { return TypeEventFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






var TypeEventFormPage = /** @class */ (function () {
    function TypeEventFormPage(request, dialogService, viewCtrl, navParams) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.serviceTypeEvent = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('TypeEvent', request);
        console.log('ver');
        this.id = navParams.get('id');
    }
    TypeEventFormPage.prototype.ngOnInit = function () {
        this.initObject();
    };
    TypeEventFormPage.prototype.initObject = function () {
        var _this = this;
        this.typeEvent = { 'name': '', 'icon': '' };
        if (this.id) {
            this.serviceTypeEvent.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                    _this.typeEvent = data['TypeEvent'];
                }
            });
        }
    };
    TypeEventFormPage.prototype.submit = function () {
        var _this = this;
        if (this.typeEvent.id) {
            this.serviceTypeEvent.api_update(this.typeEvent).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['TypeEvent']);
                }
            });
        }
        else {
            this.serviceTypeEvent.api_create(this.typeEvent).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['TypeEvent']);
                }
            });
        }
    };
    TypeEventFormPage.prototype.dismiss = function (typeEvent) {
        this.viewCtrl.dismiss({
            typeEvent: typeEvent,
        });
    };
    TypeEventFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TypeEventFormPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }
    ]; };
    TypeEventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-event-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./type-event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./type-event-form.page.scss */ "./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss")).default]
        })
    ], TypeEventFormPage);
    return TypeEventFormPage;
}());



/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1mb3JtL3VzZXItZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.ts ***!
  \********************************************************/
/*! exports provided: UserFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormPage", function() { return UserFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");










var UserFormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UserFormPage, _super);
    function UserFormPage(request, dialogService, viewCtrl, navParams, platform, utilDialog, location, chatService) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.request = request;
        _this.dialogService = dialogService;
        _this.viewCtrl = viewCtrl;
        _this.platform = platform;
        _this.utilDialog = utilDialog;
        _this.chatService = chatService;
        _this.saving = false;
        _this.serviceUser = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('User', request);
        _this.photoService = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);
        _this.photoService.init('images/users/profile/', true, 'assets/images/profile.jpg');
        _this.photoService.setElementImg('img_user', 700);
        _this.id = navParams.get('id');
        return _this;
    }
    UserFormPage.prototype.initObject = function () {
        var _this = this;
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
                    _this.user = data['User'];
                    _this.photoService.setImage(_this.user.photo);
                    console.log(_this.photoService.photo.getPath());
                }
            });
        }
    };
    UserFormPage.prototype.submit = function () {
        var _this = this;
        this.saving = true;
        if (this.photoService.isLoadPthoto()) {
            this.user.photo = this.photoService.getImageUpload();
        }
        if (this.user.id) {
            this.serviceUser.api_update(this.user).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['User']);
                }
                _this.saving = false;
            }, function (error) {
                _this.saving = false;
            });
        }
        else {
            this.serviceUser.api_create(this.user).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['User']);
                }
                _this.saving = false;
            }, function (error) {
                _this.saving = false;
            });
        }
    };
    UserFormPage.prototype.dismiss = function (user) {
        this.viewCtrl.dismiss({
            user: user,
        });
    };
    UserFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    UserFormPage.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"] },
        { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"] }
    ]; };
    UserFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-form.page.scss */ "./src/app/pages/user/user-form/user-form.page.scss")).default]
        })
    ], UserFormPage);
    return UserFormPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__["ModalForm"]));



/***/ }),

/***/ "./src/app/pages/util/list-redirect/list-redirect.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/util/list-redirect/list-redirect.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3V0aWwvbGlzdC1yZWRpcmVjdC9saXN0LXJlZGlyZWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/util/list-redirect/list-redirect.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/util/list-redirect/list-redirect.page.ts ***!
  \****************************************************************/
/*! exports provided: ListRedirectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRedirectPage", function() { return ListRedirectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




var ListRedirectPage = /** @class */ (function () {
    function ListRedirectPage(dialogService, viewCtrl, navParams, navCtrl) {
        var _a, _b;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.list = (_a = navParams.get('list')) !== null && _a !== void 0 ? _a : [];
        this.title = (_b = navParams.get('title')) !== null && _b !== void 0 ? _b : 'Opciones';
    }
    ListRedirectPage.prototype.ngOnInit = function () {
    };
    ListRedirectPage.prototype.dimiss = function () {
        this.viewCtrl.dismiss();
    };
    ListRedirectPage.prototype.goTo = function (item) {
        console.log('goTo');
        this.navCtrl.navigateForward(item.route);
        this.viewCtrl.dismiss();
    };
    ListRedirectPage.ctorParameters = function () { return [
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    ListRedirectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-redirect',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-redirect.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-redirect.page.scss */ "./src/app/pages/util/list-redirect/list-redirect.page.scss")).default]
        })
    ], ListRedirectPage);
    return ListRedirectPage;
}());



/***/ }),

/***/ "./src/app/services/html-to-image.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/html-to-image.service.ts ***!
  \***************************************************/
/*! exports provided: HtmlToImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlToImageService", function() { return HtmlToImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.service */ "./src/app/services/util.service.ts");



//import {html2canvas} from 'html2canvas';
var html2canvas = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
var HtmlToImageService = /** @class */ (function () {
    function HtmlToImageService(util) {
        this.util = util;
        this.img = '';
    }
    HtmlToImageService.prototype.run = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var element, targetElement, offsetHeight, offsetWidth, options;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('run');
                        element = document.getElementById('html2canvas');
                        targetElement = document.getElementById(id).cloneNode(true);
                        offsetHeight = document.getElementById(id).offsetHeight;
                        offsetWidth = document.getElementById(id).offsetWidth;
                        element.style.height = offsetHeight + 'px';
                        element.style.width = offsetWidth + 'px';
                        element.appendChild(targetElement);
                        this.util.delay(100);
                        options = {
                            letterRendering: 1,
                            allowTaint: true,
                            logging: true,
                            useCORS: true,
                            onrendered: function (canvas) {
                                console.log('canvas', canvas);
                            }
                        };
                        return [4 /*yield*/, html2canvas(element.firstChild, options).then(function (resp) {
                                //img;
                                _this.img = resp.toDataURL("image/png");
                                //console.log('resp' , resp);
                                element.firstChild.remove();
                            }).catch(function (res) {
                                console.log(res);
                                element.firstChild.remove();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HtmlToImageService.prototype.dowload = function (name) {
        if (name === void 0) { name = '_'; }
        var a = document.createElement("a"); //Create <a>
        a.href = this.img;
        a.download = "partido" + name + ".png"; //File name Here
        a.click();
    };
    Object.defineProperty(HtmlToImageService.prototype, "src", {
        get: function () {
            return this.img ? this.img : false;
        },
        enumerable: false,
        configurable: true
    });
    HtmlToImageService.ctorParameters = function () { return [
        { type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
    ]; };
    HtmlToImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HtmlToImageService);
    return HtmlToImageService;
}());



/***/ }),

/***/ "./src/app/services/lists-home.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/lists-home.service.ts ***!
  \************************************************/
/*! exports provided: ListsHomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsHomeService", function() { return ListsHomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _util_array_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util-array.service */ "./src/app/services/util-array.service.ts");



var ListsHomeService = /** @class */ (function () {
    function ListsHomeService(utilArray) {
        this.utilArray = utilArray;
        this.results = [];
        this.games = [];
        this.players = [];
        this.teams = [];
        this.publications = [];
    }
    ListsHomeService.prototype.remove = function (nameList, id) {
        if (this[nameList]) {
            this.utilArray.listDelete(this[nameList], id);
        }
    };
    ListsHomeService.prototype.update = function (nameList, item) {
        if (this[nameList]) {
            this.utilArray.listUpdate(this[nameList], item.id, item);
        }
    };
    ListsHomeService.ctorParameters = function () { return [
        { type: _util_array_service__WEBPACK_IMPORTED_MODULE_2__["UtilArrayService"] }
    ]; };
    ListsHomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ListsHomeService);
    return ListsHomeService;
}());



/***/ }),

/***/ "./src/app/services/sharer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sharer.service.ts ***!
  \********************************************/
/*! exports provided: SharerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharerService", function() { return SharerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








var SharerService = /** @class */ (function () {
    function SharerService(requestService, dialogService, iab, util) {
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
        if (!this.loadedAddThis)
            this.addThisInit();
    }
    SharerService.prototype.goTo = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var browser;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                browser = this.iab.create(url, '', {
                    fullscreen: "yes"
                });
                return [2 /*return*/];
            });
        });
    };
    SharerService.prototype.shareGameFacebook = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var browser;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                browser = this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url_base + '/shareResult/' + id, '', {
                    fullscreen: "yes"
                });
                return [2 /*return*/];
            });
        });
    };
    SharerService.prototype.addThisInit = function () {
        var _this = this;
        try {
            this.addMeta();
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.setAttribute('async', 'async');
            script.src = "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6169932652121667";
            script.onload = function () {
                console.log('load AddThis');
                _this.loadedAddThis = true;
                _this.scriptLoaded = _this;
                document.body.classList.add('share-disabled');
            };
            document.body.appendChild(script);
        }
        catch (e) {
            console.error(e);
        }
    };
    SharerService.prototype.addMeta = function () {
        var link = document.createElement('meta');
        link.setAttribute('property', 'og:url');
        link.content = document.location;
        document.getElementsByTagName('head')[0].appendChild(link);
        var title = document.createElement('meta');
        title.setAttribute('property', 'og:title');
        title.content = 'Title lucas';
        document.getElementsByTagName('head')[0].appendChild(title);
        console.log('add meta');
    };
    SharerService.prototype.toggleAddThis = function () {
        console.log('toggle');
        this.addThisVisible = !this.addThisVisible;
        this.updateVisibiliti();
    };
    SharerService.prototype.showAddThis = function () {
        this.addThisVisible = true;
        this.updateVisibiliti();
    };
    SharerService.prototype.hideAddThis = function () {
        this.addThisVisible = false;
        this.updateVisibiliti();
    };
    SharerService.prototype.updateVisibiliti = function () {
        if (!this.loadedAddThis)
            return;
        var element = document.getElementsByClassName('addthis-smartlayers');
        if (element) {
            if (window['addthis']) {
                var addThis = window['addthis'];
                addThis.layers.refresh();
                addThis.toolbox();
            }
            if (this.addThisVisible) {
                document.body.classList.remove('share-disabled');
                //element[1]['style'].visibility = 'visible';
            }
            else {
                document.body.classList.add('share-disabled');
                //element[1]['style'].visibility = 'hidden';
            }
        }
    };
    SharerService.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
        { type: _util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
    ]; };
    SharerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharerService);
    return SharerService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map