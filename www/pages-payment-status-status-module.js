(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-status-status-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/status/status.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/status/status.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{env.nameApp}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"payment\">\n|  <ion-card>\n    <ion-card-content>\n      <h2 class=\"ion-text-center\" >Pago {{payment.estado}}</h2>\n      <div class=\"ion-text-center\">{{payment.detail}}</div>   \n    </ion-card-content>\n\n  </ion-card>\n\n  <div class=\"ion-text-center\">\n    <div>\n      Monto\n    </div>\n    <div>\n      $ {{payment.amount}}\n    </div>\n\n  </div>\n\n  <ion-card class=\"detail\">\n\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Detalle de suscripción</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label>\n          <b>Equipo:</b> {{payment.team.name}} \n        </ion-label>\n      </ion-item>\n    \n     \n\n      <ion-item>\n        <ion-label>\n          Generado por {{payment.user.completeName}}\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <b>Inicio:</b> {{payment.start}} \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <b>Fin:</b> {{payment.end}} \n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <b>Duración:</b> {{payment.months}} Meses\n        </ion-label>\n      </ion-item>\n\n\n    </ion-item-group>\n\n    <ion-item-group *ngIf=\"pm_payment\">\n\n      <ion-item-divider>\n        <ion-label>Pago</ion-label>\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-label>\n          <b>Orden Mercado Pago:</b> {{payment.order_id}} Meses\n        </ion-label>\n      </ion-item>\n\n\n\n    </ion-item-group>\n\n\n\n    <ion-card-content>\n    \n    </ion-card-content>\n\n  </ion-card>\n\n  <div  *ngIf=\"isPaid\">\n    <ion-button expand=\"full\" color=\"info\">Descargar Comprobante</ion-button>\n    <ion-button expand=\"full\" color=\"secondary\">Administrar equipo </ion-button>\n  </div>\n\n  <div  *ngIf=\"!isPaid\">\n\n    <app-btn-paid\n      [preference_id] = \"payment.preference_id\"\n    ></app-btn-paid>\n\n\n  </div>\n\n</div>\n\n<div *ngIf=\"errorPayment\">\n  Error al cargar Pago\n</div>\n \n<ion-button expand=\"full\" color=\"danger\" routerLink=\"/\">Salir</ion-button>\n\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/status/status-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment/status/status-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: StatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageRoutingModule", function() { return StatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status.page */ "./src/app/pages/payment/status/status.page.ts");




var routes = [
    {
        path: '',
        component: _status_page__WEBPACK_IMPORTED_MODULE_3__["StatusPage"]
    }
];
var StatusPageRoutingModule = /** @class */ (function () {
    function StatusPageRoutingModule() {
    }
    StatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StatusPageRoutingModule);
    return StatusPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/status/status.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/status/status.module.ts ***!
  \*******************************************************/
/*! exports provided: StatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageModule", function() { return StatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-routing.module */ "./src/app/pages/payment/status/status-routing.module.ts");
/* harmony import */ var _status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status.page */ "./src/app/pages/payment/status/status.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var StatusPageModule = /** @class */ (function () {
    function StatusPageModule() {
    }
    StatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _status_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusPageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_status_page__WEBPACK_IMPORTED_MODULE_6__["StatusPage"]]
        })
    ], StatusPageModule);
    return StatusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/status/status.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/status/status.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvc3RhdHVzL3N0YXR1cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/payment/status/status.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/status/status.page.ts ***!
  \*****************************************************/
/*! exports provided: StatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPage", function() { return StatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var StatusPage = /** @class */ (function () {
    function StatusPage(requestService, route, dialogService) {
        this.requestService = requestService;
        this.route = route;
        this.dialogService = dialogService;
        this.errorPayment = false;
        this.paymentModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Payment', requestService);
        this.id = this.route.snapshot.paramMap.get('id');
    }
    StatusPage.prototype.ngOnInit = function () {
        this.init();
    };
    StatusPage.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres('Cargando...')];
                    case 1:
                        _a.sent();
                        this.paymentModel.api_find(this.id).subscribe(function (response) {
                            if (response['status'] == 'success') {
                                _this.payment = response['Payment'];
                            }
                        }, function (error) {
                            _this.errorPayment = true;
                        }, function () {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(StatusPage.prototype, "env", {
        get: function () {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatusPage.prototype, "isPaid", {
        get: function () {
            return this.payment.status == "approved";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatusPage.prototype, "pm_payment", {
        get: function () {
            return this.payment.payment_json ? JSON.parse(this.payment.payment_json) : "";
        },
        enumerable: false,
        configurable: true
    });
    StatusPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
    ]; };
    StatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./status.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/status/status.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./status.page.scss */ "./src/app/pages/payment/status/status.page.scss")).default]
        })
    ], StatusPage);
    return StatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-status-status-module.js.map