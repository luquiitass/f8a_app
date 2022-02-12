(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-alert-create-team-alert-create-team-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentAlertCreateTeamAlertCreateTeamPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pago pendiente</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n\n      <ion-text class=\"text\">\n        Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente.\n      </ion-text>\n      <br>\n      <div class=\"ion-margin-top\">\n        <ion-button (click)=\"goPayment()\" class=\"ion-float-right\" > Realizar el pago</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment/alert-create-team/alert-create-team-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/payment/alert-create-team/alert-create-team-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: AlertCreateTeamPageRoutingModule */

    /***/
    function srcAppPagesPaymentAlertCreateTeamAlertCreateTeamRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPageRoutingModule", function () {
        return AlertCreateTeamPageRoutingModule;
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


      var _alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert-create-team.page */
      "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts");

      var routes = [{
        path: '',
        component: _alert_create_team_page__WEBPACK_IMPORTED_MODULE_3__["AlertCreateTeamPage"]
      }];

      var AlertCreateTeamPageRoutingModule = function AlertCreateTeamPageRoutingModule() {
        _classCallCheck(this, AlertCreateTeamPageRoutingModule);
      };

      AlertCreateTeamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AlertCreateTeamPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/alert-create-team/alert-create-team.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/payment/alert-create-team/alert-create-team.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AlertCreateTeamPageModule */

    /***/
    function srcAppPagesPaymentAlertCreateTeamAlertCreateTeamModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPageModule", function () {
        return AlertCreateTeamPageModule;
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


      var _alert_create_team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alert-create-team-routing.module */
      "./src/app/pages/payment/alert-create-team/alert-create-team-routing.module.ts");
      /* harmony import */


      var _alert_create_team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert-create-team.page */
      "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts");

      var AlertCreateTeamPageModule = function AlertCreateTeamPageModule() {
        _classCallCheck(this, AlertCreateTeamPageModule);
      };

      AlertCreateTeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alert_create_team_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertCreateTeamPageRoutingModule"]],
        declarations: [_alert_create_team_page__WEBPACK_IMPORTED_MODULE_6__["AlertCreateTeamPage"]]
      })], AlertCreateTeamPageModule);
      /***/
    },

    /***/
    "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/payment/alert-create-team/alert-create-team.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPaymentAlertCreateTeamAlertCreateTeamPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9hbGVydC1jcmVhdGUtdGVhbS9hbGVydC1jcmVhdGUtdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9hbGVydC1jcmVhdGUtdGVhbS9hbGVydC1jcmVhdGUtdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/payment/alert-create-team/alert-create-team.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/payment/alert-create-team/alert-create-team.page.ts ***!
      \***************************************************************************/

    /*! exports provided: AlertCreateTeamPage */

    /***/
    function srcAppPagesPaymentAlertCreateTeamAlertCreateTeamPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertCreateTeamPage", function () {
        return AlertCreateTeamPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var AlertCreateTeamPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(AlertCreateTeamPage, _src_app_models_modal);

        var _super = _createSuper(AlertCreateTeamPage);

        function AlertCreateTeamPage(viewCtrl, router, navParams, location) {
          var _this;

          _classCallCheck(this, AlertCreateTeamPage);

          _this = _super.call(this, location, viewCtrl);
          _this.viewCtrl = viewCtrl;
          _this.router = router;
          _this.navParams = navParams;
          _this.id = navParams.get('id');
          return _this;
        }

        _createClass(AlertCreateTeamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss(); //throw new Error("Method not implemented.");
          }
        }, {
          key: "initObject",
          value: function initObject() {//throw new Error("Method not implemented.");
          }
        }, {
          key: "goPayment",
          value: function goPayment() {
            this.router.navigateByUrl('/payment/create/' + this.id);
            this.close();
          }
        }]);

        return AlertCreateTeamPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]);

      AlertCreateTeamPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]
        }];
      };

      AlertCreateTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert-create-team',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./alert-create-team.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/alert-create-team/alert-create-team.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./alert-create-team.page.scss */
        "./src/app/pages/payment/alert-create-team/alert-create-team.page.scss"))["default"]]
      })], AlertCreateTeamPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment-alert-create-team-alert-create-team-module-es5.js.map