webpackJsonp([18],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

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

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_functions_util__ = __webpack_require__(772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = /** @class */ (function () {
    function SignupPage(events, navCtrl, navParams, menu, platform, loadingCtrl, alertCtrl, formBuilder, authProvider, logger, userProvider, modalCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.logger = logger;
        this.userProvider = userProvider;
        this.modalCtrl = modalCtrl;
        this.submitAttempt = false;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupForm = formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(11)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(emailRegex)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])],
            terms: [false, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    SignupPage.prototype.ionViewCanEnter = function () {
        this.setVisibleMenu(false);
        this.userProvider.getUserLocal().then(function (userID) {
            if (!userID) {
                return true;
            }
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe('checked', function (value) {
            _this.signupForm.controls['terms'].setValue(value);
        });
    };
    SignupPage.prototype.ionViewWillLeave = function () {
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        if (!this.signupForm.value.terms) {
            this.showAlert('Aviso', "Você precisa aceitar os termos e condições do aplicativo Zona Azul!", "info", function () {
            });
            return;
        }
        this.signupForm.value.phone = __WEBPACK_IMPORTED_MODULE_8__util_functions_util__["a" /* FunctionsUtil */].cleanBRMask(this.signupForm.value.phone);
        this.submitAttempt = true;
        if (this.signupForm.valid) {
            var loading_1 = this.loadingCtrl.create({ content: 'Aguarde...' });
            loading_1.present();
            var user_1 = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](this.signupForm.value);
            user_1.uidAparelho = this.navParams.get('uidAparelho');
            var password = this.signupForm.value.password;
            this.authProvider.createUserAuth(user_1.email, password, user_1)
                .then(function (userAuth) {
                var res = { 'logged': userAuth };
                console.log('userAuth', userAuth);
                _this.userProvider.saveUserLocal(userAuth.id).then(function (_) {
                    _this.logger.info('NOTIFICATION SIGNUP. User: ' + userAuth.id);
                    _this.events.publish('user', user_1);
                    _this.showPage(userAuth.id, { user: userAuth, fromPage: 'signup' });
                });
                /*if (userAuth) {
                    let res = { 'logged': userAuth };

                    this.modalCtrl.create(Constants.CONFIRMA_CPF_PAGE.name, { res }, { cssClass: 'modal-alert' })
                        .present()
                    this.events.subscribe('update', value => {
                        this.userProvider.updateUser(value.logged.id, { cpf: value.logged.cpf })
                            .then(__ => {

                                this.userProvider.saveUserLocal(userAuth.id).then(_ => {
                                    this.logger.info('NOTIFICATION SIGNUP. User: ' + userAuth.id);
                                    this.showPage(userAuth.id, { user: userAuth, fromPage: 'signup' });
                                })
                            })
                    })
                }*/
                loading_1.dismiss();
                // this.navCtrl.setRoot(Constants.TERMS_PAGE.name, {user: userAuth, isToggle: false});
            }).catch(function (error) {
                loading_1.dismiss();
                _this.showAlert("Aviso!", "O endereço de e-mail já está sendo usado por outra conta.", "info", function () { });
            });
        }
    };
    SignupPage.prototype.showPage = function (userId, params) {
        this.setVisibleMenu(true);
        // this.navCtrl.setRoot(Constants.ROOT_PAGE.name, params);
        this.showHome(userId, params);
    };
    SignupPage.prototype.showHome = function (userId, params) {
        this.events.publish('user:load', userId);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name, params);
    };
    SignupPage.prototype.showTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__environments_constants__["a" /* Constants */].TERMS_PAGE.name, { isToggle: false });
    };
    SignupPage.prototype.showAlert = function (title, msg, type, callback) {
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
    SignupPage.prototype.focusInput = function (input) {
        input.setFocus();
    };
    SignupPage.prototype.setVisibleMenu = function (status) {
        if (status === void 0) { status = false; }
        this.menu.enable(status);
        this.menu.swipeEnable(status);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\signup\signup.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent class="navbar only-mobile">\n\n\n\n    <ion-title>\n\n      <ion-label>Cadastro</ion-label>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="signup">\n\n\n\n  <div class="logo">\n\n    <ion-grid class="img img-centralize img-logo">\n\n      <img src="assets/imgs/logo.png" />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <ion-grid class="grid-form">\n\n    <ion-row justify-content-center>\n\n      <div class="form-margin">\n\n        <form class="form" [formGroup]="signupForm" novalidate>\n\n          <div text-center>\n\n            <ion-input type="text" #name formControlName="name" id="name" placeholder="Nome"\n\n              (keyup.enter)="focusInput(email)"></ion-input>\n\n            <ion-label class="error-message" *ngIf="signupForm.controls.name.invalid  && (submitAttempt)">Insira um nome\n\n              válido</ion-label>\n\n          </div>\n\n          <div text-center>\n\n            <ion-input type="tel" #phone formControlName="phone" id="telephone" placeholder="Telefone"\n\n              (keyup.enter)="focusInput(phone)" [brmasker]="{phone: true}"></ion-input>\n\n            <ion-label class="error-message" *ngIf="signupForm.controls.phone.invalid  && (submitAttempt)">Insira um\n\n              telefone válido</ion-label>\n\n          </div>\n\n          <div text-center>\n\n            <ion-input type="email" #email formControlName="email" id="email" placeholder="Email"\n\n              (keyup.enter)="focusInput(password)"></ion-input>\n\n            <ion-label class="error-message" *ngIf="signupForm.controls.email.invalid  && (submitAttempt)">Insira um\n\n              email válido</ion-label>\n\n          </div>\n\n          <div text-center>\n\n            <ion-input #password type="password" formControlName="password" id="password"\n\n              placeholder="Senha: mínimo 6 digitos" (keyup.enter)="register()"></ion-input>\n\n            <ion-label class="error-message" *ngIf="signupForm.controls.password.invalid  && (submitAttempt)">Insira uma\n\n              senha válida</ion-label>\n\n          </div>\n\n          <ion-row>\n\n            <ion-col col-12 class="checkbox">\n\n              <ion-checkbox #terms formControlName="terms" [(ngModel)]="checked" class="check"></ion-checkbox>\n\n              <ion-label class="text">Eu concordo com os <span class="info-link" (click)="showTerms()">Termos e\n\n                  Condições</span></ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n\n\n        <button ion-button (click)="register()" class="btn" block>Criar Minha Conta</button>\n\n\n\n      </div>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="logo">\n\n    <ion-grid class="img img-centralize img-logo logo-amc">\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col align-items-center class="img-logo1-menu">\n\n          <img src="assets/imgs/logo-backwhite-cipetran.png" />\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=18.js.map