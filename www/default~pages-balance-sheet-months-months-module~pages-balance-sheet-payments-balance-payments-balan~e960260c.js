(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~e960260c"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"eventModel.errorsForm.clear()\" *ngIf=\"dataEvent\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Tipo de Evento</ion-label>\n      <ion-select [(ngModel)]=\"event.type_event_id\" name=\"type_event_id\">\n        <ion-select-option [value]=\"type_event.id\" *ngFor=\"let type_event of dataEvent.types_events\">{{ type_event.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('type_event_id') }}</div>\n    </ion-item>\n    \n    <ion-item *ngIf=\"!team_admin || twoTeam\">\n      <ion-label position=\"floating\">Equipo</ion-label>\n      <ion-select [(ngModel)]=\"event.team_id\" name=\"team_id\">\n        <ion-select-option [value]=\"team.id\" *ngFor=\"let team of dataEvent.teams\">{{ team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('team_id') }}</div>\n    </ion-item>\n \n\n    <ion-item>\n      <ion-label position=\"floating\">Jugador</ion-label> \n       <ion-select [(ngModel)]=\"event.player_id\" name=\"player_id\">\n        <ion-select-option [value]=\"player.id\" *ngFor=\"let player of getPlayers()\">{{ player.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('player_id') }}</div>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Tiempo</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"event.time\" name=\"time\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('time') }}</div> \n\n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Suscripción pendiente</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-text class=\"text\">\n        Para que los administradores de este equipo puedan crear y modificar : \n      </ion-text>\n      <ul>\n        <li>Jugadores</li>\n        <li>Redes sociales</li>\n        <li>Canchas</li>\n        <li>Nombre</li>\n        <li>Fotos de portada y escudo</li>\n        <li>Sucesos de partidos</li>\n        <li>Mas...</li>\n      </ul>\n      <ion-text class=\"text\">\n        Es necesario que el equipo se encuentre subscrito.\n      </ion-text>\n\n      <br>\n      <div class=\"ion-margin-top ionic-text-center\">\n        <ion-button (click)=\"goPayment()\" class=\"ion-float-right\" > Subscribir equipo</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.ts ***!
  \***********************************************************/
/*! exports provided: EventFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormPage", function() { return EventFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/payment-team.service */ "./src/app/services/payment-team.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










var EventFormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventFormPage, _super);
    function EventFormPage(navParams, requestService, dialogService, viewCtrl, utilArray, paymentTeamService, location) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.navParams = navParams;
        _this.requestService = requestService;
        _this.dialogService = dialogService;
        _this.viewCtrl = viewCtrl;
        _this.utilArray = utilArray;
        _this.paymentTeamService = paymentTeamService;
        _this.twoTeam = false;
        //valid goals
        _this.events = [];
        _this.myDateFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day == 6;
        };
        _this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requestService);
        _this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Event', requestService);
        _this.game_id = navParams.get('game_id');
        _this.twoTeam = navParams.get('twoTeam');
        _this.id = navParams.get('id');
        _this.team_admin = navParams.get('team_admin');
        _this.events = navParams.get('events');
        _this.game = navParams.get('game');
        return _this;
    }
    EventFormPage.prototype.initObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        this.loadEvent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    EventFormPage.prototype.loadEvent = function () {
        if (this.id) {
        }
        else {
            this.event = {
                game_id: this.game_id,
                type_event_id: '',
                player_id: '',
                team_id: this.team_admin ? this.team_admin.id : '',
                time: ''
            };
        }
    };
    EventFormPage.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventModel.api_function('dataEventCreate', { game_id: this.game_id }).subscribe(function (data) {
                            if (data['status'] == 'success') {
                                _this.dataEvent = data['data'];
                                _this.types_events = _this.dataEvent['types_events'];
                            }
                            console.log('ty', _this.types_events);
                            console.log(_this.dataEvent);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventFormPage.prototype.getPlayers = function () {
        var id = this.event.team_id;
        if (this.team_admin)
            id = this.event.team_id;
        if (id) {
            var team = this.dataEvent.teams.find(function (t) { return t.id === id; });
            if (team)
                return team.players;
        }
        return [];
    };
    EventFormPage.prototype.submit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_1, teamSelect;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.isValid()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.dialogService.showToast(e_1.message, 'Error', 'danger');
                        return [2 /*return*/];
                    case 3:
                        teamSelect = this.game['team_' + this.getTeamType()];
                        this.paymentTeamService.setTeam(teamSelect);
                        if (!this.paymentTeamService.noPaid()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.close()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.paymentTeamService.showAlert()];
                    case 5:
                        _a.sent();
                        //this.close();
                        return [2 /*return*/];
                    case 6:
                        if (this.event.id) {
                            this.eventModel.api_update(this.event).subscribe(function (data) {
                                var _a;
                                if (data['status'] == 'success') {
                                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                                    console.log(data);
                                    _this.dismiss(data['Event']);
                                }
                            });
                        }
                        else {
                            this.eventModel.api_create(this.event).subscribe(function (data) {
                                var _a;
                                if (data['status'] == 'success') {
                                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                                    _this.dismiss(data['Event']);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EventFormPage.prototype.dismiss = function (event) {
        this.viewCtrl.dismiss({
            event: event,
        });
    };
    EventFormPage.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewCtrl.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventFormPage.prototype.print = function () {
        console.log(this.event);
    };
    EventFormPage.prototype.isValid = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var type_team, eventSelect, total_golas, total_goals_reg;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.event.team_id) {
                    throw new Error('Seleccione un equipo');
                }
                if (!this.event.type_event_id) {
                    throw new Error('Seleccione un evento');
                }
                type_team = this.getTeamType();
                eventSelect = this.utilArray.findList(this.types_events, this.event.type_event_id);
                //Validaciones de los goles registrados
                if (eventSelect && eventSelect.name == 'Gol') {
                    total_golas = this.game[type_team + '_goals'];
                    total_goals_reg = this.events.filter(function (e) { return e.team_id == _this.event.team_id && e.type_event.name == 'Gol'; }).length;
                    if ((total_goals_reg + 1) > total_golas)
                        throw new Error(total_golas == 0 ? "El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento." : "No puede a\u00F1adir m\u00E1s de " + total_golas + " goles para \u00E9ste equipo en \u00E9ste partido.");
                }
                return [2 /*return*/, true];
            });
        });
    };
    EventFormPage.prototype.getTeamType = function () {
        var type_team = 'l'; //Local o visitante
        if (this.game.v_team == this.event.team_id) {
            type_team = 'v';
        }
        return type_team;
    };
    EventFormPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_7__["UtilArrayService"] },
        { type: src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_8__["PaymentTeamService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"] }
    ]; };
    EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-form.page.scss */ "./src/app/pages/event/event-form/event-form.page.scss")).default]
        })
    ], EventFormPage);
    return EventFormPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__["ModalForm"]));



