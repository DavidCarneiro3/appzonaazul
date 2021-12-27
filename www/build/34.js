webpackJsonp([34],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompartilharPageModule", function() { return CompartilharPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compartilhar__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompartilharPageModule = /** @class */ (function () {
    function CompartilharPageModule() {
    }
    CompartilharPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compartilhar__["a" /* CompartilharPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compartilhar__["a" /* CompartilharPage */]),
            ],
        })
    ], CompartilharPageModule);
    return CompartilharPageModule;
}());

//# sourceMappingURL=compartilhar.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompartilharPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cad__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_browser_browser__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompartilharPage = /** @class */ (function () {
    function CompartilharPage(navCtrl, navParams, socialSharing, cadsProvider, browserProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.cadsProvider = cadsProvider;
        this.browserProvider = browserProvider;
        this.loadingCtrl = loadingCtrl;
        this.cad = new __WEBPACK_IMPORTED_MODULE_4__models_cad__["a" /* CadModel */]();
    }
    CompartilharPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cadsProvider.find().take(1).subscribe(function (value) {
            value.map(function (item) {
                _this.cad = new __WEBPACK_IMPORTED_MODULE_4__models_cad__["a" /* CadModel */](item.cad);
            });
        });
    };
    CompartilharPage.prototype.shareLink = function () {
        var url = 'http://www.zonafacil.com.br';
        this.browserProvider.openPage(url);
    };
    CompartilharPage.prototype.shareFacebook = function () {
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        var message = 'O Zona Fácil é meu aplicativo Zona Azul preferido. Indico!';
        var img = 'https://www.zonafacil.com.br/site/images/mockups/banner-1.jpg';
        var url = 'https://www.zonafacil.com.br';
        this.socialSharing.shareViaFacebook(message, img, url)
            .then(function () {
            loading.dismiss();
        })
            .catch(function (e) {
            console.error('error', e);
            loading.dismiss();
        });
    };
    CompartilharPage.prototype.shareWhatsapp = function () {
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        var message = 'O Zona Fácil é meu aplicativo Zona Azul preferido. Indico!';
        var img = 'https://www.zonafacil.com.br/site/images/mockups/banner-1.jpg';
        var url = 'https://www.zonafacil.com.br';
        this.socialSharing.shareViaWhatsApp(message, img, url)
            .then(function () {
            loading.dismiss();
        })
            .catch(function (e) {
            console.error('error', e);
            loading.dismiss();
        });
    };
    CompartilharPage.prototype.share = function () {
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        var subject = 'Zona Azul!';
        var message = 'O Zona Fácil é meu aplicativo Zona Azul preferido. Indico!';
        var img = 'https://www.zonafacil.com.br/site/images/mockups/banner-1.jpg';
        var url = 'https://www.zonafacil.com.br';
        this.socialSharing.share(message, subject, img, url)
            .then(function () {
            loading.dismiss();
        })
            .catch(function (e) {
            console.error('error', e);
            loading.dismiss();
        });
    };
    CompartilharPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-compartilhar',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\compartilhar\compartilhar.html"*/'<ion-header no-border>\n\n    <ion-navbar color="header">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n\n        </button>\n\n\n\n        <ion-title class="header-title">Compartilhe</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n    <ion-grid>\n\n        <ion-row class="row-header">\n\n            <ion-col col-12 class="info">\n\n                <p>COMPARTILHE NAS REDES SOCIAIS</p>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="row-items">\n\n            <ion-item no-lines>\n\n                <h6>Site</h6>\n\n                <h4 (click)="shareLink()">{{cad.info.site}}</h4>\n\n            </ion-item>\n\n        </ion-row>\n\n        <ion-row class="row-social">\n\n            <!-- <ion-col col-12 class="col-more">\n\n                <button class="item-facebook" ion-button icon-start block (click)="shareFacebook()">\n\n                    <ion-icon name="logo-facebook"></ion-icon>\n\n                    <p>Compartilhar no facebook</p>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-12 class="col-more">\n\n                <button class="item-whats" ion-button icon-start block (click)="shareWhatsapp()">\n\n                    <ion-icon name="logo-whatsapp"></ion-icon>\n\n                    <p class="wp">Compartilhar no whatsapp</p>\n\n                </button>\n\n            </ion-col> -->\n\n            <ion-col col-12 class="col-more">\n\n                <button class="item-default" ion-button icon-start block (click)="share()">\n\n                    <ion-icon name="share"></ion-icon>\n\n                    <p>Compartilhar</p>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\compartilhar\compartilhar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_browser_browser__["a" /* BrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CompartilharPage);
    return CompartilharPage;
}());

//# sourceMappingURL=compartilhar.js.map

/***/ })

});
//# sourceMappingURL=34.js.map