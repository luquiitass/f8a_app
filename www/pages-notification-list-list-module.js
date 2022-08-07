(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/list/list.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/list/list.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home/results\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>Notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list>\n\n    <ion-list-header *ngIf=\"notifications.length == 0\"  color=\"light\">\n      <ion-label>No posee notificaciones</ion-label>\n    </ion-list-header>\n \n\n      <app-notification\n        *ngFor=\"let not of notifications\"  (click)=\"visibleNot(not)\" [class]=\"{'no-active' : not.isShow}\"\n        style=\"width: 100%;\"\n        [notification] = \"not\"\n      ></app-notification>\n\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/notification/list/list-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/notification/list/list-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/notification/list/list.page.ts");




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

/***/ "./src/app/pages/notification/list/list.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/notification/list/list.module.ts ***!
  \********************************************************/
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
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/notification/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/notification/list/list.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notification/list/list.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/notification/list/list.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-active {\n  --ion-background-color: #e9ebee !important;\n}\n\n.date {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWFjdGl2ZXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTllYmVlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRle1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/notification/list/list.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/notification/list/list.page.ts ***!
  \******************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/screen-loading.service */ "./src/app/services/screen-loading.service.ts");








var ListPage = /** @class */ (function () {
    function ListPage(request, userAuth, utilArray, navCtrl, loading) {
        this.request = request;
        this.userAuth = userAuth;
        this.utilArray = utilArray;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.notifications = [];
        this.firstLoading = true;
        this.notificationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Notification', request);
        this.userModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('User', request);
    }
    ListPage.prototype.ngOnInit = function () {
        this.notifications = this.userAuth.user.notifications ? this.userAuth.user.notifications : [];
        this.init();
    };
    ListPage.prototype.init = function ($event, paginate) {
        if ($event === void 0) { $event = null; }
        if (paginate === void 0) { paginate = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var page;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                page = {};
                if (paginate && this.dataPaginate) {
                    page = {
                        page: this.dataPaginate.current_page + 1
                    };
                }
                this.loading.start();
                this.userModel.api_functionModel(this.userAuth.user.id, 'resetNotifications').subscribe(function () {
                    console.log('restart count  notifications');
                    _this.userAuth.user.counts_not = 0;
                    _this.userAuth.saveUser();
                    _this.loading.end();
                }, function (error) {
                    _this.loading.end();
                });
                this.userModel.api_functionModel(this.userAuth.user.id, 'pageNotifications', page).subscribe(function (response) {
                    var e_1, _a;
                    console.log(response);
                    if (response['status'] == 'success') {
                        _this.dataPaginate = response['data'];
                        if (!paginate) {
                            _this.notifications = response['data']['data'];
                        }
                        else {
                            try {
                                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(response['data']['data']), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var not = _c.value;
                                    _this.notifications.push(not);
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
                    if ($event)
                        $event.target.complete();
                    _this.firstLoading = false;
                }, function (error) {
                    console.log(error);
                    if ($event)
                        $event.target.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    ListPage.prototype.openModal = function () {
    };
    ListPage.prototype.loadData = function (event) {
        if (this.dataPaginate && this.dataPaginate.last_page == this.dataPaginate.current_page) {
            event.target.complete();
            event.target.disabled = true;
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
            return;
        }
        this.init(event, true);
    };
    ListPage.prototype.visibleNot = function (not) {
        var _this = this;
        if (not.id)
            this.notificationModel.api_functionModel(not.id, 'viewed').subscribe(function (response) {
                var notification = response['data'];
                _this.utilArray.listUpdate(_this.notifications, notification.id, notification);
            });
        this.navCtrl.navigateForward(not.route);
    };
    ListPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_5__["UtilArrayService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_7__["ScreenLoadingService"] }
    ]; };
    ListPage.propDecorators = {
        infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"],] }]
    };
    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/list/list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/notification/list/list.page.scss")).default]
        })
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-notification-list-list-module.js.map