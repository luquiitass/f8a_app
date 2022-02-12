(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-go-to-go-to-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/go-to/go-to.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/go-to/go-to.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>goTo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\"> \n    Cargando...\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/go-to/go-to-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/go-to/go-to-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GoToPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToPageRoutingModule", function() { return GoToPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _go_to_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-to.page */ "./src/app/pages/go-to/go-to.page.ts");




const routes = [
    {
        path: '',
        component: _go_to_page__WEBPACK_IMPORTED_MODULE_3__["GoToPage"]
    }
];
let GoToPageRoutingModule = class GoToPageRoutingModule {
};
GoToPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoToPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/go-to/go-to.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/go-to/go-to.module.ts ***!
  \*********************************************/
/*! exports provided: GoToPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToPageModule", function() { return GoToPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _go_to_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./go-to-routing.module */ "./src/app/pages/go-to/go-to-routing.module.ts");
/* harmony import */ var _go_to_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./go-to.page */ "./src/app/pages/go-to/go-to.page.ts");







let GoToPageModule = class GoToPageModule {
};
GoToPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _go_to_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoToPageRoutingModule"]
        ],
        declarations: [_go_to_page__WEBPACK_IMPORTED_MODULE_6__["GoToPage"]]
    })
], GoToPageModule);



/***/ }),

/***/ "./src/app/pages/go-to/go-to.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/go-to/go-to.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  display: grid;\n  place-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ28tdG8vZ28tdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nby10by9nby10by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/go-to/go-to.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/go-to/go-to.page.ts ***!
  \*******************************************/
/*! exports provided: GoToPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToPage", function() { return GoToPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");




let GoToPage = class GoToPage {
    constructor(route, iab, router) {
        this.route = route;
        this.iab = iab;
        this.router = router;
        this.analyzeParameters();
    }
    ngOnInit() {
        //this.analyzeParameters();
    }
    analyzeParameters() {
        console.log('run analyzeParameters');
        if (this.route) {
            if (this.route.snapshot.queryParamMap.get('url')) {
                let url = this.route.snapshot.queryParamMap.get('url');
                const browser = this.iab.create(url);
                //return;
            }
        }
        console.log('no url');
        this.router.navigateByUrl('/');
    }
};
GoToPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GoToPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-go-to',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./go-to.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/go-to/go-to.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./go-to.page.scss */ "./src/app/pages/go-to/go-to.page.scss")).default]
    })
], GoToPage);



/***/ })

}]);
//# sourceMappingURL=pages-go-to-go-to-module-es2015.js.map