webpackJsonp([26],{

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportarProblemaPageModule", function() { return ReportarProblemaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportar_problema__ = __webpack_require__(878);
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

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarProblemaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reportar_problema_reportar_problema__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_constants__ = __webpack_require__(20);
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
                _this.showAlert('Sucesso', 'Sua menssagem foi enviada com sucesso!', '', function () {
                    loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__environments_constants__["a" /* Constants */].HOME_PAGE.name);
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
            selector: 'page-reportar-problema',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/reportar-problema/reportar-problema.html"*/'<ion-header no-border>\n    <ion-navbar color="header">\n        <button ion-button icon-only menuToggle>\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n        </button>\n\n        <ion-title>\n            <ion-label>Reportar Problema</ion-label>\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openHelp()">\n                <ion-icon name="help-circle" class="header-icon"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content">\n    <ion-grid>\n        <ion-row class="row-header">\n            <ion-col col-12 class="col-header">\n                <ion-label class="title">REPORTAR PROBLEMA / FALE CONOSCO</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <form [formGroup]="formGroup" (ngSubmit)="sendData()" class="informacoes-body-list">\n                <ion-item class="informacoes-body-list-item" no-lines>\n                    <ion-label stacked>Assunto</ion-label>\n                    <ion-input type="text" mode="ios" formControlName="subject"></ion-input>\n                </ion-item>\n                <ion-item class="informacoes-body-list-item" no-lines>\n                    <ion-label stacked>Mensagem</ion-label>\n                    <ion-textarea type="text" mode="ios" rows="8" formControlName="message"></ion-textarea>\n                </ion-item>\n                <ion-item class="btn-row" no-lines>\n                    <button ion-button type="submit" class="btn" block>Enviar</button>\n                </ion-item>\n            </form>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/reportar-problema/reportar-problema.html"*/,
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
//# sourceMappingURL=26.js.map