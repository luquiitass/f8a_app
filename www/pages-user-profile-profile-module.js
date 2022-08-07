(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/profile/profile.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/profile/profile.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Perfil de usuario</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"user\">\n    <ion-card-content>\n\n      <ion-img\n        [src]=\"utilPhoto.getPhotoUser(user)\">\n      </ion-img>\n\n    </ion-card-content>\n    <ion-card-header>\n      <ion-card-title>\n        {{user.completeName}}\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  \n  <ion-card *ngIf=\"user && user.publications.length > 0\">\n    <ion-card-header>\n      <ion-card-title>Publicaciones</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n\n      <app-publication \n        *ngFor=\"let publication of user.publications\"\n        [publication]=\"publication\"\n      ></app-publication>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user/profile/profile-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/profile/profile-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/user/profile/profile.page.ts");




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

/***/ "./src/app/pages/user/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/user/profile/profile.module.ts ***!
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
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/user/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/user/profile/profile.page.ts");
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

/***/ "./src/app/pages/user/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/user/profile/profile.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_profile {\n  width: 300px;\n  height: 300px;\n}\n\n.name {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX3Byb2ZpbGV7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5uYW1le1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/user/profile/profile.page.ts ***!
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
/* harmony import */ var src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util-photo.service */ "./src/app/services/util-photo.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(route, request, utilPhoto, dialogService) {
        this.route = route;
        this.request = request;
        this.utilPhoto = utilPhoto;
        this.dialogService = dialogService;
        this.firstLoading = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.userModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('User', request);
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.init();
    };
    ProfilePage.prototype.init = function ($event) {
        if ($event === void 0) { $event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.firstLoading) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        this.firstLoading = false;
                        _a.label = 2;
                    case 2:
                        this.userModel.api_functionModel(this.id, 'profilePage').subscribe(function (response) {
                            if (response['status'] == 'success') {
                                _this.user = response['data'];
                            }
                            if ($event)
                                $event.target.complete();
                            console.log(response);
                            _this.dialogService.dimissLoaging();
                        }, function (error) {
                            if ($event)
                                $event.target.complete();
                            console.log(error);
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
        { type: src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_5__["UtilPhotoService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
    ]; };
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/profile/profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/user/profile/profile.page.scss")).default]
        })
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-profile-profile-module.js.map