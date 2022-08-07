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










var FieldFormPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FieldFormPage, _super);
    function FieldFormPage(request, dialogService, viewCtrl, photoService, navParams, location) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.request = request;
        _this.dialogService = dialogService;
        _this.viewCtrl = viewCtrl;
        _this.photoService = photoService;
        _this.newMarker = null;
        _this.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Field', request);
        _this.id = navParams.get('id');
        return _this;
    }
    FieldFormPage.prototype.initObject = function () {
        var _this = this;
        console.log('initObject');
        this.field = {
            name: '',
            lat: -27.603857971720405,
            lng: -55.323644024643414
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.field.lat = position.coords.latitude;
                _this.field.lng = position.coords.longitude;
                console.log('current pos', position);
            }, function (error) {
                console.error(error);
            });
        }
        if (this.id) {
            this.modelField.api_find(this.id).subscribe(function (data) {
                console.log('load field', data);
                if (data['status'] == 'success') {
                    _this.field = data['Field'];
                    _this.leafletMap();
                    _this.addNewMarker();
                }
            });
        }
        else {
            this.leafletMap();
        }
    };
    FieldFormPage.prototype.submit = function () {
        var _this = this;
        if (this.field.id) {
            this.modelField.api_update(this.field).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Field']);
                }
            });
        }
        else {
            this.modelField.api_create(this.field).subscribe(function (data) {
                var _a;
                if (data['status'] == 'success') {
                    _this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    _this.dismiss(data['Field']);
                }
            });
        }
    };
    FieldFormPage.prototype.dismiss = function (field) {
        this.viewCtrl.dismiss({
            field: field,
        });
    };
    FieldFormPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FieldFormPage.prototype.leafletMap = function () {
        var _this = this;
        this.reset();
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_9__["map"]('mapId2');
        var self = this;
        this.map.on("load", function () {
            console.log('load map');
            setTimeout(function () {
                console.log('refresh');
                _this.regresh();
            }, 1000);
        });
        this.map.setView([this.field.lat, this.field.lng], 11);
        //old
        leaflet__WEBPACK_IMPORTED_MODULE_9__["tileLayer"]('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'futbol-alem.com',
            id: 'mapbox/streets-v11'
        }).addTo(this.map);
        this.map.on('contextmenu', function (e) {
            console.log('rightClick', e);
            _this.field.lat = e.latlng.lat;
            _this.field.lng = e.latlng.lng;
            _this.addNewMarker();
        });
        /*
            Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'futbol-alem.com',
            }).addTo(this.map);
        */
        //Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
        //Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
        this.loadFields();
    };
    FieldFormPage.prototype.addNewMarker = function () {
        var _this = this;
        if (this.newMarker)
            this.map.removeLayer(this.newMarker);
        var myCustomColour = '#35da7f';
        var markerHtmlStyles = "\n      background-color: " + myCustomColour + ";\n      width: 2rem;\n      height: 2rem;\n      display: block;\n      left: -1.5rem;\n      top: -1.5rem;\n      position: relative;\n      border-radius: 3rem 3rem 0;\n      transform: rotate(45deg);\n      border: 1px solid #FFFFFF";
        var icon = leaflet__WEBPACK_IMPORTED_MODULE_9__["divIcon"]({
            className: "my-custom-pin",
            iconAnchor: [0, 24],
            labelAnchor: [-6, 0],
            popupAnchor: [0, -36],
            html: "<span style=\"" + markerHtmlStyles + "\" />"
        });
        this.newMarker = leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"]([this.field.lat, this.field.lng], {
            draggable: true,
            alt: 'Nueva Cancha',
            shadowPane: 'Pane',
            icon: icon,
            title: 'Arrastra bara canbiar la ubicación.'
        })
            .addTo(this.map);
        this.newMarker.on('dragend', function (event) {
            var marker = event.target;
            var position = marker.getLatLng();
            _this.field.lat = position.lat;
            _this.field.lng = position.lng;
            marker.openPopup();
            console.log('change pos', _this.field);
        });
        this.newMarker.bindPopup(this.field.name, { autoPan: false })
            .openPopup();
    };
    FieldFormPage.prototype.loadFields = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.id)
                    this.modelField.api_function('markers').subscribe(function (response) {
                        if (response['status'] == 'success') {
                            if (response['data']) {
                                response['data'].forEach(function (element) {
                                    _this.addMarker(parseFloat(element.lat), parseFloat(element.lng), element.name);
                                });
                            }
                        }
                        _this.map.setView([_this.field.lat, _this.field.lng], 11);
                    }, function (error) {
                    });
                return [2 /*return*/];
            });
        });
    };
    FieldFormPage.prototype.addMarker = function (lat, lng, title) {
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
    };
    FieldFormPage.prototype.inputVal = function (val) {
        this.field.name = val;
        if (this.newMarker) {
            this.newMarker._popup.setContent(val, { autoPan: false });
        }
    };
    FieldFormPage.prototype.regresh = function () {
        this.map.invalidateSize();
    };
    FieldFormPage.prototype.reset = function () {
        if (this.map) {
            this.map.off();
            this.map.remove();
        }
    };
    FieldFormPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"] }
    ]; };
    FieldFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./field-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./field-form.page.scss */ "./src/app/pages/field/field-form/field-form.page.scss")).default]
        })
    ], FieldFormPage);
    return FieldFormPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__["ModalForm"]));



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
/* harmony import */ var src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/screen-loading.service */ "./src/app/services/screen-loading.service.ts");
















var ListFieldsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListFieldsPage, _super);
    function ListFieldsPage(requestService, dialogService, modalController, utilArray, util, location, viewCtrl, dialog, authUser, transfDat, loading) {
        var _this = _super.call(this, location, viewCtrl) || this;
        _this.requestService = requestService;
        _this.dialogService = dialogService;
        _this.modalController = modalController;
        _this.utilArray = utilArray;
        _this.util = util;
        _this.viewCtrl = viewCtrl;
        _this.dialog = dialog;
        _this.authUser = authUser;
        _this.transfDat = transfDat;
        _this.loading = loading;
        _this.segment_select = 'list';
        _this.fields = [];
        _this.oldFields = [];
        _this.markers = [];
        _this.canEdit = false;
        _this.isSelect = false;
        _this.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Field', requestService);
        _this.isSelect = transfDat.getData('isSelect');
        transfDat.clear();
        return _this;
        //this.isSelect = navParams.get('isSelect') ;
    }
    ListFieldsPage.prototype.ngOnInit = function () {
        //this.util.setScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyA_uVKWprjIgPURNhl1v9zzTPLQJIBdi6I');
        this.init();
    };
    ListFieldsPage.prototype.init = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                //await this.dialogService.loadingProgres();
                this.loading.start();
                this.modelField.api_function('pageAllFields').subscribe(function (response) {
                    if (response['status'] == 'success') {
                        _this.fields = response['data'];
                        _this.oldFields = _this.fields;
                    }
                    _this.leafletMap();
                    //this.dialogService.dimissLoaging();
                    _this.loading.end();
                }, function (error) {
                    //this.dialogService.dimissLoaging();
                    _this.loading.end();
                    _this.dialogService.showToast('Error al obtener Campos', '', 'warning');
                });
                return [2 /*return*/];
            });
        });
    };
    ListFieldsPage.prototype.add = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__["FieldFormPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data['data'] && data.data['field']) {
                                var field = data.data['field'];
                                _this.utilArray.listAddFirst(_this.fields, field);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListFieldsPage.prototype.filterField = function (event) {
        var text = event.target.value;
        if (text.length <= 0) {
            this.fields = this.oldFields;
            this.loadFields();
            return;
        }
        this.fields = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.oldFields);
        this.fields = this.fields.filter(function (field) { return field.name.toUpperCase().includes(text.toUpperCase()); });
        this.loadFields();
    };
    ListFieldsPage.prototype.cancelFilter = function ($event) {
        this.fields = this.oldFields;
    };
    ListFieldsPage.prototype.dismiss = function (field) {
        this.viewCtrl.dismiss({
            field: field,
        });
    };
    ListFieldsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ListFieldsPage.prototype.confirmDelete = function (field, $event) {
        var _this = this;
        $event.stopPropagation();
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta cancha', function (e) {
            _this.delete(field);
        });
    };
    ListFieldsPage.prototype.delete = function (field) {
        var _this = this;
        this.modelField.api_delete(field.id).subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                _this.dialog.showToast('Cancha Eliminada', null, 'success');
                _this.utilArray.listDelete(_this.fields, field.id);
            }
        });
    };
    ListFieldsPage.prototype.showEdit = function (field, $event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('showEdit');
                        $event.stopPropagation();
                        return [4 /*yield*/, this.modalController.create({
                                component: _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__["FieldFormPage"],
                                componentProps: { id: field.id }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data && data.data['field']) {
                                var field_1 = data.data['field'];
                                _this.utilArray.listUpdate(_this.fields, field_1.id, field_1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListFieldsPage.prototype.show = function (field, $event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isSelect)
                            return [2 /*return*/];
                        console.log('show');
                        $event.stopPropagation();
                        return [4 /*yield*/, this.modalController.create({
                                component: _show_show_page__WEBPACK_IMPORTED_MODULE_13__["ShowPage"],
                                componentProps: { id: field.id }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            if (data.data && data.data['field']) {
                                //const field = data.data['field'];
                                //this.utilArray.listUpdate(this.fields,field.id,field)
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListFieldsPage.prototype.segmentChanged = function (event) {
        var _this = this;
        //console.log(event);
        this.segment_select = event.detail.value;
        setTimeout(function () {
            _this.regresh();
        }, 100);
    };
    ListFieldsPage.prototype.leafletMap = function () {
        var _this = this;
        //this.reset();
        var field = {
            name: '',
            lat: -27.603857971720405,
            lng: -55.323644024643414
        };
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_12__["map"]('mapId3');
        this.map.on("load", function () {
            console.log('load map');
            setTimeout(function () {
                console.log('refresh');
                _this.regresh();
            }, 1000);
        });
        this.map.setView([field.lat, field.lng], 11);
        //old
        leaflet__WEBPACK_IMPORTED_MODULE_12__["tileLayer"]('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'futbol-alem.com',
            id: 'mapbox/streets-v11'
        }).addTo(this.map);
        /*
            Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'futbol-alem.com',
            }).addTo(this.map);
        */
        //Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
        //Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
        this.loadFields();
    };
    ListFieldsPage.prototype.loadFields = function () {
        var _this = this;
        this.markers.forEach(function (el) {
            if (_this.map)
                _this.map.removeLayer(el);
        });
        this.markers = [];
        this.fields.forEach(function (element) {
            _this.addMarker(parseFloat(element.lat), parseFloat(element.lng), element.name);
        });
        this.regresh();
    };
    ListFieldsPage.prototype.addMarker = function (lat, lng, title) {
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
    };
    ListFieldsPage.prototype.reset = function () {
        if (this.map) {
            this.map.off();
            this.map.remove();
        }
    };
    ListFieldsPage.prototype.regresh = function () {
        this.map.invalidateSize();
    };
    ListFieldsPage.ctorParameters = function () { return [
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__["UtilArrayService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
        { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__["AuthUserService"] },
        { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_14__["TransferDataService"] },
        { type: src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_15__["ScreenLoadingService"] }
    ]; };
    ListFieldsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-fields',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-fields.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-fields.page.scss */ "./src/app/pages/field/list-fields/list-fields.page.scss")).default]
        })
    ], ListFieldsPage);
    return ListFieldsPage;
}(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__["ModalForm"]));



/***/ })

}]);
//# sourceMappingURL=default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035.js.map