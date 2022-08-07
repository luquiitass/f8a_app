(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-field-show-show-module"],{

/***/ "./src/app/pages/field/show/show-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/field/show/show-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ShowPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPageRoutingModule", function() { return ShowPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _show_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show.page */ "./src/app/pages/field/show/show.page.ts");




var routes = [
    {
        path: '',
        component: _show_page__WEBPACK_IMPORTED_MODULE_3__["ShowPage"]
    }
];
var ShowPageRoutingModule = /** @class */ (function () {
    function ShowPageRoutingModule() {
    }
    ShowPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowPageRoutingModule);
    return ShowPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/field/show/show.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/field/show/show.module.ts ***!
  \*************************************************/
/*! exports provided: ShowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPageModule", function() { return ShowPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _show_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-routing.module */ "./src/app/pages/field/show/show-routing.module.ts");
/* harmony import */ var _show_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show.page */ "./src/app/pages/field/show/show.page.ts");







var ShowPageModule = /** @class */ (function () {
    function ShowPageModule() {
    }
    ShowPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _show_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowPageRoutingModule"]
            ],
            declarations: [_show_page__WEBPACK_IMPORTED_MODULE_6__["ShowPage"]]
        })
    ], ShowPageModule);
    return ShowPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-field-show-show-module.js.map