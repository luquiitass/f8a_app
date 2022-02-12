(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-new-challenge-new-challenge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/new-challenge/new-challenge.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/new-challenge/new-challenge.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/notifications\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"game\">\n    <app-game-list\n      [game] = \"game\">\n    </app-game-list>\n\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Fecha</ion-label>\n      </ion-item-divider>\n    \n      <ion-item>\n        <ion-label class=\"ion-text-center\">\n          <ion-text>{{game.date}}</ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group *ngIf=\"game.location\">\n      <br>\n      <ion-item-divider>\n        <ion-label>Lugar</ion-label>\n      </ion-item-divider>\n    \n      <ion-item>\n        <ion-label class=\"ion-text-center\">  \n          <ion-text >{{game.location}}</ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n    <br>\n\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>EquipoLocal</ion-label>\n      </ion-item-divider>\n    \n      <ion-item>\n        <ion-label class=\"ion-text-center\">\n          <ion-text>{{game.team_l.name}}</ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <div *ngIf=\"game.status == 'Created'\"  class=\"ion-text-center\"> \n      <div class=\" msj-content msj ion-text-center\">\n        Debes confirmar el partido para que todos puedan verlo\n      </div>\n      <ion-button  color=\"success\" class=\"center\" (click)=\"confirm()\">Confirmar partido</ion-button>\n    </div>\n  \n    <div *ngIf=\"game.status == 'Pendiente'\" class=\"ion-text-center\">\n      <div class=\"msj-content msj ion-text-center\">\n        El partido ha sido confirmado por un Administrador\n      </div>\n      <ion-button  color=\"danger\" (click)=\"cancel()\">Cancelar Partido</ion-button>\n    </div>\n\n    <div *ngIf=\"game.status == 'Cancelado'\">\n      <div class=\"msj-content msj ion-text-center\" >\n        Este partido ha sido cancelado por un Administrador\n      </div>\n    </div>\n\n\n  </div>\n\n\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/new-challenge/new-challenge-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/game/new-challenge/new-challenge-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: NewChallengePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChallengePageRoutingModule", function() { return NewChallengePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_challenge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-challenge.page */ "./src/app/pages/game/new-challenge/new-challenge.page.ts");




const routes = [
    {
        path: '',
        component: _new_challenge_page__WEBPACK_IMPORTED_MODULE_3__["NewChallengePage"]
    }
];
let NewChallengePageRoutingModule = class NewChallengePageRoutingModule {
};
NewChallengePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewChallengePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/game/new-challenge/new-challenge.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/game/new-challenge/new-challenge.module.ts ***!
  \******************************************************************/
/*! exports provided: NewChallengePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChallengePageModule", function() { return NewChallengePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_challenge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-challenge-routing.module */ "./src/app/pages/game/new-challenge/new-challenge-routing.module.ts");
/* harmony import */ var _new_challenge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-challenge.page */ "./src/app/pages/game/new-challenge/new-challenge.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








let NewChallengePageModule = class NewChallengePageModule {
};
NewChallengePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_challenge_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewChallengePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_new_challenge_page__WEBPACK_IMPORTED_MODULE_6__["NewChallengePage"]]
    })
], NewChallengePageModule);



/***/ }),

/***/ "./src/app/pages/game/new-challenge/new-challenge.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/game/new-challenge/new-challenge.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvbmV3LWNoYWxsZW5nZS9uZXctY2hhbGxlbmdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/game/new-challenge/new-challenge.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/game/new-challenge/new-challenge.page.ts ***!
  \****************************************************************/
/*! exports provided: NewChallengePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChallengePage", function() { return NewChallengePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");







let NewChallengePage = class NewChallengePage {
    constructor(route, requesService, util, dialogService) {
        this.route = route;
        this.requesService = requesService;
        this.util = util;
        this.dialogService = dialogService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requesService);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            this.gameModel.api_find(this.id).subscribe(response => {
                if (response['status'] == 'success') {
                    this.game = response['Game'];
                }
                this.dialogService.dimissLoaging();
            }, error => {
                this.dialogService.dimissLoaging();
            }, () => {
                this.dialogService.dimissLoaging();
            });
        });
    }
    confirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            this.gameModel.api_functionModel(this.id, 'confirm').subscribe(response => {
                this.game = response['data'];
                this.dialogService.dimissLoaging();
            }, error => {
                this.dialogService.dimissLoaging();
            }, () => {
                this.dialogService.dimissLoaging();
            });
        });
    }
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            this.gameModel.api_functionModel(this.id, 'cancel').subscribe(response => {
                this.game = response['data'];
                this.dialogService.dimissLoaging();
            }, error => {
                this.dialogService.dimissLoaging();
            }, () => {
                this.dialogService.dimissLoaging();
            });
        });
    }
};
NewChallengePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
];
NewChallengePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-challenge',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-challenge.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/new-challenge/new-challenge.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-challenge.page.scss */ "./src/app/pages/game/new-challenge/new-challenge.page.scss")).default]
    })
], NewChallengePage);



/***/ })

}]);
//# sourceMappingURL=pages-game-new-challenge-new-challenge-module-es2015.js.map