(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-payment-team-payment-team-module~teams-teams-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-team/payment-team.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-team/payment-team.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-button color=\"dark\" (click)=\"close()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title>Registrar mi equipo</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentSelect\" >\n    \n    <ion-segment-button value=\"1\" [disabled]=\"!tabsEnables.name\">\n      <ion-label>1</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" [disabled]=\"!tabsEnables.admins\">\n      <ion-label>2</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\" [disabled]=\"!tabsEnables.payment\">\n      <ion-label>3</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  \n\n\n    <div *ngIf=\"segmentSelect == '1'\">\n\n      <ion-card>\n        <ion-card-content>\n          <div class=\"title msj\">\n            Verifíca el nombre del equipo\n          </div>\n\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\" >Nombre</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"team.name\" name=\"name\"></ion-input>\n            </ion-item>\n\n            <ion-text color=\"danger\">{{errorName}}</ion-text>\n\n          </ion-list>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('2')\">\n                  Siguiente\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-content>\n      </ion-card>\n\n\n     \n\n    </div>\n\n\n    <div *ngIf=\"segmentSelect == '2'\">\n\n      \n\n      <ion-card>\n        <ion-card-content>\n          <div class=\"title msj\">\n            Seleccionar administradores \n          </div>\n\n          <ion-list>\n            <div class=\"admins\" >\n              <ion-list-header  class=\"bg-l1\" >\n                <ion-label>Añadir administradores</ion-label>\n                <button item-end ion-button color=\"danger\" (click)=\"addAdmins($event)\">\n                  <ion-icon name=\"person-add-outline\"></ion-icon>\n                </button>\n              </ion-list-header>\n\n              <ion-text color=\"danger\">{{errorAdmins}}</ion-text>\n        \n              <ion-list  *ngFor=\"let item of team.admins\"  >\n                <ion-item>  {{item.text ? item.text : item.last_name +' '+ item.first_name}}</ion-item>\n              </ion-list>\n            </div>\n\n          </ion-list>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('1',true)\" >\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                  Atras\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('3')\">\n                  Siguiente\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div *ngIf=\"segmentSelect == '3'\">\n\n      <ion-card>\n        <ion-card-content>\n          <div class=\"title msj\">\n            Informacion sobre el registro\n          </div>\n\n          <div class=\"cho-container msj-xs text\">\n            Una vez registrado el equipo los administradores recibirán una notificación y podrán modificar los demás datos. \n          </div>\n\n          <div class=\"cho-container msj-xs text\">\n            Te recordamos que para que los administradores puedan realizar modificaciones, primero deben abonar la suscripción del equipo. \n          </div>\n\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('2',true)\">\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                  Atras\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"saveTeam()\">\n                  Finalizar\n                  <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-content>\n      </ion-card>\n\n\n      \n\n    </div>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment-team/payment-team.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/payment-team/payment-team.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  color: white;\n  margin: 10px;\n  background: #56565669;\n  padding: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 1px solid #797575;\n}\n\n.text {\n  padding: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC10ZWFtL3BheW1lbnQtdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC10ZWFtL3BheW1lbnQtdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgLy9mb250LXNpemU6IHgtbGFyZ2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTY1NjU2Njk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzk3NTc1O1xufVxuXG4udGV4dHtcbiAgICBwYWRkaW5nOiAxM3B4Oztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment-team/payment-team.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment-team/payment-team.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentTeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTeamPage", function() { return PaymentTeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");












var PaymentTeamPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PaymentTeamPage, _super);
    function PaymentTeamPage(reqest, viewCtrl, modalController, dialogService, authUser, router, location, chatService) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.reqest = reqest;
        _this.viewCtrl = viewCtrl;
        _this.modalController = modalController;
        _this.dialogService = dialogService;
        _this.authUser = authUser;
        _this.router = router;
        _this.chatService = chatService;
        _this.team = {
            id: '',
            name: '',
            admins: []
        };
        _this.tabsEnables = {
            info: true,
            name: true,
            admins: false,
            payment: false
        };
        _this.segmentSelect = '1';
        _this.errorName = '';
        _this.errorAdmins = '';
        _this.modelMercadoPago = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('MercadoPagoService', reqest);
        _this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', reqest);
        _this.team.admins.push({
            text: authUser.user.completeName + " (" + authUser.user.email + ")",
            id: authUser.user.id
        });
        return _this;
        //Mercadopago.setPublishableKey(environment.mp_public_key); 
    }
    PaymentTeamPage.prototype.initObject = function () {
    };
    PaymentTeamPage.prototype.segmentChanged = function ($event) {
        //this.segmentSelect = $event.detail.value;
        //this.changedSegment($event.detail.value , this.segmentSelect < $event.detail.value)
    };
    PaymentTeamPage.prototype.changedSegment = function (segment, isBack) {
        if (isBack === void 0) { isBack = false; }
        console.log(segment);
        if (isBack) {
            this.segmentSelect = segment;
            return;
        }
        switch (segment) {
            case '2':
                this.verifyNameSelect();
                return;
            case '3':
                this.verifyAdmins();
                return;
            default:
                this.segmentSelect = segment;
        }
    };
    PaymentTeamPage.prototype.preferenceApi = function () {
        var _this = this;
        console.log('preference api');
        this.modelMercadoPago.api_function('createPreference', {}).subscribe(function (response) {
            console.log(response);
            if (response['status'] == 'success') {
                var preference_id = response['data'];
                console.log('pref', preference_id);
                _this.mp.checkout({
                    preference: {
                        id: preference_id
                    },
                    render: {
                        container: '.cho-container',
                        label: 'Pagar',
                    }
                });
            }
        }, function (error) {
            console.error(error);
        });
    };
    PaymentTeamPage.prototype.verifyNameSelect = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.team.name == '') {
                            this.errorName = 'El campo nombre es Obligario.';
                            this.tabsEnables.admins = false;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.dialogService.loadingProgres('verificando nombre')];
                    case 1:
                        _a.sent();
                        console.log('team', this.team);
                        this.modelTeam.api_function('exist', this.team).subscribe(function (response) {
                            _this.dialogService.dimissLoaging();
                            if (response['data']) {
                                _this.errorName = "El equipo " + _this.team.name + " ya se encuentra Registrado.";
                                _this.tabsEnables.admins = false;
                                return;
                            }
                            _this.errorName = '';
                            _this.segmentSelect = '2';
                            _this.tabsEnables.admins = true;
                            console.log(response);
                        }, function (error) {
                            console.log(error);
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentTeamPage.prototype.verifyAdmins = function () {
        this.errorAdmins = '';
        if (this.team.admins.length > 0) {
            this.segmentSelect = '3';
            this.tabsEnables.payment = true;
            //this.preferenceApi();
        }
        else {
            this.errorAdmins = 'Debe añadir como minimo un Administrador';
            this.tabsEnables.payment = false;
        }
    };
    PaymentTeamPage.prototype.dismiss = function (team) {
        this.viewCtrl.dismiss({
            team: team,
        });
    };
    PaymentTeamPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PaymentTeamPage.prototype.addAdmins = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var adminsDefault, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.errorAdmins = '';
                        e.preventDefault();
                        console.log('Add admins');
                        adminsDefault = this.team.admins;
                        return [4 /*yield*/, this.modalController.create({
                                component: _search_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"],
                                componentProps: {
                                    cancellable: false,
                                    model: 'User',
                                    function: 'searchUser',
                                    multiple: true,
                                    textSearch: 'Nombre o email',
                                    listSelect: adminsDefault
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data && data.data.items) {
                                var list = data.data['items'];
                                //console.log('users_select' , list);
                                _this.team.admins = list;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentTeamPage.prototype.saveTeam = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres('Registrando')];
                    case 1:
                        _a.sent();
                        this.modelTeam.api_create(this.team).subscribe(function (response) {
                            _this.dialogService.dimissLoaging();
                            if (response['status'] == 'success') {
                                _this.dialogService.showToast('Equipo registrado', null, 'success');
                                var team = response['Team'];
                                _this.authUser.user.teams.push(team);
                                _this.authUser.saveUser();
                                _this.dismiss(team);
                                //this.router.navigateByUrl('/team/profile/'  + team.id);
                            }
                            else {
                                alert('no success');
                            }
                        }, function (error) {
                            if (_this.modelTeam.errorsForm.any()) {
                            }
                            console.error(error);
                            _this.dialogService.dimissLoaging();
                        }, function () {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentTeamPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"] },
        { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"] }
    ]; };
    PaymentTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-team/payment-team.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-team.page.scss */ "./src/app/pages/payment-team/payment-team.page.scss")).default]
        })
    ], PaymentTeamPage);
    return PaymentTeamPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__["ModalForm"]));



/***/ })

}]);
//# sourceMappingURL=default~pages-payment-team-payment-team-module~teams-teams-module.js.map