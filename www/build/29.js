webpackJsonp([29],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModalPageModule", function() { return PermissionsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permissions_screen__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PermissionsModalPageModule = /** @class */ (function () {
    function PermissionsModalPageModule() {
    }
    PermissionsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__permissions_screen__["a" /* PermissionsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__permissions_screen__["a" /* PermissionsModalPage */]),
            ],
        })
    ], PermissionsModalPageModule);
    return PermissionsModalPageModule;
}());

//# sourceMappingURL=permissions-screen.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionsModalPage = /** @class */ (function () {
    function PermissionsModalPage(navParams, alertCtrl, userProvider, androidPermissions, viewCtrl) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.androidPermissions = androidPermissions;
        this.viewCtrl = viewCtrl;
        this.fromPage = '';
        this.title = '';
        this.reason = '';
    }
    PermissionsModalPage.prototype.ionViewWillLoad = function () {
        this.getPage();
    };
    PermissionsModalPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.user_id = userID;
                _this.userProvider.byId(userID)
                    .subscribe(function (user) {
                    _this.user = user;
                });
                return true;
            }
        });
    };
    // PROCURAR AQUI PARA DIVIDER CADA PERMISSÃO EM UMA TELA SEPARADA
    PermissionsModalPage.prototype.getPage = function () {
        var _this = this;
        var IMEI = "O Zona F\u00E1cil precisar\u00E1 do seu IMEI para prosseguir. O IMEI \u00E9 o identificador \u00FAnico do seu smartphone e ele garantir\u00E1 a seguran\u00E7a das suas transa\u00E7\u00F5es.";
        var localização = "O Zona F\u00E1cil est\u00E1 \u00E0 sua disposi\u00E7\u00E3o em muitos bairros, e para melhor atend\u00EA-lo, gostar\u00EDamos da sua permiss\u00E3o para acessar a sua localiza\u00E7\u00E3o para selecionar automaticamente o bairro onde voc\u00EA est\u00E1 localizado e para informar vagas dispon\u00EDveis, nos bairros onde h\u00E1 este servi\u00E7o.";
        var camera = "O Zona F\u00E1cil precisar\u00E1 acessar sua c\u00E2mera ou arquivos de m\u00EDdia para prosseguir. Isso porque ser\u00E1 necess\u00E1rio enviar uma foto do documento.";
        return new Promise(function (resolve) {
            _this.fromPage = _this.navParams.get('fromPage');
            if (_this.fromPage == 'profile-edit') {
                _this.title = 'Acesso a Câmera e Galeria!';
                _this.reason = 'O Zona Fácil precisa de acesso a camera e a galeria para alterar a foto de perfil!';
            }
            else if (_this.fromPage === 'phone') {
                _this.title = 'Acesso ao Telefone';
                _this.reason = IMEI;
            }
            else if (_this.fromPage === 'pdv-empresa') {
                _this.title = 'Acesso a Câmera e Galeria!';
                _this.reason = camera;
            }
            else {
                _this.title = 'Acesso a Localização!';
                _this.reason = localização;
            }
            resolve(true);
        });
    };
    PermissionsModalPage.prototype.askPermissions = function () {
        if (this.fromPage == 'profile-edit' || this.fromPage == 'pdv-empresa') {
            this.askCameraPermission();
        }
        else if (this.fromPage == 'phone') {
            this.askPhonePermision();
        }
        else {
            this.askLocationPermission();
        }
    };
    PermissionsModalPage.prototype.askCameraPermission = function () {
        var _this = this;
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ])
            .then(function () {
            _this.closePage();
        })
            .catch(function (error) {
        });
    };
    PermissionsModalPage.prototype.askPhonePermision = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
            .then(function (result) {
            if (result.hasPermission) {
                _this.userProvider.updateUuidOrImei(_this.user_id, function (uuid) {
                    _this.user.uidAparelho = uuid;
                });
                _this.closePage();
            }
            else {
                _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.READ_PHONE_STATE)
                    .then(function (result) {
                    if (result.hasPermission) {
                        _this.closePage();
                    }
                    else {
                        _this.showAlert('Permissão Importante!', 'O Zona Fácil precisa de acesso ao Telefone, para obter o IMEI do dispositivo para o funcionamento do sistema.', 'alert-button-group');
                    }
                })
                    .catch(function (error) {
                });
            }
        });
    };
    PermissionsModalPage.prototype.askLocationPermission = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
            .then(function (result) {
            _this.closePage();
        })
            .catch(function (err) { return console.log(err); });
    };
    PermissionsModalPage.prototype.askPhonePermission = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
            .then(function (result) {
            if (result.hasPermission) {
                _this.userProvider.updateUuidOrImei(_this.user_id, function (uuid) {
                });
                _this.closePage();
            }
        });
    };
    PermissionsModalPage.prototype.closePage = function () {
        this.viewCtrl.dismiss();
    };
    PermissionsModalPage.prototype.showAlert = function (title, msg, type) {
        var _this = this;
        this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [
                {
                    text: 'Autorizar',
                    cssClass: 'btn-ok',
                    handler: function () {
                        _this.askPhonePermission();
                    }
                },
                {
                    text: 'Cancelar',
                    cssClass: 'btn-warning',
                    handler: function () {
                        _this.closePage();
                    }
                }
            ]
        }).present();
    };
    PermissionsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'permissions-screen',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/permissions/permissions-screen.html"*/'<ion-header no-border text-center>\n    <ion-navbar color="header" text-center>\n        <ion-title>\n            <ion-label>\n                Permissão Requerida\n            </ion-label>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <p class="conteudo-titulo">\n        {{title}}\n    </p>\n    <p class="conteudo-texto">\n        {{reason}}\n    </p>\n</ion-content>\n\n<ion-footer class="footer">\n    <ion-toolbar>\n        <button ion-button block (click)="askPermissions()" mode="md">Continuar</button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/permissions/permissions-screen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */]])
    ], PermissionsModalPage);
    return PermissionsModalPage;
}());

//# sourceMappingURL=permissions-screen.js.map

/***/ })

});
//# sourceMappingURL=29.js.map