(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expenses-form-expense-form-expense-module"],{

/***/ "./src/app/pages/expenses/form-expense/form-expense-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/expenses/form-expense/form-expense-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FormExpensePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExpensePageRoutingModule", function() { return FormExpensePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-expense.page */ "./src/app/pages/expenses/form-expense/form-expense.page.ts");




var routes = [
    {
        path: '',
        component: _form_expense_page__WEBPACK_IMPORTED_MODULE_3__["FormExpensePage"]
    }
];
var FormExpensePageRoutingModule = /** @class */ (function () {
    function FormExpensePageRoutingModule() {
    }
    FormExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FormExpensePageRoutingModule);
    return FormExpensePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/expenses/form-expense/form-expense.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/expenses/form-expense/form-expense.module.ts ***!
  \********************************************************************/
/*! exports provided: FormExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExpensePageModule", function() { return FormExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-expense-routing.module */ "./src/app/pages/expenses/form-expense/form-expense-routing.module.ts");
/* harmony import */ var _form_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-expense.page */ "./src/app/pages/expenses/form-expense/form-expense.page.ts");







var FormExpensePageModule = /** @class */ (function () {
    function FormExpensePageModule() {
    }
    FormExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _form_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormExpensePageRoutingModule"]
            ],
            declarations: [_form_expense_page__WEBPACK_IMPORTED_MODULE_6__["FormExpensePage"]]
        })
    ], FormExpensePageModule);
    return FormExpensePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expenses-form-expense-form-expense-module.js.map