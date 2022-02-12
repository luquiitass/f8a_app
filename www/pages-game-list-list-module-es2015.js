(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceGame.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Equipo local</ion-label>\n      <ion-select [(ngModel)]=\"game.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_team') }}</div>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Equipo Vicitante</ion-label>\n      <ion-select [(ngModel)]=\"game.v_team\" name=\"v_team\">\n        <ion-select-option [value]=\"v_team.id\" *ngFor=\"let v_team of teams\">{{ v_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_team') }}</div>\n    </ion-item>\n\n    <div *ngIf=\"game.other_team\">\n      <ion-item >\n        <ion-label position=\"floating\" >Otro Equipo</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"game.other_team\" name=\"other_team\"></ion-input>\n      </ion-item>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('other_team') }}</div>\n  \n      <ion-button size=\"sm\" (click)=\"newTeam()\">Nuevo equipo</ion-button>\n    </div>\n  \n    <br>\n\n    <div class=\"goals\">\n\n      <ion-item>\n        <ion-label position=\"floating\">Goles L</ion-label>\n        <ion-select [(ngModel)]=\"game.l_goals\" name=\"l_goals\">\n          <ion-select-option [value]=\"i\" *ngFor=\"let i of numbGoals\">{{ i }}</ion-select-option>\n        </ion-select>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_goals') }}</div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Goles V</ion-label>\n        <ion-select [(ngModel)]=\"game.v_goals\" name=\"v_goals\" >\n          <ion-select-option [value]=\"e\" *ngFor=\"let e of numbGoals\">{{ e }}</ion-select-option>\n        </ion-select>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_goals') }}</div>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <ion-label>HH:mm</ion-label>\n      <ion-datetime \n        [(ngModel)]=\"game.time\" \n        displayFormat=\"HH:mm \"  \n        name=\"time\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Lugar</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.location\" name=\"location\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('location') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Comentario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.description\" name=\"description\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('description') }}</div>\n\n    <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime \n        name=\"date\"\n        [(ngModel)]=\"game.date\"\n        displayFormat=\"YYYY-MM-DD\"\n        ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Estado</ion-label>\n      <ion-select [(ngModel)]=\"game.status\" name=\"status\">\n        <ion-select-option [value]=\"i\" *ngFor=\"let i of status\">{{ i }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('status') }}</div>\n    </ion-item>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/list/list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/list/list.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"admin_home\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>Partidos</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n      \n    \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable [(ngModel)]=\"tabSelected\" (ionChange)=\"selectDate($event)\" >\n              <ion-segment-button *ngFor=\"let tab of tabs;let i=index\" value=\"{{i}}\" id=\"sgm_{{i}}\" >\n                {{ util.setFormatMoment( tab.date )}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list-header *ngIf=\"games.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n   \n      <ion-item *ngFor=\"let item of games\"  >\n\n        <ion-grid class=\"status-{{item.status}}\">\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"11\">\n                    {{item.team_l.name}}\n                  </ion-col>\n                  <ion-col size=\"1\">{{item.l_goals}}</ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col>\n                    Vs\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"11\">\n                    {{item.team_v.name}}\n                  </ion-col>\n                  <ion-col size=\"1\">{{item.v_goals}}</ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n\n\n            <ion-col size=\"2\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-sm=\"4\" size-xs=\"12\">\n                    <ion-button  [routerLink]=\"['/admin/game/',item.id]\">\n                      <ion-icon name=\"enter-outline\"></ion-icon>\n                    </ion-button >\n                  </ion-col>\n                  <ion-col size-sm=\"4\" size-xs=\"12\">\n                    <ion-button (click)=\"showEdit(item)\">\n                      <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size-sm=\"4\" size-xs=\"12\">\n                    <ion-button (click)=\"confirmDelete(item)\">\n                      <ion-icon name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/game-form/game-form.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/game/game-form/game-form.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS1mb3JtL2dhbWUtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/game/game-form/game-form.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game/game-form/game-form.page.ts ***!
  \********************************************************/
/*! exports provided: GameFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormPage", function() { return GameFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _team_form_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../team/form/form.page */ "./src/app/pages/team/form/form.page.ts");








