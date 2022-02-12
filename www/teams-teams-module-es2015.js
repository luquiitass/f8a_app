(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teams-teams-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Equipos</ion-title>\n  </ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar \n    placeholder=\"Filtrar equipos\"   \n    (keyup)=\"filterTeams($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelFilter($event)\"\n  ></ion-searchbar>\n\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list>\n  \n      <ion-list-header *ngIf=\"teams.length == 0\"  color=\"tertiary\">\n        <ion-label>No se ha encontrado equipos</ion-label>\n      </ion-list-header>\n     \n      <ion-item *ngFor=\"let team of teams\" routerLink=\"/team/profile/{{team.id}}\" routerDirection=\"forward\" class=\"team-list\" >\n        <ion-avatar slot=\"start\" >\n          <ion-img \n            [src]=\"team.shield ? team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n          </ion-img>\n        </ion-avatar>\n        <ion-label >\n          <h3 class=\"fs-team\">{{team.name}}</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item (click)=\"newTeam()\">\n      <ion-label>Registrar mi equipo</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n  </div>\n\n  <div *ngIf=\"firstLoad\">\n    <ion-item *ngFor=\"let i of listSkeleton\" >\n      <ion-avatar slot=\"start\" >\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label >\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%;height: 20px;\"></ion-skeleton-text>\n        </h3>\n      </ion-label>\n    </ion-item>\n  </div>\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/teams/teams-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/teams/teams-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TeamsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageRoutingModule", function() { return TeamsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teams_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams.page */ "./src/app/pages/home/teams/teams.page.ts");




const routes = [
    {
        path: '',
        component: _teams_page__WEBPACK_IMPORTED_MODULE_3__["TeamsPage"]
    }
];
let TeamsPageRoutingModule = class TeamsPageRoutingModule {
};
TeamsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/teams/teams.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/home/teams/teams.module.ts ***!
  \**************************************************/
/*! exports provided: TeamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teams-routing.module */ "./src/app/pages/home/teams/teams-routing.module.ts");
/* harmony import */ var _teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teams.page */ "./src/app/pages/home/teams/teams.page.ts");







let TeamsPageModule = class TeamsPageModule {
};
TeamsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamsPageRoutingModule"]
        ],
        declarations: [_teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]]
    })
], TeamsPageModule);



/***/ }),

/***/ "./src/app/pages/home/teams/teams.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/home/teams/teams.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvdGVhbXMvdGVhbXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/teams/teams.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/teams/teams.page.ts ***!
  \************************************************/
/*! exports provided: TeamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPage", function() { return TeamsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _payment_team_payment_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../payment-team/payment-team.page */ "./src/app/pages/payment-team/payment-team.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");









let TeamsPage = class TeamsPage {
    constructor(request, modalController, dialog, auth, utilArray) {
        this.request = request;
        this.modalController = modalController;
        this.dialog = dialog;
        this.auth = auth;
        this.utilArray = utilArray;
        this.oldTeams = [];
        this.teams = [];
        this.listSkeleton = new Array(10);
        this.firstLoad = true;
        this.teamService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', request);
    }
    ngOnInit() {
        this.init();
    }
    init(event = null) {
        this.teamService.api_function('pageHomeTeams').subscribe(response => {
            this.teams = response['data'];
            this.oldTeams = response['data'];
            if (event)
                event.target.complete();
            this.firstLoad = false;
        }, error => {
            if (event)
                event.target.complete();
            this.firstLoad = false;
        });
    }
    close() {
        this.auth.logout();
    }
    newTeam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _payment_team_payment_team_page__WEBPACK_IMPORTED_MODULE_7__["PaymentTeamPage"],
            });
            modal.onDidDismiss().then(data => {
                console.log('dimiss team', data);
                if (data.data && data.data['team']) {
                    const team = data.data['team'];
                    //this.teamService.listAddLast(team);
                    this.utilArray.listAddLast(this.teams, team);
                }
            });
            return yield modal.present();
        });
    }
    filterTeams(event) {
        let text = event.target.value;
        if (text.length <= 0) {
            this.teams = this.oldTeams;
            return;
        }
        this.teams = [...this.oldTeams];
        this.teams = this.teams.filter(team => team.name.toUpperCase().includes(text.toUpperCase()));
    }
    cancelFilter($event) {
        this.teams = this.oldTeams;
    }
};
TeamsPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"] }
];
TeamsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teams.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teams.page.scss */ "./src/app/pages/home/teams/teams.page.scss")).default]
    })
], TeamsPage);



/***/ })

}]);
//# sourceMappingURL=teams-teams-module-es2015.js.map