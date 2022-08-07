(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Jugador</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"secondary\">\n    <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n      <ion-icon name=\"help-circle-outline\"></ion-icon>\n    </ion-button>  \n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePlayer.errorsForm.clear()\" >\n\n\n    <ion-item *ngIf=\"canEditUser\">\n      <ion-label position=\"floating\" >Usuario</ion-label>\n      <ion-input type=\"text\" [value]=\"userSelect\" name=\"email\" (click)=\"selectUser()\"></ion-input>\n      <ion-input type=\"hidden\" [(ngModel)]=\"player.user_id\" name=\"user_id\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('user_id') }}</div>\n\n    <div class=\"ion-text-center\">\n      <img id=\"img_photo\"  [src]=\"photoModel.photo.getPath()\" >\n      <div class=\"ion-text-center\">\n        <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoModel.addOneNewToGallery()\">{{photoModel.isLoadPthoto() ? 'Modificar' : 'Seleccionar Imagen' }}</ion-button>\n      </div>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('name') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Fecha de nacimiento</ion-label>\n      <ion-datetime [(ngModel)]=\"player.birth_date\" name=\"birth_date\"    displayFormat=\"DD-MM-YYYY\" ></ion-datetime>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('birth_date') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Apodo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.nick\" name=\"nick\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('nick') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Numero</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.number\" name=\"number\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('number') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Altura</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.height\" name=\"height\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('height') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Peso</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.weight\" name=\"weight\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('weight') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Posicion</ion-label>\n      <ion-select [(ngModel)]=\"player.position_id\" name=\"position_id\">\n        <ion-select-option [value]=\"pos.id\" *ngFor=\"let pos of servicePosition.list\">{{ pos.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('position_id') }}</div>\n    </ion-item>\n\n    <div class=\"ion-text-center ion-margin-top\" >\n      <ion-text color=\"danger\" *ngIf=\"!(isAutor || canEditUser )\" >\n        Este Jugador ya tiene asignado un administrador, solo él puede modificar los datos.\n      </ion-text>   \n    </div>\n   \n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\" !(isAutor || canEditUser ) \" class=\"ion-margin\">\n      Guardar\n    </ion-button>\n   \n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/player/player-form/player-form.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/player/player-form/player-form.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItZm9ybS9wbGF5ZXItZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/player/player-form/player-form.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/player/player-form/player-form.page.ts ***!
  \**************************************************************/
/*! exports provided: PlayerFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerFormPage", function() { return PlayerFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");














var PlayerFormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PlayerFormPage, _super);
    function PlayerFormPage(request, dialogService, viewCtrl, navParams, modalController, authUser, alertController, router, location, chatService, util) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.request = request;
        _this.dialogService = dialogService;
        _this.viewCtrl = viewCtrl;
        _this.modalController = modalController;
        _this.authUser = authUser;
        _this.alertController = alertController;
        _this.router = router;
        _this.chatService = chatService;
        _this.util = util;
        _this.isUser = false;
        _this.canEditUser = true;
        _this.servicePosition = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Position', request);
        _this.servicePlayer = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Player', request);
        console.log('ver');
        _this.id = navParams.get('id');
        _this.team_id = navParams.get('team_id');
        _this.isUser = navParams.get('isUser');
        _this.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);
        _this.photoModel.setAspectRatioCrop('1 / 1');
        _this.photoModel.init('images/players/profile/', true, 'assets/images/jugador.png');
        _this.photoModel.setElementImg('img_photo');
        return _this;
    }
    PlayerFormPage.prototype.initObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.player = {
                            'name': '',
                            'nick': '',
                            'birth_date': '',
                            'number': 1,
                            'height': 0,
                            'weight': 0,
                            'position_id': '',
                            'team_id': this.team_id,
                            'photo_id': ''
                        };
                        this.servicePosition.api_all();
                        if (!this.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dialogService.loadingProgres(null)];
                    case 1:
                        _a.sent();
                        this.servicePlayer.api_find(this.id).subscribe(function (data) {
                            if (data['status'] == 'success') {
                                _this.player = data['Player'];
                                if (_this.player.photo)
                                    _this.photoModel.setImage(_this.player.photo);
                                _this.canEditUser = (_this.player && !_this.player.user_id);
                                _this.dialogService.dimissLoaging();
                            }
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PlayerFormPage.prototype.submit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.photoModel.isLoadPthoto()) {
                    this.savePhoto();
                    return [2 /*return*/];
                }
                this.savePlayer();
                return [2 /*return*/];
            });
        });
    };
    PlayerFormPage.prototype.dismiss = function (player) {
        this.viewCtrl.dismiss({
            player: player,
        });
    };
    PlayerFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PlayerFormPage.prototype.savePhoto = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dialogService.loadingProgres('Subiendo foto...');
                        return [4 /*yield*/, this.photoModel.uploadImage().subscribe(function (data) {
                                if (data['status'] == 'success') {
                                    var image = data['Image'];
                                    _this.player.photo_id = image.id;
                                    _this.savePlayer();
                                    _this.dialogService.dimissLoaging();
                                }
                            }, function (error) {
                                _this.dialogService.dimissLoaging();
                                _this.dialogService.showToast('Error al subir Portada', 'Error', 'danger');
                                //this.submit();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerFormPage.prototype.savePlayer = function () {
        var _this = this;
        this.player.birth_date = this.util.setFormatMoment(this.player.birth_date, 'YYYY-MM-DD');
        if (this.player.id) {
            this.dialogService.loadingProgres('Procesando, espere..');
            this.servicePlayer.api_update(this.player).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Player']);
                    _this.dialogService.dimissLoaging();
                }
            }, function (error) {
                _this.dialogService.dimissLoaging();
            });
        }
        else {
            this.dialogService.loadingProgres('Procesando, espere..');
            this.servicePlayer.api_create(this.player).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Player']);
                    _this.dialogService.dimissLoaging();
                }
            }, function (error) {
                _this.dialogService.dimissLoaging();
            });
        }
    };
    PlayerFormPage.prototype.selectUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //e.preventDefault();
                        console.log('Add admins');
                        return [4 /*yield*/, this.modalController.create({
                                component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"],
                                componentProps: {
                                    cancellable: false,
                                    model: 'User',
                                    function: 'searchUser',
                                    multiple: false
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            var user = data.data ? data.data['item'] : null;
                            if (user) {
                                if (!user.player) {
                                    _this.player.user_id = user.id;
                                    _this.player.email = user.text;
                                }
                                else {
                                    _this.userWithPlayer(user);
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlayerFormPage.prototype.userWithPlayer = function (user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Atención',
                            message: "<b>" + user.text + "</b> ya tiene asociado un jugador. Puedes enviarle una solicitud para que se incorpore a este equipo.",
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Solicitar',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.router.navigateByUrl("team-request/" + _this.team_id + "/" + user.player.id);
                                        _this.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(PlayerFormPage.prototype, "isAutor", {
        get: function () {
            return this.player && this.authUser.user.id == this.player.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerFormPage.prototype, "isAdminGeneral", {
        get: function () {
            return this.authUser.isAdmin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerFormPage.prototype, "userSelect", {
        get: function () {
            return this.player.user_id ? (this.player.user ? this.player.user.email : this.player.email) : '';
        },
        enumerable: false,
        configurable: true
    });
    PlayerFormPage.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"] },
        { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"] }
    ]; };
    PlayerFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-form.page.scss */ "./src/app/pages/player/player-form/player-form.page.scss")).default]
        })
    ], PlayerFormPage);
    return PlayerFormPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_10__["ModalForm"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a.js.map