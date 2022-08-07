(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-create-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/create/create.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/create/create.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Realizar Pago</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"team/profile/{{team_id}}\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card *ngIf=\"!planSelect\">\n    <ion-card-content>\n      <ion-list>\n\n        <ion-list-header  lines=\"inset\" color=\"secondary\">\n          <ion-label>Planes</ion-label>\n        </ion-list-header>\n\n        <ion-item *ngFor=\"let plan of plans\"  button (click)=\"selectPlan(plan)\">\n          <h3>\n          {{plan.name}}\n          </h3>\n          <ion-badge color=\"secondary\" class=\"float-left\" slot=\"end\">\n            <h3>${{plan.amount}}</h3>\n          </ion-badge>\n        </ion-item>\n      </ion-list>\n      \n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngIf=\"payment && planSelect\">\n    <ion-card-content>\n\n      <div class=\"ion-text-center\">\n        <h2 class=\"sub\">Suscripción de:</h2>\n        <br>\n        <ion-avatar slot=\"start\" style=\"margin: auto;\">\n          <ion-img \n            [src]=\"payment.team.shield ? payment.team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n          </ion-img>\n        </ion-avatar>\n        <br>\n        <ion-text class=\"team\" color=\"dark\"> {{payment.team.name}}</ion-text>\n        <br>\n      </div>\n\n     \n\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>Detalle</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            <ion-text>Valor:</ion-text>\n            <ion-text class=\"ion-float-right\">${{payment.amount}}</ion-text>\n          </ion-label>\n        </ion-item>\n       \n        <ion-item>\n          <ion-label>\n            <ion-text>Creado:</ion-text>\n            <ion-text class=\"ion-float-right\">{{util.setFormatMoment(payment.created_at)}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"payment.detail\" >\n          <div class=\"ion-text-center\" color=\"medium\" > \n            {{ payment.detail }}\n          </div>\n        </ion-item>\n\n      </ion-item-group>\n\n      <br>\n\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>Período de suscripción</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            <ion-text>Inicio:</ion-text>\n            <ion-text class=\"ion-float-right\">{{util.setFormatMoment(payment.start)}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-text>Fin:</ion-text>\n            <ion-text class=\"ion-float-right\">{{util.setFormatMoment(payment.end)}}</ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n\n      <br>\n\n      <ion-item-group >\n        <ion-item-divider>\n          <ion-label class=\"ion-text-center\">Estado</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            {{status}}\n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n\n      <br *ngIf=\"noPaid\">\n\n      <ion-item-group *ngIf=\"noPaid\" >\n        <ion-item-divider>\n          <ion-label class=\"ion-text-center\">Información </ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            \n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n      <br>\n\n\n      <br *ngIf=\"isFailure\">\n      <ion-item-group *ngIf=\"isFailure\" >\n        <ion-item-divider>\n          <ion-label class=\"ion-text-center\">Error</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            El pago no ha finalizado correctamente.\n          </ion-label>\n        </ion-item>\n\n        <ion-item >\n          <ion-button routerLink=\"/payment/create/{{payment.team.id}}\"  >Generar nuevo pago</ion-button>\n        </ion-item>\n\n      </ion-item-group>\n\n\n      <br *ngIf=\"isApproved\">\n      <ion-item-group *ngIf=\"isApproved\">\n        <ion-item-divider>\n          <ion-label>Suscripción paga</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>\n            <ion-text>inicio:</ion-text>\n            <ion-text class=\"ion-float-right\">{{util.setFormatMoment(payment.start)}}</ion-text>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-text>Fin:</ion-text>\n            <ion-text class=\"ion-float-right\" >{{util.setFormatMoment(payment.end)}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-text>\n            Durante este periodo los administradores podrán gestionar los datos de este Equipo. Recibirán una notificación días previos a la fecha de vencimiento. \n          </ion-text>\n        </ion-item>\n\n      </ion-item-group>\n\n\n\n\n      <br *ngIf=\"isApproved\">\n      <ion-item-group *ngIf=\"isApproved\">\n\n        <ion-item-divider>\n          <ion-label>Mercado Pago</ion-label>\n        </ion-item-divider> \n\n        <ion-item>\n          <ion-label>\n            <ion-text>Pago:</ion-text>\n            <ion-text class=\"ion-float-right\">{{payment.payment_id}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-text>Orden:</ion-text>\n            <ion-text class=\"ion-float-right\">{{payment.order_id}}</ion-text>\n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n\n      <br *ngIf=\"isApproved\">\n      <ion-item-group *ngIf=\"isApproved\">\n\n        <ion-item-divider>\n          <ion-label>Autor</ion-label>\n        </ion-item-divider> \n\n        <ion-item>\n          <ion-label class=\"ion-text-center\">\n            <ion-avatar slot=\"start\" style=\"margin: auto;\">\n              <ion-img \n                [src]=\"payment.user.photo ? payment.user.photo.urlCompleteThumb : 'assets/images/user.png'\">\n              </ion-img>\n            </ion-avatar>\n\n            {{payment.user.completeName}}\n          </ion-label>\n        </ion-item>\n\n      </ion-item-group>\n\n\n      <div *ngIf=\"noPaid\">\n        <app-btn-paid\n          (onBack)=\"changePlan()\"\n          (onClose)=\"close()\"\n          textBack = \"Cambiar plan\"\n          [preference_id] = \"payment.preference_id\"\n        ></app-btn-paid>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/payment/create/create-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment/create/create-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function() { return CreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.page */ "./src/app/pages/payment/create/create.page.ts");




var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
    }
];
var CreatePageRoutingModule = /** @class */ (function () {
    function CreatePageRoutingModule() {
    }
    CreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreatePageRoutingModule);
    return CreatePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/create/create.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/create/create.module.ts ***!
  \*******************************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-routing.module */ "./src/app/pages/payment/create/create-routing.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/pages/payment/create/create.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/create/create.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/create/create.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub {\n  font-size: larger;\n  margin-bottom: 10px;\n}\n\n.team {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNLLGtCQUFBO0FBQ0wiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YntcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGVhbXtcbiAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/payment/create/create.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/payment/create/create.page.ts ***!
  \*****************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








var CreatePage = /** @class */ (function () {
    function CreatePage(request, route, dialogService, util, navCtrl) {
        this.request = request;
        this.route = route;
        this.dialogService = dialogService;
        this.util = util;
        this.navCtrl = navCtrl;
        this.plans = [];
        this.planSelect = false;
        this.modelPayment = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]("Payment", request);
        this.team_id = this.route.snapshot.paramMap.get('team_id');
    }
    CreatePage.prototype.ngOnInit = function () {
        this.loadPlans();
        //this.preferenceApi();
    };
    CreatePage.prototype.loadPlans = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        this.modelPayment.api_function('api_getPlans').subscribe(function (response) {
                            if (response.status == 'success') {
                                Object.values(response.data).forEach(function (element) {
                                    _this.plans.push(element);
                                });
                            }
                            else {
                                alert('Error al obtener Planes');
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
    CreatePage.prototype.preferenceApi = function (plan) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        console.log('preference api');
                        this.modelPayment.api_function('findPaymentTeam', { team_id: this.team_id, plan_id: plan.id }).subscribe(function (response) {
                            _this.dialogService.dimissLoaging();
                            console.log(response);
                            if (response['status'] == 'success') {
                                _this.payment = response['data'];
                            }
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                            console.error(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CreatePage.prototype, "isApproved", {
        get: function () {
            return this.payment ? this.payment.status == 'approved' : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePage.prototype, "noPaid", {
        get: function () {
            return this.payment ? (this.payment.status == 'created' || this.payment.status == 'pending') : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePage.prototype, "isFailure", {
        get: function () {
            return this.payment ? this.payment.status == 'rejected' : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePage.prototype, "status", {
        get: function () {
            if (!this.payment)
                return '';
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
        },
        enumerable: false,
        configurable: true
    });
    CreatePage.prototype.selectPlan = function (plan) {
        this.planSelect = true;
        this.preferenceApi(plan);
    };
    CreatePage.prototype.changePlan = function () {
        this.payment = null;
        this.planSelect = !this.planSelect;
    };
    CreatePage.prototype.close = function () {
        this.navCtrl.back();
    };
    CreatePage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
    ]; };
    CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/create/create.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create.page.scss */ "./src/app/pages/payment/create/create.page.scss")).default]
        })
    ], CreatePage);
    return CreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-create-create-module.js.map