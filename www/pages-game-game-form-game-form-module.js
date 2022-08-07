(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-game-form-game-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceGame.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Equipo local</ion-label>\n      <ion-select [(ngModel)]=\"game.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_team') }}</div>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Equipo Vicitante</ion-label>\n      <ion-select [(ngModel)]=\"game.v_team\" name=\"v_team\">\n        <ion-select-option [value]=\"v_team.id\" *ngFor=\"let v_team of teams\">{{ v_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_team') }}</div>\n    </ion-item>\n\n    <div *ngIf=\"game.other_team\">\n      <ion-item >\n        <ion-label position=\"floating\" >Otro Equipo</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"game.other_team\" name=\"other_team\"></ion-input>\n      </ion-item>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('other_team') }}</div>\n  \n      <ion-button size=\"sm\" (click)=\"newTeam()\">Nuevo equipo</ion-button>\n    </div>\n  \n    <br>\n\n    <div class=\"goals\">\n\n      <ion-item>\n        <ion-label position=\"floating\">Goles L</ion-label>\n        <ion-select [(ngModel)]=\"game.l_goals\" name=\"l_goals\">\n          <ion-select-option [value]=\"i\" *ngFor=\"let i of numbGoals\">{{ i }}</ion-select-option>\n        </ion-select>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_goals') }}</div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Goles V</ion-label>\n        <ion-select [(ngModel)]=\"game.v_goals\" name=\"v_goals\" >\n          <ion-select-option [value]=\"e\" *ngFor=\"let e of numbGoals\">{{ e }}</ion-select-option>\n        </ion-select>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_goals') }}</div>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <ion-label>HH:mm</ion-label>\n      <ion-datetime \n        [(ngModel)]=\"game.time\" \n        displayFormat=\"HH:mm \"  \n        name=\"time\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Lugar</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.location\" name=\"location\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('location') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Comentario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.description\" name=\"description\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('description') }}</div>\n\n    <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime \n        name=\"date\"\n        [(ngModel)]=\"game.date\"\n        displayFormat=\"YYYY-MM-DD\"\n        ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Estado</ion-label>\n      <ion-select [(ngModel)]=\"game.status\" name=\"status\">\n        <ion-select-option [value]=\"i\" *ngFor=\"let i of status\">{{ i }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('status') }}</div>\n    </ion-item>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/game-form/game-form-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/game/game-form/game-form-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: GameFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormPageRoutingModule", function() { return GameFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _game_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-form.page */ "./src/app/pages/game/game-form/game-form.page.ts");




var routes = [
    {
        path: '',
        component: _game_form_page__WEBPACK_IMPORTED_MODULE_3__["GameFormPage"]
    }
];
var GameFormPageRoutingModule = /** @class */ (function () {
    function GameFormPageRoutingModule() {
    }
    GameFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GameFormPageRoutingModule);
    return GameFormPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/game/game-form/game-form.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/game/game-form/game-form.module.ts ***!
  \**********************************************************/
/*! exports provided: GameFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormPageModule", function() { return GameFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _game_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-form-routing.module */ "./src/app/pages/game/game-form/game-form-routing.module.ts");
/* harmony import */ var _game_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-form.page */ "./src/app/pages/game/game-form/game-form.page.ts");







var GameFormPageModule = /** @class */ (function () {
    function GameFormPageModule() {
    }
    GameFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _game_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["GameFormPageRoutingModule"]
            ],
            declarations: [_game_form_page__WEBPACK_IMPORTED_MODULE_6__["GameFormPage"]]
        })
    ], GameFormPageModule);
    return GameFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/game/game-form/game-form.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/game/game-form/game-form.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS1mb3JtL2dhbWUtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/game/game-form/game-form.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game/game-form/game-form.page.ts ***!
  \********************************************************/
/*! exports provided: GameFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormPage", function() { return GameFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _team_form_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../team/form/form.page */ "./src/app/pages/team/form/form.page.ts");








var GameFormPage = /** @class */ (function () {
    function GameFormPage(request, dialogService, viewCtrl, photoService, navParams, modalController) {
        var _a;
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.modalController = modalController;
        this.teams = [];
        this.numbGoals = [];
        this.customDayShortNames = ['s\u00f8n'];
        this.status = ['Pendiente', 'Suspendido', 'Jugado', 'Created'];
        this.myDateFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day == 6;
        };
        this.serviceGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Game', request);
        this.serviceTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Team', request);
        //this.serviceTeam.setModel('Team');
        this.id = navParams.get('id');
        this.toDate = (_a = navParams.get('date')) !== null && _a !== void 0 ? _a : new Date();
        console.log('date', this.toDate);
    }
    GameFormPage.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceTeam.api_function('getAllTeamsSelect').subscribe(function (data) {
            if (data['data']) {
                _this.teams = data['data'];
                console.log('teams -> ', _this.teams);
                //this.serviceGame.setModel('Game');
            }
        });
        for (var i = 0; i <= 30; i++) {
            this.numbGoals.push(i);
        }
        this.initObject();
    };
    GameFormPage.prototype.initObject = function () {
        var _this = this;
        this.game = {
            l_team: '',
            v_team: '',
            l_goals: 0,
            v_goals: 0,
            time: '15:00',
            date: this.toDate,
            location: '',
            description: '',
            status: 'Pendiente'
        };
        if (this.id) {
            this.serviceGame.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                    _this.game = data['Game'];
                }
            });
        }
    };
    GameFormPage.prototype.submit = function () {
        var _this = this;
        if (this.game.id) {
            this.serviceGame.api_update(this.game).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    _this.dismiss(data['Game']);
                }
            });
        }
        else {
            this.serviceGame.api_create(this.game).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Game']);
                }
            });
        }
    };
    GameFormPage.prototype.dismiss = function (game) {
        this.viewCtrl.dismiss({
            game: game,
        });
    };
    GameFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    GameFormPage.prototype.print = function () {
        console.log(this.game);
    };
    GameFormPage.prototype.newTeam = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _team_form_form_page__WEBPACK_IMPORTED_MODULE_7__["FormPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data['team']) {
                                var team = data.data['team'];
                                _this.teams.push(team);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GameFormPage.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    GameFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./game-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game-form.page.scss */ "./src/app/pages/game/game-form/game-form.page.scss")).default]
        })
    ], GameFormPage);
    return GameFormPage;
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
//# sourceMappingURL=pages-game-game-form-game-form-module.js.map