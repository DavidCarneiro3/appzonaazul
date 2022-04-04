webpackJsonp([29],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketcomprovantePageModule", function() { return TicketcomprovantePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticketcomprovante__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketcomprovantePageModule = /** @class */ (function () {
    function TicketcomprovantePageModule() {
    }
    TicketcomprovantePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ticketcomprovante__["a" /* TicketcomprovantePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ticketcomprovante__["a" /* TicketcomprovantePage */]),
            ],
        })
    ], TicketcomprovantePageModule);
    return TicketcomprovantePageModule;
}());

//# sourceMappingURL=ticketcomprovante.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketcomprovantePage; });
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



var TicketcomprovantePage = /** @class */ (function () {
    function TicketcomprovantePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectOptions = {
            title: 'Cidade',
            subTitle: 'Escolha sua cidade',
            mode: 'ios'
        };
        this.placa = 'ABC1234';
        this.cadsUsados = 2;
        this.valor = 10;
        this.data = '09/02/2022';
        this.hora = '05:02';
        this.city = 'Fortaleza';
        this.cads = 0;
    }
    TicketcomprovantePage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].HOME_PAGE.name);
    };
    TicketcomprovantePage.prototype.goComprar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { 'fromPage': 'principal' });
    };
    TicketcomprovantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ticketcomprovante',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\ticketcomprovante\ticketcomprovante.html"*/'<ion-header no-border>\n  <ion-navbar color="header" no-border>\n      \n      <button ion-button icon-only menuToggle>\n          <ion-icon class="header-icon" name="menu"></ion-icon>\n      </button>\n      <ion-title class="title-header">\n       \n        <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n          <ion-option value="Fortaleza">Fortaleza</ion-option>\n        </ion-select>\n      </ion-title>\n\n      <ion-buttons end>\n          <button class="pin-icon" ion-button icon-only (click)="goHome()">\n              <img src="assets/icones/pin-white.svg" alt="">\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-col>Placa</ion-col>\n      <ion-col class="custo">{{placa}}</ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>CADs Utilizados</ion-col>\n      <ion-col class="custo">{{cadsUsados}}</ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>Valor</ion-col>\n      <ion-col class="custo">R$ {{valor}}</ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>Data do pagamento</ion-col>\n      <ion-col class="custo">{{data}}</ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col>Hora do pagamento</ion-col>\n      <ion-col class="custo">{{hora}}</ion-col>\n    </ion-item>\n  </ion-list>\n  <button ion-button clear id="botao" class="botaobaixar">Baixar PDF</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\ticketcomprovante\ticketcomprovante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], TicketcomprovantePage);
    return TicketcomprovantePage;
}());

//# sourceMappingURL=ticketcomprovante.js.map

/***/ })

});
//# sourceMappingURL=29.js.map