(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-send-admins-send-admins-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/send-admins/send-admins.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/send-admins/send-admins.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Enviar Emails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        Email para informar que deben cargar los resultados.\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/email/send-admins/send-admins-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/email/send-admins/send-admins-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SendAdminsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAdminsPageRoutingModule", function() { return SendAdminsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _send_admins_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-admins.page */ "./src/app/pages/email/send-admins/send-admins.page.ts");




var routes = [
    {
        path: '',
        component: _send_admins_page__WEBPACK_IMPORTED_MODULE_3__["SendAdminsPage"]
    }
];
var SendAdminsPageRoutingModule = /** @class */ (function () {
    function SendAdminsPageRoutingModule() {
    }
    SendAdminsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SendAdminsPageRoutingModule);
    return SendAdminsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/email/send-admins/send-admins.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/email/send-admins/send-admins.module.ts ***!
  \***************************************************************/
/*! exports provided: SendAdminsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAdminsPageModule", function() { return SendAdminsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _send_admins_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-admins-routing.module */ "./src/app/pages/email/send-admins/send-admins-routing.module.ts");
/* harmony import */ var _send_admins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-admins.page */ "./src/app/pages/email/send-admins/send-admins.page.ts");







var SendAdminsPageModule = /** @class */ (function () {
    function SendAdminsPageModule() {
    }
    SendAdminsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _send_admins_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendAdminsPageRoutingModule"]
            ],
            declarations: [_send_admins_page__WEBPACK_IMPORTED_MODULE_6__["SendAdminsPage"]]
        })
    ], SendAdminsPageModule);
    return SendAdminsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/email/send-admins/send-admins.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/email/send-admins/send-admins.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtYWlsL3NlbmQtYWRtaW5zL3NlbmQtYWRtaW5zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/email/send-admins/send-admins.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/email/send-admins/send-admins.page.ts ***!
  \*************************************************************/
/*! exports provided: SendAdminsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAdminsPage", function() { return SendAdminsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SendAdminsPage = /** @class */ (function () {
    function SendAdminsPage() {
    }
    SendAdminsPage.prototype.ngOnInit = function () {
    };
    SendAdminsPage.ctorParameters = function () { return []; };
    SendAdminsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-admins',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./send-admins.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/email/send-admins/send-admins.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./send-admins.page.scss */ "./src/app/pages/email/send-admins/send-admins.page.scss")).default]
        })
    ], SendAdminsPage);
    return SendAdminsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-email-send-admins-send-admins-module.js.map