(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-password-reset-password-reset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset/password-reset.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset/password-reset.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Restaurar contraseña</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login\" ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n      <ion-card *ngIf=\"error.length\">\n        <ion-card-content>\n\n          <ion-text color=\"danger\" *ngIf=\"error\">\n            {{error}}\n          </ion-text>\n  \n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-item>\n        <ion-label position=\"floating\" >Email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"data.email\" name=\"email\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\" >Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"data.password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\" >Confirmar contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"data.password_confirmation\" name=\"password_confirmation\"></ion-input>\n      </ion-item>\n\n      <div class=\"ion-text-center ion-margin-top\">\n        <ion-button (click)=\"resetPassword()\" [disabled]=\"process\" >\n          <ion-spinner name=\"lines\" *ngIf=\"process\" ></ion-spinner>\n          Restaurar contraseña\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/password-reset/password-reset-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordResetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageRoutingModule", function() { return PasswordResetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset.page */ "./src/app/pages/password-reset/password-reset.page.ts");




const routes = [
    {
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordResetPage"]
    }
];
let PasswordResetPageRoutingModule = class PasswordResetPageRoutingModule {
};
PasswordResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasswordResetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/password-reset/password-reset.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.module.ts ***!
  \***************************************************************/
/*! exports provided: PasswordResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-reset-routing.module */ "./src/app/pages/password-reset/password-reset-routing.module.ts");
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset.page */ "./src/app/pages/password-reset/password-reset.page.ts");







let PasswordResetPageModule = class PasswordResetPageModule {
};
PasswordResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPageRoutingModule"]
        ],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordResetPage"]]
    })
], PasswordResetPageModule);



/***/ }),

/***/ "./src/app/pages/password-reset/password-reset.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/password-reset/password-reset.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/password-reset/password-reset.page.ts ***!
  \*************************************************************/
/*! exports provided: PasswordResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function() { return PasswordResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");




let PasswordResetPage = class PasswordResetPage {
    constructor(route, authUser, router) {
        this.route = route;
        this.authUser = authUser;
        this.router = router;
        this.error = '';
        this.process = false;
        this.data = {
            token: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
        this.data.token = this.route.snapshot.paramMap.get('token');
        this.data.email = this.route.snapshot.paramMap.get('email');
    }
    ngOnInit() {
    }
    resetPassword() {
        this.error = '';
        this.process = true;
        this.authUser.resetPassword(this.data).subscribe(response => {
            console.log(response);
            if (response['status'] === 'success') {
                this.router.navigateByUrl('/login');
            }
            else if (response['status'] == 'error') {
                this.error = response['msjError'];
            }
            this.process = false;
        }, error => {
            console.error(error);
            if (error['error'] && error['error']['errorValidaciones'])
                this.error = error['error']['errorValidaciones'];
            if (this.error == 'The given data failed to pass validation.') {
                this.error = 'Los datos proporcionados no pasaron la validación.';
            }
            this.process = false;
        });
    }
};
PasswordResetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PasswordResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-reset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset/password-reset.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./password-reset.page.scss */ "./src/app/pages/password-reset/password-reset.page.scss")).default]
    })
], PasswordResetPage);



/***/ })

}]);
//# sourceMappingURL=pages-password-reset-password-reset-module-es2015.js.map