let GameFormPage = class GameFormPage {
    constructor(request, dialogService, viewCtrl, photoService, navParams, modalController) {
        var _a;
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.modalController = modalController;
        this.teams = [];
        this.numbGoals = [];
        this.customDayShortNames = ['s\u00f8n'];
        this.status = ['Pendiente', 'Suspendido', 'Jugado', 'Created'];
        this.myDateFilter = (d) => {
            const day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day == 6;
        };
        this.serviceGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Game', request);
        this.serviceTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Team', request);
        //this.serviceTeam.setModel('Team');
        this.id = navParams.get('id');
        this.toDate = (_a = navParams.get('date')) !== null && _a !== void 0 ? _a : new Date();
        console.log('date', this.toDate);
    }
    ngOnInit() {
        this.serviceTeam.api_function('getAllTeamsSelect').subscribe(data => {
            if (data['data']) {
                this.teams = data['data'];
                console.log('teams -> ', this.teams);
                //this.serviceGame.setModel('Game');
            }
        });
        for (var i = 0; i <= 30; i++) {
            this.numbGoals.push(i);
        }
        this.initObject();
    }
    initObject() {
        this.game = {
            l_team: '',
            v_team: '',
            l_goals: 0,
            v_goals: 0,
            time: '15:00',
            date: this.toDate,
            location: '',
            description: '',
            status: 'Pendiente'
        };
        if (this.id) {
            this.serviceGame.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.game = data['Game'];
                }
            });
        }
    }
    submit() {
        if (this.game.id) {
            this.serviceGame.api_update(this.game).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    this.dismiss(data['Game']);
                }
            });
        }
        else {
            this.serviceGame.api_create(this.game).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Game']);
                }
            });
        }
    }
    dismiss(game) {
        this.viewCtrl.dismiss({
            game: game,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    print() {
        console.log(this.game);
    }
    newTeam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _team_form_form_page__WEBPACK_IMPORTED_MODULE_7__["FormPage"],
            });
            modal.onDidDismiss().then(data => {
                if (data.data['team']) {
                    const team = data.data['team'];
                    this.teams.push(team);
                }
            });
            return yield modal.present();
        });
    }
};
GameFormPage.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
GameFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./game-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game-form.page.scss */ "./src/app/pages/game/game-form/game-form.page.scss")).default]
    })
], GameFormPage);



/***/ }),

/***/ "./src/app/pages/game/list/list-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game/list/list-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/game/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/game/list/list.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/game/list/list.module.ts ***!
  \************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/game/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/game/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/pages/game/list/list.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/game/list/list.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status {\n  width: 100%;\n}\n\n.team {\n  display: inline;\n  width: 100%;\n}\n\n.name-team {\n  background-color: transparent;\n}\n\n.goal-team {\n  background-color: transparent;\n}\n\n.names {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1c3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRlYW17XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmFtZS10ZWFte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZ29hbC10ZWFte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmFtZXN7XG4gICAgd2lkdGg6IDgwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/game/list/list.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/game/list/list.page.ts ***!
  \**********************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/game/game-form/game-form.page */ "./src/app/pages/game/game-form/game-form.page.ts");
/* harmony import */ var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");










let ListPage = class ListPage {
    constructor(request, dialogService, modalController, dialog, util, utilArray) {
        this.request = request;
        this.dialogService = dialogService;
        this.modalController = modalController;
        this.dialog = dialog;
        this.util = util;
        this.utilArray = utilArray;
        this.games = [];
        this.tabs = [];
        this.gameService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Game', request);
    }
    ngOnInit() {
        //    this.gameService.setModel('Game');
        //this.gameService.api_all();
        this.init();
    }
    init(event = null) {
        this.gameService.api_function('pageAdminAll', { orderByColumns: 'name', orderByDireccion: 'des' }).subscribe(response => {
            this.tabs = response['data']['dates'];
            this.selectTab();
            console.log(response);
            if (event)
                event.target.complete();
        }, error => {
            if (event)
                event.target.completed();
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_4__["GameFormPage"],
                componentProps: {
                    date: this.tabs && this.tabs[this.tabSelected] ? this.tabs[this.tabSelected].date : ''
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('crate game');
                const game = data.data['game'];
                let index = this.tabs.map(tab => tab.date).indexOf(game.date);
                if (index >= 0) {
                    this.utilArray.listAddFirst(this.tabs[index]['results'], game);
                }
                else {
                    index = this.tabs.length;
                    this.tabs[index] = { date: moment__WEBPACK_IMPORTED_MODULE_7__(game.date).format('YYYY-MM-DD'), results: [] };
                    this.utilArray.listAddFirst(this.tabs[index]['results'], game);
                }
            });
            return yield modal.present();
        });
    }
    showEdit(game) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_4__["GameFormPage"],
                componentProps: { id: game.id }
            });
            modal.onDidDismiss().then(data => {
                const game = data.data['game'];
                this.utilArray.listUpdate(this.games, game.id, game);
                //this.gameService.listUpdate(game.id,game);
            });
            return yield modal.present();
        });
    }
    confirmDelete(game) {
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este game', e => {
            this.delete(game);
        });
    }
    delete(game) {
        this.gameService.api_delete(game.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Game Eliminado', null, 'success');
                //this.gameService.listDelete(game.id);
                this.utilArray.listDelete(this.games, game.id);
            }
        });
    }
    showItem(item) {
        console.log(item);
    }
    selectDate(event) {
        let index = parseInt(event.detail.value);
        let tab = this.tabs[index];
        if (tab['results']) {
            this.games = tab['results'];
            this.focusSegment();
            return;
        }
        this.gameService.api_function('adminByDate', { 'date': tab['date'] }).subscribe(response => {
            if (response['status'] == 'success') {
                this.tabs[index]['results'] = response['data'];
                this.games = this.tabs[index]['results'];
                this.focusSegment();
            }
            console.log(response);
        }, error => {
            console.error(error);
        });
    }
    focusSegment() {
        let segmentId = 'sgm_' + this.tabSelected;
        console.log('select segment : ', segmentId);
        document.getElementById(segmentId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    selectTab() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tabs.length > 0) {
                let now = moment__WEBPACK_IMPORTED_MODULE_7__();
                let tabSelect = 0;
                this.tabs.forEach((tab, i) => {
                    let date_tab = moment__WEBPACK_IMPORTED_MODULE_7__(tab.date);
                    if (date_tab.isAfter(now) && tabSelect == 0) {
                        tabSelect = i;
                    }
                });
                this.selectDate({ detail: { value: tabSelect } });
                this.tabSelected = tabSelect;
                yield this.util.delay(1500);
                this.focusSegment();
            }
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"] }
];
ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/list/list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/game/list/list.page.scss")).default]
    })
], ListPage);



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService, Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/request.service */ "./src/app/api/request.service.ts");





