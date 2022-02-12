(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-modal-filter-modal-filter-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/modal-filter/modal-filter.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/modal-filter/modal-filter.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamModalFilterModalFilterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  <ion-title>Buscar Equipo</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar \n    placeholder=\"Filtrar equipos\"\n    (ionClear)=\"cancelFilter($event)\"\n    (ionChange)=\"filterChangue($event)\"\n  ></ion-searchbar>\n\n\n  <ion-list>\n    <ion-list-header *ngIf=\"getFilter().length == 0\"  color=\"tertiary\">\n      <ion-label>No se ha encontrado equipos</ion-label>\n    </ion-list-header>\n   \n    <ion-item *ngFor=\"let team of getFilter()\" class=\"team-list\" (click)=\"dismiss(team)\" >\n      <ion-avatar slot=\"start\" *ngIf=\"team.id != -1\">\n        <ion-img \n          [src]=\"team.shield ? team.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n        </ion-img>\n      </ion-avatar>\n      <ion-label >\n        <h3 class=\"fs-team\">{{  team.id == -1 ? 'Registrar Nuevo Equipo ' : team.name}}</h3>\n      </ion-label>\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/team/modal-filter/modal-filter-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/team/modal-filter/modal-filter-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ModalFilterPageRoutingModule */

    /***/
    function srcAppPagesTeamModalFilterModalFilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFilterPageRoutingModule", function () {
        return ModalFilterPageRoutingModule;
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


      var _modal_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal-filter.page */
      "./src/app/pages/team/modal-filter/modal-filter.page.ts");

      var routes = [{
        path: '',
        component: _modal_filter_page__WEBPACK_IMPORTED_MODULE_3__["ModalFilterPage"]
      }];

      var ModalFilterPageRoutingModule = function ModalFilterPageRoutingModule() {
        _classCallCheck(this, ModalFilterPageRoutingModule);
      };

      ModalFilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModalFilterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/team/modal-filter/modal-filter.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/team/modal-filter/modal-filter.module.ts ***!
      \****************************************************************/

    /*! exports provided: ModalFilterPageModule */

    /***/
    function srcAppPagesTeamModalFilterModalFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFilterPageModule", function () {
        return ModalFilterPageModule;
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


      var _modal_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal-filter-routing.module */
      "./src/app/pages/team/modal-filter/modal-filter-routing.module.ts");
      /* harmony import */


      var _modal_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal-filter.page */
      "./src/app/pages/team/modal-filter/modal-filter.page.ts");

      var ModalFilterPageModule = function ModalFilterPageModule() {
        _classCallCheck(this, ModalFilterPageModule);
      };

      ModalFilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalFilterPageRoutingModule"]],
        declarations: [_modal_filter_page__WEBPACK_IMPORTED_MODULE_6__["ModalFilterPage"]]
      })], ModalFilterPageModule);
      /***/
    },

    /***/
    "./src/app/pages/team/modal-filter/modal-filter.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/pages/team/modal-filter/modal-filter.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTeamModalFilterModalFilterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0vbW9kYWwtZmlsdGVyL21vZGFsLWZpbHRlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/team/modal-filter/modal-filter.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/team/modal-filter/modal-filter.page.ts ***!
      \**************************************************************/

    /*! exports provided: ModalFilterPage */

    /***/
    function srcAppPagesTeamModalFilterModalFilterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFilterPage", function () {
        return ModalFilterPage;
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


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/transfer-data.service */
      "./src/app/services/transfer-data.service.ts");

      var ModalFilterPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(ModalFilterPage, _src_app_models_modal);

        var _super = _createSuper(ModalFilterPage);

        function ModalFilterPage(viewCtrl, location, dataTranfer) {
          var _this;

          _classCallCheck(this, ModalFilterPage);

          _this = _super.call(this, location, viewCtrl);
          _this.viewCtrl = viewCtrl;
          _this.location = location;
          _this.dataTranfer = dataTranfer;
          _this.teams = [];
          _this.oldTeams = [];
          _this.textSearch = '';
          _this.teams = dataTranfer.getData('teams');
          _this.oldTeams = _toConsumableArray(_this.teams);
          return _this;
        }

        _createClass(ModalFilterPage, [{
          key: "initObject",
          value: function initObject() {}
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
          key: "filterTeams",
          value: function filterTeams(text) {
            //let text = event.target.value;
            if (text.length <= 0) {
              this.teams = this.oldTeams;
              return;
            }

            this.teams = _toConsumableArray(this.oldTeams);
            this.teams = this.teams.filter(function (team) {
              return team.name.toUpperCase().includes(text.toUpperCase()) || team.id == -1;
            });
          }
        }, {
          key: "getFilter",
          value: function getFilter() {
            var _this2 = this;

            return this.teams.filter(function (team) {
              return team.name.toUpperCase().includes(_this2.textSearch.toUpperCase()) || team.id == -1;
            });
          }
        }, {
          key: "cancelFilter",
          value: function cancelFilter($event) {
            this.teams = this.oldTeams;
          }
        }, {
          key: "filterChangue",
          value: function filterChangue(event) {
            this.textSearch = event.detail.value; //this.filterTeams(text);
          }
        }, {
          key: "log",
          value: function log(event) {
            console.log(event);
          }
        }]);

        return ModalFilterPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]);

      ModalFilterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]
        }, {
          type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_5__["TransferDataService"]
        }];
      };

      ModalFilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-filter.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/modal-filter/modal-filter.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-filter.page.scss */
        "./src/app/pages/team/modal-filter/modal-filter.page.scss"))["default"]]
      })], ModalFilterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-team-modal-filter-modal-filter-module-es5.js.map