webpackJsonp([28],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerparapagarPageModule", function() { return TimerparapagarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timerparapagar__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimerparapagarPageModule = /** @class */ (function () {
    function TimerparapagarPageModule() {
    }
    TimerparapagarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timerparapagar__["a" /* TimerparapagarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timerparapagar__["a" /* TimerparapagarPage */]),
            ],
        })
    ], TimerparapagarPageModule);
    return TimerparapagarPageModule;
}());

//# sourceMappingURL=timerparapagar.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerparapagarPage; });
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



var TimerparapagarPage = /** @class */ (function () {
    function TimerparapagarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectOptions = {
            title: 'Cidade',
            subTitle: 'Escolha sua cidade',
            mode: 'ios'
        };
        this.custo = 10000;
        this.city = 'Fortaleza';
        this.tempofim = false;
        this.cads = 0;
        this.cadsUsados = 0;
        this.tempoMaximo = 15;
        this.tempoAtual = this.tempoMaximo;
        this.tempoNoDisplay = this.displayTime(this.tempoAtual);
    }
    TimerparapagarPage.prototype.ionViewDidEnter = function () {
        this.tempoAtual = this.tempoMaximo;
        this.tempoNoDisplay = this.displayTime(this.tempoAtual);
        this.passarTempo();
    };
    TimerparapagarPage.prototype.displayTime = function (tempo) {
        var minutos = Math.floor(tempo / 60);
        var segundos = Math.floor(tempo - (minutos * 60));
        var minutosString = '';
        var segundosString = '';
        minutosString = minutos.toString();
        segundosString = (segundos < 10) ? "0" + segundos : segundos.toString();
        return minutosString + ':' + segundosString;
    };
    TimerparapagarPage.prototype.passarTempo = function () {
        var _this = this;
        setTimeout(function () {
            _this.tempoAtual--;
            _this.tempoNoDisplay = _this.displayTime(_this.tempoAtual);
            console.log(_this.tempoNoDisplay);
            console.log(_this.tempoAtual);
            if (_this.tempoAtual > 0) {
                _this.passarTempo();
            }
            else {
                _this.tempofim = true;
                //document.getElementById("botao").style.color = "#ea1d25";
                //document.getElementById("botao").style.border = "2px solid #ea1d25";
                //document.getElementById("botao").textContent = "Refazer Calculo do Valor";
            }
        }, 1000);
    };
    TimerparapagarPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].HOME_PAGE.name);
    };
    TimerparapagarPage.prototype.goComprar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { 'fromPage': 'principal' });
    };
    TimerparapagarPage.prototype.go2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].TICKETCOMPROVANTE_PAGE.name);
    };
    TimerparapagarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-timerparapagar',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\timerparapagar\timerparapagar.html"*/'<ion-header no-border>\n  <ion-navbar color="header" no-border>\n      \n      <button ion-button icon-only menuToggle>\n          <ion-icon class="header-icon" name="menu"></ion-icon>\n      </button>\n      <ion-title class="title-header">\n       \n        <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n          <ion-option value="Fortaleza">Fortaleza</ion-option>\n        </ion-select>\n      </ion-title>\n\n      <ion-buttons end>\n          <button class="pin-icon" ion-button icon-only (click)="goHome()">\n              <img src="assets/icones/pin-white.svg" alt="">\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-col>\n        Valor a ser pago\n      </ion-col>\n      <ion-col class="custo">\n        R$ {{custo}}\n      </ion-col>\n    </ion-item>\n    <ion-item>Tempo restante para pagamento</ion-item>\n  </ion-list>\n  <ion-label class="timer">{{tempoNoDisplay}}</ion-label>\n  <!--<button ion-button clear id="botao" class="botaopagar" (click)="go2()">Realizar Pagamento</button>-->\n\n  <button ion-button clear id="botao" *ngIf="!tempofim" class="botaopagar" (click)="go2()">Realizar Pagamento</button>\n  <button ion-button clear id="botao" *ngIf="tempofim" class="danger" (click)="go2()">Refazer Calculo</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\timerparapagar\timerparapagar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object])
    ], TimerparapagarPage);
    return TimerparapagarPage;
    var _a, _b;
}());

//# sourceMappingURL=timerparapagar.js.map

/***/ })

});
//# sourceMappingURL=28.js.map