const { Camera, Filesystem, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let PhotoService = class PhotoService {
    constructor(request) {
        this.photos = [];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.serviceImage = new _api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Image', request);
    }
    init(url, thumb = true, pathDefault = 'assets/images/pngwing.png') {
        this.url = url !== null && url !== void 0 ? url : '/images/';
        this.thumb = thumb !== null && thumb !== void 0 ? thumb : false;
        this.path = pathDefault;
        this.photo = new Photo(pathDefault);
    }
    setImage(image) {
        this.image = image;
        this.photo.image = image;
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100
            });
            const base64Data = yield this.readAsBase64(capturedPhoto);
            this.photos.unshift(new Photo(null, capturedPhoto.webPath, base64Data, this.url, this.thumb));
        });
    }
    addOneNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100
            });
            const base64Data = yield this.readAsBase64(capturedPhoto);
            this.photo = new Photo(capturedPhoto.webPath, base64Data, base64Data, this.url, this.thumb, this.image);
        });
    }
    isLoadPthoto() {
        return this.photo.data ? true : false;
    }
    readAsBase64(cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the photo, read as a blob, then convert to base64 format
            const response = yield fetch(cameraPhoto.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
    uploadImage() {
        if (this.isLoadPthoto()) {
            if (this.photo.id) {
                return this.serviceImage.api_update(this.photo);
            }
            else {
                return this.serviceImage.api_create(this.photo);
            }
        }
    }
};
PhotoService.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }
];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);

class Photo {
    constructor(filepath = "assets/images/pngwing.png", webviewPath = null, data = '', url = '', thumb = false, image = null) {
        this.id = image ? image.id : '';
        this.webviewPath = webviewPath;
        this.filepath = filepath;
        this.data = data;
        this.url = url;
        this.thumb = thumb;
        this.image = image;
    }
    getPath() {
        if (this.webviewPath) {
            return this.webviewPath;
        }
        else if (this.image && this.image['urlComplete']) {
            return this.image['urlComplete'];
        }
        else {
            return this.filepath;
        }
    }
}


/***/ }),

/***/ "./src/app/services/util-array.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/util-array.service.ts ***!
  \************************************************/
/*! exports provided: UtilArrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilArrayService", function() { return UtilArrayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UtilArrayService = class UtilArrayService {
    constructor() { }
    /**
     * Inserta el elemento al final del array
     * @param list array en el que se inserta el objeto
     * @param item item a insertar
     */
    listAddLast(list, item) {
        list.push(item);
    }
    /**
     * Añade un elemente en el array al inicio
     * @param list array en la que se inserta el objeto
     * @param item  elemento que se almacenara en el array
     */
    listAddFirst(list, item) {
        list.unshift(item);
    }
    /**
     * Remplaza un objeto del array
     * @param list array que se actualizara
     * @param id iel id del objeto
     * @param item elemento que se remplazara en el array
     */
    listUpdate(list, id, item) {
        let index = this.findIndexList(list, id);
        if (index >= 0) {
            list[index] = item;
        }
    }
    /**
     * elimina objeto de un array pasando el id del objeto
     * @param list array del que se eliminara el objeto
     * @param id id del objeto
     */
    listDelete(list, id) {
        let index = this.findIndexList(list, id);
        if (index >= 0)
            list.splice(index, 1);
    }
    /**
     * Busca un obeto en el array
     * @param list array en el qie se bucara el objeto
     * @param id id del objeto
     */
    findList(list, id) {
        return list.find(item => item['id'] === id);
    }
    /**
     * Retorna el indice de la posicion en la que se encuentra el objeto
     * @param list Array en el que se realizara a busqueda
     * @param id id del objeto buscado
     */
    findIndexList(list, id) {
        return list.findIndex(item => item['id'] === id);
    }
    /**
     * Modifica solo los atributos indicados en el array
     * @param objectResult objeto a modificar
     * @param object objeto del que se obtendran los datos
     * @param attibutes atributos que seran modificados
     */
    updateAttribustesObject(objectResult, object, attibutes = []) {
        console.log('update attributes');
        for (let att of attibutes) {
            if (object.hasOwnProperty(att))
                objectResult[att] = object[att];
        }
        return objectResult;
    }
};
UtilArrayService.ctorParameters = () => [];
UtilArrayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilArrayService);



/***/ })

}]);
//# sourceMappingURL=pages-game-list-list-module-es2015.js.map