webpackJsonp([27],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportarProblemaPageModule", function() { return ReportarProblemaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportar_problema__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportarProblemaPageModule = /** @class */ (function () {
    function ReportarProblemaPageModule() {
    }
    ReportarProblemaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reportar_problema__["a" /* ReportarProblemaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reportar_problema__["a" /* ReportarProblemaPage */]),
            ],
        })
    ], ReportarProblemaPageModule);
    return ReportarProblemaPageModule;
}());

//# sourceMappingURL=reportar-problema.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarProblemaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportar_problema_reportar_problema__ = __webpack_require__(439);
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






var ReportarProblemaPage = /** @class */ (function () {
    function ReportarProblemaPage(navCtrl, userProvider, formBuilder, alertCtrl, loadingCtrl, reProbProvider) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.reProbProvider = reProbProvider;
        this.formGroup = this.formBuilder.group({
            subject: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    ReportarProblemaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID != null) {
                _this.userId = userID;
            }
        });
    };
    ReportarProblemaPage.prototype.sendData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        if (!this.formGroup.valid) {
            this.showAlert('Aviso!', 'Todos os campos são obrigatórios', '', function () {
                loading.dismiss();
            });
        }
        else {
            this.reProbProvider.save(this.userId, this.formGroup.value).then(function (data) {
                console.log(data);
                _this.showAlert('Obrigado', 'Recebemos sua mensagem, em breve entraremos em contato com você.', '', function () {
                    loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
                });
            });
        }
    };
    ReportarProblemaPage.prototype.showAlert = function (title, message, type, callback) {
        this.alertCtrl.create({
            title: title,
            message: message,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) { return callback(); }
                }
            ]
        }).present();
    };
    ReportarProblemaPage.prototype.openHelp = function () {
        this.showAlert('Ajuda', 'Envie-nos sugestões, críticas e melhorias preenchendo o formulário conforme os campos solicitados.', '', function () { });
    };
    ReportarProblemaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportar-problema',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\reportar-problema\reportar-problema.html"*/'<ion-header no-border>\n\n    <ion-navbar color="header">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n\n        </button>\n\n\n\n        <ion-title class="header-title">Reportar Problema</ion-title>\n\n        \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n    <ion-grid>\n\n        <ion-row class="row-header">\n\n            <ion-col col-12 class="col-header">\n\n                <ion-label class="title"></ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <form [formGroup]="formGroup" (ngSubmit)="sendData()" class="informacoes-body-list">\n\n                <ion-item class="informacoes-body-list-item" no-lines>\n\n                    <ion-label ><ion-icon name="ios-help-circle-outline"></ion-icon></ion-label>\n\n                    <ion-input type="text" mode="ios" formControlName="subject" placeholder="Assunto" class="{{formGroup.controls.subject.valid?\'blue-component\':\'grey-component\'}}">\n\n\n\n                    </ion-input><button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{formGroup.controls.subject.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n                </ion-item>\n\n                <ion-item class="informacoes-body-list-item" no-lines>\n\n                    <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n\n                    <ion-textarea type="text" mode="ios" rows="4" formControlName="message" placeholder="Mensagem" class="{{formGroup.controls.message.valid?\'blue-component\':\'grey-component\'}}"></ion-textarea>\n\n                    <button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="{{formGroup.controls.message.valid?\'icon-blue icon icon-ios ion-ios-checkmark-circle-outline\':\'icon-grey icon icon-ios ion-ios-checkmark-circle-outline\'}}"></ion-icon> </button>\n\n                </ion-item>\n\n                <ion-item class="btn-row" no-lines>\n\n                    <button ion-button type="submit" class="btn" block>Enviar</button>\n\n                </ion-item>\n\n            </form>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\reportar-problema\reportar-problema.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_reportar_problema_reportar_problema__["a" /* ReportarProblemaProvider */]])
    ], ReportarProblemaPage);
    return ReportarProblemaPage;
}());

//# sourceMappingURL=reportar-problema.js.map

/***/ })

});
//# sourceMappingURL=27.js.map