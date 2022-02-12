(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding ion-align-items-center\">\n    <ion-grid >\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col class=\"ion-align-self-center\"  size-xs=\"12\">\n          <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n\n            <div class=\"ion-text-center bg-l2 icon\">\n\n              <ion-img\n                src=\"assets/icon/favicon.png\"\n              ></ion-img>\n\n            </div>\n            <div class=\"ion-padding\">\n              <ion-item>\n                <ion-input name=\"email\" type=\"email\" placeholder=\"ejemplo@gmail.com\" ngModel required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required></ion-input>\n              </ion-item>\n              \n            </div>\n            <div style=\"color: red; padding-top: 0.2rem\" >{{ authUserService.errorsLogin }}</div>\n\n            \n\n\n            <div padding>\n\n              <div class=\"ion-text-center\"  >\n                <ion-button  type=\"submit\" [disabled]=\"form.invalid\" [disabled]=\"loadingLogin\">\n                  Iniciar Sesión\n                  <ion-spinner name=\"lines\" *ngIf=\"loadingLogin\" ></ion-spinner>\n                </ion-button>\n              </div>\n\n              <div class=\"ion-text-center ion-margin-bottom ion-margin-top\">\n                <a   color=\"secondary\" routerLink=\"/password-reset-email\" routerDirection=\"forward\" >¿Olvidaste tu contraseña?</a>\n              </div>\n              \n\n              <div class=\"ion-text-center ion-margin\">\n                <ion-text >O puedes iniciar sesión con:</ion-text>\n              </div>\n\n              <div class=\"ion-text-center\">\n                <ion-button color=\"default\" style=\"background-color: #1976d2; color: white; display: none;\"  >\n                  <ion-icon name=\"logo-facebook\"></ion-icon>\n                </ion-button>\n\n                <ion-button color=\"default\" class=\"ion-padding-left ion-padding-right\" style=\"background-color: #c62828; color: white\" (click)=\"loginGoogle()\" [disabled]=\"loadingGoogle\">\n                  <ion-icon name=\"logo-google\"></ion-icon>         \n                  <ion-spinner name=\"lines\" *ngIf=\"loadingGoogle\" ></ion-spinner>      \n                </ion-button>\n              </div>\n\n              <div class=\"ion-text-center ion-margin-top rg\">\n                <ion-text >\n                  ¿Eres nuevo? <a  expand=\"block\" (click)=\"openModal()\">Regístrate</a>\n                </ion-text>\n              </div>\n             \n\n            </div>\n\n\n           \n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  height: 100%;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.icon {\n  max-width: 400px;\n  border-radius: 70px;\n  margin: auto;\n}\n\n.rg {\n  font-size: x-large;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaWNvbntcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmd7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_user_form_user_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-form/user-form.page */ "./src/app/pages/user/user-form/user-form.page.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");









let LoginPage = class LoginPage {
    constructor(authUserService, modalController, afAuth, platform, utilDialog, util) {
        this.authUserService = authUserService;
        this.modalController = modalController;
        this.afAuth = afAuth;
        this.platform = platform;
        this.utilDialog = utilDialog;
        this.util = util;
        this.loadingLogin = false;
        this.loadingGoogle = false;
    }
    ngOnInit() {
        this.authUserService.redirect();
    }
    googleAuth() {
        /*this.googlePlus.login({})
          .then(result => {
            console.log(result);
          })
          .catch(err => console.log(`GoogleAuth Error`, JSON.stringify(err)));
        //return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
        */
    }
    login(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingLogin = true;
            //await this.util.delay(500);
            this.authUserService.login(form.value).finally(() => {
                this.loadingLogin = false;
            });
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _user_user_form_user_form_page__WEBPACK_IMPORTED_MODULE_4__["UserFormPage"],
            });
            modal.onDidDismiss().then(data => {
                //const user = data.data['user'];
                //this.userService.listAddLast(user);
            });
            return yield modal.present();
        });
    }
    loginGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingGoogle = true;
            try {
                const res = yield this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth.GoogleAuthProvider());
                const user = res.user;
                const data = {
                    email: user.email,
                    first_name: user.displayName.split(' ')[1],
                    last_name: user.displayName.split(' ')[0],
                    photoURL: user.photoURL
                };
                console.log(user);
                console.log(data);
                this.authUserService.loginSocial(data).finally(() => {
                    this.loadingGoogle = false;
                    console.log('loadingGoogle', this.loadingGoogle);
                });
                //this.picture = user.photoURL;
                //this.name = user.displayName;
                //this.email = user.email;
            }
            catch (e) {
                console.log(e);
                this.loadingGoogle = false;
                this.utilDialog.showToast('Error al iniciar sesión con Google', null, 'danger');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map