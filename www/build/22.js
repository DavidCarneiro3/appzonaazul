webpackJsonp([22],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 771:
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

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_configuracao__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_functions_util__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = /** @class */ (function () {
    function LoginPage(events, navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl, menu, notificationProvider, authProvider, userProvider, logger, modalCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.notificationProvider = notificationProvider;
        this.authProvider = authProvider;
        this.userProvider = userProvider;
        this.logger = logger;
        this.modalCtrl = modalCtrl;
        this.submitAttempt = false;
        this.versao = __WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].VERSAO;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(emailRegex)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)])]
        });
    }
    LoginPage.prototype.ionViewCanEnter = function () {
        this.setVisibleMenu(false);
        this.userProvider.getUserLocal().then(function (userID) {
            if (!userID) {
                return true;
            }
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.ionViewWillLeave = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            var loading_1 = this.loadingCtrl.create({ content: 'Aguarde...' });
            loading_1.present();
            this.authProvider.login(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (res) {
                if (res.logged) {
                    _this.logger.info('NOTIFICATION LOGIN. User: ' + res.logged.id);
                    _this.notificationProvider.inicialize(res.logged.id);
                    _this.updateConfig(res.logged);
                    _this.events.publish('user', res.logged);
                }
                if ((res.logged.cpf.length == 11 && !__WEBPACK_IMPORTED_MODULE_6__util_functions_util__["a" /* FunctionsUtil */].checkCPF(res.logged.cpf)) ||
                    (res.logged.cpf.length == 14 && !__WEBPACK_IMPORTED_MODULE_6__util_functions_util__["a" /* FunctionsUtil */].checkCNPJ(res.logged.cpf))) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].ROOT_PAGE.name, { user: res.logged, fromPage: 'login' });
                    _this.setVisibleMenu(false);
                    loading_1.dismiss();
                }
                else {
                    _this.events.publish('user:load', res.logged.id);
                    _this.events.publish('user', res.logged);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
                    _this.setVisibleMenu(true);
                }
                loading_1.dismiss();
            })
                .catch(function (error) {
                var message = __WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].FIREBASE_ERRORS[error.code];
                _this.showAlert('Aviso!', message, 'error', function () { });
                loading_1.dismiss();
            });
        }
    };
    LoginPage.prototype.focusInput = function (input) {
        input.setFocus();
    };
    LoginPage.prototype.showSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].SIGNUP_PAGE.name, { uidAparelho: this.uidAparelho });
    };
    LoginPage.prototype.showRecoverPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].RECOVERY_PASSWORD_PAGE.name);
    };
    LoginPage.prototype.showAlert = function (title, msg, type, callback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        callback();
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.setVisibleMenu = function (status) {
        if (status === void 0) { status = false; }
        this.menu.enable(status);
        this.menu.swipeEnable(status);
    };
    LoginPage.prototype.updateConfig = function (_a) {
        var configuracao = _a.configuracao, id = _a.id;
        var novaConfiguracao = new __WEBPACK_IMPORTED_MODULE_3__models_configuracao__["a" /* ConfiguracaoModel */]();
        configuracao.hasOwnProperty ? console.log('Usuário já se encontra com as notificações ativas!') : this.userProvider.updateUser(id, { configuracao: novaConfiguracao }).then(function (response) { return console.log("deu isso " + response); }).catch(function (err) { return console.log("Algo deu errado " + err); });
    };
    LoginPage.prototype.openHelp = function () {
        this.showAlert('Ajuda', 'Insira o seu e-mail e a sua senha para entrar, caso tenha esquecido clique em recuperar senha, ou clique em cadastrar para criar uma nova conta.', '', function () { });
    };
    LoginPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].FILTER_PAGAMENTO_PAGE.name, null, { cssClass: 'modal-alert' });
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/login/login.html"*/'<ion-header no-border>\n  <ion-navbar transparent class="navbar only-mobile">\n    <ion-title>\n      <!-- <ion-label>Login</ion-label> -->\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="login">\n\n  <div class="logo">\n    <ion-grid class="img img-centralize img-logo">\n      <img src="assets/imgs/logo.png" />\n    </ion-grid>\n  </div>\n\n  <ion-grid class="grid-form">\n    <ion-row justify-content-center>\n      <div class="form-margin">\n\n        <form class="form" [formGroup]="loginForm" novalidate>\n\n          <div text-center>\n            <ion-input type="email" #email formControlName="email" id="email" placeholder="Email"\n              (keyup.enter)="focusInput(password)"></ion-input>\n            <ion-label class="error-message" *ngIf="loginForm.controls.email.invalid  && (submitAttempt)">Insira um\n              email válido</ion-label>\n          </div>\n          <div text-center>\n            <ion-input #password type="password" formControlName="password" id="password" placeholder="Senha"\n              (keyup.enter)="login()"></ion-input>\n            <ion-label class="error-message" *ngIf="loginForm.controls.password.invalid  && (submitAttempt)">Insira uma\n              senha válida</ion-label>\n          </div>\n\n        </form>\n\n        <button ion-button (click)="login()" class="btn" block>Entrar</button>\n\n      </div>\n\n    </ion-row>\n    <ion-row>\n      <ion-label>Não possui uma conta?\n        <span class="btn-link" (click)="showSignUp()">Cadastre-se</span>\n      </ion-label>\n    </ion-row>\n    <ion-row>\n      <ion-label>Esqueceu sua senha?\n        <span class="btn-link" (click)="showRecoverPassword()">Recuperar senha</span>\n      </ion-label>\n    </ion-row>\n  </ion-grid>\n\n  <div class="logo">\n    <ion-grid class="img img-centralize img-logo logo-amc">\n      <ion-row align-items-center justify-content-center>\n        <ion-col align-items-center class="img-logo1-menu">\n          <img src="assets/imgs/logo-backwhite-cipetran.png" />\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n</ion-content>\n\n<ion-footer mode="ios" class="footer-versao">\n  <ion-toolbar mode="ios" class="custom-toolbar">\n    <ion-title mode="ios" class="toolbar-title"><span (click)="openHelp()">Precisando de ajuda?</span><br />{{versao}}\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=22.js.map