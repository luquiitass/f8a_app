(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-payment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment/payment.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment/payment.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/payment\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"payment\">\n    <ion-card-content>\n\n      <div class=\"ion-text-center\">\n        <h2 class=\"sub\">Suscripción de:</h2>\n        <br>\n        <ion-avatar slot=\"start\" style=\"margin: auto;\">\n          <ion-img \n            [src]=\"payment.team.shield ? payment.team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n          </ion-img>\n        </ion-avatar>\n        <br>\n        <ion-text class=\"team\" color=\"dark\"> {{payment.team.name}}</ion-text>\n        <br>\n      </div>\n\n     \n\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>Detalle</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            <ion-text>Valor:</ion-text>\n            <ion-text class=\"ion-float-right\">${{payment.amount}}</ion-text>\n          </ion-label>\n        </ion-item>\n       \n        <ion-item>\n          <ion-label>\n            <ion-text>Creado:</ion-text>\n            <ion-text class=\"ion-float-right\">{{util.setFormatMoment(payment.created_at)}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"false\">\n          <ion-text> {{ payment.detail }}</ion-text>\n        </ion-item>\n\n      </ion-item-group>\n\n      <br>\n\n      <ion-item-group >\n        <ion-item-divider>\n          <ion-label class=\"ion-text-center\">Estado</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            {{status}}\n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n\n      <br *ngIf=\"noPaid\">\n\n      <ion-item-group *ngIf=\"noPaid\" >\n        <ion-item-divider>\n          <ion-label class=\"ion-text-center\">Información </ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            \n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n      <br>\n\n\n      <br *ngIf=\"isFailure\">\n      <ion-item-group *ngIf=\"isFailure\" >\n        <ion-item-divider>\n          <ion-label class=\"ion-text-center\">Error</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            El pago no ha finalizado corractamente.\n          </ion-label>\n        </ion-item>\n\n        <ion-item >\n          <ion-button routerLink=\"/payment/create/{{payment.team.id}}\"  >Generar nuevo pago</ion-button>\n        </ion-item>\n\n      </ion-item-group>\n\n\n      <br *ngIf=\"isApproved\">\n      <ion-item-group *ngIf=\"isApproved\">\n        <ion-item-divider>\n          <ion-label>Suscripción paga</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            <ion-text>inicio:</ion-text>\n            <ion-text class=\"ion-float-right\">{{util.setFormatMoment(payment.start)}}</ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-text>Fin:</ion-text>\n            <ion-text class=\"ion-float-right\" >{{util.setFormatMoment(payment.end)}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-text>\n            Durante este periodo los administradores podran gestionar los datos de este Equipo. Recibiran una notificación dias previos a la fecha de vencimiento. \n          </ion-text>\n        </ion-item>\n\n      </ion-item-group>\n\n\n\n\n      <br *ngIf=\"isApproved\">\n      <ion-item-group *ngIf=\"isApproved\">\n\n        <ion-item-divider>\n          <ion-label>Mercado Pago</ion-label>\n        </ion-item-divider> \n\n        <ion-item>\n          <ion-label>\n            <ion-text>Pago:</ion-text>\n            <ion-text class=\"ion-float-right\">{{payment.payment_id}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-text>Orden:</ion-text>\n            <ion-text class=\"ion-float-right\">{{payment.order_id}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n\n      <br *ngIf=\"isApproved\">\n      <ion-item-group *ngIf=\"isApproved\">\n\n        <ion-item-divider>\n          <ion-label>Autor</ion-label>\n        </ion-item-divider> \n\n        <ion-item>\n          <ion-label class=\"ion-text-center\">\n            <ion-avatar slot=\"start\" style=\"margin: auto;\">\n              <ion-img \n                [src]=\"payment.user.photo ? payment.user.photo.urlCompleteThumb : 'assets/images/user.png'\">\n              </ion-img>\n            </ion-avatar>\n\n            {{payment.user.completeName}}\n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n\n\n      <div *ngIf=\"noPaid\">\n        <app-btn-paid\n          [preference_id] = \"payment.preference_id\"\n        ></app-btn-paid>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment/payment/payment-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/payment/payment/payment-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PaymentPageRoutingModule */

    /***/
    function srcAppPagesPaymentPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
        return PaymentPageRoutingModule;
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


      var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment.page */
      "./src/app/pages/payment/payment/payment.page.ts");

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
      }];

      var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
        _classCallCheck(this, PaymentPageRoutingModule);
      };

      PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/payment/payment.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/payment/payment.module.ts ***!
      \*********************************************************/

    /*! exports provided: PaymentPageModule */

    /***/
    function srcAppPagesPaymentPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
        return PaymentPageModule;
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


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payment-routing.module */
      "./src/app/pages/payment/payment/payment-routing.module.ts");
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment.page */
      "./src/app/pages/payment/payment/payment.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var PaymentPageModule = function PaymentPageModule() {
        _classCallCheck(this, PaymentPageModule);
      };

      PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
      })], PaymentPageModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/payment/payment.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment/payment/payment.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPaymentPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sub {\n  font-size: larger;\n  margin-bottom: 10px;\n}\n\n.team {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ssa0JBQUE7QUFDTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRlYW17XG4gICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/payment/payment/payment.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/payment/payment/payment.page.ts ***!
      \*******************************************************/

    /*! exports provided: PaymentPage */

    /***/
    function srcAppPagesPaymentPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
        return PaymentPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var PaymentPage = /*#__PURE__*/function () {
        function PaymentPage(request, route, dialogService, util) {
          _classCallCheck(this, PaymentPage);

          this.request = request;
          this.route = route;
          this.dialogService = dialogService;
          this.util = util;
          this.modelPayment = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]("Payment", request);
          this.payment_id = this.route.snapshot.paramMap.get('payment_id');
        }

        _createClass(PaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initObject();
          }
        }, {
          key: "initObject",
          value: function initObject() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.dialogService.loadingProgres();

                    case 2:
                      if (this.payment_id) {
                        this.modelPayment.api_find(this.payment_id).subscribe(function (response) {
                          _this.dialogService.dimissLoaging();

                          if (response['status'] == 'success') {
                            _this.payment = response['Payment'];
                          }
                        }, function (error) {
                          _this.dialogService.dimissLoaging();
                        });
                      }

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "isApproved",
          get: function get() {
            return this.payment ? this.payment.status == 'approved' : false;
          }
        }, {
          key: "noPaid",
          get: function get() {
            return this.payment ? this.payment.status == 'created' || this.payment.status == 'pending' : false;
          }
        }, {
          key: "isFailure",
          get: function get() {
            return this.payment ? this.payment.status == 'rejected' : false;
          }
        }, {
          key: "status",
          get: function get() {
            if (!this.payment) return '';

            switch (this.payment.status) {
              case 'created':
                return 'Pendiente';

              case 'pending':
                return 'Pendiente  de pago';

              case 'approved':
                return 'Pagado';

              case 'rejected':
                return 'Pago rechazado';
            }
          }
        }]);

        return PaymentPage;
      }();

      PaymentPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment/payment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payment.page.scss */
        "./src/app/pages/payment/payment/payment.page.scss"))["default"]]
      })], PaymentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment-payment-payment-module-es5.js.map