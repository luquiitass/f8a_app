(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-web-web-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/web/web.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/web/web.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesWebWebPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/web/web-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/web/web-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: WebPageRoutingModule */

    /***/
    function srcAppPagesWebWebRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPageRoutingModule", function () {
        return WebPageRoutingModule;
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


      var _web_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web.page */
      "./src/app/pages/web/web.page.ts");

      var routes = [{
        path: '',
        component: _web_page__WEBPACK_IMPORTED_MODULE_3__["WebPage"]
      }];

      var WebPageRoutingModule = function WebPageRoutingModule() {
        _classCallCheck(this, WebPageRoutingModule);
      };

      WebPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WebPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/web/web.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/web/web.module.ts ***!
      \*****************************************/

    /*! exports provided: WebPageModule */

    /***/
    function srcAppPagesWebWebModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPageModule", function () {
        return WebPageModule;
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


      var _web_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./web-routing.module */
      "./src/app/pages/web/web-routing.module.ts");
      /* harmony import */


      var _web_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./web.page */
      "./src/app/pages/web/web.page.ts");

      var WebPageModule = function WebPageModule() {
        _classCallCheck(this, WebPageModule);
      };

      WebPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _web_routing_module__WEBPACK_IMPORTED_MODULE_5__["WebPageRoutingModule"]],
        declarations: [_web_page__WEBPACK_IMPORTED_MODULE_6__["WebPage"]]
      })], WebPageModule);
      /***/
    },

    /***/
    "./src/app/pages/web/web.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/pages/web/web.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesWebWebPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlYi93ZWIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/web/web.page.ts":
    /*!***************************************!*\
      !*** ./src/app/pages/web/web.page.ts ***!
      \***************************************/

    /*! exports provided: WebPage */

    /***/
    function srcAppPagesWebWebPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPage", function () {
        return WebPage;
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

      var WebPage = /*#__PURE__*/function () {
        function WebPage(iab) {
          _classCallCheck(this, WebPage);

          this.iab = iab;
        }

        _createClass(WebPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var browser = this.iab.create('https://ionicframework.com/', '_sistem'); //browser.executeScript(...);
            //browser.insertCSS(...);

            browser.on('loadstop').subscribe(function (event) {
              browser.insertCSS({
                code: "body{color: red;"
              });
            });
            browser.close();
          }
        }]);

        return WebPage;
      }();

      WebPage.ctorParameters = function () {
        return [{
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
        }];
      };

      WebPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-web',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./web.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/web/web.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./web.page.scss */
        "./src/app/pages/web/web.page.scss"))["default"]]
      })], WebPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-web-web-module-es5.js.map