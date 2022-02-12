(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-balance-sheet-balance-sheet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-sheet/balance-sheet.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-sheet/balance-sheet.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/team/profile/{{team_id}}\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Balamce de Cuotas</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"add()\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"team\">\n  <div>\n    <div class=\"team_name ion-text-center\">\n      {{team.name}}\n    </div>\n  </div>\n  <div class=\"ion-text-center\">\n    <div class=\"amount_balance \">\n      <ion-button (click)=\"updateAmount()\" class=\"btn\">\n        $ {{team.amount_balance}} <span class=\"x-mes\">*Mes</span>\n      </ion-button>\n    </div>\n    <ion-text class=\"text-hp\">\n      Presiona el monto para modificar el valor\n    </ion-text>\n  </div>\n\n  <br>\n  <ion-item  *ngIf=\"filter\" >\n    <ion-label position=\"floating\">Filtro</ion-label>\n    <ion-select [(ngModel)]=\"filter\" name=\"v_team\"  interface=\"action-sheet\" >\n      <ion-select-option value=\"all\" >Todos</ion-select-option>\n      <ion-select-option value=\"pending\" >Pendientes</ion-select-option>\n      <ion-select-option value=\"upToDate\" >Al día</ion-select-option>\n\n    </ion-select>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row class=\"bg-l1\">\n      <ion-col size=\"9\">Nombre</ion-col>\n      <ion-col size=\"2\">Saldo</ion-col>      \n    </ion-row>\n\n    <ion-row class=\"row-table ion-activatable ripple-parent\" *ngFor=\"let balanceSheet of (team.balance_sheets | sortByUser:filter)\" (click)=\"showOptions( balanceSheet )\">\n      <ion-col size=\"9\" class=\"border-right\">{{balanceSheet.user.completeName}}</ion-col>\n      <ion-col size=\"2\" class=\"border-right ion-text-right\" >{{balanceSheet.total}}</ion-col>\n      <ion-col  size=\"1\">\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-col>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-row>\n\n    <ion-row *ngIf=\"team.balance_sheets.length ==  0\">\n      <ion-col  class=\"none ion-text-center active\" >Debes añadir usuarios</ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Jugador</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)=\"submit()\"  (keyup)=\"modelBalanceSheet.errorsForm.clear()\" >\n       \n        <ion-item >\n          <ion-label position=\"floating\" >Usuario</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"balanceSheet.user\" name=\"user\" (click)=\"addUser($event)\"></ion-input>\n        </ion-item>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelBalanceSheet.errorsForm.get('user_id') }}</div>\n\n        <br>\n      \n        <ion-item >\n          <ion-label position=\"floating\" >Saldo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"balanceSheet.balance_start\" name=\"balance_start\"></ion-input>\n        </ion-item>\n        <div>A este saldo se le restara el monto del mes actual. Ej: si el saldo es <b>-300</b> y la cuota es de <b>{{amountOfTheMonth}}</b>, entonces el saldo será <b>-800</b> </div>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ modelBalanceSheet.errorsForm.get('balance_start') }}</div>\n\n        <br>\n\n        <div>\n          <ion-row class=\"ion-text-center\">\n            <ion-col>\n              <ion-label>Saldo:</ion-label>\n              <br>\n              <ion-label class=\"value\">{{balanceSheet.balance_start}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>Valor cuota:</ion-label>\n              <br>\n              <ion-label class=\"value\">{{amountOfTheMonth}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>Total:</ion-label>\n              <br>\n              <ion-label class=\"value\">{{balanceSheet.balance_start - amountOfTheMonth}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/balance-sheet/balance-sheet-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/balance-sheet/balance-sheet-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BalanceSheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceSheetPageRoutingModule", function() { return BalanceSheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _balance_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance-sheet.page */ "./src/app/pages/balance-sheet/balance-sheet.page.ts");




const routes = [
    {
        path: '',
        component: _balance_sheet_page__WEBPACK_IMPORTED_MODULE_3__["BalanceSheetPage"]
    },
    {
        path: 'form-balance-sheet',
        loadChildren: () => __webpack_require__.e(/*! import() | form-balance-sheet-form-balance-sheet-module */ "form-balance-sheet-form-balance-sheet-module").then(__webpack_require__.bind(null, /*! ./form-balance-sheet/form-balance-sheet.module */ "./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.module.ts")).then(m => m.FormBalanceSheetPageModule)
    }
];
let BalanceSheetPageRoutingModule = class BalanceSheetPageRoutingModule {
};
BalanceSheetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BalanceSheetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/balance-sheet/balance-sheet.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/balance-sheet/balance-sheet.module.ts ***!
  \*************************************************************/
/*! exports provided: BalanceSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceSheetPageModule", function() { return BalanceSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _balance_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balance-sheet-routing.module */ "./src/app/pages/balance-sheet/balance-sheet-routing.module.ts");
/* harmony import */ var _balance_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance-sheet.page */ "./src/app/pages/balance-sheet/balance-sheet.page.ts");
/* harmony import */ var _pipes_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../pipes/pipes/pipes.module */ "./src/app/pipes/pipes/pipes.module.ts");








