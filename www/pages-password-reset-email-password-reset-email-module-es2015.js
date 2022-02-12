(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-password-reset-email-password-reset-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset-email/password-reset-email.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset-email/password-reset-email.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Restaurar contraseña</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/login\" ></ion-back-button>\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n\n      <ion-card>\n        <ion-card-content>\n          <ion-text color=\"dark\">\n            <h3 class=\"msj\">Ingresa tu correo electrónico y te enviaremos un link para restaurar tu contraseña.</h3>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"error.length  || sendSuccess\">\n        <ion-card-content>\n\n          <ion-text color=\"danger\" *ngIf=\"error.length\">\n            {{error}}\n          </ion-text>\n    \n          \n          <ion-text *ngIf=\"sendSuccess\" color=\"success\" class=\"msj\">\n            <h3>El email ha sido enviado.</h3>\n            <h3>Hemos enviado un enlace para recuperar tu contraseña.</h3>\n\n          </ion-text>\n\n          \n          \n        </ion-card-content>\n      </ion-card>\n     \n\n      <ion-item *ngIf=\"!sendSuccess\">\n        <ion-label position=\"floating\" >Email</ion-label>\n        <ion-input type=\"email\" [(ngModel)]=\"email\" name=\"email\" required ></ion-input>\n      </ion-item>\n\n     \n     \n      <div class=\"ion-text-center ion-margin-top\">\n        <ion-button  *ngIf=\"!sendSuccess\" (click)=\"send()\" [disabled]=\"process\">\n          <ion-spinner name=\"lines\" *ngIf=\"process\" ></ion-spinner>\n          {{ !process ? 'Enviar' : '' }}  \n        </ion-button>\n\n\n        <ion-button *ngIf=\"sendSuccess\"  routerLink=\"/login\" routerDirection=\"forward\">\n          Atrás\n        </ion-button>\n\n      </div>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/password-reset-email/password-reset-email-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/password-reset-email/password-reset-email-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PasswordResetEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetEmailPageRoutingModule", function() { return PasswordResetEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _password_reset_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset-email.page */ "./src/app/pages/password-reset-email/password-reset-email.page.ts");




const routes = [
    {
        path: '',
        component: _password_reset_email_page__WEBPACK_IMPORTED_MODULE_3__["PasswordResetEmailPage"]
    }
];
let PasswordResetEmailPageRoutingModule = class PasswordResetEmailPageRoutingModule {
};
PasswordResetEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasswordResetEmailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/password-reset-email/password-reset-email.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/password-reset-email/password-reset-email.module.ts ***!
  \***************************************************************************/
/*! exports provided: PasswordResetEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetEmailPageModule", function() { return PasswordResetEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _password_reset_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-reset-email-routing.module */ "./src/app/pages/password-reset-email/password-reset-email-routing.module.ts");
/* harmony import */ var _password_reset_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset-email.page */ "./src/app/pages/password-reset-email/password-reset-email.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let PasswordResetEmailPageModule = class PasswordResetEmailPageModule {
};
PasswordResetEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _password_reset_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordResetEmailPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_password_reset_email_page__WEBPACK_IMPORTED_MODULE_6__["PasswordResetEmailPage"]]
    })
], PasswordResetEmailPageModule);



/***/ }),

/***/ "./src/app/pages/password-reset-email/password-reset-email.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/password-reset-email/password-reset-email.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkLXJlc2V0LWVtYWlsL3Bhc3N3b3JkLXJlc2V0LWVtYWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/password-reset-email/password-reset-email.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/password-reset-email/password-reset-email.page.ts ***!
  \*************************************************************************/
/*! exports provided: PasswordResetEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetEmailPage", function() { return PasswordResetEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");




let PasswordResetEmailPage = class PasswordResetEmailPage {
    constructor(authUser, chatService) {
        this.authUser = authUser;
        this.chatService = chatService;
        this.email = '';
        this.error = '';
        this.process = false;
        this.sendSuccess = false;
    }
    ngOnInit() {
    }
    send() {
        if (this.email.length == 0) {
            return;
        }
        this.process = true;
        this.authUser.sendEmailResetPassword(this.email).subscribe(response => {
            console.log(response);
            if (response == 'passwords.sent') {
                this.sendSuccess = true;
                this.error = '';
            }
            else if (response == 'passwords.user') {
                this.sendSuccess = false;
                this.error = 'No se encuentra registrado el email ingresado';
            }
            this.process = false;
        }, error => {
            this.process = false;
        });
    }
    ngOnDestroy() {
        console.log('destroy');
        this.sendSuccess = false;
    }
};
PasswordResetEmailPage.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }
];
PasswordResetEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset-email',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password-reset-email.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset-email/password-reset-email.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./password-reset-email.page.scss */ "./src/app/pages/password-reset-email/password-reset-email.page.scss")).default]
    })
], PasswordResetEmailPage);



/***/ })

}]);
//# sourceMappingURL=pages-password-reset-email-password-reset-email-module-es2015.js.map