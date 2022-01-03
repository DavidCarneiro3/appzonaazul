webpackJsonp([30],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageModule", function() { return InitialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initial__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InitialPageModule = /** @class */ (function () {
    function InitialPageModule() {
    }
    InitialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__initial__["a" /* InitialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__initial__["a" /* InitialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], InitialPageModule);
    return InitialPageModule;
}());

//# sourceMappingURL=initial.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InitialPage = /** @class */ (function () {
    function InitialPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.city = 'Fortaleza';
        this.showSpinner = false;
        this.cadsUsados = 0;
        this.cads = 0;
        this.selectOptions = {
            title: 'Cidade',
            subTitle: 'Escolha sua cidade',
            mode: 'ios'
        };
    }
    InitialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitialPage');
    };
    InitialPage.prototype.goComprar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { 'fromPage': 'inicial' });
    };
    InitialPage.prototype.goPrincipal = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
    };
    InitialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-initial',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\initial\initial.html"*/'<ion-header no-border>\n  <ion-navbar color="header" no-border>\n      <ion-title class="title-header">\n        <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n          <ion-option value="Fortaleza">Fortaleza</ion-option>\n        </ion-select>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="img-top"  *ngIf="!showSpinner">\n    <img src="assets/imgs/default.png" alt="" class="nav-img">\n    <h2 class="title">{{(cads-cadsUsados)}} CADS</h2>\n    <p class="price">R${{(cads-cadsUsados)*2}},00</p>\n    <button ion-button class="btn-comprar" (click)="goComprar()"><img src="assets/icones/shopping-cart-white.svg"></button>\n  </div>\n  <div class="content">\n    <div>\n      <button ion-button clear class="btn-add" (click)="goPrincipal()">\n        <div>\n          Zona Azul<br><img height="50" src="assets/icones/carro01.png">\n        </div>\n      </button>\n      <button ion-button clear class="btn-add">\n        <div>\n          Pagar Ticket<br><img height="50" src="assets/icones/share.svg">\n        </div>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\initial\initial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], InitialPage);
    return InitialPage;
}());

//# sourceMappingURL=initial.js.map

/***/ })

});
//# sourceMappingURL=30.js.map