(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"],{

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago pendiente</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-text class=\"text\">\n        Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente.\n      </ion-text>\n      <br>\n      <div class=\"ion-margin-top\">\n        <ion-button (click)=\"goPayment()\" class=\"ion-float-right\" > Realizar el pago</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n");

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










let EventFormPage = class EventFormPage extends src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__["ModalForm"] {
    constructor(navParams, requestService, dialogService, viewCtrl, utilArray, paymentTeamService, location) {
        super(location, viewCtrl);
        this.navParams = navParams;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.utilArray = utilArray;
        this.paymentTeamService = paymentTeamService;
        this.twoTeam = false;
        //valid goals
        this.events = [];
        this.myDateFilter = (d) => {
            const day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day == 6;
        };
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requestService);
        this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Event', requestService);
        this.game_id = navParams.get('game_id');
        this.twoTeam = navParams.get('twoTeam');
        this.id = navParams.get('id');
        this.team_admin = navParams.get('team_admin');
        this.events = navParams.get('events');
        this.game = navParams.get('game');
    }
    initObject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.init();
            this.loadEvent();
        });
    }
    ;
    loadEvent() {
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
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.eventModel.api_function('dataEventCreate', { game_id: this.game_id }).subscribe(data => {
                if (data['status'] == 'success') {
                    this.dataEvent = data['data'];
                    this.types_events = this.dataEvent['types_events'];
                }
                console.log('ty', this.types_events);
                console.log(this.dataEvent);
            });
        });
    }
    getPlayers() {
        let id = this.event.team_id;
        if (this.team_admin)
            id = this.event.team_id;
        if (id) {
            let team = this.dataEvent.teams.find(t => t.id === id);
            if (team)
                return team.players;
        }
        return [];
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.isValid();
            }
            catch (e) {
                console.log(e);
                this.dialogService.showToast(e.message, 'Error', 'danger');
                return;
            }
            let teamSelect = this.game['team_' + this.getTeamType()];
            this.paymentTeamService.setTeam(teamSelect);
            if (this.paymentTeamService.noPaid()) {
                yield this.close();
                yield this.paymentTeamService.showAlert();
                //this.close();
                return;
            }
            if (this.event.id) {
                this.eventModel.api_update(this.event).subscribe(data => {
                    var _a;
                    if (data['status'] == 'success') {
                        this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                        console.log(data);
                        this.dismiss(data['Event']);
                    }
                });
            }
            else {
                this.eventModel.api_create(this.event).subscribe(data => {
                    var _a;
                    if (data['status'] == 'success') {
                        this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                        this.dismiss(data['Event']);
                    }
                });
            }
        });
    }
    dismiss(event) {
        this.viewCtrl.dismiss({
            event: event,
        });
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.viewCtrl.dismiss();
        });
    }
    print() {
        console.log(this.event);
    }
    isValid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.event.team_id) {
                throw new Error('Seleccione un equipo');
            }
            if (!this.event.type_event_id) {
                throw new Error('Seleccione un evento');
            }
            var type_team = this.getTeamType();
            let eventSelect = this.utilArray.findList(this.types_events, this.event.type_event_id);
            //Validaciones de los goles registrados
            if (eventSelect && eventSelect.name == 'Gol') {
                let total_golas = this.game[type_team + '_goals'];
                let total_goals_reg = this.events.filter(e => e.team_id == this.event.team_id && e.type_event.name == 'Gol').length;
                if ((total_goals_reg + 1) > total_golas)
                    throw new Error(total_golas == 0 ? `El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento.` : `No puede añadir más de ${total_golas} goles para éste equipo en éste partido.`);
            }
            return true;
        });
    }
    getTeamType() {
        var type_team = 'l'; //Local o visitante
        if (this.game.v_team == this.event.team_id) {
            type_team = 'v';
        }
        return type_team;
    }
};
EventFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_7__["UtilArrayService"] },
    { type: src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_8__["PaymentTeamService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"] }
];
EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-form.page.scss */ "./src/app/pages/event/event-form/event-form.page.scss")).default]
    })
], EventFormPage);



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






let AlertCreateTeamPage = class AlertCreateTeamPage extends src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"] {
    constructor(viewCtrl, router, navParams, location) {
        super(location, viewCtrl);
        this.viewCtrl = viewCtrl;
        this.router = router;
        this.navParams = navParams;
        this.id = navParams.get('id');
    }
    ngOnInit() {
    }
    close() {
        this.viewCtrl.dismiss();
        //throw new Error("Method not implemented.");
    }
    initObject() {
        //throw new Error("Method not implemented.");
    }
    goPayment() {
        this.router.navigateByUrl('/payment/create/' + this.id);
        this.close();
    }
};
AlertCreateTeamPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] }
];
AlertCreateTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert-create-team',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert-create-team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert-create-team.page.scss */ "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss")).default]
    })
], AlertCreateTeamPage);



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




let PaymentTeamService = class PaymentTeamService {
    constructor(modalController) {
        this.modalController = modalController;
        this.active = false;
    }
    setTeam(team) {
        this.team = team;
    }
    isActive() {
        return this.active;
    }
    noPaid() {
        return this.active ? !this.team.paid : false;
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_payment_alert_create_team_alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__["AlertCreateTeamPage"],
                componentProps: {
                    id: this.team.id,
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('return paid');
            });
            return yield modal.present();
        });
    }
};
PaymentTeamService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
PaymentTeamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaymentTeamService);



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


let UtilArrayService = class UtilArrayService {
    constructor() { }
    /**
     * Inserta el elemento al final del array
     * @param list array en el que se inserta el objeto
     * @param item item a insertar
     */
    listAddLast(list, item) {
        list.push(item);
    }
    /**
     * Añade un elemente en el array al inicio
     * @param list array en la que se inserta el objeto
     * @param item  elemento que se almacenara en el array
     */
    listAddFirst(list, item) {
        list.unshift(item);
    }
    /**
     * Remplaza un objeto del array
     * @param list array que se actualizara
     * @param id iel id del objeto
     * @param item elemento que se remplazara en el array
     */
    listUpdate(list, id, item) {
        let index = this.findIndexList(list, id);
        if (index >= 0) {
            list[index] = item;
        }
    }
    /**
     * elimina objeto de un array pasando el id del objeto
     * @param list array del que se eliminara el objeto
     * @param id id del objeto
     */
    listDelete(list, id) {
        let index = this.findIndexList(list, id);
        if (index >= 0)
            list.splice(index, 1);
    }
    /**
     * Busca un obeto en el array
     * @param list array en el qie se bucara el objeto
     * @param id id del objeto
     */
    findList(list, id) {
        return list.find(item => item['id'] === id);
    }
    /**
     * Retorna el indice de la posicion en la que se encuentra el objeto
     * @param list Array en el que se realizara a busqueda
     * @param id id del objeto buscado
     */
    findIndexList(list, id) {
        return list.findIndex(item => item['id'] === id);
    }
    /**
     * Modifica solo los atributos indicados en el array
     * @param objectResult objeto a modificar
     * @param object objeto del que se obtendran los datos
     * @param attibutes atributos que seran modificados
     */
    updateAttribustesObject(objectResult, object, attibutes = []) {
        console.log('update attributes');
        for (let att of attibutes) {
            if (object.hasOwnProperty(att))
                objectResult[att] = object[att];
        }
        return objectResult;
    }
};
UtilArrayService.ctorParameters = () => [];
UtilArrayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilArrayService);



/***/ })

}]);
//# sourceMappingURL=default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f-es2015.js.map