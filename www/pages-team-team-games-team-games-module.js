(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-team-games-team-games-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team-games/team-games.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team-games/team-games.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Partidos de {{team ? team.name : ''}}</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/team/profile/{{team? team.id : ''}}\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf=\"team\">\n    <ion-list-header *ngIf=\"team.games.length == 0\"  color=\"info\">\n      <ion-label>Sin registros</ion-label>\n    </ion-list-header>\n\n\n    <div *ngFor=\"let game of team.games\"> \n      <app-old-next-game\n        [game]=\"game\"\n        [withTitle]=\"false\"\n        (onDeleteGame)=\"deleteGame($event)\"\n      ></app-old-next-game>\n    </div>\n\n  </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/team-games/team-games-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/team/team-games/team-games-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TeamGamesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGamesPageRoutingModule", function() { return TeamGamesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_games_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-games.page */ "./src/app/pages/team/team-games/team-games.page.ts");




var routes = [
    {
        path: '',
        component: _team_games_page__WEBPACK_IMPORTED_MODULE_3__["TeamGamesPage"]
    }
];
var TeamGamesPageRoutingModule = /** @class */ (function () {
    function TeamGamesPageRoutingModule() {
    }
    TeamGamesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TeamGamesPageRoutingModule);
    return TeamGamesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/team/team-games/team-games.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/team/team-games/team-games.module.ts ***!
  \************************************************************/
/*! exports provided: TeamGamesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGamesPageModule", function() { return TeamGamesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _team_games_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-games-routing.module */ "./src/app/pages/team/team-games/team-games-routing.module.ts");
/* harmony import */ var _team_games_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-games.page */ "./src/app/pages/team/team-games/team-games.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var TeamGamesPageModule = /** @class */ (function () {
    function TeamGamesPageModule() {
    }
    TeamGamesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _team_games_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamGamesPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_team_games_page__WEBPACK_IMPORTED_MODULE_6__["TeamGamesPage"]]
        })
    ], TeamGamesPageModule);
    return TeamGamesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/team/team-games/team-games.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/team/team-games/team-games.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vdGVhbS1nYW1lcy90ZWFtLWdhbWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/team/team-games/team-games.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/team/team-games/team-games.page.ts ***!
  \**********************************************************/
/*! exports provided: TeamGamesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGamesPage", function() { return TeamGamesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");







var TeamGamesPage = /** @class */ (function () {
    function TeamGamesPage(route, requestService, dialogService, utilArray) {
        this.route = route;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.utilArray = utilArray;
        this.id = route.snapshot.paramMap.get('id');
        this.status = route.snapshot.paramMap.get('status');
        this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Team', requestService);
    }
    TeamGamesPage.prototype.ngOnInit = function () {
        this.init();
    };
    TeamGamesPage.prototype.init = function (event) {
        if (event === void 0) { event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var parms;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        parms = {};
                        if (this.status)
                            parms['status'] = this.status;
                        this.modelTeam.api_functionModel(this.id, 'pageGames', parms).subscribe(function (response) {
                            if (response['status'] == 'success') {
                                _this.team = response['data'];
                            }
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                            if (event)
                                event.target.complete();
                        }, function () {
                            _this.dialogService.dimissLoaging();
                            if (event)
                                event.target.complete();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamGamesPage.prototype.deleteGame = function (game) {
        this.utilArray.listDelete(this.team.games, game.id);
    };
    TeamGamesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__["UtilArrayService"] }
    ]; };
    TeamGamesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-games',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-games.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team-games/team-games.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-games.page.scss */ "./src/app/pages/team/team-games/team-games.page.scss")).default]
        })
    ], TeamGamesPage);
    return TeamGamesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-team-team-games-team-games-module.js.map