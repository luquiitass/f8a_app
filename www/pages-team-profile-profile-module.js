(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Equipo</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/teams\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" >\n      <ion-button *ngIf=\"shareService.loadedAddThis\" (click)=\"shareService.toggleAddThis()\">\n        <ion-icon name=\"share-social-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf=\"team\">\n\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n\n    <!-- Mensaje de administrador -->\n      <div>\n        <ion-chip class=\"chip-admin ion-text-center\" color=\"secondary\" *ngIf=\"isAdmin\">\n          <ion-text class=\"msj-is-admin\">\n            Eres el administrador de este perfil, puede activar la edición aquí.\n          </ion-text>\n          <ion-toggle [(ngModel)]=\"canEdit\"></ion-toggle>\n\n        </ion-chip>\n      </div>\n      <!-- --- -->\n\n      <div class=\"shield-content\" >\n        <div>\n          <img class=\"cover\" [src]=\"getCover()\" alt=\"Portada\">\n        </div>\n\n        <div class=\"shield-team bg-l2\">\n          <ion-avatar>\n            <img class=\"shield\" [src]=\"getShield()\" alt=\"Escudo\">\n          </ion-avatar>\n          <span class=\"name-team\">{{team.name}}</span>\n\n          <app-notificatio-selected\n            class=\"not\"\n            *ngIf=\"true\"\n            [object]=\"team\"\n            [table_name]=\"'Team'\"\n            [table_id] = \"id\"\n          ></app-notificatio-selected>\n\n        </div>\n\n        <div *ngIf=\"canEdit\" style=\"margin-top: 20px;\">\n          <ion-button expand=\"block\" fill=\"outline\" (click)=\"showEdit()\">\n            <ion-icon name=\"create\"></ion-icon>      \n            Editar</ion-button>\n        </div>\n      </div>\n\n      <div class=\"addthis_inline_share_toolbox\"></div>\n\n      <!-- Administradores -->\n      <app-list-admins \n        *ngIf=\"authUser.isAdmin()\"\n        [admins]=\"team.admins\"\n      ></app-list-admins>\n      <!-- --- -->\n\n\n      <!-- Enlace a los datos de contabilidad -->\n      <ion-item routerLink=\"/accounting/{{id}}\" routerDirection=\"forward\" *ngIf=\"false\">\n        <ion-label>\n          Contabilidad\n        </ion-label>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </ion-item>\n      <ion-item routerLink=\"/balance-sheet/{{id}}\" routerDirection=\"forward\" *ngIf=\"false\" >\n        <ion-label>\n          Cuotas\n        </ion-label>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </ion-item>\n    <!-- ------------- -->\n      <br>\n\n      <!-- Datos estadisticos -->\n      <app-team-statistics\n        [list]=\"team.statistics\"\n        [id]=\"team.id\"\n      ></app-team-statistics>\n    <!-- ----- -->\n\n    <!-- Ultimo partido -->\n      <div *ngIf=\" team.oldGame || team.oldGame\">\n        <app-old-next-game\n          [game]=\"team.oldGame\"\n        ></app-old-next-game>\n\n        <app-old-next-game\n          [game]=\"team.nextGame\"\n        ></app-old-next-game>\n\n        <div class=\"ion-text-right\" >\n          <ion-button size=\"small\" fill=\"clear\" routerLink=\"/team/{{id}}/games\">\n            Ver más\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    <!-- --- -->\n\n\n    <!-- Jugadores -->\n    <ion-card *ngIf=\"playersList.length || canEdit\">\n      <ion-card-header>\n        <ion-item>\n          <ion-card-title>\n            Jugadores\n          </ion-card-title>\n          <ion-button *ngIf=\"canEdit\" slot=\"end\" (click)=\"adminPlayers()\"  >\n            <ion-icon name=\"create\"></ion-icon>      \n          </ion-button>\n        </ion-item>\n      </ion-card-header>\n\n      <ion-card-content>\n        \n        <app-player-list \n          [items] = \"playersList\"\n          (eventLoad)=\"loadPlayers($event)\"\n          (eventSelect)=\"playerSelect($event)\" \n          [loading] = \"playersLoading\"\n          [errorLoad]=\"playersErrorLoad\"\n        ></app-player-list>\n      </ion-card-content>\n\n    </ion-card>\n    <!-- --- -->\n    <br>\n\n    <!-- Ubicación de la cancha -->\n    <ion-card *ngIf=\" (team && team.field) || canEdit\">\n      <ion-card-header>\n        <ion-item>\n          <ion-card-title>\n            Cancha (Ubicación)\n          </ion-card-title>\n          <ion-button *ngIf=\"canEdit\" slot=\"end\" (click)=\"selectField()\"  >\n            <ion-icon name=\"create\"></ion-icon>      \n          </ion-button>\n          <ion-button *ngIf=\"canEdit && team.field\" color=\"danger\" slot=\"end\" (click)=\"confirmDeleteField(team.field)\"  >\n            <ion-icon name=\"trash\"></ion-icon>      \n          </ion-button>\n          \n        </ion-item>\n      </ion-card-header>\n\n      <div *ngIf=\"team.field\">\n        <app-show-map\n          [field]=\"team.field\"\n          [showDirection]=\"true\"\n        ></app-show-map>\n      </div>\n    </ion-card>\n    <!-- --- -->\n\n\n    <!-- Redes sociales -->\n    <app-red-list\n      [nameModel] = \"'Team'\"\n      [idModel] = \"id\"\n      [isAdmin] = \"canEdit\"\n      [list] = \"team.redes\"\n      [loadServer] = \"false\"\n      ></app-red-list>\n    <!-- --- -->\n\n\n    <!-- Comentarios -->\n    <app-comments\n      [comments] = \"team.comments\"\n      [idRelation]=\"id\"\n      [nameRelationModel]=\"'Team'\"\n      [loadServer]=\"false\"\n    ></app-comments>\n    <!-- --- -->\n    \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/profile/profile-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/team/profile/profile-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/team/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/team/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/team/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/team/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/team/profile/profile.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/team/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/team/profile/profile.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cover {\n  width: 100%;\n}\n\n.shield-team {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  padding-left: 30px;\n  position: relative;\n}\n\n.shield {\n  width: 50px;\n  height: 50px;\n}\n\n.name-team {\n  display: inline;\n  margin-left: 10px;\n  font-size: x-large;\n  /*vertical-align: middle;*/\n}\n\n.shield-content {\n  margin-bottom: 20px;\n}\n\n.not {\n  position: absolute;\n  right: 10px;\n  bottom: -40px;\n}\n\n.field {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3ZlcntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaWVsZC10ZWFte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNoaWVsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5uYW1lLXRlYW17XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAvKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cbn1cblxuLnNoaWVsZC1jb250ZW50e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ub3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogLTQwcHg7XG59XG5cbi5maWVsZHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/team/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/team/profile/profile.page.ts ***!
  \****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _util_list_redirect_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/list-redirect/list-redirect.page */ "./src/app/pages/util/list-redirect/list-redirect.page.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _form_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/form.page */ "./src/app/pages/team/form/form.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/payment-team.service */ "./src/app/services/payment-team.service.ts");