/***/ }),

/***/ "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/payment/alert-create-team/alert-create-team.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9hbGVydC1jcmVhdGUtdGVhbS9hbGVydC1jcmVhdGUtdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9hbGVydC1jcmVhdGUtdGVhbS9hbGVydC1jcmVhdGUtdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment/alert-create-team/alert-create-team.page.ts ***!
  \***************************************************************************/
/*! exports provided: AlertCreateTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPage", function() { return AlertCreateTeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






var AlertCreateTeamPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AlertCreateTeamPage, _super);
    function AlertCreateTeamPage(viewCtrl, router, navParams, location) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.viewCtrl = viewCtrl;
        _this.router = router;
        _this.navParams = navParams;
        _this.id = navParams.get('id');
        return _this;
    }
    AlertCreateTeamPage.prototype.ngOnInit = function () {
    };
    AlertCreateTeamPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        //throw new Error("Method not implemented.");
    };
    AlertCreateTeamPage.prototype.initObject = function () {
        //throw new Error("Method not implemented.");
    };
    AlertCreateTeamPage.prototype.goPayment = function () {
        this.router.navigateByUrl('/payment/create/' + this.id);
        this.close();
    };
    AlertCreateTeamPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] }
    ]; };
    AlertCreateTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-create-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert-create-team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert-create-team.page.scss */ "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss")).default]
        })
    ], AlertCreateTeamPage);
    return AlertCreateTeamPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]));



