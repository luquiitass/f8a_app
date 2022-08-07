(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-pending-pending-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/pending/pending.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/pending/pending.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago pendiente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/pending/pending-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment/pending/pending-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PendingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPageRoutingModule", function() { return PendingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pending.page */ "./src/app/pages/payment/pending/pending.page.ts");




var routes = [
    {
        path: '',
        component: _pending_page__WEBPACK_IMPORTED_MODULE_3__["PendingPage"]
    }
];
var PendingPageRoutingModule = /** @class */ (function () {
    function PendingPageRoutingModule() {
    }
    PendingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PendingPageRoutingModule);
    return PendingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/pending/pending.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/pending/pending.module.ts ***!
  \*********************************************************/
/*! exports provided: PendingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPageModule", function() { return PendingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pending_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-routing.module */ "./src/app/pages/payment/pending/pending-routing.module.ts");
/* harmony import */ var _pending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending.page */ "./src/app/pages/payment/pending/pending.page.ts");







var PendingPageModule = /** @class */ (function () {
    function PendingPageModule() {
    }
    PendingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pending_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendingPageRoutingModule"]
            ],
            declarations: [_pending_page__WEBPACK_IMPORTED_MODULE_6__["PendingPage"]]
        })
    ], PendingPageModule);
    return PendingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/pending/pending.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/pending/pending.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGVuZGluZy9wZW5kaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/payment/pending/pending.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/payment/pending/pending.page.ts ***!
  \*******************************************************/
/*! exports provided: PendingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingPage", function() { return PendingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PendingPage = /** @class */ (function () {
    function PendingPage() {
    }
    PendingPage.prototype.ngOnInit = function () {
    };
    PendingPage.ctorParameters = function () { return []; };
    PendingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pending.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/pending/pending.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pending.page.scss */ "./src/app/pages/payment/pending/pending.page.scss")).default]
        })
    ], PendingPage);
    return PendingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-pending-pending-module.js.map