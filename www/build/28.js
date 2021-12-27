webpackJsonp([28],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryPasswordPageModule", function() { return RecoveryPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recovery_password__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecoveryPasswordPageModule = /** @class */ (function () {
    function RecoveryPasswordPageModule() {
    }
    RecoveryPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recovery_password__["a" /* RecoveryPasswordPage */]),
            ],
        })
    ], RecoveryPasswordPageModule);
    return RecoveryPasswordPageModule;
}());

//# sourceMappingURL=recovery-password.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecoveryPasswordPage = /** @class */ (function () {
    function RecoveryPasswordPage(navCtrl, navParams, menu, alertCtrl, loadingCtrl, formBuilder, authProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.userProvider = userProvider;
        this.submitAttempt = false;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.recoveryForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(emailRegex)])]
        });
    }
    RecoveryPasswordPage.prototype.ionViewCanEnter = function () {
        this.setVisibleMenu(false);
        this.userProvider.getUserLocal().then(function (userID) {
            if (!userID) {
                return true;
            }
        });
    };
    RecoveryPasswordPage.prototype.ionViewDidLoad = function () {
    };
    RecoveryPasswordPage.prototype.ionViewWillLeave = function () {
    };
    RecoveryPasswordPage.prototype.recovery = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.isValidAttributes()) {
            var loading_1 = this.showLoading();
            loading_1.present();
            this.authProvider.sendPasswordResetEmail(this.recoveryForm.value.email)
                .then(function () {
                loading_1.dismiss();
                _this.showAlert('Sucesso!', 'Você receberá um email com instruções para recuperar sua senha.', '', function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__environments_constants__["a" /* Constants */].LOGIN_PAGE.name);
                });
            }).catch(function (error) {
                loading_1.dismiss();
                var errorMessage = 'Não foi possível restaurar sua senha!';
                if (error['code'] && error['code'] == 'auth/user-not-found') {
                    errorMessage = 'O usuário não está cadastrado!';
                }
                _this.showAlert("Erro!", errorMessage, "error", function () {
                });
            });
        }
        else {
            var warn = 'Insira um email válido para recuperar sua senha!';
            this.showAlert("Aviso", warn, "info", function () {
            });
        }
    };
    RecoveryPasswordPage.prototype.isValidAttributes = function () {
        return this.recoveryForm.valid;
    };
    RecoveryPasswordPage.prototype.showAlert = function (title, msg, type, callback) {
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
    RecoveryPasswordPage.prototype.setVisibleMenu = function (status) {
        if (status === void 0) { status = false; }
        this.menu.enable(status);
        this.menu.swipeEnable(status);
    };
    RecoveryPasswordPage.prototype.showLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__environments_constants__["a" /* Constants */].LOGIN_PAGE.name);
    };
    RecoveryPasswordPage.prototype.showLoading = function () {
        return this.loadingCtrl.create({ content: 'Aguarde...' });
    };
    RecoveryPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recovery-password',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\recovery-password\recovery-password.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent class="navbar only-mobile">\n\n    <ion-title>\n\n      <ion-label>Recuperar Senha</ion-label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="recovery-password">\n\n\n\n  <div class="logo">\n\n    <ion-grid class="img img-centralize img-logo">\n\n      <img src="assets/imgs/logo.png" />\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <ion-grid class="grid-form">\n\n\n\n    <ion-row justify-content-center>\n\n      <div class="form-margin">\n\n        <form class="form" [formGroup]="recoveryForm" novalidate>\n\n          <div text-center>\n\n            <ion-input type="email" #email formControlName="email" id="email" placeholder="Email"\n\n              (keyup.enter)="focusInput(password)"></ion-input>\n\n            <ion-label class="error-message" *ngIf="recoveryForm.controls.email.invalid  && (submitAttempt)">Insira um\n\n              email válido</ion-label>\n\n          </div>\n\n        </form>\n\n\n\n        <button ion-button (click)="recovery()" class="btn" block>Recuperar</button>\n\n\n\n      </div>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="logo">\n\n    <ion-grid class="img img-centralize img-logo logo-amc">\n\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col align-items-center class="img-logo1-menu">\n\n          <img src="assets/imgs/logo-backwhite-cipetran.png" />\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\recovery-password\recovery-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], RecoveryPasswordPage);
    return RecoveryPasswordPage;
}());

//# sourceMappingURL=recovery-password.js.map

/***/ })

});
//# sourceMappingURL=28.js.map