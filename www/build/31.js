webpackJsonp([31],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroModalPageModule", function() { return FiltroModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filtro_modal__ = __webpack_require__(804);
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

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
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
            selector: 'page-filtro-modal',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/filtro-modal/filtro-modal.html"*/'<ion-header no-border>\n    <ion-navbar color="header" no-margin no-padding>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeModal()">\n                <span color="light" class="header-icon" showWhen="ios">Fechar</span>\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-title class="header-title">Filtros</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="content">\n    <div class="informacoes-body">\n\n    <div class="informacoes-body-list">\n       \n            \n            <ion-item class="informacoes-body-list-item" no-lines>\n                <ion-label class="btn-icon"><ion-icon name="ios-car-outline"></ion-icon></ion-label>\n                \n                <ion-input type="text" placeholder="AAA0000" [(ngModel)]="filter.placa" name="placa" class="{{filter.placa?\'blue-component\':\'grey-component\'}}"> \n\n                </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{filter.placa?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n            </ion-item>\n        \n\n       \n            \n            <ion-item class="informacoes-body-list-item" no-lines>\n                <ion-label style="max-width:10%;"><ion-icon name="ios-checkbox-outline"></ion-icon></ion-label>\n                <ion-select style="max-width: 100%;" placeholder=\'Ativação/Renovacão\' [selectOptions]="selectOption"\n                    [(ngModel)]="filter.situacao" >\n                    <ion-option value="Ativação"> Ativação </ion-option>\n                    <ion-option value="Renovação"> Renovacão </ion-option>\n                </ion-select><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{filter.situacao?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n            </ion-item>\n        \n\n       \n            <ion-item class="informacoes-body-list-item" no-lines>\n                <ion-label  style="max-width:10%;"><ion-icon name="ios-calendar-outline"></ion-icon></ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" placeholder="DD/MM/YYYY" [min]="data.min" [max]="data.today"\n                    cancelText="Cancelar" doneText="Selecionar" [(ngModel)]=\'filter.data\' name=\'data\' >\n                </ion-datetime><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{filter.data?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n            </ion-item>\n        \n\n\n       \n           \n            <ion-item class="informacoes-body-list-item" no-lines>\n                <ion-label class="btn-icon"><ion-icon name="ios-basket-outline"></ion-icon></ion-label>\n                <ion-input type="text" placeholder="Quantidade de CADs" [(ngModel)]="filter.qtdCads" name="qtdCads" class="{{filter.qtdCads?\'blue-component\':\'grey-component\'}}"> \n\n                </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{filter.qtdCads?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n            </ion-item>\n        \n\n\n       \n            \n            <ion-item class="informacoes-body-list-item" no-lines>\n                <ion-label class="btn-icon"><ion-icon name="ios-pricetags-outline"></ion-icon></ion-label>\n                <ion-input type="text" placeholder="R$ 10,00" [(ngModel)]="filter.valor" name="valor" class="{{filter.valor?\'blue-component\':\'grey-component\'}}"> \n\n                </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{filter.valor?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n            </ion-item>\n        \n\n\n       \n            \n            <ion-item class="informacoes-body-list-item" no-lines>\n                <ion-label class="btn-icon"><ion-icon name="ios-card-outline"></ion-icon></ion-label>\n                <ion-input type="text" placeholder="123454564" [(ngModel)]=\'filter.numberAuth\' name="numberAuth" class="{{filter.numberAuth?\'blue-component\':\'grey-component\'}}">\n                </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{filter.numberAuth?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n            </ion-item>\n        \n\n        <ion-item class="btn-row" no-lines>\n            <button ion-button style="height:40px" class="btn" block (click)="Filtro()"> Filtrar </button>\n        </ion-item>\n    </div>\n</div>\n\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/filtro-modal/filtro-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], FiltroModalPage);
    return FiltroModalPage;
}());

//# sourceMappingURL=filtro-modal.js.map

/***/ })

});
//# sourceMappingURL=31.js.map