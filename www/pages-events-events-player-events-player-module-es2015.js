(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-player-events-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-player/events-player.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-player/events-player.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Sucesos de partidos</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/player/profile/{{id}}\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"player\">\n\n    <div class=\"ion-text-center  user\">{{player.name}}</div>\n\n    <div>\n\n      <ion-list>\n        <ion-item *ngFor=\"let e of player.events\"  routerLink=\"/results/profile//{{e.game ? e.game.id : ''}}\" >\n          <label> \n            <ion-text class=\"date\" *ngIf=\"e.game\">{{ e.game.date | date: 'dd-MMM-yyyy'}}</ion-text>\n            <ion-text class=\"event val\" *ngIf=\"e.type_event\"> {{ e.type_event.name  }} </ion-text>\n            {{e.time > 0 ? ' a los ' : ''}}\n            <ion-text *ngIf=\"e.time > 0\" class=\"val\"> {{e.time +'´'}}</ion-text> \n            {{e.game ? ' contra ' : ''}}\n            \n            <ion-text class=\"team val\" *ngIf=\"e.game\">{{e.team_id == e.game.l_team ? e.game.team_v.name : e.game.team_l.name  }} </ion-text>\n          </label> \n        </ion-item>\n      </ion-list>\n\n    </div>\n\n    <ion-item *ngIf=\"player.events.length == 0\" >\n      <div class=\"ion-text-center\">\n        No se han encontrado registros\n      </div>\n    </ion-item>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/events/events-player/events-player-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/events/events-player/events-player-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EventsPlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPlayerPageRoutingModule", function() { return EventsPlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _events_player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-player.page */ "./src/app/pages/events/events-player/events-player.page.ts");




const routes = [
    {
        path: '',
        component: _events_player_page__WEBPACK_IMPORTED_MODULE_3__["EventsPlayerPage"]
    }
];
let EventsPlayerPageRoutingModule = class EventsPlayerPageRoutingModule {
};
EventsPlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventsPlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/events/events-player/events-player.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/events/events-player/events-player.module.ts ***!
  \********************************************************************/
/*! exports provided: EventsPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPlayerPageModule", function() { return EventsPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _events_player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events-player-routing.module */ "./src/app/pages/events/events-player/events-player-routing.module.ts");
/* harmony import */ var _events_player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-player.page */ "./src/app/pages/events/events-player/events-player.page.ts");







let EventsPlayerPageModule = class EventsPlayerPageModule {
};
EventsPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _events_player_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPlayerPageRoutingModule"]
        ],
        declarations: [_events_player_page__WEBPACK_IMPORTED_MODULE_6__["EventsPlayerPage"]]
    })
], EventsPlayerPageModule);



/***/ }),

/***/ "./src/app/pages/events/events-player/events-player.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/events/events-player/events-player.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".date {\n  color: #ffffff;\n}\n\n.team {\n  font-weight: 400;\n}\n\n.event {\n  color: #ffffff;\n  font-weight: 400;\n  color: white;\n}\n\n.user {\n  font-size: xx-large;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.val {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wbGF5ZXIvZXZlbnRzLXBsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLXBsYXllci9ldmVudHMtcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGVhbXtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZXZlbnR7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIHdoaXRlO1xufVxuXG4udXNlciB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udmFse1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/events/events-player/events-player.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/events/events-player/events-player.page.ts ***!
  \******************************************************************/
/*! exports provided: EventsPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPlayerPage", function() { return EventsPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");







let EventsPlayerPage = class EventsPlayerPage {
    constructor(route, requestService, dialogService, utilArray) {
        this.route = route;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.utilArray = utilArray;
        this.id = route.snapshot.paramMap.get('id');
        this.event = route.snapshot.paramMap.get('event');
        this.modelPlayer = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Player', requestService);
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let parms = {};
            if (this.event) {
                parms['event'] = this.event;
            }
            yield this.dialogService.loadingProgres();
            this.modelPlayer.api_functionModel(this.id, 'pageEvents', parms).subscribe(response => {
                if (response['status'] == 'success') {
                    this.player = response['data'];
                }
                this.dialogService.dimissLoaging();
            }, error => {
                this.dialogService.dimissLoaging();
            });
        });
    }
};
EventsPlayerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_2__["UtilArrayService"] }
];
EventsPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./events-player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-player/events-player.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./events-player.page.scss */ "./src/app/pages/events/events-player/events-player.page.scss")).default]
    })
], EventsPlayerPage);



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
//# sourceMappingURL=pages-events-events-player-events-player-module-es2015.js.map