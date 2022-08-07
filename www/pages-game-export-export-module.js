(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-export-export-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/export/export.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/export/export.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Compartir Imagen</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/results\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"contenedor pendding\" id=\"export\" *ngIf=\"game \">\n\n    <div class=\"logo\">\n      <img src=\"assets/icon/favicon.png\">\n    </div>\n    <p class=\"page\">futbol-alem.com</p>\n\n   \n\n    <div class=\"teams\">\n      <div class=\"team\">\n        <img [src]=\"game.team_l.shield ? game.team_l.shield.urlCompleteThumb : 'assets/images/esc.png'\" class=\"esc\">\n        <div class=\"team_name\">{{game.team_l.name}}</div>\n        <div class=\"team_goal\"  >{{game.l_goals}}</div>\n      </div>\n\n      <div class=\"vs\">\n        Vs\n      </div>\n\n      <div class=\"team\">\n        <img  [src]=\"game.team_v.shield ? game.team_v.shield.urlCompleteThumb : 'assets/images/esc.png'\" class=\"esc_left\">\n        <div class=\"team_name team_name_v\">{{game.team_v.name}}</div>\n        <img  [src]=\"game.team_v.shield ? game.team_v.shield.urlCompleteThumb : 'assets/images/esc.png'\" class=\"esc_right\">\n        <div class=\"team_goal\"  >{{game.v_goals}}</div>\n      </div>\n    </div>\n\n\n    <div class=\"detail\">\n      <div class=\"status\">{{game.status}}</div>\n      <div class=\"date\">{{util.setFormatMoment(game.date,'DD/M/YYYY')}}</div>\n      <div class=\"time\">{{ util.formatHours( game.time )}}</div>\n    </div>\n\n  </div>\n\n  <img [src]=\"htmlToImageService.src\"  *ngIf=\"htmlToImageService.src\" class=\"img_result\">\n\n  <div class=\"ion-text-center\">\n\n  \n    <ion-button (click)=\"facebook()\" *ngIf=\"inServer\">Facebook</ion-button>\n    <br>\n    <ion-button (click)=\"export()\">Descargar Imagen</ion-button>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/export/export-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/game/export/export-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ExportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPageRoutingModule", function() { return ExportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _export_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export.page */ "./src/app/pages/game/export/export.page.ts");




var routes = [
    {
        path: '',
        component: _export_page__WEBPACK_IMPORTED_MODULE_3__["ExportPage"]
    }
];
var ExportPageRoutingModule = /** @class */ (function () {
    function ExportPageRoutingModule() {
    }
    ExportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExportPageRoutingModule);
    return ExportPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/game/export/export.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/game/export/export.module.ts ***!
  \****************************************************/
/*! exports provided: ExportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPageModule", function() { return ExportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _export_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./export-routing.module */ "./src/app/pages/game/export/export-routing.module.ts");
/* harmony import */ var _export_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./export.page */ "./src/app/pages/game/export/export.page.ts");







var ExportPageModule = /** @class */ (function () {
    function ExportPageModule() {
    }
    ExportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _export_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExportPageRoutingModule"]
            ],
            declarations: [_export_page__WEBPACK_IMPORTED_MODULE_6__["ExportPage"]]
        })
    ], ExportPageModule);
    return ExportPageModule;
}());



/***/ }),

