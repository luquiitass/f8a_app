(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-events-player-events-player-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-player/events-player.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-player/events-player.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEventsEventsPlayerEventsPlayerPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sucesos de partidos</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/player/profile/{{id}}\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"player\">\n\n    <div class=\"ion-text-center  user\">{{player.name}}</div>\n\n    <div>\n\n      <ion-list>\n        <ion-item *ngFor=\"let e of player.events\"  routerLink=\"/results/profile//{{e.game ? e.game.id : ''}}\" >\n          <label> \n            <ion-text class=\"date\" *ngIf=\"e.game\">{{ e.game.date | date: 'dd-MMM-yyyy'}}</ion-text>\n            <ion-text class=\"event val\" *ngIf=\"e.type_event\"> {{ e.type_event.name  }} </ion-text>\n            {{e.time > 0 ? ' a los ' : ''}}\n            <ion-text *ngIf=\"e.time > 0\" class=\"val\"> {{e.time +'´'}}</ion-text> \n            {{e.game ? ' contra ' : ''}}\n            \n            <ion-text class=\"team val\" *ngIf=\"e.game\">{{e.team_id == e.game.l_team ? e.game.team_v.name : e.game.team_l.name  }} </ion-text>\n          </label> \n        </ion-item>\n      </ion-list>\n\n    </div>\n\n    <ion-item *ngIf=\"player.events.length == 0\" >\n      <div class=\"ion-text-center\">\n        No se han encontrado registros\n      </div>\n    </ion-item>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/events/events-player/events-player-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/events/events-player/events-player-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: EventsPlayerPageRoutingModule */

    /***/
    function srcAppPagesEventsEventsPlayerEventsPlayerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPlayerPageRoutingModule", function () {
        return EventsPlayerPageRoutingModule;
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


      var _events_player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./events-player.page */
      "./src/app/pages/events/events-player/events-player.page.ts");

      var routes = [{
        path: '',
        component: _events_player_page__WEBPACK_IMPORTED_MODULE_3__["EventsPlayerPage"]
      }];

      var EventsPlayerPageRoutingModule = function EventsPlayerPageRoutingModule() {
        _classCallCheck(this, EventsPlayerPageRoutingModule);
      };

      EventsPlayerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventsPlayerPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/events/events-player/events-player.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/events/events-player/events-player.module.ts ***!
      \********************************************************************/

    /*! exports provided: EventsPlayerPageModule */

    /***/
    function srcAppPagesEventsEventsPlayerEventsPlayerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPlayerPageModule", function () {
        return EventsPlayerPageModule;
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


      var _events_player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./events-player-routing.module */
      "./src/app/pages/events/events-player/events-player-routing.module.ts");
      /* harmony import */


      var _events_player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./events-player.page */
      "./src/app/pages/events/events-player/events-player.page.ts");

      var EventsPlayerPageModule = function EventsPlayerPageModule() {
        _classCallCheck(this, EventsPlayerPageModule);
      };

      EventsPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_player_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPlayerPageRoutingModule"]],
        declarations: [_events_player_page__WEBPACK_IMPORTED_MODULE_6__["EventsPlayerPage"]]
      })], EventsPlayerPageModule);
      /***/
    },

    /***/
    "./src/app/pages/events/events-player/events-player.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/pages/events/events-player/events-player.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEventsEventsPlayerEventsPlayerPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".date {\n  color: #ffffff;\n}\n\n.team {\n  font-weight: 400;\n}\n\n.event {\n  color: #ffffff;\n  font-weight: 400;\n  color: white;\n}\n\n.user {\n  font-size: xx-large;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.val {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnRzL2V2ZW50cy1wbGF5ZXIvZXZlbnRzLXBsYXllci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ldmVudHMvZXZlbnRzLXBsYXllci9ldmVudHMtcGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGVhbXtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZXZlbnR7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIHdoaXRlO1xufVxuXG4udXNlciB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udmFse1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/events/events-player/events-player.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/events/events-player/events-player.page.ts ***!
      \******************************************************************/

    /*! exports provided: EventsPlayerPage */

    /***/
    function srcAppPagesEventsEventsPlayerEventsPlayerPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPlayerPage", function () {
        return EventsPlayerPage;
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


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");

      var EventsPlayerPage = /*#__PURE__*/function () {
        function EventsPlayerPage(route, requestService, dialogService, utilArray) {
          _classCallCheck(this, EventsPlayerPage);

          this.route = route;
          this.requestService = requestService;
          this.dialogService = dialogService;
          this.utilArray = utilArray;
          this.id = route.snapshot.paramMap.get('id');
          this.event = route.snapshot.paramMap.get('event');
          this.modelPlayer = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Player', requestService);
        }

        _createClass(EventsPlayerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var parms;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      parms = {};

                      if (this.event) {
                        parms['event'] = this.event;
                      }

                      _context.next = 4;
                      return this.dialogService.loadingProgres();

                    case 4:
                      this.modelPlayer.api_functionModel(this.id, 'pageEvents', parms).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this.player = response['data'];
                        }

                        _this.dialogService.dimissLoaging();
                      }, function (error) {
                        _this.dialogService.dimissLoaging();
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return EventsPlayerPage;
      }();

      EventsPlayerPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_2__["UtilArrayService"]
        }];
      };

      EventsPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./events-player.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/events/events-player/events-player.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./events-player.page.scss */
        "./src/app/pages/events/events-player/events-player.page.scss"))["default"]]
      })], EventsPlayerPage);
      /***/
    },

    /***/
    "./src/app/services/util-array.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/util-array.service.ts ***!
      \************************************************/

    /*! exports provided: UtilArrayService */

    /***/
    function srcAppServicesUtilArrayServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilArrayService", function () {
        return UtilArrayService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UtilArrayService = /*#__PURE__*/function () {
        function UtilArrayService() {
          _classCallCheck(this, UtilArrayService);
        }
        /**
         * Inserta el elemento al final del array
         * @param list array en el que se inserta el objeto
         * @param item item a insertar
         */


        _createClass(UtilArrayService, [{
          key: "listAddLast",
          value: function listAddLast(list, item) {
            list.push(item);
          }
          /**
           * Añade un elemente en el array al inicio
           * @param list array en la que se inserta el objeto
           * @param item  elemento que se almacenara en el array
           */

        }, {
          key: "listAddFirst",
          value: function listAddFirst(list, item) {
            list.unshift(item);
          }
          /**
           * Remplaza un objeto del array
           * @param list array que se actualizara
           * @param id iel id del objeto
           * @param item elemento que se remplazara en el array
           */

        }, {
          key: "listUpdate",
          value: function listUpdate(list, id, item) {
            var index = this.findIndexList(list, id);

            if (index >= 0) {
              list[index] = item;
            }
          }
          /**
           * elimina objeto de un array pasando el id del objeto
           * @param list array del que se eliminara el objeto
           * @param id id del objeto
           */

        }, {
          key: "listDelete",
          value: function listDelete(list, id) {
            var index = this.findIndexList(list, id);
            if (index >= 0) list.splice(index, 1);
          }
          /**
           * Busca un obeto en el array
           * @param list array en el qie se bucara el objeto
           * @param id id del objeto
           */

        }, {
          key: "findList",
          value: function findList(list, id) {
            return list.find(function (item) {
              return item['id'] === id;
            });
          }
          /**
           * Retorna el indice de la posicion en la que se encuentra el objeto
           * @param list Array en el que se realizara a busqueda
           * @param id id del objeto buscado
           */

        }, {
          key: "findIndexList",
          value: function findIndexList(list, id) {
            return list.findIndex(function (item) {
              return item['id'] === id;
            });
          }
          /**
           * Modifica solo los atributos indicados en el array
           * @param objectResult objeto a modificar
           * @param object objeto del que se obtendran los datos
           * @param attibutes atributos que seran modificados
           */

        }, {
          key: "updateAttribustesObject",
          value: function updateAttribustesObject(objectResult, object) {
            var attibutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            console.log('update attributes');

            var _iterator = _createForOfIteratorHelper(attibutes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var att = _step.value;
                if (object.hasOwnProperty(att)) objectResult[att] = object[att];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return objectResult;
          }
        }]);

        return UtilArrayService;
      }();

      UtilArrayService.ctorParameters = function () {
        return [];
      };

      UtilArrayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilArrayService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-events-events-player-events-player-module-es5.js.map