(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/home/home.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/home/home.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Admin home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item  routerLink=\"/\" routerDirection=\"forward\">\n      <ion-label>Home user</ion-label>\n    </ion-item>\n    <ion-item  routerLink=\"/categories\" routerDirection=\"forward\">\n      <ion-label>Categorias</ion-label>\n    </ion-item>\n    <ion-item  routerLink=\"/positions\" routerDirection=\"forward\">\n      <ion-label>Posiciones</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/typesEvent\" routerDirection=\"forward\">\n      <ion-label>Tipo de Evento</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/teams\" routerDirection=\"forward\">\n      <ion-label>Equipos</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/games\" routerDirection=\"forward\">\n      <ion-label>Partidos</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/players\" routerDirection=\"forward\">\n      <ion-label>Jugadores</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/users\" routerDirection=\"forward\">\n      <ion-label>Users</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/errors\" routerDirection=\"forward\">\n      <ion-label>Errores</ion-label>\n    </ion-item>\n    <ion-item (click)=\"search()\">\n      <ion-label>Search</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/send-admins\" routerDirection=\"forward\">\n      <ion-label>Enviar emails</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/messaging\" routerDirection=\"forward\">\n      <ion-label>Notificar usuarios</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/list-fields\" routerDirection=\"forward\">\n      <ion-label>Canchas</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-label>Logout</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/admin/home/home-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/home/home-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/admin/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/home/home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/admin/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/admin/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/home/home.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/home/home.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/admin/home/home.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/admin/home/home.page.ts ***!
  \***********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





var HomePage = /** @class */ (function () {
    function HomePage(userAuthService, modalController) {
        this.userAuthService = userAuthService;
        this.modalController = modalController;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.logout = function () {
        this.userAuthService.logout();
    };
    HomePage.prototype.search = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"],
                            componentProps: {
                                cancellable: false,
                                model: 'User',
                                function: 'searchUser',
                                multiple: false
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var game = data.data['item'];
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/admin/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-home-home-module.js.map