(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-payment-team-payment-team-module~teams-teams-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-team/payment-team.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-team/payment-team.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentTeamPaymentTeamPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-button color=\"dark\" (click)=\"close()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title>Registrar mi equipo</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segmentSelect\" >\n    \n    <ion-segment-button value=\"1\" [disabled]=\"!tabsEnables.name\">\n      <ion-label>1</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" [disabled]=\"!tabsEnables.admins\">\n      <ion-label>2</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\" [disabled]=\"!tabsEnables.payment\">\n      <ion-label>3</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  \n\n\n    <div *ngIf=\"segmentSelect == '1'\">\n\n      <ion-card>\n        <ion-card-content>\n          <div class=\"title msj\">\n            Verifíca el nombre del equipo\n          </div>\n\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\" >Nombre</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"team.name\" name=\"name\"></ion-input>\n            </ion-item>\n\n            <ion-text color=\"danger\">{{errorName}}</ion-text>\n\n          </ion-list>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('2')\">\n                  Siguiente\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-content>\n      </ion-card>\n\n\n     \n\n    </div>\n\n\n    <div *ngIf=\"segmentSelect == '2'\">\n\n      \n\n      <ion-card>\n        <ion-card-content>\n          <div class=\"title msj\">\n            Seleccionar administradores \n          </div>\n\n          <ion-list>\n            <div class=\"admins\" >\n              <ion-list-header  class=\"bg-l1\" >\n                <ion-label>Añadir administradores</ion-label>\n                <button item-end ion-button color=\"danger\" (click)=\"addAdmins($event)\">\n                  <ion-icon name=\"person-add-outline\"></ion-icon>\n                </button>\n              </ion-list-header>\n\n              <ion-text color=\"danger\">{{errorAdmins}}</ion-text>\n        \n              <ion-list  *ngFor=\"let item of team.admins\"  >\n                <ion-item>  {{item.text ? item.text : item.last_name +' '+ item.first_name}}</ion-item>\n              </ion-list>\n            </div>\n\n          </ion-list>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('1',true)\" >\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                  Atras\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('3')\">\n                  Siguiente\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div *ngIf=\"segmentSelect == '3'\">\n\n      <ion-card>\n        <ion-card-content>\n          <div class=\"title msj\">\n            Informacion sobre el registro\n          </div>\n\n          <div class=\"cho-container msj-xs text\">\n            Una vez registrado el equipo los administradores recibirán una notificación y podrán modificar los demás datos. \n          </div>\n\n          <div class=\"cho-container msj-xs text\">\n            Te recordamos que para que los administradores puedan realizar modificaciones, primero deben abonar la suscripción del equipo. \n          </div>\n\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"changedSegment('2',true)\">\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\n                  Atras\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"full\" (click)=\"saveTeam()\">\n                  Finalizar\n                  <ion-icon name=\"checkmark-done-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-content>\n      </ion-card>\n\n\n      \n\n    </div>\n\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment-team/payment-team.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment-team/payment-team.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPaymentTeamPaymentTeamPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  color: white;\n  margin: 10px;\n  background: #56565669;\n  padding: 10px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 1px solid #797575;\n}\n\n.text {\n  padding: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC10ZWFtL3BheW1lbnQtdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC10ZWFtL3BheW1lbnQtdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgLy9mb250LXNpemU6IHgtbGFyZ2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTY1NjU2Njk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzk3NTc1O1xufVxuXG4udGV4dHtcbiAgICBwYWRkaW5nOiAxM3B4Oztcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/payment-team/payment-team.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment-team/payment-team.page.ts ***!
      \*********************************************************/

    /*! exports provided: PaymentTeamPage */

    /***/
    function srcAppPagesPaymentTeamPaymentTeamPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentTeamPage", function () {
        return PaymentTeamPage;
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


      var _search_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../search/search.page */
      "./src/app/pages/search/search.page.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");

      var PaymentTeamPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(PaymentTeamPage, _src_app_models_modal);

        var _super = _createSuper(PaymentTeamPage);

        function PaymentTeamPage(reqest, viewCtrl, modalController, dialogService, authUser, router, location, chatService) {
          var _this;

          _classCallCheck(this, PaymentTeamPage);

          _this = _super.call(this, location, viewCtrl);
          _this.reqest = reqest;
          _this.viewCtrl = viewCtrl;
          _this.modalController = modalController;
          _this.dialogService = dialogService;
          _this.authUser = authUser;
          _this.router = router;
          _this.chatService = chatService;
          _this.team = {
            id: '',
            name: '',
            admins: []
          };
          _this.tabsEnables = {
            info: true,
            name: true,
            admins: false,
            payment: false
          };
          _this.segmentSelect = '1';
          _this.errorName = '';
          _this.errorAdmins = '';
          _this.modelMercadoPago = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('MercadoPagoService', reqest);
          _this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', reqest);

          _this.team.admins.push({
            text: "".concat(authUser.user.completeName, " (").concat(authUser.user.email, ")"),
            id: authUser.user.id
          }); //Mercadopago.setPublishableKey(environment.mp_public_key); 


          return _this;
        }

        _createClass(PaymentTeamPage, [{
          key: "initObject",
          value: function initObject() {}
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {//this.segmentSelect = $event.detail.value;
            //this.changedSegment($event.detail.value , this.segmentSelect < $event.detail.value)
          }
        }, {
          key: "changedSegment",
          value: function changedSegment(segment) {
            var isBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            console.log(segment);

            if (isBack) {
              this.segmentSelect = segment;
              return;
            }

            switch (segment) {
              case '2':
                this.verifyNameSelect();
                return;

              case '3':
                this.verifyAdmins();
                return;

              default:
                this.segmentSelect = segment;
            }
          }
        }, {
          key: "preferenceApi",
          value: function preferenceApi() {
            var _this2 = this;

            console.log('preference api');
            this.modelMercadoPago.api_function('createPreference', {}).subscribe(function (response) {
              console.log(response);

              if (response['status'] == 'success') {
                var preference_id = response['data'];
                console.log('pref', preference_id);

                _this2.mp.checkout({
                  preference: {
                    id: preference_id
                  },
                  render: {
                    container: '.cho-container',
                    label: 'Pagar'
                  }
                });
              }
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "verifyNameSelect",
          value: function verifyNameSelect() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.team.name == '')) {
                        _context.next = 4;
                        break;
                      }

                      this.errorName = 'El campo nombre es Obligario.';
                      this.tabsEnables.admins = false;
                      return _context.abrupt("return");

                    case 4:
                      _context.next = 6;
                      return this.dialogService.loadingProgres('verificando nombre');

                    case 6:
                      console.log('team', this.team);
                      this.modelTeam.api_function('exist', this.team).subscribe(function (response) {
                        _this3.dialogService.dimissLoaging();

                        if (response['data']) {
                          _this3.errorName = "El equipo ".concat(_this3.team.name, " ya se encuentra Registrado.");
                          _this3.tabsEnables.admins = false;
                          return;
                        }

                        _this3.errorName = '';
                        _this3.segmentSelect = '2';
                        _this3.tabsEnables.admins = true;
                        console.log(response);
                      }, function (error) {
                        console.log(error);

                        _this3.dialogService.dimissLoaging();
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "verifyAdmins",
          value: function verifyAdmins() {
            this.errorAdmins = '';

            if (this.team.admins.length > 0) {
              this.segmentSelect = '3';
              this.tabsEnables.payment = true; //this.preferenceApi();
            } else {
              this.errorAdmins = 'Debe añadir como minimo un Administrador';
              this.tabsEnables.payment = false;
            }
          }
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
          key: "addAdmins",
          value: function addAdmins(e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var adminsDefault, modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.errorAdmins = '';
                      e.preventDefault();
                      console.log('Add admins');
                      adminsDefault = this.team.admins;
                      _context2.next = 6;
                      return this.modalController.create({
                        component: _search_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"],
                        componentProps: {
                          cancellable: false,
                          model: 'User',
                          "function": 'searchUser',
                          multiple: true,
                          textSearch: 'Nombre o email',
                          listSelect: adminsDefault
                        }
                      });

                    case 6:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data.items) {
                          var list = data.data['items']; //console.log('users_select' , list);

                          _this4.team.admins = list;
                        }
                      });
                      _context2.next = 10;
                      return modal.present();

                    case 10:
                      return _context2.abrupt("return", _context2.sent);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "saveTeam",
          value: function saveTeam() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.dialogService.loadingProgres('Registrando');

                    case 2:
                      this.modelTeam.api_create(this.team).subscribe(function (response) {
                        _this5.dialogService.dimissLoaging();

                        if (response['status'] == 'success') {
                          _this5.dialogService.showToast('Equipo registrado', null, 'success');

                          var team = response['Team'];

                          _this5.authUser.user.teams.push(team);

                          _this5.authUser.saveUser();

                          _this5.dismiss(team); //this.router.navigateByUrl('/team/profile/'  + team.id);

                        }
                      }), function (error) {
                        console.error(error);

                        _this5.dialogService.dimissLoaging();
                      };

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return PaymentTeamPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__["ModalForm"]);

      PaymentTeamPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]
        }];
      };

      PaymentTeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-team',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payment-team.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-team/payment-team.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payment-team.page.scss */
        "./src/app/pages/payment-team/payment-team.page.scss"))["default"]]
      })], PaymentTeamPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-payment-team-payment-team-module~teams-teams-module-es5.js.map