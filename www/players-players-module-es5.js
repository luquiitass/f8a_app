(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["players-players-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePlayersPlayersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>players</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"load($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-searchbar \n    placeholder=\"Buscar jugador\"   \n    (keyup)=\"searchPlayer($event)\" \n    debounce=\"500\"\n    (ionClear)=\"cancelSearch($event)\"\n  ></ion-searchbar>\n\n\n  <app-player-list \n    [items] = \"players\"\n    (eventSelect)=\"playerSelect($event)\" \n    [firstLoading] = \"firstLoading\"\n  >\n  </app-player-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/players/players-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/home/players/players-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: PlayersPageRoutingModule */

    /***/
    function srcAppPagesHomePlayersPlayersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersPageRoutingModule", function () {
        return PlayersPageRoutingModule;
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


      var _players_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./players.page */
      "./src/app/pages/home/players/players.page.ts");

      var routes = [{
        path: '',
        component: _players_page__WEBPACK_IMPORTED_MODULE_3__["PlayersPage"]
      }];

      var PlayersPageRoutingModule = function PlayersPageRoutingModule() {
        _classCallCheck(this, PlayersPageRoutingModule);
      };

      PlayersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlayersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/players/players.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/players/players.module.ts ***!
      \******************************************************/

    /*! exports provided: PlayersPageModule */

    /***/
    function srcAppPagesHomePlayersPlayersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersPageModule", function () {
        return PlayersPageModule;
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


      var _players_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./players-routing.module */
      "./src/app/pages/home/players/players-routing.module.ts");
      /* harmony import */


      var _players_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./players.page */
      "./src/app/pages/home/players/players.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var PlayersPageModule = function PlayersPageModule() {
        _classCallCheck(this, PlayersPageModule);
      };

      PlayersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _players_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayersPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_players_page__WEBPACK_IMPORTED_MODULE_6__["PlayersPage"]]
      })], PlayersPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/players/players.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/home/players/players.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomePlayersPlayersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcGxheWVycy9wbGF5ZXJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/home/players/players.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/home/players/players.page.ts ***!
      \****************************************************/

    /*! exports provided: PlayersPage */

    /***/
    function srcAppPagesHomePlayersPlayersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersPage", function () {
        return PlayersPage;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var PlayersPage = /*#__PURE__*/function () {
        function PlayersPage(request, navCtrl, util) {
          _classCallCheck(this, PlayersPage);

          this.request = request;
          this.navCtrl = navCtrl;
          this.util = util;
          this.players = [];
          this.firstLoading = true;
          this.oldPlayers = [];
          this.playerModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Player', this.request);
        }

        _createClass(PlayersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load();
          }
        }, {
          key: "load",
          value: function load() {
            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var paginate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var page;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      page = {};

                      if (paginate && this.dataPaginate) {
                        page = {
                          page: this.dataPaginate.current_page + 1
                        };
                      } //await this.util.delay(4000)


                      this.playerModel.api_function('pageHomePlayers', page).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this.dataPaginate = response['data'];

                          if (!paginate) {
                            _this.players = response['data']['data'];
                          } else {
                            var _iterator = _createForOfIteratorHelper(response['data']['data']),
                                _step;

                            try {
                              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var player = _step.value;

                                _this.players.push(player);
                              }
                            } catch (err) {
                              _iterator.e(err);
                            } finally {
                              _iterator.f();
                            }
                          }
                        }

                        _this.oldPlayers = _toConsumableArray(_this.players);
                        console.log(response);
                        _this.firstLoading = false;
                        if ($event) $event.target.complete();
                      }, function (error) {
                        _this.firstLoading = false;
                        console.error(error);
                        if ($event) $event.target.complete();
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
          key: "loadData",
          value: function loadData(event) {
            if (this.dataPaginate && this.dataPaginate.last_page == this.dataPaginate.current_page) {
              event.target.complete();
              event.target.disabled = true;
              this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
              return;
            }

            this.load(event, true);
          }
        }, {
          key: "playerSelect",
          value: function playerSelect(player) {
            console.log('goTo', player);
            this.navCtrl.navigateForward("player/profile/".concat(player.id));
          }
        }, {
          key: "searchPlayer",
          value: function searchPlayer(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var text;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('text search', event);
                      text = event.target.value;

                      if (!(text.length <= 2)) {
                        _context2.next = 5;
                        break;
                      }

                      this.players = this.oldPlayers;
                      return _context2.abrupt("return");

                    case 5:
                      this.firstLoading = true; //await this.util.delay(4000);

                      this.playerModel.api_function('searchPlayer', {
                        query: text
                      }).subscribe(function (response) {
                        console.log(response);

                        if (response['status'] == 'success') {
                          _this2.players = response['data'];
                          event.target.autofocus = true;
                        }

                        _this2.firstLoading = false;
                      }, function (error) {
                        console.error(error);
                        _this2.firstLoading = false;
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelSearch",
          value: function cancelSearch(event) {
            this.players = this.oldPlayers;
          }
        }]);

        return PlayersPage;
      }();

      PlayersPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      PlayersPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]]
        }]
      };
      PlayersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-players',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./players.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./players.page.scss */
        "./src/app/pages/home/players/players.page.scss"))["default"]]
      })], PlayersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=players-players-module-es5.js.map