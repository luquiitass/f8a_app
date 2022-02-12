(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-failure-failure-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/failure/failure.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/failure/failure.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentFailureFailurePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago rechazado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>   \n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment/failure/failure-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/payment/failure/failure-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FailurePageRoutingModule */

    /***/
    function srcAppPagesPaymentFailureFailureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FailurePageRoutingModule", function () {
        return FailurePageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _failure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./failure.page */
      "./src/app/pages/payment/failure/failure.page.ts");

      var routes = [{
        path: '',
        component: _failure_page__WEBPACK_IMPORTED_MODULE_3__["FailurePage"]
      }];

      var FailurePageRoutingModule = function FailurePageRoutingModule() {
        _classCallCheck(this, FailurePageRoutingModule);
      };

      FailurePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FailurePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/failure/failure.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/failure/failure.module.ts ***!
      \*********************************************************/

    /*! exports provided: FailurePageModule */

    /***/
    function srcAppPagesPaymentFailureFailureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FailurePageModule", function () {
        return FailurePageModule;
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


      var _failure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./failure-routing.module */
      "./src/app/pages/payment/failure/failure-routing.module.ts");
      /* harmony import */


      var _failure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./failure.page */
      "./src/app/pages/payment/failure/failure.page.ts");

      var FailurePageModule = function FailurePageModule() {
        _classCallCheck(this, FailurePageModule);
      };

      FailurePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _failure_routing_module__WEBPACK_IMPORTED_MODULE_5__["FailurePageRoutingModule"]],
        declarations: [_failure_page__WEBPACK_IMPORTED_MODULE_6__["FailurePage"]]
      })], FailurePageModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/failure/failure.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/failure/failure.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPaymentFailureFailurePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvZmFpbHVyZS9mYWlsdXJlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/payment/failure/failure.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/payment/failure/failure.page.ts ***!
      \*******************************************************/

    /*! exports provided: FailurePage */

    /***/
    function srcAppPagesPaymentFailureFailurePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FailurePage", function () {
        return FailurePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FailurePage = /*#__PURE__*/function () {
        function FailurePage() {
          _classCallCheck(this, FailurePage);
        }

        _createClass(FailurePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FailurePage;
      }();

      FailurePage.ctorParameters = function () {
        return [];
      };

      FailurePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-failure',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./failure.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/failure/failure.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./failure.page.scss */
        "./src/app/pages/payment/failure/failure.page.scss"))["default"]]
      })], FailurePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment-failure-failure-module-es5.js.map