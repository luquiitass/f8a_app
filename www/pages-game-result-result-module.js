(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-result-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/result/result.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/result/result.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/results\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\" >\n\n      <ion-button routerLink=\"/export/{{id}}\" routerDirection=\"forward\" >\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-button>\n     \n      <!-- <ion-button (click)=\"shareService.shareGameFacebook(id)\" style=\"background: #4267B2      \">\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-button> -->\n\n      <ion-button (click)=\"confirmDelete()\" *ngIf=\"isAdminTeam\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"game\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-result-item\n    *ngIf=\"game\"\n    [game]=\"game\"\n  ></app-result-item>\n\n\n  <div class=\"ion-text-center\">\n    <ion-badge color=\"danger\">{{game.status == 'Jugado' ? 'Finalizado' : game.status }}</ion-badge>\n    <br>\n    <ion-item-group *ngIf=\"game.description\">\n      <ion-item-divider>\n        <ion-label>Motivo</ion-label>\n      </ion-item-divider>\n    \n      <ion-item>\n        <ion-label>{{game.description}}</ion-label>\n      </ion-item>\n    </ion-item-group>\n  </div>\n\n\n  <app-event-list [game_id]=\"id\" ></app-event-list> \n\n  <app-comments\n    [idRelation]=\"id\"\n    [nameRelationModel]=\"'Game'\"\n  ></app-comments>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/result/result-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/game/result/result-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageRoutingModule", function() { return ResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result.page */ "./src/app/pages/game/result/result.page.ts");




var routes = [
    {
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_3__["ResultPage"]
    }
];
var ResultPageRoutingModule = /** @class */ (function () {
    function ResultPageRoutingModule() {
    }
    ResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ResultPageRoutingModule);
    return ResultPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/game/result/result.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/game/result/result.module.ts ***!
  \****************************************************/
/*! exports provided: ResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result-routing.module */ "./src/app/pages/game/result/result-routing.module.ts");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result.page */ "./src/app/pages/game/result/result.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var ResultPageModule = /** @class */ (function () {
    function ResultPageModule() {
    }
    ResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _result_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]]
        })
    ], ResultPageModule);
    return ResultPageModule;
}());



/***/ }),

/***/ "./src/app/pages/game/result/result.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/game/result/result.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvcmVzdWx0L3Jlc3VsdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/game/result/result.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/game/result/result.page.ts ***!
  \**************************************************/
/*! exports provided: ResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPage", function() { return ResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_lists_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/lists-home.service */ "./src/app/services/lists-home.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sharer.service */ "./src/app/services/sharer.service.ts");
/* harmony import */ var src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/screen-loading.service */ "./src/app/services/screen-loading.service.ts");













var ResultPage = /** @class */ (function () {
    function ResultPage(route, requesService, dialogService, socialSharing, util, listsHomeService, navCtrl, authUser, shareService, loading) {
        this.route = route;
        this.requesService = requesService;
        this.dialogService = dialogService;
        this.socialSharing = socialSharing;
        this.util = util;
        this.listsHomeService = listsHomeService;
        this.navCtrl = navCtrl;
        this.authUser = authUser;
        this.shareService = shareService;
        this.loading = loading;
        this.firstLoading = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.resultModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requesService);
        //throw new Error('error test')
    }
    ResultPage.prototype.ngOnInit = function () {
        this.init();
        this.resultModel.api_functionModel(this.id, 'setWinner').subscribe(function (response) {
            console.log('setWinner', response);
        });
    };
    ResultPage.prototype.init = function (event) {
        if (event === void 0) { event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.firstLoading) {
                    this.loading.start();
                    //await this.dialogService.loadingProgres();
                    this.firstLoading = false;
                }
                this.resultModel.api_functionModel(this.id, 'dataProfile').subscribe(function (data) {
                    if (data['status'] == 'success')
                        _this.game = data['data'];
                    if (event)
                        event.target.complete();
                    //this.dialogService.dimissLoaging();
                    _this.loading.end();
                }, function (error) {
                    //this.dialogService.dimissLoaging();
                    _this.loading.end();
                });
                return [2 /*return*/];
            });
        });
    };
    ResultPage.prototype.sendInstagram = function () {
        this.socialSharing.shareViaInstagram('Imagen', 'https://api.futbol-alem.com/imagecache/original/8lNFig1mR35YTYU.png');
    };
    ResultPage.prototype.share = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.util.share()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultPage.prototype.confirmDelete = function () {
        var _this = this;
        this.dialogService.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este game', function (e) {
            _this.delete();
        });
    };
    ResultPage.prototype.delete = function () {
        var _this = this;
        this.resultModel.api_delete(this.game.id).subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                _this.dialogService.showToast('Partido Eliminado', null, 'success');
                _this.listsHomeService.remove('results', _this.game.id);
                _this.navCtrl.navigateRoot('/home/results');
            }
        });
    };
    Object.defineProperty(ResultPage.prototype, "isAdminTeam", {
        get: function () {
            return this.authUser.isAdminGame(this.game) || this.authUser.isAdmin();
        },
        enumerable: false,
        configurable: true
    });
    ResultPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] },
        { type: src_app_services_lists_home_service__WEBPACK_IMPORTED_MODULE_9__["ListsHomeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_10__["AuthUserService"] },
        { type: src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_11__["SharerService"] },
        { type: src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_12__["ScreenLoadingService"] }
    ]; };
    ResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/result/result.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./result.page.scss */ "./src/app/pages/game/result/result.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../home/results/results.page.scss */ "./src/app/pages/home/results/results.page.scss")).default]
        })
    ], ResultPage);
    return ResultPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-game-result-result-module.js.map