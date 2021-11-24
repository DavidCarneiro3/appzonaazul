webpackJsonp([30],{

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroModalPageModule", function() { return FiltroModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filtro_modal__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiltroModalPageModule = /** @class */ (function () {
    function FiltroModalPageModule() {
    }
    FiltroModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filtro_modal__["a" /* FiltroModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filtro_modal__["a" /* FiltroModalPage */]),
            ],
        })
    ], FiltroModalPageModule);
    return FiltroModalPageModule;
}());

//# sourceMappingURL=filtro-modal.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroModalPage; });
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


var FiltroModalPage = /** @class */ (function () {
    function FiltroModalPage(navCtrl, navParams, modalCtrl, viewCtlr, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtlr = viewCtlr;
        this.event = event;
        this.selectOption = {
            title: 'Tipo',
            subtitle: 'Escolha o tipo do Filtro',
            mode: 'ios'
        };
        this.filter = {
            placa: "",
            numberAuth: "",
            data: "",
            situacao: "",
            qtdCads: "",
            valor: "",
        };
        this.data = navParams.get('data');
    }
    FiltroModalPage.prototype.ionViewDidLoad = function () {
    };
    FiltroModalPage.prototype.Filtro = function () {
        if (this.filter.data !== "") {
            this.formatDate();
        }
        this.filter.placa = this.filter.placa.toUpperCase();
        this.event.publish('f_event', this.filter);
        this.navCtrl.pop();
    };
    FiltroModalPage.prototype.formatDate = function () {
        var format = this.filter.data.split("-");
        return this.filter.data = format[2] + '/' + format[1] + '/' + format[0];
    };
    FiltroModalPage.prototype.closeModal = function () {
        this.event.publish('f_event', this.filter);
        this.navCtrl.pop();
    };
    FiltroModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filtro-modal',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/filtro-modal/filtro-modal.html"*/'<ion-header no-border>\n    <ion-navbar color="header" no-margin no-padding>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal()">\n                <span color="light" class="header-icon" showWhen="ios">X</span>\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title center>\n            <ion-label style="color: white;">Filtros</ion-label>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="content">\n\n    <ion-grid class="grid-historico-estacionamento">\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Placa</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-input type="text" placeholder="AAA0000" [(ngModel)]="filter.placa" name="placa"> </ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Tipo</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-select style="max-width: 100%;" placeholder=\'Ativação/Renovacão\' [selectOptions]="selectOption"\n                    [(ngModel)]=\'filter.situacao\'>\n                    <ion-option value="Ativação"> Ativação </ion-option>\n                    <ion-option value="Renovação"> Renovacão </ion-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Data</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-datetime displayFormat="DD/MM/YYYY" placeholder="DD/MM/YYYY" [min]="data.min" [max]="data.today"\n                    cancelText="Cancelar" doneText="Selecionar" [(ngModel)]=\'filter.data\' name=\'data\'>\n                </ion-datetime>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Quantidade CADS</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-input type="text" placeholder="1" [(ngModel)]="filter.qtdCads" name="qtdCads"> </ion-input>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Valor Gasto</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-input type="text" placeholder="R$ 10,00" [(ngModel)]="filter.valor" name="valor"> </ion-input>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col width-30 style="margin-top:9px; ">\n                <ion-label class="label" color="primary">Cod AMC</ion-label>\n            </ion-col>\n            <ion-col>\n                <ion-input type="text" placeholder="123454564" [(ngModel)]=\'filter.numberAuth\' name="numberAuth">\n                </ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-item class="btn-row" no-lines>\n            <button ion-button style="height:40px" class="btn" block (click)="Filtro()"> Filtrar </button>\n        </ion-item>\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/filtro-modal/filtro-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], FiltroModalPage);
    return FiltroModalPage;
}());

//# sourceMappingURL=filtro-modal.js.map

/***/ })

});
//# sourceMappingURL=30.js.map