(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-success-success-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/success/success.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/success/success.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentSuccessSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago registrado</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"notifications\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment/success/success-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/payment/success/success-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SuccessPageRoutingModule */

    /***/
    function srcAppPagesPaymentSuccessSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function () {
        return SuccessPageRoutingModule;
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


      var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success.page */
      "./src/app/pages/payment/success/success.page.ts");

      var routes = [{
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
      }];

      var SuccessPageRoutingModule = function SuccessPageRoutingModule() {
        _classCallCheck(this, SuccessPageRoutingModule);
      };

      SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SuccessPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/success/success.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/success/success.module.ts ***!
      \*********************************************************/

    /*! exports provided: SuccessPageModule */

    /***/
    function srcAppPagesPaymentSuccessSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function () {
        return SuccessPageModule;
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


      var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./success-routing.module */
      "./src/app/pages/payment/success/success-routing.module.ts");
      /* harmony import */


      var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success.page */
      "./src/app/pages/payment/success/success.page.ts");

      var SuccessPageModule = function SuccessPageModule() {
        _classCallCheck(this, SuccessPageModule);
      };

      SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
      })], SuccessPageModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/success/success.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/success/success.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPaymentSuccessSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/payment/success/success.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/payment/success/success.page.ts ***!
      \*******************************************************/

    /*! exports provided: SuccessPage */

    /***/
    function srcAppPagesPaymentSuccessSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPage", function () {
        return SuccessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SuccessPage = /*#__PURE__*/function () {
        function SuccessPage() {
          _classCallCheck(this, SuccessPage);
        }

        _createClass(SuccessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuccessPage;
      }();

      SuccessPage.ctorParameters = function () {
        return [];
      };

      SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./success.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/success/success.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./success.page.scss */
        "./src/app/pages/payment/success/success.page.scss"))["default"]]
      })], SuccessPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment-success-success-module-es5.js.map