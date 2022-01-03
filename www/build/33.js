webpackJsonp([33],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstacionadosModalPageModule", function() { return EstacionadosModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estacionados_modal__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstacionadosModalPageModule = /** @class */ (function () {
    function EstacionadosModalPageModule() {
    }
    EstacionadosModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estacionados_modal__["a" /* EstacionadosModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estacionados_modal__["a" /* EstacionadosModalPage */]),
            ],
        })
    ], EstacionadosModalPageModule);
    return EstacionadosModalPageModule;
}());

//# sourceMappingURL=estacionados-modal.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionadosModalPage; });
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


var EstacionadosModalPage = /** @class */ (function () {
    function EstacionadosModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.todosVeiculos = [];
        this.copiaVeiculos = [];
        this.veiculos = [];
        this.veiculoSelecionado = [];
        this.getVeiculos();
    }
    EstacionadosModalPage.prototype.ionViewWillLoad = function () {
    };
    EstacionadosModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EstacionadosModalPage.prototype.getVeiculos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var veiculos = _this.navParams.get('veiculos');
            console.log(veiculos);
            _this.copiaVeiculos = veiculos ? veiculos : [];
            _this.veiculos = veiculos ? veiculos : [];
            console.log(_this.veiculos);
            resolve(true);
        });
    };
    EstacionadosModalPage.prototype.select = function (veiculo) {
        this.veiculoSelecionado = veiculo;
    };
    EstacionadosModalPage.prototype.procurarVeiculos = function (event) {
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
    EstacionadosModalPage.prototype.selectVeiculo = function () {
        this.viewCtrl.dismiss(this.veiculoSelecionado);
    };
    EstacionadosModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estacionados-modal',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\estacionados-modal\estacionados-modal.html"*/'<ion-header>\n\n    <ion-navbar color="header" text-center>\n\n        <ion-title>\n\n            <ion-label>\n\n                Selecione seu veículo\n\n            </ion-label>\n\n        </ion-title>\n\n\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="dismiss()">\n\n                <span color="light" class="header-icon" showWhen="ios">Fechar</span>\n\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-searchbar class="search" placeholder="Buscar por placa" color="primary" (ionInput)="procurarVeiculos($event)"></ion-searchbar>\n\n    <!-- <ion-list radio-group>\n\n        <ion-item *ngFor="let veiculo of veiculos" text-wrap>\n\n            <ion-label>\n\n                <p class="titulo">{{veiculo.veiculo.placa}}</p>\n\n                <p class="subtitulo">{{veiculo.veiculo.marca}} {{veiculo.veiculo.modelo}}</p>\n\n            </ion-label>\n\n            <ion-radio item-left slot="start" (ionSelect)="select(veiculo)" mode="md"></ion-radio>\n\n        </ion-item>\n\n    </ion-list> -->\n\n</ion-content>\n\n\n\n<ion-footer class="footer">\n\n    <ion-toolbar class="toolbar">\n\n        <ion-title>\n\n            <ion-row class="btn-rows">\n\n                <ion-col>\n\n                    <button ion-button block class="btn-cancelar" (click)="dismiss()" mode="md">Cancelar</button>\n\n                </ion-col>\n\n\n\n                <ion-col>\n\n                    <button ion-button block class="btn" (click)="selectVeiculo()"\n\n                        [disabled]="this.veiculoSelecionado.length <= 0" mode="md">OK</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\estacionados-modal\estacionados-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], EstacionadosModalPage);
    return EstacionadosModalPage;
}());

//# sourceMappingURL=estacionados-modal.js.map

/***/ })

});
//# sourceMappingURL=33.js.map