webpackJsonp([30],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
            ],
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_info_info__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsPage = /** @class */ (function () {
    function TermsPage(provider, params, navCtrl, navEvents) {
        this.provider = provider;
        this.params = params;
        this.navCtrl = navCtrl;
        this.navEvents = navEvents;
        this.isToggle = true;
        this.show = false;
        var isToggleTmp = params.get('isToggle');
        if (!isToggleTmp) {
            this.isToggle = isToggleTmp;
        }
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        this.termos = this.provider.getTermos();
    };
    TermsPage.prototype.continuar = function () {
        this.navCtrl.pop();
        this.navEvents.publish('checked', true);
    };
    TermsPage.prototype.closeTermsPage = function () {
        this.navCtrl.pop();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\terms\terms.html"*/'<ion-header no-border>\n\n  <ion-navbar color="header">\n\n    <button ion-button icon-only menuToggle *ngIf="isToggle">\n\n      <ion-icon class="header-icon" name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title class="header-title">Termos de Serviços</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n\n\n  <ion-item padding class="bg0 item-text" no-lines *ngFor="let item of termos | async">\n\n    <h2 class="titulo">{{item.titulo}}</h2>\n\n    <p class="text" *ngFor="let item2 of item.desc">{{item2}}</p>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="isToggle === false">\n\n  <ion-toolbar>\n\n    <ion-item class="btn-row" no-lines>\n\n      <button ion-button (click)="continuar()" class="btn" block>Aceitar e Continuar</button>\n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_info_info__["a" /* InfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ })

});
//# sourceMappingURL=30.js.map