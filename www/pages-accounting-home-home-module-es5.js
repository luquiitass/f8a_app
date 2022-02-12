(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accounting-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounting/home/home.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounting/home/home.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountingHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/team/profile/{{team_id}}\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Contabilidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf=\"team\" >\n\n    <div>\n      <div class=\"team_name ion-text-center\" >\n        {{team.name}}\n      </div>\n    </div>\n    <br>\n\n    <div>\n      <ion-grid>\n        <ion-row  class=\"\">\n          <ion-col size=\"12\" >\n            <ion-card  >\n              <ion-card-content class=\"ion-text-center\">\n                <ion-text class=\"cash\">\n                    $ {{team.cash}}\n                </ion-text>\n              </ion-card-content>\n      \n              <ion-row class=\"cardfooter ion-text-center\">\n                <ion-col>\n                      <p>Caja</p>\n                      <ion-text class=\"detail-cash\">(ingresos + cuotas) - gastos </ion-text>\n                </ion-col>\n              </ion-row>\n      \n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\"> \n            <ion-card routerLink=\"/payments-team/{{team_id}}\" routerDirection=\"forward\">\n              <ion-card-content class=\"ion-text-center\">\n                <ion-text class=\"cash\">\n                    $ {{team.totalBalancePayments}}\n                </ion-text>\n              </ion-card-content>\n      \n              <ion-row class=\"cardfooter ion-text-center\">\n                <ion-col>\n                      <p>Cuotas</p>\n                      <ion-text class=\"detail-cash\">Total recaudado en cuotas </ion-text>\n                </ion-col>\n              </ion-row>\n      \n            </ion-card>\n          </ion-col>\n\n\n          <ion-col size=\"12\">\n            <ion-card routerLink=\"/entrys/{{team_id}}\" routerDirection=\"forward\" >\n              <ion-card-content class=\"ion-text-center\">\n                <ion-text class=\"cash\">\n                    $ {{team.totalEntry}}\n                </ion-text>\n              </ion-card-content>\n      \n              <ion-row class=\"cardfooter ion-text-center\">\n                <ion-col>\n                      <p>Ingresos</p>\n                      <ion-text class=\"detail-cash\">Ingresos varios </ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n\n\n          <ion-col size=\"12\">\n            <ion-card routerLink=\"/expenses/{{team_id}}\" routerDirection=\"forward\" >\n              <ion-card-content class=\"ion-text-center\">\n                <ion-text class=\"cash\">\n                    $ {{team.totalExpense}}\n                </ion-text>\n              </ion-card-content>\n      \n              <ion-row class=\"cardfooter ion-text-center\">\n                <ion-col>\n                      <p>Gastos</p>\n                      <ion-text class=\"detail-cash\">Compras y servicios</ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\" routerLink=\"/balance-sheet/{{team_id}}/pending\" routerDirection=\"forward\" >\n            <ion-card >\n              <ion-card-content class=\"ion-text-center\">\n                <ion-text class=\"cash\">\n                    $ {{team.totlaPendingFees}}\n                </ion-text>\n              </ion-card-content>\n      \n              <ion-row class=\"cardfooter ion-text-center\">\n                <ion-col>\n                      <p>Cuotas pendientes</p>\n                      <ion-text class=\"detail-cash\"> </ion-text>\n                </ion-col>\n              </ion-row>\n      \n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n     \n    </div>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/accounting/home/home-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/accounting/home/home-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppPagesAccountingHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/accounting/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/accounting/home/home.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/accounting/home/home.module.ts ***!
      \******************************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppPagesAccountingHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/pages/accounting/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/pages/accounting/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/pages/accounting/home/home.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/accounting/home/home.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAccountingHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".team_name {\n  margin: 5px;\n  padding: 10px;\n  font-size: x-large;\n  background-color: #50fb8c94;\n}\n\n.btn {\n  font-size: xx-large;\n}\n\n.text-hp {\n  font-size: small;\n  color: #c7cacc;\n}\n\n.op {\n  font-size: x-small;\n}\n\n.row-table {\n  padding-top: 10px;\n  font-size: large;\n  border-bottom: 1px solid #ffffffa3;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.border-right {\n  border-right: 1px solid #ffffffa3;\n}\n\n.border-left {\n  border-left: 1px solid #ffffffa3;\n}\n\n.x-mes {\n  font-size: large;\n}\n\nion-col.center-any-object {\n  display: flex;\n  justify-content: center;\n}\n\n.cash {\n  font-size: xx-large;\n}\n\n.detail-cash {\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudGluZy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxpQ0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0NBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudGluZy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1fbmFtZXtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBmYjhjOTQ7XG59XG5cbi5idG57XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuXG4udGV4dC1ocHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjYzdjYWNjXG59XG5cbi5vcHtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cblxuXG4ucm93LXRhYmxle1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9yZGVyLXJpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmZhMztcbn1cblxuLmJvcmRlci1sZWZ0e1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZmZmZmEzO1xufVxuXG5cbi54LW1lc3tcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5pb24tY29sLmNlbnRlci1hbnktb2JqZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FzaHtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4uZGV0YWlsLWNhc2h7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/accounting/home/home.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/accounting/home/home.page.ts ***!
      \****************************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppPagesAccountingHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(route, dialogService, requestService) {
          _classCallCheck(this, HomePage);

          this.route = route;
          this.dialogService = dialogService;
          this.requestService = requestService;
          this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', requestService);
          this.team_id = this.route.snapshot.paramMap.get('team_id');
        }

        _createClass(HomePage, [{
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
                      this.modelTeam.api_functionModel(this.team_id, 'pageAccounting').subscribe(function (response) {
                        console.log(response);
                        if (response['status'] == 'success') _this.team = response['data'];

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
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounting/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/pages/accounting/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-accounting-home-home-module-es5.js.map