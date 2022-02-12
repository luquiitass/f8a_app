(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-list-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/list/list.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/list/list.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentListListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pagos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n      \n      <ion-list-header *ngIf=\"payments.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n   \n      <ion-item *ngFor=\"let item of payments\" routerLink=\"/payment/{{item.id}}\" routerDirection=\"forward\"  >\n        \n        <ion-avatar slot=\"start\" >\n          <ion-img \n            [src]=\"item.team.shield ? item.team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n          </ion-img>\n        </ion-avatar>\n\n        <ion-label >\n          <div>\n            <h3>{{title(item)}} <b>{{item.team.name}}</b> </h3>\n            <h4 class=\"status\">{{status(item)}}</h4>\n            <div class=\"ion-float-right\">\n              <ion-text class=\"hs\" color=\"ligth\">\n                {{util.getFormarHumans(item.created_at)}}\n              </ion-text>\n            </div>\n          </div>\n          \n        </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment/list/list-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment/list/list-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ListPageRoutingModule */

    /***/
    function srcAppPagesPaymentListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
        return ListPageRoutingModule;
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


      var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/payment/list/list.page.ts");

      var routes = [{
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
      }];

      var ListPageRoutingModule = function ListPageRoutingModule() {
        _classCallCheck(this, ListPageRoutingModule);
      };

      ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/list/list.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/payment/list/list.module.ts ***!
      \***************************************************/

    /*! exports provided: ListPageModule */

    /***/
    function srcAppPagesPaymentListListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
        return ListPageModule;
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


      var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-routing.module */
      "./src/app/pages/payment/list/list-routing.module.ts");
      /* harmony import */


      var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/payment/list/list.page.ts");

      var ListPageModule = function ListPageModule() {
        _classCallCheck(this, ListPageModule);
      };

      ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
      })], ListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/list/list.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/payment/list/list.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPaymentListListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hs {\n  font-size: small;\n}\n\n.status {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHN7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLnN0YXR1c3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/payment/list/list.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/payment/list/list.page.ts ***!
      \*************************************************/

    /*! exports provided: ListPage */

    /***/
    function srcAppPagesPaymentListListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPage", function () {
        return ListPage;
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


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var ListPage = /*#__PURE__*/function () {
        function ListPage(requestService, util) {
          _classCallCheck(this, ListPage);

          this.requestService = requestService;
          this.util = util;
          this.payments = [];
          this.modelPayment = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Payment', requestService);
        }

        _createClass(ListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.modelPayment.api_function('pagePaymentsUser').subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this.payments = response['data'];
                        }

                        if ($event) $event.target.complete();
                      }, function (error) {
                        if ($event) $event.target.complete();
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "status",
          value: function status(payment) {
            switch (payment.status) {
              case 'created':
                return 'Pendiente';

              case 'pending':
                return 'Pendiente de pago';

              case 'approved':
                return 'Pagado';

              case 'rejected':
                return 'Pago rechazado';
            }

            return '';
          }
        }, {
          key: "title",
          value: function title(payment) {
            return 'Suscripción de ';
          }
        }]);

        return ListPage;
      }();

      ListPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }];
      };

      ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/list/list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list.page.scss */
        "./src/app/pages/payment/list/list.page.scss"))["default"]]
      })], ListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment-list-list-module-es5.js.map