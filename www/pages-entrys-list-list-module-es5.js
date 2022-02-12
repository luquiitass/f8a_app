(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entrys-list-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/list/list.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/list/list.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEntrysListListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/teams\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title>Ingresos</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"add()\">\n        <ion-icon name=\"log-in-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"team\">\n  <div>\n    <div class=\"team_name ion-text-center\">\n      {{team.name}}\n    </div>\n  </div>\n  <br>\n\n  <ion-grid>\n    <ion-row class=\"bg-l1\">\n      <ion-col size=\"3\">Fecha</ion-col>\n      <ion-col size=\"7\">Descripción</ion-col>      \n      <ion-col size=\"2\">Monto</ion-col>      \n    </ion-row>\n\n    <ion-row class=\"row-table ion-activatable ripple-parent\" *ngFor=\"let entry of (team.entrys )\" >\n      <ion-col size=\"3\" class=\"border-right\">{{ entry.date | date }}</ion-col>\n      <ion-col size=\"7\" class=\"border-right ion-text-left\" >{{entry.description}}</ion-col>\n      <ion-col size=\"2\">\n        $ {{entry.amount}}\n      </ion-col>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-row>\n\n    <ion-row *ngIf=\"team.entrys.length ==  0\">\n      <ion-col  class=\"none ion-text-center active\" >No se han registrados Gastos</ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/entrys/list/list-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/entrys/list/list-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ListPageRoutingModule */

    /***/
    function srcAppPagesEntrysListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
        return ListPageRoutingModule;
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


      var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/entrys/list/list.page.ts");

      var routes = [{
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
      }];

      var ListPageRoutingModule = function ListPageRoutingModule() {
        _classCallCheck(this, ListPageRoutingModule);
      };

      ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/entrys/list/list.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/entrys/list/list.module.ts ***!
      \**************************************************/

    /*! exports provided: ListPageModule */

    /***/
    function srcAppPagesEntrysListListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
        return ListPageModule;
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


      var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-routing.module */
      "./src/app/pages/entrys/list/list-routing.module.ts");
      /* harmony import */


      var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/entrys/list/list.page.ts");

      var ListPageModule = function ListPageModule() {
        _classCallCheck(this, ListPageModule);
      };

      ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
      })], ListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/entrys/list/list.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/entrys/list/list.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEntrysListListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".team_name {\n  margin: 5px;\n  padding: 10px;\n  font-size: x-large;\n  background-color: #50fb8c94;\n}\n\n.btn {\n  font-size: xx-large;\n}\n\n.text-hp {\n  font-size: small;\n  color: #c7cacc;\n}\n\n.op {\n  font-size: x-small;\n}\n\n.row-table {\n  padding-top: 10px;\n  font-size: large;\n  border-bottom: 1px solid #ffffffa3;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.border-right {\n  border-right: 1px solid #ffffffa3;\n}\n\n.border-left {\n  border-left: 1px solid #ffffffa3;\n}\n\n.x-mes {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW50cnlzL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlDQUFBO0FBRko7O0FBS0E7RUFDSSxnQ0FBQTtBQUZKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJ5cy9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1fbmFtZXtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBmYjhjOTQ7XG59XG5cbi5idG57XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuXG4udGV4dC1ocHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjYzdjYWNjXG59XG5cbi5vcHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cblxuXG4ucm93LXRhYmxle1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXJpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuLmJvcmRlci1sZWZ0e1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZmEzO1xufVxuXG5cbi54LW1lc3tcbiAgICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/entrys/list/list.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/entrys/list/list.page.ts ***!
      \************************************************/

    /*! exports provided: ListPage */

    /***/
    function srcAppPagesEntrysListListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPage", function () {
        return ListPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _form_entry_form_entry_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../form-entry/form-entry.page */
      "./src/app/pages/entrys/form-entry/form-entry.page.ts");

      var ListPage = /*#__PURE__*/function () {
        function ListPage(route, router, requestService, dialogService, authUser, modalController, utilArray, actionSheetController, util) {
          _classCallCheck(this, ListPage);

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

        _createClass(ListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.dialogService.loadingProgres();

                    case 2:
                      this.modelTeam.api_functionModel(this.team_id, 'pageEntrys').subscribe(function (response) {
                        //console.log('response Team',response);
                        if (response['status'] == 'success') {
                          _this.team = response['data'];
                        }

                        _this.dialogService.dimissLoaging();
                      }, function (error) {
                        _this.dialogService.dimissLoaging();
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Elimina la Hoja de balance de un usuario
           */

        }, {
          key: "deleteEntry",
          value: function deleteEntry(entry) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.dialogService.loadingProgres('Eliminando..');

                    case 2:
                      this.modelEntry.api_delete(entry.id).subscribe(function (response) {
                        _this2.dialogService.dimissLoaging();

                        _this2.utilArray.listDelete(_this2.team.entrys, entry.id);
                      }, function (error) {
                        _this2.dialogService.dimissLoaging(); //this.dialogService.showToast('Error al eliminar Registro, tiene registos asociados');

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
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _form_entry_form_entry_page__WEBPACK_IMPORTED_MODULE_10__["FormEntryPage"],
                        componentProps: {
                          team_id: this.team_id,
                          amount_of_the_month: this.team.amount_balance
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data['entry']) {
                          var entry = data.data['entry']; //this.playerService.listAddLast(player);

                          _this3.utilArray.listAddFirst(_this3.team.entrys, entry);
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
        }]);

        return ListPage;
      }();

      ListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }];
      };

      ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/entrys/list/list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list.page.scss */
        "./src/app/pages/entrys/list/list.page.scss"))["default"]]
      })], ListPage);
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
//# sourceMappingURL=pages-entrys-list-list-module-es5.js.map