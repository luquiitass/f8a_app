(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privacy-policy-privacy-policy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivacyPolicyPrivacyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>privacyPolicy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/privacy-policy/privacy-policy-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PrivacyPolicyPageRoutingModule */

    /***/
    function srcAppPagesPrivacyPolicyPrivacyPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function () {
        return PrivacyPolicyPageRoutingModule;
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


      var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privacy-policy.page */
      "./src/app/pages/privacy-policy/privacy-policy.page.ts");

      var routes = [{
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
      }];

      var PrivacyPolicyPageRoutingModule = function PrivacyPolicyPageRoutingModule() {
        _classCallCheck(this, PrivacyPolicyPageRoutingModule);
      };

      PrivacyPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrivacyPolicyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/privacy-policy/privacy-policy.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy.module.ts ***!
      \***************************************************************/

    /*! exports provided: PrivacyPolicyPageModule */

    /***/
    function srcAppPagesPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
        return PrivacyPolicyPageModule;
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


      var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./privacy-policy-routing.module */
      "./src/app/pages/privacy-policy/privacy-policy-routing.module.ts");
      /* harmony import */


      var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy-policy.page */
      "./src/app/pages/privacy-policy/privacy-policy.page.ts");

      var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
        _classCallCheck(this, PrivacyPolicyPageModule);
      };

      PrivacyPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPageRoutingModule"]],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
      })], PrivacyPolicyPageModule);
      /***/
    },

    /***/
    "./src/app/pages/privacy-policy/privacy-policy.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPrivacyPolicyPrivacyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/privacy-policy/privacy-policy.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy.page.ts ***!
      \*************************************************************/

    /*! exports provided: PrivacyPolicyPage */

    /***/
    function srcAppPagesPrivacyPolicyPrivacyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
        return PrivacyPolicyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PrivacyPolicyPage = /*#__PURE__*/function () {
        function PrivacyPolicyPage() {
          _classCallCheck(this, PrivacyPolicyPage);
        }

        _createClass(PrivacyPolicyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyPage;
      }();

      PrivacyPolicyPage.ctorParameters = function () {
        return [];
      };

      PrivacyPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./privacy-policy.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./privacy-policy.page.scss */
        "./src/app/pages/privacy-policy/privacy-policy.page.scss"))["default"]]
      })], PrivacyPolicyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-privacy-policy-privacy-policy-module-es5.js.map