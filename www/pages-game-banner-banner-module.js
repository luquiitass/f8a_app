(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-banner-banner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/banner/banner.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/banner/banner.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Banner</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"banner\" *ngIf=\"game\">\n    <div class=\"f\" id=\"content\">\n      <div class=\"center\">    \n          <div class=\"l\">\n              <img class=\"avatar\" src=\"{{game.team_l.shield ? game.team_l.shield .urlComplete : 'assets/esc.png'}}\">\n              <h2>{{game.team_l.name}}</h2>\n              <h1 class=\"goal\">{{game.l_goals}}</h1>\n          </div>\n          <div class=\"vs\">-</div>\n          <div class=\"v\">\n              <img class=\"avatar\" src=\"{{game.team_v.shield ? game.team_v.shield .urlComplete : 'assets/esc.png'}}\">\n              <h2>{{game.team_v.name}}</h2>\n              <h1 class=\"goal\">{{game.v_goals}}</h1>\n          </div> \n      </div>\n    \n\n  </div>\n  </div>\n\n  result\n\n  <img [src]=\"image2\">\n\n  <br>\n  Code\n\n  <code>{{image2}}</code>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/game/banner/banner-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/game/banner/banner-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BannerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerPageRoutingModule", function() { return BannerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _banner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.page */ "./src/app/pages/game/banner/banner.page.ts");




var routes = [
    {
        path: '',
        component: _banner_page__WEBPACK_IMPORTED_MODULE_3__["BannerPage"]
    }
];
var BannerPageRoutingModule = /** @class */ (function () {
    function BannerPageRoutingModule() {
    }
    BannerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BannerPageRoutingModule);
    return BannerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/game/banner/banner.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/game/banner/banner.module.ts ***!
  \****************************************************/
/*! exports provided: BannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerPageModule", function() { return BannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _banner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-routing.module */ "./src/app/pages/game/banner/banner-routing.module.ts");
/* harmony import */ var _banner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner.page */ "./src/app/pages/game/banner/banner.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var BannerPageModule = /** @class */ (function () {
    function BannerPageModule() {
    }
    BannerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _banner_routing_module__WEBPACK_IMPORTED_MODULE_5__["BannerPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_banner_page__WEBPACK_IMPORTED_MODULE_6__["BannerPage"]]
        })
    ], BannerPageModule);
    return BannerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/game/banner/banner.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/game/banner/banner.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".f {\n  color: white;\n  width: 500px;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.avatar {\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover;\n  height: 64px;\n  width: 64px;\n}\n\n.avatar_event {\n  border-radius: 50%;\n  background-position: center;\n  background-size: cover;\n  height: 15px;\n  width: 15px;\n}\n\n.center {\n  display: inline-flex;\n  justify-content: end;\n  align-items: center;\n  /* height: 100%; */\n  width: 100%;\n  margin-top: 20px;\n}\n\n.l {\n  text-align: center;\n  width: 45%;\n}\n\n.v {\n  text-align: center;\n  width: 45%;\n}\n\n.vs {\n  text-align: center;\n  width: 10%;\n}\n\n.goal {\n  font-size: xx-large;\n}\n\n.list_events {\n  list-style-type: none;\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9iYW5uZXIvYmFubmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvYmFubmVyL2Jhbm5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmF2YXRhciB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNjRweDtcbiAgICB3aWR0aDogNjRweDtcbn1cbi5hdmF0YXJfZXZlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG5cbi5se1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDUlO1xufVxuLnZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0NSU7XG59XG4udnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi5nb2Fse1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5saXN0X2V2ZW50c3tcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/game/banner/banner.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/game/banner/banner.page.ts ***!
  \**************************************************/
/*! exports provided: BannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerPage", function() { return BannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);







var BannerPage = /** @class */ (function () {
    function BannerPage(route, requestService, dialogService) {
        this.route = route;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.image2 = 'a';
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requestService);
        this.id = this.route.snapshot.paramMap.get('id');
    }
    BannerPage.prototype.ngOnInit = function () {
        this.load();
    };
    BannerPage.prototype.load = function (event) {
        if (event === void 0) { event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dialogService.loadingProgres('Cargando equipo')];
                    case 1:
                        _a.sent();
                        this.gameModel.api_functionModel(this.id, 'pageBanner').subscribe(function (response) {
                            _this.dialogService.dimissLoaging();
                            if (response['status'] = 'success') {
                                _this.game = response['data'];
                                setTimeout(_this.createImage, 1000);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BannerPage.prototype.createImage = function () {
        var _this = this;
        console.log('Create banner');
        var element = document.getElementById('banner');
        console.log('element', element.width);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(element).then(function (canvas) {
            var MAX_WIDTH = 1000;
            if (MAX_WIDTH > element.offsetWidth)
                MAX_WIDTH = element.offsetWidth;
            var scaleSize = MAX_WIDTH / element.offsetWidth;
            canvas.width = MAX_WIDTH;
            canvas.height = element.offsetWidth * scaleSize;
            canvas.getContext('2d');
            _this.image2 = canvas.toDataURL('image/png');
            //var destination = document.getElementById('destination');
            //destination.appendChild(canvas);
            element.appendChild(canvas);
        });
        /*
            //const onCapture = (id) =>{
              htmlToImage.toPng(document.getElementById('test'))
               .then((dataUrl) => {
                 //saveAs(dataUrl, 'my-node.png');
                 console.log(dataUrl)
                 this.image2 = dataUrl;
                 var img = document.createElement("img");
                  img.src = dataUrl;
        
                 element.appendChild(img);
               });
          */
    };
    BannerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
    ]; };
    BannerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./banner.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/banner/banner.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./banner.page.scss */ "./src/app/pages/game/banner/banner.page.scss")).default]
        })
    ], BannerPage);
    return BannerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-game-banner-banner-module.js.map