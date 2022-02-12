(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teams-teams-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTeamsTeamsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Equipos</ion-title>\n  </ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar \n    placeholder=\"Filtrar equipos\"   \n    (keyup)=\"filterTeams($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelFilter($event)\"\n  ></ion-searchbar>\n\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list>\n  \n      <ion-list-header *ngIf=\"teams.length == 0\"  color=\"tertiary\">\n        <ion-label>No se ha encontrado equipos</ion-label>\n      </ion-list-header>\n     \n      <ion-item *ngFor=\"let team of teams\" routerLink=\"/team/profile/{{team.id}}\" routerDirection=\"forward\" class=\"team-list\" >\n        <ion-avatar slot=\"start\" >\n          <ion-img \n            [src]=\"team.shield ? team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n          </ion-img>\n        </ion-avatar>\n        <ion-label >\n          <h3 class=\"fs-team\">{{team.name}}</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item (click)=\"newTeam()\">\n      <ion-label>Registrar mi equipo</ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n\n  </div>\n\n  <div *ngIf=\"firstLoad\">\n    <ion-item *ngFor=\"let i of listSkeleton\" >\n      <ion-avatar slot=\"start\" >\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label >\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%;height: 20px;\"></ion-skeleton-text>\n        </h3>\n      </ion-label>\n    </ion-item>\n  </div>\n  \n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/home/teams/teams-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: TeamsPageRoutingModule */

    /***/
    function srcAppPagesHomeTeamsTeamsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsPageRoutingModule", function () {
        return TeamsPageRoutingModule;
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


      var _teams_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teams.page */
      "./src/app/pages/home/teams/teams.page.ts");

      var routes = [{
        path: '',
        component: _teams_page__WEBPACK_IMPORTED_MODULE_3__["TeamsPage"]
      }];

      var TeamsPageRoutingModule = function TeamsPageRoutingModule() {
        _classCallCheck(this, TeamsPageRoutingModule);
      };

      TeamsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TeamsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/home/teams/teams.module.ts ***!
      \**************************************************/

    /*! exports provided: TeamsPageModule */

    /***/
    function srcAppPagesHomeTeamsTeamsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function () {
        return TeamsPageModule;
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


      var _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teams-routing.module */
      "./src/app/pages/home/teams/teams-routing.module.ts");
      /* harmony import */


      var _teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teams.page */
      "./src/app/pages/home/teams/teams.page.ts");

      var TeamsPageModule = function TeamsPageModule() {
        _classCallCheck(this, TeamsPageModule);
      };

      TeamsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamsPageRoutingModule"]],
        declarations: [_teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]]
      })], TeamsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/home/teams/teams.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTeamsTeamsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvdGVhbXMvdGVhbXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/home/teams/teams.page.ts ***!
      \************************************************/

    /*! exports provided: TeamsPage */

    /***/
    function srcAppPagesHomeTeamsTeamsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsPage", function () {
        return TeamsPage;
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


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var _payment_team_payment_team_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../payment-team/payment-team.page */
      "./src/app/pages/payment-team/payment-team.page.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");

      var TeamsPage = /*#__PURE__*/function () {
        function TeamsPage(request, modalController, dialog, auth, utilArray) {
          _classCallCheck(this, TeamsPage);

          this.request = request;
          this.modalController = modalController;
          this.dialog = dialog;
          this.auth = auth;
          this.utilArray = utilArray;
          this.oldTeams = [];
          this.teams = [];
          this.listSkeleton = new Array(10);
          this.firstLoad = true;
          this.teamService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', request);
        }

        _createClass(TeamsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.teamService.api_function('pageHomeTeams').subscribe(function (response) {
              _this.teams = response['data'];
              _this.oldTeams = response['data'];
              if (event) event.target.complete();
              _this.firstLoad = false;
            }, function (error) {
              if (event) event.target.complete();
              _this.firstLoad = false;
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.auth.logout();
          }
        }, {
          key: "newTeam",
          value: function newTeam() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _payment_team_payment_team_page__WEBPACK_IMPORTED_MODULE_7__["PaymentTeamPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('dimiss team', data);

                        if (data.data && data.data['team']) {
                          var team = data.data['team']; //this.teamService.listAddLast(team);

                          _this2.utilArray.listAddLast(_this2.teams, team);
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filterTeams",
          value: function filterTeams(event) {
            var text = event.target.value;

            if (text.length <= 0) {
              this.teams = this.oldTeams;
              return;
            }

            this.teams = _toConsumableArray(this.oldTeams);
            this.teams = this.teams.filter(function (team) {
              return team.name.toUpperCase().includes(text.toUpperCase());
            });
          }
        }, {
          key: "cancelFilter",
          value: function cancelFilter($event) {
            this.teams = this.oldTeams;
          }
        }]);

        return TeamsPage;
      }();

      TeamsPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"]
        }];
      };

      TeamsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./teams.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./teams.page.scss */
        "./src/app/pages/home/teams/teams.page.scss"))["default"]]
      })], TeamsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=teams-teams-module-es5.js.map