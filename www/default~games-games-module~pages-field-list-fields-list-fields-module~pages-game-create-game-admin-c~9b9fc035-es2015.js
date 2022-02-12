(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Cancha</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"    (keyup)=\"modelField.errorsForm.clear()\" >\n\n    <div class=\"info\">\n      Ingrese un nombre para identificar la cancha <span class=\"sug\"> (Recomendamos el NOMBRE DEL EQUIPO que utiliza la cancha o el NOMBRE DEL LUGAR donde se encuentra ubicado)</span>, después seleccione la ubicación en el mapa.\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [value]=\"field.name\" name=\"name\" (input)=\"inputVal($event.target.value ) \"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ modelField.errorsForm.get('name') }}</div>\n\n    <br>\n    \n    <div id=\"mapId2\" style=\"min-width: 100%; min-height: 400px !important;\">\n    </div>\n    <div class=\"desc\" >\n      Mantén presionado la ubicación en el mapa para añadir la ubicación.\n    </div>\n\n    <ion-button (click)=\"submit()\" expand=\"block\">Guardar</ion-button>\n\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Canchas</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/teams\" (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" >\n      \n      <ion-button  (click)=\"canEdit = !canEdit\" *ngIf=\"segment_select == 'list'\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </ion-button>\n     \n      <ion-button  (click)=\"add()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"segment_select\"  *ngIf=\"!isSelect\">\n    <ion-segment-button value=\"list\">\n      <ion-label>Lista</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-label>Mapa</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-searchbar \n    placeholder=\"Filtrar Canchas\"   \n    (keyup)=\"filterField($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelFilter($event)\"\n  ></ion-searchbar>\n\n  <ion-item *ngIf=\"fields.length == 0\">\n    <label>No se han encontrado registros</label>\n  </ion-item>\n\n  <div [style.display]=\" segment_select =='list' ?  'block' : 'none'\" >\n\n    <ion-list>\n      <ion-item *ngFor=\"let field of fields\" (click)=\"dismiss(field)\">\n        <label (click)=\"show(field,$event)\">{{field.name}}</label>\n  \n        <ion-buttons slot=\"end\" *ngIf=\"canEdit\">\n          <ion-button (click)=\"showEdit(field,$event)\" *ngIf=\"!field.team_id\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"confirmDelete(field,$event)\" *ngIf=\"authUser.isAdmin()\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div [style.display]=\" segment_select =='map' && !isSelect ?  'block' : 'none'\" >\n  <div id=\"mapId3\" style=\"min-width: 100%; min-height: 400px !important;\" >\n    </div>\n  </div>\n\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/field/field-form/field-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/field/field-form/field-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mapId {\n  min-width: 100% !important;\n  min-height: 300px !important;\n}\n\n#mapId2 {\n  min-width: 100% !important;\n  min-height: 300px !important;\n}\n\n.desc {\n  margin: 10px;\n}\n\n.info {\n  color: #babdbf;\n  margin: 15px;\n}\n\n.sug {\n  color: #727475;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmllbGQvZmllbGQtZm9ybS9maWVsZC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWVsZC9maWVsZC1mb3JtL2ZpZWxkLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcElke1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNtYXBJZDJ7XG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2N7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5mb3tcbiAgICBjb2xvcjogI2JhYmRiZjtcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5zdWd7XG4gICAgY29sb3I6ICM3Mjc0NzU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/field/field-form/field-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/field/field-form/field-form.page.ts ***!
  \***********************************************************/
/*! exports provided: FieldFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFormPage", function() { return FieldFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_9__);










let FieldFormPage = class FieldFormPage extends src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__["ModalForm"] {
    constructor(request, dialogService, viewCtrl, photoService, navParams, location) {
        super(location, viewCtrl);
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.newMarker = null;
        this.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Field', request);
        this.id = navParams.get('id');
    }
    initObject() {
        console.log('initObject');
        this.field = {
            name: '',
            lat: -27.603857971720405,
            lng: -55.323644024643414
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.field.lat = position.coords.latitude;
                this.field.lng = position.coords.longitude;
                console.log('current pos', position);
            }, error => {
                console.error(error);
            });
        }
        if (this.id) {
            this.modelField.api_find(this.id).subscribe(data => {
                console.log('load field', data);
                if (data['status'] == 'success') {
                    this.field = data['Field'];
                    this.leafletMap();
                    this.addNewMarker();
                }
            });
        }
        else {
            this.leafletMap();
        }
    }
    submit() {
        if (this.field.id) {
            this.modelField.api_update(this.field).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Field']);
                }
            });
        }
        else {
            this.modelField.api_create(this.field).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Field']);
                }
            });
        }
    }
    dismiss(field) {
        this.viewCtrl.dismiss({
            field: field,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    leafletMap() {
        this.reset();
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_9__["map"]('mapId2');
        const self = this;
        this.map.on("load", () => {
            console.log('load map');
            setTimeout(() => {
                console.log('refresh');
                this.regresh();
            }, 1000);
        });
        this.map.setView([this.field.lat, this.field.lng], 11);
        //old
        leaflet__WEBPACK_IMPORTED_MODULE_9__["tileLayer"]('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'futbol8alem.com',
            id: 'mapbox/streets-v11'
        }).addTo(this.map);
        this.map.on('contextmenu', e => {
            console.log('rightClick', e);
            this.field.lat = e.latlng.lat;
            this.field.lng = e.latlng.lng;
            this.addNewMarker();
        });
        /*
            Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'futbol8alem.com',
            }).addTo(this.map);
        */
        //Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
        //Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
        this.loadFields();
    }
    addNewMarker() {
        if (this.newMarker)
            this.map.removeLayer(this.newMarker);
        const myCustomColour = '#35da7f';
        const markerHtmlStyles = `
      background-color: ${myCustomColour};
      width: 2rem;
      height: 2rem;
      display: block;
      left: -1.5rem;
      top: -1.5rem;
      position: relative;
      border-radius: 3rem 3rem 0;
      transform: rotate(45deg);
      border: 1px solid #FFFFFF`;
        const icon = leaflet__WEBPACK_IMPORTED_MODULE_9__["divIcon"]({
            className: "my-custom-pin",
            iconAnchor: [0, 24],
            labelAnchor: [-6, 0],
            popupAnchor: [0, -36],
            html: `<span style="${markerHtmlStyles}" />`
        });
        this.newMarker = leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"]([this.field.lat, this.field.lng], {
            draggable: true,
            alt: 'Nueva Cancha',
            shadowPane: 'Pane',
            icon: icon,
            title: 'Arrastra bara canbiar la ubicación.'
        })
            .addTo(this.map);
        this.newMarker.on('dragend', (event) => {
            var marker = event.target;
            var position = marker.getLatLng();
            this.field.lat = position.lat;
            this.field.lng = position.lng;
            marker.openPopup();
            console.log('change pos', this.field);
        });
        this.newMarker.bindPopup(this.field.name, { autoPan: false })
            .openPopup();
    }
    loadFields() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.id)
                this.modelField.api_function('markers').subscribe(response => {
                    if (response['status'] == 'success') {
                        if (response['data']) {
                            response['data'].forEach(element => {
                                this.addMarker(parseFloat(element.lat), parseFloat(element.lng), element.name);
                            });
                        }
                    }
                    this.map.setView([this.field.lat, this.field.lng], 11);
                }, error => {
                });
        });
    }
    addMarker(lat, lng, title) {
        var Icono = leaflet__WEBPACK_IMPORTED_MODULE_9__["icon"]({
            iconUrl: "http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",
            iconSize: [30, 40],
            iconAnchor: [15, 40],
            shadowSize: [35, 50],
            shadowAnchor: [0, 55],
            popupAnchor: [0, -40]
        });
        if (lat != 0 && lng != 0)
            leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"]([lat, lng], { icon: Icono }).addTo(this.map).bindTooltip(title, { permanent: true }).openTooltip();
        //.bindPopup(title,{autoPan:false}).openPopup();
    }
    inputVal(val) {
        this.field.name = val;
        if (this.newMarker) {
            this.newMarker._popup.setContent(val, { autoPan: false });
        }
    }
    regresh() {
        this.map.invalidateSize();
    }
    reset() {
        if (this.map) {
            this.map.off();
            this.map.remove();
        }
    }
};
FieldFormPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"] }
];
FieldFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-field-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./field-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./field-form.page.scss */ "./src/app/pages/field/field-form/field-form.page.scss")).default]
    })
], FieldFormPage);



