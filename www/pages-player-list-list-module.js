(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/list/list.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/list/list.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"admin_home\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>{{team_id ? 'Plantilla de ' : ''}}Jugadores</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"load($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n      \n      <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n   \n      <ion-item *ngFor=\"let item of list\" >\n          \n        <ion-label >\n          <h3>{{item.name}}</h3>\n        </ion-label>\n\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"showEdit(item)\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"confirmDelete(item)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/player/list/list-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/player/list/list-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/player/list/list.page.ts");




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

/***/ "./src/app/pages/player/list/list.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/player/list/list.module.ts ***!
  \**************************************************/
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
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/player/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/player/list/list.page.ts");







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

/***/ "./src/app/pages/player/list/list.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/player/list/list.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9saXN0L2xpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/player/list/list.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/player/list/list.page.ts ***!
  \************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_player_player_form_player_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/player/player-form/player-form.page */ "./src/app/pages/player/player-form/player-form.page.ts");
/* harmony import */ var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");









var ListPage = /** @class */ (function () {
    function ListPage(request, dialogService, modalController, dialog, route, utilArray) {
        this.request = request;
        this.dialogService = dialogService;
        this.modalController = modalController;
        this.dialog = dialog;
        this.route = route;
        this.utilArray = utilArray;
        this.list = [];
        this.playerService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Player', request);
        this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Team', request);
        this.team_id = this.route.snapshot.paramMap.get('team_id');
    }
    ListPage.prototype.ngOnInit = function () {
        //this.playerService.setModel('Player');
        this.load(); //this.playerService.api_all();
    };
    ListPage.prototype.load = function (event) {
        var _this = this;
        if (event === void 0) { event = null; }
        console.log('load');
        if (this.team_id) {
            this.modelTeam.api_loadAttribute(this.team_id, 'players').subscribe(function (response) {
                if (response['status'] = 'success') {
                    console.log('response', response);
                    _this.list = response['Team']['players'];
                }
                if (event)
                    event.target.complete();
            }, function (error) {
                if (event)
                    event.target.complete();
            });
        }
        else {
            //this.list = this.playerService.list;
            //this.playerService.api_all(event);
            this.playerService.api_function('all').subscribe(function (response) {
                _this.list = response['data'];
            }, function (error) {
                console.log(error);
            });
        }
    };
    ListPage.prototype.openModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pages_player_player_form_player_form_page__WEBPACK_IMPORTED_MODULE_4__["PlayerFormPage"],
                            componentProps: {
                                team_id: this.team_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data && data.data['player']) {
                                var player = data.data['player'];
                                //this.playerService.listAddLast(player);
                                _this.utilArray.listAddFirst(_this.list, player);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.showEdit = function (player) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pages_player_player_form_player_form_page__WEBPACK_IMPORTED_MODULE_4__["PlayerFormPage"],
                            componentProps: { id: player.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data && data.data.hasOwnProperty('player')) {
                                var player_1 = data.data['player'];
                                //this.playerService.listUpdate(player.id,player);
                                _this.utilArray.listUpdate(_this.list, player_1.id, player_1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.confirmDelete = function (player) {
        var _this = this;
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este jugador', function (e) {
            _this.delete(player);
        });
    };
    ListPage.prototype.delete = function (player) {
        var _this = this;
        if (!player.user_id) {
            this.playerService.api_delete(player.id).subscribe(function (data) {
                console.log(data);
                if (data['status'] == 'success') {
                    _this.dialog.showToast('Jugador Eliminado', null, 'success');
                    _this.utilArray.listDelete(_this.list, player.id);
                    //this.playerService.listDelete(player.id);
                }
            });
        }
        else if (player.pivot.team_id) {
            this.modelTeam.api_functionModel(this.team_id, 'removePlayer', { player_id: player.id }).subscribe(function (response) {
                _this.dialog.showToast('El Jugador ha sido eliminado de esta plantilla', null, 'success');
                _this.utilArray.listDelete(_this.list, player.id);
            }, function (error) {
            });
        }
    };
    ListPage.ctorParameters = function () { return [
        { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"] }
    ]; };
    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/list/list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/player/list/list.page.scss")).default]
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
//# sourceMappingURL=pages-player-list-list-module.js.map