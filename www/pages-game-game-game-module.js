(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-game-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game/game.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game/game.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/games\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\" >\n\n      <ion-button routerLink=\"/export/{{id}}\" routerDirection=\"forward\" >\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-button>\n      \n      <!-- <ion-button (click)=\"shareService.shareGameFacebook(id)\" style=\"background: #4267B2      \">\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-button> -->\n      \n      <ion-button (click)=\"confirmDelete()\" *ngIf=\"isAdminTeam\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"game\" *ngIf=\"game\" >\n    \n    \n    <app-game-list\n      [game] = \"game\">\n    </app-game-list>\n\n    <div class=\"ion-text-center\" *ngIf=\"game.status == 'Pendiente' && isFinish() && isAdminTeam\">\n      <ion-button (click)=\"addResult()\">Añadir resultado</ion-button>\n    </div>\n\n\n    <div class=\"ion-text-center\">\n      <ion-badge color=\"tertiary\">{{game.status}}</ion-badge>\n    </div>\n   \n\n    <ion-card *ngIf=\"game.location\">\n      <ion-card-header>\n        <ion-card-subtitle>Ubicación</ion-card-subtitle>\n        <ion-card-title>{{game.location}}</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n\n    <div *ngIf=\"game && game.field_id\">\n      <div class=\"ub\">\n        Ubicación\n      </div>\n        <app-show-map\n          [field]=\"game.field\"\n          [showDirection]=\"true\"\n        ></app-show-map>\n    </div>\n\n    <app-old-next-game\n      [game]=\"game.oldGame\"\n    ></app-old-next-game>\n   \n   \n    <app-comments\n      [idRelation]=\"id\"\n      [nameRelationModel]=\"'Game'\"\n    ></app-comments>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/game/game-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game/game/game-routing.module.ts ***!
  \********************************************************/
/*! exports provided: GamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageRoutingModule", function() { return GamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.page */ "./src/app/pages/game/game/game.page.ts");




var routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_3__["GamePage"]
    }
];
var GamePageRoutingModule = /** @class */ (function () {
    function GamePageRoutingModule() {
    }
    GamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GamePageRoutingModule);
    return GamePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/game/game/game.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/game/game/game.module.ts ***!
  \************************************************/
/*! exports provided: GamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/pages/game/game/game-routing.module.ts");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.page */ "./src/app/pages/game/game/game.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var GamePageModule = /** @class */ (function () {
    function GamePageModule() {
    }
    GamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _game_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamePageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_game_page__WEBPACK_IMPORTED_MODULE_6__["GamePage"]]
        })
    ], GamePageModule);
    return GamePageModule;
}());



/***/ }),

/***/ "./src/app/pages/game/game/game.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/game/game/game.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ub {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lL2dhbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lL2dhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVie1xuICAgIG1hcmdpbjogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/game/game/game.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/game/game/game.page.ts ***!
  \**********************************************/
/*! exports provided: GamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePage", function() { return GamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_result_add_result_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-result/add-result.page */ "./src/app/pages/game/add-result/add-result.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_lists_home_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/lists-home.service */ "./src/app/services/lists-home.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/sharer.service */ "./src/app/services/sharer.service.ts");
/* harmony import */ var src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/screen-loading.service */ "./src/app/services/screen-loading.service.ts");














var GamePage = /** @class */ (function () {
    function GamePage(route, requesService, util, dialogService, modalController, router, navCtrl, listsHomeService, authUser, shareService, loading) {
        this.route = route;
        this.requesService = requesService;
        this.util = util;
        this.dialogService = dialogService;
        this.modalController = modalController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.listsHomeService = listsHomeService;
        this.authUser = authUser;
        this.shareService = shareService;
        this.loading = loading;
        this.firstLoading = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requesService);
    }
    GamePage.prototype.ngOnInit = function () {
        this.init();
        this.analyzeParameters();
    };
    GamePage.prototype.init = function (event) {
        if (event === void 0) { event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.firstLoading) {
                    this.loading.start();
                    //await this.dialogService.loadingProgres();
                    this.firstLoading = false;
                }
                this.gameModel.api_functionModel(this.id, 'dataProfile').subscribe(function (data) {
                    if (data['status'] == 'success')
                        _this.game = data['data'];
                    //console.log('Game',this.game);
                    _this.isFinish();
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
    GamePage.prototype.addResult = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_result_add_result_page__WEBPACK_IMPORTED_MODULE_8__["AddResultPage"],
                            componentProps: {
                                game: this.game
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data['game']) {
                                _this.game = _this.game;
                                _this.listsHomeService.remove('games', _this.game.id);
                                _this.router.navigateByUrl('results/profile/' + _this.game.id);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GamePage.prototype.isFinish = function () {
        var dateString = this.game.date + " " + this.game.time;
        var dateEnable = moment__WEBPACK_IMPORTED_MODULE_9__(dateString).add(2, 'hours');
        var now = new Date();
        return moment__WEBPACK_IMPORTED_MODULE_9__(now).isAfter(dateEnable);
    };
    GamePage.prototype.confirmDelete = function () {
        var _this = this;
        this.dialogService.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este game', function (e) {
            _this.delete();
        });
    };
    GamePage.prototype.delete = function () {
        var _this = this;
        this.gameModel.api_delete(this.game.id).subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                _this.dialogService.showToast('Partido Eliminado', null, 'success');
                //this.router.navigateByUrl('/home/games',{ replaceUrl: true });
                //window.location.assign('#/home/games')
                _this.listsHomeService.remove('games', _this.game.id);
                _this.navCtrl.navigateRoot('/home/games');
                //this.gameService.listDelete(game.id);
                //this.utilArray.listDelete(this.games,game.id)
            }
        });
    };
    GamePage.prototype.analyzeParameters = function () {
        var reload = this.route.snapshot.queryParamMap.get('reload');
        console.log('reload:', reload);
    };
    Object.defineProperty(GamePage.prototype, "isAdminTeam", {
        get: function () {
            return this.authUser.isAdminGame(this.game) || this.authUser.isAdmin();
        },
        enumerable: false,
        configurable: true
    });
    GamePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: src_app_services_lists_home_service__WEBPACK_IMPORTED_MODULE_10__["ListsHomeService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__["AuthUserService"] },
        { type: src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_12__["SharerService"] },
        { type: src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_13__["ScreenLoadingService"] }
    ]; };
    GamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./game.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game/game.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game.page.scss */ "./src/app/pages/game/game/game.page.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../home/games/games.page.scss */ "./src/app/pages/home/games/games.page.scss")).default]
        })
    ], GamePage);
    return GamePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-game-game-game-module.js.map