/***/ "./src/app/pages/game/export/export.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/game/export/export.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenedor {\n  position: absolute;\n  width: 600px;\n  height: 300px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  background-image: url(\"/assets/images/bg.jpg\");\n  background-repeat: repeat;\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding-top: 50px;\n  padding-bottom: 10px;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.teams {\n  border-radius: 5px;\n  margin: auto;\n}\n\n.teams .team {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  font-size: xx-large;\n}\n\n.teams .team img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 10%;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n}\n\n.teams .team .team_name {\n  width: 70%;\n  padding-left: 5px;\n}\n\n.teams .team .team_goal {\n  width: 20%;\n  text-align: center;\n}\n\n.detail {\n  margin: auto;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.detail .status {\n  background-color: red;\n  padding: 3px;\n  border-radius: 10px;\n  text-align: center;\n  display: inline;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.detail .date {\n  margin-top: 5px;\n  color: #ffffff91;\n}\n\n.detail .time {\n  color: #ffffff91;\n}\n\n.logo {\n  position: absolute;\n}\n\n.logo img {\n  opacity: 0.1;\n  width: 150px;\n  height: 150px;\n}\n\n.img_result {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.page {\n  position: absolute;\n  bottom: -10px;\n  right: 60px;\n  opacity: 0.6;\n}\n\n.esc_left {\n  display: inline-block;\n}\n\n.esc_right {\n  display: none;\n}\n\n.vs {\n  display: none;\n  text-align: center;\n  font-family: -webkit-body;\n  font-size: large;\n}\n\n.pendding .esc_left {\n  display: none;\n}\n\n.pendding .esc_right {\n  display: inline-block;\n}\n\n.pendding .team_name_v {\n  text-align: end;\n}\n\n.pendding .team_goal {\n  width: 0%;\n  display: none;\n}\n\n.pendding .vs {\n  display: block;\n}\n\n.pendding .team_name {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9leHBvcnQvZXhwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBREo7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBR1E7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEWjs7QUFLUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUhaOztBQU1RO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBSlo7O0FBWUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVdJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBVFI7O0FBY0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFaUjs7QUFlSTtFQUNJLGdCQUFBO0FBYlI7O0FBaUJBO0VBQ0ksa0JBQUE7QUFkSjs7QUFpQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFmUjs7QUFvQkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQWpCSjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWxCSjs7QUFxQkE7RUFDSSxxQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxhQUFBO0FBbEJKOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFsQko7O0FBdUJJO0VBQ0ksYUFBQTtBQXBCUjs7QUF1Qkk7RUFDSSxxQkFBQTtBQXJCUjs7QUF3Qkk7RUFDSSxlQUFBO0FBdEJSOztBQXlCSTtFQUNJLFNBQUE7RUFDQSxhQUFBO0FBdkJSOztBQTBCSTtFQUNJLGNBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksc0JBQUE7QUF6QlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYW1lL2V4cG9ydC9leHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGVuZWRvcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcuanBnJykgOyBcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuXG4udGVhbXN7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAudGVhbXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcblxuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOztcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAudGVhbV9uYW1le1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlYW1fZ29hbHtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG5cbi5kZXRhaWx7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLnN0YXR1c3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgICB9XG5cblxuICAgIC5kYXRle1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOTE7XG4gICAgfVxuXG4gICAgLnRpbWV7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOTE7XG4gICAgfVxufVxuXG4ubG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cblxuICAgIGltZ3tcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG5cbiAgICB9XG59XG5cbi5pbWdfcmVzdWx0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5cbi5wYWdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLmVzY19sZWZ0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVzY19yaWdodHtcbiAgICBkaXNwbGF5OiBub25lOztcbn1cblxuLnZze1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAtd2Via2l0LWJvZHk7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnBlbmRkaW5ne1xuXG4gICAgLmVzY19sZWZ0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5lc2NfcmlnaHR7XG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC50ZWFtX25hbWVfdntcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC50ZWFtX2dvYWx7XG4gICAgICAgIHdpZHRoOjAlO1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLnZze1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAudGVhbV9uYW1le1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/game/export/export.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/game/export/export.page.ts ***!
  \**************************************************/
/*! exports provided: ExportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPage", function() { return ExportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_html_to_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/html-to-image.service */ "./src/app/services/html-to-image.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sharer.service */ "./src/app/services/sharer.service.ts");
/* harmony import */ var src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/screen-loading.service */ "./src/app/services/screen-loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");











var ExportPage = /** @class */ (function () {
    function ExportPage(navCtr, route, requesService, util, htmlToImageService, shareService, loadingService) {
        this.navCtr = navCtr;
        this.route = route;
        this.requesService = requesService;
        this.util = util;
        this.htmlToImageService = htmlToImageService;
        this.shareService = shareService;
        this.loadingService = loadingService;
        this.inServer = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requesService);
    }
    ExportPage.prototype.ngOnInit = function () {
        this.init();
    };
    ExportPage.prototype.init = function (event) {
        if (event === void 0) { event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.loadingService.start();
                this.gameModel.api_functionModel(this.id, 'dataProfile').subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (data['status'] == 'success')
                                    this.game = data['data'];
                                console.log('Game', this.game);
                                return [4 /*yield*/, this.util.delay(100)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.htmlToImageService.run('export')];
                            case 2:
                                _a.sent();
                                //this.game = null;
                                //await this.util.delay(200);
                                this.uploadImage();
                                if (event)
                                    event.target.complete();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) {
                    _this.loadingService.end();
                    //this.dialogService.dimissLoaging(); 
                });
                return [2 /*return*/];
            });
        });
    };
    ExportPage.prototype.export = function () {
        this.htmlToImageService.dowload(this.game.id);
    };
    ExportPage.prototype.uploadImage = function () {
        var _this = this;
        var data = {
            data: this.htmlToImageService.img,
            url: '/results/',
            thumb: false,
        };
        this.gameModel.api_functionModel(this.id, 'addPreview', data).subscribe(function (response) {
            console.log(response);
            _this.inServer = true;
            //this.navCtr.back();
            _this.loadingService.end();
            //console.log(this.htmlToImageService);
        }, function (error) {
            console.error(error);
            _this.loadingService.end();
        });
    };
    ExportPage.prototype.facebook = function () {
        var url = "https://www.facebook.com/sharer?u=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].server_url_base + "/shareResultF/" + this.id + "?" + new Date().valueOf();
        console.log('url', url);
        //alert('a');
        //window.location.href = url;
        this.shareService.goTo(url);
    };
    ExportPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
        { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
        { type: src_app_services_html_to_image_service__WEBPACK_IMPORTED_MODULE_6__["HtmlToImageService"] },
        { type: src_app_services_sharer_service__WEBPACK_IMPORTED_MODULE_8__["SharerService"] },
        { type: src_app_services_screen_loading_service__WEBPACK_IMPORTED_MODULE_9__["ScreenLoadingService"] }
    ]; };
    ExportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./export.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/export/export.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./export.page.scss */ "./src/app/pages/game/export/export.page.scss")).default]
        })
    ], ExportPage);
    return ExportPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-game-export-export-module.js.map