webpackJsonp([29],{

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPagamentoPageModule", function() { return FiltroPagamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filtro_pagamento__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiltroPagamentoPageModule = /** @class */ (function () {
    function FiltroPagamentoPageModule() {
    }
    FiltroPagamentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filtro_pagamento__["a" /* FiltroPagamentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filtro_pagamento__["a" /* FiltroPagamentoPage */]),
            ],
        })
    ], FiltroPagamentoPageModule);
    return FiltroPagamentoPageModule;
}());

//# sourceMappingURL=filtro-pagamento.module.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltroPagamentoPage = /** @class */ (function () {
    function FiltroPagamentoPage(navCtrl, navParams, viewCtlr, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtlr = viewCtlr;
        this.event = event;
        this.selectOption = {
            title: 'Tipo',
            subtitle: 'Escolha o tipo do Filtro',
            mode: 'ios'
        };
        this.filter = {
            data: "",
            qtdCads: "",
            valor: ""
        };
        this.data = navParams.get('data');
    }
    FiltroPagamentoPage.prototype.ionViewDidLoad = function () {
    };
    FiltroPagamentoPage.prototype.Filtro = function () {
        if (this.filter.data !== "") {
            this.formatDate();
        }
        this.event.publish('pay_filter_event', this.filter);
        this.navCtrl.pop();
    };
    FiltroPagamentoPage.prototype.formatDate = function () {
        var format = this.filter.data.split("-");
        var result = new Date(parseInt(format[0]), parseInt(format[1]) - 1, parseInt(format[2])).toDateString();
        return this.filter.data = result;
    };
    FiltroPagamentoPage.prototype.closeModal = function () {
        this.event.publish('', this.filter);
        this.navCtrl.pop();
    };
    FiltroPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filtro-pagamento',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/filtro-pagamento/filtro-pagamento.html"*/'<ion-header no-border>\n    <ion-navbar color="header" no-margin no-padding>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal()">\n                <span color="light" class="header-icon" showWhen="ios">X</span>\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title center>\n            <ion-label style="color: white;">Filtros</ion-label>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="content">\n\n    <ion-grid class="grid-historico-estacionamento">\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Data</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-datetime displayFormat="DD/MM/YYYY" placeholder="DD/MM/YYYY" [min]="data.min" [max]="data.today"\n                    cancelText="Cancelar" doneText="Selecionar" [(ngModel)]=\'filter.data\' name=\'data\'>\n                </ion-datetime>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Quantidade CADS</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-input type="text" placeholder="1" [(ngModel)]="filter.qtdCads" name="qtdCads"> </ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Valor gasto</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-input type="text" placeholder="10,00" [(ngModel)]=\'filter.valor\' name="valor">\n                </ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-item class="btn-row" no-lines>\n            <button ion-button style="height:40px" class="btn" block (click)="Filtro()"> Filtrar </button>\n        </ion-item>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/filtro-pagamento/filtro-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], FiltroPagamentoPage);
    return FiltroPagamentoPage;
}());

//# sourceMappingURL=filtro-pagamento.js.map

/***/ })

});
//# sourceMappingURL=29.js.map