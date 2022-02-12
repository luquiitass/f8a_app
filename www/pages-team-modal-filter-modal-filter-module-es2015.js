(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-modal-filter-modal-filter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/modal-filter/modal-filter.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/modal-filter/modal-filter.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  <ion-title>Buscar Equipo</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar \n    placeholder=\"Filtrar equipos\"\n    (ionClear)=\"cancelFilter($event)\"\n    (ionChange)=\"filterChangue($event)\"\n  ></ion-searchbar>\n\n\n  <ion-list>\n    <ion-list-header *ngIf=\"getFilter().length == 0\"  color=\"tertiary\">\n      <ion-label>No se ha encontrado equipos</ion-label>\n    </ion-list-header>\n   \n    <ion-item *ngFor=\"let team of getFilter()\" class=\"team-list\" (click)=\"dismiss(team)\" >\n      <ion-avatar slot=\"start\" *ngIf=\"team.id != -1\">\n        <ion-img \n          [src]=\"team.shield ? team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n        </ion-img>\n      </ion-avatar>\n      <ion-label >\n        <h3 class=\"fs-team\">{{  team.id == -1 ? 'Registrar Nuevo Equipo ' : team.name}}</h3>\n      </ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/modal-filter/modal-filter-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/team/modal-filter/modal-filter-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ModalFilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFilterPageRoutingModule", function() { return ModalFilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-filter.page */ "./src/app/pages/team/modal-filter/modal-filter.page.ts");




const routes = [
    {
        path: '',
        component: _modal_filter_page__WEBPACK_IMPORTED_MODULE_3__["ModalFilterPage"]
    }
];
let ModalFilterPageRoutingModule = class ModalFilterPageRoutingModule {
};
ModalFilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalFilterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/modal-filter/modal-filter.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/team/modal-filter/modal-filter.module.ts ***!
  \****************************************************************/
/*! exports provided: ModalFilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFilterPageModule", function() { return ModalFilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-filter-routing.module */ "./src/app/pages/team/modal-filter/modal-filter-routing.module.ts");
/* harmony import */ var _modal_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-filter.page */ "./src/app/pages/team/modal-filter/modal-filter.page.ts");







let ModalFilterPageModule = class ModalFilterPageModule {
};
ModalFilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalFilterPageRoutingModule"]
        ],
        declarations: [_modal_filter_page__WEBPACK_IMPORTED_MODULE_6__["ModalFilterPage"]]
    })
], ModalFilterPageModule);



/***/ }),

/***/ "./src/app/pages/team/modal-filter/modal-filter.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/team/modal-filter/modal-filter.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vbW9kYWwtZmlsdGVyL21vZGFsLWZpbHRlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/team/modal-filter/modal-filter.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/team/modal-filter/modal-filter.page.ts ***!
  \**************************************************************/
/*! exports provided: ModalFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFilterPage", function() { return ModalFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/transfer-data.service */ "./src/app/services/transfer-data.service.ts");






let ModalFilterPage = class ModalFilterPage extends src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"] {
    constructor(viewCtrl, location, dataTranfer) {
        super(location, viewCtrl);
        this.viewCtrl = viewCtrl;
        this.location = location;
        this.dataTranfer = dataTranfer;
        this.teams = [];
        this.oldTeams = [];
        this.textSearch = '';
        this.teams = dataTranfer.getData('teams');
        this.oldTeams = [...this.teams];
    }
    initObject() {
    }
    dismiss(team) {
        this.viewCtrl.dismiss({
            team: team,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    filterTeams(text) {
        //let text = event.target.value;
        if (text.length <= 0) {
            this.teams = this.oldTeams;
            return;
        }
        this.teams = [...this.oldTeams];
        this.teams = this.teams.filter(team => team.name.toUpperCase().includes(text.toUpperCase()) || team.id == -1);
    }
    getFilter() {
        return this.teams.filter(team => team.name.toUpperCase().includes(this.textSearch.toUpperCase()) || team.id == -1);
    }
    cancelFilter($event) {
        this.teams = this.oldTeams;
    }
    filterChangue(event) {
        this.textSearch = event.detail.value;
        //this.filterTeams(text);
    }
    log(event) {
        console.log(event);
    }
};
ModalFilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] },
    { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_5__["TransferDataService"] }
];
ModalFilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-filter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/modal-filter/modal-filter.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-filter.page.scss */ "./src/app/pages/team/modal-filter/modal-filter.page.scss")).default]
    })
], ModalFilterPage);



/***/ })

}]);
//# sourceMappingURL=pages-team-modal-filter-modal-filter-module-es2015.js.map