(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-publications-form-publication-form-publication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Nueva Publicación</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #form_c>\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePublication.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-avatar *ngIf=\"user\"> \n        <ion-img [src]=\"user.photo ? user.photo.urlCompleteThumb : pathImages.images.profile_user \" ></ion-img>\n      </ion-avatar>\n      <label class=\"name-user\">{{user.completeName}}</label>\n    </ion-item>\n\n    <div class=\"separador\"></div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Escribe aqui...</ion-label>\n      <ion-textarea  class=\"editor-text\" [(ngModel)]=\"publication.text\" name=\"text\"  ></ion-textarea>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('text') }}</div>\n\n    <!-- <ion-item *ngIf=\"false\">\n      <ion-label position=\"floating\">Mencionar Equipo</ion-label>\n      <ion-select [(ngModel)]=\"publication.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('l_team') }}</div>\n    </ion-item> -->\n\n    <ion-item *ngIf=\"photoModel.isLoadPthoto() || photoModel.hasImage()\">\n      <img id=\"img_publication\"  [src]=\"photoModel.photo.getPath()\" >\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\"  fill=\"outline\"  (click)=\"photoModel.addOneNewToGallery()\" >\n      <ion-icon  name=\"image\" slot=\"start\"></ion-icon>\n      Foto\n    </ion-button> \n\n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"posting\">\n      <ion-spinner name=\"lines\" *ngIf=\"posting\" ></ion-spinner>\n      Publicar\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: FormPublicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPageRoutingModule", function() { return FormPublicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_publication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-publication.page */ "./src/app/pages/publications/form-publication/form-publication.page.ts");




var routes = [
    {
        path: '',
        component: _form_publication_page__WEBPACK_IMPORTED_MODULE_3__["FormPublicationPage"]
    }
];
var FormPublicationPageRoutingModule = /** @class */ (function () {
    function FormPublicationPageRoutingModule() {
    }
    FormPublicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FormPublicationPageRoutingModule);
    return FormPublicationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.module.ts ***!
  \********************************************************************************/
/*! exports provided: FormPublicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPageModule", function() { return FormPublicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_publication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-publication-routing.module */ "./src/app/pages/publications/form-publication/form-publication-routing.module.ts");
/* harmony import */ var _form_publication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-publication.page */ "./src/app/pages/publications/form-publication/form-publication.page.ts");







var FormPublicationPageModule = /** @class */ (function () {
    function FormPublicationPageModule() {
    }
    FormPublicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _form_publication_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPublicationPageRoutingModule"]
            ],
            declarations: [_form_publication_page__WEBPACK_IMPORTED_MODULE_6__["FormPublicationPage"]]
        })
    ], FormPublicationPageModule);
    return FormPublicationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name-user {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL2Zvcm0tcHVibGljYXRpb24vZm9ybS1wdWJsaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL2Zvcm0tcHVibGljYXRpb24vZm9ybS1wdWJsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS11c2Vye1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.page.ts ***!
  \******************************************************************************/
/*! exports provided: FormPublicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPage", function() { return FormPublicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/paths-images.service */ "./src/app/services/paths-images.service.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");













var FormPublicationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormPublicationPage, _super);
    function FormPublicationPage(request, dialogService, viewCtrl, photoService, navParams, authUser, pathImages, location, chatService) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.request = request;
        _this.dialogService = dialogService;
        _this.viewCtrl = viewCtrl;
        _this.photoService = photoService;
        _this.authUser = authUser;
        _this.pathImages = pathImages;
        _this.chatService = chatService;
        _this.posting = false;
        _this.myDateFilter = function (d) {
            var day = d.getDay();
            return day == 6;
        };
        _this.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__["ModelImage"](request, viewCtrl);
        _this.photoModel.init('images/publications/', false);
        _this.photoModel.setAspectRatioCrop('none');
        _this.servicePublication = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Publication', request);
        //this.serviceTeam.setModel('Team');
        console.log('user auth', authUser.user);
        _this.id = navParams.get('id');
        return _this;
    }
    FormPublicationPage.prototype.initObject = function () {
        var _this = this;
        this.photoModel.setElementImg('img_publication');
        this.user = this.authUser.user; //await this.authUser.getUser();
        console.log('user', this.user);
        this.publication = {
            text: '',
            user_id: this.user.id
        };
        if (this.id) {
            this.servicePublication.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                    _this.publication = data['Publication'];
                    if (_this.publication.image) {
                        _this.photoModel.setImage(_this.publication.image);
                    }
                }
            });
        }
    };
    FormPublicationPage.prototype.submit = function () {
        var _this = this;
        try {
            this.validSend();
        }
        catch (e) {
            this.dialogService.showToast(e.message, null, 'danger');
            return;
        }
        if (this.photoModel.isLoadPthoto()) {
            this.publication.image = this.photoModel.getImageUpload();
        }
        this.posting = true;
        if (this.publication.id) {
            this.servicePublication.api_update(this.publication).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    _this.dismiss(data['Publication']);
                }
                _this.posting = false;
            }, function (error) {
                _this.posting = false;
            });
        }
        else {
            this.servicePublication.api_create(this.publication).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Publication']);
                }
                _this.posting = false;
            }, function (error) {
                _this.posting = false;
            });
        }
    };
    FormPublicationPage.prototype.validSend = function () {
        console.log('valid');
        if (!this.photoModel.isLoadPthoto() && this.publication.text.length == 0) {
            throw new Error('Debe escribir algo en la publicación o añadir una imagen.');
        }
    };
    FormPublicationPage.prototype.dismiss = function (publication) {
        this.viewCtrl.dismiss({
            publication: publication,
        });
    };
    FormPublicationPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FormPublicationPage.prototype.print = function () {
        console.log(this.publication);
    };
    FormPublicationPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
        { type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_9__["PathsImagesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"] },
        { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"] }
    ]; };
    FormPublicationPage.propDecorators = {
        form_c: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['form_c',] }],
        img_publication: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['img_publication',] }]
    };
    FormPublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-publication',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-publication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-publication.page.scss */ "./src/app/pages/publications/form-publication/form-publication.page.scss")).default]
        })
    ], FormPublicationPage);
    return FormPublicationPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_10__["ModalForm"]));



/***/ }),

/***/ "./src/app/services/paths-images.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/paths-images.service.ts ***!
  \**************************************************/
/*! exports provided: PathsImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathsImagesService", function() { return PathsImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PathsImagesService = /** @class */ (function () {
    function PathsImagesService() {
        this.images = {
            'profile_user': 'assets/images/profile.jpg',
            'escudo': 'assets/images/escudo.png',
            'team': 'assets/images/shield_team.png',
            'player': 'assets/images/jugador.png'
        };
    }
    PathsImagesService.ctorParameters = function () { return []; };
    PathsImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PathsImagesService);
    return PathsImagesService;
}());



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



/***/ })

}]);
//# sourceMappingURL=pages-publications-form-publication-form-publication-module.js.map