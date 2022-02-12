(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
        "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
        "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
        "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
        "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet>\n  </ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crop/crop.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crop/crop.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCropCropPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Recortar</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close\"></ion-icon>      \n      </ion-button>\n\n      <ion-button (click)=\"save()\">\n        <ion-icon name=\"checkmark\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <image-cropper\n    *ngIf=\"ar == '1 / 1'\"\n      [imageBase64]=\"imageBase64\"\n      [maintainAspectRatio]=\"true\"\n      [aspectRatio]= \"1 / 1\"\n      format=\"png\"\n      (imageCropped)=\"imageCropped($event)\"\n      (imageLoaded)=\"imageLoaded()\"\n      (cropperReady)=\"cropperReady()\"\n      (loadImageFailed)=\"loadImageFailed()\"\n  ></image-cropper>\n\n  <image-cropper\n  *ngIf=\"ar == '4 / 3'\"\n    [imageBase64]=\"imageBase64\"\n    [maintainAspectRatio]=\"true\"\n    [aspectRatio]= \"4 / 3\"\n    format=\"png\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\"\n    (loadImageFailed)=\"loadImageFailed()\"\n></image-cropper>\n\n<image-cropper\n*ngIf=\"ar == '16 / 9'\"\n  [imageBase64]=\"imageBase64\"\n  [maintainAspectRatio]=\"true\"\n  [aspectRatio]= \"16 / 9\"\n  format=\"png\"\n  (imageCropped)=\"imageCropped($event)\"\n  (imageLoaded)=\"imageLoaded()\"\n  (cropperReady)=\"cropperReady()\"\n  (loadImageFailed)=\"loadImageFailed()\"\n></image-cropper>\n\n<img [src]=\"croppedImage\" />\n\n<ion-button expand=\"block\" fill=\"clear\" (click)=\"save()\">Guardar</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Buscar</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button  *ngIf=\"multiple && listSelect.length > 0\" color=\"primary\"  (click)=\"finalize()\" >Finalizar</ion-button>\n    </ion-buttons>\n\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-searchbar\n  [showCancelButton]=\"showCancelButton\"\n  (keyup)=\"onInput($event)\"\n  (ionCancel)=\"onCancel($event)\"\n  [placeholder]=\"textSearch\">\n</ion-searchbar>\n\n<ion-content>\n\n  <div style=\"padding-bottom: 30px;\">\n    <ion-list>\n    \n      <ion-item *ngFor=\"let item of listSelect\"     (click)=\"removeItem(item)\" >\n        {{item.text}}\n        <ion-note slot=\"end\" color=\"success\">SELECCIONADO</ion-note>\n      </ion-item>\n     \n  \n      <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n        <ion-label>No se ha encontrado registros</ion-label>\n      </ion-list-header>\n    \n      <ion-item *ngFor=\"let item of list\"    (click)=\"select(item)\" >{{item.text}}</ion-item>\n  \n    </ion-list>\n  </div>\n\n \n\n\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/form/form.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/form/form.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamFormFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  <ion-title>Equipo</ion-title>\n    \n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceTeam.errorsForm.clear()\" >\n\n   \n\n    <div>\n      <img id=\"img_cover\" [src]=\"serviceImageCoverPage.photo.getPath()\" >\n      <div class=\"ion-text-center\">\n        <ion-button   size=\"small\" color=\"tertiary\" (click)=\"serviceImageCoverPage.addOneNewToGallery()\">{{serviceImageCoverPage.isLoadPthoto() ? 'Modificar Portada' :'Seleccionar Portada' }}</ion-button>\n      </div>\n    </div>\n\n    <div class=\"ion-text-center\" style=\"margin-top: 20px;\">\n      <img id=\"img_esc\" style=\"width: 200px;margin: auto;\" [src]=\"photoService.photo.getPath()\"  >\n      <div class=\"ion-text-center\">\n        <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoService.addOneNewToGallery()\">{{photoService.isLoadPthoto() ? 'Modificar escudo' :'Seleccionar escudo' }}</ion-button>\n      </div>\n    </div>\n      \n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"team.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTeam.errorsForm.get('name') }}</div>\n\n\n    <div class=\"admins\" *ngIf=\"authUser.isAdmin()\">\n      <ion-list-header  color=\"tertiary\">\n        <ion-label>Administradores</ion-label>\n        <button item-end ion-button color=\"danger\" (click)=\"addAdmins($event)\">\n          <ion-icon name=\"person-add-outline\"></ion-icon>\n        </button>\n      </ion-list-header>\n\n      <ion-list  *ngFor=\"let item of team.admins\"  >\n        <ion-item>  {{item.text ? item.text : item.last_name +' '+ item.first_name}}</ion-item>\n      </ion-list>\n    </div>\n   \n    <div class=\"ion-text-center\">\n      <ion-button type=\"submit\" block> Guardar </ion-button>\n    </div>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/api/models/errors.ts":
    /*!**************************************!*\
      !*** ./src/app/api/models/errors.ts ***!
      \**************************************/

    /*! exports provided: Errors */

    /***/
    function srcAppApiModelsErrorsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Errors", function () {
        return Errors;
      });

      var Errors = /*#__PURE__*/function () {
        /**
         * Create a new Errors instance.
         */
        function Errors() {
          _classCallCheck(this, Errors);

          this.errors = {};
        }
        /**
         * Determine if an errors exists for the given field.
         *
         * @param {string} field
         */


        _createClass(Errors, [{
          key: "has",
          value: function has(field) {
            return this.errors.hasOwnProperty(field);
          }
          /**
           * Determine if we have any errors.
           */

        }, {
          key: "any",
          value: function any() {
            return Object.keys(this.errors).length > 0;
          }
          /**
           * Retrieve the error message for a field.
           *
           * @param {string} field
           */

        }, {
          key: "get",
          value: function get(field) {
            if (this.errors[field]) {
              return this.errors[field][0];
            }
          }
          /**
           * Record the new errors.
           *
           * @param {object} errors
           */

        }, {
          key: "record",
          value: function record(errors) {
            this.errors = errors;
          }
          /**
           * Clear one or all error fields.
           *s
           * @param {string|null} field
           */

        }, {
          key: "clear",
          value: function clear() {
            var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (field) {
              delete this.errors[field];
              return;
            }

            this.errors = {};
          }
        }]);

        return Errors;
      }();
      /***/

    },

    /***/
    "./src/app/api/models/model.ts":
    /*!*************************************!*\
      !*** ./src/app/api/models/model.ts ***!
      \*************************************/

    /*! exports provided: Model */

    /***/
    function srcAppApiModelsModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Model", function () {
        return Model;
      });
      /* harmony import */


      var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./errors */
      "./src/app/api/models/errors.ts");

      var Model = /*#__PURE__*/function () {
        function Model(model, request) {
          _classCallCheck(this, Model);

          this.request = request;
          this.errorsForm = new _errors__WEBPACK_IMPORTED_MODULE_0__["Errors"]();
          this.list = [];
          this.model = model;
        }

        _createClass(Model, [{
          key: "api_find",
          value: function api_find(id) {
            return this.request.api_find(this.model, id);
          }
        }, {
          key: "api_loadAttribute",
          value: function api_loadAttribute(id, attribute) {
            return this.request.api_loadAttribute(this.model, id, attribute);
          }
        }, {
          key: "api_all",
          value: function api_all() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return this.request.api_all(this.model, event).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 'success') {
                _this.list = data['all'];
              }

              if (event) event.target.complete();
            }, function (error) {
              if (event) event.target.complete();
            });
          }
        }, {
          key: "api_create",
          value: function api_create(item) {
            this.errorsForm = this.request.errorsForm;
            return this.request.api_create(this.model, item);
          }
        }, {
          key: "api_update",
          value: function api_update(item) {
            this.errorsForm = this.request.errorsForm;
            return this.request.api_update(this.model, item);
          }
          /**
           * Elimina el objeto de la base de datos
           * @param id Id del elemento a eliminar
           * @return Devuelve el mismo objeto y el estado del proceso
           */

        }, {
          key: "api_delete",
          value: function api_delete(id) {
            this.errorsForm = this.request.errorsForm;
            return this.request.api_delete(this.model, id);
          }
        }, {
          key: "api_function",
          value: function api_function(functionName) {
            var parms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request.api_function(this.model, functionName, parms);
          }
        }, {
          key: "api_functionModel",
          value: function api_functionModel(id, functionName) {
            var parms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return this.request.api_functionModel(this.model, id, functionName, parms, options);
          }
        }, {
          key: "listAddLast",
          value: function listAddLast(item) {
            this.list.push(item);
          }
        }, {
          key: "listAddFirst",
          value: function listAddFirst(item) {
            this.list.unshift(item);
          }
        }, {
          key: "listUpdate",
          value: function listUpdate(id, item) {
            var index = this.findIndexList(id);
            console.log('index remove', index);

            if (index >= 0) {
              this.list[index] = item;
            }
          }
        }, {
          key: "listDelete",
          value: function listDelete(id) {
            var index = this.findIndexList(id);
            console.log('index remove', index);
            if (index >= 0) this.list.splice(index, 1);
          }
        }, {
          key: "findList",
          value: function findList(id) {
            return this.list.find(function (item) {
              return item['id'] === id;
            });
          }
        }, {
          key: "findIndexList",
          value: function findIndexList(id) {
            return this.list.findIndex(function (item) {
              return item['id'] === id;
            });
          }
        }]);

        return Model;
      }();
      /***/

    },

    /***/
    "./src/app/api/models/modelImage.ts":
    /*!******************************************!*\
      !*** ./src/app/api/models/modelImage.ts ***!
      \******************************************/

    /*! exports provided: ModelImage, Photo */

    /***/
    function srcAppApiModelsModelImageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelImage", function () {
        return ModelImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Photo", function () {
        return Photo;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_pages_crop_crop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/pages/crop/crop.page */
      "./src/app/pages/crop/crop.page.ts");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem,
          Storage = _capacitor_core__WEBP.Storage;

      var ModelImage = /*#__PURE__*/function () {
        function ModelImage(request, modalController) {
          _classCallCheck(this, ModelImage);

          this.modalController = modalController;
          this.photos = [];
          this.aspectRatio = '1 / 1';
          this.element_img = null;
          this.MAX_WIDTH = 1000;
          this.cropOptions = {
            quality: 50
          };

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };

          this.serviceImage = new _model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Image', request);
        }

        _createClass(ModelImage, [{
          key: "init",
          value: function init(url) {
            var thumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var pathDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'assets/images/pngwing.png';
            this.url = url !== null && url !== void 0 ? url : '/images/';
            this.thumb = thumb;
            this.path = pathDefault;
            this.photo = new Photo(pathDefault);
          }
        }, {
          key: "setImage",
          value: function setImage(image) {
            this.image = image;
            this.photo.image = image;
          }
        }, {
          key: "setElementImg",
          value: function setElementImg(element) {
            var max_width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
            this.element_img = element;
            this.MAX_WIDTH = max_width;
          }
        }, {
          key: "addNewToGallery",
          value: function addNewToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var capturedPhoto, base64Data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Camera.getPhoto({
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Uri,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Camera,
                        quality: 100,
                        allowEditing: true,
                        correctOrientation: false
                      });

                    case 2:
                      capturedPhoto = _context.sent;
                      _context.next = 5;
                      return this.readAsBase64(capturedPhoto);

                    case 5:
                      base64Data = _context.sent;
                      this.photos.unshift(new Photo(null, capturedPhoto.webPath, base64Data, this.url, this.thumb));

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addOneNewToGallery",
          value: function addOneNewToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var capturedPhoto, base64Data, crop;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Camera.getPhoto({
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Camera,
                        quality: 30,
                        correctOrientation: false
                      });

                    case 2:
                      capturedPhoto = _context2.sent;
                      base64Data = "data:image/jpeg;base64," + capturedPhoto.base64String; //await this.readAsBase64(capturedPhoto);
                      //console.log('base64 canvas' , this.thumbnail(base64Data , 700 )); 

                      this.photo = new Photo(capturedPhoto.webPath, base64Data, base64Data, this.url, this.thumb, this.image);
                      this.image = this.photo;
                      crop = this.aspectRatio != 'none';
                      this.testCompres(crop);
                      console.log('photo', this.photo);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "testCompres",
          value: function testCompres() {
            var _this2 = this;

            var crop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            setTimeout(function () {
              console.log('compress');
              var e = document.getElementById(_this2.element_img);

              if (e) {
                //this.element_img.onload = function(e : any){
                var canvas = document.createElement('canvas'); //this.MAX_WIDTH = 1000;

                if (_this2.MAX_WIDTH > e.naturalWidth) _this2.MAX_WIDTH = e.naturalWidth;
                var scaleSize = _this2.MAX_WIDTH / e.width;
                canvas.width = _this2.MAX_WIDTH;
                canvas.height = e.height * scaleSize;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(e, 0, 0, canvas.width, canvas.height);
                var newBase64 = canvas.toDataURL(); //this.photo.data = newBase64;
                //this.photo.webPath = newBase64;

                _this2.photo.setData(newBase64); //}

              } else {
                console.log('testCompres No load view');
              }

              if (crop) {
                _this2.cropImage();
              }
            }, 100);
          }
        }, {
          key: "setAspectRatioCrop",
          value: function setAspectRatioCrop(aspectRatio) {
            this.aspectRatio = aspectRatio;
          }
        }, {
          key: "onResize",
          value: function onResize($event) {
            console.log($event);
          }
        }, {
          key: "cropImage",
          value: function cropImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal, self;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('crop');
                      _context3.next = 3;
                      return this.modalController.create({
                        component: src_app_pages_crop_crop_page__WEBPACK_IMPORTED_MODULE_3__["CropPage"],
                        componentProps: {
                          base64: this.photo.data,
                          aspectRatio: this.aspectRatio
                        }
                      });

                    case 3:
                      modal = _context3.sent;
                      self = this;
                      modal.onDidDismiss().then(function (data) {
                        if (data['data'] && data['data']['base64']) {
                          self.photo.setData(data['data']['base64']);
                          self.testCompres();
                        }
                      });
                      _context3.next = 8;
                      return modal.present();

                    case 8:
                      return _context3.abrupt("return", _context3.sent);

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "isLoadPthoto",
          value: function isLoadPthoto() {
            return this.photo && this.photo.data ? true : false;
          }
        }, {
          key: "hasImage",
          value: function hasImage() {
            return this.image && this.image.id ? true : false;
          }
        }, {
          key: "getImageUpload",
          value: function getImageUpload() {
            var img = Object.assign({}, this.image);
            img.webviewPath = '';
            return img;
          }
        }, {
          key: "readAsBase64",
          value: function readAsBase64(cameraPhoto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var response, blob;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return fetch(cameraPhoto.webPath);

                    case 2:
                      response = _context4.sent;
                      _context4.next = 5;
                      return response.blob();

                    case 5:
                      blob = _context4.sent;
                      _context4.next = 8;
                      return this.convertBlobToBase64(blob);

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
          key: "uploadImage",
          value: function uploadImage() {
            if (this.isLoadPthoto) {
              var photo = Object.assign({}, this.photo);
              photo.webviewPath = '';

              if (this.photo.id) {
                return this.serviceImage.api_update(photo);
              } else {
                return this.serviceImage.api_create(photo);
              }
            }
          }
        }]);

        return ModelImage;
      }();

      var Photo = /*#__PURE__*/function () {
        function Photo() {
          var filepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "assets/images/pngwing.png";
          var webviewPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var url = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var thumb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var image = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

          _classCallCheck(this, Photo);

          this.id = image ? image.id : '';
          this.webviewPath = webviewPath;
          this.filepath = filepath;
          this.data = data;
          this.url = url;
          this.thumb = thumb;
          this.image = image;
        }

        _createClass(Photo, [{
          key: "getPath",
          value: function getPath() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            if (event) console.log(event); //this.testCompres(event);

            if (this.webviewPath) {
              return this.webviewPath;
            } else if (this.image && this.image['urlComplete']) {
              return this.image['urlComplete'];
            } else {
              return this.filepath;
            }
          }
        }, {
          key: "setData",
          value: function setData(data) {
            this.webviewPath = data;
            this.data = data;
          }
        }]);

        return Photo;
      }();
      /***/

    },

    /***/
    "./src/app/api/request.service.ts":
    /*!****************************************!*\
      !*** ./src/app/api/request.service.ts ***!
      \****************************************/

    /*! exports provided: RequestService */

    /***/
    function srcAppApiRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestService", function () {
        return RequestService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _api_models_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api/models/errors */
      "./src/app/api/models/errors.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _models_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/network.service */
      "./src/app/services/network.service.ts");

      var RequestService = /*#__PURE__*/function () {
        function RequestService(http, toastCtr, netWorkService) {
          _classCallCheck(this, RequestService);

          this.http = http;
          this.toastCtr = toastCtr;
          this.netWorkService = netWorkService;
          this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url;
          this.errorsForm = new _api_models_errors__WEBPACK_IMPORTED_MODULE_4__["Errors"]();
          this.errormodel = new _models_model__WEBPACK_IMPORTED_MODULE_8__["Model"]('Error', this);
          this.initCache();
        }

        _createClass(RequestService, [{
          key: "initCache",
          value: function initCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!('caches' in self)) {
                        _context5.next = 5;
                        break;
                      }

                      _context5.next = 3;
                      return caches.open('cache_f8a');

                    case 3:
                      this.cache = _context5.sent;
                      console.log('canche enable and open');

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "api_find",
          value: function api_find(model, id) {
            console.log("api_find model ".concat(model), id);
            var path = "".concat(this.api, "/model/").concat(model, "/").concat(id);
            return this.http.get(path);
          }
        }, {
          key: "api_loadAttribute",
          value: function api_loadAttribute(model, id, attribute) {
            console.log("api_loadAttibute model ".concat(model), id);
            var path = "".concat(this.api, "/reloadAttribute/").concat(model, "/").concat(id, "/").concat(attribute);
            return this.http.get(path);
          }
        }, {
          key: "api_all",
          value: function api_all(model) {
            var _this3 = this;

            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            console.log("api_all model ".concat(model));
            var path = "".concat(this.api, "/collection/").concat(model);
            return this.http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this3.handleError(err, model);
            }));
          }
        }, {
          key: "api_create",
          value: function api_create(model, item) {
            var _this4 = this;

            console.log("api_create model ".concat(model), item);
            var path = "".concat(this.api, "/methods/").concat(model, "/create");
            return this.http.post(path, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this4.handleError(err, model);
            }));
          }
        }, {
          key: "api_update",
          value: function api_update(model, item) {
            var _this5 = this;

            console.log("api_update model ".concat(model), item);
            var path = "".concat(this.api, "/methods/").concat(model, "/update");
            return this.http.put(path, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this5.handleError(err, model);
            }));
          }
        }, {
          key: "api_delete",
          value: function api_delete(model, id) {
            var _this6 = this;

            console.log("api_delete model ".concat(model, " id:"), id);
            var path = "".concat(this.api, "/methods/").concat(model, "/delete");
            return this.http.post(path, {
              'id': id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this6.handleError(err, model);
            }));
          }
        }, {
          key: "api_function",
          value: function api_function(model, functionName) {
            var _this7 = this;

            var parms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            console.log("api_function model ".concat(model, " function:"), functionName);
            var path = "".concat(this.api, "/runFunction/").concat(model, "/").concat(functionName, "?").concat(this.objectToQueryString(parms));
            return this.http.get(path, {
              params: parms
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this7.handleError(err, model);
            }));
          }
        }, {
          key: "api_functionModel",
          value: function api_functionModel(model, id, functionName) {
            var _this8 = this;

            var parms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var options = arguments.length > 4 ? arguments[4] : undefined;
            console.log("api_functionModel model ".concat(model, " function:"), functionName);
            var path = "".concat(this.api, "/runFunctionModel/").concat(model, "/").concat(id, "/").concat(functionName);
            return this.http.post(path, parms, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return _this8.handleError(err, model);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (error.error && error.error.message) this.showToast(error.error.message, 'danger');

            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              if (error.status == 402) {
                this.errorsForm.record(JSON.parse(error.error.errorValidaciones));
              } else if (error.status == 403) {
                //this.saveErrorApi(error.status,error.error.mensaje,model);
                this.showToast(error.error.mensaje, 'danger', 7000, 'Error Server');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.error.mensaje);
              } else {
                //this.saveErrorApi(error.status,error.message,model);
                console.error("Backend returned code ", error.status, "body was:", error.message);
                this.showToast('Error de conexión con el  servidor.', 'danger');
              }
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
          }
        }, {
          key: "showToast",
          value: function showToast(msj) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
            var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
            var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastCtr.create({
                        header: header,
                        color: color,
                        message: msj,
                        duration: duration
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "saveErrorApi",
          value: function saveErrorApi(status, message, model) {
            if (model != 'Error') {
              this.errormodel.api_create({
                status: status,
                text: message,
                model: model
              }).subscribe(function (response) {
                console.log('save Error in APi', response);
              });
            }
          }
        }, {
          key: "objectToQueryString",
          value: function objectToQueryString(obj) {
            var str = [];

            for (var p in obj) {
              if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              }
            }

            return str.join("&");
          }
        }]);

        return RequestService;
      }();

      RequestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]
        }];
      };

      RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RequestService);
      /***/
    },

    /***/
    "./src/app/api/util/dialog.service.ts":
    /*!********************************************!*\
      !*** ./src/app/api/util/dialog.service.ts ***!
      \********************************************/

    /*! exports provided: DialogService */

    /***/
    function srcAppApiUtilDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogService", function () {
        return DialogService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var DialogService = /*#__PURE__*/function () {
        function DialogService(alertController, toastCtr, actionSheetController, loadingController) {
          _classCallCheck(this, DialogService);

          this.alertController = alertController;
          this.toastCtr = toastCtr;
          this.actionSheetController = actionSheetController;
          this.loadingController = loadingController;
        }

        _createClass(DialogService, [{
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(title, message, handlerOk) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        header: title,
                        message: "<strong>".concat(message, "</strong>"),
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(data) {
                            alert.dismiss();
                          }
                        }, {
                          text: 'Aceptar',
                          handler: handlerOk
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "presentAlertAcept",
          value: function presentAlertAcept(title, message, handlerOk) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        header: title,
                        backdropDismiss: false,
                        message: "<strong>".concat(message, "</strong>"),
                        buttons: [{
                          text: 'Aceptar',
                          handler: handlerOk
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(msj) {
            var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'primary';
            var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastCtr.create({
                        header: header,
                        color: color,
                        message: msj,
                        duration: duration
                      });

                    case 2:
                      toast = _context9.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "actionSheetEditDelete",
          value: function actionSheetEditDelete(callbackEdit, callbackDelet) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      buttons = [];

                      if (callbackEdit) {
                        buttons.push({
                          text: 'Modificar',
                          icon: 'create-outline',
                          handler: function handler() {
                            console.log('Edit clicked');
                            callbackEdit(); //comment.edit = true;
                            //this.commentEdit = {...comment};
                          }
                        });
                      }

                      if (callbackDelet) {
                        buttons.push({
                          text: 'Eliminar',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            console.log('Delete clicked'); //this.confirmDelete(comment);

                            callbackDelet();
                          }
                        });
                      }

                      buttons.push({
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      });
                      _context10.next = 6;
                      return this.actionSheetController.create({
                        header: 'Opciones',
                        cssClass: 'my-custom-class',
                        buttons: buttons
                      });

                    case 6:
                      actionSheet = _context10.sent;
                      _context10.next = 9;
                      return actionSheet.present();

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "loadingProgres",
          value: function loadingProgres() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingController.create({
                        spinner: 'lines',
                        //duration: 5000,
                        message: message,
                        translucent: false,
                        cssClass: 'custom-class custom-loading',
                        backdropDismiss: false
                      });

                    case 2:
                      this.loading = _context11.sent;
                      _context11.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "dimissLoaging",
          value: function dimissLoaging() {
            if (this.loading) this.loading.dismiss();
          }
        }]);

        return DialogService;
      }();

      DialogService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      DialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DialogService);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'teams',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-team-list-list-module */
          "pages-team-list-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/team/list/list.module */
          "./src/app/pages/team/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'team/:team_id/players',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-player-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a"), __webpack_require__.e("pages-player-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/player/list/list.module */
          "./src/app/pages/player/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'form',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/team/form/form.module */
          "./src/app/pages/team/form/form.module.ts")).then(function (m) {
            return m.FormPageModule;
          });
        }
      }, {
        path: 'admin_home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-admin-home-home-module */
          "pages-admin-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/admin/home/home.module */
          "./src/app/pages/admin/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'positions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-position-list-list-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-position-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/position/list/list.module */
          "./src/app/pages/position/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'position-form',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-position-position-form-position-form-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-position-position-form-position-form-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/position/position-form/position-form.module */
          "./src/app/pages/position/position-form/position-form.module.ts")).then(function (m) {
            return m.PositionFormPageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-event-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("pages-event-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/event/list/list.module */
          "./src/app/pages/event/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'event-form',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-event-event-form-event-form-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("pages-event-event-form-event-form-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/event/event-form/event-form.module */
          "./src/app/pages/event/event-form/event-form.module.ts")).then(function (m) {
            return m.EventFormPageModule;
          });
        }
      }, {
        path: 'games',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("pages-game-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/list/list.module */
          "./src/app/pages/game/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'game-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-game-game-form-game-form-module */
          "pages-game-game-form-game-form-module").then(__webpack_require__.bind(null,
          /*! ./pages/game/game-form/game-form.module */
          "./src/app/pages/game/game-form/game-form.module.ts")).then(function (m) {
            return m.GameFormPageModule;
          });
        }
      }, {
        path: 'players',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-player-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a"), __webpack_require__.e("pages-player-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/player/list/list.module */
          "./src/app/pages/player/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'player-form',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-player-player-form-player-form-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a"), __webpack_require__.e("pages-player-player-form-player-form-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/player/player-form/player-form.module */
          "./src/app/pages/player/player-form/player-form.module.ts")).then(function (m) {
            return m.PlayerFormPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-list-list-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-user-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user/list/list.module */
          "./src/app/pages/user/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'users/:id/profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-profile-profile-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-user-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user/profile/profile.module */
          "./src/app/pages/user/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'user-form',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-user-form-user-form-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-user-user-form-user-form-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user/user-form/user-form.module */
          "./src/app/pages/user/user-form/user-form.module.ts")).then(function (m) {
            return m.UserFormPageModule;
          });
        }
      }, {
        path: 'search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-search-search-module */
          "pages-search-search-module").then(__webpack_require__.bind(null,
          /*! ./pages/search/search.module */
          "./src/app/pages/search/search.module.ts")).then(function (m) {
            return m.SearchPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'team/profile/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-team-profile-profile-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035"), __webpack_require__.e("common"), __webpack_require__.e("pages-team-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/team/profile/profile.module */
          "./src/app/pages/team/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'results/profile/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-result-result-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("common"), __webpack_require__.e("pages-game-result-result-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/result/result.module */
          "./src/app/pages/game/result/result.module.ts")).then(function (m) {
            return m.ResultPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'games/profile/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-game-game-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("common"), __webpack_require__.e("pages-game-game-game-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/game/game.module */
          "./src/app/pages/game/game/game.module.ts")).then(function (m) {
            return m.GamePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'crop',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-crop-crop-module */
          "pages-crop-crop-module").then(__webpack_require__.bind(null,
          /*! ./pages/crop/crop.module */
          "./src/app/pages/crop/crop.module.ts")).then(function (m) {
            return m.CropPageModule;
          });
        }
      }, {
        path: 'typesEvent',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-typeEvent-list-list-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-typeEvent-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/typeEvent/list/list.module */
          "./src/app/pages/typeEvent/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'type-event-form',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-typeEvent-type-event-form-type-event-form-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-typeEvent-type-event-form-type-event-form-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/typeEvent/type-event-form/type-event-form.module */
          "./src/app/pages/typeEvent/type-event-form/type-event-form.module.ts")).then(function (m) {
            return m.TypeEventFormPageModule;
          });
        }
      }, {
        path: 'admin/game/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-admin-game-admin-game-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-game-admin-game-admin-game-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/admin-game/admin-game.module */
          "./src/app/pages/game/admin-game/admin-game.module.ts")).then(function (m) {
            return m.AdminGamePageModule;
          });
        }
      }, {
        path: 'list-redirect',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-util-list-redirect-list-redirect-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-util-list-redirect-list-redirect-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/util/list-redirect/list-redirect.module */
          "./src/app/pages/util/list-redirect/list-redirect.module.ts")).then(function (m) {
            return m.ListRedirectPageModule;
          });
        }
      }, {
        path: 'player/profile/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-player-profile-profile-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("default~pages-player-list-list-module~pages-player-player-form-player-form-module~pages-player-profi~8fa66a7a"), __webpack_require__.e("common"), __webpack_require__.e("pages-player-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/player/profile/profile.module */
          "./src/app/pages/player/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'my-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-my-profile-my-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-user-my-profile-my-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user/my-profile/my-profile.module */
          "./src/app/pages/user/my-profile/my-profile.module.ts")).then(function (m) {
            return m.MyProfilePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'redes-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-redes-redes-form-redes-form-module */
          "pages-redes-redes-form-redes-form-module").then(__webpack_require__.bind(null,
          /*! ./pages/redes/redes-form/redes-form.module */
          "./src/app/pages/redes/redes-form/redes-form.module.ts")).then(function (m) {
            return m.RedesFormPageModule;
          });
        }
      }, {
        path: 'player-search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-player-player-search-player-search-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-player-player-search-player-search-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/player/player-search/player-search.module */
          "./src/app/pages/player/player-search/player-search.module.ts")).then(function (m) {
            return m.PlayerSearchPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-notification-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-notification-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/notification/list/list.module */
          "./src/app/pages/notification/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'form-publication',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-publications-form-publication-form-publication-module */
          "pages-publications-form-publication-form-publication-module").then(__webpack_require__.bind(null,
          /*! ./pages/publications/form-publication/form-publication.module */
          "./src/app/pages/publications/form-publication/form-publication.module.ts")).then(function (m) {
            return m.FormPublicationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'publication/:id/:segment/:not',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-publications-publication-publication-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-publications-publication-publication-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/publications/publication/publication.module */
          "./src/app/pages/publications/publication/publication.module.ts")).then(function (m) {
            return m.PublicationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'publication/:id/:segment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-publications-publication-publication-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-publications-publication-publication-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/publications/publication/publication.module */
          "./src/app/pages/publications/publication/publication.module.ts")).then(function (m) {
            return m.PublicationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'publication/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-publications-publication-publication-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-publications-publication-publication-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/publications/publication/publication.module */
          "./src/app/pages/publications/publication/publication.module.ts")).then(function (m) {
            return m.PublicationPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'errors',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-error-list-list-module */
          "pages-error-list-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/error/list/list.module */
          "./src/app/pages/error/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'team-request/:team_id/:player_id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-passRequest-team-request-team-request-module */
          "pages-passRequest-team-request-team-request-module").then(__webpack_require__.bind(null,
          /*! ./pages/passRequest/team-request/team-request.module */
          "./src/app/pages/passRequest/team-request/team-request.module.ts")).then(function (m) {
            return m.TeamRequestPageModule;
          });
        }
      }, {
        path: 'team-request-to-player/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-passRequest-team-request-to-player-team-request-to-player-module */
          "pages-passRequest-team-request-to-player-team-request-to-player-module").then(__webpack_require__.bind(null,
          /*! ./pages/passRequest/team-request-to-player/team-request-to-player.module */
          "./src/app/pages/passRequest/team-request-to-player/team-request-to-player.module.ts")).then(function (m) {
            return m.TeamRequestToPlayerPageModule;
          });
        }
      }, {
        path: 'password-reset/:token/:email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-password-reset-password-reset-module */
          "pages-password-reset-password-reset-module").then(__webpack_require__.bind(null,
          /*! ./pages/password-reset/password-reset.module */
          "./src/app/pages/password-reset/password-reset.module.ts")).then(function (m) {
            return m.PasswordResetPageModule;
          });
        }
      }, {
        path: 'password-reset-email',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-password-reset-email-password-reset-email-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-password-reset-email-password-reset-email-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/password-reset-email/password-reset-email.module */
          "./src/app/pages/password-reset-email/password-reset-email.module.ts")).then(function (m) {
            return m.PasswordResetEmailPageModule;
          });
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-contact-contact-module */
          "pages-contact-contact-module").then(__webpack_require__.bind(null,
          /*! ./pages/contact/contact.module */
          "./src/app/pages/contact/contact.module.ts")).then(function (m) {
            return m.ContactPageModule;
          });
        }
      }, {
        path: 'payment-team',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-team-payment-team-module */
          [__webpack_require__.e("default~pages-payment-team-payment-team-module~teams-teams-module"), __webpack_require__.e("pages-payment-team-payment-team-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment-team/payment-team.module */
          "./src/app/pages/payment-team/payment-team.module.ts")).then(function (m) {
            return m.PaymentTeamPageModule;
          });
        }
      }, {
        path: 'payment/success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-success-success-module */
          "pages-payment-success-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment/success/success.module */
          "./src/app/pages/payment/success/success.module.ts")).then(function (m) {
            return m.SuccessPageModule;
          });
        }
      }, {
        path: 'payment/pending',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-pending-pending-module */
          "pages-payment-pending-pending-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment/pending/pending.module */
          "./src/app/pages/payment/pending/pending.module.ts")).then(function (m) {
            return m.PendingPageModule;
          });
        }
      }, {
        path: 'payment/failure',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-failure-failure-module */
          "pages-payment-failure-failure-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment/failure/failure.module */
          "./src/app/pages/payment/failure/failure.module.ts")).then(function (m) {
            return m.FailurePageModule;
          });
        }
      }, {
        path: 'payment/:payment_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-payment-payment-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-payment-payment-payment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment/payment/payment.module */
          "./src/app/pages/payment/payment/payment.module.ts")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'alert-create-team',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-alert-create-team-alert-create-team-module */
          "pages-payment-alert-create-team-alert-create-team-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment/alert-create-team/alert-create-team.module */
          "./src/app/pages/payment/alert-create-team/alert-create-team.module.ts")).then(function (m) {
            return m.AlertCreateTeamPageModule;
          });
        }
      }, {
        path: 'payment/create/:team_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-create-create-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-payment-create-create-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment/create/create.module */
          "./src/app/pages/payment/create/create.module.ts")).then(function (m) {
            return m.CreatePageModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("pages-payment-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment/list/list.module */
          "./src/app/pages/payment/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'show',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-images-show-show-module */
          "pages-images-show-show-module").then(__webpack_require__.bind(null,
          /*! ./pages/images/show/show.module */
          "./src/app/pages/images/show/show.module.ts")).then(function (m) {
            return m.ShowPageModule;
          });
        }
      }, {
        path: 'modal-create-game',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-game-modal-create-game-modal-create-game-module */
          "pages-game-modal-create-game-modal-create-game-module").then(__webpack_require__.bind(null,
          /*! ./pages/game/modal-create-game/modal-create-game.module */
          "./src/app/pages/game/modal-create-game/modal-create-game.module.ts")).then(function (m) {
            return m.ModalCreateGamePageModule;
          });
        }
      }, {
        path: 'create-game-admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-create-game-admin-create-game-admin-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035"), __webpack_require__.e("default~games-games-module~pages-game-create-game-admin-create-game-admin-module"), __webpack_require__.e("pages-game-create-game-admin-create-game-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/create-game-admin/create-game-admin.module */
          "./src/app/pages/game/create-game-admin/create-game-admin.module.ts")).then(function (m) {
            return m.CreateGameAdminPageModule;
          });
        }
      }, {
        path: 'new-challenge/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-new-challenge-new-challenge-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-game-new-challenge-new-challenge-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/new-challenge/new-challenge.module */
          "./src/app/pages/game/new-challenge/new-challenge.module.ts")).then(function (m) {
            return m.NewChallengePageModule;
          });
        }
      }, {
        path: 'send-admins',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-email-send-admins-send-admins-module */
          "pages-email-send-admins-send-admins-module").then(__webpack_require__.bind(null,
          /*! ./pages/email/send-admins/send-admins.module */
          "./src/app/pages/email/send-admins/send-admins.module.ts")).then(function (m) {
            return m.SendAdminsPageModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-chat-chat-module */
          "pages-chat-chat-module").then(__webpack_require__.bind(null,
          /*! ./pages/chat/chat.module */
          "./src/app/pages/chat/chat.module.ts")).then(function (m) {
            return m.ChatPageModule;
          });
        }
      }, {
        path: 'add-result',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-add-result-add-result-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-game-add-result-add-result-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/add-result/add-result.module */
          "./src/app/pages/game/add-result/add-result.module.ts")).then(function (m) {
            return m.AddResultPageModule;
          });
        }
      }, {
        path: 'banner/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-game-banner-banner-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-game-banner-banner-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/game/banner/banner.module */
          "./src/app/pages/game/banner/banner.module.ts")).then(function (m) {
            return m.BannerPageModule;
          });
        }
      }, {
        path: 'modal-filter',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-team-modal-filter-modal-filter-module */
          "pages-team-modal-filter-modal-filter-module").then(__webpack_require__.bind(null,
          /*! ./pages/team/modal-filter/modal-filter.module */
          "./src/app/pages/team/modal-filter/modal-filter.module.ts")).then(function (m) {
            return m.ModalFilterPageModule;
          });
        }
      }, {
        path: 'team/:id/games',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-team-team-games-team-games-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-team-team-games-team-games-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/team/team-games/team-games.module */
          "./src/app/pages/team/team-games/team-games.module.ts")).then(function (m) {
            return m.TeamGamesPageModule;
          });
        }
      }, {
        path: 'team/:id/games/:status',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-team-team-games-team-games-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-team-team-games-team-games-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/team/team-games/team-games.module */
          "./src/app/pages/team/team-games/team-games.module.ts")).then(function (m) {
            return m.TeamGamesPageModule;
          });
        }
      }, {
        path: 'web',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-web-web-module */
          "pages-web-web-module").then(__webpack_require__.bind(null,
          /*! ./pages/web/web.module */
          "./src/app/pages/web/web.module.ts")).then(function (m) {
            return m.WebPageModule;
          });
        }
      }, {
        path: 'privacy-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-privacy-policy-privacy-policy-module */
          "pages-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
          /*! ./pages/privacy-policy/privacy-policy.module */
          "./src/app/pages/privacy-policy/privacy-policy.module.ts")).then(function (m) {
            return m.PrivacyPolicyPageModule;
          });
        }
      }, {
        path: 'messaging',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-messaging-messaging-module */
          "pages-messaging-messaging-module").then(__webpack_require__.bind(null,
          /*! ./pages/messaging/messaging.module */
          "./src/app/pages/messaging/messaging.module.ts")).then(function (m) {
            return m.MessagingPageModule;
          });
        }
      }, {
        path: 'go-to',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-go-to-go-to-module */
          "pages-go-to-go-to-module").then(__webpack_require__.bind(null,
          /*! ./pages/go-to/go-to.module */
          "./src/app/pages/go-to/go-to.module.ts")).then(function (m) {
            return m.GoToPageModule;
          });
        }
      }, {
        path: 'balance-sheet/:team_id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-balance-sheet-balance-sheet-module */
          "pages-balance-sheet-balance-sheet-module").then(__webpack_require__.bind(null,
          /*! ./pages/balance-sheet/balance-sheet.module */
          "./src/app/pages/balance-sheet/balance-sheet.module.ts")).then(function (m) {
            return m.BalanceSheetPageModule;
          });
        }
      }, {
        path: 'balance-sheet/:team_id/:filter',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-balance-sheet-balance-sheet-module */
          "pages-balance-sheet-balance-sheet-module").then(__webpack_require__.bind(null,
          /*! ./pages/balance-sheet/balance-sheet.module */
          "./src/app/pages/balance-sheet/balance-sheet.module.ts")).then(function (m) {
            return m.BalanceSheetPageModule;
          });
        }
      }, {
        path: 'balance-sheet/months/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-balance-sheet-months-months-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-balance-sheet-months-months-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/balance-sheet/months/months.module */
          "./src/app/pages/balance-sheet/months/months.module.ts")).then(function (m) {
            return m.MonthsPageModule;
          });
        }
      }, {
        path: 'balance-sheet/payments/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-balance-sheet-payments-balance-payments-balance-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~5aacf81f"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"), __webpack_require__.e("pages-balance-sheet-payments-balance-payments-balance-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/balance-sheet/payments-balance/payments-balance.module */
          "./src/app/pages/balance-sheet/payments-balance/payments-balance.module.ts")).then(function (m) {
            return m.PaymentsBalancePageModule;
          });
        }
      }, {
        path: 'expenses/:team_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-expenses-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("common"), __webpack_require__.e("pages-expenses-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/expenses/list/list.module */
          "./src/app/pages/expenses/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'form-expense',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-expenses-form-expense-form-expense-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("common"), __webpack_require__.e("pages-expenses-form-expense-form-expense-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/expenses/form-expense/form-expense.module */
          "./src/app/pages/expenses/form-expense/form-expense.module.ts")).then(function (m) {
            return m.FormExpensePageModule;
          });
        }
      }, {
        path: 'entrys/:team_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-entrys-list-list-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("common"), __webpack_require__.e("pages-entrys-list-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/entrys/list/list.module */
          "./src/app/pages/entrys/list/list.module.ts")).then(function (m) {
            return m.ListPageModule;
          });
        }
      }, {
        path: 'form-entry',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-entrys-form-entry-form-entry-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("common"), __webpack_require__.e("pages-entrys-form-entry-form-entry-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/entrys/form-entry/form-entry.module */
          "./src/app/pages/entrys/form-entry/form-entry.module.ts")).then(function (m) {
            return m.FormEntryPageModule;
          });
        }
      }, {
        path: 'accounting/:team_id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-accounting-home-home-module */
          "pages-accounting-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/accounting/home/home.module */
          "./src/app/pages/accounting/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'payments-team/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-team-payments-balance-payments-balance-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("pages-team-payments-balance-payments-balance-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/team/payments-balance/payments-balance.module */
          "./src/app/pages/team/payments-balance/payments-balance.module.ts")).then(function (m) {
            return m.PaymentsBalancePageModule;
          });
        }
      }, {
        path: 'events-player/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-events-events-player-events-player-module */
          "pages-events-events-player-events-player-module").then(__webpack_require__.bind(null,
          /*! ./pages/events/events-player/events-player.module */
          "./src/app/pages/events/events-player/events-player.module.ts")).then(function (m) {
            return m.EventsPlayerPageModule;
          });
        }
      }, {
        path: 'events-player/:id/:event',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-events-events-player-events-player-module */
          "pages-events-events-player-events-player-module").then(__webpack_require__.bind(null,
          /*! ./pages/events/events-player/events-player.module */
          "./src/app/pages/events/events-player/events-player.module.ts")).then(function (m) {
            return m.EventsPlayerPageModule;
          });
        }
      }, {
        path: 'list-fields',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-field-list-fields-list-fields-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~13c75b03"), __webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("default~games-games-module~pages-field-list-fields-list-fields-module~pages-game-create-game-admin-c~9b9fc035"), __webpack_require__.e("pages-field-list-fields-list-fields-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/field/list-fields/list-fields.module */
          "./src/app/pages/field/list-fields/list-fields.module.ts")).then(function (m) {
            return m.ListFieldsPageModule;
          });
        }
      }, {
        path: 'show',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-field-show-show-module */
          [__webpack_require__.e("default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~994e6cb1"), __webpack_require__.e("pages-field-show-show-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/field/show/show.module */
          "./src/app/pages/field/show/show.module.ts")).then(function (m) {
            return m.ShowPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
          useHash: true
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, authUser, swUpdate, dialogService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.authUser = authUser;
          this.swUpdate = swUpdate;
          this.dialogService = dialogService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this.platform.ready().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) {
                              switch (_context12.prev = _context12.next) {
                                case 0:
                                  console.log('init APP');
                                  _context12.next = 3;
                                  return this.authUser.getUser();

                                case 3:
                                  this.statusBar.styleDefault();
                                  this.splashScreen.hide();

                                case 5:
                                case "end":
                                  return _context12.stop();
                              }
                            }
                          }, _callee12, this);
                        }));
                      });

                      if (this.swUpdate.available) {
                        this.swUpdate.available.subscribe(function () {
                          //if (confirm('Hay una nueva version disponible, desea cargarla ?'))
                          _this9.dialogService.showToast('Actualizando a nueva versión...', '', 'info');

                          window.location.reload();
                        });
                      }

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"]
        }, {
          type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["SwUpdate"]
        }, {
          type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_pages_team_form_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../app/pages/team/form/form.module */
      "./src/app/pages/team/form/form.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./interceptors/token.interceptor */
      "./src/app/interceptors/token.interceptor.ts");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _models_my_error_handler__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./models/my-error-handler */
      "./src/app/models/my-error-handler.ts");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js"); //import { HttpClientModule } from '@angular/common/http';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_pages_team_form_form_module__WEBPACK_IMPORTED_MODULE_10__["FormPageModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_14__["NgxIonicImageViewerModule"], //Storage,
        //Storage
        _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["firebaseConfig"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('combined-sw.js?vs=1', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_13__["PhotoViewer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_20__["SocialSharing"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__["Geolocation"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
          useClass: _models_my_error_handler__WEBPACK_IMPORTED_MODULE_19__["MyErrorHandler"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authUser, router) {
          _classCallCheck(this, AuthGuard);

          this.authUser = authUser;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this10 = this;

            return this.authUser.userOb.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              console.log('guard usaer', user);

              if (!user) {
                _this10.router.navigateByUrl('/login');

                return false;
              } else {
                return true;
              }
            })); //return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/interceptors/token.interceptor.ts":
    /*!***************************************************!*\
      !*** ./src/app/interceptors/token.interceptor.ts ***!
      \***************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(router, toastController, loadingController) {
          _classCallCheck(this, TokenInterceptor);

          this.router = router;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.isLoading = false;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this11 = this;

            var token = localStorage.getItem('token'); //console.log(token);

            if (request.url.includes('api/login')) {
              return next.handle(request);
            }

            if (token) {
              request = request.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('api_token', token)
              }); //request.params.append('token_api',token);
            }

            if (!request.headers.has('Content-Type')) {
              request = request.clone({
                setHeaders: {
                  'content-type': 'application/json'
                }
              });
            }

            request = request.clone({
              headers: request.headers.set('Accept', 'application/json')
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {//console.log('event--->>>', event);
              }

              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              if (error.status === 401) {
                if (error.error.success === false) {//this.presentToast('Login failed');
                } else {
                  _this11.router.navigate(['login']);
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));

            if (!request.headers.has('Content-Type')) {
              request = request.clone({
                setHeaders: {
                  'content-type': 'application/json'
                }
              });
            }

            request = request.clone({
              headers: request.headers.set('Accept', 'application/json')
            }); //this.showLoader();

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                if (event.url.includes('api')) {}
              } //this.hideLoader();


              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              console.error(error); //this.hideLoader();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
          }
        }, {
          key: "showLoader",
          value: function showLoader() {
            console.log('show loading');
            this.loaderToShow = this.loadingController.create({
              message: 'Cargando..'
            }).then(function (res) {
              res.present();
              res.onDidDismiss().then(function (dis) {
                console.log('Loading dismissed!');
              });
            }); //this.hideLoader();
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            console.log('hide loading');
            this.loadingController.dismiss();
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
      /***/
    },

    /***/
    "./src/app/models/modal-form.ts":
    /*!**************************************!*\
      !*** ./src/app/models/modal-form.ts ***!
      \**************************************/

    /*! exports provided: ModalForm */

    /***/
    function srcAppModelsModalFormTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalForm", function () {
        return ModalForm;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_transfer_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/transfer-data.service */
      "./src/app/services/transfer-data.service.ts");

      var ModalForm = /*#__PURE__*/function () {
        function ModalForm(location, modalController) {
          var _this12 = this;

          _classCallCheck(this, ModalForm);

          this.closed = false;
          this.runPopState = false;
          this.t = new _services_transfer_data_service__WEBPACK_IMPORTED_MODULE_4__["TransferDataService"]();
          console.log('Constructor modal in ', this.constructor.name);
          this.t.setData('run', false);
          location.onPopState(function (e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this13 = this;

              var lastModal;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      //alert(window.location);
                      if (this['chatService']) {
                        this['chatService'].hide();
                      }

                      if (this.t.getData('run')) {
                        _context14.next = 11;
                        break;
                      }

                      console.log('onPopState in class', this.constructor.name);
                      console.log('isClosed', this.closed);

                      if (this.closed) {
                        _context14.next = 9;
                        break;
                      }

                      _context14.next = 7;
                      return modalController.getTop();

                    case 7:
                      lastModal = _context14.sent;

                      if (lastModal) {
                        lastModal.dismiss();
                        console.log('dismiss of postate in ', this.constructor.name);
                      }

                    case 9:
                      this.t.setData('run', true);
                      setTimeout(function () {
                        _this13.t.setData('run', false);
                      }, 100);

                    case 11:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          });
        }
        /*
        @HostListener('window:popstate', ['$event'])
        
          async dismissModal(e: any) {
            
            /*if(e){
              e.preventDefault();
              e.stopPropagation();
            }
            console.log('dismissModal  ',this.constructor.name)
        
        
            //otro text
        
            let lastModal = await  this['viewCtrl'].getTop();
        
            if(window.history['des'])
                await lastModal.dismiss();
          
            window.history['des'] = true;
            //console.log('id',lastModal.id);
        
            //if(window.history.state.desc == this.constructor.name)
              //this['close']();
        
        
             //this['modalController'].dismiss(undefined, undefined, lastModal.id);
        
            //this.utilDialog.showToast('back');
            */
        //  }


        _createClass(ModalForm, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('ngOnInit');
            this['initObject']();
            console.log('clas form', this.constructor.name);
            var modalState = {
              modal: true,
              desc: this.constructor.name
            };
            history.pushState(modalState, null); //window['history'['des'] = true;

            /*if(this['chatService']){
              this['chatService'].show();
            }
            */
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      console.log('DESTROY ', this.constructor.name);
                      this.closed = true;

                      if (this['chatService']) {
                        this['chatService'].hide();
                      } //if (window['history'].state.modal && window['history'].state.desc == this.constructor.name ) {
                      //  await history.back();
                      //window.history['des'] = false;
                      //}


                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return ModalForm;
      }();

      ModalForm.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      ModalForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ModalForm);
      /***/
    },

    /***/
    "./src/app/models/my-error-handler.ts":
    /*!********************************************!*\
      !*** ./src/app/models/my-error-handler.ts ***!
      \********************************************/

    /*! exports provided: MyErrorHandler */

    /***/
    function srcAppModelsMyErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorHandler", function () {
        return MyErrorHandler;
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


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var MyErrorHandler = /*#__PURE__*/function () {
        function MyErrorHandler(requestService, utilDialog, toastCtr, router) {
          _classCallCheck(this, MyErrorHandler);

          this.requestService = requestService;
          this.utilDialog = utilDialog;
          this.toastCtr = toastCtr;
          this.router = router;
          this.modelError = new _api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Error', requestService);
        }

        _createClass(MyErrorHandler, [{
          key: "handleError",
          value: function handleError(error) {
            console.error('error locas', error);
            var caller_line = error.stack.split("\n");

            if (caller_line[2]) {
              caller_line = caller_line[2];
            } else {
              caller_line = '';
            }

            var text = error.message;

            if (this.lastError != text) {
              console.log(error.status);
              this.lastError = text;
              var e = {
                text: text,
                url: window.location.href,
                line: caller_line
              };
              this.modelError.api_create(e).subscribe(function (request) {//console.log(request);
              }); //this.showMsj();
            } //console.warn(error);
            //console.error('error lucas',error);
            //throw new Error("Method not implemented.");

          }
        }, {
          key: "showMsj",
          value: function showMsj() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var toast;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.toastCtr.create({
                        header: 'Error',
                        color: 'danger',
                        message: "Error en tiempo de ejecución, pronto el administrador estara resolviendo este inconvente. Por favor intente nuevamente mas tarde",
                        //duration:9999999,
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked'); //this.router.navigateByUrl('/')

                            window.location.assign('/');
                          }
                        }]
                      });

                    case 2:
                      toast = _context16.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return MyErrorHandler;
      }();

      MyErrorHandler.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      MyErrorHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MyErrorHandler);
      /***/
    },

    /***/
    "./src/app/pages/crop/crop.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/crop/crop.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCropCropPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nyb3AvY3JvcC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/crop/crop.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/crop/crop.page.ts ***!
      \*****************************************/

    /*! exports provided: CropPage */

    /***/
    function srcAppPagesCropCropPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPage", function () {
        return CropPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/transfer-data.service */
      "./src/app/services/transfer-data.service.ts");

      var CropPage = /*#__PURE__*/function () {
        function CropPage(navParams, viewCtrl, transferDataService) {
          _classCallCheck(this, CropPage);

          this.viewCtrl = viewCtrl;
          this.transferDataService = transferDataService;
          this.imageChangedEvent = 'assets/images/pngwing.png';
          this.croppedImage = '';
          this.imageBase64 = '';
          this.img = '';
          this.ar = "1 / 1";
          console.log('page crop');
          this.imageBase64 = navParams.get('base64');
          this.img = navParams.get('img');
          this.ar = navParams.get('aspectRatio');
          console.log(this);
        }

        _createClass(CropPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fileChangeEvent",
          value: function fileChangeEvent(event) {
            console.log(event);
            this.imageChangedEvent = event;
          }
        }, {
          key: "imageCropped",
          value: function imageCropped(event) {
            this.croppedImage = event.base64;
          }
        }, {
          key: "imageLoaded",
          value: function imageLoaded() {// show cropper

            var image = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          }
        }, {
          key: "cropperReady",
          value: function cropperReady() {// cropper ready
          }
        }, {
          key: "loadImageFailed",
          value: function loadImageFailed() {// show message
          }
        }, {
          key: "save",
          value: function save() {
            this.viewCtrl.dismiss({
              base64: this.croppedImage
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }]);

        return CropPage;
      }();

      CropPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_3__["TransferDataService"]
        }];
      };

      CropPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./crop.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crop/crop.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./crop.page.scss */
        "./src/app/pages/crop/crop.page.scss"))["default"]]
      })], CropPage);
      /***/
    },

    /***/
    "./src/app/pages/search/search.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/search/search.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/search/search.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/search/search.page.ts ***!
      \*********************************************/

    /*! exports provided: SearchPage */

    /***/
    function srcAppPagesSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SearchPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(SearchPage, _src_app_models_modal);

        var _super = _createSuper(SearchPage);

        function SearchPage(requestService, navParams, viewCtrl, location) {
          var _this14;

          _classCallCheck(this, SearchPage);

          var _a, _b, _c, _d, _e;

          _this14 = _super.call(this, location, viewCtrl);
          _this14.navParams = navParams;
          _this14.viewCtrl = viewCtrl;
          _this14.showCancelButton = false;
          _this14.list = [];
          _this14.listSelect = [];
          _this14.textSearch = '';
          _this14.showCancelButton = (_a = navParams.get('cancellable')) !== null && _a !== void 0 ? _a : false;
          _this14.model = navParams.get('model');
          _this14["function"] = navParams.get('function');
          _this14.multiple = (_b = navParams.get('multiple')) !== null && _b !== void 0 ? _b : false;
          _this14.minLenght = (_c = navParams.get('multiple')) !== null && _c !== void 0 ? _c : 2;
          _this14.listSelect = (_d = navParams.get('listSelect')) !== null && _d !== void 0 ? _d : [];
          _this14.textSearch = (_e = navParams.get('textSearch')) !== null && _e !== void 0 ? _e : 'Buscar..';
          _this14.modelService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"](_this14.model, requestService);
          return _this14;
        }

        _createClass(SearchPage, [{
          key: "initObject",
          value: function initObject() {//throw new Error("Method not implemented.");
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            var _this15 = this;

            var text = event.target.value;

            if (text.lenght <= this.minLenght) {
              return;
            }

            this.modelService.api_function(this["function"], {
              text: text
            }).subscribe(function (response) {
              console.log('response function', response);

              if (response['status'] == 'success') {
                _this15.list = response['data'];
              }
            });
            console.log('onInput', event.target.value);
          }
        }, {
          key: "onCancel",
          value: function onCancel(event) {
            console.log('onCancel');
            this.finalize();
          }
        }, {
          key: "select",
          value: function select(item) {
            if (this.multiple) {
              //this.addOrRemove(item);
              this.addItem(item);
            } else {
              this.viewCtrl.dismiss({
                item: item
              });
            }
          }
        }, {
          key: "finalize",
          value: function finalize() {
            this.viewCtrl.dismiss({
              items: this.listSelect
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "addItem",
          value: function addItem(item) {
            console.log(item);
            var inList = this.findList(item.id);
            if (!inList) this.listSelect.push(item);
            var index = this.list.findIndex(function (i) {
              return i['id'] === item.id;
            });
            if (index >= 0) this.list.splice(index, 1);
          }
        }, {
          key: "removeItem",
          value: function removeItem(item) {
            var index = this.findIndexList(item.id);
            if (index >= 0) this.listSelect.splice(index, 1);
            var inList = this.list.find(function (i) {
              return i['id'] === item.d;
            });
            if (!inList) this.list.push(item);
          }
        }, {
          key: "addOrRemove",
          value: function addOrRemove(item) {
            var inList = this.findList(item.id);

            if (!inList) {
              this.listSelect.push(item);
            } else {
              var index = this.findIndexList(item.id);
              if (index >= 0) this.listSelect.splice(index, 1);
            }
          }
        }, {
          key: "findList",
          value: function findList(id) {
            return this.listSelect.find(function (item) {
              return item['id'] === id;
            });
          }
        }, {
          key: "findIndexList",
          value: function findIndexList(id) {
            return this.listSelect.findIndex(function (item) {
              return item['id'] === id;
            });
          }
        }, {
          key: "inList",
          value: function inList(id) {
            return this.findList(id) ? true : false;
          }
        }, {
          key: "getColor",
          value: function getColor(id) {
            return this.inList(id) ? 'success' : '';
          }
        }]);

        return SearchPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_5__["ModalForm"]);

      SearchPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.page.scss */
        "./src/app/pages/search/search.page.scss"))["default"]]
      })], SearchPage);
      /***/
    },

    /***/
    "./src/app/pages/team/form/form-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/team/form/form-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: FormPageRoutingModule */

    /***/
    function srcAppPagesTeamFormFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormPageRoutingModule", function () {
        return FormPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./form.page */
      "./src/app/pages/team/form/form.page.ts");

      var routes = [{
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"]
      }];

      var FormPageRoutingModule = function FormPageRoutingModule() {
        _classCallCheck(this, FormPageRoutingModule);
      };

      FormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/team/form/form.module.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/team/form/form.module.ts ***!
      \************************************************/

    /*! exports provided: FormPageModule */

    /***/
    function srcAppPagesTeamFormFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormPageModule", function () {
        return FormPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-routing.module */
      "./src/app/pages/team/form/form-routing.module.ts");
      /* harmony import */


      var _form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./form.page */
      "./src/app/pages/team/form/form.page.ts");

      var FormPageModule = function FormPageModule() {
        _classCallCheck(this, FormPageModule);
      };

      FormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPageRoutingModule"]],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"]]
      })], FormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/team/form/form.page.scss":
    /*!************************************************!*\
      !*** ./src/app/pages/team/form/form.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTeamFormFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".admins {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9mb3JtL2Zvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVhbS9mb3JtL2Zvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluc3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/team/form/form.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/team/form/form.page.ts ***!
      \**********************************************/

    /*! exports provided: FormPage */

    /***/
    function srcAppPagesTeamFormFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormPage", function () {
        return FormPage;
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


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/modelImage */
      "./src/app/api/models/modelImage.ts");
      /* harmony import */


      var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../search/search.page */
      "./src/app/pages/search/search.page.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");

      var FormPage = /*#__PURE__*/function (_src_app_models_modal2) {
        _inherits(FormPage, _src_app_models_modal2);

        var _super2 = _createSuper(FormPage);

        function FormPage(request, dialogService, viewCtrl, navParams, modalController, authUser, location, chatService) {
          var _this16;

          _classCallCheck(this, FormPage);

          _this16 = _super2.call(this, location, viewCtrl);
          _this16.request = request;
          _this16.dialogService = dialogService;
          _this16.viewCtrl = viewCtrl;
          _this16.modalController = modalController;
          _this16.authUser = authUser;
          _this16.chatService = chatService; //this.serviceTeam.setModel('Team');

          _this16.serviceTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Team', request);
          _this16.photoService = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);

          _this16.photoService.setAspectRatioCrop('1 / 1');

          _this16.photoService.setElementImg('img_esc', 200);

          _this16.serviceImageCoverPage = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);

          _this16.serviceImageCoverPage.init('images/team/cover_page/', false);

          _this16.serviceImageCoverPage.setAspectRatioCrop('16 / 9');

          _this16.serviceImageCoverPage.setElementImg('img_cover');

          _this16.id = navParams.get('id');

          _this16.photoService.init('images/team/', true);

          return _this16;
        }

        _createClass(FormPage, [{
          key: "initObject",
          value: function initObject() {
            var _this17 = this;

            this.team = {
              name: '',
              shield_id: null,
              cover_page_id: null,
              admins: []
            };

            if (this.id) {
              this.serviceTeam.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this17.team = data['Team'];

                  _this17.photoService.setImage(_this17.team.shield);

                  _this17.serviceImageCoverPage.setImage(_this17.team.cover_page);
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (this.photoService.isLoadPthoto()) {
                        _context17.next = 4;
                        break;
                      }

                      _context17.next = 3;
                      return this.saveCoverPage();

                    case 3:
                      return _context17.abrupt("return");

                    case 4:
                      _context17.next = 6;
                      return this.dialogService.loadingProgres('Cargando escudo..');

                    case 6:
                      this.photoService.uploadImage().subscribe(function (data) {
                        if (data['status'] == 'success') {
                          var image = data['Image'];
                          _this18.team.shield_id = image.id;
                        }

                        _this18.dialogService.dimissLoaging();

                        _this18.saveCoverPage();

                        console.log('save image');
                      }, function (error) {
                        _this18.dialogService.dimissLoaging();

                        _this18.dialogService.showToast('Error al subir escudo', 'Error', 'danger');

                        _this18.saveCoverPage();
                      }, function () {
                        _this18.dialogService.dimissLoaging();
                      });

                    case 7:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "saveCoverPage",
          value: function saveCoverPage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (this.serviceImageCoverPage.isLoadPthoto()) {
                        _context18.next = 3;
                        break;
                      }

                      this.saveTeam();
                      return _context18.abrupt("return");

                    case 3:
                      _context18.next = 5;
                      return this.dialogService.loadingProgres('Cargando portada...');

                    case 5:
                      this.serviceImageCoverPage.uploadImage().subscribe(function (data) {
                        if (data['status'] == 'success') {
                          var image = data['Image'];
                          _this19.team.cover_page_id = image.id;
                        }

                        _this19.dialogService.dimissLoaging();

                        _this19.saveTeam();
                      }, function (error) {
                        _this19.dialogService.dimissLoaging();

                        _this19.dialogService.showToast('Error al subir Portada', 'Error', 'danger');

                        _this19.saveTeam();
                      });

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "saveTeam",
          value: function saveTeam() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this20 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.dialogService.loadingProgres('Cargando...');

                    case 2:
                      if (this.team.id) {
                        this.serviceTeam.api_update(this.team).subscribe(function (data) {
                          var _a;

                          if (data['status'] == 'success') {
                            _this20.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                            var team = data['Team'];

                            _this20.dismiss(team);
                          }

                          _this20.dialogService.dimissLoaging();
                        }, function (error) {
                          _this20.dialogService.dimissLoaging();
                        }, function () {
                          _this20.dialogService.dimissLoaging();
                        });
                      } else {
                        this.serviceTeam.api_create(this.team).subscribe(function (data) {
                          var _a;

                          if (data['status'] == 'success') {
                            _this20.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                            _this20.dismiss(data['Team']);
                          }

                          _this20.dialogService.dimissLoaging();
                        }, function (error) {
                          _this20.dialogService.dimissLoaging();
                        }, function () {
                          _this20.dialogService.dimissLoaging();
                        });
                      }

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss(team) {
            this.viewCtrl.dismiss({
              team: team
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "addAdmins",
          value: function addAdmins(e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this21 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      e.preventDefault();
                      console.log('Add admins');
                      _context20.next = 4;
                      return this.modalController.create({
                        component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"],
                        componentProps: {
                          cancellable: false,
                          model: 'User',
                          "function": 'searchUser',
                          multiple: true
                        }
                      });

                    case 4:
                      modal = _context20.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data.items) {
                          var list = data.data['items'];
                          console.log('users_select', list);
                          _this21.team.admins = list;
                        }
                      });
                      _context20.next = 8;
                      return modal.present();

                    case 8:
                      return _context20.abrupt("return", _context20.sent);

                    case 9:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return FormPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_9__["ModalForm"]);

      FormPage.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]
        }];
      };

      FormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/form/form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form.page.scss */
        "./src/app/pages/team/form/form.page.scss"))["default"]]
      })], FormPage);
      /***/
    },

    /***/
    "./src/app/services/auth-user.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/auth-user.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthUserService */

    /***/
    function srcAppServicesAuthUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthUserService", function () {
        return AuthUserService;
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


      var _api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); //import { Storage } from '@ionic/storage';


      var AuthUserService = /*#__PURE__*/function () {
        function AuthUserService(http, router, navCtrl, request, //AuthGuards
        //private storage : Storage,
        plt) {
          _classCallCheck(this, AuthUserService);

          this.http = http;
          this.router = router;
          this.navCtrl = navCtrl;
          this.request = request;
          this.plt = plt;
          this.user = null;
          this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
          this.errorsLogin = '';
          this.userModel = new _api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('User', request);
          this.loadStoresUser();
          this.user = this.userData.getValue();
        }

        _createClass(AuthUserService, [{
          key: "loadStoresUser",
          value: function loadStoresUser() {
            var _this22 = this;

            var platformObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.plt.ready());
            this.userOb = platformObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(_this22.getUser());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (user) {
              //console.log('user form storage',user);
              if (user) {
                _this22.userData.next(user);

                return true;
              } else {
                return null;
              }
            }));
          }
        }, {
          key: "login",
          value: function login(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this23 = this;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.errorsLogin = '';
                      return _context22.abrupt("return", this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server_url, "/login"), data).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                          return regeneratorRuntime.wrap(function _callee21$(_context21) {
                            while (1) {
                              switch (_context21.prev = _context21.next) {
                                case 0:
                                  console.log(data);

                                  if (!(data['status'] && data['status'] == 'success')) {
                                    _context21.next = 9;
                                    break;
                                  }

                                  _context21.next = 4;
                                  return this.saveData(data);

                                case 4:
                                  this.userData.next(data); //await this.getUser();

                                  _context21.next = 7;
                                  return this.redirect();

                                case 7:
                                  _context21.next = 10;
                                  break;

                                case 9:
                                  this.errorsLogin = 'Error de credenciales, intente nuevamente';

                                case 10:
                                case "end":
                                  return _context21.stop();
                              }
                            }
                          }, _callee21, this);
                        }));
                      }, function (error) {
                        _this23.errorsLogin =
                        /*error.message;//*/
                        'Error de credenciales, intente nuevamente';
                      }));

                    case 2:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "loginSocial",
          value: function loginSocial(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this24 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      this.errorsLogin = '';
                      return _context24.abrupt("return", this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server_url, "/loginSocial"), data).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                          return regeneratorRuntime.wrap(function _callee23$(_context23) {
                            while (1) {
                              switch (_context23.prev = _context23.next) {
                                case 0:
                                  console.log(data);

                                  if (!(data['status'] && data['status'] == 'success')) {
                                    _context23.next = 10;
                                    break;
                                  }

                                  _context23.next = 4;
                                  return this.saveData(data);

                                case 4:
                                  this.userData.next(data);
                                  _context23.next = 7;
                                  return this.getUser();

                                case 7:
                                  this.redirect();
                                  _context23.next = 11;
                                  break;

                                case 10:
                                  this.errorsLogin = 'Error de credenciales, intente nuevamente';

                                case 11:
                                case "end":
                                  return _context23.stop();
                              }
                            }
                          }, _callee23, this);
                        }));
                      }, function (error) {
                        _this24.errorsLogin = error.message; // 'Error de credenciales, intente nuevamente';
                      }));

                    case 2:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "sendEmailResetPassword",
          value: function sendEmailResetPassword(email) {
            var data = {
              email: email
            };
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server_url, "/password/email"), data);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(data) {
            //var data = {email : email};
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].server_url, "/password/reset"), data);
          }
        }, {
          key: "setUser",
          value: function setUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      this.user = user;
                      _context25.next = 3;
                      return this.saveUser();

                    case 3:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "saveUser",
          value: function saveUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return localStorage.setItem('User', JSON.stringify(this.user));

                    case 2:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "saveData",
          value: function saveData(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return localStorage.setItem('isAuthenticated', 'true');

                    case 2:
                      _context27.next = 4;
                      return localStorage.setItem('User', JSON.stringify(data['User']));

                    case 4:
                      _context27.next = 6;
                      return localStorage.setItem('token', data['api_token']);

                    case 6:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            }));
          }
        }, {
          key: "removeData",
          value: function removeData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return localStorage.setItem('isAuthenticated', 'true');

                    case 2:
                      _context28.next = 4;
                      return localStorage.removeItem('User');

                    case 4:
                      _context28.next = 6;
                      return localStorage.removeItem('token');

                    case 6:
                      this.user = null;

                    case 7:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return localStorage.getItem('isAuthenticated') == 'true';
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            localStorage.setItem('User', user);
            return this.getUser();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return JSON.parse(localStorage.getItem('User'));

                    case 2:
                      _context29.t1 = _a = _context29.sent;
                      _context29.t0 = _context29.t1 !== null;

                      if (!_context29.t0) {
                        _context29.next = 6;
                        break;
                      }

                      _context29.t0 = _a !== void 0;

                    case 6:
                      if (!_context29.t0) {
                        _context29.next = 10;
                        break;
                      }

                      _context29.t2 = _a;
                      _context29.next = 11;
                      break;

                    case 10:
                      _context29.t2 = null;

                    case 11:
                      return _context29.abrupt("return", this.user = _context29.t2);

                    case 12:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "redirect",
          value: function redirect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.getUser();

                    case 2:
                      if (this.user) {
                        _context30.next = 4;
                        break;
                      }

                      return _context30.abrupt("return");

                    case 4:
                      if (this.user['role'] == 'admin') {
                        this.router.navigate(['admin_home']);
                      } else if (this.user['role'] == 'user') {
                        this.router.navigate(['/']);
                      }

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.removeData();

                    case 2:
                      //this.router.navigate(['login']);
                      this.router.navigateByUrl('/login', {
                        replaceUrl: true
                      });
                      this.userData.next(null);

                    case 4:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            return this.user && this.user.role == 'admin';
          }
        }, {
          key: "updateUserApi",
          value: function updateUserApi() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this25 = this;

              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      if (!this.user) {
                        _context33.next = 3;
                        break;
                      }

                      _context33.next = 3;
                      return this.userModel.api_functionModel(this.user.id, 'dataGlobal').subscribe(function (response) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
                          return regeneratorRuntime.wrap(function _callee32$(_context32) {
                            while (1) {
                              switch (_context32.prev = _context32.next) {
                                case 0:
                                  if (!(response['status'] == 'success')) {
                                    _context32.next = 4;
                                    break;
                                  }

                                  this.user = response['data'];
                                  _context32.next = 4;
                                  return this.saveUser();

                                case 4:
                                case "end":
                                  return _context32.stop();
                              }
                            }
                          }, _callee32, this);
                        }));
                      }, function (error) {
                        console.log(error);
                      });

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "setTokenMessaging",
          value: function setTokenMessaging(token) {
            if (this.user) this.user.token_messaging = token;
            this.userModel.api_function('updateTokenMessaging', {
              token: token
            }).subscribe(function (response) {
              console.log('updateTokenMessaging', response);
            });
          }
        }, {
          key: "isAdminOfTeam",
          value: function isAdminOfTeam(team_id) {
            if (this.user.teams) {
              var index = this.user.teams.map(function (team) {
                return team.id;
              }).indexOf(parseInt(team_id));
              return index >= 0;
            }

            return false;
          }
        }, {
          key: "isAdminGame",
          value: function isAdminGame(game) {
            return game ? this.isAdminOfTeam(game.l_team) || this.isAdminOfTeam(game.v_team) : false;
          }
        }, {
          key: "isAdminTeam",
          value: function isAdminTeam() {
            return this.user.teams.length > 0;
          }
        }]);

        return AuthUserService;
      }();

      AuthUserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      AuthUserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthUserService);
      /***/
    },

    /***/
    "./src/app/services/chat.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/chat.service.ts ***!
      \******************************************/

    /*! exports provided: ChatService */

    /***/
    function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ChatService = /*#__PURE__*/function () {
        function ChatService() {
          _classCallCheck(this, ChatService);

          this.isVisible = false;
          this.isInit = false;
          console.log('Chat Service Ok');
        }

        _createClass(ChatService, [{
          key: "init",
          value: function init() {
            var _this26 = this;

            var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var script = document.createElement("script");
            script.type = "text/javascript"; //    script.src = "https://connect.facebook.net/es_LA/sdk.js";
            //script.src = "https://connect.facebook.net/en_US/sdk/debug.js";

            script.src = "https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js";

            script.onload = function () {
              if (window['FB']) {
                _this26.FB = window['FB'];
                console.log('FB init');

                _this26.FB.init({
                  appId: '140247018227426',
                  status: true,
                  cookie: true,
                  xfbml: true,
                  autoLogAppEvents: true,
                  version: 'v2.4'
                }); //this.FB.CustomerChat.showDialog();


                _this26.FB.Event.subscribe('customerchat.load', function () {
                  if (!show) _this26.hide();
                  _this26.isInit = true;
                });

                _this26.isVisible = show;
              } else {
                console.error('Falta plugin FB');
              }
            };

            document.body.appendChild(script);
          }
        }, {
          key: "show",
          value: function show() {
            this.checkInit();
            console.log('FB show');
            var content = document.getElementById('fb-root');

            if (content) {
              this.isVisible = true;
              content.style.display = "block";
            } else {
              console.error('Not Found element #fb-root'); //this.FB.XFBML.parse();
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            console.log('FB hide');
            var content = document.getElementById('fb-root');

            if (content) {
              this.isVisible = false;
              content.style.display = "none";
            } else {
              console.error('Not Found element #fb-root');
            }
          }
        }, {
          key: "checkInit",
          value: function checkInit() {
            if (!this.FB) {
              this.init(true);
            }
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isVisible) {
              this.hide();
            } else {
              this.show();
            }
          }
        }]);

        return ChatService;
      }();

      ChatService.ctorParameters = function () {
        return [];
      };

      ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ChatService);
      /***/
    },

    /***/
    "./src/app/services/network.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/network.service.ts ***!
      \*********************************************/

    /*! exports provided: NetworkService */

    /***/
    function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
        return NetworkService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      76;
      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Network;

      var NetworkService = /*#__PURE__*/function () {
        function NetworkService() {
          _classCallCheck(this, NetworkService);

          this.appIsOnline = true;
          this.init();
        }

        _createClass(NetworkService, [{
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              var _this27 = this;

              var status;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return Network.getStatus();

                    case 2:
                      status = _context34.sent;
                      this.appIsOnline = status.connected;
                      Network.addListener('networkStatusChange', function (status) {
                        _this27.appIsOnline = status.connected;
                      });

                    case 5:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }]);

        return NetworkService;
      }();

      NetworkService.ctorParameters = function () {
        return [];
      };

      NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NetworkService);
      /***/
    },

    /***/
    "./src/app/services/transfer-data.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/transfer-data.service.ts ***!
      \***************************************************/

    /*! exports provided: TransferDataService */

    /***/
    function srcAppServicesTransferDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferDataService", function () {
        return TransferDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TransferDataService = /*#__PURE__*/function () {
        function TransferDataService() {
          _classCallCheck(this, TransferDataService);

          this.data = {};
          this.callbaks = {};
        }

        _createClass(TransferDataService, [{
          key: "setData",
          value: function setData(key, value) {
            this.data[key] = value;
          }
        }, {
          key: "getData",
          value: function getData(key) {
            if (this.data.hasOwnProperty(key)) return this.data[key];
            return null;
          }
        }, {
          key: "clear",
          value: function clear() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.data.hasOwnProperty(key)) {
              delete this.data[key];
              return;
            }

            this.data = {};
          }
          /**
           * Añade la funcion que se ejecutara al ejecutar setDataPage
           * @param page Key de la pagina que deebra obtener los dato
           * @param callbak funcion que recibe un parametro
           */

        }, {
          key: "onSettDataPage",
          value: function onSettDataPage(page, callbak) {
            this.callbaks[page] = callbak;
          }
          /**
           * Ejecuta la funcion que recibe el parametro ingresado en esta funcion
           * @param page pagina actual
           * @param parms parametros
           */

        }, {
          key: "setDataPage",
          value: function setDataPage(page, parms) {
            if (this.callbaks.hasOwnProperty(page)) this.callbaks[page](parms);
          }
        }]);

        return TransferDataService;
      }();

      TransferDataService.ctorParameters = function () {
        return [];
      };

      TransferDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TransferDataService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, firebaseConfig */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        nameApp: 'Fútbol Alem',
        server_url_base: 'http://192.168.1.15/f8a/public',
        server_url: 'http://192.168.1.15/f8a/public/api',
        mp_public_key: 'TEST-ef89b65e-1d50-46dd-ab7d-c6c0a5554052',
        map_key: "AIzaSyDBj3Vhn0r1VxVm2vHSxTBSPdORpr66ubk" //server_url : 'http://200.117.33.7:81/f8a/public/api'
        //server_url : 'https://baroque-vin-00808.herokuapp.com/api'
        //server_url : 'http://api.futbol8alem.com/api'

      };
      var firebaseConfig = {
        apiKey: "AIzaSyBq60nK7Gidna-GTQZDx7tptj7uAR5rl6Y",
        authDomain: "fu8a-10a3f.firebaseapp.com",
        projectId: "fu8a-10a3f",
        storageBucket: "fu8a-10a3f.appspot.com",
        messagingSenderId: "381582243260",
        appId: "1:381582243260:web:e983eee38074b69b80e7b9",
        measurementId: "G-V9V61QWYM1"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/lucas/Apps/f8a/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map