/***/ }),

/***/ "./src/app/pages/field/list-fields/list-fields.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/field/list-fields/list-fields.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpZWxkL2xpc3QtZmllbGRzL2xpc3QtZmllbGRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/field/list-fields/list-fields.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/field/list-fields/list-fields.page.ts ***!
  \*************************************************************/
/*! exports provided: ListFieldsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFieldsPage", function() { return ListFieldsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../field-form/field-form.page */ "./src/app/pages/field/field-form/field-form.page.ts");
/* harmony import */ var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/modal-form */ "./src/app/models/modal-form.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _show_show_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../show/show.page */ "./src/app/pages/field/show/show.page.ts");
/* harmony import */ var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/transfer-data.service */ "./src/app/services/transfer-data.service.ts");















let ListFieldsPage = class ListFieldsPage extends src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__["ModalForm"] {
    constructor(requestService, dialogService, modalController, utilArray, util, location, viewCtrl, dialog, authUser, transfDat) {
        super(location, viewCtrl);
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.modalController = modalController;
        this.utilArray = utilArray;
        this.util = util;
        this.viewCtrl = viewCtrl;
        this.dialog = dialog;
        this.authUser = authUser;
        this.transfDat = transfDat;
        this.segment_select = 'list';
        this.fields = [];
        this.oldFields = [];
        this.markers = [];
        this.canEdit = false;
        this.isSelect = false;
        this.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Field', requestService);
        this.isSelect = transfDat.getData('isSelect');
        transfDat.clear();
        //this.isSelect = navParams.get('isSelect') ;
    }
    ngOnInit() {
        //this.util.setScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyA_uVKWprjIgPURNhl1v9zzTPLQJIBdi6I');
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.loadingProgres();
            this.modelField.api_function('pageAllFields').subscribe(response => {
                if (response['status'] == 'success') {
                    this.fields = response['data'];
                    this.oldFields = this.fields;
                }
                this.leafletMap();
                this.dialogService.dimissLoaging();
            }, error => {
                this.dialogService.dimissLoaging();
                this.dialogService.showToast('Error al obtener Campos', '', 'warning');
            });
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__["FieldFormPage"],
            });
            modal.onDidDismiss().then(data => {
                if (data['data'] && data.data['field']) {
                    const field = data.data['field'];
                    this.utilArray.listAddFirst(this.fields, field);
                }
            });
            return yield modal.present();
        });
    }
    filterField(event) {
        let text = event.target.value;
        if (text.length <= 0) {
            this.fields = this.oldFields;
            this.loadFields();
            return;
        }
        this.fields = [...this.oldFields];
        this.fields = this.fields.filter(field => field.name.toUpperCase().includes(text.toUpperCase()));
        this.loadFields();
    }
    cancelFilter($event) {
        this.fields = this.oldFields;
    }
    dismiss(field) {
        this.viewCtrl.dismiss({
            field: field,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    confirmDelete(field, $event) {
        $event.stopPropagation();
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta cancha', e => {
            this.delete(field);
        });
    }
    delete(field) {
        this.modelField.api_delete(field.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Cancha Eliminada', null, 'success');
                this.utilArray.listDelete(this.fields, field.id);
            }
        });
    }
    showEdit(field, $event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('showEdit');
            $event.stopPropagation();
            const modal = yield this.modalController.create({
                component: _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__["FieldFormPage"],
                componentProps: { id: field.id }
            });
            modal.onDidDismiss().then(data => {
                if (data.data && data.data['field']) {
                    const field = data.data['field'];
                    this.utilArray.listUpdate(this.fields, field.id, field);
                }
            });
            return yield modal.present();
        });
    }
    show(field, $event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isSelect)
                return;
            console.log('show');
            $event.stopPropagation();
            const modal = yield this.modalController.create({
                component: _show_show_page__WEBPACK_IMPORTED_MODULE_13__["ShowPage"],
                componentProps: { id: field.id }
            });
            modal.onDidDismiss().then(data => {
                if (data.data && data.data['field']) {
                    //const field = data.data['field'];
                    //this.utilArray.listUpdate(this.fields,field.id,field)
                }
            });
            return yield modal.present();
        });
    }
    segmentChanged(event) {
        //console.log(event);
        this.segment_select = event.detail.value;
        setTimeout(() => {
            this.regresh();
        }, 100);
    }
    leafletMap() {
        //this.reset();
        let field = {
            name: '',
            lat: -27.603857971720405,
            lng: -55.323644024643414
        };
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_12__["map"]('mapId3');
        this.map.on("load", () => {
            console.log('load map');
            setTimeout(() => {
                console.log('refresh');
                this.regresh();
            }, 1000);
        });
        this.map.setView([field.lat, field.lng], 11);
        //old
        leaflet__WEBPACK_IMPORTED_MODULE_12__["tileLayer"]('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'futbol8alem.com',
            id: 'mapbox/streets-v11'
        }).addTo(this.map);
        /*
            Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'futbol8alem.com',
            }).addTo(this.map);
        */
        //Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
        //Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
        this.loadFields();
    }
    loadFields() {
        this.markers.forEach(el => {
            if (this.map)
                this.map.removeLayer(el);
        });
        this.markers = [];
        this.fields.forEach(element => {
            this.addMarker(parseFloat(element.lat), parseFloat(element.lng), element.name);
        });
        this.regresh();
    }
    addMarker(lat, lng, title) {
        var Icono = leaflet__WEBPACK_IMPORTED_MODULE_12__["icon"]({
            iconUrl: "http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",
            iconSize: [30, 40],
            iconAnchor: [15, 40],
            shadowSize: [35, 50],
            shadowAnchor: [0, 55],
            popupAnchor: [0, -40]
        });
        if (lat != 0 && lng != 0) {
            var m = leaflet__WEBPACK_IMPORTED_MODULE_12__["marker"]([lat, lng], { icon: Icono }).addTo(this.map).bindTooltip(title, { permanent: true }).openTooltip();
            //.bindPopup(title,{autoPan:false}).openPopup();
            this.markers.push(m);
        }
    }
    reset() {
        if (this.map) {
            this.map.off();
            this.map.remove();
        }
    }
    regresh() {
        this.map.invalidateSize();
    }
};
ListFieldsPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__["UtilArrayService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__["AuthUserService"] },
    { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_14__["TransferDataService"] }
];
ListFieldsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-fields',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-fields.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-fields.page.scss */ "./src/app/pages/field/list-fields/list-fields.page.scss")).default]
    })
], ListFieldsPage);



/***/ })

}]);
//# sourceMappingURL=default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035-es2015.js.map