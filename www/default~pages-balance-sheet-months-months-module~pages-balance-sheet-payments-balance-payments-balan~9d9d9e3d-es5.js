(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/balance/user-balance/user-balance.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/balance/user-balance/user-balance.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBalanceUserBalanceUserBalanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"balanceSheet\">\n  <ion-card-header>\n    <ion-card-title>\n      {{balanceSheet.user.completeName}}\n    </ion-card-title>\n    <ion-card-subtitle  class=\"ion-float-right\">\n      <div *ngIf=\"balanceSheet.balance_old < 0\">\n        Saldo inicial: <b>{{balanceSheet.balance_old}}</b>\n      </div>\n      <div>\n        Saldo actual: <b>{{balanceSheet.balance}}</b>\n      </div>\n      <div *ngIf=\"balanceSheet.balance_old < 0\" >\n        Saldo Total: <b>{{balanceSheet.balance + balanceSheet.balance_old }}</b>\n      </div>\n    </ion-card-subtitle>\n  </ion-card-header>\n \n</ion-card>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/btn-back-page/btn-back-page.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/btn-back-page/btn-back-page.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBtnBackPageBtnBackPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-buttons slot=\"start\">\n  <ion-back-button></ion-back-button>\n\n  <ion-button color=\"dark\" (click)=\"navCtr.back()\" *ngIf=\"!hasHistory\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n\n</ion-buttons>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"margin-top: 20px;;\">\n\n  <div *ngIf=\"withTitle\">\n    <ion-card-title class=\"ion-text-center title\">Comentarios</ion-card-title>\n    <div class=\"separator\"></div>\n  </div>\n\n  <div> \n\n    <ion-list lines=\"none\" style=\"margin: 0px;padding: 0px;\">\n      <ion-item *ngIf=\"listComments.length < 1\">\n        <ion-note style=\"font-size: large; margin: 15px;\">Se el primero en comentar!!!</ion-note>\n      </ion-item>\n      <ion-item  *ngFor=\"let item of listComments\" class=\"team-list\">\n        <div class=\"comment-item\" *ngIf=\"!item.edit\">\n          <ion-button class=\"menu-right\"fill=\"clear\" (click)=\"openMenuComment(item)\" *ngIf=\"authUser.user.id == item.user_id\">\n            <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n          </ion-button>\n\n          <ion-thumbnail slot=\"start\" class=\"comment-image\">\n            <ion-img\n              (click)=\"openViewer(item)\"\n              class=\"comment-image\" \n              [src]=\"getPhoto(item)\"\n              style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n            </ion-img>\n          </ion-thumbnail>\n\n          <div class=\"comment-data\">\n            <div class=\"comment-user\">\n              <ion-text color=\"dark\">\n                <a [routerLink]=\"'/users/' + item.user.id +'/profile'\" style=\"text-decoration: blink;\" >\n                  {{item.user.last_name }} {{item.user.first_name }}\n                </a>\n              </ion-text>\n            </div>\n            <div class=\"comment-body first-uppercase\">\n              <ion-text color=\"light\">\n                {{item.body}}\n              </ion-text>\n            </div>\n            <div class=\"comment-date\" >\n              <ion-text color=\"light\">\n                {{ formatDate(item.created_at)}}\n              </ion-text>\n            </div>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"item.edit\" class=\"comment-edit\" >\n\n          <ion-text>Editar comentario</ion-text>\n\n          <ion-textarea  class=\"form-control editor-text first-uppercase\" [(ngModel)]=\"commentEdit.body\" name=\"body\"  placeholder=\"Añade un comentario...\" ></ion-textarea>\n          <div class=\"content-right comment-edit-bts\">\n            <ion-button slot=\"end\" (click)=\"editComment()\" [disabled]=\"updatingComment\">\n              <ion-spinner name=\"lines\" *ngIf=\"updatingComment\" ></ion-spinner>\n              Actualizar\n            </ion-button>\n            <ion-button slot=\"end\" color=\"light\" (click)=\"cancelEdit(item)\"[disabled]=\"updatingComment\" >Cancelar</ion-button>\n          </div>\n        </div>\n\n       \n        \n\n       \n      </ion-item>\n    </ion-list>\n\n    <div class=\"content-new\">\n        <form (ngSubmit)=\"send()\" >\n\n          <div class=\"content-comment\">\n            <div class=\"content-comment-text\">\n              <ion-textarea  class=\"editor-text first-uppercase\" [(ngModel)]=\"comment.body\" name=\"body\"  placeholder=\"Añade un comentario...\" ></ion-textarea>\n            </div>\n            <div class=\"content-comment-btn ion-align-self-end\">\n                <ion-fab-button  class=\"edditor-send\" size=\"small\" color=\"primary\" type=\"submit\" (click)=\"send()\"  [disabled]=\"sending\">\n                  <ion-icon name=\"send-sharp\" *ngIf=\"!sending\"></ion-icon>\n                  <ion-spinner name=\"lines\" *ngIf=\"sending\" ></ion-spinner>\n\n                </ion-fab-button>\n            </div>\n          </div>\n\n        \n      </form>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-game/create-game.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-game/create-game.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCreateGameCreateGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventEventListEventListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"(events.length && team_l && team_v) || isAdmin\" >\n  <ion-card-header class=\"bg-l1\">\n    <ion-card-title>Sucesos</ion-card-title>\n  </ion-card-header>\n    <ion-list >\n\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngIf=\"team_l\"  class=\"ion-text-start col-l\">\n            <ion-text color=\"light\">\n              {{team_l.name}}\n            </ion-text>\n          </ion-col>\n          <ion-col *ngIf=\"team_v\"  class=\"ion-text-end col-v\">\n            <ion-text color=\"light\">\n              {{team_v.name}}\n            </ion-text>          \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"separator\"></div>\n\n      <ion-list-header *ngIf=\"events.length == 0\"  color=\"light\">\n        <ion-label>Sin Sucesos</ion-label>\n      </ion-list-header> \n\n   \n      <ion-item *ngFor=\"let item of events ; let i = index\"  class=\"bg-l0\">\n          \n        <ion-label class=\"{{item.team.id == team_v.id ? 'item-v' : ''}} {{item.team.id == team_l.id ? 'item-l' : ''}}\" >\n          <h3  [ngClass]=\"{'ion-text-end' : item.team.id == team_v.id}\">\n            <img *ngIf=\"item.type_event.icon\" src=\"assets/images/{{item.type_event.icon}}\"  width=\"20px\">\n            {{item.time}}´ \n            <b  >{{item.type_event.name}}  </b>\n            <a  [routerLink]=\"'/player/profile/' + item.player.id\" routerDirection=\"forward\" >\n              {{item.player.name}}\n            </a>\n          </h3>\n        </ion-label>\n\n        <ion-buttons slot=\"start\" *ngIf=\"(canEdit && team_admin.id == item.team.id) || (twoTeam && canEdit)\">\n          <ion-button (click)=\"confirmDelete(item,i)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n      \n    </ion-list>\n\n    <ion-button *ngIf=\"canEdit\"  fill=\"outline\" expand=\"block\" (click)=\"addEvent()\">\n      Nuevo Suceso\n    </ion-button>\n\n    <div class=\"ion-text-center\" *ngIf=\"team_admin\">\n      <ion-chip class=\"chip-admin\" color=\"secondary\" *ngIf=\"isAdmin\">\n        <ion-label class=\"msj-is-admin\">\n          Eres el administrador de <b>{{team_admin.name}} </b>, puedes administrar lo sucesos de tu equipo al activar la edición.\n        </ion-label>\n        <ion-toggle [(ngModel)]=\"canEdit\"></ion-toggle>\n  \n      </ion-chip>\n    </div>\n\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  list works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/preview/preview.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/preview/preview.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventPreviewPreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"5\"></ion-col>\n    <ion-col size=\"5\"></ion-col>\n  </ion-row>\n</ion-grid>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/field/show-map/show-map.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/field/show-map/show-map.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFieldShowMapShowMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n    id=\"mapId\" \n    style=\"width: 100%; height: {{field ? '300' : '0'}}px;\"\n    (click)=\"show(field)\">\n</div>\n\n<div *ngIf=\"showDirection && field\" class=\"ion-text-right\" >\n    \n    <ion-button (click)=\"shareW()\" >\n        <ion-icon name=\"logo-whatsapp\"></ion-icon>\n        Enviar ubicación\n    </ion-button>\n    \n    <ion-button (click)=\"getRoute()\" >\n        <ion-icon name=\"navigate-outline\"></ion-icon>\n        Como llegar\n    </ion-button>\n\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/old-next-game/old-next-game.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/old-next-game/old-next-game.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsGameOldNextGameOldNextGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"game\" class=\"content \" >\n  <ion-text class=\"desc\" *ngIf=\"withTitle\" >{{ game.status == 'Pendiente' ? 'Próximo partido' : 'Ultimo partido' }}</ion-text>\n  <div  class=\"content-temas bg-l2 ion-activatable ripple-parent\"  [routerLink]=\"routerGoTo(game)\">\n    <div class=\"teams\">\n      <div>\n        <ion-item>\n          <ion-avatar slot=\"start\" class=\"esc\">\n            <ion-img \n              class=\"esc\"\n              [src]=\"game.team_l.shield ? game.team_l.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n            </ion-img>\n          </ion-avatar>\n          <ion-label>{{game.team_l.name}}</ion-label>\n          <ion-text slot=\"end\" *ngIf=\"game.status != 'Pendiente'\" >{{game.l_goals}}</ion-text>\n        </ion-item>\n      </div>\n  \n  \n      <div>\n        <ion-item>\n          <ion-avatar slot=\"start\" class=\"esc\">\n            <ion-img \n            class=\"esc\"\n              [src]=\"game.team_v.shield ? game.team_v.shield.urlCompleteThumb : 'assets/images/esc.png'\">\n            </ion-img>\n          </ion-avatar>\n          <ion-label>{{game.team_v.name}}</ion-label>\n          <ion-text slot=\"end\" *ngIf=\"game.status != 'Pendiente'\"  >{{game.v_goals}}</ion-text>\n        </ion-item>\n      </div>\n    </div>\n\n\n    <div  class=\"center ion-text-center date\">\n      <ion-badge class=\"status\" [color]=\"colorStatus\">{{game.status}}</ion-badge>\n\n      <div>{{util.setFormatMoment(game.date,'DD/M/YYYY')}}</div>\n      <div class=\"hs\">{{ util.formatHours( game.time )}}</div>\n    </div>\n\n    <ion-ripple-effect></ion-ripple-effect>\n\n    \n  </div>\n  <div class=\"det\" *ngIf=\"game.status == 'Suspendido' && game.description != ''\">\n    <b>Motivo: </b> {{game.description}}\n  </div>\n  <div *ngIf=\"userAuth.isAdmin()\" class=\"ion-text-right\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showEdit(game)\">\n        <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"confirmDelete(game)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/game/game.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/game/game.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemsListGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card >\n    <div class=\"ion-padding custom-skeleton\" id=\"{{game.id}}\">\n      <div class=\"game\" >\n        <div class=\"team-list contenedor\">\n          <div class=\"team\">\n            <ion-text >\n              <h3 class=\"text-name fs-team-game\">{{game.team_l.name}}</h3>\n            </ion-text>\n            <ion-avatar slot=\"start\">\n              <ion-img \n              [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/esc.png'\"\n              ></ion-img>\n            </ion-avatar>\n          </div>\n\n          <div class=\"vs ion-align-items-center\">\n            <div>\n              <ion-text color=\"ligth\">Vs</ion-text>\n            </div>\n          </div>\n\n          <div class=\"team\">\n            <ion-text >\n              <h3 class=\"text-name fs-team-game\">{{game.team_v.name}}</h3>\n            </ion-text>\n            <ion-avatar slot=\"start\">\n              <ion-img \n              [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/esc.png'\"\n              ></ion-img>\n            </ion-avatar>\n          </div>\n        </div>\n      </div>\n      <div class=\"date ion-text-center\"  style=\"width: 100%\">\n        <ion-text color=\"dark\"  class=\"io-float-left\">\n          <ion-icon name=\"timer-outline\" color=\"primary\"></ion-icon>      \n          {{withDate ? util.setFormatMoment(game.date,'ddd DD MMM') : ''}}   {{ util.formatHours( game.time )  }}\n        </ion-text>\n\n        <ion-text class=\"ion-float-right\" *ngIf=\"game.comments_count >= 0 \">\n          <ion-icon name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>      \n          {{game.comments_count}}\n        </ion-text>\n      </div>\n    </div>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/notification/notification.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/notification/notification.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemsListNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item *ngIf=\"notification  && notification.type == 'like'\">\n     <ion-avatar slot=\"start\" >\n      <ion-img \n        [src]=\"notification.autor && notification.autor.photo ? notification.autor.photo.urlCompleteThumb : pathImages.images.profile_user \">\n      </ion-img>\n    </ion-avatar>\n    <ion-label >\n      <h3><b>{{notification.autor.completeName}}</b> ha indicado que le gusta tu publicación.</h3>\n      <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n    </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification  && notification.type == 'comment_publication'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.photo ? notification.autor.photo.urlCompleteThumb : pathImages.images.profile_user\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.completeName}}</b> ha comentado tu publicación.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'admin_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{authUser.user.completeName}}</b> Fuiste asignado como administrador del equipo <b>{{notification.autor.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'create_player'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.name}}</b> Te ha registrado como jugador de su equipo. Puedes ingresar a tu perfil de jugador y modificar algunos datos.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'team_request_to_player'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3>El equipo <b>{{notification.autor.name}}</b> te ha enviado un solicitud para que formes parte de su plantilla de jugadores.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification && notification.type == 'player_accept_request_of_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\" utilPhoto.getPhotoPlayer(notification.autor)\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.name}}</b> aceptó la solicitud y ya es parte de la plantilla de <b>{{notification.object.team.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'player_reject_request_of_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\" utilPhoto.getPhotoPlayer(notification.autor)\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3><b>{{notification.autor.name}}</b> rechazo la solicitud,no desea formar parte de  <b>{{notification.object.team.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification && notification.type == 'player_change_team'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\" utilPhoto.getPhotoPlayer(notification.object)\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n   <h3>El jugador <b>{{notification.object.name}}</b> ha dejado su equipo para formar parte de <b>{{notification.autor.name}}</b>.</h3>\n   <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'payment_success'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3>Pago aprobado</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'payment_pending'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3>Suscripción pendiente de pago</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'payment_failure'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3>Pago a suscripción rechazada</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'new_team_in_game'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3>{{notification.autor.name}} ha creado un partido con un equipo nuevo ({{notification.title}}). Debes registrarlo</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'new_challenge'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.shield ? notification.autor.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3><b>{{notification.autor.name}}</b> Ha creado un partido contra tu equipo <b>({{notification.object.name}})</b>. Debes aceptarlo para que todos puedan verlo.</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n\n<ion-item *ngIf=\"notification && notification.type == 'challenge-confirm'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.object.shield ? notification.object.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3><b>{{notification.object.name}}</b> <ion-text color=\"success\"> Confirmó </ion-text> el partido contra <b>{{notification.autor.name}}</b>.</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification && notification.type == 'challenge-cancel'\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.object.shield ? notification.object.shield.urlCompleteThumb : pathImages.images.escudo\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3><b>{{notification.object.name}}</b>  <ion-text color=\"danger\"> Canceló </ion-text> el partido contra <b>{{notification.autor.name}}</b>.</h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n\n<ion-item *ngIf=\"notification && notification.type == 'new_game_admin' && notification.autor && notification.object\">\n  <ion-avatar slot=\"start\" >\n   <ion-img \n     [src]=\"notification.autor && notification.autor.photo ? notification.autor.photo.urlCompleteThumb : pathImages.images.profile_user\">\n   </ion-img>\n </ion-avatar>\n <ion-label >\n  <h3><b>{{notification.autor.completeName}}</b> ha creado un partido entre <b>{{notification.object.team_l.name }}</b> vs <b>{{notification.object.team_v.name }}</b>. </h3>\n  <ion-text class=\"date\">{{ util.getFormarHumans(notification.created_at)}}</ion-text>\n </ion-label>\n</ion-item>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/publication/publication.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/publication/publication.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemsListPublicationPublicationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card style=\"width: 100%;\"  *ngIf=\"publication\">\n  <ion-card-content>\n    <ion-button class=\"menu-right\"fill=\"clear\" (click)=\"openMenuPublication(publication)\" *ngIf=\"authUser.user.id == publication.user_id\">\n      <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n    </ion-button>\n\n    <div class=\"publication-user\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img\n          (click)=\"showPhotoUser(publication.user.photo)\"\n          class=\"user-image\"\n          [src]=\" utilPhoto.getPhotoUser(publication.user) \"\n          style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n      </ion-img>\n      </ion-thumbnail>\n\n      <div class=\"user\">\n        <div class=\"name\">\n          {{publication.user.last_name}} {{publication.user.first_name}}\n        </div>\n        <div class=\"date\">\n          {{util.getFormarHumans(publication.created_at)}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"publication-text\">\n      <ion-text color=\"dark\">\n        {{publication.text}}\n      </ion-text>\n    </div>\n\n    <div class=\"publication-image ion-text-center\" *ngIf=\"publication.image_id\">\n      <img [src]=\"publication.image.urlComplete\">\n    </div>\n\n    <ion-grid>\n      <ion-row >\n        <ion-col class=\"ion-text-left\"  (click)=\"showPublication(publication , 'likes')\">\n          <ion-text  color=\"dark\" >\n            <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n            {{publication.likes_count}}\n          </ion-text>\n        </ion-col>\n        <ion-col class=\"ion-text-right\" (click)=\"showPublication(publication , 'comments')\">\n          <ion-text >\n            <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n            {{publication.comments_count}}\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <div class=\"separator\"></div>\n\n    <div>\n      <ion-buttons expand=\"full\" >\n        <ion-button expand=\"full\" style=\"width: 50%;\" [color]=\"publication.liked ? 'danger' : 'primary'\" (click)=\"like(publication)\" [disabled]=\"publication.processLike ? true : false\">\n          <ion-icon  name=\"heart-outline\" *ngIf=\"!publication.processLike\" ></ion-icon>\n          <ion-spinner name=\"lines\" *ngIf=\"publication.processLike\" ></ion-spinner>\n        </ion-button>\n        <ion-button expand=\"full\"  style=\"width: 50%;\" color=\"primary\" (click)=\"showPublication(publication , 'comments')\">\n          <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n  </ion-card-content>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/result-item/result-item.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/result-item/result-item.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemsListResultItemResultItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"false\" class=\"item1\">\n  <div class=\"game\" >\n    <div class=\"team-list contenedor\">\n      <div class=\"team\" >\n        <ion-avatar class=\"avatar\">\n          <ion-img \n          [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/shield_team.png'\"\n          ></ion-img>\n        </ion-avatar>\n        <ion-text class=\"name-team\" color=\"dark\">{{game.team_l.name}}</ion-text>\n        <ion-text  class=\"goals-team\" color=\"dark\" >{{game.l_goals}}</ion-text>\n      </div>\n\n\n      <div class=\"team\">\n        <ion-avatar class=\"avatar\">\n          <ion-img \n          [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/shield_team.png'\"\n          ></ion-img>\n        </ion-avatar>\n        <ion-text class=\"name-team fs-team-game\" color=\"dark\">{{game.team_v.name}}</ion-text>\n        <ion-text  class=\"goals-team\" color=\"dark\" >{{game.v_goals}}</ion-text>\n      </div>\n    </div>\n  </div>\n  <div class=\"comment\">\n    <ion-text class=\"ion-float-right\" *ngIf=\"game.comments_count >= 0 \">\n      <ion-icon name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>      \n      {{game.comments_count}}\n    </ion-text>  \n  </div> \n\n  <app-preview></app-preview>\n</ion-card>\n\n<ion-card class=\"item2\">\n  <div class=\"ion-padding custom-skeleton\" [ngClass]=\"{'suspendido' : game.status === 'Suspendido'}\">\n   \n    <div class=\"game\" >\n      <div class=\"team-list contenedor\">\n        <div class=\"team\">\n          <ion-text >\n            <h3 class=\"text-name fs-team-game\">{{game.team_l.name}}</h3>\n          </ion-text>\n          <ion-avatar slot=\"start\">\n            <ion-img \n            [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/esc.png'\"\n            ></ion-img>\n          </ion-avatar>\n        </div>\n\n        <div class=\"goals ion-align-self-center \">\n          <ion-grid style=\"width: 100%;\">\n            <ion-row>\n              <ion-col size=\"5\">\n                {{game.l_goals}}\n              </ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\">\n                <ion-text>-</ion-text>\n              </ion-col>\n              <ion-col size=\"5\">\n                {{game.v_goals}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div class=\"team\">\n          <ion-text >\n            <h3 class=\"text-name fs-team-game\">{{game.team_v.name}}</h3>\n          </ion-text>\n          <ion-avatar slot=\"start\">\n            <ion-img \n            [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/esc.png'\"\n            ></ion-img>\n          </ion-avatar>\n        </div>\n      </div>\n    </div>\n    <div class=\"comment\">\n      <ion-text color=\"dark\" *ngIf=\"game.status === 'Suspendido'\">\n        Partido suspendido\n      </ion-text>\n      <ion-text class=\"ion-float-right\" *ngIf=\"game.comments_count >= 0 \">\n        <ion-icon name=\"chatbubble-ellipses-outline\" color=\"primary\"></ion-icon>      \n        {{game.comments_count}}\n      </ion-text>  \n    </div> \n  \n  </div>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/likes/likes.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/likes/likes.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLikesLikesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\n  <ion-card-content>\n\n    <ion-list>\n\n      <ion-list-header *ngIf=\"likes.length == 0\">\n        <ion-label>\n          No posee me gustas\n        </ion-label>\n      </ion-list-header>\n\n      <ion-item *ngFor=\" let user of likes \" >\n        \n        <ion-thumbnail slot=\"start\" class=\"comment-image\">\n          <ion-img\n            class=\"comment-image\" \n            [src]=\"user && user.photo ? user.photo.urlCompleteThumb : pathImages.images.profile_user\"\n            style=\"border-radius:50%; background-position:center center; background-size:cover;\">\n          </ion-img>\n        </ion-thumbnail>\n        \n        <ion-label>\n            \n            {{user.last_name}} {{user.first_name}}\n          </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </ion-card-content>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-admins/list-admins.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-admins/list-admins.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsListAdminsListAdminsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"admins\" class=\"content\">\n  <ion-text class=\"desc\">\n    Administrador/es:\n  </ion-text>\n  <ion-list class=\"bg-l2\">\n    <ion-item *ngFor=\"let admin of admins\" routerLink=\"/users/{{admin.id}}/profile\">\n      <ion-avatar slot=\"start\" class=\"esc\">\n        <ion-img \n          class=\"esc\"\n          [src]=\"admin.photo ? admin.photo.urlCompleteThumb : 'assets/images/profile.png'\">\n        </ion-img>\n        </ion-avatar>\n      <ion-label>{{admin.completeName}}</ion-label>\n    </ion-item>\n  </ion-list>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-user/menu-user.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-user/menu-user.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuUserMenuUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-card *ngIf=\"authUser.user\">\n  <ion-card-content>\n    <ion-thumbnail slot=\"center\" class=\"content-image center\">\n      <ion-img\n        class=\"image center\" \n        [src]=\"authUser.user && authUser.user.photo ? authUser.user.photo.urlComplete : pathImages.images.profile_user\"\n        style=\"border-radius:50%; background-position:center center; background-size:cover; \">\n      </ion-img>\n    </ion-thumbnail>\n  </ion-card-content>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\">\n      {{authUser.user.last_name}} {{authUser.user.first_name}}\n    </ion-card-title>\n    <ion-card-subtitle class=\"ion-text-center\">\n      {{authUser.user.email}}\n    </ion-card-subtitle>\n  </ion-card-header>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mp/btn-paid/btn-paid.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mp/btn-paid/btn-paid.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMpBtnPaidBtnPaidComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div style=\"margin: 10px;\">\n  <div class=\"cho-container ion-float-right\"></div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-tollbar/my-tollbar.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-tollbar/my-tollbar.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyTollbarMyTollbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar>\n  <ion-title>{{title ? title : ''}}</ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-back-button [defaultHref]=\"backDefault\"></ion-back-button>\n\n  \n </ion-buttons>\n\n <ion-buttons slot=\"end\" >\n \n  <ng-content select=\"[btn-left]\"></ng-content>\n\n</ion-buttons>\n\n\n\n</ion-toolbar>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notFount/not-fount/not-fount.component.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notFount/not-fount/not-fount.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotFountNotFountNotFountComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\n  <ion-card-content>\n    No se ha encontrado el registro, es probable que haya sido eliminado.\n  </ion-card-content>\n</ion-card>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationsNotificatioSelectedNotificatioSelectedComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- <ion-card> -->\n\n  <ion-grid style=\"padding: 20px;\">\n      <ion-col size=\"10\" *ngIf=\"false\">\n        <div *ngIf=\"isFavorite()\">\n          <div>Notificaciones activas !!!</div>\n          <div>Recibiras Notificaciones de las diferentes noticias de este equipo.</div>\n        </div>\n        <div *ngIf=\"!isFavorite()\">\n          <div>Activa las <b>Notificaciones</b> para recibir todas las noticias de este equipo.</div>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\" class=\"not\">\n        <ion-button color=\"dark\" size=\"small\" shape=\"round\" (click)=\"toggleFavorite()\">\n          <ion-icon [name]=\"getNameIcon()\" [ngClass]=\"{'favorite' : isFavorite()}\"></ion-icon>\n        </ion-button>\n      </ion-col>\n  </ion-grid>\n  <div class=\"separator\"></div>\n\n<!-- </ion-card> -->\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/offline/offline.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/offline/offline.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsOfflineOfflineComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"offline ion-text-center\" *ngIf=\"!networService.appIsOnline\">\n  <ion-icon name=\"cloud-offline-outline\"></ion-icon>\n    Estás sin conexión :(\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlayerPlayerListPlayerListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <div *ngIf=\"!firstLoading\">\n\n    <ion-grid *ngIf=\"!errorLoading\">\n      \n\n      <ion-row>\n        <ion-col>\n          <ng-content select=\"[searchPlayer]\"></ng-content>\n        </ion-col>\n      </ion-row>\n\n      <ion-row  *ngIf=\"items.length < 1\">\n        <ion-col>\n          No ha encontrado Jugadores\n        </ion-col>\n      </ion-row>\n      \n      <ion-row >\n        <ion-col sizeXs=\"4\" sizeMd=\"3\" *ngFor=\"let item of items; let i = index\">\n          <div class=\"player-list\" (click)=\"selectItem(item)\">\n            <img class=\"player-list-photo\" [src]=\"getPhoto(item)\" alt=\"Foto\" >\n            <ion-text color=\"dark\">\n              <h4 class=\"fs-player name\">{{item.name}}</h4>\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n\n     \n\n    </ion-grid>\n  \n    <div *ngIf=\"errorLoading\" (clcik)=\"load($event)\">\n      Volver a Intentar\n    </div>\n\n  </div>\n\n  <div *ngIf=\"firstLoading\">\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let item of listSkeleton\">\n        <div class=\"player-list\">\n          <ion-skeleton-text class=\"player-list-photo\" animated style=\"height: 100px;\"></ion-skeleton-text>\n          <h4 class=\"fs-player\">\n            <ion-skeleton-text animated style=\"width: 80%; height: 20px;\"></ion-skeleton-text>\n          </h4>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  \n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsRedesRedListRedListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"(list && list.length > 0)  || isAdmin\">\n  <ion-card-header>\n    \n    <ion-item>\n      <ion-card-title>\n        Redes Sociales\n      </ion-card-title>\n      <ion-button *ngIf=\"isAdmin\" slot=\"end\" (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-item>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-refresher *ngIf=\"withRefresh\" slot=\"fixed\" (ionRefresh)=\"load($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n   \n  \n      <ion-list-header *ngIf=\"list && list.length == 0\"  color=\"tertiary\">\n        <ion-label>No posee Redes Sociales</ion-label>\n      </ion-list-header>\n\n        <ion-grid>\n          <ion-row *ngFor=\"let red of list\" >\n            <ion-col size=\"1\">\n              <ion-icon class=\"icon-red {{getColorIcon(red)}}\" [name]=\"getIcon(red)\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\" >\n              <h4 class=\"name\" (click)=\"select(red)\">{{red.url}}</h4>\n              <p>{{red.name}}</p>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"isAdmin\">\n              <ion-button size=\"small\" (click)=\"showEdit(red)\">\n                <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"isAdmin\">\n              <ion-button size=\"small\" (click)=\"confirmDelete(red)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n     \n        <!-- <ion-item *ngFor=\"let red of list\" >\n            \n          <ion-label>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-icon class=\"icon-red\" [name]=\"getIcon(red)\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\">\n                  <h3 class=\"name\">{{red.name}}</h3>\n                  <p class=\"url\">{{red.url}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-label>\n  \n          <ion-buttons *ngIf=\"isAdmin\" slot=\"end\">\n            \n            <ion-button (click)=\"showEdit(red)\">\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"confirmDelete(red)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n  \n        </ion-item> -->\n\n  \n  </ion-card-content>\n\n</ion-card>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-searchbar\n  [showCancelButton]=\"showCancelButton()\"\n  (keyup)=\"onInput($event)\"\n  (ionCancel)=\"onCancel($event)\">\n</ion-searchbar>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/team-statistics/team-statistics.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/team-statistics/team-statistics.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsStatisticsTeamStatisticsTeamStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item-group *ngIf=\"false\">\n  <ion-item-divider>\n    <ion-label>Estadísticas de partidos</ion-label>\n  </ion-item-divider>\n\n  <ion-item *ngFor=\"let item of list\"> \n    <ion-label class=\"\">\n      <ion-text>{{item.name}}</ion-text>\n    </ion-label>\n    <ion-text class=\"v\" slot=\"end\" color=\"primary\">{{item.value}}</ion-text>\n  </ion-item>\n\n</ion-item-group>\n\n\n<div *ngIf=\"list\">\n  <ion-text class=\"desc\">Estadísticas de partidos</ion-text>\n  <ion-grid class=\"st\">\n    <ion-row class=\"titles\">\n      <ion-col *ngFor=\"let item of list\" class=\"ion-text-center ion-activatable ripple-parent\"  (click)=\"showGames(item.name)\">\n        <div class=\"ion-text-center titles \" >\n          <ion-text color=\"dark\">\n            {{item.name}}\n          </ion-text>\n        </div>\n\n        <div class=\"ion-text-center ion-margin-top \" >\n          <ion-text color=\"primary\">\n            {{item.value}}\n          </ion-text>\n        </div>\n\n        <ion-ripple-effect></ion-ripple-effect>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"alert ion-text-center\">\n    Presione sobre el número para ver dichos partidos.\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-list-any-game/team-list-any-game.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-list-any-game/team-list-any-game.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeamListAnyGameTeamListAnyGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\n  <ion-card-content> \n    <div *ngFor=\"let game of games\" [id]=\"game.date\">\n        <app-result-item\n        *ngIf=\"game.status != 'Pendiente'\"\n        withEvents=\"true\"\n        [game] = \"game\"\n        routerLink=\"/results/profile/{{game.id}}\" \n        routerDirection=\"forward\"\n      ></app-result-item>\n\n      <app-game-list \n        *ngIf=\"game.status == 'Pendiente'\"\n        [game]=\"game\"  \n        routerLink=\"/games/profile/{{game.id}}\" \n        routerDirection=\"forward\"\n      >\n      </app-game-list>\n\n\n    </div>\n\n  </ion-card-content>\n</ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameGameFormGameFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceGame.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Equipo local</ion-label>\n      <ion-select [(ngModel)]=\"game.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_team') }}</div>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Equipo Vicitante</ion-label>\n      <ion-select [(ngModel)]=\"game.v_team\" name=\"v_team\">\n        <ion-select-option [value]=\"v_team.id\" *ngFor=\"let v_team of teams\">{{ v_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_team') }}</div>\n    </ion-item>\n\n    <div *ngIf=\"game.other_team\">\n      <ion-item >\n        <ion-label position=\"floating\" >Otro Equipo</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"game.other_team\" name=\"other_team\"></ion-input>\n      </ion-item>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('other_team') }}</div>\n  \n      <ion-button size=\"sm\" (click)=\"newTeam()\">Nuevo equipo</ion-button>\n    </div>\n  \n    <br>\n\n    <div class=\"goals\">\n\n      <ion-item>\n        <ion-label position=\"floating\">Goles L</ion-label>\n        <ion-select [(ngModel)]=\"game.l_goals\" name=\"l_goals\">\n          <ion-select-option [value]=\"i\" *ngFor=\"let i of numbGoals\">{{ i }}</ion-select-option>\n        </ion-select>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('l_goals') }}</div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Goles V</ion-label>\n        <ion-select [(ngModel)]=\"game.v_goals\" name=\"v_goals\" >\n          <ion-select-option [value]=\"e\" *ngFor=\"let e of numbGoals\">{{ e }}</ion-select-option>\n        </ion-select>\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('v_goals') }}</div>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <ion-label>HH:mm</ion-label>\n      <ion-datetime \n        [(ngModel)]=\"game.time\" \n        displayFormat=\"HH:mm \"  \n        name=\"time\">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Lugar</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.location\" name=\"location\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('location') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Comentario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"game.description\" name=\"description\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('description') }}</div>\n\n    <ion-item>\n      <ion-label>Fecha</ion-label>\n      <ion-datetime \n        name=\"date\"\n        [(ngModel)]=\"game.date\"\n        displayFormat=\"YYYY-MM-DD\"\n        ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Estado</ion-label>\n      <ion-select [(ngModel)]=\"game.status\" name=\"status\">\n        <ion-select-option [value]=\"i\" *ngFor=\"let i of status\">{{ i }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceGame.errorsForm.get('status') }}</div>\n    </ion-item>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPublicationsFormPublicationFormPublicationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Nueva Publicación</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #form_c>\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePublication.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-avatar *ngIf=\"user\"> \n        <ion-img [src]=\"user.photo ? user.photo.urlCompleteThumb : pathImages.images.profile_user \" ></ion-img>\n      </ion-avatar>\n      <label class=\"name-user\">{{user.completeName}}</label>\n    </ion-item>\n\n    <div class=\"separador\"></div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Escribe aqui...</ion-label>\n      <ion-textarea  class=\"editor-text\" [(ngModel)]=\"publication.text\" name=\"text\"  ></ion-textarea>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('text') }}</div>\n\n    <!-- <ion-item *ngIf=\"false\">\n      <ion-label position=\"floating\">Mencionar Equipo</ion-label>\n      <ion-select [(ngModel)]=\"publication.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('l_team') }}</div>\n    </ion-item> -->\n\n    <ion-item *ngIf=\"photoModel.isLoadPthoto() || photoModel.hasImage()\">\n      <img id=\"img_publication\"  [src]=\"photoModel.photo.getPath()\" >\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\"  fill=\"outline\"  (click)=\"photoModel.addOneNewToGallery()\" >\n      <ion-icon  name=\"image\" slot=\"start\"></ion-icon>\n      Foto\n    </ion-button> \n\n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"posting\">\n      <ion-spinner name=\"lines\" *ngIf=\"posting\" ></ion-spinner>\n      Publicar\n    </ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publication/publication.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publication/publication.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPublicationsPublicationPublicationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Publicación</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/publications\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf=\"publication\" >\n    <ion-card-content>\n      <div class=\"publication-user\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img\n            class=\"user-image\"\n            [src]=\"publication.user && publication.user.photo ? publication.user.photo.urlCompleteThumb : pathImages.images.profile_user \"\n            style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n        </ion-img>\n        </ion-thumbnail>\n\n        <div class=\"user\">\n          <div class=\"name\">\n            {{publication.user.last_name}} {{publication.user.first_name}}\n          </div>\n          <div class=\"date\">\n            {{util.getFormarHumans(publication.created_at)}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"publication-text\">\n        <ion-text color=\"dark\">\n          {{publication.text}}\n        </ion-text>\n      </div>\n\n      <div class=\"publication-image ion-text-center\" *ngIf=\"publication.image_id\">\n        <img [src]=\"publication.image.urlComplete\">\n      </div>\n\n      <!-- <ion-grid>\n        <ion-row >\n          <ion-col class=\"ion-text-left\">\n            <ion-text  color=\"dark\">\n              <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n              {{publication.likes.length}}\n            </ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <ion-text>\n              <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n              {{publication.comments.length}}\n            </ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    \n      <div class=\"separator\"></div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-segment *ngIf=\"publication\" (ionChange)=\"segmentChanged($event)\" color=\"secondary\" [value]=\"segment\">\n    \n    <ion-segment-button value=\"likes\" layout=\"icon-start\" class=\"sgm-likes\">\n      <ion-icon name=\"heart-outline\" ></ion-icon>\n      {{publication.likes.length}}\n    </ion-segment-button>\n\n    <ion-segment-button value=\"comments\" layout=\"icon-start\" class=\"sgm-comments\">\n      \n        <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        {{publication.comments.length}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <app-likes\n    *ngIf=\"publication && segment == 'likes'\"\n    [likes] = \"publication.likes\"\n  >\n  </app-likes>\n\n  <app-comments\n    *ngIf=\"publication && segment == 'comments'\"\n    [comments] = \"publication.comments\"\n    [idRelation]=\"id\"\n    [nameRelationModel]=\"'Publication'\"\n    [withTitle] = \"false\"\n    (onUpdateComments)=\"updateComments($event,publication)\"\n  ></app-comments>\n\n  <app-not-fount *ngIf=\"notFound\"></app-not-fount>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRedesRedesFormRedesFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Red Social</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"chatService.isInit\" (click)=\"chatService.toggle()\" [color]=\"chatService.isVisible ? 'success' : ''\">\n        <ion-icon name=\"help-circle-outline\"></ion-icon>\n      </ion-button>  \n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"redModel.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Red</ion-label>\n      <ion-select [(ngModel)]=\"red.name\" name=\"position_id\">\n        <ion-select-option [value]=\"red\" *ngFor=\"let red of redes\">{{ red }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('position_id') }}</div>\n\n    </ion-item>\n  \n\n    <ion-item>\n      <ion-label position=\"floating\" >{{names[red.name]}}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"red.url\" name=\"url\" [placeholder]=\"'Ej: ' +  placeholders[red.name]\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('url') }}</div>\n\n\n    \n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/balance/user-balance/user-balance.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/balance/user-balance/user-balance.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsBalanceUserBalanceUserBalanceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFsYW5jZS91c2VyLWJhbGFuY2UvdXNlci1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/balance/user-balance/user-balance.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/balance/user-balance/user-balance.component.ts ***!
      \***************************************************************************/

    /*! exports provided: UserBalanceComponent */

    /***/
    function srcAppComponentsBalanceUserBalanceUserBalanceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserBalanceComponent", function () {
        return UserBalanceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserBalanceComponent = /*#__PURE__*/function () {
        function UserBalanceComponent() {
          _classCallCheck(this, UserBalanceComponent);
        }

        _createClass(UserBalanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserBalanceComponent;
      }();

      UserBalanceComponent.ctorParameters = function () {
        return [];
      };

      UserBalanceComponent.propDecorators = {
        balanceSheet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['balanceSheet']
        }]
      };
      UserBalanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-balance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-balance.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/balance/user-balance/user-balance.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-balance.component.scss */
        "./src/app/components/balance/user-balance/user-balance.component.scss"))["default"]]
      })], UserBalanceComponent);
      /***/
    },

    /***/
    "./src/app/components/btn-back-page/btn-back-page.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/btn-back-page/btn-back-page.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsBtnBackPageBtnBackPageComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnRuLWJhY2stcGFnZS9idG4tYmFjay1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/btn-back-page/btn-back-page.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/btn-back-page/btn-back-page.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BtnBackPageComponent */

    /***/
    function srcAppComponentsBtnBackPageBtnBackPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BtnBackPageComponent", function () {
        return BtnBackPageComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var BtnBackPageComponent = /*#__PURE__*/function () {
        function BtnBackPageComponent(navCtr) {
          _classCallCheck(this, BtnBackPageComponent);

          this.navCtr = navCtr;
        }

        _createClass(BtnBackPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hasHistory",
          get: function get() {
            return window.history.state.navigationId > 1;
          }
        }]);

        return BtnBackPageComponent;
      }();

      BtnBackPageComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      BtnBackPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-back-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./btn-back-page.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/btn-back-page/btn-back-page.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./btn-back-page.component.scss */
        "./src/app/components/btn-back-page/btn-back-page.component.scss"))["default"]]
      })], BtnBackPageComponent);
      /***/
    },

    /***/
    "./src/app/components/comments/comments.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/comments/comments.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCommentsCommentsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".comment-item {\n  width: 100%;\n  display: flex;\n}\n\n.comment-image {\n  font-size: large;\n}\n\n.comment-data {\n  width: 100%;\n}\n\n.comment-user {\n  font-size: large;\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n.comment-body {\n  font-size: medium;\n  font-style: italic;\n  margin-left: 5px;\n  color: darkslategrey;\n  white-space: pre-wrap;\n}\n\n.comment-date {\n  font-size: x-small;\n  text-align: right;\n  color: darkslategrey;\n}\n\n.editor-text {\n  box-shadow: 2px 2px 5px #999;\n  padding: 2px;\n  border-radius: 15px;\n  /*background: white;]*/\n}\n\n.editor-send {\n  margin-left: -5px;\n}\n\n.content-comment {\n  margin: 10px;\n  display: flex;\n}\n\n.content-comment-text {\n  width: 90%;\n}\n\n.content-comment-btn {\n  width: 10%;\n}\n\n.comment-image {\n  margin-top: 3px;\n  margin-right: 5px;\n}\n\n.comment-edit {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  padding: 5px;\n}\n\n.comment-edit-bts {\n  margin-top: 10px;\n}\n\n.title {\n  background: var(--background-l1);\n  color: white;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  font-size: x-large;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.content-new {\n  background: var(--background-l1);\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDRCxhQUFBO0FBQ0g7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFLQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBSko7O0FBT0E7RUFDSSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtaXRlbXtcbiAgICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb21tZW50LWltYWdle1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5jb21tZW50LWRhdGF7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXVzZXJ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tbWVudC1ib2R5e1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmNvbW1lbnQtZGF0ZXtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59XG5cbi5lZGl0b3J7XG59XG5cbi5lZGl0b3ItdGV4dHtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjOTk5O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8qYmFja2dyb3VuZDogd2hpdGU7XSovXG59XG5cblxuLmVkaXRvci1zZW5ke1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuXG59XG5cbi5jb250ZW50LWNvbW1lbnR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50LWNvbW1lbnQtdGV4dHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uY29udGVudC1jb21tZW50LWJ0bntcbiAgICB3aWR0aDogMTAlO1xufVxuXG4uY29tbWVudC1pbWFnZXtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb21tZW50LWVkaXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbW1lbnQtZWRpdC1idHN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpdGxle1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbDEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVudC1uZXd7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1sMSk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/comments/comments.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/comments/comments.component.ts ***!
      \***********************************************************/

    /*! exports provided: CommentsComponent */

    /***/
    function srcAppComponentsCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
        return CommentsComponent;
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


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");

      var CommentsComponent = /*#__PURE__*/function () {
        function CommentsComponent(authService, request, util, modalController, dialog, utilArray, authUser) {
          _classCallCheck(this, CommentsComponent);

          this.authService = authService;
          this.request = request;
          this.util = util;
          this.modalController = modalController;
          this.dialog = dialog;
          this.utilArray = utilArray;
          this.authUser = authUser;
          this.comments = [];
          this.withTitle = true;
          this.onUpdateComments = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.listComments = [];
          this.sending = false;
          this.updatingComment = false;
          this.commentModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Comment', request);
        }

        _createClass(CommentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            this.comment = {
              idRelation: this.idRelation,
              nameRelationModel: this.nameRelationModel,
              body: this.commentText
            };
            this.resetComment();
            this.loadCooments();
          }
        }, {
          key: "loadCooments",
          value: function loadCooments() {
            var _this = this;

            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.listComments = this.comments;

            if (this.comments && this.comments.length > 0) {
              //this.listComments = this.comments
              return;
            }

            this.relationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"](this.nameRelationModel, this.request);
            this.relationModel.api_loadAttribute(this.idRelation, 'comments').subscribe(function (response) {
              if (response['status'] == 'success') {
                _this.listComments = response[_this.nameRelationModel]['comments'];
              }

              if ($event) $event.target.complete();
            }, function (error) {
              if ($event) $event.target.complete();
            });
          }
        }, {
          key: "resetComment",
          value: function resetComment() {
            this.comment.body = '';
          }
        }, {
          key: "send",
          value: function send() {
            var _this2 = this;

            console.log('send');

            if (this.comment.body) {
              //this.comment.body = this.commentText;
              this.comment.body = this.comment.body.trim();
              this.sending = true;
              this.commentModel.api_function('add', this.comment).subscribe(function (response) {
                if (response['status'] == 'success') {
                  var data = response['data'];

                  _this2.listComments.push(data);

                  if (_this2.onUpdateComments) _this2.onUpdateComments.emit(_this2.listComments);

                  _this2.resetComment();
                }

                _this2.sending = false;
              }, function (error) {
                _this2.sending = false;
              });
            }
          }
        }, {
          key: "formatDate",
          value: function formatDate(val) {
            return moment__WEBPACK_IMPORTED_MODULE_6__(val).locale('es').fromNow();
          }
        }, {
          key: "getPhoto",
          value: function getPhoto(comment) {
            return comment.user && comment.user.photo ? comment.user.photo.urlCompleteThumb : 'assets/images/profile.jpg';
          }
        }, {
          key: "openViewer",
          value: function openViewer(comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ViewerModalComponent"],
                        componentProps: {
                          src: comment.user.photo ? comment.user.photo.urlComplete : 'assets/images/profile.jpg',
                          scheme: 'dark'
                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            //console.log('changes')
            if (changes['comments']) {
              this.loadCooments();
            }
          }
        }, {
          key: "openMenuComment",
          value: function openMenuComment(comment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.dialog.actionSheetEditDelete(function () {
                        comment.edit = true;
                        _this3.commentEdit = Object.assign({}, comment);
                      }, function () {
                        _this3.confirmDelete(comment);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(comment) {
            var _this4 = this;

            this.dialog.presentAlertConfirm('Confirmar', '¿Estas seguro de eliminar este comentario?', function (e) {
              _this4["delete"](comment);
            });
          }
        }, {
          key: "delete",
          value: function _delete(comment) {
            var _this5 = this;

            this.commentModel.api_delete(comment.id).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 'success') {
                _this5.dialog.showToast('Comentario eliminado.', null, 'success');

                _this5.utilArray.listDelete(_this5.listComments, comment.id); //this.teamService.listDelete(team.id);

              }
            });
          }
        }, {
          key: "cancelEdit",
          value: function cancelEdit(comment) {
            comment.edit = false;
            this.commentEdit = {
              body: ''
            };
          }
        }, {
          key: "editComment",
          value: function editComment() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('edit comment api');
                      this.updatingComment = true; //await this.util.delay(5000);

                      this.commentEdit['body'] = this.commentEdit['body'].trim();
                      this.commentModel.api_update(this.commentEdit).subscribe(function (response) {
                        if (response['status'] == 'success') {
                          _this6.commentEdit['edit'] = false;

                          _this6.utilArray.listUpdate(_this6.listComments, _this6.commentEdit['id'], _this6.commentEdit);
                        }

                        _this6.updatingComment = false;
                      }, function (error) {
                        console.log(error);
                        _this6.updatingComment = false;
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CommentsComponent;
      }();

      CommentsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_10__["UtilArrayService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
        }];
      };

      CommentsComponent.propDecorators = {
        nameRelationModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['nameRelationModel']
        }],
        idRelation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['idRelation']
        }],
        comments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['comments']
        }],
        withTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['withTitle']
        }],
        onUpdateComments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      CommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comments.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comments.component.scss */
        "./src/app/components/comments/comments.component.scss"))["default"]]
      })], CommentsComponent);
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./event/list/list.component */
      "./src/app/components/event/list/list.component.ts");
      /* harmony import */


      var _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./event/event-list/event-list.component */
      "./src/app/components/event/event-list/event-list.component.ts");
      /* harmony import */


      var _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./player/player-list/player-list.component */
      "./src/app/components/player/player-list/player-list.component.ts");
      /* harmony import */


      var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./comments/comments.component */
      "./src/app/components/comments/comments.component.ts");
      /* harmony import */


      var _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./notifications/notificatio-selected/notificatio-selected.component */
      "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts");
      /* harmony import */


      var _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./redes/red-list/red-list.component */
      "./src/app/components/redes/red-list/red-list.component.ts");
      /* harmony import */


      var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./search/search.component */
      "./src/app/components/search/search.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./likes/likes.component */
      "./src/app/components/likes/likes.component.ts");
      /* harmony import */


      var _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./menu-user/menu-user.component */
      "./src/app/components/menu-user/menu-user.component.ts");
      /* harmony import */


      var _items_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./items-list/notification/notification.component */
      "./src/app/components/items-list/notification/notification.component.ts");
      /* harmony import */


      var _items_list_game_game_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./items-list/game/game.component */
      "./src/app/components/items-list/game/game.component.ts");
      /* harmony import */


      var _items_list_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./items-list/result-item/result-item.component */
      "./src/app/components/items-list/result-item/result-item.component.ts");
      /* harmony import */


      var _items_list_publication_publication_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./items-list/publication/publication.component */
      "./src/app/components/items-list/publication/publication.component.ts");
      /* harmony import */


      var _notFount_not_fount_not_fount_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./notFount/not-fount/not-fount.component */
      "./src/app/components/notFount/not-fount/not-fount.component.ts");
      /* harmony import */


      var _btn_back_page_btn_back_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./btn-back-page/btn-back-page.component */
      "./src/app/components/btn-back-page/btn-back-page.component.ts");
      /* harmony import */


      var _my_tollbar_my_tollbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./my-tollbar/my-tollbar.component */
      "./src/app/components/my-tollbar/my-tollbar.component.ts");
      /* harmony import */


      var _mp_btn_paid_btn_paid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mp/btn-paid/btn-paid.component */
      "./src/app/components/mp/btn-paid/btn-paid.component.ts");
      /* harmony import */


      var _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./create-game/create-game.component */
      "./src/app/components/create-game/create-game.component.ts");
      /* harmony import */


      var _event_preview_preview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./event/preview/preview.component */
      "./src/app/components/event/preview/preview.component.ts");
      /* harmony import */


      var _statistics_team_statistics_team_statistics_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./statistics/team-statistics/team-statistics.component */
      "./src/app/components/statistics/team-statistics/team-statistics.component.ts");
      /* harmony import */


      var _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./social-share/social-share.component */
      "./src/app/components/social-share/social-share.component.ts");
      /* harmony import */


      var _team_list_any_game_team_list_any_game_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./team-list-any-game/team-list-any-game.component */
      "./src/app/components/team-list-any-game/team-list-any-game.component.ts");
      /* harmony import */


      var _game_old_next_game_old_next_game_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./game/old-next-game/old-next-game.component */
      "./src/app/components/game/old-next-game/old-next-game.component.ts");
      /* harmony import */


      var _list_admins_list_admins_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./list-admins/list-admins.component */
      "./src/app/components/list-admins/list-admins.component.ts");
      /* harmony import */


      var _offline_offline_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./offline/offline.component */
      "./src/app/components/offline/offline.component.ts");
      /* harmony import */


      var _balance_user_balance_user_balance_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./balance/user-balance/user-balance.component */
      "./src/app/components/balance/user-balance/user-balance.component.ts");
      /* harmony import */


      var _field_show_map_show_map_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./field/show-map/show-map.component */
      "./src/app/components/field/show-map/show-map.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_12__["NgxIonicImageViewerModule"]],
        declarations: [_event_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"], _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"], _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__["NotificatioSelectedComponent"], _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__["RedListComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__["LikesComponent"], _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_14__["MenuUserComponent"], _items_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"], _items_list_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"], _items_list_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__["ResultItemComponent"], _items_list_publication_publication_component__WEBPACK_IMPORTED_MODULE_18__["PublicationComponent"], _notFount_not_fount_not_fount_component__WEBPACK_IMPORTED_MODULE_19__["NotFountComponent"], _btn_back_page_btn_back_page_component__WEBPACK_IMPORTED_MODULE_20__["BtnBackPageComponent"], _my_tollbar_my_tollbar_component__WEBPACK_IMPORTED_MODULE_21__["MyTollbarComponent"], _mp_btn_paid_btn_paid_component__WEBPACK_IMPORTED_MODULE_22__["BtnPaidComponent"], _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_23__["CreateGameComponent"], _event_preview_preview_component__WEBPACK_IMPORTED_MODULE_24__["PreviewComponent"], _statistics_team_statistics_team_statistics_component__WEBPACK_IMPORTED_MODULE_25__["TeamStatisticsComponent"], _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_26__["SocialShareComponent"], _team_list_any_game_team_list_any_game_component__WEBPACK_IMPORTED_MODULE_27__["TeamListAnyGameComponent"], _game_old_next_game_old_next_game_component__WEBPACK_IMPORTED_MODULE_28__["OldNextGameComponent"], _list_admins_list_admins_component__WEBPACK_IMPORTED_MODULE_29__["ListAdminsComponent"], _offline_offline_component__WEBPACK_IMPORTED_MODULE_30__["OfflineComponent"], _balance_user_balance_user_balance_component__WEBPACK_IMPORTED_MODULE_31__["UserBalanceComponent"], _field_show_map_show_map_component__WEBPACK_IMPORTED_MODULE_32__["ShowMapComponent"]],
        exports: [_event_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"], _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"], _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__["NotificatioSelectedComponent"], _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__["RedListComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__["LikesComponent"], _menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_14__["MenuUserComponent"], _items_list_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"], _items_list_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"], _items_list_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__["ResultItemComponent"], _items_list_publication_publication_component__WEBPACK_IMPORTED_MODULE_18__["PublicationComponent"], _notFount_not_fount_not_fount_component__WEBPACK_IMPORTED_MODULE_19__["NotFountComponent"], _btn_back_page_btn_back_page_component__WEBPACK_IMPORTED_MODULE_20__["BtnBackPageComponent"], _my_tollbar_my_tollbar_component__WEBPACK_IMPORTED_MODULE_21__["MyTollbarComponent"], _mp_btn_paid_btn_paid_component__WEBPACK_IMPORTED_MODULE_22__["BtnPaidComponent"], _create_game_create_game_component__WEBPACK_IMPORTED_MODULE_23__["CreateGameComponent"], _event_preview_preview_component__WEBPACK_IMPORTED_MODULE_24__["PreviewComponent"], _statistics_team_statistics_team_statistics_component__WEBPACK_IMPORTED_MODULE_25__["TeamStatisticsComponent"], _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_26__["SocialShareComponent"], _team_list_any_game_team_list_any_game_component__WEBPACK_IMPORTED_MODULE_27__["TeamListAnyGameComponent"], _game_old_next_game_old_next_game_component__WEBPACK_IMPORTED_MODULE_28__["OldNextGameComponent"], _list_admins_list_admins_component__WEBPACK_IMPORTED_MODULE_29__["ListAdminsComponent"], _offline_offline_component__WEBPACK_IMPORTED_MODULE_30__["OfflineComponent"], _balance_user_balance_user_balance_component__WEBPACK_IMPORTED_MODULE_31__["UserBalanceComponent"], _field_show_map_show_map_component__WEBPACK_IMPORTED_MODULE_32__["ShowMapComponent"]],
        entryComponents: []
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/create-game/create-game.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/create-game/create-game.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCreateGameCreateGameComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWdhbWUvY3JlYXRlLWdhbWUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/create-game/create-game.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/create-game/create-game.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CreateGameComponent */

    /***/
    function srcAppComponentsCreateGameCreateGameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGameComponent", function () {
        return CreateGameComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CreateGameComponent = /*#__PURE__*/function () {
        function CreateGameComponent() {
          _classCallCheck(this, CreateGameComponent);

          this.text = 'Registrar nuevo partido';
        }

        _createClass(CreateGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreateGameComponent;
      }();

      CreateGameComponent.ctorParameters = function () {
        return [];
      };

      CreateGameComponent.propDecorators = {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['text']
        }]
      };
      CreateGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-game.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-game/create-game.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-game.component.scss */
        "./src/app/components/create-game/create-game.component.scss"))["default"]]
      })], CreateGameComponent);
      /***/
    },

    /***/
    "./src/app/components/event/event-list/event-list.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/event/event-list/event-list.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsEventEventListEventListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  font-size: large;\n  color: #000000b3;\n  padding: 7px;\n}\n\n.col-v {\n  border-top-right-radius: 5px;\n  border-right: 4px solid var(--color-v);\n}\n\n.col-l {\n  border-top-left-radius: 5px;\n  border-left: 4px solid var(--color-l);\n}\n\n.item-l {\n  border-left: 4px solid var(--color-l);\n  padding-left: 5px;\n}\n\n.item-v {\n  border-right: 4px solid var(--color-v);\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSxzQ0FBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSxxQ0FBQTtBQUFKOztBQUdBO0VBQ0kscUNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb2x7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBjb2xvcjogIzAwMDAwMGIzO1xuICAgIHBhZGRpbmc6IDdweDtcbn1cblxuLmNvbC12e1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tY29sb3Itdik7XG59XG5cbi5jb2wtbHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1sKTtcbn1cblxuLml0ZW0tbHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWwpO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuXG59XG5cbi5pdGVtLXZ7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tY29sb3Itdik7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/event/event-list/event-list.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/event/event-list/event-list.component.ts ***!
      \*********************************************************************/

    /*! exports provided: EventListComponent */

    /***/
    function srcAppComponentsEventEventListEventListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventListComponent", function () {
        return EventListComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_pages_event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/pages/event/event-form/event-form.page */
      "./src/app/pages/event/event-form/event-form.page.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/payment-team.service */
      "./src/app/services/payment-team.service.ts");

      var EventListComponent = /*#__PURE__*/function () {
        //isAdmin = false;
        function EventListComponent(requestService, dialog, modalController, authUser, paymentTeamService) {
          _classCallCheck(this, EventListComponent);

          this.requestService = requestService;
          this.dialog = dialog;
          this.modalController = modalController;
          this.authUser = authUser;
          this.paymentTeamService = paymentTeamService;
          this.events = [];
          this.team_admin = null;
          this.canEdit = false;
          this.twoTeam = false;
          this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requestService);
          this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Event', requestService);
          console.log(this.game_id);
        }

        _createClass(EventListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this7 = this;

            this.gameModel.api_functionModel(this.game_id, 'dataEvent').subscribe(function (response) {
              if (response['status'] == 'success') {
                _this7.game = response['data']['game'];
                _this7.events = response['data']['events'];
                _this7.team_l = response['data']['team_l'];
                _this7.team_v = response['data']['team_v'];

                _this7.verificationAdmin();
              }

              console.log(_this7.events);
            });
          }
        }, {
          key: "verificationAdmin",
          value: function verificationAdmin() {
            console.log('verificationAdmin');

            if (this.authUser.isAdminOfTeam(this.team_l.id) || this.authUser.isAdminOfTeam(this.team_v.id)) {
              this.isAdmin = true;
              if (this.authUser.isAdminOfTeam(this.team_l.id)) this.team_admin = this.team_l;
              if (this.authUser.isAdminOfTeam(this.team_v.id)) this.team_admin = this.team_v;

              if (this.authUser.isAdminOfTeam(this.team_l.id) && this.authUser.isAdminOfTeam(this.team_v.id)) {
                this.twoTeam = true;
              }
            } else {
              this.team_admin = null;
            } //if(this.authUser.isAdminTeam(this.team_l.id) && this.authUser.isAdminTeam(this.team_v.id) )

          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(event, index) {
            var _this8 = this;

            this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este Suceso', function (e) {
              _this8["delete"](event, index);
            });
          }
        }, {
          key: "delete",
          value: function _delete(event, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.paymentTeamService.setTeam(event.team);

                      if (!this.paymentTeamService.noPaid()) {
                        _context4.next = 5;
                        break;
                      }

                      _context4.next = 4;
                      return this.paymentTeamService.showAlert();

                    case 4:
                      return _context4.abrupt("return");

                    case 5:
                      this.eventModel.api_delete(event.id).subscribe(function (data) {
                        console.log(data);

                        if (data['status'] == 'success') {
                          _this9.dialog.showToast('Suceso Eliminado', null, 'success');

                          _this9.events.splice(index, 1);
                        }
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this10 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: src_app_pages_event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_6__["EventFormPage"],
                        componentProps: {
                          game_id: this.game_id,
                          team_admin: this.team_admin,
                          twoTeam: this.twoTeam,
                          events: this.events,
                          game: this.game
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data['event']) {
                          var e = data.data['event'];

                          _this10.events.push(e);
                        }
                      });
                      _context5.next = 6;
                      return modal.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return EventListComponent;
      }();

      EventListComponent.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"]
        }, {
          type: src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_8__["PaymentTeamService"]
        }];
      };

      EventListComponent.propDecorators = {
        game_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['game_id']
        }],
        isAdmin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['isAdmin']
        }]
      };
      EventListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./event-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./event-list.component.scss */
        "./src/app/components/event/event-list/event-list.component.scss"))["default"]]
      })], EventListComponent);
      /***/
    },

    /***/
    "./src/app/components/event/list/list.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/event/list/list.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsEventListListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/event/list/list.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/event/list/list.component.ts ***!
      \*********************************************************/

    /*! exports provided: ListComponent */

    /***/
    function srcAppComponentsEventListListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent() {
          _classCallCheck(this, ListComponent);
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListComponent;
      }();

      ListComponent.ctorParameters = function () {
        return [];
      };

      ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list.component.scss */
        "./src/app/components/event/list/list.component.scss"))["default"]]
      })], ListComponent);
      /***/
    },

    /***/
    "./src/app/components/event/preview/preview.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/components/event/preview/preview.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsEventPreviewPreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/event/preview/preview.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/event/preview/preview.component.ts ***!
      \***************************************************************/

    /*! exports provided: PreviewComponent */

    /***/
    function srcAppComponentsEventPreviewPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewComponent", function () {
        return PreviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PreviewComponent = /*#__PURE__*/function () {
        function PreviewComponent() {
          _classCallCheck(this, PreviewComponent);
        }

        _createClass(PreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PreviewComponent;
      }();

      PreviewComponent.ctorParameters = function () {
        return [];
      };

      PreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./preview.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/preview/preview.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./preview.component.scss */
        "./src/app/components/event/preview/preview.component.scss"))["default"]]
      })], PreviewComponent);
      /***/
    },

    /***/
    "./src/app/components/field/show-map/show-map.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/field/show-map/show-map.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFieldShowMapShowMapComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmllbGQvc2hvdy1tYXAvc2hvdy1tYXAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/field/show-map/show-map.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/field/show-map/show-map.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ShowMapComponent */

    /***/
    function srcAppComponentsFieldShowMapShowMapComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowMapComponent", function () {
        return ShowMapComponent;
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


      var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_pages_field_show_show_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/field/show/show.page */
      "./src/app/pages/field/show/show.page.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ShowMapComponent = /*#__PURE__*/function () {
        function ShowMapComponent(request, geolocation, iab, modalController) {
          _classCallCheck(this, ShowMapComponent);

          this.request = request;
          this.geolocation = geolocation;
          this.iab = iab;
          this.modalController = modalController;
          this.showDirection = false;
          this.newMarker = null;
          this.position = {
            lat: 0,
            lng: 0
          };
          this.modelField = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Field', request);
        }

        _createClass(ShowMapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      //this.leafletMap();
                      this.loadField();
                      this.getLocation();

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "loadField",
          value: function loadField() {
            var _this11 = this;

            console.log('load field');

            if (this.id) {
              this.modelField.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this11.field = data['Field'];

                  _this11.reset();

                  _this11.leafletMap();

                  _this11.refresh();
                }
              });
            }
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this12 = this;

              var watch;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log('get position');
                      _context7.next = 3;
                      return this.geolocation.getCurrentPosition({
                        timeout: 6000
                      }).then(function (resp) {
                        console.log('resp geo', resp);
                        _this12.position.lat = resp.coords.latitude;
                        _this12.position.lng = resp.coords.longitude;
                      })["catch"](function (error) {
                        console.error('error geo ', error);
                      });

                    case 3:
                      watch = this.geolocation.watchPosition();
                      watch.subscribe(function (data) {
                        console.log('data geo', data);
                      }); //this.position.lat = res.coords.latitude;
                      //this.position.lng = res.coords.longitude
                      //console.log('location ' , res)
                      //alert(res.coords.latitude)

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getRoute",
          value: function getRoute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      //await this.getLocation();
                      this.comoLlegar();

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "leafletMap",
          value: function leafletMap() {
            var _this13 = this;

            /*this.field = {
              name : '',
              lat : -27.603857971720405,
              lng : -55.323644024643414
            };
              
                 if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition((position) => {
                   this.field.lat= position.coords.latitude;
                  this.field.lng = position.coords.longitude;
              })
            }
            */
            this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('mapId').setView([this.field.lat, this.field.lng], 11);
            var self = this;
            this.map.on("load", function () {
              console.log('load map');

              _this13.refresh();
            });
            this.map.on('locationfound', function (pos) {
              console.log('loc found ', pos);
            });
            this.map.on('locationerror', function (error) {
              console.log('loc error ', error);
            }); //old
            //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
            //https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw

            leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'futbol8alem.com',
              id: 'mapbox/streets-v11'
            }).addTo(this.map);
            /*
                Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: 'futbol8alem.com',
                }).addTo(this.map);
            */

            var Icono = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
              iconUrl: "http://icons.iconseeker.com/png/fullsize/sport-fields/football-field.png",
              iconSize: [30, 40],
              iconAnchor: [15, 40],
              shadowSize: [35, 50],
              shadowAnchor: [0, 55],
              popupAnchor: [0, -40]
            });
            leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.field.lat, this.field.lng], {
              icon: Icono
            }).addTo(this.map).bindPopup(this.field.name, {
              permanent: true
            }).openPopup(); //Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
            //this.loadFields();

            this.refresh();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this14 = this;

            console.log('changes');

            if (changes['field']) {
              setTimeout(function () {
                if (_this14.map) {
                  _this14.map.off();

                  _this14.map.remove();
                }

                _this14.leafletMap();
              }), 1000;
            }
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this15 = this;

            setTimeout(function () {
              _this15.map.invalidateSize();
            }, 1000);
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.map) {
              this.map.off();
              this.map.remove();
            }
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            // Do actions here
            console.log('ionViewDidLeave component show-map');
            this.reset();
          }
        }, {
          key: "comoLlegar",
          value: function comoLlegar() {
            var browser = this.iab.create("https://www.google.com/maps/dir/?api=1&destination=".concat(this.field.lat, ",").concat(this.field.lng), '', {
              fullscreen: "yes"
            });
          }
        }, {
          key: "shareW",
          value: function shareW() {
            var text = encodeURIComponent("https://www.google.com/maps/dir/?api=1&destination=".concat(this.field.lat, ",").concat(this.field.lng));
            var browser = this.iab.create("https://api.whatsapp.com/send?text=".concat(text), '', {
              fullscreen: "yes"
            });
          }
        }, {
          key: "show",
          value: function show(field) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var modal;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      console.log('show');
                      _context9.next = 3;
                      return this.modalController.create({
                        component: src_app_pages_field_show_show_page__WEBPACK_IMPORTED_MODULE_7__["ShowPage"],
                        componentProps: {
                          id: field.id
                        }
                      });

                    case 3:
                      modal = _context9.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data && data.data['field']) {//const field = data.data['field'];
                          //this.utilArray.listUpdate(this.fields,field.id,field)
                        }
                      });
                      _context9.next = 7;
                      return modal.present();

                    case 7:
                      return _context9.abrupt("return", _context9.sent);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return ShowMapComponent;
      }();

      ShowMapComponent.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }];
      };

      ShowMapComponent.propDecorators = {
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['field']
        }],
        showDirection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['showDirection']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }]
      };
      ShowMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./show-map.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/field/show-map/show-map.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./show-map.component.scss */
        "./src/app/components/field/show-map/show-map.component.scss"))["default"]]
      })], ShowMapComponent);
      /***/
    },

    /***/
    "./src/app/components/game/old-next-game/old-next-game.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/components/game/old-next-game/old-next-game.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsGameOldNextGameOldNextGameComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  padding: 10px;\n}\n\n.content-temas {\n  display: flex;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.teams {\n  width: 80%;\n}\n\n.esc {\n  width: 20px;\n  height: 20px;\n}\n\n.date {\n  width: 20%;\n  font-size: small;\n  color: #f4f3f3c4;\n}\n\n.hs {\n  margin-top: 5px;\n}\n\n.desc {\n  font-size: small;\n  background: #171717;\n  padding-top: 6px;\n  padding-left: 13px;\n  padding-bottom: 3px;\n  color: #f1f6f5ad;\n  padding-right: 15px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 10px;\n}\n\n.status {\n  font-size: xx-small;\n  margin-bottom: 10px;\n}\n\n.det {\n  font-size: small;\n  background: #c768686b;\n  padding: 5px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL29sZC1uZXh0LWdhbWUvb2xkLW5leHQtZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvb2xkLW5leHQtZ2FtZS9vbGQtbmV4dC1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRlbnQtdGVtYXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cblxuLnRlYW1ze1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5lc2N7XG4gICAgd2lkdGg6IDIwcHg7IFxuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmRhdGV7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjZjRmM2YzYzQ7XG59XG4uaHN7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZGVzY3tcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGJhY2tncm91bmQ6ICMxNzE3MTc7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICBjb2xvcjogI2YxZjZmNWFkO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLnN0YXR1c3tcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kZXR7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBiYWNrZ3JvdW5kOiAjYzc2ODY4NmI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/game/old-next-game/old-next-game.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/game/old-next-game/old-next-game.component.ts ***!
      \**************************************************************************/

    /*! exports provided: OldNextGameComponent */

    /***/
    function srcAppComponentsGameOldNextGameOldNextGameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OldNextGameComponent", function () {
        return OldNextGameComponent;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var src_app_pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pages/game/game-form/game-form.page */
      "./src/app/pages/game/game-form/game-form.page.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");

      var OldNextGameComponent = /*#__PURE__*/function () {
        function OldNextGameComponent(router, userAuth, dialogService, modalController, dialog, util, utilArray, request) {
          _classCallCheck(this, OldNextGameComponent);

          this.router = router;
          this.userAuth = userAuth;
          this.dialogService = dialogService;
          this.modalController = modalController;
          this.dialog = dialog;
          this.util = util;
          this.utilArray = utilArray;
          this.request = request;
          this.withTitle = true;
          this.onDeleteGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onUpdateGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(OldNextGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('withTitle', this.withTitle);
            this.modelGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_9__["Model"]('Game', this.request);
          }
        }, {
          key: "routerGoTo",
          value: function routerGoTo(game) {
            if (game.status == 'Pendiente') {
              return '/games/profile/' + game.id;
            } else {
              return '/results/profile/' + game.id;
            }
          }
        }, {
          key: "showEdit",
          value: function showEdit(game) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this16 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.modalController.create({
                        component: src_app_pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_8__["GameFormPage"],
                        componentProps: {
                          id: game.id
                        }
                      });

                    case 2:
                      modal = _context10.sent;
                      modal.onDidDismiss().then(function (data) {
                        var game = data.data['game'];

                        if (game) {
                          _this16.game = game;
                        } //this.utilArray.listUpdate(this.games,game.id,game);
                        //this.gameService.listUpdate(game.id,game);

                      });
                      _context10.next = 6;
                      return modal.present();

                    case 6:
                      return _context10.abrupt("return", _context10.sent);

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(game) {
            var _this17 = this;

            this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este partido', function (e) {
              _this17["delete"](game);
            });
          }
        }, {
          key: "delete",
          value: function _delete(game) {
            var _this18 = this;

            this.modelGame.api_delete(game.id).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 'success') {
                _this18.dialog.showToast('Partido Eliminado', null, 'success');

                if (_this18.onDeleteGame) _this18.onDeleteGame.emit(game); //this.gameService.listDelete(game.id);
                //this.utilArray.listDelete(this.games,game.id)
              }
            });
          }
        }, {
          key: "colorStatus",
          get: function get() {
            if (this.game) {
              switch (this.game.status) {
                case 'Pendiente':
                  return 'secondary';

                case 'Jugado':
                  return 'success';

                case 'Suspendido':
                  return 'danger';
              }
            }

            return 'default';
          }
        }]);

        return OldNextGameComponent;
      }();

      OldNextGameComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_7__["UtilArrayService"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_10__["RequestService"]
        }];
      };

      OldNextGameComponent.propDecorators = {
        game: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['game']
        }],
        withTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['withTitle']
        }],
        onDeleteGame: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onUpdateGame: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      OldNextGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-old-next-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./old-next-game.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/old-next-game/old-next-game.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./old-next-game.component.scss */
        "./src/app/components/game/old-next-game/old-next-game.component.scss"))["default"]]
      })], OldNextGameComponent);
      /***/
    },

    /***/
    "./src/app/components/items-list/game/game.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/components/items-list/game/game.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsItemsListGameGameComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".team-list {\n  display: block;\n}\n\n.vs {\n  width: 6%;\n  min-height: 100px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.game {\n  width: 100%;\n  /*background-image: url('/assets/images/img_fondo_part.png');*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  padding: 10px;\n}\n\n.team {\n  display: flex;\n  align-items: center;\n  width: 47%;\n  flex-flow: column-reverse;\n}\n\n.team-name {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n\n.contenedor {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n  padding: 10px;\n  background: #0e0e0e6e;\n  border-radius: 20px;\n  color: white;\n}\n\n.date {\n  text-align: center;\n}\n\n.text-name {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSw4REFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbXMtbGlzdC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbS1saXN0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZze1xuICAgIHdpZHRoOiA2JTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmdhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ltZ19mb25kb19wYXJ0LnBuZycpOyovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRlYW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcblxuXG59XG5cbi50ZWFtLW5hbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDs7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cbi5pbWctdGVhbXtcbiAgICBib3JkZXItcmFkaXVzOjUwJTsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyOyBcbiAgICB3aWR0aDozMHB4OyBcbiAgICBoZWlnaHQ6MzBweDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlNmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXRle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtbmFtZXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC8vZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/items-list/game/game.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/items-list/game/game.component.ts ***!
      \**************************************************************/

    /*! exports provided: GameComponent */

    /***/
    function srcAppComponentsItemsListGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
        return GameComponent;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var GameComponent = /*#__PURE__*/function () {
        function GameComponent(util) {
          _classCallCheck(this, GameComponent);

          this.util = util;
          this.withDate = false;
        }

        _createClass(GameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GameComponent;
      }();

      GameComponent.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }];
      };

      GameComponent.propDecorators = {
        game: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['game']
        }],
        withDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['withDate']
        }]
      };
      GameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./game.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/game/game.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./game.component.scss */
        "./src/app/components/items-list/game/game.component.scss"))["default"]]
      })], GameComponent);
      /***/
    },

    /***/
    "./src/app/components/items-list/notification/notification.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/components/items-list/notification/notification.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsItemsListNotificationNotificationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-active {\n  --ion-background-color: #e9ebee !important;\n}\n\n.date {\n  font-size: x-small;\n}\n\nh3 {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW1zLWxpc3Qvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1hY3RpdmV7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2U5ZWJlZSAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXtcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbmgze1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/items-list/notification/notification.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/items-list/notification/notification.component.ts ***!
      \******************************************************************************/

    /*! exports provided: NotificationComponent */

    /***/
    function srcAppComponentsItemsListNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return NotificationComponent;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/paths-images.service */
      "./src/app/services/paths-images.service.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util-photo.service */
      "./src/app/services/util-photo.service.ts");

      var NotificationComponent = /*#__PURE__*/function () {
        function NotificationComponent(util, pathImages, authUser, utilPhoto) {
          _classCallCheck(this, NotificationComponent);

          this.util = util;
          this.pathImages = pathImages;
          this.authUser = authUser;
          this.utilPhoto = utilPhoto;
          this.content = {};
        }

        _createClass(NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {//let content : string = changes['notification']['currentValue']['content'];
            //this.content = JSON.parse( content );
          }
        }]);

        return NotificationComponent;
      }();

      NotificationComponent.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }, {
          type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__["PathsImagesService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
        }, {
          type: src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_5__["UtilPhotoService"]
        }];
      };

      NotificationComponent.propDecorators = {
        notification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['notification']
        }]
      };
      NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notification.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/notification/notification.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notification.component.scss */
        "./src/app/components/items-list/notification/notification.component.scss"))["default"]]
      })], NotificationComponent);
      /***/
    },

    /***/
    "./src/app/components/items-list/publication/publication.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/components/items-list/publication/publication.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsItemsListPublicationPublicationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".publication-user {\n  display: flex;\n}\n.publication-user .user {\n  display: block;\n}\n.publication-user .user .name {\n  margin-top: 5px;\n  font-size: medium;\n}\n.publication-user .user .date {\n  margin-left: 5px;\n  font-size: xx-small;\n}\n.publication-text {\n  margin: 3px;\n  margin-left: 15px;\n  font-size: medium;\n}\n.publication-image {\n  align-self: auto;\n}\n.separator {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: solid 1px rgba(63, 62, 62, 0.671);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNaO0FBRVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFNQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEo7QUFNQTtFQUNJLGdCQUFBO0FBSEo7QUFNQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1YmxpY2F0aW9uLXVzZXJ7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC51c2Vye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtOztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAuZGF0ZXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5wdWJsaWNhdGlvbi10ZXh0e1xuICAgIG1hcmdpbjogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ucHVibGljYXRpb24taW1hZ2V7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLnNlcGFyYXRvcntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoNjMsIDYyLCA2MiwgMC42NzEpO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/items-list/publication/publication.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/items-list/publication/publication.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PublicationComponent */

    /***/
    function srcAppComponentsItemsListPublicationPublicationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicationComponent", function () {
        return PublicationComponent;
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


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_pages_publications_publication_publication_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pages/publications/publication/publication.page */
      "./src/app/pages/publications/publication/publication.page.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_pages_publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pages/publications/form-publication/form-publication.page */
      "./src/app/pages/publications/form-publication/form-publication.page.ts");
      /* harmony import */


      var src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/util-photo.service */
      "./src/app/services/util-photo.service.ts");

      var PublicationComponent = /*#__PURE__*/function () {
        function PublicationComponent(authUser, util, modalController, request, utilArray, dialog, utilPhoto) {
          _classCallCheck(this, PublicationComponent);

          this.authUser = authUser;
          this.util = util;
          this.modalController = modalController;
          this.request = request;
          this.utilArray = utilArray;
          this.dialog = dialog;
          this.utilPhoto = utilPhoto;
          this.publcationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Publication', request);
          this.user = authUser.user;
        }

        _createClass(PublicationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPhotoUser",
          value: function showPhotoUser(photo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var modal;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      console.log('show photo ', photo);
                      _context11.next = 3;
                      return this.modalController.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__["ViewerModalComponent"],
                        componentProps: {
                          src: photo ? photo.urlComplete : 'assets/images/profile.jpg',
                          scheme: 'dark'
                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 3:
                      modal = _context11.sent;
                      _context11.next = 6;
                      return modal.present();

                    case 6:
                      return _context11.abrupt("return", _context11.sent);

                    case 7:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "like",
          value: function like(publication) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      publication.processLike = true;

                      if (publication.liked) {
                        this.publcationModel.api_functionModel(publication.id, 'removeLike', {
                          user_id: this.user.id
                        }).subscribe(function (response) {
                          if (response['status'] == 'success') {
                            publication.liked = !publication.liked;
                            publication.likes_count -= 1; //this.utilArray.listUpdate(this.publications , publication.id , publication)
                          }

                          publication.processLike = false;
                        }, function (error) {
                          console.error(error);
                          publication.processLike = false;
                        });
                      } else {
                        this.publcationModel.api_functionModel(publication.id, 'addLike', {
                          user_id: this.user.id
                        }).subscribe(function (response) {
                          if (response['status'] == 'success') {
                            publication.liked = !publication.liked;
                            publication.likes_count += 1; //this.utilArray.listUpdate(this.publications , publication.id , publication)
                          }

                          publication.processLike = false;
                        }, function (error) {
                          console.error(error);
                          publication.processLike = false;
                        });
                      }

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "showPublication",
          value: function showPublication(publication) {
            var segment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'comments';
            var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this19 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.modalController.create({
                        component: src_app_pages_publications_publication_publication_page__WEBPACK_IMPORTED_MODULE_8__["PublicationPage"],
                        componentProps: {
                          id: publication.id,
                          segment: segment
                        }
                      });

                    case 2:
                      modal = _context13.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('update publication');
                        var publication = data.data['publication'];

                        _this19.utilArray.listUpdate(_this19.user.publications, publication.id, publication);
                      });
                      _context13.next = 6;
                      return modal.present();

                    case 6:
                      return _context13.abrupt("return", _context13.sent);

                    case 7:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "openMenuPublication",
          value: function openMenuPublication(publication) {
            var _this20 = this;

            this.dialog.actionSheetEditDelete(function () {
              _this20.editPublication(publication);
            }, function () {
              _this20.dialog.presentAlertConfirm('Alerta', '¿Seguro de eliminar esta aplicación?', function () {
                _this20.publcationModel.api_delete(publication.id).subscribe(function (response) {
                  if (response['status'] = 'success') {
                    _this20.utilArray.listDelete(_this20.user.publications, publication.id);

                    _this20.dialog.showToast('Publicacion Eliminada', null, 'success');
                  }
                });
              });
            });
          }
        }, {
          key: "editPublication",
          value: function editPublication(publication) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this21 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.modalController.create({
                        component: src_app_pages_publications_form_publication_form_publication_page__WEBPACK_IMPORTED_MODULE_11__["FormPublicationPage"],
                        componentProps: {
                          id: publication.id
                        }
                      });

                    case 2:
                      modal = _context14.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('update publicacion');

                        if (data.data && data.data['publication']) {
                          var _publication = data.data['publication'];

                          _this21.utilArray.listUpdate(_this21.user.publications, _publication.id, _publication);
                        }
                      });
                      _context14.next = 6;
                      return modal.present();

                    case 6:
                      return _context14.abrupt("return", _context14.sent);

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }]);

        return PublicationComponent;
      }();

      PublicationComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]
        }, {
          type: src_app_services_util_photo_service__WEBPACK_IMPORTED_MODULE_12__["UtilPhotoService"]
        }];
      };

      PublicationComponent.propDecorators = {
        publication: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['publication']
        }]
      };
      PublicationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./publication.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/publication/publication.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./publication.component.scss */
        "./src/app/components/items-list/publication/publication.component.scss"))["default"]]
      })], PublicationComponent);
      /***/
    },

    /***/
    "./src/app/components/items-list/result-item/result-item.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/components/items-list/result-item/result-item.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsItemsListResultItemResultItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item1 .game {\n  /*color: #FFF;*/\n  width: 100%;\n  padding: 3px;\n  padding: 10px;\n  border-radius: 5px;\n  /*box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);*/\n}\n.item1 .team {\n  position: relative;\n  /*background-image: url(../../../../assets/images/img_fondo_res4.png);*/\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  width: 100%;\n  padding-top: 15px;\n}\n.item1 .avatar {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n}\n.item1 .name-team {\n  padding-left: 15px;\n  display: inline-block;\n  width: 50%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.item1 .goals-team {\n  display: inline-block;\n  width: 30%;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 20px;\n}\n.item2 .team-list {\n  display: block;\n}\n.item2 .goals {\n  width: 30%;\n  min-height: 60px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-size: cover;\n  background-repeat: round;\n}\n.item2 ion-row {\n  background: #c7402f;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 3px;\n  font-size: large;\n}\n.item2 .game {\n  width: 100%;\n  /*background-image: url('/assets/images/img_fondo_part.png');*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  padding: 10px;\n}\n.item2 .team {\n  display: flex;\n  align-items: center;\n  width: 35%;\n  flex-flow: column-reverse;\n}\n.item2 .team-name {\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.item2 .img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n.item2 .contenedor {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n  padding: 10px;\n  background: #0e0e0e6e;\n  border-radius: 20px;\n  color: white;\n}\n.item2 .date {\n  text-align: center;\n}\n.item2 .text-name {\n  margin-top: 15px;\n}\n.suspendido {\n  background-color: #8246464d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtcy1saXN0L3Jlc3VsdC1pdGVtL3Jlc3VsdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0dBQUE7QUFEUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSx1RUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFNSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKUjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVNJO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBSO0FBZ0JJO0VBQ0ksY0FBQTtBQWJSO0FBZUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQWJSO0FBZ0JJO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZFI7QUFpQkk7RUFDSSxXQUFBO0VBQ0EsOERBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQWZSO0FBa0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBaEJSO0FBcUJJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFuQlI7QUF1Qkk7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFyQlI7QUF3Qkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXRCUjtBQXlCSTtFQUNJLGtCQUFBO0FBdkJSO0FBMEJJO0VBQ0ksZ0JBQUE7QUF4QlI7QUE4QkE7RUFDSSwyQkFBQTtBQTNCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbXMtbGlzdC9yZXN1bHQtaXRlbS9yZXN1bHQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtMXtcblxuICAgIC5nYW1le1xuICAgICAgICAvKmNvbG9yOiAjRkZGOyovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLypib3gtc2hhZG93OiBpbnNldCAwIC0zZW0gM2VtIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDAgMnB4IHdoaXRlLCAwLjNlbSAwLjNlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjMpOyovXG4gICAgICAgIC8vZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG5cbiAgICAudGVhbXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltZ19mb25kb19yZXM0LnBuZyk7Ki9cbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5hdmF0YXJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG5cbiAgICAubmFtZS10ZWFte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICB9XG5cbiAgICAuZ29hbHMtdGVhbXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgXG59XG5cblxuLml0ZW0ye1xuXG4gICAgLnRlYW0tbGlzdHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5nb2Fsc3tcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gICAgfVxuXG4gICAgaW9uLXJvd3tcbiAgICAgICAgYmFja2dyb3VuZDogI2M3NDAyZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG4gICAgXG4gICAgLmdhbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW1nX2ZvbmRvX3BhcnQucG5nJyk7Ki9cbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAudGVhbXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLnRlYW0tbmFtZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC5pbWctdGVhbXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7IFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7IFxuICAgICAgICB3aWR0aDozMHB4OyBcbiAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb250ZW5lZG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZTBlMGU2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuZGF0ZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAudGV4dC1uYW1le1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAvL2ZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcbiAgICBcbiAgICB9XG59XG5cbi5zdXNwZW5kaWRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MjQ2NDY0ZDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/items-list/result-item/result-item.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/items-list/result-item/result-item.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ResultItemComponent */

    /***/
    function srcAppComponentsItemsListResultItemResultItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultItemComponent", function () {
        return ResultItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ResultItemComponent = /*#__PURE__*/function () {
        function ResultItemComponent() {
          _classCallCheck(this, ResultItemComponent);

          this.withEvents = false;
        }

        _createClass(ResultItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ResultItemComponent;
      }();

      ResultItemComponent.ctorParameters = function () {
        return [];
      };

      ResultItemComponent.propDecorators = {
        game: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['game']
        }],
        withEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['withEvents']
        }]
      };
      ResultItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./result-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/items-list/result-item/result-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./result-item.component.scss */
        "./src/app/components/items-list/result-item/result-item.component.scss"))["default"]]
      })], ResultItemComponent);
      /***/
    },

    /***/
    "./src/app/components/likes/likes.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/likes/likes.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLikesLikesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlrZXMvbGlrZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/likes/likes.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/likes/likes.component.ts ***!
      \*****************************************************/

    /*! exports provided: LikesComponent */

    /***/
    function srcAppComponentsLikesLikesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LikesComponent", function () {
        return LikesComponent;
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


      var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/paths-images.service */
      "./src/app/services/paths-images.service.ts");

      var LikesComponent = /*#__PURE__*/function () {
        function LikesComponent(pathImages) {
          _classCallCheck(this, LikesComponent);

          this.pathImages = pathImages;
          this.likes = [];
        }

        _createClass(LikesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "init",
          value: function init() {}
        }]);

        return LikesComponent;
      }();

      LikesComponent.ctorParameters = function () {
        return [{
          type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_2__["PathsImagesService"]
        }];
      };

      LikesComponent.propDecorators = {
        likes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['likes']
        }]
      };
      LikesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-likes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./likes.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/likes/likes.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./likes.component.scss */
        "./src/app/components/likes/likes.component.scss"))["default"]]
      })], LikesComponent);
      /***/
    },

    /***/
    "./src/app/components/list-admins/list-admins.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/list-admins/list-admins.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsListAdminsListAdminsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.desc {\n  font-size: small;\n  background: #100f0f5e;\n  padding-top: 6px;\n  padding-left: 13px;\n  padding-bottom: 3px;\n  color: #f1f6f5ad;\n  padding-right: 15px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 10px;\n}\n\n.esc {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWFkbWlucy9saXN0LWFkbWlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LWFkbWlucy9saXN0LWFkbWlucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5kZXNje1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgYmFja2dyb3VuZDogIzEwMGYwZjVlO1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgY29sb3I6ICNmMWY2ZjVhZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5lc2N7XG4gICAgd2lkdGg6IDIwcHg7IFxuICAgIGhlaWdodDogMjBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/list-admins/list-admins.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/list-admins/list-admins.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ListAdminsComponent */

    /***/
    function srcAppComponentsListAdminsListAdminsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListAdminsComponent", function () {
        return ListAdminsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ListAdminsComponent = /*#__PURE__*/function () {
        function ListAdminsComponent() {
          _classCallCheck(this, ListAdminsComponent);

          this.admins = [];
        }

        _createClass(ListAdminsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListAdminsComponent;
      }();

      ListAdminsComponent.ctorParameters = function () {
        return [];
      };

      ListAdminsComponent.propDecorators = {
        admins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['admins']
        }]
      };
      ListAdminsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-admins',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list-admins.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-admins/list-admins.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list-admins.component.scss */
        "./src/app/components/list-admins/list-admins.component.scss"))["default"]]
      })], ListAdminsComponent);
      /***/
    },

    /***/
    "./src/app/components/menu-user/menu-user.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/menu-user/menu-user.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMenuUserMenuUserComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  margin: auto;\n}\n\n.content-image {\n  width: 100px;\n  height: 90px;\n}\n\n.image {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXVzZXIvbWVudS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtdXNlci9tZW51LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRlbnQtaW1hZ2V7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogOTBweDtcbn1cblxuLmltYWdle1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/menu-user/menu-user.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/menu-user/menu-user.component.ts ***!
      \*************************************************************/

    /*! exports provided: MenuUserComponent */

    /***/
    function srcAppComponentsMenuUserMenuUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuUserComponent", function () {
        return MenuUserComponent;
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


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/paths-images.service */
      "./src/app/services/paths-images.service.ts");

      var MenuUserComponent = /*#__PURE__*/function () {
        function MenuUserComponent(authUser, pathImages) {
          _classCallCheck(this, MenuUserComponent);

          this.authUser = authUser;
          this.pathImages = pathImages;
        }

        _createClass(MenuUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }));
          }
        }]);

        return MenuUserComponent;
      }();

      MenuUserComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
        }, {
          type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_3__["PathsImagesService"]
        }];
      };

      MenuUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu-user.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-user/menu-user.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menu-user.component.scss */
        "./src/app/components/menu-user/menu-user.component.scss"))["default"]]
      })], MenuUserComponent);
      /***/
    },

    /***/
    "./src/app/components/mp/btn-paid/btn-paid.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/components/mp/btn-paid/btn-paid.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMpBtnPaidBtnPaidComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXAvYnRuLXBhaWQvYnRuLXBhaWQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/mp/btn-paid/btn-paid.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/mp/btn-paid/btn-paid.component.ts ***!
      \**************************************************************/

    /*! exports provided: BtnPaidComponent */

    /***/
    function srcAppComponentsMpBtnPaidBtnPaidComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BtnPaidComponent", function () {
        return BtnPaidComponent;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var BtnPaidComponent = /*#__PURE__*/function () {
        function BtnPaidComponent() {
          _classCallCheck(this, BtnPaidComponent);
        }

        _createClass(BtnPaidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://sdk.mercadopago.com/js/v2";

            script.onload = function () {
              _this22.initMP();
            };

            document.body.appendChild(script);
          }
        }, {
          key: "initMP",
          value: function initMP() {
            this.mp = new window['MercadoPago'](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mp_public_key);
            this.checkStatusPayment();
          }
        }, {
          key: "checkStatusPayment",
          value: function checkStatusPayment() {
            this.mp.checkout({
              preference: {
                id: this.preference_id
              },
              render: {
                container: '.cho-container',
                label: 'Pagar'
              }
            });
          }
        }]);

        return BtnPaidComponent;
      }();

      BtnPaidComponent.ctorParameters = function () {
        return [];
      };

      BtnPaidComponent.propDecorators = {
        preference_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['preference_id']
        }]
      };
      BtnPaidComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-paid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./btn-paid.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mp/btn-paid/btn-paid.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./btn-paid.component.scss */
        "./src/app/components/mp/btn-paid/btn-paid.component.scss"))["default"]]
      })], BtnPaidComponent);
      /***/
    },

    /***/
    "./src/app/components/my-tollbar/my-tollbar.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/components/my-tollbar/my-tollbar.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMyTollbarMyTollbarComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktdG9sbGJhci9teS10b2xsYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/my-tollbar/my-tollbar.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/my-tollbar/my-tollbar.component.ts ***!
      \***************************************************************/

    /*! exports provided: MyTollbarComponent */

    /***/
    function srcAppComponentsMyTollbarMyTollbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyTollbarComponent", function () {
        return MyTollbarComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var MyTollbarComponent = /*#__PURE__*/function () {
        function MyTollbarComponent(navCtr) {
          _classCallCheck(this, MyTollbarComponent);

          this.navCtr = navCtr;
          this.backDefault = '/';
          this.hasHistory = window.history.state.navigationId > 1;
        }

        _createClass(MyTollbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            console.log('close');

            if (this.backDefault) {
              this.navCtr.navigateForward(this.backDefault);
              return;
            }

            this.navCtr.navigateRoot('/');
          }
        }]);

        return MyTollbarComponent;
      }();

      MyTollbarComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      MyTollbarComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['title']
        }],
        backDefault: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['backDefault']
        }]
      };
      MyTollbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-tollbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-tollbar.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-tollbar/my-tollbar.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-tollbar.component.scss */
        "./src/app/components/my-tollbar/my-tollbar.component.scss"))["default"]]
      })], MyTollbarComponent);
      /***/
    },

    /***/
    "./src/app/components/notFount/not-fount/not-fount.component.scss":
    /*!************************************************************************!*\
      !*** ./src/app/components/notFount/not-fount/not-fount.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNotFountNotFountNotFountComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Rm91bnQvbm90LWZvdW50L25vdC1mb3VudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/notFount/not-fount/not-fount.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/notFount/not-fount/not-fount.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NotFountComponent */

    /***/
    function srcAppComponentsNotFountNotFountNotFountComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFountComponent", function () {
        return NotFountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotFountComponent = /*#__PURE__*/function () {
        function NotFountComponent() {
          _classCallCheck(this, NotFountComponent);
        }

        _createClass(NotFountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFountComponent;
      }();

      NotFountComponent.ctorParameters = function () {
        return [];
      };

      NotFountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-fount',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./not-fount.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notFount/not-fount/not-fount.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./not-fount.component.scss */
        "./src/app/components/notFount/not-fount/not-fount.component.scss"))["default"]]
      })], NotFountComponent);
      /***/
    },

    /***/
    "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNotificationsNotificatioSelectedNotificatioSelectedComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".favorite {\n  /*color: darkturquoise;*/\n}\n\n.btn {\n  border-radius: 50%;\n  padding: 3px;\n}\n\n.ic {\n  position: absolute;\n  color: #6dfb79;\n  top: 22px;\n  right: 6px;\n  font-size: x-large;\n}\n\n.not {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvLXNlbGVjdGVkL25vdGlmaWNhdGlvLXNlbGVjdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpby1zZWxlY3RlZC9ub3RpZmljYXRpby1zZWxlY3RlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXtcbiAgICAvKmNvbG9yOiBkYXJrdHVycXVvaXNlOyovXG59XG5cbi5idG57XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuLmlje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzZkZmI3OTtcbiAgICB0b3A6IDIycHg7XG4gICAgcmlnaHQ6IDZweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5ub3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: NotificatioSelectedComponent */

    /***/
    function srcAppComponentsNotificationsNotificatioSelectedNotificatioSelectedComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificatioSelectedComponent", function () {
        return NotificatioSelectedComponent;
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


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var NotificatioSelectedComponent = /*#__PURE__*/function () {
        function NotificatioSelectedComponent(requesService, dialoogService) {
          _classCallCheck(this, NotificatioSelectedComponent);

          this.requesService = requesService;
          this.dialoogService = dialoogService;
          this.favoriteModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Favorite', requesService);
        }

        _createClass(NotificatioSelectedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleFavorite",
          value: function toggleFavorite() {
            var _this23 = this;

            if (this.object) {
              if (this.isFavorite()) {
                this.favoriteModel.api_delete(this.object.favorite.id).subscribe(function (response) {
                  _this23.object.favorite = null;

                  _this23.dialoogService.showToast('Notificaciones inactivas');

                  console.log(response);
                }, function (error) {
                  console.error(error);
                });
              } else {
                var parms = {
                  table_id: this.table_id,
                  table_name: this.table_name
                };
                this.favoriteModel.api_function('addFavorite', parms).subscribe(function (response) {
                  if (response['status'] == 'success') {
                    _this23.object.favorite = response['data'];

                    _this23.dialoogService.showToast('Recibirás notificaciones de las noticias relevantes de este equipo (Nuevos partidos, Resultados, etc ...)', 'Notificaciones Activas', 'primary', 4000);
                  }
                }, function (error) {
                  console.error(error);
                });
              }
            }
          }
        }, {
          key: "isFavorite",
          value: function isFavorite() {
            return this.object && this.object.favorite ? true : false;
          }
        }, {
          key: "getNameIcon",
          value: function getNameIcon() {
            return !this.isFavorite() ? 'notifications-off-outline' : 'notifications-outline';
          }
        }]);

        return NotificatioSelectedComponent;
      }();

      NotificatioSelectedComponent.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }];
      };

      NotificatioSelectedComponent.propDecorators = {
        object: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['object']
        }],
        table_name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['table_name']
        }],
        table_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['table_id']
        }]
      };
      NotificatioSelectedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificatio-selected',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notificatio-selected.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notificatio-selected.component.scss */
        "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss"))["default"]]
      })], NotificatioSelectedComponent);
      /***/
    },

    /***/
    "./src/app/components/offline/offline.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/offline/offline.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsOfflineOfflineComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".offline {\n  background: red;\n  color: white;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vZmZsaW5lL29mZmxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmbGluZS9vZmZsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmxpbmV7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/offline/offline.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/offline/offline.component.ts ***!
      \*********************************************************/

    /*! exports provided: OfflineComponent */

    /***/
    function srcAppComponentsOfflineOfflineComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfflineComponent", function () {
        return OfflineComponent;
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


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/network.service */
      "./src/app/services/network.service.ts");

      var OfflineComponent = /*#__PURE__*/function () {
        function OfflineComponent(networService) {
          _classCallCheck(this, OfflineComponent);

          this.networService = networService;
        }

        _createClass(OfflineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));
          }
        }]);

        return OfflineComponent;
      }();

      OfflineComponent.ctorParameters = function () {
        return [{
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]
        }];
      };

      OfflineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offline',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./offline.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/offline/offline.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./offline.component.scss */
        "./src/app/components/offline/offline.component.scss"))["default"]]
      })], OfflineComponent);
      /***/
    },

    /***/
    "./src/app/components/player/player-list/player-list.component.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/components/player/player-list/player-list.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPlayerPlayerListPlayerListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".player-list {\n  margin: 5px;\n}\n\n.player-list-photo {\n  width: 100%;\n  vertical-align: middle;\n  border-radius: 5px;\n}\n\n.player-list-name {\n  /*color: black;*/\n}\n\n.name {\n  text-overflow: inherit;\n  overflow: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLWxpc3QvcGxheWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllci1saXN0e1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4ucGxheWVyLWxpc3QtcGhvdG97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wbGF5ZXItbGlzdC1uYW1le1xuICAgIC8qY29sb3I6IGJsYWNrOyovXG59XG5cbi5uYW1le1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/components/player/player-list/player-list.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/components/player/player-list/player-list.component.ts ***!
      \************************************************************************/

    /*! exports provided: PlayerListComponent */

    /***/
    function srcAppComponentsPlayerPlayerListPlayerListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function () {
        return PlayerListComponent;
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


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

      var PlayerListComponent = /*#__PURE__*/function () {
        function PlayerListComponent(photoViewer) {
          _classCallCheck(this, PlayerListComponent);

          var _a;

          this.photoViewer = photoViewer;
          this.loading = false;
          this.eventLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.eventSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.listSkeleton = new Array(5);
          this.items = (_a = this.items) !== null && _a !== void 0 ? _a : [];
        }

        _createClass(PlayerListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.items = 
            console.log('items comp', this.items);
          }
        }, {
          key: "load",
          value: function load(event) {
            console.log('emit comp');
            if (this.eventLoad) this.eventLoad.emit(event);
          }
        }, {
          key: "selectItem",
          value: function selectItem(item) {
            if (this.eventSelect) this.eventSelect.emit(item);
          } //Otras funciones 

        }, {
          key: "getPhoto",
          value: function getPhoto(item) {
            return item['photo'] ? this.getPhotoServer(item['photo']) : 'assets/images/play.png';
          }
        }, {
          key: "getPhotoOr",
          value: function getPhotoOr(item) {
            return item['photo'] ? item['photo'].urlComplete : 'assets/images/jugador.png';
          }
        }, {
          key: "getPhotoServer",
          value: function getPhotoServer(photo) {
            return photo['thumb'] ? photo['urlCompleteThumb'] : photo['urlCompleteThumb'];
          }
        }, {
          key: "showPhoto",
          value: function showPhoto(image) {
            this.photoViewer.show(image.urlComplete);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            console.log('changes');
          }
        }]);

        return PlayerListComponent;
      }();

      PlayerListComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"]
        }];
      };

      PlayerListComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['items']
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['loading']
        }],
        errorLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['errorLoad']
        }],
        firstLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['firstLoading']
        }],
        eventLoad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        eventSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      PlayerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./player-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./player-list.component.scss */
        "./src/app/components/player/player-list/player-list.component.scss"))["default"]]
      })], PlayerListComponent);
      /***/
    },

    /***/
    "./src/app/components/redes/red-list/red-list.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/redes/red-list/red-list.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsRedesRedListRedListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon-red {\n  font-size: 30px;\n}\n\n.name {\n  font-size: large;\n  margin-left: 10px;\n}\n\n.url {\n  font-size: small;\n  color: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRlcy9yZWQtbGlzdC9yZWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsUUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWRlcy9yZWQtbGlzdC9yZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXJlZHtcbiAgICBmb250LXNpemU6IDMwcHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxufVxuXG4ubmFtZXtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXJse1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiAjMDAwMDAwKTtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/redes/red-list/red-list.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/redes/red-list/red-list.component.ts ***!
      \*****************************************************************/

    /*! exports provided: RedListComponent */

    /***/
    function srcAppComponentsRedesRedListRedListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedListComponent", function () {
        return RedListComponent;
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/redes/redes-form/redes-form.page */
      "./src/app/pages/redes/redes-form/redes-form.page.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/payment-team.service */
      "./src/app/services/payment-team.service.ts"); //import { InAppBrowser } from '@ionic-native/in-app-browser';


      var RedListComponent = /*#__PURE__*/function () {
        function RedListComponent(request, dialog, modalController, util, utilArray, nacCtrl, //private platform: Platform,
        inAppBrowser, paymentTeamService //public appAvailability : AppAvailability
        ) {
          _classCallCheck(this, RedListComponent);

          this.request = request;
          this.dialog = dialog;
          this.modalController = modalController;
          this.util = util;
          this.utilArray = utilArray;
          this.nacCtrl = nacCtrl;
          this.inAppBrowser = inAppBrowser;
          this.paymentTeamService = paymentTeamService;
          this.isAdmin = false;
          this.withRefresh = false;
          this.redModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Red', request);
        }

        _createClass(RedListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load(); //this.isAdmin = true;
          }
        }, {
          key: "load",
          value: function load() {
            var _this24 = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.redModel.api_function('pageTeam', {
              nameModel: this.nameModel,
              idModel: this.idModel
            }).subscribe(function (response) {
              _this24.list = response['data'];
              console.log(response);
              if (event) event.target.complete();
            }, function (error) {
              console.error(error);
              if (event) event.target.complete();
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this25 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!(this.nameModel == 'Team' && this.paymentTeamService.noPaid())) {
                        _context17.next = 4;
                        break;
                      }

                      _context17.next = 3;
                      return this.paymentTeamService.showAlert();

                    case 3:
                      return _context17.abrupt("return");

                    case 4:
                      _context17.next = 6;
                      return this.modalController.create({
                        component: src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__["RedesFormPage"],
                        componentProps: {
                          nameModel: this.nameModel,
                          idModel: this.idModel
                        }
                      });

                    case 6:
                      modal = _context17.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data['red']) {
                          var red = data.data['red'];

                          _this25.utilArray.listAddLast(_this25.list, red); //this.redModel.listAddLast(red);

                        }
                      });
                      _context17.next = 10;
                      return modal.present();

                    case 10:
                      return _context17.abrupt("return", _context17.sent);

                    case 11:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "showEdit",
          value: function showEdit(red) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this26 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!(this.nameModel == 'Team' && this.paymentTeamService.noPaid())) {
                        _context18.next = 4;
                        break;
                      }

                      _context18.next = 3;
                      return this.paymentTeamService.showAlert();

                    case 3:
                      return _context18.abrupt("return");

                    case 4:
                      _context18.next = 6;
                      return this.modalController.create({
                        component: src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__["RedesFormPage"],
                        componentProps: {
                          id: red.id
                        }
                      });

                    case 6:
                      modal = _context18.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data['red']) {
                          var _red = data.data['red'];

                          _this26.utilArray.listUpdate(_this26.list, _red.id, _red);
                        }
                      });
                      _context18.next = 10;
                      return modal.present();

                    case 10:
                      return _context18.abrupt("return", _context18.sent);

                    case 11:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(red) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this27 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (!(this.nameModel == 'Team' && this.paymentTeamService.noPaid())) {
                        _context19.next = 4;
                        break;
                      }

                      _context19.next = 3;
                      return this.paymentTeamService.showAlert();

                    case 3:
                      return _context19.abrupt("return");

                    case 4:
                      this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta Red Social', function (e) {
                        _this27["delete"](red);
                      });

                    case 5:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(red) {
            var _this28 = this;

            this.redModel.api_delete(red.id).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 'success') {
                _this28.dialog.showToast('Red social Eliminada', null, 'success');

                _this28.utilArray.listDelete(_this28.list, red.id);
              }
            });
          }
        }, {
          key: "getIcon",
          value: function getIcon(red) {
            switch (red.name) {
              case 'Facebook':
                return 'logo-facebook';

              case 'Instagram':
                return 'logo-instagram';

              case 'WhatsApp':
                return 'logo-whatsapp';

              case 'Twitter':
                return 'logo-twitter';
            }
          }
        }, {
          key: "getColorIcon",
          value: function getColorIcon(red) {
            switch (red.name) {
              case 'Facebook':
                return 'facebook-color';

              case 'Instagram':
                return 'instagram-color';

              case 'WhatsApp':
                return 'whatsapp-color';

              case 'Twitter':
                return 'twitter-color';
            }
          }
        }, {
          key: "openRed",
          value: function openRed(red) {
            if (red && red.url) {
              var baseUrl = '';

              switch (red.name) {
                case 'Facebook':
                  baseUrl = 'https://www.facebook.com/';
                  break;

                case 'Instagram':
                  baseUrl = 'https://www.instagram.com/';
                  break;

                case 'WhatsApp':
                  return 'whatsapp-color';

                case 'Twitter':
                  baseUrl = 'https://twitter.com/';
                  break;
              }
              /*      const browser = this.iab.create(baseUrl + red.url);
              
                    browser.show()
                */

            }
          }
        }, {
          key: "select",
          value: function select(red) {
            this.openAppUrl(red.name, red.url);
          }
        }, {
          key: "openAppUrl",
          value: function openAppUrl(app, name, id) {
            switch (app) {
              case 'Facebook':
                this.openUrl('https://www.facebook.com/' + name);
                break;

              /*
                this.launchApp(
                    'fb://', 'com.facebook.katana',
                    'fb://profile/' + id,
                    'fb://page/' + id,
                    'https://www.facebook.com/' + name);
                  break;*/

              case 'Instagram':
                this.openUrl('https://www.instagram.com/' + name);
                break;

              /*
                  this.launchApp(
                    'instagram://',
                    'com.instagram.android',
                    'instagram://user?username=' + name,
                    'instagram://user?username=' + name,
                    'https://www.instagram.com/' + name);
                  break;*/

              case 'Twitter':
                this.openUrl('https://twitter.com/' + name);

              /*
                  this.launchApp(
                    'twitter://', 'com.twitter.android',
                    'twitter://user?screen_name=' + name,
                    'twitter://user?screen_name=' + name,
                    'https://twitter.com/' + name);
                  break;
                  */

              case 'WhatsApp':
                this.openUrl('https://api.whatsapp.com/send?phone=+549' + name);

              default:
                break;
            }
          }
          /*
          private launchApp(iosApp: string, androidApp: string, appUrlIOS: string, appUrlAndroid: string, webUrl: string) {
              let app: string;
              let appUrl: string;
              // check if the platform is ios or android, else open the web url
              if (this.platform.is('ios')) {
                app = iosApp;
                appUrl = appUrlIOS;
              } else if (this.platform.is('android')) {
                app = androidApp;
                appUrl = appUrlAndroid;
              } else {
                const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
                return;
              }
              this.appAvailability.check(app).then(
                  () => {
                      // success callback, the app exists and we can open it
                      const browser: InAppBrowserObject = this.inAppBrowser.create(appUrl, '_system');
                  },
                  () => {
                      // error callback, the app does not exist, open regular web url instead
                      const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
                  }
              );
          }
          */

        }, {
          key: "openUrl",
          value: function openUrl(url) {
            var browser = this.inAppBrowser.create(url, '_self');
          }
        }]);

        return RedListComponent;
      }();

      RedListComponent.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
        }, {
          type: src_app_services_payment_team_service__WEBPACK_IMPORTED_MODULE_10__["PaymentTeamService"]
        }];
      };

      RedListComponent.propDecorators = {
        nameModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['nameModel']
        }],
        idModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['idModel']
        }],
        isAdmin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['isAdmin']
        }],
        withRefresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['withRefresh']
        }]
      };
      RedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-red-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./red-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./red-list.component.scss */
        "./src/app/components/redes/red-list/red-list.component.scss"))["default"]]
      })], RedListComponent);
      /***/
    },

    /***/
    "./src/app/components/search/search.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/search/search.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/search/search.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/search/search.component.ts ***!
      \*******************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent() {
          _classCallCheck(this, SearchComponent);
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCancel",
          value: function onCancel(event) {}
        }, {
          key: "onInput",
          value: function onInput(event) {}
        }, {
          key: "showCancelButton",
          value: function showCancelButton() {}
        }]);

        return SearchComponent;
      }();

      SearchComponent.ctorParameters = function () {
        return [];
      };

      SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.component.scss */
        "./src/app/components/search/search.component.scss"))["default"]]
      })], SearchComponent);
      /***/
    },

    /***/
    "./src/app/components/statistics/team-statistics/team-statistics.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/statistics/team-statistics/team-statistics.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsStatisticsTeamStatisticsTeamStatisticsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".value {\n  transform: skew(20deg);\n  background: #4793b0a6;\n  padding: 10px;\n  color: white;\n}\n\nion-text.value {\n  background-color: #4793b0;\n  font-weight: bold;\n}\n\n.circle {\n  width: 100px;\n  height: 100px;\n  background: red;\n  border-radius: 50%;\n}\n\n.v {\n  font-weight: bold;\n}\n\nion-col {\n  margin-right: 2px;\n  border-right: 0.5px solid #ffffff75;\n  border-left: 0.5px solid #ffffff75;\n}\n\n.titles {\n  border-bottom: 0.5px solid #ffffff75;\n}\n\n.desc {\n  font-size: small;\n  background: #100f0f5e;\n  padding-top: 6px;\n  padding-left: 13px;\n  padding-bottom: 3px;\n  color: #f1f6f5ad;\n  padding-right: 15px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 10px;\n}\n\n.st {\n  background: #100f0f5e;\n}\n\n.content {\n  padding: 10px;\n}\n\n.alert {\n  font-size: x-small;\n  color: #fffafa;\n  font-family: unset;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background: #1d1d1d91;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3RlYW0tc3RhdGlzdGljcy90ZWFtLXN0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQ0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXRpc3RpY3MvdGVhbS1zdGF0aXN0aWNzL3RlYW0tc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWx1ZXtcbiAgICB0cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xuICAgIGJhY2tncm91bmQ6ICM0NzkzYjBhNjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi10ZXh0LnZhbHVle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3OTNiMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxuICB9XG5cbiAgLnZ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBpb24tY29se1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgI2ZmZmZmZjc1O1xuICAgIGJvcmRlci1sZWZ0OiAwLjVweCBzb2xpZCAjZmZmZmZmNzU7XG4gIH1cblxuICAudGl0bGVze1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNmZmZmZmY3NTtcbiAgfVxuXG4gIC5kZXNje1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgYmFja2dyb3VuZDogIzEwMGYwZjVlO1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgY29sb3I6ICNmMWY2ZjVhZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuc3R7XG4gICAgYmFja2dyb3VuZDogIzEwMGYwZjVlO1xuXG4gIH1cblxuICAuY29udGVudHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmFsZXJ0e1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjogI2ZmZmFmYTtcbiAgICBmb250LWZhbWlseTogdW5zZXQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQxZDFkOTE7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/statistics/team-statistics/team-statistics.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/statistics/team-statistics/team-statistics.component.ts ***!
      \************************************************************************************/

    /*! exports provided: TeamStatisticsComponent */

    /***/
    function srcAppComponentsStatisticsTeamStatisticsTeamStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamStatisticsComponent", function () {
        return TeamStatisticsComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TeamStatisticsComponent = /*#__PURE__*/function () {
        function TeamStatisticsComponent(requestService, router) {
          _classCallCheck(this, TeamStatisticsComponent);

          this.router = router;
          this.modelTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', requestService);
          console.log('app-team-statistics id:', this.id);
          console.log('app-team-statistics list:', this.list);
        }

        _createClass(TeamStatisticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load();
          }
        }, {
          key: "load",
          value: function load() {
            var _this29 = this;

            if (!this.list) if (this.id) {
              this.modelTeam.api_loadAttribute(this.id, 'statistics').subscribe(function (response) {
                if (response['status'] == 'success') {
                  _this29.list = response['Team']['statistics'];
                }
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            //console.log('changes')
            if (changes['list']) {
              console.log('change'); //this.loadCooments();
            }

            if (changes['id']) {
              this.load();
            }
          }
        }, {
          key: "showGames",
          value: function showGames(status) {
            if (status) {
              this.router.navigateByUrl('/team/' + this.id + '/games/' + status.toLowerCase());
            }
          }
        }]);

        return TeamStatisticsComponent;
      }();

      TeamStatisticsComponent.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      TeamStatisticsComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['list']
        }]
      };
      TeamStatisticsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-statistics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./team-statistics.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statistics/team-statistics/team-statistics.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./team-statistics.component.scss */
        "./src/app/components/statistics/team-statistics/team-statistics.component.scss"))["default"]]
      })], TeamStatisticsComponent);
      /***/
    },

    /***/
    "./src/app/components/team-list-any-game/team-list-any-game.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/team-list-any-game/team-list-any-game.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTeamListAnyGameTeamListAnyGameComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS1saXN0LWFueS1nYW1lL3RlYW0tbGlzdC1hbnktZ2FtZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/team-list-any-game/team-list-any-game.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/team-list-any-game/team-list-any-game.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: TeamListAnyGameComponent */

    /***/
    function srcAppComponentsTeamListAnyGameTeamListAnyGameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamListAnyGameComponent", function () {
        return TeamListAnyGameComponent;
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
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var TeamListAnyGameComponent = /*#__PURE__*/function () {
        function TeamListAnyGameComponent(requestService, dialogService, util) {
          _classCallCheck(this, TeamListAnyGameComponent);

          this.requestService = requestService;
          this.dialogService = dialogService;
          this.util = util;
          this.teamModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', requestService);
        }

        _createClass(TeamListAnyGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load();
          }
        }, {
          key: "load",
          value: function load() {
            var evet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this30 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      if (!this.games) {
                        this.teamModel.api_loadAttribute(this.id, 'games').subscribe(function (response) {
                          _this30.games = response['Team']['games']; //console.log(this);

                          _this30.selectNextDate();
                        }, function (error) {
                          console.log(error);
                        });
                      }

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "selectNextDate",
          value: function selectNextDate() {
            var _this31 = this;

            var date = this.getNextDate();
            console.log('select date ', date);

            if (date) {
              setTimeout(function () {
                _this31.util.scrollTo(date);
              }, 1000);
            }
          }
        }, {
          key: "getNextDate",
          value: function getNextDate() {
            var ret = null;
            var date = moment__WEBPACK_IMPORTED_MODULE_6__["now"](); // this.util.setFormatMoment(new Date() , 'YYYY-MM-DD');

            this.games.forEach(function (element) {
              //console.log(element);
              if (!ret && moment__WEBPACK_IMPORTED_MODULE_6__(element.date).isAfter(date)) {
                ret = element.date;
              }
            });
            return ret;
          }
        }]);

        return TeamListAnyGameComponent;
      }();

      TeamListAnyGameComponent.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      TeamListAnyGameComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['ion-content']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }],
        games: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['games']
        }]
      };
      TeamListAnyGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-list-any-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./team-list-any-game.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-list-any-game/team-list-any-game.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./team-list-any-game.component.scss */
        "./src/app/components/team-list-any-game/team-list-any-game.component.scss"))["default"]]
      })], TeamListAnyGameComponent);
      /***/
    },

    /***/
    "./src/app/pages/game/game-form/game-form.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/game/game-form/game-form.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameGameFormGameFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS1mb3JtL2dhbWUtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/game/game-form/game-form.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/game/game-form/game-form.page.ts ***!
      \********************************************************/

    /*! exports provided: GameFormPage */

    /***/
    function srcAppPagesGameGameFormGameFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameFormPage", function () {
        return GameFormPage;
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


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/photo.service */
      "./src/app/services/photo.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var _team_form_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../team/form/form.page */
      "./src/app/pages/team/form/form.page.ts");

      var GameFormPage = /*#__PURE__*/function () {
        function GameFormPage(request, dialogService, viewCtrl, photoService, navParams, modalController) {
          _classCallCheck(this, GameFormPage);

          var _a;

          this.request = request;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.photoService = photoService;
          this.modalController = modalController;
          this.teams = [];
          this.numbGoals = [];
          this.customDayShortNames = ["s\xF8n"];
          this.status = ['Pendiente', 'Suspendido', 'Jugado', 'Created'];

          this.myDateFilter = function (d) {
            var day = d.getDay(); // Prevent Saturday and Sunday from being selected.

            return day == 6;
          };

          this.serviceGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Game', request);
          this.serviceTeam = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Team', request); //this.serviceTeam.setModel('Team');

          this.id = navParams.get('id');
          this.toDate = (_a = navParams.get('date')) !== null && _a !== void 0 ? _a : new Date();
          console.log('date', this.toDate);
        }

        _createClass(GameFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            this.serviceTeam.api_function('getAllTeamsSelect').subscribe(function (data) {
              if (data['data']) {
                _this32.teams = data['data'];
                console.log('teams -> ', _this32.teams); //this.serviceGame.setModel('Game');
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
            var _this33 = this;

            this.game = {
              l_team: '',
              v_team: '',
              l_goals: 0,
              v_goals: 0,
              time: '15:00',
              date: this.toDate,
              location: '',
              description: '',
              status: 'Pendiente'
            };

            if (this.id) {
              this.serviceGame.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this33.game = data['Game'];
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this34 = this;

            if (this.game.id) {
              this.serviceGame.api_update(this.game).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this34.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  console.log(data);

                  _this34.dismiss(data['Game']);
                }
              });
            } else {
              this.serviceGame.api_create(this.game).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this34.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this34.dismiss(data['Game']);
                }
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(game) {
            this.viewCtrl.dismiss({
              game: game
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "print",
          value: function print() {
            console.log(this.game);
          }
        }, {
          key: "newTeam",
          value: function newTeam() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this35 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.modalController.create({
                        component: _team_form_form_page__WEBPACK_IMPORTED_MODULE_7__["FormPage"]
                      });

                    case 2:
                      modal = _context21.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data['team']) {
                          var team = data.data['team'];

                          _this35.teams.push(team);
                        }
                      });
                      _context21.next = 6;
                      return modal.present();

                    case 6:
                      return _context21.abrupt("return", _context21.sent);

                    case 7:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }]);

        return GameFormPage;
      }();

      GameFormPage.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      GameFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./game-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game-form/game-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./game-form.page.scss */
        "./src/app/pages/game/game-form/game-form.page.scss"))["default"]]
      })], GameFormPage);
      /***/
    },

    /***/
    "./src/app/pages/publications/form-publication/form-publication.page.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/publications/form-publication/form-publication.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPublicationsFormPublicationFormPublicationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".name-user {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL2Zvcm0tcHVibGljYXRpb24vZm9ybS1wdWJsaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL2Zvcm0tcHVibGljYXRpb24vZm9ybS1wdWJsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS11c2Vye1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/publications/form-publication/form-publication.page.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/publications/form-publication/form-publication.page.ts ***!
      \******************************************************************************/

    /*! exports provided: FormPublicationPage */

    /***/
    function srcAppPagesPublicationsFormPublicationFormPublicationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormPublicationPage", function () {
        return FormPublicationPage;
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


      var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/models/modelImage */
      "./src/app/api/models/modelImage.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/paths-images.service */
      "./src/app/services/paths-images.service.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");

      var FormPublicationPage = /*#__PURE__*/function (_src_app_models_modal) {
        _inherits(FormPublicationPage, _src_app_models_modal);

        var _super = _createSuper(FormPublicationPage);

        function FormPublicationPage(request, dialogService, viewCtrl, photoService, navParams, authUser, pathImages, location, chatService) {
          var _this36;

          _classCallCheck(this, FormPublicationPage);

          _this36 = _super.call(this, location, viewCtrl);
          _this36.request = request;
          _this36.dialogService = dialogService;
          _this36.viewCtrl = viewCtrl;
          _this36.photoService = photoService;
          _this36.authUser = authUser;
          _this36.pathImages = pathImages;
          _this36.chatService = chatService;
          _this36.posting = false;

          _this36.myDateFilter = function (d) {
            var day = d.getDay();
            return day == 6;
          };

          _this36.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__["ModelImage"](request, viewCtrl);

          _this36.photoModel.init('images/publications/', false);

          _this36.photoModel.setAspectRatioCrop('none');

          _this36.servicePublication = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Publication', request); //this.serviceTeam.setModel('Team');

          console.log('user auth', authUser.user);
          _this36.id = navParams.get('id');
          return _this36;
        }

        _createClass(FormPublicationPage, [{
          key: "initObject",
          value: function initObject() {
            var _this37 = this;

            this.photoModel.setElementImg('img_publication');
            this.user = this.authUser.user; //await this.authUser.getUser();

            console.log('user', this.user);
            this.publication = {
              text: '',
              user_id: this.user.id
            };

            if (this.id) {
              this.servicePublication.api_find(this.id).subscribe(function (data) {
                if (data['status'] == 'success') {
                  _this37.publication = data['Publication'];

                  if (_this37.publication.image) {
                    _this37.photoModel.setImage(_this37.publication.image);
                  }
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this38 = this;

            try {
              this.validSend();
            } catch (e) {
              this.dialogService.showToast(e.message, null, 'danger');
              return;
            }

            if (this.photoModel.isLoadPthoto()) {
              this.publication.image = this.photoModel.getImageUpload();
            }

            this.posting = true;

            if (this.publication.id) {
              this.servicePublication.api_update(this.publication).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this38.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  console.log(data);

                  _this38.dismiss(data['Publication']);
                }

                _this38.posting = false;
              }, function (error) {
                _this38.posting = false;
              });
            } else {
              this.servicePublication.api_create(this.publication).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this38.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this38.dismiss(data['Publication']);
                }

                _this38.posting = false;
              }, function (error) {
                _this38.posting = false;
              });
            }
          }
        }, {
          key: "validSend",
          value: function validSend() {
            console.log('valid');

            if (!this.photoModel.isLoadPthoto() && this.publication.text.length == 0) {
              throw new Error('Debe escribir algo en la publicación o añadir una imagen.');
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(publication) {
            this.viewCtrl.dismiss({
              publication: publication
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "print",
          value: function print() {
            console.log(this.publication);
          }
        }]);

        return FormPublicationPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_10__["ModalForm"]);

      FormPublicationPage.ctorParameters = function () {
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
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_9__["PathsImagesService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"]
        }];
      };

      FormPublicationPage.propDecorators = {
        form_c: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['form_c']
        }],
        img_publication: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['img_publication']
        }]
      };
      FormPublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./form-publication.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./form-publication.page.scss */
        "./src/app/pages/publications/form-publication/form-publication.page.scss"))["default"]]
      })], FormPublicationPage);
      /***/
    },

    /***/
    "./src/app/pages/publications/publication/publication.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/publications/publication/publication.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPublicationsPublicationPublicationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".publication-user {\n  display: flex;\n}\n.publication-user .user {\n  display: block;\n}\n.publication-user .user .name {\n  margin-top: 5px;\n  font-size: medium;\n}\n.publication-user .user .date {\n  margin-left: 5px;\n  font-size: xx-small;\n}\n.publication-text {\n  margin: 10px;\n  margin-left: 15px;\n  font-size: medium;\n}\n.publication-image {\n  align-self: auto;\n}\n.separator {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: solid 1px rgba(63, 62, 62, 0.671);\n}\n.sgm-likes {\n  --ion-color-base: #e73636 !important;\n}\n.sgm-comments {\n  --ion-color-base: #277ecf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljYXRpb25zL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUFaO0FBTUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUE7RUFDSSxnQkFBQTtBQUhKO0FBTUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUFISjtBQU1BO0VBQ0ksb0NBQUE7QUFISjtBQU1BO0VBQ0ksb0NBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbi9wdWJsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVibGljYXRpb24tdXNlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnVzZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5kYXRle1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLnB1YmxpY2F0aW9uLXRleHR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ucHVibGljYXRpb24taW1hZ2V7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLnNlcGFyYXRvcntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoNjMsIDYyLCA2MiwgMC42NzEpO1xufVxuXG4uc2dtLWxpa2Vze1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNlNzM2MzYgIWltcG9ydGFudDtcbn1cblxuLnNnbS1jb21tZW50c3tcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMjc3ZWNmICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/publications/publication/publication.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/publications/publication/publication.page.ts ***!
      \********************************************************************/

    /*! exports provided: PublicationPage */

    /***/
    function srcAppPagesPublicationsPublicationPublicationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicationPage", function () {
        return PublicationPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/transfer-data.service */
      "./src/app/services/transfer-data.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util-array.service */
      "./src/app/services/util-array.service.ts");
      /* harmony import */


      var src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/paths-images.service */
      "./src/app/services/paths-images.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var PublicationPage = /*#__PURE__*/function () {
        function PublicationPage(request, navParams, util, utilArray, viewCtrl, transferData, route, navCtrl, authUser, pathImages, dialogService, platform) {
          var _this39 = this;

          _classCallCheck(this, PublicationPage);

          this.request = request;
          this.navParams = navParams;
          this.util = util;
          this.utilArray = utilArray;
          this.viewCtrl = viewCtrl;
          this.transferData = transferData;
          this.route = route;
          this.navCtrl = navCtrl;
          this.authUser = authUser;
          this.pathImages = pathImages;
          this.dialogService = dialogService;
          this.platform = platform;
          this.segment = 'comments';
          this.isModal = true;
          this.firstLoading = true;
          this.notFound = false;
          this.publicationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Publication', request);
          this.id = this.navParams.get('id');
          this.segment = this.navParams.get('segment');
          this.platform.backButton.subscribeWithPriority(100, function () {
            alert('close');

            _this39.close();
          });
        }

        _createClass(PublicationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      //if(await this.navParams.get('id')){
                      //await this.util.delay(500)
                      if (!this.id) {
                        this.isModal = false;
                        this.id = this.route.snapshot.paramMap.get('id');
                        this.segment = this.route.snapshot.paramMap.get('segment') == 'likes' ? 'likes' : 'comments';
                      }

                      this.init();

                    case 2:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "init",
          value: function init() {
            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var _this40 = this;

              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      if (!this.firstLoading) {
                        _context23.next = 4;
                        break;
                      }

                      _context23.next = 3;
                      return this.dialogService.loadingProgres();

                    case 3:
                      this.firstLoading = false;

                    case 4:
                      this.publicationModel.api_functionModel(this.id, 'pageShow').subscribe(function (response) {
                        console.log(response);
                        _this40.publication = response['data'];
                        if ($event) $event.target.complete();

                        _this40.dialogService.dimissLoaging();
                      }, function (error) {
                        if (_this40.util.notFoundItemApi(error)) {
                          _this40.notFound = true;
                        } //this.notFound = true;


                        console.log(error);
                        if ($event) $event.target.complete();

                        _this40.dialogService.dimissLoaging();
                      });

                    case 5:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            this.publication.comments_count = this.publication.comments.length;
            this.publication.likes_count = this.publication.likes.length;
            this.viewCtrl.dismiss({
              publication: this.publication
            });
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {
            console.log('Segment changed', $event);
            this.segment = $event.detail.value;
          }
        }, {
          key: "updateComments",
          value: function updateComments($event, publication) {
            publication.comments = $event;
          }
        }]);

        return PublicationPage;
      }();

      PublicationPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_9__["UtilArrayService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_6__["TransferDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"]
        }, {
          type: src_app_services_paths_images_service__WEBPACK_IMPORTED_MODULE_10__["PathsImagesService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      PublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./publication.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publication/publication.page.html"))["default"],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./publication.page.scss */
        "./src/app/pages/publications/publication/publication.page.scss"))["default"]]
      })], PublicationPage);
      /***/
    },

    /***/
    "./src/app/pages/redes/redes-form/redes-form.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/redes/redes-form/redes-form.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRedesRedesFormRedesFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGVzL3JlZGVzLWZvcm0vcmVkZXMtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/redes/redes-form/redes-form.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/redes/redes-form/redes-form.page.ts ***!
      \***********************************************************/

    /*! exports provided: RedesFormPage */

    /***/
    function srcAppPagesRedesRedesFormRedesFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedesFormPage", function () {
        return RedesFormPage;
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


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/modal-form */
      "./src/app/models/modal-form.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/chat.service */
      "./src/app/services/chat.service.ts");

      var RedesFormPage = /*#__PURE__*/function (_src_app_models_modal2) {
        _inherits(RedesFormPage, _src_app_models_modal2);

        var _super2 = _createSuper(RedesFormPage);

        function RedesFormPage(request, dialogService, viewCtrl, navParams, location, chatService) {
          var _this41;

          _classCallCheck(this, RedesFormPage);

          _this41 = _super2.call(this, location, viewCtrl);
          _this41.request = request;
          _this41.dialogService = dialogService;
          _this41.viewCtrl = viewCtrl;
          _this41.navParams = navParams;
          _this41.chatService = chatService;
          _this41.redes = ['Facebook', 'Instagram', 'WhatsApp', 'Twitter'];
          _this41.placeholders = {
            'Facebook': 'Fútbol-8-Alem-1730791230489387',
            'Instagram': 'atlantaf8/',
            'WhatsApp': '3754453618',
            'Twitter': ''
          };
          _this41.names = {
            'Facebook': 'Pagina de Facebook',
            'Instagram': 'Pagina de Instagram',
            'WhatsApp': 'Telefono',
            'Twitter': 'Cuenta de twitter'
          };
          _this41.redModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Red', request);
          _this41.id = navParams.get('id');
          _this41.idModel = navParams.get('idModel');
          _this41.nameModel = navParams.get('nameModel');
          return _this41;
        }

        _createClass(RedesFormPage, [{
          key: "initObject",
          value: function initObject() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this42 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      this.red = {
                        name: '',
                        url: '',
                        name_model: this.nameModel,
                        model_id: this.idModel
                      };

                      if (!this.id) {
                        _context24.next = 5;
                        break;
                      }

                      _context24.next = 4;
                      return this.dialogService.loadingProgres(null);

                    case 4:
                      this.redModel.api_find(this.id).subscribe(function (response) {
                        _this42.red = response['Red'];

                        _this42.dialogService.dimissLoaging();
                      });

                    case 5:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "submit",
          value: function submit() {
            this.saveRed();
          }
        }, {
          key: "dismiss",
          value: function dismiss(red) {
            this.viewCtrl.dismiss({
              red: red
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "saveRed",
          value: function saveRed() {
            var _this43 = this;

            if (this.red.id) {
              this.redModel.api_update(this.red).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this43.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this43.dismiss(data['Red']);
                }
              });
            } else {
              this.redModel.api_create(this.red).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this43.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this43.dismiss(data['Red']);
                }
              });
            }
          }
        }]);

        return RedesFormPage;
      }(src_app_models_modal_form__WEBPACK_IMPORTED_MODULE_6__["ModalForm"]);

      RedesFormPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
        }];
      };

      RedesFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redes-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redes-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redes-form.page.scss */
        "./src/app/pages/redes/redes-form/redes-form.page.scss"))["default"]]
      })], RedesFormPage);
      /***/
    },

    /***/
    "./src/app/services/paths-images.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/paths-images.service.ts ***!
      \**************************************************/

    /*! exports provided: PathsImagesService */

    /***/
    function srcAppServicesPathsImagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PathsImagesService", function () {
        return PathsImagesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PathsImagesService = function PathsImagesService() {
        _classCallCheck(this, PathsImagesService);

        this.images = {
          'profile_user': 'assets/images/profile.jpg',
          'escudo': 'assets/images/escudo.png',
          'team': 'assets/images/shield_team.png',
          'player': 'assets/images/jugador.png'
        };
      };

      PathsImagesService.ctorParameters = function () {
        return [];
      };

      PathsImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PathsImagesService);
      /***/
    },

    /***/
    "./src/app/services/util-photo.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/util-photo.service.ts ***!
      \************************************************/

    /*! exports provided: UtilPhotoService */

    /***/
    function srcAppServicesUtilPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilPhotoService", function () {
        return UtilPhotoService;
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


      var _paths_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./paths-images.service */
      "./src/app/services/paths-images.service.ts");

      var UtilPhotoService = /*#__PURE__*/function () {
        function UtilPhotoService(pathImages) {
          _classCallCheck(this, UtilPhotoService);

          this.pathImages = pathImages;
        }

        _createClass(UtilPhotoService, [{
          key: "getPhotoPlayer",
          value: function getPhotoPlayer(player) {
            var thumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return player && player.photo ? thumb ? player.photo.urlCompleteThumb : player.photo.urlComplete : this.pathImages.images.player;
          }
        }, {
          key: "getPhotoUser",
          value: function getPhotoUser(user) {
            var thumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return user && user.photo ? thumb ? user.photo.urlCompleteThumb : user.photo.urlComplete : this.pathImages.images.profile_user;
          }
        }, {
          key: "showImage",
          value: function showImage(image) {
            if (image) {}
          }
        }]);

        return UtilPhotoService;
      }();

      UtilPhotoService.ctorParameters = function () {
        return [{
          type: _paths_images_service__WEBPACK_IMPORTED_MODULE_2__["PathsImagesService"]
        }];
      };

      UtilPhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilPhotoService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-balance-sheet-months-months-module~pages-balance-sheet-payments-balance-payments-balan~9d9d9e3d-es5.js.map