webpackJsonp([27],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VagaslivresPageModule", function() { return VagaslivresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vagaslivres__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VagaslivresPageModule = /** @class */ (function () {
    function VagaslivresPageModule() {
    }
    VagaslivresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vagaslivres__["a" /* VagaslivresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vagaslivres__["a" /* VagaslivresPage */]),
            ],
        })
    ], VagaslivresPageModule);
    return VagaslivresPageModule;
}());

//# sourceMappingURL=vagaslivres.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VagaslivresPage; });
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



/**
 * Generated class for the VagaslivresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VagaslivresPage = /** @class */ (function () {
    function VagaslivresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectOptions = {
            title: 'Cidade',
            subTitle: 'Escolha sua cidade',
            mode: 'ios'
        };
        this.city = 'Fortaleza';
        this.cads = 0;
        this.cadsUsados = 0;
    }
    VagaslivresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VagaslivresPage');
    };
    VagaslivresPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].HOME_PAGE.name);
    };
    VagaslivresPage.prototype.goComprar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { 'fromPage': 'principal' });
    };
    VagaslivresPage.prototype.go1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].TIMER_PAGE.name);
    };
    VagaslivresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vagaslivres',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\vagaslivres\vagaslivres.html"*/'<ion-header no-border>\n  <ion-navbar color="header" no-border>\n      \n      <button ion-button icon-only menuToggle>\n          <ion-icon class="header-icon" name="menu"></ion-icon>\n      </button>\n      <ion-title class="title-header">\n       \n        <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n          <ion-option value="Fortaleza">Fortaleza</ion-option>\n        </ion-select>\n      </ion-title>\n\n      <ion-buttons end>\n          <button class="pin-icon" ion-button icon-only (click)="goHome()">\n              <img src="assets/icones/pin-white.svg" alt="">\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class="img-top">\n    <img src="assets/imgs/default.png" alt="" class="nav-img">\n    <h2 class="title">{{(cads-cadsUsados)}} CADS</h2>\n    <p class="price">R${{(cads-cadsUsados)*2}},00</p>\n    <button ion-button class="btn-comprar" (click)="goComprar()"><img src="assets/icones/shopping-cart-white.svg"></button>\n  </div>\n  <br>\n  <div class="info"><p>Escolha um estacionamento</p></div>\n  <div class="conteudo">\n    <ion-list class="item">\n      <ion-item>\n        <ion-row>\n          <ion-col>\n            <div class="text-endereco" text-wrap>\n              <p>Avenida Lins de Vasconcelos, 234</p>\n            </div>    \n          </ion-col>\n          <ion-col>\n            <div class="text-vaga">\n              <p>Vagas Convencionais: 35</p>\n              <p>Vagas para Idosos: 08</p>\n              <p>Vagas para PCD: 05</p>\n              <p>Vagas Carga/Descarga: 02</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row float-center>\n          <button ion-button round clear class="btn-estacionamento">Estacionar<ion-icon name="car"></ion-icon></button>\n          <button ion-button round clear class="btn-ticket" (click)="go1()">Pagar Ticket<ion-icon name="cart"></ion-icon></button>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\vagaslivres\vagaslivres.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VagaslivresPage);
    return VagaslivresPage;
}());

//# sourceMappingURL=vagaslivres.js.map

/***/ })

});
//# sourceMappingURL=27.js.map