let BalanceSheetPageModule = class BalanceSheetPageModule {
};
BalanceSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _balance_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["BalanceSheetPageRoutingModule"],
            _pipes_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_balance_sheet_page__WEBPACK_IMPORTED_MODULE_6__["BalanceSheetPage"]]
    })
], BalanceSheetPageModule);



/***/ }),

/***/ "./src/app/pages/balance-sheet/balance-sheet.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/balance-sheet/balance-sheet.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team_name {\n  margin: 5px;\n  padding: 10px;\n  font-size: x-large;\n  background-color: #50fb8c94;\n}\n\n.btn {\n  font-size: xx-large;\n}\n\n.text-hp {\n  font-size: small;\n  color: #c7cacc;\n}\n\n.op {\n  font-size: x-small;\n}\n\n.row-table {\n  padding-top: 10px;\n  font-size: large;\n  border-bottom: 1px solid #ffffffa3;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.border-right {\n  border-right: 1px solid #ffffffa3;\n}\n\n.border-left {\n  border-left: 1px solid #ffffffa3;\n}\n\n.x-mes {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFsYW5jZS1zaGVldC9iYWxhbmNlLXNoZWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUNBQUE7QUFGSjs7QUFLQTtFQUNJLGdDQUFBO0FBRko7O0FBTUE7RUFDSSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFsYW5jZS1zaGVldC9iYWxhbmNlLXNoZWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtX25hbWV7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwZmI4Yzk0O1xufVxuXG4uYnRue1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cblxuLnRleHQtaHB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogI2M3Y2FjY1xufVxuXG4ub3B7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG5cblxuLnJvdy10YWJsZXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmYTM7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvcmRlci1yaWdodHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmYTM7XG59XG5cbi5ib3JkZXItbGVmdHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuXG4ueC1tZXN7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/balance-sheet/balance-sheet.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/balance-sheet/balance-sheet.page.ts ***!
  \***********************************************************/
/*! exports provided: BalanceSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceSheetPage", function() { return BalanceSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_balance_sheet_form_balance_sheet_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-balance-sheet/form-balance-sheet.page */ "./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");










