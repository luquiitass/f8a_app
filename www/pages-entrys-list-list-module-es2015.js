(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entrys-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/list/list.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/list/list.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/teams\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Ingresos</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"add()\">\n        <ion-icon name=\"log-in-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"team\">\n  <div>\n    <div class=\"team_name ion-text-center\">\n      {{team.name}}\n    </div>\n  </div>\n  <br>\n\n  <ion-grid>\n    <ion-row class=\"bg-l1\">\n      <ion-col size=\"3\">Fecha</ion-col>\n      <ion-col size=\"7\">Descripción</ion-col>      \n      <ion-col size=\"2\">Monto</ion-col>      \n    </ion-row>\n\n    <ion-row class=\"row-table ion-activatable ripple-parent\" *ngFor=\"let entry of (team.entrys )\" >\n      <ion-col size=\"3\" class=\"border-right\">{{ entry.date | date }}</ion-col>\n      <ion-col size=\"7\" class=\"border-right ion-text-left\" >{{entry.description}}</ion-col>\n      <ion-col size=\"2\">\n        $ {{entry.amount}}\n      </ion-col>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-row>\n\n    <ion-row *ngIf=\"team.entrys.length ==  0\">\n      <ion-col  class=\"none ion-text-center active\" >No se han registrados Gastos</ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/entrys/list/list-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/entrys/list/list-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/entrys/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/entrys/list/list.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/entrys/list/list.module.ts ***!
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
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/entrys/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/entrys/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/entrys/list/list.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/entrys/list/list.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team_name {\n  margin: 5px;\n  padding: 10px;\n  font-size: x-large;\n  background-color: #50fb8c94;\n}\n\n.btn {\n  font-size: xx-large;\n}\n\n.text-hp {\n  font-size: small;\n  color: #c7cacc;\n}\n\n.op {\n  font-size: x-small;\n}\n\n.row-table {\n  padding-top: 10px;\n  font-size: large;\n  border-bottom: 1px solid #ffffffa3;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.border-right {\n  border-right: 1px solid #ffffffa3;\n}\n\n.border-left {\n  border-left: 1px solid #ffffffa3;\n}\n\n.x-mes {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW50cnlzL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlDQUFBO0FBRko7O0FBS0E7RUFDSSxnQ0FBQTtBQUZKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJ5cy9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1fbmFtZXtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBmYjhjOTQ7XG59XG5cbi5idG57XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuXG4udGV4dC1ocHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjYzdjYWNjXG59XG5cbi5vcHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cblxuXG4ucm93LXRhYmxle1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXJpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuLmJvcmRlci1sZWZ0e1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZmEzO1xufVxuXG5cbi54LW1lc3tcbiAgICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/entrys/list/list.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/entrys/list/list.page.ts ***!
  \************************************************/
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
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _form_entry_form_entry_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-entry/form-entry.page */ "./src/app/pages/entrys/form-entry/form-entry.page.ts");











let ListPage = class ListPage {
    constructor(route, router, requestService, dialogService, authUser, modalController, utilArray, actionSheetController, util) {
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.authUser = authUser;
        this.modalController = modalController;
        this.utilArray = utilArray;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.modelEntry = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Entry', requestService);
        this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', requestService);
        this.team_id = this.route.snapshot.paramMap.get('team_id');
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            this.modelTeam.api_functionModel(this.team_id, 'pageEntrys').subscribe(response => {
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
    /**
     * Elimina la Hoja de balance de un usuario
     */
    deleteEntry(entry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres('Eliminando..');
            this.modelEntry.api_delete(entry.id).subscribe(response => {
                this.dialogService.dimissLoaging();
                this.utilArray.listDelete(this.team.entrys, entry.id);
            }, error => {
                this.dialogService.dimissLoaging();
                //this.dialogService.showToast('Error al eliminar Registro, tiene registos asociados');
            });
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_entry_form_entry_page__WEBPACK_IMPORTED_MODULE_10__["FormEntryPage"],
                componentProps: {
                    team_id: this.team_id,
                    amount_of_the_month: this.team.amount_balance
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data && data.data['entry']) {
                    const entry = data.data['entry'];
                    //this.playerService.listAddLast(player);
                    this.utilArray.listAddFirst(this.team.entrys, entry);
                }
            });
            return yield modal.present();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] }
];
ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/list/list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/entrys/list/list.page.scss")).default]
    })
], ListPage);



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
//# sourceMappingURL=pages-entrys-list-list-module-es2015.js.map