(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Photo Gallery</ion-title>  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\" \n      *ngFor=\"let photo of photoService.photos; index as position\">\n        <ion-img [src]=\"photo.webviewPath\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addPhotoToGallery()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

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





var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera, Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Filesystem, Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;
var PhotoService = /** @class */ (function () {
    function PhotoService(request) {
        this.photos = [];
        this.convertBlobToBase64 = function (blob) { return new Promise(function (resolve, reject) {
            var reader = new FileReader;
            reader.onerror = reject;
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        }); };
        this.serviceImage = new _api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Image', request);
    }
    PhotoService.prototype.init = function (url, thumb, pathDefault) {
        if (thumb === void 0) { thumb = true; }
        if (pathDefault === void 0) { pathDefault = 'assets/images/pngwing.png'; }
        this.url = url !== null && url !== void 0 ? url : '/images/';
        this.thumb = thumb !== null && thumb !== void 0 ? thumb : false;
        this.path = pathDefault;
        this.photo = new Photo(pathDefault);
    };
    PhotoService.prototype.setImage = function (image) {
        this.image = image;
        this.photo.image = image;
    };
    PhotoService.prototype.addNewToGallery = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var capturedPhoto, base64Data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Camera.getPhoto({
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                            quality: 100
                        })];
                    case 1:
                        capturedPhoto = _a.sent();
                        return [4 /*yield*/, this.readAsBase64(capturedPhoto)];
                    case 2:
                        base64Data = _a.sent();
                        this.photos.unshift(new Photo(null, capturedPhoto.webPath, base64Data, this.url, this.thumb));
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.addOneNewToGallery = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var capturedPhoto, base64Data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Camera.getPhoto({
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                            quality: 100
                        })];
                    case 1:
                        capturedPhoto = _a.sent();
                        return [4 /*yield*/, this.readAsBase64(capturedPhoto)];
                    case 2:
                        base64Data = _a.sent();
                        this.photo = new Photo(capturedPhoto.webPath, base64Data, base64Data, this.url, this.thumb, this.image);
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.isLoadPthoto = function () {
        return this.photo.data ? true : false;
    };
    PhotoService.prototype.readAsBase64 = function (cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var response, blob;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(cameraPhoto.webPath)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        blob = _a.sent();
                        return [4 /*yield*/, this.convertBlobToBase64(blob)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PhotoService.prototype.uploadImage = function () {
        if (this.isLoadPthoto()) {
            if (this.photo.id) {
                return this.serviceImage.api_update(this.photo);
            }
            else {
                return this.serviceImage.api_create(this.photo);
            }
        }
    };
    PhotoService.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }
    ]; };
    PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PhotoService);
    return PhotoService;
}());

var Photo = /** @class */ (function () {
    function Photo(filepath, webviewPath, data, url, thumb, image) {
        if (filepath === void 0) { filepath = "assets/images/pngwing.png"; }
        if (webviewPath === void 0) { webviewPath = null; }
        if (data === void 0) { data = ''; }
        if (url === void 0) { url = ''; }
        if (thumb === void 0) { thumb = false; }
        if (image === void 0) { image = null; }
        this.id = image ? image.id : '';
        this.webviewPath = webviewPath;
        this.filepath = filepath;
        this.data = data;
        this.url = url;
        this.thumb = thumb;
        this.image = image;
    }
    Photo.prototype.getPath = function () {
        if (this.webviewPath) {
            return this.webviewPath;
        }
        else if (this.image && this.image['urlComplete']) {
            return this.image['urlComplete'];
        }
        else {
            return this.filepath;
        }
    };
    return Photo;
}());



/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




var routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
var Tab2PageRoutingModule = /** @class */ (function () {
    function Tab2PageRoutingModule() {
    }
    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Tab2PageRoutingModule);
    return Tab2PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/photo.service */ "./src/app/services/photo.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(photoService) {
        this.photoService = photoService;
    }
    Tab2Page.prototype.addPhotoToGallery = function () {
        this.photoService.addNewToGallery();
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] }
    ]; };
    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
        })
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map