let BalanceSheetPage = class BalanceSheetPage {
    constructor(route, router, requestService, dialogService, authUser, modalController, utilArray, actionSheetController) {
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.authUser = authUser;
        this.modalController = modalController;
        this.utilArray = utilArray;
        this.actionSheetController = actionSheetController;
        this.filter = '';
        this.modelBalanceSheet = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('BalanceSheet', requestService);
        this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Team', requestService);
        this.modelAmountTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('AmountTeam', requestService);
        this.team_id = this.route.snapshot.paramMap.get('team_id');
        this.filter = this.route.snapshot.paramMap.get('filter');
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            let param = {};
            if (this.route.snapshot.queryParamMap.get('pending'))
                param['pending'] = 1;
            this.modelTeam.api_functionModel(this.team_id, 'pageBalanceSheet', param).subscribe(response => {
                //console.log('response Team',response);
                if (response['status'] == 'success') {
                    this.team = response['data'];
                }
                this.dialogService.dimissLoaging();
            }, error => {
                this.dialogService.dimissLoaging();
            });
        });
    }
    updateAmount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let newAmont = prompt('Ingrese el nuevo valor', this.team.amount_balance);
            if (newAmont) {
                yield this.dialogService.loadingProgres('Modificando moto');
                this.modelAmountTeam.api_create({ price: newAmont, team_id: this.team_id }).subscribe(response => {
                    if (response['status'] == 'success') {
                        this.team.amount_balance = newAmont;
                    }
                    this.dialogService.dimissLoaging();
                }, error => {
                    this.dialogService.dimissLoaging();
                });
            }
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_balance_sheet_form_balance_sheet_page__WEBPACK_IMPORTED_MODULE_8__["FormBalanceSheetPage"],
                componentProps: {
                    team_id: this.team_id,
                    amount_of_the_month: this.team.amount_balance
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data && data.data['balanceSheet']) {
                    const balanceSheet = data.data['balanceSheet'];
                    //this.playerService.listAddLast(player);
                    this.utilArray.listAddFirst(this.team.balance_sheets, balanceSheet);
                }
            });
            return yield modal.present();
        });
    }
    showOptions(balanceSheet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let buttons = [];
            buttons.push({
                text: 'Pagar',
                icon: 'cash',
                handler: () => {
                    console.log('Cancel clicked');
                    this.paid(balanceSheet);
                }
            });
            buttons.push({
                text: 'Ver meses',
                icon: 'calendar',
                handler: () => {
                    console.log('Ver meses clicked');
                    this.router.navigateByUrl('/balance-sheet/months/' + balanceSheet.id);
                }
            });
            buttons.push({
                text: 'Ver Pagos',
                icon: 'wallet',
                handler: () => {
                    console.log('Ver meses clicked');
                    this.router.navigateByUrl('/balance-sheet/payments/' + balanceSheet.id);
                }
            });
            /*
            buttons.push( {
              text: 'Modificar',
              icon: 'create-outline',
              handler: () => {
                console.log('Edit clicked');
              }
            })
        */
            buttons.push({
                text: 'Eliminar',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.deleteBalanceSheet(balanceSheet);
                    console.log('Delete clicked');
                }
            });
            buttons.push({
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            });
            const actionSheet = yield this.actionSheetController.create({
                header: 'Operaciones de : ' + balanceSheet.user.completeName,
                cssClass: 'my-custom-class',
                buttons: buttons
            });
            yield actionSheet.present();
        });
    }
    /**
     * Elimina la Hoja de balance de un usuario
     */
    deleteBalanceSheet(balanceSheet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres('Eliminando..');
            this.modelBalanceSheet.api_delete(balanceSheet.id).subscribe(response => {
                this.dialogService.dimissLoaging();
                this.utilArray.listDelete(this.team.balance_sheets, balanceSheet.id);
            }, error => {
                this.dialogService.dimissLoaging();
                //this.dialogService.showToast('Error al eliminar Registro, tiene registos asociados');
            });
        });
    }
    paid(balanceSheet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let value = prompt('Monto a pagar', '0');
            if (parseInt(value) > 0) {
                if (confirm('Estas seguro de realizar el pago de ' + value + ' para ' + balanceSheet.user.completeName)) {
                    yield this.dialogService.loadingProgres('registrando pago...');
                    this.modelBalanceSheet.api_functionModel(balanceSheet.id, 'addPayment', { amount: value }).subscribe(response => {
                        this.dialogService.dimissLoaging();
                        if (response['status'] == 'success') {
                            this.utilArray.listUpdate(this.team.balance_sheets, balanceSheet.id, response['data']);
                        }
                        console.log('response addPayment', response);
                    }, error => {
                        this.dialogService.dimissLoaging();
                    });
                }
            }
        });
    }
};
BalanceSheetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] }
];
BalanceSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-balance-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./balance-sheet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-sheet/balance-sheet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./balance-sheet.page.scss */ "./src/app/pages/balance-sheet/balance-sheet.page.scss")).default]
    })
], BalanceSheetPage);



