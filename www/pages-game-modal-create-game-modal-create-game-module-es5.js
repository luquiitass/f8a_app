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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-modal-create-game-modal-create-game-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/modal-create-game/modal-create-game.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/modal-create-game/modal-create-game.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameModalCreateGameModalCreateGamePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Crear Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      <div class=\"msj-xs text-c-l2\">\n        Por el momento los partidos solo pueden ser registrados por el administrador general. Para ello debes enviar los datos necesarios del partido al grupo de WhatsApp.\n      </div>\n      <br>\n      <div class=\"msj-xs text-c-l2\">\n        Los datos necesarios son:\n    \n        <ul>\n          <li>Equipo local</li>\n          <li>Equipo visitante</li>\n          <li>Lugar donde se llevara a cabo el partido</li>\n          <li>Fecha</li>\n          <li>Hora</li>\n        </ul>\n      </div>\n      <br>\n      <div class=\"msj-xs text-c-l2\">\n        También tendrás que pasar los resultados de dicho partido por medio de este grupo \n      </div>\n\n      <br>\n\n      <a  href=\"https://chat.whatsapp.com/01bWFvD2lARL2XXI7oUm0g\" class=\"btn-wp\">\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n      </a>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/game/modal-create-game/modal-create-game-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/game/modal-create-game/modal-create-game-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ModalCreateGamePageRoutingModule */

    /***/
    function srcAppPagesGameModalCreateGameModalCreateGameRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalCreateGamePageRoutingModule", function () {
        return ModalCreateGamePageRoutingModule;
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


      var _modal_create_game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal-create-game.page */
      "./src/app/pages/game/modal-create-game/modal-create-game.page.ts");

      var routes = [{
        path: '',
        component: _modal_create_game_page__WEBPACK_IMPORTED_MODULE_3__["ModalCreateGamePage"]
      }];

      var ModalCreateGamePageRoutingModule = function ModalCreateGamePageRoutingModule() {
        _classCallCheck(this, ModalCreateGamePageRoutingModule);
      };

      ModalCreateGamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModalCreateGamePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/game/modal-create-game/modal-create-game.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/game/modal-create-game/modal-create-game.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ModalCreateGamePageModule */

    /***/
    function srcAppPagesGameModalCreateGameModalCreateGameModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalCreateGamePageModule", function () {
        return ModalCreateGamePageModule;
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


      var _modal_create_game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal-create-game-routing.module */
      "./src/app/pages/game/modal-create-game/modal-create-game-routing.module.ts");
      /* harmony import */


      var _modal_create_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal-create-game.page */
      "./src/app/pages/game/modal-create-game/modal-create-game.page.ts");

      var ModalCreateGamePageModule = function ModalCreateGamePageModule() {
        _classCallCheck(this, ModalCreateGamePageModule);
      };

      ModalCreateGamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_create_game_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCreateGamePageRoutingModule"]],
        declarations: [_modal_create_game_page__WEBPACK_IMPORTED_MODULE_6__["ModalCreateGamePage"]]
      })], ModalCreateGamePageModule);
      /***/
    },

    /***/
    "./src/app/pages/game/modal-create-game/modal-create-game.page.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/game/modal-create-game/modal-create-game.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameModalCreateGameModalCreateGamePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-wp {\n  position: fixed;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background-color: #25d366;\n  color: #FFF;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 30px;\n  box-shadow: 2px 2px 3px #999;\n  padding: 10px;\n}\n.btn-wp ion-icon {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9tb2RhbC1jcmVhdGUtZ2FtZS9tb2RhbC1jcmVhdGUtZ2FtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNHLGVBQUE7RUFDSCw0QkFBQTtFQUNHLGFBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvbW9kYWwtY3JlYXRlLWdhbWUvbW9kYWwtY3JlYXRlLWdhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13cHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICByaWdodDogMzBweDtcblx0d2lkdGg6NjBweDtcblx0aGVpZ2h0OjYwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IzI1ZDM2Njtcblx0Y29sb3I6I0ZGRjtcblx0Ym9yZGVyLXJhZGl1czo1MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXNpemU6MzBweDtcblx0Ym94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/game/modal-create-game/modal-create-game.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/game/modal-create-game/modal-create-game.page.ts ***!
      \************************************************************************/

    /*! exports provided: ModalCreateGamePage */

    /***/
    function srcAppPagesGameModalCreateGameModalCreateGamePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalCreateGamePage", function () {
        return ModalCreateGamePage;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ModalCreateGamePage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(ModalCreateGamePage, _src_app_models_modal);

        var _super = _createSuper(ModalCreateGamePage);

        function ModalCreateGamePage(viewCtrl, location) {
          var _this;

          _classCallCheck(this, ModalCreateGamePage);

          _this = _super.call(this, location, viewCtrl);
          _this.viewCtrl = viewCtrl;
          return _this;
        }

        _createClass(ModalCreateGamePage, [{
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss(); //throw new Error("Method not implemented.");
          }
        }, {
          key: "initObject",
          value: function initObject() {//throw new Error("Method not implemented.");
          }
        }]);

        return ModalCreateGamePage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_2__["ModalForm"]);

      ModalCreateGamePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"]
        }];
      };

      ModalCreateGamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-create-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-create-game.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/modal-create-game/modal-create-game.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-create-game.page.scss */
        "./src/app/pages/game/modal-create-game/modal-create-game.page.scss"))["default"]]
      })], ModalCreateGamePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-game-modal-create-game-modal-create-game-module-es5.js.map