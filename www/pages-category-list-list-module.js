(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category-form/category-form.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category-form/category-form.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Categoría</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"    (keyup)=\"modelCategory.errorsForm.clear()\" >\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [value]=\"category.name\" name=\"name\"  (input)= \"category.name=$event.target.value\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ modelCategory.errorsForm.get('name') }}</div>\n\n\n    <ion-button (click)=\"submit()\" expand=\"block\">Guardar</ion-button>\n\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/list/list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/list/list.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"admin_home\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>Categoria</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"categoryService.api_all($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n      \n      <ion-list-header *ngIf=\"categoryService.list.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n   \n      <ion-item *ngFor=\"let item of categoryService.list\" >\n          \n        <ion-label >\n          <h3>{{item.name}}</h3>\n        </ion-label>\n\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"showEdit(item)\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"confirmDelete(item)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/category/category-form/category-form.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/category/category-form/category-form.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LWZvcm0vY2F0ZWdvcnktZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/category/category-form/category-form.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/category/category-form/category-form.page.ts ***!
  \********************************************************************/
/*! exports provided: CategoryFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFormPage", function() { return CategoryFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");








var CategoryFormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CategoryFormPage, _super);
    function CategoryFormPage(request, viewCtrl, navParams, dialogService, location) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.request = request;
        _this.viewCtrl = viewCtrl;
        _this.dialogService = dialogService;
        _this.modelCategory = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Category', request);
        _this.id = navParams.get('id');
        return _this;
    }
    CategoryFormPage.prototype.initObject = function () {
        var _this = this;
        console.log('initObject');
        this.category = {
            name: '',
        };
        if (this.id) {
            this.modelCategory.api_find(this.id).subscribe(function (data) {
                console.log('load category', data);
                if (data['status'] == 'success') {
                    _this.category = data['Category'];
                }
            });
        }
    };
    CategoryFormPage.prototype.submit = function () {
        var _this = this;
        if (this.category.id) {
            this.modelCategory.api_update(this.category).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Category']);
                }
            });
        }
        else {
            this.modelCategory.api_create(this.category).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Category']);
                }
            });
        }
    };
    CategoryFormPage.prototype.dismiss = function (category) {
        this.viewCtrl.dismiss({
            category: category,
        });
    };
    CategoryFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CategoryFormPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"] }
    ]; };
    CategoryFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-category-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category-form/category-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-form.page.scss */ "./src/app/pages/category/category-form/category-form.page.scss")).default]
        })
    ], CategoryFormPage);
    return CategoryFormPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__["ModalForm"]));



/***/ }),

/***/ "./src/app/pages/category/list/list-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/category/list/list-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/category/list/list.page.ts");




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

/***/ "./src/app/pages/category/list/list.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/category/list/list.module.ts ***!
  \****************************************************/
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
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/category/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/category/list/list.page.ts");







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

/***/ "./src/app/pages/category/list/list.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/category/list/list.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/category/list/list.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/category/list/list.page.ts ***!
  \**************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _category_form_category_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category-form/category-form.page */ "./src/app/pages/category/category-form/category-form.page.ts");







//import { CategoryFormPage } from '../category-form/category-form.page';
var ListPage = /** @class */ (function () {
    function ListPage(request, modalController, dialog) {
        this.request = request;
        this.modalController = modalController;
        this.dialog = dialog;
        this.categoryService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Category', request);
    }
    ListPage.prototype.ngOnInit = function () {
        this.categoryService.api_all();
    };
    ListPage.prototype.openModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _category_form_category_form_page__WEBPACK_IMPORTED_MODULE_6__["CategoryFormPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var category = data.data['category'];
                            _this.categoryService.listAddLast(category);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.showEdit = function (category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _category_form_category_form_page__WEBPACK_IMPORTED_MODULE_6__["CategoryFormPage"],
                            componentProps: { id: category.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                            _this.categoryService.listUpdate(category.id, category);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.confirmDelete = function (category) {
        var _this = this;
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este Categoría', function (e) {
            _this.delete(category);
        });
    };
    ListPage.prototype.delete = function (category) {
        var _this = this;
        this.categoryService.api_delete(category.id).subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                _this.dialog.showToast('Categoría Eliminado', null, 'success');
                _this.categoryService.listDelete(category.id);
            }
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
    ]; };
    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/list/list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/category/list/list.page.scss")).default]
        })
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-list-list-module.js.map