/***/ }),

/***/ "./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".value {\n  font-size: xx-large;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFsYW5jZS1zaGVldC9mb3JtLWJhbGFuY2Utc2hlZXQvZm9ybS1iYWxhbmNlLXNoZWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbGFuY2Utc2hlZXQvZm9ybS1iYWxhbmNlLXNoZWV0L2Zvcm0tYmFsYW5jZS1zaGVldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsdWV7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.ts ***!
  \***********************************************************************************/
/*! exports provided: FormBalanceSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBalanceSheetPage", function() { return FormBalanceSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/pages/search/search.page.ts");









let FormBalanceSheetPage = class FormBalanceSheetPage extends src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"] {
    constructor(navParms, modalController, location, requestService, dialogService) {
        super(location, modalController);
        this.navParms = navParms;
        this.modalController = modalController;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.team_id = navParms.get('team_id');
        this.amountOfTheMonth = navParms.get('amount_of_the_month');
        this.modelBalanceSheet = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('BalanceSheet', requestService);
    }
    initObject() {
        this.balanceSheet = {
            user: "",
            user_id: '',
            balance: 0,
            team_id: this.team_id,
            balance_start: 0
        };
        //this.addUser();
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            console.log('submit');
            this.modelBalanceSheet.api_create(this.balanceSheet).subscribe((respose) => {
                this.dialogService.dimissLoaging();
                if (respose['status'] == 'success') {
                    this.dimiss(respose['BalanceSheet']);
                }
            }, error => {
                this.dialogService.dimissLoaging();
            }, () => {
                this.dialogService.dimissLoaging();
            });
        });
    }
    dimiss(balanceSheet) {
        this.modalController.dismiss({
            balanceSheet: balanceSheet
        });
    }
    close() {
        this.modalController.dismiss();
    }
    log(event) {
        console.log(event);
    }
    addUser(e = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.errorAdmins = '';
            if (e)
                e.preventDefault();
            console.log('Add admins');
            const modal = yield this.modalController.create({
                component: _search_search_page__WEBPACK_IMPORTED_MODULE_8__["SearchPage"],
                componentProps: {
                    cancellable: false,
                    model: 'User',
                    function: 'searchUser',
                    multiple: false,
                    textSearch: 'Nombre o email',
                    listSelect: []
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data && data.data.item) {
                    const user = data.data['item'];
                    //console.log('users_select' , list);
                    this.balanceSheet.user = user.text;
                    this.balanceSheet.user_id = user.id;
                }
            });
            return yield modal.present();
        });
    }
};
FormBalanceSheetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }
];
FormBalanceSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-balance-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-balance-sheet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-balance-sheet.page.scss */ "./src/app/pages/balance-sheet/form-balance-sheet/form-balance-sheet.page.scss")).default]
    })
], FormBalanceSheetPage);



/***/ }),

/***/ "./src/app/pipes/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sort_by_user_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../sort-by-user.pipe */ "./src/app/pipes/sort-by-user.pipe.ts");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _sort_by_user_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByUserPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _sort_by_user_pipe__WEBPACK_IMPORTED_MODULE_3__["SortByUserPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/pipes/sort-by-user.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/sort-by-user.pipe.ts ***!
  \********************************************/
/*! exports provided: SortByUserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByUserPipe", function() { return SortByUserPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SortByUserPipe = class SortByUserPipe {
    transform(arr, ...args) {
        if (arr === undefined) {
            return null;
        }
        let data = arr.sort((a, b) => {
            var x = a.user.completeName.toLowerCase();
            var y = b.user.completeName.toLowerCase();
            //return a.user.completeName - b.completeName;
            return x < y ? -1 : x > y ? 1 : 0;
        });
        if (args[0] == 'pending')
            return data.filter((element) => {
                return element.total < 0;
            });
        if (args[0] == 'upToDate')
            return data.filter((element) => {
                return element.total >= 0;
            });
        return data;
    }
};
SortByUserPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sortByUser'
    })
], SortByUserPipe);



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
//# sourceMappingURL=pages-balance-sheet-balance-sheet-module-es2015.js.map