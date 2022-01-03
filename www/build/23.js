webpackJsonp([23],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarCpfModalPageModule", function() { return ConfirmarCpfModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmar_cpf_modal__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmarCpfModalPageModule = /** @class */ (function () {
    function ConfirmarCpfModalPageModule() {
    }
    ConfirmarCpfModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmar_cpf_modal__["a" /* ConfirmarCpfModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmar_cpf_modal__["a" /* ConfirmarCpfModalPage */]),
            ],
        })
    ], ConfirmarCpfModalPageModule);
    return ConfirmarCpfModalPageModule;
}());

//# sourceMappingURL=confirmar-cpf-modal.module.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsUtil; });
var FunctionsUtil = /** @class */ (function () {
    function FunctionsUtil() {
    }
    FunctionsUtil.checkCPF = function (cpf) {
        var soma = 0;
        var resto = 0;
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        if (cpf.length != 11) {
            return false;
        }
        if (cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||
            cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||
            cpf == '88888888888' || cpf == '99999999999') {
            return false;
        }
        else {
            for (var i = 1; i <= 9; i++) {
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            resto = (soma * 10) % 11;
            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }
            if (resto != parseInt(cpf.substring(9, 10))) {
                return false;
            }
            soma = 0;
            for (var i = 1; i <= 10; i++) {
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;
            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }
            if (resto != parseInt(cpf.substring(10, 11))) {
                return false;
            }
            return true;
        }
    };
    FunctionsUtil.checkCNPJ = function (cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');
        if (cnpj == '')
            return false;
        if (cnpj.length != 14)
            return false;
        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
        // Valida DVs
        var tamanho = cnpj.length - 2;
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    };
    FunctionsUtil.cleanBRMask = function (value) {
        return value.replace(/[^\d]+/g, '');
    };
    /**
     *  Retorna a distancia entre dois pontos
     *  @param start Objecto contento a latitude e a longitude do ponto inicial
     *  @param end Objecto contendo a latitude e a longitude do ponto final
     *  @returns Distancia entre o ponto inicial e o ponto final em KM
     *  https://www.joshmorony.com/create-a-nearby-places-list-with-google-maps-in-ionic-2-part-2/
    */
    FunctionsUtil.getDistanceBetweenPoints = function (start, end, units) {
        if (start != 0 && end != 0) {
            var earthRadius = {
                miles: 3958.8,
                km: 6371
            };
            var R = earthRadius[units || 'km'];
            var startLatitude = start.lat;
            var startLongitude = start.lng;
            var endLatitude = end.lat;
            var endLongitude = end.lng;
            var dLat = this.toRadiano((endLatitude - startLatitude));
            var dLon = this.toRadiano((endLongitude - startLongitude));
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.toRadiano(startLatitude)) * Math.cos(this.toRadiano(endLatitude)) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var distance = R * c;
            return distance;
        }
        return undefined;
    };
    /**
     *  Converte graus para Radiano
     * @param x numero a ser convertido para o Radiano
     * @returns numero de entrada em Radianos
     */
    FunctionsUtil.toRadiano = function (x) {
        return x * Math.PI / 180;
    };
    /**
     * Verfica qual horario padrão o usuário deseja estacionar
     * @param horario horario em que vai acontecer o estacionamento
     * @param holidays lista com todos os feriados
     * @returns String informando em qual caso ele deseja estacionar fora do horario padrão
     */
    FunctionsUtil.foraHorarioPadrão = function (horario, holidays) {
        var date = horario.toLocaleDateString();
        if (horario.getDay() === 0 || holidays.indexOf(date) > -1)
            return 'Domingo';
        if (horario.getDay() === 5 && horario.getHours() > 18)
            return 'Sexta';
        if (horario.getDay() === 6 && horario.getHours() > 13)
            return 'Sabado';
        return;
    };
    return FunctionsUtil;
}());

//# sourceMappingURL=functions.util.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarCpfModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_functions_util__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmarCpfModalPage = /** @class */ (function () {
    function ConfirmarCpfModalPage(
        // public navCtrl: NavController, 
        viewCtrl, navParams, events, userProvider, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.events = events;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.input = "";
        this.user = this.navParams.get('user');
        this.input = this.user.cpf;
    }
    ConfirmarCpfModalPage.prototype.ionViewDidLoad = function () {
        // this.userProvider.removeUserLocal()
    };
    ConfirmarCpfModalPage.prototype.save = function () {
        if (this.input == "") {
            this.showAlert();
        }
        else {
            var result = __WEBPACK_IMPORTED_MODULE_3__util_functions_util__["a" /* FunctionsUtil */].cleanBRMask(this.input);
            if (result.length == 11 && __WEBPACK_IMPORTED_MODULE_3__util_functions_util__["a" /* FunctionsUtil */].checkCPF(result)) {
                this.user.cpf = result;
                this.saveUser(this.user);
            }
            else if (result.length == 14 && __WEBPACK_IMPORTED_MODULE_3__util_functions_util__["a" /* FunctionsUtil */].checkCNPJ(result)) {
                this.user.cpf = result;
                this.saveUser(this.user);
            }
            else {
                this.showAlert();
            }
        }
    };
    ConfirmarCpfModalPage.prototype.saveUser = function (user) {
        var _this = this;
        this.userProvider.updateUser(user.id, { cpf: user.cpf })
            .then(function (__) {
            _this.closeModal();
        });
    };
    ConfirmarCpfModalPage.prototype.showAlert = function () {
        this.alertCtrl.create({
            title: "Inválido",
            message: "Insira um CPF ou CPNJ válido",
            buttons: [{
                    text: 'OK',
                }]
        }).present();
    };
    ConfirmarCpfModalPage.prototype.closeModal = function () {
        // this.navCtrl.pop()
        this.viewCtrl.dismiss();
    };
    ConfirmarCpfModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmar-cpf-modal',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\confirmar-cpf-modal\confirmar-cpf-modal.html"*/'<ion-header no-border>\n\n    <ion-navbar color="header" no-margin no-padding>\n\n        <ion-buttons right style="margin-right: 15px;">\n\n            <button ion-button icon-only (click)="closeModal()">\n\n                <span color="light" class="header-icon">X</span>\n\n                <!-- <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon> -->\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-title center>\n\n            <ion-label style="color: white;">Bem vindo ao Zona Fácil</ion-label>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n\n\n    <ion-grid class="grid-historico-estacionamento">\n\n\n\n        <ion-row class="row">\n\n            <ion-col width-100 no-lines style="margin-top:9px; ">\n\n                <p style="color: #6c6c6c; font-size:10pt; text-align:center;">Para realizar as transações de compra de \n\n                    CADs e estacionamento no Zona Fácil é necessário completar seu cadastro. Insira seu CPF no \n\n                    campo abaixo.</p>\n\n                <ion-input type="tel" placeholder="CPF ou CNPJ" [(ngModel)]="input" [brmasker]="{person: true}"> </ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <!-- <ion-item class="btn-row" no-lines>\n\n            <button ion-button style="height:40px" class="btn" block (click)="save()">Enviar</button>\n\n        </ion-item> -->\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer class="rodape">\n\n    <ion-toolbar mode="md">\n\n        <ion-title>\n\n            <ion-row class="btn-row">\n\n                <ion-col>\n\n                    <button ion-button style="height:40px" class="btn" block (click)="save()">Enviar</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\confirmar-cpf-modal\confirmar-cpf-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfirmarCpfModalPage);
    return ConfirmarCpfModalPage;
}());

//# sourceMappingURL=confirmar-cpf-modal.js.map

/***/ })

});
//# sourceMappingURL=23.js.map