(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expenses-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/list/list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/list/list.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/teams\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Gastos</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"add()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"team\">\n  <div>\n    <div class=\"team_name ion-text-center\">\n      {{team.name}}\n    </div>\n  </div>\n  <br>\n\n  <ion-grid>\n    <ion-row class=\"bg-l1\">\n      <ion-col size=\"3\">Fecha</ion-col>\n      <ion-col size=\"7\">Descripción</ion-col>      \n      <ion-col size=\"2\">Monto</ion-col>      \n    </ion-row>\n\n    <ion-row class=\"row-table ion-activatable ripple-parent\" *ngFor=\"let expense of (team.expenses )\" >\n      <ion-col size=\"3\" class=\"border-right\">{{expense.date | date}}</ion-col>\n      <ion-col size=\"7\" class=\"border-right ion-text-left\" >{{expense.description}}</ion-col>\n      <ion-col size=\"2\">\n        $ {{expense.amount}}\n      </ion-col>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-row>\n\n    <ion-row *ngIf=\"team.expenses.length ==  0\">\n      <ion-col  class=\"none ion-text-center active\" >No se han registrados Gastos</ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/expenses/list/list-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/expenses/list/list-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/expenses/list/list.page.ts");




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

/***/ "./src/app/pages/expenses/list/list.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/expenses/list/list.module.ts ***!
  \****************************************************/
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
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/expenses/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/expenses/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expenses/list/list.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/expenses/list/list.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team_name {\n  margin: 5px;\n  padding: 10px;\n  font-size: x-large;\n  background-color: #50fb8c94;\n}\n\n.btn {\n  font-size: xx-large;\n}\n\n.text-hp {\n  font-size: small;\n  color: #c7cacc;\n}\n\n.op {\n  font-size: x-small;\n}\n\n.row-table {\n  padding-top: 10px;\n  font-size: large;\n  border-bottom: 1px solid #ffffffa3;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.border-right {\n  border-right: 1px solid #ffffffa3;\n}\n\n.border-left {\n  border-left: 1px solid #ffffffa3;\n}\n\n.x-mes {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZW5zZXMvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUNBQUE7QUFGSjs7QUFLQTtFQUNJLGdDQUFBO0FBRko7O0FBTUE7RUFDSSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZW5zZXMvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtX25hbWV7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwZmI4Yzk0O1xufVxuXG4uYnRue1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cblxuLnRleHQtaHB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogI2M3Y2FjY1xufVxuXG4ub3B7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG5cblxuLnJvdy10YWJsZXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmYTM7XG59XG5cbi5yaXBwbGUtcGFyZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvcmRlci1yaWdodHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmYTM7XG59XG5cbi5ib3JkZXItbGVmdHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuXG4ueC1tZXN7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/expenses/list/list.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/expenses/list/list.page.ts ***!
  \**************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var _form_expense_form_expense_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-expense/form-expense.page */ "./src/app/pages/expenses/form-expense/form-expense.page.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");











var ListPage = /** @class */ (function () {
    function ListPage(route, router, requestService, dialogService, authUser, modalController, utilArray, actionSheetController, util) {
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.authUser = authUser;
        this.modalController = modalController;
        this.utilArray = utilArray;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.modelBalanceSheet = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('BalanceSheet', requestService);
        this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', requestService);
        this.modelAmountTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('AmountTeam', requestService);
        this.team_id = this.route.snapshot.paramMap.get('team_id');
    }
    ListPage.prototype.ngOnInit = function () {
        this.init();
    };
    ListPage.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres()];
                    case 1:
                        _a.sent();
                        this.modelTeam.api_functionModel(this.team_id, 'pageExpenses').subscribe(function (response) {
                            //console.log('response Team',response);
                            if (response['status'] == 'success') {
                                _this.team = response['data'];
                            }
                            _this.dialogService.dimissLoaging();
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.prototype.showOptions = function (expense) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons, actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [];
                        buttons.push({
                            text: 'Pagar',
                            icon: 'cash',
                            handler: function () {
                                console.log('Cancel clicked');
                                //this.paid(expense);
                            }
                        });
                        buttons.push({
                            text: 'Ver meses',
                            icon: 'calendar',
                            handler: function () {
                                console.log('Ver meses clicked');
                                _this.router.navigateByUrl('/balance-sheet/months/' + expense.id);
                            }
                        });
                        buttons.push({
                            text: 'Ver Pagos',
                            icon: 'wallet',
                            handler: function () {
                                console.log('Ver meses clicked');
                                _this.router.navigateByUrl('/balance-sheet/payments/' + expense.id);
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
                            handler: function () {
                                _this.deleteBalanceSheet(expense);
                                console.log('Delete clicked');
                            }
                        });
                        buttons.push({
                            text: 'Cancelar',
                            icon: 'close',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Operaciones de : ' + expense.user.completeName,
                                cssClass: 'my-custom-class',
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Elimina la Hoja de balance de un usuario
     */
    ListPage.prototype.deleteBalanceSheet = function (expense) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres('Eliminando..')];
                    case 1:
                        _a.sent();
                        this.modelBalanceSheet.api_delete(expense.id).subscribe(function (response) {
                            _this.dialogService.dimissLoaging();
                            _this.utilArray.listDelete(_this.team.expenses, expense.id);
                        }, function (error) {
                            _this.dialogService.dimissLoaging();
                            //this.dialogService.showToast('Error al eliminar Registro, tiene registos asociados');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.prototype.add = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _form_expense_form_expense_page__WEBPACK_IMPORTED_MODULE_9__["FormExpensePage"],
                            componentProps: {
                                team_id: this.team_id,
                                amount_of_the_month: this.team.amount_balance
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data && data.data['expense']) {
                                var expense = data.data['expense'];
                                //this.playerService.listAddLast(player);
                                _this.utilArray.listAddFirst(_this.team.expenses, expense);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] }
    ]; };
    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/list/list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/expenses/list/list.page.scss")).default]
        })
    ], ListPage);
    return ListPage;
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
//# sourceMappingURL=pages-expenses-list-list-module.js.map