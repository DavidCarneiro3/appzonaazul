webpackJsonp([19],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPageModule", function() { return RootPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RootPageModule = /** @class */ (function () {
    function RootPageModule() {
    }
    RootPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__root__["a" /* RootPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__root__["a" /* RootPage */]),
            ],
        })
    ], RootPageModule);
    return RootPageModule;
}());

//# sourceMappingURL=root.module.js.map

/***/ }),

/***/ 776:
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

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_functions_util__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RootPage = /** @class */ (function () {
    function RootPage(events, navCtrl, viewCtrl, navParams, alertCtrl, loadingCtrl, menuCtrl, logger, userProvider) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.logger = logger;
        this.userProvider = userProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.isPDV = false;
        this.showCadastro = false;
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        this.backoption = navParams.get('backoption');
        var user = navParams.get('user');
        this.fromPage = this.navParams.get('fromPage');
        this.logger.info('userParam: ' + JSON.stringify(user));
        this.logger.info('fromPageParam: ' + this.fromPage);
        if (user) {
            this.userProvider.byId(user.id).take(1).subscribe(function (_user) {
                _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](_user);
                _this.user.cpf = '';
                if (user.uidAparelho) {
                    _this.user.uidAparelho = user.uidAparelho;
                }
                loading.dismiss();
            }, function (error) {
                console.error(error);
                loading.dismiss();
            });
        }
        else {
            loading.dismiss();
        }
        // if(this.fromPage == "signup" || this.fromPage == "login") {
        this.showInformation('normal');
        // }
    }
    RootPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        //this.setVisibleMenu(false);
        if (this.fromPage == "pdv") {
            this.userProvider.getUserLocal().then(function (userID) {
                if (userID) {
                    _this.showInformation('revendedor');
                    return true;
                }
            });
        }
        else if (this.fromPage == "signup" || this.fromPage == "login") {
            return true;
        }
        else {
            // this.showHome();
            this.onBack();
            return false;
        }
    };
    RootPage.prototype.ionViewDidLoad = function () {
    };
    RootPage.prototype.updateData = function () {
        var loader = this.loadingCtrl.create({ content: 'Aguarde....' });
        loader.present();
        this.user.cpf = __WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].cleanBRMask(this.user.cpf), this.user.phone = __WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].cleanBRMask(this.user.phone), this.user.cep = __WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].cleanBRMask(this.user.cep);
        if (this.user.cpf == null || this.user.cpf === undefined ||
            (this.user.cpf != null && this.user.cpf !== undefined && this.user.cpf.trim() === '') ||
            (this.user.cpf != null && this.user.cpf !== undefined && this.user.cpf.trim() === '00000000000')) {
            this.showAlert('Aviso!', 'É preciso inserir um CPF/CNPJ válido!', '', function () { });
            loader.dismiss();
        }
        else if ((this.user.cpf.length == 11 && !__WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].checkCPF(this.user.cpf)) ||
            (this.user.cpf.length == 14 && !__WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].checkCNPJ(this.user.cpf))) {
            this.showAlert('Aviso!', 'É preciso inserir um CPF/CNPJ válido!', '', function () { });
            loader.dismiss();
        }
        else if (this.user.sex == null) {
            this.showAlert('Aviso!', 'É preciso escolher seu sexo!', '', function () {
            });
            loader.dismiss();
        }
        else if ((this.user.cpf.length == 11 && !__WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].checkCPF(this.user.cpf)) ||
            (this.user.cpf.length == 14 && !__WEBPACK_IMPORTED_MODULE_7__util_functions_util__["a" /* FunctionsUtil */].checkCNPJ(this.user.cpf))) {
            this.showAlert('Aviso!', 'É preciso insirir um CPF/CNPJ válido!', '', function () {
            });
            loader.dismiss();
        }
        else if (this.user.profile == 'revendedor' && (this.user.endereco == '' || this.user.contato == '')) {
            this.showAlert('Aviso!', 'É preciso preencher seus dados de revendedor', '', function () {
            });
            loader.dismiss();
        }
        else {
            this.logger.info('User: ' + JSON.stringify(this.user));
            this.user = this.setRevendedorProfile(this.user);
            this.userProvider.saveUser(this.user);
            this.events.publish('user:load', this.user.id);
            loader.dismiss();
            if (this.fromPage == "signup" || this.fromPage == "login") {
                this.showHome();
            }
            else {
                this.onBack();
            }
        }
    };
    RootPage.prototype.setRevendedorProfile = function (user) {
        user.profile = 'revendedor';
        user.configuracao = { alerta_5_minutos: false, alerta_10_minutos: false, alerta_15_minutos: false, ativacao_expiracao: false };
        return user;
    };
    RootPage.prototype.showInformation = function (profile) {
        this.showCadastro = true;
        switch (profile) {
            case 'normal':
                this.user.profile = 'user';
                this.isPDV = false;
                break;
            case 'revendedor':
                this.user.profile = 'revendedor';
                this.isPDV = true;
                break;
        }
    };
    RootPage.prototype.onBack = function () {
        this.viewCtrl.dismiss();
    };
    RootPage.prototype.closeRootPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__environments_constants__["a" /* Constants */].SIGNUP_PAGE.name);
    };
    RootPage.prototype.showHome = function () {
        this.setVisibleMenu(true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
    };
    RootPage.prototype.showAlert = function (title, msg, type, callback) {
        this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [{
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        callback();
                    }
                }]
        }).present();
    };
    RootPage.prototype.setVisibleMenu = function (status) {
        if (status === void 0) { status = false; }
        this.menuCtrl.enable(status);
        this.menuCtrl.swipeEnable(status);
    };
    RootPage.prototype.openHelp = function () {
        this.showAlert('Ajuda', 'Para se tornar um revendedor do Zona Fácil, precisamos que preencha todos os campos deste formulário.', '', function () { });
    };
    RootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-root',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\root\root.html"*/'<ion-header>\n\n    <ion-navbar color="header">\n\n        <ion-title *ngIf="!isPDV">\n\n            <ion-label>Confirmar Cadastro</ion-label>\n\n        </ion-title>\n\n        <ion-title *ngIf="isPDV">\n\n            <ion-label>Cadastro PDV</ion-label>\n\n        </ion-title>\n\n        <ion-buttons left *ngIf="backoption === \'ok\'">\n\n            <button ion-button icon-only (click)="onBack()">\n\n                <span color="light" class="header-icon" showWhen="ios">Fechar</span>\n\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="openHelp()">\n\n                <ion-icon name="help-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid class="grid-profile">\n\n\n\n        <ion-row class="type-user" *ngIf="!showCadastro">\n\n            <ion-item class="type-user-header">\n\n                <ion-label class="title-header">TIPO DE USUÁRIO</ion-label>\n\n            </ion-item>\n\n            <ion-item no-lines class="item-btn-type item-btn-type-margin-top">\n\n                <button ion-button class="btn-type-user" (click)="showInformation(\'normal\')">Normal</button>\n\n            </ion-item>\n\n            <ion-item no-lines class="item-btn-type">\n\n                <button ion-button class="btn-type-user" (click)="showInformation(\'revendedor\')">Revendedor\n\n                    (PDV)</button>\n\n            </ion-item>\n\n        </ion-row>\n\n\n\n        <ion-row class="informacoes-body" *ngIf="showCadastro">\n\n            <form class="informacoes-body-list">\n\n                <ion-item class="informacoes-body-list-item" no-lines mode="ios">\n\n                    <ion-label stacked>Nome</ion-label>\n\n                    <ion-input type="text" #name id="name" [(ngModel)]="user.name" mode="ios"\n\n                        [ngModelOptions]="{standalone: true}"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="informacoes-body-list-item" no-lines mode="ios">\n\n                    <ion-label stacked>Telefone</ion-label>\n\n                    <ion-input type="tel" #phone [(ngModel)]="user.phone" mode="ios"\n\n                        [ngModelOptions]="{standalone: true}" [brmasker]="{phone: true}"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="informacoes-body-list-item" no-lines mode="ios">\n\n                    <ion-label stacked>Email</ion-label>\n\n                    <ion-input type="email" #email [(ngModel)]="user.email" [ngModelOptions]="{standalone: true}"\n\n                        mode="ios" [disabled]="true"></ion-input>\n\n                </ion-item>\n\n                \n\n                <ion-item class="informacoes-body-list-item" no-lines mode="ios">\n\n                    <ion-label stacked>CPF/CNPJ (só números) - (Opcional)</ion-label>\n\n                    <ion-input type="tel" #cpf [(ngModel)]="user.cpf" mode="ios" [ngModelOptions]="{standalone: true}"\n\n                        [brmasker]="{person: true}"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="informacoes-body-list-item" no-lines *ngIf="isPDV" mode="ios">\n\n                    <ion-label stacked>Contato</ion-label>\n\n                    <ion-input type="text" #contato [(ngModel)]="user.contato" mode="ios"\n\n                        [ngModelOptions]="{standalone: true}"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="informacoes-body-list-item" no-lines *ngIf="isPDV" mode="ios">\n\n                    <ion-label stacked>Endereço</ion-label>\n\n                    <ion-input type="text" #endereco [(ngModel)]="user.endereco" mode="ios"\n\n                        [ngModelOptions]="{standalone: true}"></ion-input>\n\n                </ion-item>\n\n                <ion-item class="informacoes-body-list-item" no-lines *ngIf="isPDV" mode="ios">\n\n                    <ion-label stacked>CEP</ion-label>\n\n                    <ion-input type="tel" #cep [(ngModel)]="user.cep" mode="ios" [ngModelOptions]="{standalone: true}"\n\n                        [brmasker]="{mask:\'00.000-000\', len:10}"></ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines>\n\n                    <div class="btn-row">\n\n                        <button ion-button (click)="updateData()" class="btn" block>Confirmar</button>\n\n                    </div>\n\n                </ion-item>\n\n            </form>\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\root\root.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], RootPage);
    return RootPage;
}());

//# sourceMappingURL=root.js.map

/***/ })

});
//# sourceMappingURL=19.js.map