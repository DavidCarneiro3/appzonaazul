webpackJsonp([24],{

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculosModalPageModule", function() { return VeiculosModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculos_modal__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VeiculosModalPageModule = /** @class */ (function () {
    function VeiculosModalPageModule() {
    }
    VeiculosModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__veiculos_modal__["a" /* VeiculosModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__veiculos_modal__["a" /* VeiculosModalPage */]),
            ],
        })
    ], VeiculosModalPageModule);
    return VeiculosModalPageModule;
}());

//# sourceMappingURL=veiculos-modal.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculosModalPage; });
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


var VeiculosModalPage = /** @class */ (function () {
    function VeiculosModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.todosVeiculos = [];
        this.copiaVeiculos = [];
        this.veiculos = [];
        this.veiculoSelecionado = [];
    }
    VeiculosModalPage.prototype.ionViewWillLoad = function () {
        this.getVeiculos();
    };
    VeiculosModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VeiculosModalPage.prototype.getVeiculos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var veiculos = _this.navParams.get('veiculos');
            _this.copiaVeiculos = veiculos ? veiculos : [];
            _this.veiculos = veiculos ? veiculos : [];
            resolve(true);
        });
    };
    VeiculosModalPage.prototype.select = function (veiculo) {
        this.veiculoSelecionado = veiculo;
    };
    VeiculosModalPage.prototype.procurarVeiculos = function (event) {
        var placa = event.target.value;
        if (placa) {
            if (placa.trim == '') {
                this.veiculos = this.copiaVeiculos;
            }
            else {
                this.veiculos = this.copiaVeiculos.filter(function (veiculos) {
                    console.log(veiculos);
                    return (veiculos && veiculos.veiculo.placa.toUpperCase().indexOf(placa.toUpperCase()) > -1);
                });
            }
        }
        else {
            this.veiculos = this.copiaVeiculos;
        }
    };
    VeiculosModalPage.prototype.selectVeiculo = function () {
        this.viewCtrl.dismiss(this.veiculoSelecionado);
    };
    VeiculosModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'veiculos-modal',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/veiculos-modal/veiculos-modal.html"*/'<ion-header>\n    <ion-navbar color="header" text-center>\n        <ion-title>\n            <ion-label>\n                Selecione seu veículo\n            </ion-label>\n        </ion-title>\n\n        <ion-buttons left>\n            <button ion-button icon-only (click)="dismiss()">\n                <span color="light" class="header-icon" showWhen="ios">Fechar</span>\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar placeholder="Buscar por placa" color="primary" (ionInput)="procurarVeiculos($event)"></ion-searchbar>\n    <ion-list radio-group>\n        <ion-item *ngFor="let veiculo of veiculos" text-wrap>\n            <ion-label>\n                <p class="titulo">{{veiculo.veiculo.placa}}</p>\n                <p class="subtitulo">{{veiculo.veiculo.marca}} {{veiculo.veiculo.modelo}}</p>\n            </ion-label>\n            <ion-radio item-left slot="start" (ionSelect)="select(veiculo)" mode="md"></ion-radio>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class="footer">\n    <ion-toolbar>\n        <ion-title>\n            <ion-row class="btn-rows">\n                <ion-col>\n                    <button ion-button block (click)="dismiss()" mode="md">Cancelar</button>\n                </ion-col>\n\n                <ion-col>\n                    <button ion-button block color="default" (click)="selectVeiculo()"\n                        [disabled]="this.veiculoSelecionado.length <= 0" mode="md">OK</button>\n                </ion-col>\n            </ion-row>\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/veiculos-modal/veiculos-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VeiculosModalPage);
    return VeiculosModalPage;
}());

//# sourceMappingURL=veiculos-modal.js.map

/***/ })

});
//# sourceMappingURL=24.js.map