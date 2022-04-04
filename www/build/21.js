webpackJsonp([21],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdvEmpresaPageModule", function() { return PdvEmpresaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdv_empresa__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PdvEmpresaPageModule = /** @class */ (function () {
    function PdvEmpresaPageModule() {
    }
    PdvEmpresaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pdv_empresa__["a" /* PdvEmpresaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pdv_empresa__["a" /* PdvEmpresaPage */]),
            ],
        })
    ], PdvEmpresaPageModule);
    return PdvEmpresaPageModule;
}());

//# sourceMappingURL=pdv-empresa.module.js.map

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

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdvEmpresaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_pdv__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_functions_util__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PdvEmpresaPage = /** @class */ (function () {
    function PdvEmpresaPage(navCtrl, navParams, FormBuilder, alertCtrl, cameraProvider, androidPermissions, modalCtrl, loadingCtrl, events, userProvider, modalProvider, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.FormBuilder = FormBuilder;
        this.alertCtrl = alertCtrl;
        this.cameraProvider = cameraProvider;
        this.androidPermissions = androidPermissions;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.userProvider = userProvider;
        this.modalProvider = modalProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modelPdv = 'PDV';
        this.selectOptions = {
            title: 'Modalidade',
            subTitle: 'Escolha sua modalidade de revendedor',
            mode: 'ios'
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_7__models_user__["a" /* User */]();
        this.pdv = new __WEBPACK_IMPORTED_MODULE_6__models_pdv__["a" /* Pdv */]();
        this.subscription = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.empresaForm = FormBuilder.group({
            Modalidade: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Rsocial: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)]],
            CNPJ: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            InsMun: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Endereco: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)]],
            Cep: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(emailRegex)],
            document: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    PdvEmpresaPage.prototype.ionViewCanEnter = function () {
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                return true;
            }
        });
    };
    PdvEmpresaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID != null) {
                _this.subCurrentUser = _this.userProvider.byId(userID).subscribe(function (user) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_7__models_user__["a" /* User */](user);
                });
            }
        });
    };
    PdvEmpresaPage.prototype.ionViewDidEnter = function () { };
    PdvEmpresaPage.prototype.ionViewWillLeave = function () {
        this.subscription.add(this.subCurrentUser);
        this.subscription.unsubscribe();
    };
    PdvEmpresaPage.prototype.hasPhoto = function () {
        var doc = this.empresaForm.value.document;
        return doc && doc.length > 0;
    };
    PdvEmpresaPage.prototype.createPDV = function () {
        var empresa = this.empresaForm.value;
        var PDV = {
            empresa: {
                modalidade: empresa.Modalidade,
                rSocial: empresa.Rsocial,
                cnpj: empresa.CNPJ,
                insMun: empresa.InsMun,
                endereco: empresa.Endereco,
                cep: empresa.Cep,
                empPhone: empresa.phone,
                empEmail: empresa.email,
                documento: empresa.document,
            }
        };
        return PDV;
    };
    PdvEmpresaPage.prototype.showAlert = function (title, msg, type) {
        this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [{
                    text: 'Ok',
                    cssClass: 'btn-ok',
                }]
        }).present();
    };
    PdvEmpresaPage.prototype.selectPicture = function () {
        var _this = this;
        this.checkPermission();
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.cameraProvider.openMedia('Abrir', this.actionSheetCtrl, function (imageBase64) {
                _this.empresaForm.controls['document'].setValue(imageBase64);
            });
        }
        else {
            this.fileUserPhoto.nativeElement.click();
        }
    };
    PdvEmpresaPage.prototype.processWebImageUserPhoto = function ($event) {
        var _this = this;
        this.cameraProvider.processWebImage($event, function (imageBase64, w, h) {
            _this.empresaForm.controls['document'].setValue(imageBase64);
        });
    };
    PdvEmpresaPage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA && this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then(function (result) {
            result.hasPermission ? '' : _this.requestCameraPermission();
        })
            .catch(function () {
        });
    };
    PdvEmpresaPage.prototype.requestCameraPermission = function () {
        var _this = this;
        var permissionModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'pdv-empresa' });
        permissionModal.present()
            .then(function () {
            _this.modalProvider.setActive();
        })
            .catch(function (error) {
            alert(error);
        });
    };
    PdvEmpresaPage.prototype.continue = function () {
        var _this = this;
        var unmaskCnpj = __WEBPACK_IMPORTED_MODULE_11__util_functions_util__["a" /* FunctionsUtil */].cleanBRMask(this.empresaForm.value.CNPJ);
        if (this.empresaForm.controls.Modalidade.invalid) {
            this.showAlert("Modalidade não selecionada", "Selecione um tipo de Modalidade", "");
        }
        else if (this.empresaForm.controls.Rsocial.invalid) {
            this.showAlert("Razao Social invalida", "Digite uma valor válido", "");
        }
        else if (!__WEBPACK_IMPORTED_MODULE_11__util_functions_util__["a" /* FunctionsUtil */].checkCNPJ(unmaskCnpj)) {
            this.showAlert("CNPJ invalido", "Digite um CNPJ Valido", "");
        }
        else if (this.empresaForm.controls.InsMun.invalid) {
            this.showAlert("Inscricao Municipal Invalida", "Digite um valor valido", "");
        }
        else if (this.empresaForm.controls.Endereco.invalid) {
            this.showAlert("Endereco invalido", "Digite um valor valido", "");
        }
        else if (this.empresaForm.controls.Cep.invalid) {
            this.showAlert("Cep invalido", "Digite um valor valido", "");
        }
        else if (this.empresaForm.controls.phone.invalid) {
            this.showAlert("Cep telefone", "Digite um valor valido", "");
        }
        else if (this.empresaForm.controls.email.invalid) {
            this.showAlert("email invalido", "Digite um valor valido", "");
        }
        else if (this.empresaForm.controls.document.invalid) {
            this.showAlert("arquivo invalido", "Selecione um arquivo", "");
        }
        else {
            var form = this.createPDV();
            this.pdv = new __WEBPACK_IMPORTED_MODULE_6__models_pdv__["a" /* Pdv */](form.empresa);
            //this.user.name = form.re.name
            this.user.pdvReg = this.pdv;
            //this.loadingCtrl.create({content:"Enviando Solicitacao"}).present()
            this.alertCtrl.create({
                title: "Confirmar solicitação?",
                message: "Sua solicitação será analisada pelos nossos consultores e em breve entraremos em contato com você. Deseja continuar?",
                buttons: [
                    {
                        text: 'Sim',
                        cssClass: 'btn-ok',
                        handler: function () {
                            _this.userProvider.saveUser(_this.user);
                            _this.events.publish('user', _this.user);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
                        }
                    },
                    {
                        text: 'Não',
                        cssClass: 'btn-cancelar'
                    }
                ]
            }).present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUserPhoto'),
        __metadata("design:type", Object)
    ], PdvEmpresaPage.prototype, "fileUserPhoto", void 0);
    PdvEmpresaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdv-empresa',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\pdv-empresa\pdv-empresa.html"*/'<ion-header no-border>\n\n  <ion-navbar color="header">\n\n\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon class="header-icon" name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title class="header-title">Quero ser PDV</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid class="grid-profile">\n\n\n\n    <ion-row class="informacoes-body">\n\n    \n\n\n\n      <form class="informacoes-body-list" [formGroup]="empresaForm">\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label stacked> <ion-icon name="ios-briefcase-outline"></ion-icon></ion-label>\n\n          <ion-select [(ngModel)]="modelPdv" [selectOptions]="selectOptions" formControlName="Modalidade" name="modalidade" class="{{empresaForm.controls.Modalidade.valid?\'blue-component\':\'grey-component\'}}" cancelText="Cancelar" okText="Ok">\n\n            <ion-option value="PDV" selected="true"> PDV </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label><ion-icon name="ios-paper-outline"></ion-icon></ion-label>\n\n          <ion-input type="text" mode="ios" formControlName="Rsocial" placeholder="Razão Social" class="{{empresaForm.controls.Rsocial.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.Rsocial.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label ><ion-icon name="ios-card-outline"></ion-icon></ion-label>\n\n          <ion-input type="tel" mode="ios" formControlName="CNPJ" placeholder="CNPJ" [brmasker]="{mask: \'00.000.000/0000-00\', len:18, type:\'all\'}" class="{{empresaForm.controls.CNPJ.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.CNPJ.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label ><ion-icon name="ios-list-box-outline"></ion-icon> </ion-label>\n\n          <ion-input type="text" mode="ios" formControlName="InsMun" placeholder="Inscrição Municipal" class="{{empresaForm.controls.InsMun.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.InsMun.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label ><ion-icon name="ios-map-outline"></ion-icon></ion-label>\n\n          <ion-input type="text" mode="ios" formControlName="Endereco" placeholder="Endereço" class="{{empresaForm.controls.Endereco.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.Endereco.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label><ion-icon name="ios-send-outline"></ion-icon></ion-label>\n\n          <ion-input type="tel" mode="ios" formControlName="Cep" placeholder="CEP" class="{{empresaForm.controls.Cep.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.Modalidade.Cep?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label ><ion-icon name="ios-call-outline"></ion-icon></ion-label>\n\n          <ion-input type="tel" mode="ios" formControlName="phone" placeholder="Telefone" [brmasker]="{phone: true}" class="{{empresaForm.controls.phone.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.phone.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label ><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n\n          <ion-input type="email" mode="ios" formControlName="email" placeholder="Email" class="{{empresaForm.controls.email.valid?\'grey-component\':\'blue-component\'}}">\n\n\n\n          </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{empresaForm.controls.email.valid?\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <header *ngIf="!hasPhoto()">Enviar Documentos da Empresa</header>\n\n          <header *ngIf="hasPhoto()">Documento Anexado <span>&#10003;</span></header>\n\n          <input type="file" #fileUserPhoto style="visibility: hidden; height: 0px "\n\n            (change)="processWebImageUserPhoto($event)" />\n\n          <button ion-button (click)="selectPicture()" class="btn" style="height:35px;" block> Foto/Arquivo </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <button ion-button (click)="continue()" class="btn-add" style="height:35px;" block> Enviar Solicitação </button>\n\n          <input type="file" #fileUserPhoto style="visibility: hidden; height: 0px "\n\n            (change)="processWebImageUserPhoto($event)" />\n\n        </ion-item>\n\n\n\n\n\n      </form>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\pdv-empresa\pdv-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_modal_modal__["a" /* ModalProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */]])
    ], PdvEmpresaPage);
    return PdvEmpresaPage;
}());

//# sourceMappingURL=pdv-empresa.js.map

/***/ })

});
//# sourceMappingURL=21.js.map