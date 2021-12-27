webpackJsonp([24],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelarTransacaoPageModule", function() { return CancelarTransacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelar_transacao__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancelarTransacaoPageModule = /** @class */ (function () {
    function CancelarTransacaoPageModule() {
    }
    CancelarTransacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancelar_transacao__["a" /* CancelarTransacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancelar_transacao__["a" /* CancelarTransacaoPage */]),
            ],
        })
    ], CancelarTransacaoPageModule);
    return CancelarTransacaoPageModule;
}());

//# sourceMappingURL=cancelar-transacao.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateUtil; });
var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    DateUtil.formatDate = function (date) {
        var dateRoute = date.substring(0, date.indexOf('_'));
        dateRoute = dateRoute.replace('-', '.').replace('-', '.');
        var year = dateRoute.substring(0, 4);
        var month = dateRoute.substring(5, 6);
        var day = dateRoute.substring(7, 8);
        return day + "." + month + "." + year;
    };
    DateUtil.formatHour = function (date) {
        var hourRoute = date.substring(date.indexOf('_') + 1, date.length);
        return hourRoute.replace('-', ':').replace('-', ':').substring(0, 5);
    };
    DateUtil.formatDateWithHour = function (date) {
        return this.formatDate(date) + " " + this.formatHour(date);
    };
    DateUtil.formatDateForID = function (date) {
        var day, month, year, hours, minutes, seconds;
        if (date.getMonth() < 9) {
            month = "0" + (date.getMonth() + 1);
        }
        else {
            month = "" + (date.getMonth() + 1);
        }
        if (date.getDate() < 10) {
            day = "0" + date.getDate();
        }
        else {
            day = date.getDate();
        }
        if (date.getHours() < 10) {
            hours = "0" + date.getHours();
        }
        else {
            hours = date.getHours();
        }
        if (date.getMinutes() < 10) {
            minutes = "0" + date.getMinutes();
        }
        else {
            minutes = date.getMinutes();
        }
        if (date.getSeconds() < 10) {
            seconds = "0" + date.getSeconds();
        }
        else {
            seconds = date.getSeconds();
        }
        year = date.getFullYear();
        return day + "" + month + "" + year + "_" + hours + "" + minutes + "" + seconds;
    };
    DateUtil.convertDate = function (isoDateStr) {
        // 2018-06-22T11:11:54
        var split = isoDateStr.split('T');
        var dateStr = split[0];
        var hourStr = split[1];
        var dateArr = dateStr.split('-');
        var hourArr = hourStr.split(':');
        var dt = new Date();
        dt.setFullYear(parseInt(dateArr[0]));
        dt.setMonth(parseInt(dateArr[1]) - 1);
        dt.setDate(parseInt(dateArr[2]));
        dt.setHours(parseInt(hourArr[0]));
        dt.setMinutes(parseInt(hourArr[1]));
        dt.setSeconds(parseInt(hourArr[2]));
        return dt;
    };
    /**
     * Pega a Data atual e formata YY-MM-DDTHH:MM:SS
     * Usado nas simulações da AMC
     */
    DateUtil.getCurrenteDateFormated = function () {
        var currentDate = new Date().toISOString().slice(0, 10);
        var currentTime = new Date().toLocaleTimeString();
        return currentDate + 'T' + currentTime;
    };
    /**
     * Gera um número único para utilização no ID da Transação
     * https://stackoverflow.com/questions/16176757/generate-unique-id-with-javascript-not-exceeding-an-integer
     */
    DateUtil.uniqueID = function () {
        var timeinmilis = new Date().getTime();
        var unique = timeinmilis & 0xffffffff;
        return unique < 0 ? (unique * -1) : unique;
    };
    return DateUtil;
}());

