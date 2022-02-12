(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFieldFieldFormFieldFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cancha</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"    (keyup)=\"modelField.errorsForm.clear()\" >\n\n    <div class=\"info\">\n      Ingrese un nombre para identificar la cancha <span class=\"sug\"> (Recomendamos el NOMBRE DEL EQUIPO que utiliza la cancha o el NOMBRE DEL LUGAR donde se encuentra ubicado)</span>, después seleccione la ubicación en el mapa.\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [value]=\"field.name\" name=\"name\" (input)=\"inputVal($event.target.value ) \"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ modelField.errorsForm.get('name') }}</div>\n\n    <br>\n    \n    <div id=\"mapId2\" style=\"min-width: 100%; min-height: 400px !important;\">\n    </div>\n    <div class=\"desc\" >\n      Mantén presionado la ubicación en el mapa para añadir la ubicación.\n    </div>\n\n    <ion-button (click)=\"submit()\" expand=\"block\">Guardar</ion-button>\n\n  </form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesFieldListFieldsListFieldsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Canchas</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/teams\" (click)=\"close()\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" >\n      \n      <ion-button  (click)=\"canEdit = !canEdit\" *ngIf=\"segment_select == 'list'\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </ion-button>\n     \n      <ion-button  (click)=\"add()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"segment_select\"  *ngIf=\"!isSelect\">\n    <ion-segment-button value=\"list\">\n      <ion-label>Lista</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-label>Mapa</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-searchbar \n    placeholder=\"Filtrar Canchas\"   \n    (keyup)=\"filterField($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelFilter($event)\"\n  ></ion-searchbar>\n\n  <ion-item *ngIf=\"fields.length == 0\">\n    <label>No se han encontrado registros</label>\n  </ion-item>\n\n  <div [style.display]=\" segment_select =='list' ?  'block' : 'none'\" >\n\n    <ion-list>\n      <ion-item *ngFor=\"let field of fields\" (click)=\"dismiss(field)\">\n        <label (click)=\"show(field,$event)\">{{field.name}}</label>\n  \n        <ion-buttons slot=\"end\" *ngIf=\"canEdit\">\n          <ion-button (click)=\"showEdit(field,$event)\" *ngIf=\"!field.team_id\">\n            <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"confirmDelete(field,$event)\" *ngIf=\"authUser.isAdmin()\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div [style.display]=\" segment_select =='map' && !isSelect ?  'block' : 'none'\" >\n  <div id=\"mapId3\" style=\"min-width: 100%; min-height: 400px !important;\" >\n    </div>\n  </div>\n\n \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/field/field-form/field-form.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/field/field-form/field-form.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFieldFieldFormFieldFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#mapId {\n  min-width: 100% !important;\n  min-height: 300px !important;\n}\n\n#mapId2 {\n  min-width: 100% !important;\n  min-height: 300px !important;\n}\n\n.desc {\n  margin: 10px;\n}\n\n.info {\n  color: #babdbf;\n  margin: 15px;\n}\n\n.sug {\n  color: #727475;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmllbGQvZmllbGQtZm9ybS9maWVsZC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWVsZC9maWVsZC1mb3JtL2ZpZWxkLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcElke1xuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNtYXBJZDJ7XG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2N7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5mb3tcbiAgICBjb2xvcjogI2JhYmRiZjtcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5zdWd7XG4gICAgY29sb3I6ICM3Mjc0NzU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/field/field-form/field-form.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/field/field-form/field-form.page.ts ***!
      \***********************************************************/

    /*! exports provided: FieldFormPage */

    /***/
    function srcAppPagesFieldFieldFormFieldFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldFormPage", function () {
        return FieldFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/photo.service */
      "./src/app/services/photo.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_9__);

      var FieldFormPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(FieldFormPage, _src_app_models_modal);

        var _super = _createSuper(FieldFormPage);

        function FieldFormPage(request, dialogService, viewCtrl, photoService, navParams, location) {
          var _this;

          _classCallCheck(this, FieldFormPage);

          _this = _super.call(this, location, viewCtrl);
          _this.request = request;
          _this.dialogService = dialogService;
          _this.viewCtrl = viewCtrl;
          _this.photoService = photoService;
          _this.newMarker = null;
          _this.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Field', request);
          _this.id = navParams.get('id');
          return _this;
        }

        _createClass(FieldFormPage, [{
          key: "initObject",
          value: function initObject() {
            var _this2 = this;

            console.log('initObject');
            this.field = {
              name: '',
              lat: -27.603857971720405,
              lng: -55.323644024643414
            };

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                _this2.field.lat = position.coords.latitude;
                _this2.field.lng = position.coords.longitude;
                console.log('current pos', position);
              }, function (error) {
                console.error(error);
              });
            }

            if (this.id) {
              this.modelField.api_find(this.id).subscribe(function (data) {
                console.log('load field', data);

                if (data['status'] == 'success') {
                  _this2.field = data['Field'];

                  _this2.leafletMap();

                  _this2.addNewMarker();
                }
              });
            } else {
              this.leafletMap();
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            if (this.field.id) {
              this.modelField.api_update(this.field).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this3.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this3.dismiss(data['Field']);
                }
              });
            } else {
              this.modelField.api_create(this.field).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this3.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this3.dismiss(data['Field']);
                }
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(field) {
            this.viewCtrl.dismiss({
              field: field
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "leafletMap",
          value: function leafletMap() {
            var _this4 = this;

            this.reset();
            this.map = leaflet__WEBPACK_IMPORTED_MODULE_9__["map"]('mapId2');
            var self = this;
            this.map.on("load", function () {
              console.log('load map');
              setTimeout(function () {
                console.log('refresh');

                _this4.regresh();
              }, 1000);
            });
            this.map.setView([this.field.lat, this.field.lng], 11); //old

            leaflet__WEBPACK_IMPORTED_MODULE_9__["tileLayer"]('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'futbol8alem.com',
              id: 'mapbox/streets-v11'
            }).addTo(this.map);
            this.map.on('contextmenu', function (e) {
              console.log('rightClick', e);
              _this4.field.lat = e.latlng.lat;
              _this4.field.lng = e.latlng.lng;

              _this4.addNewMarker();
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
        }, {
          key: "addNewMarker",
          value: function addNewMarker() {
            var _this5 = this;

            if (this.newMarker) this.map.removeLayer(this.newMarker);
            var myCustomColour = '#35da7f';
            var markerHtmlStyles = "\n      background-color: ".concat(myCustomColour, ";\n      width: 2rem;\n      height: 2rem;\n      display: block;\n      left: -1.5rem;\n      top: -1.5rem;\n      position: relative;\n      border-radius: 3rem 3rem 0;\n      transform: rotate(45deg);\n      border: 1px solid #FFFFFF");
            var icon = leaflet__WEBPACK_IMPORTED_MODULE_9__["divIcon"]({
              className: "my-custom-pin",
              iconAnchor: [0, 24],
              labelAnchor: [-6, 0],
              popupAnchor: [0, -36],
              html: "<span style=\"".concat(markerHtmlStyles, "\" />")
            });
            this.newMarker = leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"]([this.field.lat, this.field.lng], {
              draggable: true,
              alt: 'Nueva Cancha',
              shadowPane: 'Pane',
              icon: icon,
              title: 'Arrastra bara canbiar la ubicación.'
            }).addTo(this.map);
            this.newMarker.on('dragend', function (event) {
              var marker = event.target;
              var position = marker.getLatLng();
              _this5.field.lat = position.lat;
              _this5.field.lng = position.lng;
              marker.openPopup();
              console.log('change pos', _this5.field);
            });
            this.newMarker.bindPopup(this.field.name, {
              autoPan: false
            }).openPopup();
          }
        }, {
          key: "loadFields",
          value: function loadFields() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.id) this.modelField.api_function('markers').subscribe(function (response) {
                        if (response['status'] == 'success') {
                          if (response['data']) {
                            response['data'].forEach(function (element) {
                              _this6.addMarker(parseFloat(element.lat), parseFloat(element.lng), element.name);
                            });
                          }
                        }

                        _this6.map.setView([_this6.field.lat, _this6.field.lng], 11);
                      }, function (error) {});

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addMarker",
          value: function addMarker(lat, lng, title) {
            var Icono = leaflet__WEBPACK_IMPORTED_MODULE_9__["icon"]({
              iconUrl: "http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",
              iconSize: [30, 40],
              iconAnchor: [15, 40],
              shadowSize: [35, 50],
              shadowAnchor: [0, 55],
              popupAnchor: [0, -40]
            });
            if (lat != 0 && lng != 0) leaflet__WEBPACK_IMPORTED_MODULE_9__["marker"]([lat, lng], {
              icon: Icono
            }).addTo(this.map).bindTooltip(title, {
              permanent: true
            }).openTooltip(); //.bindPopup(title,{autoPan:false}).openPopup();
          }
        }, {
          key: "inputVal",
          value: function inputVal(val) {
            this.field.name = val;

            if (this.newMarker) {
              this.newMarker._popup.setContent(val, {
                autoPan: false
              });
            }
          }
        }, {
          key: "regresh",
          value: function regresh() {
            this.map.invalidateSize();
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.map) {
              this.map.off();
              this.map.remove();
            }
          }
        }]);

        return FieldFormPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_7__["ModalForm"]);

      FieldFormPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]
        }];
      };

      FieldFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-field-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./field-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/field-form/field-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./field-form.page.scss */
        "./src/app/pages/field/field-form/field-form.page.scss"))["default"]]
      })], FieldFormPage);
      /***/
    },

    /***/
    "./src/app/pages/field/list-fields/list-fields.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/field/list-fields/list-fields.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesFieldListFieldsListFieldsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpZWxkL2xpc3QtZmllbGRzL2xpc3QtZmllbGRzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/field/list-fields/list-fields.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/field/list-fields/list-fields.page.ts ***!
      \*************************************************************/

    /*! exports provided: ListFieldsPage */

    /***/
    function srcAppPagesFieldListFieldsListFieldsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListFieldsPage", function () {
        return ListFieldsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../field-form/field-form.page */
      "./src/app/pages/field/field-form/field-form.page.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _show_show_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../show/show.page */
      "./src/app/pages/field/show/show.page.ts");
      /* harmony import */


      var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/transfer-data.service */
      "./src/app/services/transfer-data.service.ts");

      var ListFieldsPage = /*#__PURE__*/function (_src_app_models_modal2) {
        _inherits(ListFieldsPage, _src_app_models_modal2);

        var _super2 = _createSuper(ListFieldsPage);

        function ListFieldsPage(requestService, dialogService, modalController, utilArray, util, location, viewCtrl, dialog, authUser, transfDat) {
          var _this7;

          _classCallCheck(this, ListFieldsPage);

          _this7 = _super2.call(this, location, viewCtrl);
          _this7.requestService = requestService;
          _this7.dialogService = dialogService;
          _this7.modalController = modalController;
          _this7.utilArray = utilArray;
          _this7.util = util;
          _this7.viewCtrl = viewCtrl;
          _this7.dialog = dialog;
          _this7.authUser = authUser;
          _this7.transfDat = transfDat;
          _this7.segment_select = 'list';
          _this7.fields = [];
          _this7.oldFields = [];
          _this7.markers = [];
          _this7.canEdit = false;
          _this7.isSelect = false;
          _this7.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Field', requestService);
          _this7.isSelect = transfDat.getData('isSelect');
          transfDat.clear(); //this.isSelect = navParams.get('isSelect') ;

          return _this7;
        }

        _createClass(ListFieldsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.util.setScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyA_uVKWprjIgPURNhl1v9zzTPLQJIBdi6I');
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.dialogService.loadingProgres();

                    case 2:
                      this.modelField.api_function('pageAllFields').subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this8.fields = response['data'];
                          _this8.oldFields = _this8.fields;
                        }

                        _this8.leafletMap();

                        _this8.dialogService.dimissLoaging();
                      }, function (error) {
                        _this8.dialogService.dimissLoaging();

                        _this8.dialogService.showToast('Error al obtener Campos', '', 'warning');
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "add",
          value: function add() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__["FieldFormPage"]
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data['data'] && data.data['field']) {
                          var field = data.data['field'];

                          _this9.utilArray.listAddFirst(_this9.fields, field);
                        }
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "filterField",
          value: function filterField(event) {
            var text = event.target.value;

            if (text.length <= 0) {
              this.fields = this.oldFields;
              this.loadFields();
              return;
            }

            this.fields = _toConsumableArray(this.oldFields);
            this.fields = this.fields.filter(function (field) {
              return field.name.toUpperCase().includes(text.toUpperCase());
            });
            this.loadFields();
          }
        }, {
          key: "cancelFilter",
          value: function cancelFilter($event) {
            this.fields = this.oldFields;
          }
        }, {
          key: "dismiss",
          value: function dismiss(field) {
            this.viewCtrl.dismiss({
              field: field
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(field, $event) {
            var _this10 = this;

            $event.stopPropagation();
            this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta cancha', function (e) {
              _this10["delete"](field);
            });
          }
        }, {
          key: "delete",
          value: function _delete(field) {
            var _this11 = this;

            this.modelField.api_delete(field.id).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 'success') {
                _this11.dialog.showToast('Cancha Eliminada', null, 'success');

                _this11.utilArray.listDelete(_this11.fields, field.id);
              }
            });
          }
        }, {
          key: "showEdit",
          value: function showEdit(field, $event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this12 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('showEdit');
                      $event.stopPropagation();
                      _context4.next = 4;
                      return this.modalController.create({
                        component: _field_form_field_form_page__WEBPACK_IMPORTED_MODULE_8__["FieldFormPage"],
                        componentProps: {
                          id: field.id
                        }
                      });

                    case 4:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data['field']) {
                          var _field = data.data['field'];

                          _this12.utilArray.listUpdate(_this12.fields, _field.id, _field);
                        }
                      });
                      _context4.next = 8;
                      return modal.present();

                    case 8:
                      return _context4.abrupt("return", _context4.sent);

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "show",
          value: function show(field, $event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.isSelect) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      console.log('show');
                      $event.stopPropagation();
                      _context5.next = 6;
                      return this.modalController.create({
                        component: _show_show_page__WEBPACK_IMPORTED_MODULE_13__["ShowPage"],
                        componentProps: {
                          id: field.id
                        }
                      });

                    case 6:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data['field']) {//const field = data.data['field'];
                          //this.utilArray.listUpdate(this.fields,field.id,field)
                        }
                      });
                      _context5.next = 10;
                      return modal.present();

                    case 10:
                      return _context5.abrupt("return", _context5.sent);

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(event) {
            var _this13 = this;

            //console.log(event);
            this.segment_select = event.detail.value;
            setTimeout(function () {
              _this13.regresh();
            }, 100);
          }
        }, {
          key: "leafletMap",
          value: function leafletMap() {
            var _this14 = this;

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

                _this14.regresh();
              }, 1000);
            });
            this.map.setView([field.lat, field.lng], 11); //old

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
        }, {
          key: "loadFields",
          value: function loadFields() {
            var _this15 = this;

            this.markers.forEach(function (el) {
              if (_this15.map) _this15.map.removeLayer(el);
            });
            this.markers = [];
            this.fields.forEach(function (element) {
              _this15.addMarker(parseFloat(element.lat), parseFloat(element.lng), element.name);
            });
            this.regresh();
          }
        }, {
          key: "addMarker",
          value: function addMarker(lat, lng, title) {
            var Icono = leaflet__WEBPACK_IMPORTED_MODULE_12__["icon"]({
              iconUrl: "http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",
              iconSize: [30, 40],
              iconAnchor: [15, 40],
              shadowSize: [35, 50],
              shadowAnchor: [0, 55],
              popupAnchor: [0, -40]
            });

            if (lat != 0 && lng != 0) {
              var m = leaflet__WEBPACK_IMPORTED_MODULE_12__["marker"]([lat, lng], {
                icon: Icono
              }).addTo(this.map).bindTooltip(title, {
                permanent: true
              }).openTooltip(); //.bindPopup(title,{autoPan:false}).openPopup();

              this.markers.push(m);
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.map) {
              this.map.off();
              this.map.remove();
            }
          }
        }, {
          key: "regresh",
          value: function regresh() {
            this.map.invalidateSize();
          }
        }]);

        return ListFieldsPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__["ModalForm"]);

      ListFieldsPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_6__["UtilArrayService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_11__["AuthUserService"]
        }, {
          type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_14__["TransferDataService"]
        }];
      };

      ListFieldsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-fields',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list-fields.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/field/list-fields/list-fields.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list-fields.page.scss */
        "./src/app/pages/field/list-fields/list-fields.page.scss"))["default"]]
      })], ListFieldsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035-es5.js.map