(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/list/list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/list/list.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"admin_home\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>Equipos</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar \n    placeholder=\"Filtrar equipos\"   \n    (keyup)=\"filterTeams($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelFilter($event)\"\n  ></ion-searchbar>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n      <ion-label>Sin registros</ion-label>\n    </ion-list-header>\n   \n      <ion-item *ngFor=\"let team of list\" >\n          \n        <ion-label>\n          <h3>{{team.name}}</h3>\n        </ion-label>\n\n        <ion-buttons slot=\"end\">\n          <ion-button >\n            <ion-icon name=\"enter-outline\"></ion-icon> \n          </ion-button>\n          <ion-button (click)=\"showEdit(team)\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"confirmDelete(team)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/list/list-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/team/list/list-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/team/list/list.page.ts");




var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
var ListPageRoutingModule = /** @class */ (function () {
    function ListPageRoutingModule() {
    }
    ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListPageRoutingModule);
    return ListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/team/list/list.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/team/list/list.module.ts ***!
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
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/team/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/team/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
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
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/team/list/list.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/team/list/list.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vbGlzdC9saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/team/list/list.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/team/list/list.page.ts ***!
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
/* harmony import */ var _pages_team_form_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/team/form/form.page */ "./src/app/pages/team/form/form.page.ts");
/* harmony import */ var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");







var ListPage = /** @class */ (function () {
    function ListPage(request, modalController, dialog) {
        this.request = request;
        this.modalController = modalController;
        this.dialog = dialog;
        this.list = [];
        this.oldTeams = [];
        this.teamService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Team', request);
    }
    ListPage.prototype.ngOnInit = function () {
        //this.teamService.setModel('Team');
        this.init();
        //this.teamService.api_all();
    };
    ListPage.prototype.init = function ($event) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        this.teamService.api_function('allTeams').subscribe(function (response) {
            _this.list = response['data'];
            _this.oldTeams = _this.list;
            if ($event) {
                $event.target.complete();
            }
        }, function (error) {
            console.log(error);
            $event.target.complete();
        });
    };
    ListPage.prototype.openModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pages_team_form_form_page__WEBPACK_IMPORTED_MODULE_4__["FormPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var team = data.data['team'];
                            _this.teamService.listAddLast(team);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.showEdit = function (team) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pages_team_form_form_page__WEBPACK_IMPORTED_MODULE_4__["FormPage"],
                            componentProps: { id: team.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var team = data.data['team'];
                            _this.teamService.listUpdate(team.id, team);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.confirmDelete = function (team) {
        var _this = this;
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este equipo', function (e) {
            _this.delete(team);
        });
    };
    ListPage.prototype.delete = function (team) {
        var _this = this;
        this.teamService.api_delete(team.id).subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                _this.dialog.showToast('Team Eliminado', null, 'success');
                _this.teamService.listDelete(team.id);
            }
        });
    };
    ListPage.prototype.filterTeams = function (event) {
        var text = event.target.value;
        if (text.length <= 0) {
            this.list = this.oldTeams;
            return;
        }
        this.list = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.oldTeams);
        this.list = this.list.filter(function (team) { return team.name.toUpperCase().includes(text.toUpperCase()); });
    };
    ListPage.prototype.cancelFilter = function ($event) {
        this.list = this.oldTeams;
    };
    ListPage.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
    ]; };
    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/list/list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/team/list/list.page.scss")).default]
        })
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-team-list-list-module.js.map