/* harmony import */ var src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sharer.service */ "./src/app/services/sharer.service.ts");
/* harmony import */ var _field_list_fields_list_fields_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../field/list-fields/list-fields.page */ "./src/app/pages/field/list-fields/list-fields.page.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/screen-loading.service */ "./src/app/services/screen-loading.service.ts");
/* harmony import */ var src_app_services_html_to_image_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/html-to-image.service */ "./src/app/services/html-to-image.service.ts");
















var ProfilePage = /** @class */ (function () {
    function ProfilePage(route, requesService, modalController, navCtrl, authUser, utilArray, paymentTeam, shareService, dialogService, loading, htmlToImageService) {
        var _this = this;
        this.route = route;
        this.requesService = requesService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.authUser = authUser;
        this.utilArray = utilArray;
        this.paymentTeam = paymentTeam;
        this.shareService = shareService;
        this.dialogService = dialogService;
        this.loading = loading;
        this.htmlToImageService = htmlToImageService;
        this.id = '0';
        this.team = null;
        this.isAdmin = false;
        this.canEdit = false;
        this.playersList = [];
        this.playersLoading = true;
        this.playersErrorLoad = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.teamModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Team', requesService);
        this.authUser.userOb.subscribe(function () {
            _this.init();
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.init();
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.prototype.init = function ($events) {
        var _this = this;
        if ($events === void 0) { $events = null; }
        if (!$events)
            this.loading.start();
        this.playersLoading = true;
        this.teamModel.api_functionModel(this.id, 'pageProfile').subscribe(function (response) {
            if (response['status'] == 'success') {
                _this.team = response['data'];
                _this.paymentTeam.setTeam(_this.team);
                _this.playersList = _this.team.players;
            }
            _this.playersLoading = false;
            _this.loadPermissions();
            if ($events)
                $events.target.complete();
            _this.loading.end();
        }, function (error) {
            _this.playersLoading = false;
            _this.playersErrorLoad = false;
            if ($events)
                $events.target.complete();
            _this.loading.end();
        });
    };
    ProfilePage.prototype.loadPermissions = function () {
        this.isAdmin = this.authUser.isAdminOfTeam(this.id);
    };
    ProfilePage.prototype.getCover = function () {
        return this.team.cover_page ? this.team.cover_page.urlComplete : 'assets/images/team3.png';
    };
    ProfilePage.prototype.getShield = function () {
        return this.team.shield ? this.team.shield.urlComplete : 'assets/images/esc.png';
    };
    ProfilePage.prototype.showMenu = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var list, modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = [
                            {
                                name: 'Editar Equipo',
                                route: ''
                            },
                            {
                                name: 'Admi. Jugadores',
                                route: "team/" + this.id + "/players"
                            },
                            {
                                name: 'Admi. Partidos',
                                rote: ''
                            }
                        ];
                        return [4 /*yield*/, this.modalController.create({
                                component: _util_list_redirect_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__["ListRedirectPage"],
                                componentProps: {
                                    title: 'Administrar',
                                    list: list
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.setLog = function (num) {
        console.log('set log in page profile, num : ', num);
    };
    ProfilePage.prototype.adminPlayers = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.paymentTeam.noPaid()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.paymentTeam.showAlert()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.navCtrl.navigateForward("/team/" + this.id + "/players");
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.loadPlayers = function (event) {
        var _this = this;
        this.playersLoading = true;
        this.teamModel.api_loadAttribute(this.id, 'players').subscribe(function (response) {
            if (response['status'] == 'success') {
                _this.playersList = response['Team']['players'];
            }
            _this.playersLoading = false;
        }, function (error) {
            _this.playersLoading = false;
            _this.playersErrorLoad = true;
        });
    };
    ProfilePage.prototype.playerSelect = function (player) {
        console.log('goTo', player);
        this.navCtrl.navigateForward("player/profile/" + player.id);
    };
    ProfilePage.prototype.showEdit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.paymentTeam.noPaid()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.paymentTeam.showAlert()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.modalController.create({
                            component: _form_form_page__WEBPACK_IMPORTED_MODULE_8__["FormPage"],
                            componentProps: {
                                id: this.id,
                                adminTeam: true
                            }
                        })];
                    case 3:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log('return edit');
                            if (data.data && data.data.team) {
                                var team = data.data['team'];
                                _this.utilArray.updateAttribustesObject(_this.team, team, ['name', 'shield_id', 'cover_page_id', 'shield', 'cover_page']);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.ionViewDidLeave = function () {
        this.shareService.hideAddThis();
    };
    ProfilePage.prototype.selectField = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.paymentTeam.noPaid()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.paymentTeam.showAlert()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.modalController.create({
                            component: _field_list_fields_list_fields_page__WEBPACK_IMPORTED_MODULE_12__["ListFieldsPage"]
                        })];
                    case 3:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log('close modal select field');
                            if (data.data && data.data['field']) {
                                _this.addField(data.data['field']);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.addField = function (field) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres('Añadiendo Cancha')];
                    case 1:
                        _a.sent();
                        this.teamModel.api_functionModel(this.id, 'addField', { field_id: field.id }).subscribe(function (response) {
                            if (response['status'] == 'success') {
                                if (response['data'] && response['data']) {
                                    _this.team.field = response['data'];
                                }
                            }
                            _this.dialogService.dimissLoaging();
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.confirmDeleteField = function (field) {
        //$event.stopPropagation();
        var _this = this;
        this.dialogService.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta cancha', function (e) {
            _this.deleteField(field);
        });
    };
    ProfilePage.prototype.deleteField = function (field) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres('eliminando...')];
                    case 1:
                        _a.sent();
                        this.teamModel.api_functionModel(this.id, 'removeField', { field_id: field.id }).subscribe(function (data) {
                            console.log(data);
                            if (data['status'] == 'success') {
                                _this.dialogService.showToast('Cancha Eliminada', null, 'success');
                                _this.team.field = null;
                            }
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"] },
        { type: src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_10__["PaymentTeamService"] },
        { type: src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_11__["SharerService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"] },
        { type: src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_14__["ScreenLoadingService"] },
        { type: src_app_services_html_to_image_service__WEBPACK_IMPORTED_MODULE_15__["HtmlToImageService"] }
    ]; };
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/team/profile/profile.page.scss")).default]
        })
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-team-profile-profile-module.js.map