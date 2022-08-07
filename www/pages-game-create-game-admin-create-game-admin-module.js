(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-create-game-admin-create-game-admin-module"],{

/***/ "./src/app/pages/game/create-game-admin/create-game-admin-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/game/create-game-admin/create-game-admin-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateGameAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameAdminPageRoutingModule", function() { return CreateGameAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_game_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-game-admin.page */ "./src/app/pages/game/create-game-admin/create-game-admin.page.ts");




var routes = [
    {
        path: '',
        component: _create_game_admin_page__WEBPACK_IMPORTED_MODULE_3__["CreateGameAdminPage"]
    }
];
var CreateGameAdminPageRoutingModule = /** @class */ (function () {
    function CreateGameAdminPageRoutingModule() {
    }
    CreateGameAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreateGameAdminPageRoutingModule);
    return CreateGameAdminPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/game/create-game-admin/create-game-admin.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/game/create-game-admin/create-game-admin.module.ts ***!
  \**************************************************************************/
/*! exports provided: CreateGameAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameAdminPageModule", function() { return CreateGameAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_game_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-game-admin-routing.module */ "./src/app/pages/game/create-game-admin/create-game-admin-routing.module.ts");
/* harmony import */ var _create_game_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-game-admin.page */ "./src/app/pages/game/create-game-admin/create-game-admin.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var CreateGameAdminPageModule = /** @class */ (function () {
    function CreateGameAdminPageModule() {
    }
    CreateGameAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_game_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateGameAdminPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_create_game_admin_page__WEBPACK_IMPORTED_MODULE_6__["CreateGameAdminPage"]]
        })
    ], CreateGameAdminPageModule);
    return CreateGameAdminPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-game-create-game-admin-create-game-admin-module.js.map