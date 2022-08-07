(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-success-success-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/success/success.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/success/success.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago registrado</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"notifications\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n     <h2 class=\"ion-text-center\">Pago Confirmado</h2>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"detail\">\n    <ion-card-content>\n      detalle del pafifo\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/success/success-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment/success/success-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function() { return SuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success.page */ "./src/app/pages/payment/success/success.page.ts");




var routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }
];
var SuccessPageRoutingModule = /** @class */ (function () {
    function SuccessPageRoutingModule() {
    }
    SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SuccessPageRoutingModule);
    return SuccessPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/success/success.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/success/success.module.ts ***!
  \*********************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-routing.module */ "./src/app/pages/payment/success/success-routing.module.ts");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/pages/payment/success/success.page.ts");







var SuccessPageModule = /** @class */ (function () {
    function SuccessPageModule() {
    }
    SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]
            ],
            declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
        })
    ], SuccessPageModule);
    return SuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/success/success.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/success/success.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/payment/success/success.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/success/success.page.ts ***!
  \*******************************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");



var SuccessPage = /** @class */ (function () {
    function SuccessPage(userAuth) {
        this.userAuth = userAuth;
    }
    SuccessPage.prototype.ngOnInit = function () {
        this.userAuth.updateUserApi();
    };
    SuccessPage.ctorParameters = function () { return [
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] }
    ]; };
    SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/success/success.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./success.page.scss */ "./src/app/pages/payment/success/success.page.scss")).default]
        })
    ], SuccessPage);
    return SuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-success-success-module.js.map