//# sourceMappingURL=date.util.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelarTransacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_estacionar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_creditos_creditos__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pagarme_pagarme__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_date_util__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CancelarTransacaoPage = /** @class */ (function () {
    function CancelarTransacaoPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl, events, creditoProvider, pagarmeProvider, cadsUserProvider, tempoEstacionadoProvider, comunicacaoCentralProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.creditoProvider = creditoProvider;
        this.pagarmeProvider = pagarmeProvider;
        this.cadsUserProvider = cadsUserProvider;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        this.comunicacaoCentralProvider = comunicacaoCentralProvider;
        this.userProvider = userProvider;
        this.comunicacaoCentralProvider.setDMA_NTP();
        this.init();
    }
    CancelarTransacaoPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID && _this.credito) {
                return true;
            }
        });
    };
    CancelarTransacaoPage.prototype.init = function () {
        var _this = this;
        var estacionarStr = this.navParams.get('credito');
        this.cad = this.navParams.get('cad');
        if (estacionarStr) {
            this.credito = JSON.parse(estacionarStr);
        }
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.userProvider.byId(userID).take(1).subscribe(function (user) { return _this.user = user; });
            }
        });
    };
    CancelarTransacaoPage.prototype.updateData = function () {
        var _this = this;
        if (!this.user) {
            return;
        }
        this.showAlert("Cancelamento", "Tem certeza que deseja prosseguir com a solicitação de cancelamento?", "", function () {
            _this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
                var loading = _this.loadingCtrl.create({ content: 'Aguarde ...' });
                loading.present();
                _this.operacaoLinkL2(_this.credito, data.dateNow, function (dataProcessamento, autenticacao) {
                    _this.efetuarEstorno(_this.credito).then(function (response) {
                        console.log(response);
                        if (response.status == 'refunded') {
                            _this.credito.dadoCancelamento = new __WEBPACK_IMPORTED_MODULE_2__models_estacionar__["a" /* CanceladoModel */]();
                            _this.credito.dadoCancelamento.dataHoraRegistro = dataProcessamento;
                            _this.credito.dadoCancelamento.autenticacao = autenticacao;
                            _this.credito.dadoCancelamento.motivoCancelamento = _this.motivo;
                            _this.credito.status = 'cancelado';
                            _this.creditoProvider.update(_this.credito.id, _this.user.id, _this.credito);
                            var cads = (_this.getValor(_this.credito) / _this.cad.valor_unitario);
                            var horaCancelado = new Date(dataProcessamento).getTime();
                            _this.events.publish('cancelAttempt', { data: horaCancelado, try: true });
                            _this.updateQtdCadsUsados(_this.user.id, cads);
                            loading.dismiss();
                            _this.showAlert('Tudo certo', 'Solicitação realizada com sucesso!', "", function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
                            }, function () { }, 'OK', 'Cancelar');
                        }
                        else {
                            loading.dismiss();
                            _this.showAlert('Erro', 'Ocorreu algum problema durante sua solitação de cancelamento. Tente novamente em alguns instantes', "", function () { }, function () { }, 'OK', 'Cancelar');
                        }
                    });
                });
            });
        }, function () { }, 'Confirmar');
    };
    CancelarTransacaoPage.prototype.showAlert = function (title, msg, type, success, error, btnOk, btnCancelar) {
        if (btnOk === void 0) { btnOk = "Confirmar"; }
        if (btnCancelar === void 0) { btnCancelar = 'Cancelar'; }
        var okBtn = {
            text: btnOk,
            cssClass: 'btn-ok',
            handler: function (data) {
                success();
            }
        };
        var cancelBtn = {
            text: btnCancelar,
            cssClass: 'btn-ok',
            handler: function (data) {
                error();
            }
        };
        var btns = [];
        btns.push(cancelBtn);
        if (btnOk !== '')
            btns.push(okBtn);
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: btns
        });
        alert.present();
    };
    CancelarTransacaoPage.prototype.operacaoLinkL2 = function (credito, dataEnvio, callback) {
        var _this = this;
        if (callback === void 0) { callback = undefined; }
        this.verificaLinkL2(credito, dataEnvio)
            .then(function (response) {
            var dataProcessamentoStr = response['dataProcessamento'];
            var dataProcessamento = __WEBPACK_IMPORTED_MODULE_9__util_date_util__["a" /* DateUtil */].convertDate(dataProcessamentoStr);
            var autenticacao = response['autenticacao'];
            if (response['sucesso'] || response['sucesso'] === 'true') {
                if (callback) {
                    callback(dataProcessamento, autenticacao);
                }
            }
            else {
                _this.showAlert('Atenção', 'Não foi possível cancelar a Operação. Para mais informações entre em contato com nosso canal de atendimento.', '', function () { }, function () { }, '', 'OK');
            }
        }).catch(function (error) {
            _this.showAlert('Indisponível', 'Não foi possível estabelecer uma comunicação com o serviço da AMC. Para mais informações entre em contato com nosso canal de atendimento.', '', function () { }, function () { }, '', 'OK');
        });
    };
    CancelarTransacaoPage.prototype.verificaLinkL2 = function (credito, dataEnvio) {
        if (this.user.profile === 'revendedor') {
        }
        else {
            var cancel_id = __WEBPACK_IMPORTED_MODULE_9__util_date_util__["a" /* DateUtil */].uniqueID();
            console.log(cancel_id);
            this.comunicacaoCentralProvider.consultaTransacaoApp(credito.idTransacao);
            this.comunicacaoCentralProvider.consultaTransacaoApp(cancel_id);
            /* Funciona paramentro idTranscacao id gerado na propria operecao de cancelamento
              idTransacao cancelamento é o paramentro obitdo na hora da compra de CADS pelo usuário
              this.comunicacaoCentralProvider.cancelamentoApp(teste,this.motivo,1784465179,dataEnvio) */
            return this.comunicacaoCentralProvider.cancelamentoApp(cancel_id, this.motivo, credito.idTransacao, dataEnvio);
        }
    };
    CancelarTransacaoPage.prototype.updateQtdCadsUsados = function (userID, cads) {
        var _this = this;
        this.cadsUserProvider.getQtdCadsUsados(this.user.id).take(1).subscribe(function (item) {
            _this.cadsUserProvider.updateQtdCadsUsadas(userID, (cads + item));
        });
    };
    CancelarTransacaoPage.prototype.efetuarEstorno = function (credito) {
        return this.pagarmeProvider.estorno(credito);
    };
    CancelarTransacaoPage.prototype.getValor = function (credito) {
        if (!credito)
            return 0;
        return credito.valorSemDesconto ? credito.valorSemDesconto : credito.valor;
    };
    CancelarTransacaoPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__environments_constants__["a" /* Constants */].HISTORICO_PAGE.name);
    };
    CancelarTransacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cancelar-transacao',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\cancelar-transacao\cancelar-transacao.html"*/'<ion-header no-border>\n\n  <ion-navbar color="header">\n\n\n\n    <ion-title>\n\n      <ion-label>Cancelamento de Transação</ion-label>\n\n    </ion-title>\n\n\n\n    <ion-buttons left>\n\n      <button ion-button (click)="close()">\n\n        <span color="light" class="header-text" showWhen="ios">Fechar</span>\n\n        <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n\n\n  <!-- <ion-grid class="grid-profile">\n\n\n\n    <ion-row class="informacoes-body">\n\n      <ion-item class="informacoes-body-header">\n\n        <ion-label class="title-header-body">CANCELAMENTO DE TRANSAÇÃO</ion-label>\n\n      </ion-item>\n\n      <form class="informacoes-body-list">\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label stacked>Motivo do Cancelamento:</ion-label>\n\n          <ion-textarea placeholder="Digite aqui o motivo do cancelamento..." [(ngModel)]="motivo"\n\n            [ngModelOptions]="{standalone: true}"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item class="btn-row" no-lines>\n\n          <button ion-button (click)="updateData()" class="btn" block>Enviar</button>\n\n        </ion-item>\n\n      </form>\n\n    </ion-row>\n\n\n\n  </ion-grid> -->\n\n\n\n  <ion-grid>\n\n    <ion-row class="row-header">\n\n        <ion-col col-12 class="col-header">\n\n            <ion-label class="title"></ion-label>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <form class="informacoes-body-list">\n\n        <ion-item class="informacoes-body-list-item" no-lines>\n\n          <ion-label><ion-icon name="ios-mail-outline"></ion-icon></ion-label>\n\n          <ion-textarea type="text" mode="ios" rows="4" placeholder="Motivo do Cancelamento" [(ngModel)]="motivo"\n\n            [ngModelOptions]="{standalone: true}" class="blue-component"></ion-textarea>\n\n\n\n          <button class="menu-btn" ion-button clear  type="button" item-right> <ion-icon ios="ios-checkmark-circle-outline" class="icon-blue icon icon-ios ion-ios-checkmark-circle-outline"></ion-icon> </button>\n\n        </ion-item>\n\n        <ion-item class="btn-row" no-lines>\n\n          <button ion-button (click)="updateData()" class="btn" block>Enviar</button>\n\n        </ion-item>\n\n      </form>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\cancelar-transacao\cancelar-transacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_creditos_creditos__["a" /* CreditosProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_pagarme_pagarme__["a" /* PagarmeProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], CancelarTransacaoPage);
    return CancelarTransacaoPage;
}());

//# sourceMappingURL=cancelar-transacao.js.map

/***/ })

});
//# sourceMappingURL=24.js.map