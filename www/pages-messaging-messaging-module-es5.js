(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messaging-messaging-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messaging/messaging.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messaging/messaging.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMessagingMessagingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Messaging</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/admin_home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngIf=\"! results.length\">\n    \n    <ion-item *ngFor=\"let request of requests\" (click)=\"run(request)\">\n      <ion-label>{{request.name}}</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n   \n  </ion-list>\n\n  <ion-list *ngIf=\"results.length\"> \n    <ion-row class=\"bg-l2\" style=\"margin-bottom: 20px; padding: 3px;\">\n      Resultados\n    </ion-row>\n\n    <ion-list-header   color=\"success\">\n      <ion-label>Enviados</ion-label>\n    </ion-list-header>\n\n    <ion-row *ngFor=\"let item of sends\" class=\"border-bottom\"> \n      <ion-col size=\"9\">{{item.user.name}}</ion-col>\n      <ion-col size=\"2\" class=\"border-left\"> si</ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n\n    <br>\n\n    <ion-list-header lines=\"inset\"  color=\"warning\">\n      <ion-label>No enviados</ion-label>\n    </ion-list-header>\n\n    <ion-row *ngFor=\"let item of notSends\" class=\"border-bottom\"> \n      <ion-col size=\"9\">{{item.user.name}}</ion-col>\n      <ion-col size=\"2\" class=\"border-left\"> {{ item.result.success == 1 ? 'si' : 'no'}}</ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n\n    <br>\n\n    <ion-row>\n      <ion-col>\n        Eviados\n      </ion-col>\n      <ion-col>\n        {{sends.length}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        No eviados\n      </ion-col>\n      <ion-col>\n        {{notSends.length}}\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-button  (click)=\"clearResults()\">Eliminar resultados</ion-button>\n    </ion-row>\n    \n  </ion-list>\n  \n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/messaging/messaging-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/messaging/messaging-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MessagingPageRoutingModule */

    /***/
    function srcAppPagesMessagingMessagingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagingPageRoutingModule", function () {
        return MessagingPageRoutingModule;
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


      var _messaging_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messaging.page */
      "./src/app/pages/messaging/messaging.page.ts");

      var routes = [{
        path: '',
        component: _messaging_page__WEBPACK_IMPORTED_MODULE_3__["MessagingPage"]
      }];

      var MessagingPageRoutingModule = function MessagingPageRoutingModule() {
        _classCallCheck(this, MessagingPageRoutingModule);
      };

      MessagingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/messaging/messaging.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/messaging/messaging.module.ts ***!
      \*****************************************************/

    /*! exports provided: MessagingPageModule */

    /***/
    function srcAppPagesMessagingMessagingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function () {
        return MessagingPageModule;
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


      var _messaging_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./messaging-routing.module */
      "./src/app/pages/messaging/messaging-routing.module.ts");
      /* harmony import */


      var _messaging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messaging.page */
      "./src/app/pages/messaging/messaging.page.ts");

      var MessagingPageModule = function MessagingPageModule() {
        _classCallCheck(this, MessagingPageModule);
      };

      MessagingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messaging_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagingPageRoutingModule"]],
        declarations: [_messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]]
      })], MessagingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/messaging/messaging.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/messaging/messaging.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMessagingMessagingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".border-left {\n  border-left: 1px solid #ffffff30;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #ffffff30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVzc2FnaW5nL21lc3NhZ2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1sZWZ0e1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZjMwO1xufVxuXG4uYm9yZGVyLWJvdHRvbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjMwO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/messaging/messaging.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/messaging/messaging.page.ts ***!
      \***************************************************/

    /*! exports provided: MessagingPage */

    /***/
    function srcAppPagesMessagingMessagingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagingPage", function () {
        return MessagingPage;
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


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var MessagingPage = /*#__PURE__*/function () {
        function MessagingPage(requestService, dialogService) {
          _classCallCheck(this, MessagingPage);

          this.requestService = requestService;
          this.dialogService = dialogService;
          this.results = [];
          this.requests = [{
            name: 'Not Partidos Creados',
            functionName: 'showGamesLoaded'
          }, {
            name: 'Resultados cargados',
            functionName: 'loadedResults'
          }, {
            name: 'Aviso para crear partidos',
            functionName: 'adminCreateGame'
          }, {
            name: 'Tercer tiempo',
            functionName: 'after'
          }, {
            name: 'Añadir resultados a los partidos',
            'functionName': 'addResultGames'
          }, {
            name: 'Promicion de la pagina de Facebook',
            'functionName': 'pageFacebook'
          }];
          this.modelMessaging = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Massaging', requestService);
        }

        _createClass(MessagingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "run",
          value: function run(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.dialogService.loadingProgres();

                    case 2:
                      this.modelMessaging.api_function(item.functionName).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this.results = response['data'];
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
        }, {
          key: "clearResults",
          value: function clearResults() {
            this.results = [];
          }
        }, {
          key: "sends",
          get: function get() {
            return this.results.filter(function (element) {
              return element && element.result && element.result.success == 1;
            });
          }
        }, {
          key: "notSends",
          get: function get() {
            return this.results.filter(function (element) {
              return element && element.result && element.result.success == 0;
            });
          }
        }]);

        return MessagingPage;
      }();

      MessagingPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }];
      };

      MessagingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./messaging.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/messaging/messaging.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./messaging.page.scss */
        "./src/app/pages/messaging/messaging.page.scss"))["default"]]
      })], MessagingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-messaging-messaging-module-es5.js.map