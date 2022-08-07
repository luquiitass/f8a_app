(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["players-players-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>players</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"load($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-searchbar \n    placeholder=\"Buscar jugador\"   \n    (keyup)=\"searchPlayer($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelSearch($event)\"\n  ></ion-searchbar>\n\n\n  <app-player-list \n    [items] = \"players\"\n    (eventSelect)=\"playerSelect($event)\" \n    [firstLoading] = \"firstLoading\"\n  >\n  </app-player-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/players/players-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/players/players-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PlayersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPageRoutingModule", function() { return PlayersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _players_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players.page */ "./src/app/pages/home/players/players.page.ts");




var routes = [
    {
        path: '',
        component: _players_page__WEBPACK_IMPORTED_MODULE_3__["PlayersPage"]
    }
];
var PlayersPageRoutingModule = /** @class */ (function () {
    function PlayersPageRoutingModule() {
    }
    PlayersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlayersPageRoutingModule);
    return PlayersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/players/players.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/home/players/players.module.ts ***!
  \******************************************************/
/*! exports provided: PlayersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPageModule", function() { return PlayersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _players_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./players-routing.module */ "./src/app/pages/home/players/players-routing.module.ts");
/* harmony import */ var _players_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players.page */ "./src/app/pages/home/players/players.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var PlayersPageModule = /** @class */ (function () {
    function PlayersPageModule() {
    }
    PlayersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _players_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayersPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_players_page__WEBPACK_IMPORTED_MODULE_6__["PlayersPage"]]
        })
    ], PlayersPageModule);
    return PlayersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/players/players.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/players/players.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcGxheWVycy9wbGF5ZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/players/players.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/players/players.page.ts ***!
  \****************************************************/
/*! exports provided: PlayersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPage", function() { return PlayersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






var PlayersPage = /** @class */ (function () {
    function PlayersPage(request, navCtrl, util) {
        this.request = request;
        this.navCtrl = navCtrl;
        this.util = util;
        this.players = [];
        this.firstLoading = true;
        this.oldPlayers = [];
        this.playerModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Player', this.request);
    }
    PlayersPage.prototype.ngOnInit = function () {
        this.load();
    };
    PlayersPage.prototype.load = function ($event, paginate) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        if (paginate === void 0) { paginate = false; }
        var page = {};
        if (paginate && this.dataPaginate) {
            page = {
                page: this.dataPaginate.current_page + 1
            };
        }
        //await this.util.delay(4000)
        this.playerModel.api_function('pageHomePlayers', page).subscribe(function (response) {
            var e_1, _a;
            if (response['status'] == 'success') {
                _this.dataPaginate = response['data'];
                if (!paginate) {
                    _this.players = response['data']['data'];
                }
                else {
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(response['data']['data']), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var player = _c.value;
                            _this.players.push(player);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            _this.oldPlayers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.players);
            console.log(response);
            _this.firstLoading = false;
            if ($event)
                $event.target.complete();
        }, function (error) {
            _this.firstLoading = false;
            console.error(error);
            if ($event)
                $event.target.complete();
        });
    };
    PlayersPage.prototype.loadData = function (event) {
        if (this.dataPaginate && this.dataPaginate.last_page == this.dataPaginate.current_page) {
            event.target.complete();
            event.target.disabled = true;
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
            return;
        }
        this.load(event, true);
    };
    PlayersPage.prototype.playerSelect = function (player) {
        console.log('goTo', player);
        this.navCtrl.navigateForward("player/profile/" + player.id);
    };
    PlayersPage.prototype.searchPlayer = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('text search', event);
                text = event.target.value;
                if (text.length <= 2) {
                    this.players = this.oldPlayers;
                    return [2 /*return*/];
                }
                this.firstLoading = true;
                //await this.util.delay(4000);
                this.playerModel.api_function('searchPlayer', { query: text }).subscribe(function (response) {
                    console.log(response);
                    if (response['status'] == 'success') {
                        _this.players = response['data'];
                        event.target.autofocus = true;
                    }
                    _this.firstLoading = false;
                }, function (error) {
                    console.error(error);
                    _this.firstLoading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    PlayersPage.prototype.cancelSearch = function (event) {
        this.players = this.oldPlayers;
    };
    PlayersPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
    ]; };
    PlayersPage.propDecorators = {
        infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
    };
    PlayersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-players',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./players.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./players.page.scss */ "./src/app/pages/home/players/players.page.scss")).default]
        })
    ], PlayersPage);
    return PlayersPage;
}());



/***/ })

}]);
//# sourceMappingURL=players-players-module.js.map