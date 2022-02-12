(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~games-games-module~pages-game-create-game-admin-create-game-admin-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/create-game-admin/create-game-admin.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/create-game-admin/create-game-admin.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameCreateGameAdminCreateGameAdminPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuevo Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceGame.errorsForm.clear()\" >\n\n    <ion-item (click)=\"selectTeam(myTeams,'v')\">\n      <ion-label position=\"stacked\">Mi Equipo</ion-label>\n      <ion-input type=\"text\"   readonly >{{teamsSelect.v ? teamsSelect.v['name'] : ''}}</ion-input>\n      <ion-icon class=\"fle\" name=\"chevron-forward-outline\"></ion-icon>\n\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_team') }}</div>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"stacked\">Contrario</ion-label>\n      <ion-input type=\"text\"  (click)=\"selectTeam(teams,'l')\"  readonly >{{teamsSelect.l ? teamsSelect.l['name'] : ''}}</ion-input>\n      <ion-icon class=\"fle\" name=\"chevron-forward-outline\"></ion-icon>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_team') }}</div>\n    </ion-item>\n\n    <br>\n\n    <ion-item *ngIf=\" teamsSelect.l && teamsSelect.l['id'] == -1 \">\n      <ion-label position=\"floating\" >Nombre de equipo nuevo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.other_team\" name=\"other_team\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('other_team') }}</div>\n\n    <br>\n\n    <ion-item *ngIf=\"teamsSelect.v && teamsSelect.l\">\n      <ion-label position=\"floating\">Equipo Local</ion-label>\n      <ion-select [(ngModel)]=\"teamLocal\" name=\"v_team\" (ionChange)=\"selectLocal($event)\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" >\n        <ion-select-option value=\"v\" >{{ teamsSelect.v['name'] }}</ion-select-option>\n        <ion-select-option value=\"l\" >{{ teamsSelect.l['name'] }}</ion-select-option>\n\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_team') }}</div>\n    </ion-item>\n\n    <br>\n\n    <div *ngIf=\"teamLocal\" class=\"ion-text-center\" >\n      <ion-button (click)=\"selectField()\">{{game.field ? 'Modificar' : 'Añadir'}} ubicación</ion-button>\n\n\n      <app-show-map\n      *ngIf=\"game.field\"\n      [field]=\"game.field\"\n      ></app-show-map>\n\n      <ion-input *ngIf=\"false\" type=\"text\" [(ngModel)]=\"game.location\" name=\"location\"></ion-input>\n    </div>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('location') }}</div>\n\n    <br>\n\n    <ion-item>\n      <ion-label>HH:mm</ion-label>\n      <ion-datetime \n        [(ngModel)]=\"game.time\" \n        displayFormat=\"HH:mm \"  \n        name=\"time\">\n      </ion-datetime>\n    </ion-item>\n\n  \n\n    <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime \n        name=\"date\"\n        [(ngModel)]=\"game.date\"\n        displayFormat=\"DD-MM-YYYY\"\n        ></ion-datetime>\n    </ion-item>\n\n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

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
    "./src/app/pages/game/create-game-admin/create-game-admin.page.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/game/create-game-admin/create-game-admin.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameCreateGameAdminCreateGameAdminPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fle {\n  position: absolute;\n  right: 3px;\n  top: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9jcmVhdGUtZ2FtZS1hZG1pbi9jcmVhdGUtZ2FtZS1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYW1lL2NyZWF0ZS1nYW1lLWFkbWluL2NyZWF0ZS1nYW1lLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgdG9wOiA0NSU7O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/game/create-game-admin/create-game-admin.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/game/create-game-admin/create-game-admin.page.ts ***!
      \************************************************************************/

    /*! exports provided: CreateGameAdminPage */

    /***/
    function srcAppPagesGameCreateGameAdminCreateGameAdminPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGameAdminPage", function () {
        return CreateGameAdminPage;
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


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/photo.service */
      "./src/app/services/photo.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");
      /* harmony import */


      var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/transfer-data.service */
      "./src/app/services/transfer-data.service.ts");
      /* harmony import */


      var _team_modal_filter_modal_filter_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../team/modal-filter/modal-filter.page */
      "./src/app/pages/team/modal-filter/modal-filter.page.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _field_list_fields_list_fields_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../field/list-fields/list-fields.page */
      "./src/app/pages/field/list-fields/list-fields.page.ts");

      var CreateGameAdminPage = /*#__PURE__*/function () {
        function CreateGameAdminPage(request, dialogService, viewCtrl, photoService, navParams, authUser, util, chatService, transfData) {
          _classCallCheck(this, CreateGameAdminPage);

          var _a;

          this.request = request;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.photoService = photoService;
          this.authUser = authUser;
          this.util = util;
          this.chatService = chatService;
          this.transfData = transfData;
          this.myTeams = [];
          this.teams = [];
          this.teamsSelect = {
            v: '',
            l: ''
          };
          this.numbGoals = [];
          this.customDayShortNames = ["s\xF8n"];
          this.status = ['Pendiente', 'Suspendido', 'Jugado', 'Created'];
          this.customActionSheetOptions = {
            header: 'Equipo Local'
          };

          this.myDateFilter = function (d) {
            var day = d.getDay(); // Prevent Saturday and Sunday from being selected.

            return day == 6;
          };

          this.serviceGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Game', request);
          this.serviceTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Team', request); //this.serviceTeam.setModel('Team');

          this.id = navParams.get('id');
          this.toDate = (_a = navParams.get('date')) !== null && _a !== void 0 ? _a : util.setFormatMoment(new Date(), 'YYYY-MM-DD');
          console.log('date', this.toDate);
          this.test();
        }

        _createClass(CreateGameAdminPage, [{
          key: "test",
          value: function test() {
            console.log('day default :', moment__WEBPACK_IMPORTED_MODULE_12__().isoWeekday());
            console.log('day 4 :', moment__WEBPACK_IMPORTED_MODULE_12__().isoWeekday(6));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.myTeams = this.authUser.user.teams;
            this.teamsSelect.v = this.myTeams[0];
            this.serviceTeam.api_function('getAllTeamsSelect').subscribe(function (data) {
              if (data['data']) {
                _this.teams = data['data'];
                console.log('teams -> ', _this.teams);

                _this.teams.push({
                  'id': -1,
                  'name': 'Equipo nuevo'
                });

                console.log('add Otro'); //this.serviceGame.setModel('Game');
              }
            });

            for (var i = 0; i <= 30; i++) {
              this.numbGoals.push(i);
            }

            this.initObject();
          }
        }, {
          key: "initObject",
          value: function initObject() {
            var _this2 = this;

            this.game = {
              l_team: '',
              v_team: '',
              l_goals: 0,
              v_goals: 0,
              time: '15:00',
              date: this.toDate,
              location: '',
              description: '',
              status: 'Pendiente',
              field: null,
              field_id: ''
            };

            if (this.id) {
              this.serviceGame.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this2.game = data['Game'];
                }
              });
            } //this.chatService.show();

          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.game.date = this.util.setFormatMoment(this.game.date, 'YYYY-MM-DD');
                      _context.prev = 1;
                      this.valid();
                      _context.next = 9;
                      break;

                    case 5:
                      _context.prev = 5;
                      _context.t0 = _context["catch"](1);
                      this.dialogService.showToast(_context.t0.message, 'Error', 'danger');
                      return _context.abrupt("return");

                    case 9:
                      _context.next = 11;
                      return this.dialogService.loadingProgres();

                    case 11:
                      this.game.team_creator = this.teamsSelect['v']['id'];
                      this.serviceGame.api_function('createGameAdmin', this.game).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          //this.dialogService.presentAlertAcept('Felicidades...','El partido se ha registrado correctamente. Será visible en la lista de partidos cuando el administrador general o uno de los administradores del equipo contrario confirme el partido. Recibirás una notificación cuando esto suceda',()=>{
                          _this3.dialogService.showToast('Partido registrado');

                          _this3.dismiss(response['data']); //})

                        } else if (response['status'] == 'error') {
                          _this3.dialogService.showToast(response['errorValidaciones'] ? response['errorValidaciones'] : response['mensaje'], '', 'danger', 5000);
                        }

                        _this3.dialogService.dimissLoaging();
                      }, function (error) {
                        console.log(error);

                        _this3.dialogService.dimissLoaging();

                        _this3.dialogService.showToast(error.error.mensaje, '', 'danger', 7000);
                      }, function () {
                        _this3.dialogService.dimissLoaging();
                      });

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 5]]);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss(game) {
            this.chatService.hide();
            this.viewCtrl.dismiss({
              game: game
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.chatService.hide();
            this.viewCtrl.dismiss();
          }
        }, {
          key: "print",
          value: function print() {
            console.log(this.game);
          }
        }, {
          key: "selectLocal",
          value: function selectLocal(event) {
            var e = event.detail.value;
            this.game.l_team = this.teamsSelect[e].id;
            var i = e == 'v' ? 'l' : 'v';
            this.game.v_team = this.teamsSelect[i].id;

            if (this.teamsSelect[e]) {
              this.setField(this.teamsSelect[e]['field']);
            }

            console.log(this.game);
          }
        }, {
          key: "clearLocal",
          value: function clearLocal() {
            this.teamLocal = null;
            this.game.l_team = '';
            this.game.v_team = '';
          }
        }, {
          key: "valid",
          value: function valid() {
            console.log('valid Game');

            if (!this.teamsSelect.l) {
              throw new Error('No ha seleccionado el equipo contrario');
            }

            if (this.teamsSelect.v['id'] == this.teamsSelect.l['id']) {
              throw new Error('Los equipos enfrentados deben ser diferentes');
            }

            if (this.teamsSelect.l['id'] == -1 && !this.game.other_team) {
              throw new Error('Debes añadir el nombre del Equipo Nuevo.');
            }

            if (!this.teamLocal) {
              throw new Error('Debe seleccionar el equipo local');
            }

            if (!this.game.date) {
              throw new Error('Debe seleccionar la fecha.');
            }

            if (moment__WEBPACK_IMPORTED_MODULE_12__(this.game.date).isoWeekday() != 6) {
              throw new Error('La fecha seleccionada debe ser de un SÁBADO.');
            }
          }
        }, {
          key: "selectTeam",
          value: function selectTeam(teams, typeTeam) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.transfData.setData('teams', teams);
                      _context2.next = 3;
                      return this.viewCtrl.create({
                        component: _team_modal_filter_modal_filter_page__WEBPACK_IMPORTED_MODULE_11__["ModalFilterPage"]
                      });

                    case 3:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        var team = data.data['team'];

                        if (team) {
                          _this4.teamsSelect[typeTeam] = team;

                          _this4.clearLocal();
                        }
                      });
                      _context2.next = 7;
                      return modal.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectField",
          value: function selectField() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.transfData.setData('isSelect', true);
                      _context3.next = 3;
                      return this.viewCtrl.create({
                        component: _field_list_fields_list_fields_page__WEBPACK_IMPORTED_MODULE_13__["ListFieldsPage"]
                      });

                    case 3:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('close modal select field');

                        if (data.data && data.data['field']) {
                          var field = data.data['field'];

                          _this5.setField(field); //this.game.field = data.data['field'];
                          //this.game.field_id = this.game.field.id;

                        }
                      });
                      _context3.next = 7;
                      return modal.present();

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "setField",
          value: function setField(field) {
            if (field) {
              this.game.field = field;
              this.game.field_id = field.id;
            } else {
              this.game.field = null;
              this.game.field_id = null;
            }
          }
        }]);

        return CreateGameAdminPage;
      }();

      CreateGameAdminPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]
        }, {
          type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_10__["TransferDataService"]
        }];
      };

      CreateGameAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-game-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-game-admin.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/create-game-admin/create-game-admin.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-game-admin.page.scss */
        "./src/app/pages/game/create-game-admin/create-game-admin.page.scss"))["default"]]
      })], CreateGameAdminPage);
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
          var _this6;

          _classCallCheck(this, ModalFilterPage);

          _this6 = _super.call(this, location, viewCtrl);
          _this6.viewCtrl = viewCtrl;
          _this6.location = location;
          _this6.dataTranfer = dataTranfer;
          _this6.teams = [];
          _this6.oldTeams = [];
          _this6.textSearch = '';
          _this6.teams = dataTranfer.getData('teams');
          _this6.oldTeams = _toConsumableArray(_this6.teams);
          return _this6;
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
            var _this7 = this;

            return this.teams.filter(function (team) {
              return team.name.toUpperCase().includes(_this7.textSearch.toUpperCase()) || team.id == -1;
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
//# sourceMappingURL=default~games-games-module~pages-game-create-game-admin-create-game-admin-module-es5.js.map