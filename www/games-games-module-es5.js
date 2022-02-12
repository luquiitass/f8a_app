(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/games/games.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/games/games.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeGamesGamesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Partidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list>\n  \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable [(ngModel)]=\"tabSelected\" (ionChange)=\"selectDate($event)\" >\n              <ion-segment-button *ngFor=\"let tab of tabs;let i=index\" value=\"{{i}}\" id=\"sgm_{{i}}\" >\n                {{formatDate(tab.date)}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-list-header *ngIf=\"listsHomeService.games.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n      <app-game-list \n        *ngFor=\"let game of listsHomeService.games\"\n        [game]=\"game\"  \n        routerLink=\"/games/profile/{{game.id}}\" \n        routerDirection=\"forward\"\n      >\n      </app-game-list>\n\n      <ion-item class=\"ion-activatable\" (click)=\"addGame()\" *ngIf=\"authUser.isAdminTeam()\">\n        <ion-label>Crear nuevo partido</ion-label>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        <ion-ripple-effect ></ion-ripple-effect>\n      </ion-item>\n      \n  \n      <!-- <ion-item *ngFor=\"let game of list\" routerLink=\"/games/profile/{{game.id}}\" routerDirection=\"forward\" >\n        <div class=\"game\">\n          <div class=\"team-list contenedor\">\n            <div class=\"team\">\n              <span class=\"team-name\">{{game.team_l.name}}</span>\n              <ion-thumbnail slot=\"end\">\n                <ion-img \n                  class=\"img-team\"\n                  [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/shield_team.png'\">\n                </ion-img>\n              </ion-thumbnail>\n            </div>\n  \n            <div class=\"vs\">vs</div>\n  \n            <div class=\"team\">\n              <span class=\"team-name\">{{game.team_v.name}}</span>\n              <ion-thumbnail slot=\"start\">\n                <ion-img \n                  class=\"img-team\"\n                  [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/shield_team.png'\"\n                  >\n                </ion-img>\n              </ion-thumbnail>\n            </div>\n          </div>\n          <div class=\"date \">\n            <span>{{ util.formatHours(game.time) }}</span>\n          </div>\n        </div>\n      </ion-item> -->\n    </ion-list>\n  </div>\n  \n  <div *ngIf=\"firstLoad\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card *ngFor=\"let i of listSkeleton\">\n      <div class=\"ion-padding custom-skeleton\">\n        <div class=\"game\">\n          <div class=\"team-list contenedor\">\n            <div class=\"team\">\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n            </div>\n  \n            <div class=\"vs\">\n              <ion-skeleton-text animated style=\"width: 20px\"></ion-skeleton-text>\n            </div>\n  \n            <div class=\"team\">\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n            </div>\n          </div>\n          <div class=\"date ion-text-center\"  style=\"width: 100%\">\n            <ion-skeleton-text animated style=\"width: 80px;margin: auto;\"></ion-skeleton-text>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/games/games-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/home/games/games-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: GamesPageRoutingModule */

    /***/
    function srcAppPagesHomeGamesGamesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamesPageRoutingModule", function () {
        return GamesPageRoutingModule;
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


      var _games_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./games.page */
      "./src/app/pages/home/games/games.page.ts");

      var routes = [{
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_3__["GamesPage"]
      }];

      var GamesPageRoutingModule = function GamesPageRoutingModule() {
        _classCallCheck(this, GamesPageRoutingModule);
      };

      GamesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GamesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/games/games.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/home/games/games.module.ts ***!
      \**************************************************/

    /*! exports provided: GamesPageModule */

    /***/
    function srcAppPagesHomeGamesGamesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamesPageModule", function () {
        return GamesPageModule;
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


      var _games_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./games-routing.module */
      "./src/app/pages/home/games/games-routing.module.ts");
      /* harmony import */


      var _games_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./games.page */
      "./src/app/pages/home/games/games.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var GamesPageModule = function GamesPageModule() {
        _classCallCheck(this, GamesPageModule);
      };

      GamesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _games_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_6__["GamesPage"]]
      })], GamesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/games/games.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/home/games/games.page.ts ***!
      \************************************************/

    /*! exports provided: GamesPage */

    /***/
    function srcAppPagesHomeGamesGamesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamesPage", function () {
        return GamesPage;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var _game_create_game_admin_create_game_admin_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../game/create-game-admin/create-game-admin.page */
      "./src/app/pages/game/create-game-admin/create-game-admin.page.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_lists_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/lists-home.service */
      "./src/app/services/lists-home.service.ts");

      var GamesPage = /*#__PURE__*/function () {
        function GamesPage(request, util, dialogService, modalCtrl, authUser, utilArray, route, listsHomeService) {
          _classCallCheck(this, GamesPage);

          this.request = request;
          this.util = util;
          this.dialogService = dialogService;
          this.modalCtrl = modalCtrl;
          this.authUser = authUser;
          this.utilArray = utilArray;
          this.route = route;
          this.listsHomeService = listsHomeService; //public list = [];

          this.tabs = [];
          this.listSkeleton = new Array(3);
          this.firstLoad = true;
          this.modelGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', request);
        }

        _createClass(GamesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.init();
            setTimeout(function () {
              _this.analyzeParameters();
            }, 1000); //this.analyzeParameters();
          }
        }, {
          key: "init",
          value: function init() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      /*this.modelGame.api_function('games').subscribe(data => {
                        if(data['status'] = 'success'){
                          this.list = data['data'];
                          if(event)
                            event.target.complete();
                        }
                      })
                      */
                      this.modelGame.api_function('pageHomeGames').subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this2.tabs = response['data']['dates'];

                          _this2.selectFirst();
                        }

                        if (event) event.target.complete();
                        console.log(response);
                        _this2.firstLoad = false;
                      }, function (error) {
                        if (event) event.target.complete();
                        console.error(error);
                        _this2.firstLoad = false;
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectFirst",
          value: function selectFirst() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var tab;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.tabs.length > 0)) {
                        _context2.next = 7;
                        break;
                      }

                      tab = this.tabs[0];
                      this.listsHomeService.games = tab['results'];
                      this.tabSelected = 0;
                      _context2.next = 6;
                      return this.delay(1500);

                    case 6:
                      this.focusSegment(); //this.selectDate(tab['date']);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectDate",
          value: function selectDate(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var index, tab;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      index = parseInt(event.detail.value);
                      tab = this.tabs[index];

                      if (!(tab && tab['results'])) {
                        _context3.next = 6;
                        break;
                      }

                      this.listsHomeService.games = tab['results'];
                      this.focusSegment();
                      return _context3.abrupt("return");

                    case 6:
                      _context3.next = 8;
                      return this.dialogService.loadingProgres();

                    case 8:
                      this.modelGame.api_function('gamesByDate', {
                        'date': tab['date']
                      }).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this3.tabs[index]['results'] = response['data'];
                          _this3.listsHomeService.games = _this3.tabs[index]['results'];

                          _this3.focusSegment();
                        }

                        _this3.dialogService.dimissLoaging();

                        console.log(response);
                      }, function (error) {
                        console.error(error);

                        _this3.dialogService.dimissLoaging();
                      });

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "focusSegment",
          value: function focusSegment() {
            var segmentId = 'sgm_' + this.tabSelected;
            console.log('select segment : ', segmentId);
            document.getElementById(segmentId).scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center'
            });
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "formatDate",
          value: function formatDate(val) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(val).locale('es').format('DD MMMM YYYY');
          }
        }, {
          key: "addGame",
          value: function addGame() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var date, modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('date', this.tabs[this.tabSelected]);
                      date = this.tabs[this.tabSelected] ? this.tabs[this.tabSelected]['date'] : '';
                      _context4.next = 4;
                      return this.modalCtrl.create({
                        //component: ModalCreateGamePage
                        component: _game_create_game_admin_create_game_admin_page__WEBPACK_IMPORTED_MODULE_9__["CreateGameAdminPage"],
                        componentProps: {
                          date: date
                        }
                      });

                    case 4:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('crate game');

                        if (data.data && data.data['game']) {
                          var game = data.data['game'];

                          var _date = _this4.util.setFormatMoment(game.date, 'YYYY-MM-DD');

                          var index = _this4.tabs.map(function (tab) {
                            return tab.date;
                          }).indexOf(_date);

                          if (index >= 0) {
                            _this4.utilArray.listAddFirst(_this4.tabs[index]['results'], game);
                          } else {
                            index = _this4.tabs.length;
                            _this4.tabs[index] = {
                              date: _date,
                              results: []
                            };

                            _this4.utilArray.listAddFirst(_this4.tabs[index]['results'], game);
                          }

                          _this4.tabSelected = index;

                          _this4.focusSegment();
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
          key: "analyzeParameters",
          value: function analyzeParameters() {
            console.log('run analyzeParameters');
            if (this.route) if (this.route.snapshot.queryParamMap.get('create')) this.addGame();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewWillEnter');
          } // Fired when the component routing to is about to animate into view.

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log('ionViewDidEnter');
          } // Fired when the component routing to has finished animating.  

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            console.log('ionViewWillLeave');
          } // Fired when the component routing from is about to animate.

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            console.log('ionViewDidLeave');
          }
        }]);

        return GamesPage;
      }();

      GamesPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_10__["UtilArrayService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: src_app_services_lists_home_service__WEBPACK_IMPORTED_MODULE_12__["ListsHomeService"]
        }];
      };

      GamesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-games',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./games.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/games/games.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./games.page.scss */
        "./src/app/pages/home/games/games.page.scss"))["default"]]
      })], GamesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=games-games-module-es5.js.map