/***/ }),

/***/ "./src/app/services/payment-team.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/payment-team.service.ts ***!
  \**************************************************/
/*! exports provided: PaymentTeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTeamService", function() { return PaymentTeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_payment_alert_create_team_alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/payment/alert-create-team/alert-create-team.page */ "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts");




var PaymentTeamService = /** @class */ (function () {
    function PaymentTeamService(modalController) {
        this.modalController = modalController;
        this.active = true;
    }
    PaymentTeamService.prototype.setTeam = function (team) {
        this.team = team;
    };
    PaymentTeamService.prototype.isActive = function () {
        return this.active;
    };
    PaymentTeamService.prototype.noPaid = function () {
        return this.active ? !this.team.paid : false;
    };
    PaymentTeamService.prototype.showAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pages_payment_alert_create_team_alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__["AlertCreateTeamPage"],
                            componentProps: {
                                id: this.team.id,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log('return paid');
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentTeamService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    PaymentTeamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PaymentTeamService);
    return PaymentTeamService;
}());



/***/ }),

/***/ "./src/app/services/util-array.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/util-array.service.ts ***!
  \************************************************/
/*! exports provided: UtilArrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilArrayService", function() { return UtilArrayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var UtilArrayService = /** @class */ (function () {
    function UtilArrayService() {
    }
    /**
     * Inserta el elemento al final del array
     * @param list array en el que se inserta el objeto
     * @param item item a insertar
     */
    UtilArrayService.prototype.listAddLast = function (list, item) {
        list.push(item);
    };
    /**
     * Añade un elemente en el array al inicio
     * @param list array en la que se inserta el objeto
     * @param item  elemento que se almacenara en el array
     */
    UtilArrayService.prototype.listAddFirst = function (list, item) {
        list.unshift(item);
    };
    /**
     * Remplaza un objeto del array
     * @param list array que se actualizara
     * @param id iel id del objeto
     * @param item elemento que se remplazara en el array
     */
    UtilArrayService.prototype.listUpdate = function (list, id, item) {
        var index = this.findIndexList(list, id);
        if (index >= 0) {
            list[index] = item;
        }
    };
    /**
     * elimina objeto de un array pasando el id del objeto
     * @param list array del que se eliminara el objeto
     * @param id id del objeto
     */
    UtilArrayService.prototype.listDelete = function (list, id) {
        var index = this.findIndexList(list, id);
        if (index >= 0)
            list.splice(index, 1);
    };
    /**
     * Busca un obeto en el array
     * @param list array en el qie se bucara el objeto
     * @param id id del objeto
     */
    UtilArrayService.prototype.findList = function (list, id) {
        return list.find(function (item) { return item['id'] === id; });
    };
    /**
     * Retorna el indice de la posicion en la que se encuentra el objeto
     * @param list Array en el que se realizara a busqueda
     * @param id id del objeto buscado
     */
    UtilArrayService.prototype.findIndexList = function (list, id) {
        return list.findIndex(function (item) { return item['id'] === id; });
    };
    /**
     * Modifica solo los atributos indicados en el array
     * @param objectResult objeto a modificar
     * @param object objeto del que se obtendran los datos
     * @param attibutes atributos que seran modificados
     */
    UtilArrayService.prototype.updateAttribustesObject = function (objectResult, object, attibutes) {
        var e_1, _a;
        if (attibutes === void 0) { attibutes = []; }
        console.log('update attributes');
        try {
            for (var attibutes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(attibutes), attibutes_1_1 = attibutes_1.next(); !attibutes_1_1.done; attibutes_1_1 = attibutes_1.next()) {
                var att = attibutes_1_1.value;
                if (object.hasOwnProperty(att))
                    objectResult[att] = object[att];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (attibutes_1_1 && !attibutes_1_1.done && (_a = attibutes_1.return)) _a.call(attibutes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return objectResult;
    };
    UtilArrayService.ctorParameters = function () { return []; };
    UtilArrayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UtilArrayService);
    return UtilArrayService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~e960260c.js.map