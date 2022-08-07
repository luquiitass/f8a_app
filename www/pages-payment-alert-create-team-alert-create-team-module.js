(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-alert-create-team-alert-create-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Suscripción pendiente</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-text class=\"text\">\n        Para que los administradores de este equipo puedan crear y modificar : \n      </ion-text>\n      <ul>\n        <li>Jugadores</li>\n        <li>Redes sociales</li>\n        <li>Canchas</li>\n        <li>Nombre</li>\n        <li>Fotos de portada y escudo</li>\n        <li>Sucesos de partidos</li>\n        <li>Mas...</li>\n      </ul>\n      <ion-text class=\"text\">\n        Es necesario que el equipo se encuentre subscrito.\n      </ion-text>\n\n      <br>\n      <div class=\"ion-margin-top ionic-text-center\">\n        <ion-button (click)=\"goPayment()\" class=\"ion-float-right\" > Subscribir equipo</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/alert-create-team/alert-create-team-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/payment/alert-create-team/alert-create-team-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AlertCreateTeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPageRoutingModule", function() { return AlertCreateTeamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-create-team.page */ "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts");




var routes = [
    {
        path: '',
        component: _alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__["AlertCreateTeamPage"]
    }
];
var AlertCreateTeamPageRoutingModule = /** @class */ (function () {
    function AlertCreateTeamPageRoutingModule() {
    }
    AlertCreateTeamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AlertCreateTeamPageRoutingModule);
    return AlertCreateTeamPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/alert-create-team/alert-create-team.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/payment/alert-create-team/alert-create-team.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AlertCreateTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPageModule", function() { return AlertCreateTeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alert_create_team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-create-team-routing.module */ "./src/app/pages/payment/alert-create-team/alert-create-team-routing.module.ts");
/* harmony import */ var _alert_create_team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-create-team.page */ "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts");







var AlertCreateTeamPageModule = /** @class */ (function () {
    function AlertCreateTeamPageModule() {
    }
    AlertCreateTeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _alert_create_team_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertCreateTeamPageRoutingModule"]
            ],
            declarations: [_alert_create_team_page__WEBPACK_IMPORTED_MODULE_6__["AlertCreateTeamPage"]]
        })
    ], AlertCreateTeamPageModule);
    return AlertCreateTeamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/payment/alert-create-team/alert-create-team.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9hbGVydC1jcmVhdGUtdGVhbS9hbGVydC1jcmVhdGUtdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9hbGVydC1jcmVhdGUtdGVhbS9hbGVydC1jcmVhdGUtdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment/alert-create-team/alert-create-team.page.ts ***!
  \***************************************************************************/
/*! exports provided: AlertCreateTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPage", function() { return AlertCreateTeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






var AlertCreateTeamPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlertCreateTeamPage, _super);
    function AlertCreateTeamPage(viewCtrl, router, navParams, location) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.viewCtrl = viewCtrl;
        _this.router = router;
        _this.navParams = navParams;
        _this.id = navParams.get('id');
        return _this;
    }
    AlertCreateTeamPage.prototype.ngOnInit = function () {
    };
    AlertCreateTeamPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        //throw new Error("Method not implemented.");
    };
    AlertCreateTeamPage.prototype.initObject = function () {
        //throw new Error("Method not implemented.");
    };
    AlertCreateTeamPage.prototype.goPayment = function () {
        this.router.navigateByUrl('/payment/create/' + this.id);
        this.close();
    };
    AlertCreateTeamPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] }
    ]; };
    AlertCreateTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-create-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert-create-team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert-create-team.page.scss */ "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss")).default]
        })
    ], AlertCreateTeamPage);
    return AlertCreateTeamPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]));



/***/ })

}]);
//# sourceMappingURL=pages-payment-alert-create-team-alert-create-team-module.js.map