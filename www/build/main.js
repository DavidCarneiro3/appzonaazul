webpackJsonp([36],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadsUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadsUserProvider = /** @class */ (function () {
    function CadsUserProvider(afd) {
        this.afd = afd;
    }
    CadsUserProvider.prototype.save = function (userID, cadID, entity) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS_USER + cadID + '/' + userID).push(entity);
    };
    CadsUserProvider.prototype.update = function (userId, cadID, entity) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS_USER + userId + '/' + cadID).set(entity);
    };
    CadsUserProvider.prototype.getCads = function (userID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS_USER + '/' + userID)
            .snapshotChanges()
            .map(function (snapshot) { return snapshot.map(function (item) { return ({ key: item.payload.key, item: item.payload.val() }); }); });
    };
    CadsUserProvider.prototype.getQtdCadsUsados = function (userID) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS_USER + userID + "/qtdCadsUsados").valueChanges();
    };
    CadsUserProvider.prototype.updateQtdCadsUsadas = function (userID, entity) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS_USER + userID + "/qtdCadsUsados").set(entity);
    };
    CadsUserProvider.prototype.findQtdCads = function (userID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS_USER + '/' + userID)
            .snapshotChanges()
            .map(function (snapshot) { return snapshot.map(function (item) { return ({ key: item.payload.key, item: item.payload.val() }); }); });
    };
    CadsUserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CadsUserProvider);
    return CadsUserProvider;
}());

//# sourceMappingURL=cads-user.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadsProvider = /** @class */ (function () {
    function CadsProvider(afd) {
        this.afd = afd;
    }
    CadsProvider.prototype.find = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CADS)
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, cad: c.payload.val() }); }); });
    };
    CadsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CadsProvider);
    return CadsProvider;
}());

//# sourceMappingURL=cads.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuracao__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdv__ = __webpack_require__(435);


var User = /** @class */ (function () {
    function User(obj) {
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        if (obj && obj.photo && obj.photo !== '') {
            this.photo = obj.photo;
        }
        else {
            this.photo = 'assets/imgs/user.svg';
        }
        this.name = obj && obj.name || '';
        this.email = obj && obj.email || '';
        this.phone = obj && obj.phone || '';
        this.sex = obj && obj.sex || 'Masculino';
        this.dateOfBirth = obj && obj.dateOfBirth || this.getDateOfBirth();
        this.status = obj && obj.status || false;
        this.profile = obj && obj.profile || 'user';
        this.cpf = obj && obj.cpf || '';
        this.configuracao = obj && obj.configuracao || new __WEBPACK_IMPORTED_MODULE_0__configuracao__["a" /* ConfiguracaoModel */]();
        this.pdvReg = obj && obj.pdvReg || new __WEBPACK_IMPORTED_MODULE_1__pdv__["a" /* Pdv */]();
        this.uidPDV = obj && obj.uidPDV || '00000000000';
        this.uidAparelho = obj && obj.uidAparelho || '';
        this.endereco = obj && obj.endereco || '';
        this.cep = obj && obj.cep || '';
        this.contato = obj && obj.contato || '';
        this.cep = obj && obj.cep || '';
        this.percent = obj && obj.percent || 0;
        this.notificationKey = obj && obj.notificationKey || '';
    }
    User.prototype.getDateOfBirth = function () {
        var date = new Date();
        date.setHours(10);
        return date.toISOString();
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(59);

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.VERSAO_LB = "Versão: ";
    Constants.VERSAO = Constants.VERSAO_LB + __WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].version + (__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* environment */].production ? '' : ' - TESTE');
    Constants.PATH_DOCUMENTS_DEFAULT = "/ce/fortaleza/2018/";
    //Constants used to display pages
    Constants.HOME_PAGE = { id: 'home', name: 'HomePage' };
    Constants.INITIAL_PAGE = { id: 'initial', name: 'InitialPage' };
    Constants.PRINCIPAL_PAGE = { id: 'principal', name: 'PrincipalPage' };
    Constants.ESTACIONADOS_MODAL_PAGE = { id: 'estacionados-modal', name: 'EstacionadosModalPage' };
    Constants.LOGIN_PAGE = { id: 'login', name: 'LoginPage' };
    Constants.PAGAMENTOS_PAGE = { id: 'pagamentos', name: 'PagamentosPage' };
    Constants.PAGAMENTOS_FORM_PAGE = { id: 'pagamentos_form', name: 'PagamentosFormPage' };
    Constants.VEICULOS_PAGE = { id: 'veiculos', name: 'VeiculosPage' };
    Constants.VEICULOS_FORM_PAGE = { id: 'veiculos_form', name: 'VeiculosFormPage' };
    Constants.PROFILE_PAGE = { id: 'profile', name: 'ProfilePage' };
    Constants.PROFILE_EDIT_PAGE = { id: 'edit', name: 'ProfileEditPage' };
    Constants.RECOVERY_PASSWORD_PAGE = { id: 'recovery-page', name: 'RecoveryPasswordPage' };
    Constants.SIGNUP_PAGE = { id: 'signup', name: 'SignupPage' };
    Constants.ESTACIONAR_PAGE = { id: 'estacionar', name: 'EstacionarPage' };
    Constants.COMPROVANTE_PAGE = { id: 'comprovante', name: 'ComprovantePage' };
    Constants.TEMPO_RESTANTE_PAGE = { id: 'tempo-restante', name: 'TempoRestantePage' };
    Constants.STREAT_VIEW_PAGE = { id: 'streat-view', name: 'StreatViewPage' };
    Constants.CREDITOS_PAGE = { id: 'creditos', name: 'ComprarCreditosPage' };
    Constants.HISTORICO_PAGE = { id: 'historico', name: 'HistoricoPage' };
    Constants.CONFIGURACOES_PAGE = { id: 'configuracoes', name: 'ConfiguracoesPage' };
    Constants.AJUDA_PAGE = { id: 'ajuda', name: 'AjudaPage' };
    Constants.COMPARTILHAR_PAGE = { id: 'compartilhar', name: 'CompartilharPage' };
    Constants.REPORTAR_PROBLEMA_PAGE = { id: 'reportar-problema', name: 'ReportarProblemaPage' };
    Constants.PDV_CADASTRO_PAGE = { id: 'pdv-cadastro', name: 'PdvCadastroPage' };
    Constants.PDV_EMPRESA_PAGE = { id: 'pdv-empresa', name: 'PdvEmpresaPage' };
    Constants.CREDITOS_PAGAMENTO_PAGE = { id: 'creditos-pagamento', name: 'ComprarCreditosPagamentoPage' };
    Constants.ROOT_PAGE = { id: 'root', name: 'RootPage' };
    Constants.TERMS_PAGE = { id: 'terms', name: 'TermsPage' };
    Constants.AREAS_MODAL_PAGE = { id: 'areas-modal', name: 'AreasModalPage' };
    Constants.SETORES_MODAL_PAGE = { id: 'setores-modal', name: 'SetoresModalPage' };
    Constants.VEICULOS_MODAL_PAGE = { id: 'veiculos-modal', name: 'VeiculosModalPage' };
    Constants.VEICULO_ESTACIONADO_PAGE = { id: 'veiculo-estacionado', name: 'VeiculoEstacionadoPage' };
    Constants.CANCELAR_TRANSACAO_PAGE = { id: 'cancelar-transacao', name: 'CancelarTransacaoPage' };
    Constants.PERMISSIONS_MODAL_PAGE = { id: 'permissions-screen', name: 'PermissionsModalPage' };
    Constants.FILTER_MODAL_PAGE = { id: 'filtro-modal', name: 'FiltroModalPage' };
    Constants.FILTER_PAGAMENTO_PAGE = { id: 'filtro-pagamento', name: 'FiltroPagamentoPage' };
    Constants.CONFIRMA_CPF_PAGE = { id: 'confirmar-cpf-modal', name: 'ConfirmarCpfModalPage' };
    // PROVIDERS
    Constants.PATH_DOCUMENTS_USER = '/users' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_PAGAMENTOS = '/pagamentos' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_VEICULOS = '/veiculos' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_LOGS = '/logs' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_SETORES = '/setores' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_AREAS = '/areas' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_ESTACIONAR = '/estacionar' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_CREDITOS = '/creditos' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_CADS = '/cads' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_CADS_USER = '/cads_user' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_TERMS = '/info' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_CONFIG = '/config' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_RELATOS = '/relatos' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_TIPO_VEICULO = Constants.PATH_DOCUMENTS_CONFIG + 'tipo_veiculo';
    Constants.PATH_DOCUMENTS_HOLIDAYS = '/holidays' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_CANCELAR = 'cancelar' + Constants.PATH_DOCUMENTS_DEFAULT;
    Constants.PATH_DOCUMENTS_ANGENDAMENTOS = 'agendamentos' + Constants.PATH_DOCUMENTS_DEFAULT;
    //COLORS POLYLINE SETOR
    Constants.SETOR_COLOR_RED = '#FF0000';
    Constants.SETOR_COLOR_GREEN = '#00C160';
    //TYPES USER CONFIGURATIONS
    Constants.ATIVATION_EXPIRATION = 'ATIVACAO_EXPIRACAO';
    Constants.ALERT_FIVE_MINUTES = 'ALERTA_5_MINUTOS';
    Constants.ALERT_TEN_MINUTES = 'ALERTA_10_MINUTOS';
    Constants.ALERT_FIVETEEN_MINUTES = 'ALERTA_15_MINUTOS';
    Constants.CieloSandboxCodes = {
        "4": "Operação realizada com sucesso",
        "6": "Operação realizada com sucesso",
        "05": "Não Autorizada",
        "57": "Cartão Expirado",
        "78": "Cartão Bloqueado",
        "99": "Time Out",
        "77": "Cartão Cancelado",
        "70": "Problemas com o Cartão de Crédito"
    };
    Constants.CieloProductionCodes = {
        // return code -> return message
        "00": "Transação autorizada com sucesso.",
        "000": "Transação autorizada com sucesso.",
        "01": "Transação não autorizada. Entre em contato com seu banco emissor.",
        "02": "Transação não autorizada. Entre em contato com seu banco emissor.",
        "03": "Não foi possível processar a transação. Entre com contato com a Loja Virtual.",
        "04": "Transação não autorizada. Entre em contato com seu banco emissor.",
        "05": "Transação não autorizada. Entre em contato com seu banco emissor.",
        "06": "Não foi possível processar a transação. Entre em contato com seu banco emissor.",
        "07": "Transação não autorizada. Entre em contato com seu banco emissor",
        "08": "Transação não autorizada. Dados incorretos. Reveja os dados e informe novamente.",
        "09": "Transação cancelada parcialmente com sucesso",
        "11": "Transação autorizada com sucesso.",
        "12": "Não foi possível processar a transação. reveja os dados informados e tente novamente. Se o erro persistir, entre em contato com seu banco emissor.",
        "13": "Transação não autorizada. Valor inválido. Refazer a transação confirmando os dados informados. Persistindo o erro, entrar em contato com a loja virtual.",
        "14": "Não foi possível processar a transação. reveja os dados informados e tente novamente. Se o erro persistir, entre em contato com seu banco emissor.",
        "15": "Não foi possível processar a transação. Entre em contato com seu banco emissor.",
        "19": "Não foi possível processar a transação. Refaça a transação ou tente novamente mais tarde. Se o erro persistir entre em contato com a loja virtual.",
        "21": "Não foi possível processar o cancelamento. Tente novamente mais tarde. Persistindo o erro, entrar em contato com a loja virtual.",
        "22": "Não foi possível processar a transação. Valor inválido. Refazer a transação confirmando os dados informados. Persistindo o erro, entrar em contato com a loja virtual.",
        "23": "Não foi possível processar a transação. Valor da prestação inválido. Refazer a transação confirmando os dados informados. Persistindo o erro, entrar em contato com a loja virtual.",
        "24": "Não foi possível processar a transação. Quantidade de parcelas inválido. Refazer a transação confirmando os dados informados. Persistindo o erro, entrar em contato com a loja virtual.",
        "25": "Não foi possível processar a transação. reveja os dados informados e tente novamente. Persistindo o erro, entrar em contato com a loja virtual.",
        "28": "Não foi possível processar a transação. Entre com contato com a Loja Virtual.",
        "30": "Não foi possível processar a transação. Reveja os dados e tente novamente. Se o erro persistir, entre em contato com a loja"
    };
    Constants.FIREBASE_ERRORS = {
        'auth/email-already-in-use': 'Email já cadastrado',
        'auth/weak-password': 'Senha deve ter no mínimo 6 caracteres',
        'auth/wrong-password': 'E-mail e/ou senha inválido',
        'auth/user-not-found': 'E-mail não cadastrado',
        'auth/requires-recent-login': 'Esta operação querer um login recente! Faça o login e tente novamente.',
        'auth/invalid-email': 'E-mail inválido!',
        '': 'Algo deu Errado!Verifique a conexação e tente novamente!'
    };
    return Constants;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalProvider = /** @class */ (function () {
    function ModalProvider() {
        this.active = false;
    }
    ModalProvider.prototype.setActive = function () {
        this.active = true;
    };
    ModalProvider.prototype.desactivate = function () {
        this.active = false;
    };
    ModalProvider.prototype.isActive = function () {
        return this.active;
    };
    ModalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalProvider);
    return ModalProvider;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(afa, userProvider) {
        this.afa = afa;
        this.userProvider = userProvider;
    }
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.user != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.createUserAuth = function (email, password, user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afa.auth.createUserWithEmailAndPassword(email, password)
                .then(function (authState) {
                user.id = authState.uid;
                user.status = true;
                user.profile = 'user';
                delete user.password;
                _this.userProvider.saveUser(new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](user));
                resolve(user);
            }).catch(function (error) { return reject(error); });
        });
    };
    AuthProvider.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afa.auth.signInWithEmailAndPassword(email, password)
                .then(function (user) {
                if (user != null && user.uid != null) {
                    _this.afa.authState.subscribe(function (user) { return _this.user = user; });
                    _this.userProvider.saveUserLocal(user.uid);
                    _this.userProvider.byId(user.uid).take(1).subscribe(function (user) {
                        (user) ? resolve({ logged: user }) : resolve({ logged: false });
                    });
                }
            })
                .catch(function (err) { return reject(err); });
        });
    };
    AuthProvider.prototype.logout = function () {
        return this.afa.auth.signOut();
    };
    AuthProvider.prototype.sendPasswordResetEmail = function (email) {
        return this.afa.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.getId = function () {
        return this.user && this.user.uid;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_estacionar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// FIREBASE

// MODELS

// CONSTANTS

var EstacionarProvider = /** @class */ (function () {
    function EstacionarProvider(afd) {
        this.afd = afd;
    }
    EstacionarProvider.prototype.save = function (estacionar, userID) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID + "/" + estacionar.id)
            .update(estacionar)
            .then(function (result) {
            return true;
        }).catch(function (result) {
            return false;
        });
    };
    EstacionarProvider.prototype.update = function (estacionarId, userID, estacionar) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID + "/" + estacionarId)
            .update(estacionar);
    };
    EstacionarProvider.prototype.findByUser = function (userID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID, function (ref) { return ref.orderByChild("status").equalTo(true); })
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionar: c.payload.val() }); }); });
    };
    EstacionarProvider.prototype.find = function (userID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID)
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionar: (c.payload.val()) }); }); })
            .map(function (changes) { return changes.reverse(); });
    };
    EstacionarProvider.prototype.findByAll = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR)
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionamentos: c.payload.val() }); }); });
    };
    EstacionarProvider.prototype.countAll = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR)
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionamentos: c.payload.val() }); }); })
            .map(function (changes) {
            var cont = 1;
            changes.forEach(function (_item) {
                cont += Object.keys(_item.estacionamentos).length;
            });
            return cont;
        });
    };
    EstacionarProvider.prototype.countCadsById = function (id) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + id)
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionamentos: c.payload.val() }); }); })
            .map(function (changes) {
            var cont = 0;
            changes.forEach(function (_item) {
                cont += _item.estacionamentos.comprovante.cads;
            });
            return cont;
        });
    };
    EstacionarProvider.prototype.findByAreaAndSetor = function (userID, areaID, setorID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID, function (ref) { return ref.orderByChild("area_id").equalTo(areaID) && ref.orderByChild("setor_id").equalTo(setorID); })
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionar: new __WEBPACK_IMPORTED_MODULE_2__models_estacionar__["b" /* EstacionarModel */](c.payload.val()) }); }); });
    };
    EstacionarProvider.prototype.findByVeiculo = function (userID, veiculoID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID, function (ref) { return ref.orderByChild("veiculo_id").equalTo(veiculoID); })
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, estacionar: new __WEBPACK_IMPORTED_MODULE_2__models_estacionar__["b" /* EstacionarModel */](c.payload.val()) }); }); });
    };
    EstacionarProvider.prototype.isVeiculoEstacionado = function (userID, veiculoID, imei, profile) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ESTACIONAR + userID, 
        // ref => ref.orderByChild("veiculo_id").equalTo(veiculoID) && ref.orderByChild("status").equalTo(true))
        function (ref) { return ref.orderByChild("status").equalTo(true); })
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, podeEstacionar: 'ok', estacionar: new __WEBPACK_IMPORTED_MODULE_2__models_estacionar__["b" /* EstacionarModel */](c.payload.val()) }); }); })
            .map(function (changes) {
            var cont = 0;
            var cadsAtivos = 0;
            changes.forEach(function (_item, _index) {
                cadsAtivos += _item.estacionar.qtd; // incrementa a quantidade de cads ativos , de modo a permitir no máximo 3 cads por aparelho
                if (_item.estacionar.uidAparelho == imei && _item.estacionar.veiculo_id === veiculoID) {
                    cont++;
                }
            });
            // console.log('******* CONTAD ', cont);
            if (cadsAtivos >= 3 && profile !== 'revendedor') {
                return { podeEstacionar: undefined, lista: changes };
            }
            // if (cont >= 3 && profile !== 'revendedor') {
            // console.log('******* MAIOR QUE 3 ', cont);
            // throw new Error('Você só pode ter no máximo 3 placas com CAD ativado por aparelho.');
            // changes['podeEstacionar'] = 'nao';
            // }
            return {
                podeEstacionar: 'sim', lista: changes.filter(function (changes) { return changes.estacionar.veiculo_id == veiculoID; }), cadsAtivos: cadsAtivos
            };
        });
    };
    EstacionarProvider.prototype.atualizaStatusPeloTempoExpirado = function (userID, veiculoID, callback) {
        var _this = this;
        this.findByVeiculo(userID, veiculoID).take(1).subscribe(function (value) {
            value.map(function (value) {
                if (value.estacionar != null) {
                    // value.estacionar.status = false;
                    // this.save(value.estacionar, userID);
                    _this.update(value.estacionar.id, userID, { status: false });
                    callback();
                    // this.status = false;
                    // this.setorProvider.byId(value.estacionar.area_id, value.estacionar.setor_id).take(1).subscribe((item: SetorModel) => {
                    //     //item.vagas_disponiveis = item.vagas_disponiveis + 1;
                    //     this.setorProvider.update(item, value.estacionar.area_id);
                    // });
                }
            });
        });
    };
    /**
     * Agenda um estacionamento para o próximo horario que o setor estiver disponivel
     * @param agendamento objecto do tipo AgendarModel contento as informações do estacionamento a ser agendado
     * @returns string informando o satus do agendamento
     */
    EstacionarProvider.prototype.agendarEstacionamento = function (agendamento) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_ANGENDAMENTOS + agendamento.id)
            .update(agendamento)
            .then(function (result) {
            console.log("Agendamento bem sucedido");
            return 'Agendamento realizado com sucesso!';
        })
            .catch(function (error) {
            console.log("Algo de errado ocorreu , " + error);
            return 'Algo deu errado , por favor tente novamente!';
        });
    };
    EstacionarProvider.qtdNormal = 0;
    EstacionarProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EstacionarProvider);
    return EstacionarProvider;
}());

//# sourceMappingURL=estacionar.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunicacaoCentralProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_md5_util__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeoutWith__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeoutWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeoutWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_logger_firebase_logger__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ComunicacaoCentralProvider = /** @class */ (function () {
    // private COD_ACESSO: string = this.gerarCodigoAcesso(this.COD_CLIENTE);
    // private COD_ACESSO_PDV: string = this.gerarCodigoAcesso(this.COD_CLIENTE_PDV);
    function ComunicacaoCentralProvider(http, platform, logger, firebaseLoggerProvider, tempoEstacionadoProvider) {
        this.http = http;
        this.platform = platform;
        this.logger = logger;
        this.firebaseLoggerProvider = firebaseLoggerProvider;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        /**
         * Tutorial HTTP Client Angular
         * https://alligator.io/angular/httpclient-intro/
         */
        this.URL_CENTRAL = "https://wszonaazuldsv.centralamc.com.br/transacao";
        this.COD_CLIENTE = 75;
        this.COD_CLIENTE_PDV = 76;
        this.CNPJ_CLIENTE = '05591991000148';
        this.DMA = this.getDataAtual();
        this.TOKEN = 'af777ebfab40209d52e5500fd5582214';
        var isProd = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production ? true : false;
        // const isProd = false;
        if (isProd && !__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            this.URL_CENTRAL = "https://wszonaazuldsv.centralamc.com.br/transacao";
            // this.URL_CENTRAL = `https://wszonaazulprd2.centralamc.com.br/transacao`;
            this.COD_CLIENTE = 82;
            this.COD_CLIENTE_PDV = 83;
        }
        else {
            this.URL_CENTRAL = "https://wszonaazuldsv.centralamc.com.br/transacao";
            this.COD_CLIENTE = 106;
            this.COD_CLIENTE_PDV = 107;
        }
        this.logger.info('AMBIENTE: ' + (isProd ? '** PRODUÇÃO **' : '** DESENVOLVIMENTO **'));
        this.logger.info('URL_CENTRAL: ' + this.URL_CENTRAL);
        this.logger.info('COD_CLIENTE: ' + this.COD_CLIENTE);
        this.logger.info('COD_CLIENTE_PDV: ' + this.COD_CLIENTE_PDV);
        this.logger.info('CNPJ_CLIENTE: ' + this.CNPJ_CLIENTE);
        this.logger.info('TOKEN: ' + this.TOKEN);
        this.logger.info('DMA: ' + this.DMA);
    }
    ComunicacaoCentralProvider_1 = ComunicacaoCentralProvider;
    ComunicacaoCentralProvider.prototype.setDMA = function (date) {
        this.DMA = this.getDataAtual(date);
        this.logger.info('DMA NTP: ' + this.DMA);
    };
    ComunicacaoCentralProvider.prototype.setDMA_NTP = function () {
        var _this = this;
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
            _this.setDMA(data.dateNow);
        });
    };
    // --------------------------------------------------------------------------------
    // -- APP
    /**
     * Desbloqueio - APP
     *
     * @param idTransacaoDistribuidor
     * @param quantidadeCartoes
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     *   <transacao>
     *       <codigoDistribuidor>75</codigoDistribuidor>
     *       <dataEnvio>2018-07-18T11:28:00</dataEnvio>
     *       <tipo>1</tipo>
     *       <idTransacaoDistribuidor>12345</idTransacaoDistribuidor>
     *       <cnpj>05591991000148</cnpj>
     *       <quantidadeCartoes>1</quantidadeCartoes>
     *   </transacao>
     *
     *   <!-- RESPOSTA -->
     *   <?xml version="1.0"?>
     *   <Resultado>
     *       <dataResultado>2018-07-18T11:19:08</dataResultado>
     *       <codigoDistribuidor>75</codigoDistribuidor>
     *       <transacaoXml>75, 2018-07-18T11:28:00, 1, 12345, 05591991000148, 1</transacaoXml>
     *       <dataProcessamento>2018-07-18T11:19:08</dataProcessamento>
     *       <autenticacao>75969070547632873</autenticacao>
     *       <sucesso>true</sucesso>
     *       <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
     *   </Resultado>
     */
    ComunicacaoCentralProvider.prototype.desbloqueioApp = function (quantidadeCartoes, idTransacaoDistribuidor, dataEnvio) {
        var dateStr = this.getDateComunicacao(dataEnvio);
        // const idTransacaoDistribuidor = this.gerarIdTransacao();
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <dataEnvio>" + dateStr + "</dataEnvio>\n      <tipo>1</tipo>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidor + "</idTransacaoDistribuidor>\n      <cnpj>" + this.CNPJ_CLIENTE + "</cnpj>\n      <quantidadeCartoes>" + quantidadeCartoes + "</quantidadeCartoes>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n        <Resultado>\n            <dataResultado>" + dateStr + "</dataResultado>\n            <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n            <transacaoXml>75, 2018-07-18T11:28:00, 1, 12345, 05591991000148, 1</transacaoXml>\n            <dataProcessamento>" + dateStr + "</dataProcessamento>\n            <autenticacao>75969070547632873</autenticacao>\n            <sucesso>true</sucesso>\n            <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>\n        </Resultado>\n      ";
            var respostaJson_1 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            console.log('Resposta Json linha 140', respostaJson_1);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_1); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody);
        }
    };
    /**
     * Desbloqueio com Ativação - APP
     *
     * @param idTransacaoDistribuidor
     * @param imei
     * @param area
     * @param setor
     * @param face
     * @param latitude
     * @param longitude
     * @param placa
     * @param tipoVeiculo
     * @param tempoCartao
     * @param quantidadeCartoes
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *  <codigoDistribuidor>75</codigoDistribuidor>
     *  <dataEnvio>2018-07-18T11:28:00</dataEnvio>
     *  <tipo>3</tipo>
     *  <idTransacaoDistribuidor>260</idTransacaoDistribuidor>
     *  <cnpj>05591991000148</cnpj>
     *  <imei>123456789012345</imei>
     *  <area>01</area>
     *  <setor>01</setor>
     *  <face>A</face>
     *  <latitude>-23.71624</latitude>
     *  <longitude>-46.778914</longitude>
     *  <placa>VAC9876</placa>
     *  <tipoVeiculo>1</tipoVeiculo>
     *  <tempoCartao>30</tempoCartao>
     *  <quantidadeCartoes>1</quantidadeCartoes>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <Resultado>
     *  <dataResultado>2018-07-18T11:20:42</dataResultado>
     *  <codigoDistribuidor>75</codigoDistribuidor>
     *  <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
     *  <dataProcessamento>2018-07-18T11:20:42</dataProcessamento>
     *  <autenticacao>75380275967530906</autenticacao>
     *  <sucesso>true</sucesso>
     *  <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
     * </Resultado>
     */
    ComunicacaoCentralProvider.prototype.desbloqueioAtivacaoApp = function (imei, area, setor, face, latitude, longitude, placa, tipoVeiculo, tempoCartao, quantidadeCartoes, idTransacaoDistribuidor, dataEnvio) {
        // const idTransacaoDistribuidor = this.gerarIdTransacao();
        var dateStr = this.getDateComunicacao(dataEnvio);
        var imeiTitle = (imei.indexOf('-') > 0) ? 'udid' : 'imei';
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <dataEnvio>" + dateStr + "</dataEnvio>\n      <tipo>3</tipo>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidor + "</idTransacaoDistribuidor>\n      <cnpj>" + this.CNPJ_CLIENTE + "</cnpj>\n      <" + imeiTitle + ">" + imei + "</" + imeiTitle + ">\n      <area>" + area + "</area>\n      <setor>" + setor + "</setor>\n      <face>" + face + "</face>\n      <latitude>" + latitude + "</latitude>\n      <longitude>" + longitude + "</longitude>\n      <placa>" + placa + "</placa>\n      <tipoVeiculo>" + tipoVeiculo + "</tipoVeiculo>\n      <tempoCartao>" + tempoCartao + "</tempoCartao>\n      <quantidadeCartoes>" + quantidadeCartoes + "</quantidadeCartoes>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <Resultado>\n        <dataResultado>" + dateStr + "</dataResultado>\n        <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n        <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>\n        <dataProcessamento>" + dateStr + "</dataProcessamento>\n        <autenticacao>75380275967530906</autenticacao>\n        <sucesso>true</sucesso>\n        <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>\n       </Resultado>\n      ";
            var respostaJson_2 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_2); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody);
        }
    };
    /**
     * Ativação - APP
     *
     * @param idTransacaoDistribuidor
     * @param quantidadeCartoes
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *  <codigoDistribuidor>75</codigoDistribuidor>
     *  <dataEnvio>2018-07-18T11:28:00</dataEnvio>
     *  <tipo>2</tipo>
     *  <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
     *  <cnpj>05591991000148</cnpj>
     *  <imei>123456789012345</imei>
     *  <area>01</area>
     *  <setor>01</setor>
     *  <face>A</face>
     *  <latitude>-23.71624</latitude>
     *  <longitude>-46.778914</longitude>
     *  <placa>VAC9876</placa>
     *  <tipoVeiculo>1</tipoVeiculo>
     *  <tempoCartao>60</tempoCartao>
     *  <quantidadeCartoes>1</quantidadeCartoes>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <Resultado>
     *  <dataResultado>2018-07-18T11:20:42</dataResultado>
     *  <codigoDistribuidor>75</codigoDistribuidor>
     *  <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
     *  <dataProcessamento>2018-07-18T11:20:42</dataProcessamento>
     *  <autenticacao>75380275967530906</autenticacao>
     *  <sucesso>true</sucesso>
     *  <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
     * </Resultado>
     */
    ComunicacaoCentralProvider.prototype.ativacaoApp = function (imei, area, setor, face, latitude, longitude, placa, tipoVeiculo, tempoCartao, quantidadeCartoes, idTransacaoDistribuidor, dataEnvio) {
        // const idTransacaoDistribuidor = this.gerarIdTransacao();
        var dateStr = this.getDateComunicacao(dataEnvio);
        var imeiTitle = (imei.indexOf('-') > 0) ? 'udid' : 'imei';
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <dataEnvio>" + dateStr + "</dataEnvio>\n      <tipo>2</tipo>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidor + "</idTransacaoDistribuidor>\n      <cnpj>" + this.CNPJ_CLIENTE + "</cnpj>\n      <" + imeiTitle + ">" + imei + "</" + imeiTitle + ">\n      <area>" + area + "</area>\n      <setor>" + setor + "</setor>\n      <face>" + face + "</face>\n      <latitude>" + latitude + "</latitude>\n      <longitude>" + longitude + "</longitude>\n      <placa>" + placa + "</placa>\n      <tipoVeiculo>" + tipoVeiculo + "</tipoVeiculo>\n      <tempoCartao>" + tempoCartao + "</tempoCartao>\n      <quantidadeCartoes>" + quantidadeCartoes + "</quantidadeCartoes>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <Resultado>\n        <dataResultado>" + dateStr + "</dataResultado>\n        <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n        <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>\n        <dataProcessamento>" + dateStr + "</dataProcessamento>\n        <autenticacao>75380275967530906</autenticacao>\n        <sucesso>true</sucesso>\n        <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>\n      </Resultado>\n      ";
            var respostaJson_3 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            console.log('Resposta Json linha 320', respostaJson_3);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_3); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody);
        }
    };
    /**
     * Cancelamento - APP
     *
     * @param idTransacaoDistribuidor
     * @param motivoCancelamento
     * @param idTransacaoDistribuidorCancelamento
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <dataEnvio>2018-07-18T11:28:00</dataEnvio>
     *     <tipo>4</tipo>
     *     <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
     *     <motivoCancelamento>Falha de comunicacao</motivoCancelamento>
     *     <idTransacaoDistribuidorCancelamento>275</idTransacaoDistribuidorCancelamento>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <Resultado>
     *     <dataResultado>2018-07-18T11:22:28</dataResultado>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
     *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
     *     <autenticacao>75160633052652701</autenticacao>
     *     <sucesso>false</sucesso>
     *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>
     * </Resultado>
     */
    ComunicacaoCentralProvider.prototype.cancelamentoApp = function (idTransacaoDistribuidor, motivoCancelamento, idTransacaoDistribuidorCancelamento, dataEnvio) {
        var dateStr = this.getDateComunicacao(dataEnvio);
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <dataEnvio>" + dateStr + "</dataEnvio>\n      <tipo>4</tipo>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidorCancelamento + "</idTransacaoDistribuidor>\n      <motivoCancelamento>" + motivoCancelamento + "</motivoCancelamento>\n      <idTransacaoDistribuidorCancelamento>" + idTransacaoDistribuidor + "</idTransacaoDistribuidorCancelamento>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <Resultado>\n        <dataResultado>" + dateStr + "</dataResultado>\n        <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n        <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>\n        <dataProcessamento>" + dateStr + "</dataProcessamento>\n        <autenticacao>75160633052652701</autenticacao>\n        <sucesso>true</sucesso>\n        <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>\n      </Resultado>\n      ";
            var respostaJson_4 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_4); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody);
        }
    };
    /**
     * Consulta Transação - APP
     *
     * @param idTransacaoDistribuidor
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <ResultadoConsultaTransacao>
     *     <dataResultado>2018-07-18T11:22:28</dataResultado>
     *     <transacaoXml>75, 313</transacaoXml>
     *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
     *     <autenticacao>75160633052652701</autenticacao>
     *     <estado>1</estado>
     *     <mensagem>Dados retornados com sucesso!</mensagem>
     * </ResultadoConsultaTransacao>
     *
     * <!-- RESPOSTA DE ERRO -->
     * <?xml version="1.0"?>
     * <ResultadoConsultaTransacao>
     *     <dataResultado>2018-07-18T11:22:28</dataResultado>
     *     <transacaoXml>75, 232</transacaoXml>
     *     <mensagem>TRANSACAO INEXISTENTE</mensagem>
     * </ResultadoConsultaTransacao>
     */
    ComunicacaoCentralProvider.prototype.consultaTransacaoApp = function (idTransacaoDistribuidor) {
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidor + "</idTransacaoDistribuidor>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <ResultadoConsultaTransacao>\n        <dataResultado>" + this.getDateComunicacao() + "</dataResultado>\n        <transacaoXml>75, 313</transacaoXml>\n        <dataProcessamento>" + this.getDateComunicacao() + "</dataProcessamento>\n        <autenticacao>75160633052652701</autenticacao>\n        <estado>1</estado>\n        <mensagem>Dados retornados com sucesso!</mensagem>\n      </ResultadoConsultaTransacao>\n      ";
            var respostaJson_5 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_5); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody);
        }
    };
    /**
     * Consulta Saldo - APP
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <ResultadoConsultaTransacao>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <data>2018-07-18T11:25:20</data>
     *     <saldoBloqueado>4998</saldoBloqueado>
     *     <saldoDesbloqueado/>
     *     <totalAtivado>2</totalAtivado>
     *     <mensagem>Sucesso ao retornar os dados!</mensagem>
     * </ResultadoConsultaTransacao>
     */
    ComunicacaoCentralProvider.prototype.consultaSaldoApp = function () {
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <ResultadoConsultaTransacao>\n        <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n        <data>" + this.getDateComunicacao() + "</data>\n        <saldoBloqueado>4998</saldoBloqueado>\n        <saldoDesbloqueado/>\n        <totalAtivado>2</totalAtivado>\n        <mensagem>Sucesso ao retornar os dados!</mensagem>\n      </ResultadoConsultaTransacao>\n      ";
            var respostaJson_6 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_6); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody);
        }
    };
    // --------------------------------------------------------------------------------
    // -- PDV
    /**
     * Desbloqueio com Ativação - PDV
     *
     * @param idTransacaoDistribuidor
     * @param imei
     * @param area
     * @param setor
     * @param face
     * @param latitude
     * @param longitude
     * @param placa
     * @param tempoCartao
     * @param quantidadeCartoes
     * @param codigoPDV
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *  <codigoDistribuidor>75</codigoDistribuidor>
     *  <codigoPDV>22</codigoPDV>
     *  <dataEnvio>2018-07-18T11:28:00</dataEnvio>
     *  <tipo>3</tipo>
     *  <idTransacaoDistribuidor>260</idTransacaoDistribuidor>
     *  <cnpj>05591991000148</cnpj>
     *  <imei>123456789012345</imei>
     *  <area>01</area>
     *  <setor>01</setor>
     *  <face>A</face>
     *  <latitude>-23.71624</latitude>
     *  <longitude>-46.778914</longitude>
     *  <placa>VAC9876</placa>
     *  <tempoCartao>30</tempoCartao>
     *  <quantidadeCartoes>1</quantidadeCartoes>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <ResultadoPDV>
     *  <codigoDistribuidor>75</codigoDistribuidor>
     *  <dataResultado>2018-07-18T11:20:42</dataResultado>
     *  <codigoPDV>22</codigoPDV>
     *  <idTransacaoDistribuidor>309</idTransacaoDistribuidor>
     *  <transacaoXml>75, 2018-07-18T11:28:00, 1, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 1, 30, 1</transacaoXml>
     *  <dataProcessamento>2018-07-18T11:20:42</dataProcessamento>
     *  <autenticacao>75380275967530906</autenticacao>
     *  <sucesso>true</sucesso>
     *  <mensagem>Sucesso ao fazer transa&#xE7;&#xE3;o!</mensagem>
     * </ResultadoPDV>
     *
     * <!-- RESPOSTA ERRO -->
     * <?xml version="1.0"?>
     * <ResultadoPDV>
     *     <dataResultado>2018-07-18T11:26:09</dataResultado>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <codigoPDV>22</codigoPDV>
     *     <idTransacaoDistribuidor>260</idTransacaoDistribuidor>
     *     <transacaoXml>75, 20, 2018-07-18T07:00:00, 8, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 30, 1</transacaoXml>
     *     <dataProcessamento>2018-07-18T11:26:09</dataProcessamento>
     *     <autenticacao>75105797701235860</autenticacao>
     *     <sucesso>false</sucesso>
     *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de desbloqueio com ativa&#xE7;&#xE3;o: ponto de venda inv&#xE1;lido!</mensagem>
     * </ResultadoPDV>
     */
    ComunicacaoCentralProvider.prototype.desbloqueioAtivacaoPDV = function (imei, area, setor, face, latitude, longitude, placa, tipoVeiculo, tempoCartao, quantidadeCartoes, codigoPDV, idTransacaoDistribuidor, dataEnvio) {
        // const idTransacaoDistribuidor = this.gerarIdTransacao();
        var dateStr = this.getDateComunicacao(dataEnvio);
        var imeiTitle = (imei.indexOf('-') > 0) ? 'udid' : 'imei';
        var auth = btoa(this.COD_CLIENTE_PDV + ":" + this.gerarCodigoAcesso(this.COD_CLIENTE_PDV));
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <codigoPDV>" + codigoPDV + "</codigoPDV>\n      <dataEnvio>" + dateStr + "</dataEnvio>\n      <tipo>3</tipo>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidor + "</idTransacaoDistribuidor>\n      <cnpj>" + this.CNPJ_CLIENTE + "</cnpj>\n      <" + imeiTitle + ">" + imei + "</" + imeiTitle + ">\n      <area>" + area + "</area>\n      <setor>" + setor + "</setor>\n      <face>" + face + "</face>\n      <latitude>" + latitude + "</latitude>\n      <longitude>" + longitude + "</longitude>\n      <placa>" + placa + "</placa>\n      <tempoCartao>" + tempoCartao + "</tempoCartao>\n      <quantidadeCartoes>" + quantidadeCartoes + "</quantidadeCartoes>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <ResultadoPDV>\n           <dataResultado>" + dateStr + "</dataResultado>\n           <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n           <codigoPDV>" + codigoPDV + "</codigoPDV>\n           <idTransacaoDistribuidor>" + idTransacaoDistribuidor + "</idTransacaoDistribuidor>\n           <transacaoXml>75, 20, 2018-07-18T07:00:00, 8, 260, 05591991000148, 123456789012345, 01, 01, A, -23.71624, -46.778914, VAC9876, 30, 1</transacaoXml>\n           <dataProcessamento>" + dateStr + "</dataProcessamento>\n           <autenticacao>75105797701235860</autenticacao>\n           <sucesso>true</sucesso>\n           <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de desbloqueio com ativa&#xE7;&#xE3;o: ponto de venda inv&#xE1;lido!</mensagem>\n      </ResultadoPDV>\n      ";
            var respostaJson_7 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_7); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody, auth);
        }
    };
    /**
     * Cancelamento - PDV
     *
     * @param idTransacaoDistribuidor
     * @param motivoCancelamento
     * @param idTransacaoDistribuidorCancelamento
     *
     * DOCUMENTACAO
     *
     * <!-- PARAMETROS -->
     * <transacao>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <codigoPDV>22</codigoPDV>
     *     <dataEnvio>2018-07-18T11:28:00</dataEnvio>
     *     <tipo>4</tipo>
     *     <idTransacaoDistribuidor>313</idTransacaoDistribuidor>
     *     <motivoCancelamento>Falha de comunicacao</motivoCancelamento>
     *     <idTransacaoDistribuidorCancelamento>275</idTransacaoDistribuidorCancelamento>
     * </transacao>
     *
     * <!-- RESPOSTA -->
     * <?xml version="1.0"?>
     * <Resultado>
     *     <dataResultado>2018-07-18T11:22:28</dataResultado>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
     *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
     *     <autenticacao>75160633052652701</autenticacao>
     *     <sucesso>false</sucesso>
     *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>
     * </Resultado>
     *
     * <!-- RESPOSTA ERRO -->
     * <?xml version="1.0"?>
     * <Resultado>
     *     <dataResultado>2018-07-18T11:22:28</dataResultado>
     *     <codigoDistribuidor>75</codigoDistribuidor>
     *     <codigoPDV>20</codigoPDV>
     *     <idTransacaoDistribuidor>276</idTransacaoDistribuidor>
     *     <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>
     *     <dataProcessamento>2018-07-18T11:22:28</dataProcessamento>
     *     <autenticacao>75160633052652701</autenticacao>
     *     <sucesso>false</sucesso>
     *     <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de desbloqueio: ponto de venda inv&#xE1;lido!</mensagem>
     * </Resultado>
     */
    ComunicacaoCentralProvider.prototype.cancelamentoPDV = function (idTransacaoDistribuidor, motivoCancelamento, idTransacaoDistribuidorCancelamento, codigoPDV, dataEnvio) {
        var dateStr = this.getDateComunicacao(dataEnvio);
        var auth = btoa(this.COD_CLIENTE_PDV + ":" + this.gerarCodigoAcesso(this.COD_CLIENTE_PDV));
        var requestBody = "\n    <transacao>\n      <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n      <codigoPDV>" + codigoPDV + "</codigoPDV>\n      <dataEnvio>" + dateStr + "</dataEnvio>\n      <tipo>4</tipo>\n      <idTransacaoDistribuidor>" + idTransacaoDistribuidorCancelamento + "</idTransacaoDistribuidor>\n      <motivoCancelamento>" + motivoCancelamento + "</motivoCancelamento>\n      <idTransacaoDistribuidorCancelamento>" + idTransacaoDistribuidor + "</idTransacaoDistribuidorCancelamento>\n    </transacao>\n    ";
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].simular_l2) {
            var resposta = "\n      <?xml version=\"1.0\"?>\n      <Resultado>\n           <dataResultado>" + dateStr + "</dataResultado>\n           <codigoDistribuidor>" + this.COD_CLIENTE + "</codigoDistribuidor>\n           <transacaoXml>75, 2018-07-18T11:28:00, 4, 313, Falha de comunicacao, 275</transacaoXml>\n           <dataProcessamento>" + dateStr + "</dataProcessamento>\n           <autenticacao>75160633052652701</autenticacao>\n           <sucesso>true</sucesso>\n           <mensagem>Erro ao tentar efetuar transa&#xE7;&#xE3;o de cancelamento: c&#xF3;digo da transa&#xE7;&#xE3;o duplicado!</mensagem>\n      </Resultado>\n      ";
            var respostaJson_8 = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(resposta);
            return new Promise(function (resolve, reject) { return resolve(respostaJson_8); });
        }
        else {
            return this.genericRequest(this.URL_CENTRAL, requestBody, auth);
        }
    };
    ComunicacaoCentralProvider.prototype.genericRequest = function (url, requestBody, auth) {
        if (url === void 0) { url = this.URL_CENTRAL; }
        if (auth === void 0) { auth = undefined; }
        if (auth === undefined) {
            auth = btoa(this.COD_CLIENTE + ":" + this.gerarCodigoAcesso(this.COD_CLIENTE));
        }
        // const _headers = new HttpHeaders();
        // _headers.append('content-type', 'application/xml');
        // _headers.append('authorization', `Basic ${auth}`);
        // _headers.append('Authorization', `Basic NzU6NTM4YjUxNzAxNTU4OTUxNTFjYjAyYTkzZmJmNDMwNjk=`);
        // _headers.append('Access-Control-Allow-Origin' , '*');
        // _headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var _headers = {
            'authorization': "Basic " + auth,
            'content-type': 'application/xml'
        };
        // const body = `username=${usuario}&password=${senha}&grant_type=password`;
        this.logger.info('***************************');
        this.logger.info('** HTTP POST CENTRAL');
        this.logger.info('** Basic: ' + auth);
        this.logger.info('** URL: ' + url);
        this.logger.info('** headers: ' + JSON.stringify(_headers));
        this.logger.info('** requestBody: ' + requestBody);
        return this.genericRequestAngular(url, requestBody, auth, _headers);
    };
    ComunicacaoCentralProvider.prototype.genericRequestAngular = function (url, requestBody, auth, _headers) {
        var _this = this;
        if (url === void 0) { url = this.URL_CENTRAL; }
        if (auth === void 0) { auth = undefined; }
        this.logger.info('** HTTP GET ANGULAR');
        var _url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].middleware_cors;
        var _urlFull = (_url + "?url=" + url + "&body=" + encodeURI(requestBody) + "&headers=" + encodeURI(JSON.stringify(_headers)));
        this.logger.info('** url', _url);
        this.logger.info('** url2', _urlFull);
        return new Promise(function (resolve, reject) {
            _this.http.get(_urlFull, { responseType: 'text' })
                .timeoutWith(ComunicacaoCentralProvider_1.APP_TIMEOUT, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error("N\u00E3o foi poss\u00EDvel estacionar seu ve\u00EDculo. Seu tempo m\u00E1ximo de resposta durou mais de " + ComunicacaoCentralProvider_1.APP_TIMEOUT / 1000 + " segundos")))
                .take(1)
                .subscribe(function (response) {
                console.log('Resposta CC linha 748', response);
                _this.logger.info('** response: ', response);
                var respostaJson = __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(response);
                return resolve(respostaJson);
            }, function (error) {
                _this.logger.error('** error: ', error);
                return reject(error);
            });
        });
    };
    ComunicacaoCentralProvider.prototype.genericRequestAngularNotCORs = function (url, requestBody, auth, _headers) {
        var _this = this;
        if (url === void 0) { url = this.URL_CENTRAL; }
        if (auth === void 0) { auth = undefined; }
        return this.http.post(url, requestBody, { headers: _headers, responseType: 'text' })
            .timeoutWith(ComunicacaoCentralProvider_1.APP_TIMEOUT, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error("N\u00E3o foi poss\u00EDvel estacionar seu ve\u00EDculo. Seu tempo m\u00E1ximo de resposta durou mais de " + ComunicacaoCentralProvider_1.APP_TIMEOUT / 1000 + " segundos")))
            .map(function (response) { return __WEBPACK_IMPORTED_MODULE_5__util_xml2json_util__["a" /* XML2JSONUtil */].parseHttpXmlResponse(response); })
            .toPromise()
            .then(function (response) {
            _this.logger.info('** response: ' + response);
            // response = response.replace('<?xml version="1.0"?>', '').trim();
            // this.logger.info('** response 2: '+ response);
            // this.logger.info('** response 2: '+ response);
            // const toJSON = XML2JSONUtil.parseHttpXmlResponse(response);
            // this.logger.info('** response 2: '+ response);
            return Promise.resolve(response);
        })
            .catch(function (response) {
            // this.logger.error('** HTTP POST CENTRAL');
            _this.logger.info('** HTTP POST CENTRAL');
            _this.logger.info('** Basic: ' + auth);
            _this.logger.info('** URL: ' + url);
            _this.logger.info('** headers: ' + JSON.stringify(_headers));
            _this.logger.info('** requestBody: ' + requestBody);
            _this.logger.info('** reject: ', response);
            _this.firebaseLoggerProvider.enviarFirebase({
                auth: auth,
                url: url,
                headers: _headers,
                requestBody: requestBody,
                response: JSON.stringify(response),
                tipo: 'ERRO',
                tipoDetalhe: 'Erro na comunicação com a AMC. Link L2.',
                timestamp: new Date().toISOString(),
            });
            // if (response.status === 400) {
            //   const responseJson = response.json();
            //   if (responseJson.error === 'invalid_grant') {
            //     return Promise.reject('Usuário ou senha inválida!');
            //   }
            // }
            return Promise.reject(response);
        });
    };
    ComunicacaoCentralProvider.prototype.getDateComunicacao = function (date) {
        if (date === void 0) { date = new Date(); }
        var dateStr = date.getFullYear() + '-' + this.putZero(date.getMonth() + 1) + '-' + this.putZero(date.getDate()) + 'T' + this.putZero(date.getHours()) + ':' + this.putZero(date.getMinutes()) + ':' + this.putZero(date.getSeconds());
        return dateStr;
    };
    /**
     * tipo inteiro - data atual "dma" (sem barras ou caracteres e sem zeros a esquerda)
     */
    ComunicacaoCentralProvider.prototype.getDataAtual = function (dt) {
        if (dt === void 0) { dt = new Date(); }
        return parseInt(dt.getDate() + '' + (dt.getMonth() + 1) + dt.getFullYear()); // 1172018
    };
    ComunicacaoCentralProvider.prototype.gerarCodigoAcesso = function (COD) {
        if (COD === void 0) { COD = this.COD_CLIENTE; }
        return this.gerarMD5(COD, this.CNPJ_CLIENTE, this.DMA, this.TOKEN);
    };
    ComunicacaoCentralProvider.prototype.gerarMD5 = function (cod, cnpj, dma, token) {
        var md5 = __WEBPACK_IMPORTED_MODULE_1__util_md5_util__["a" /* MD5Util */].hashStr(cod + '' + cnpj + '' + dma + '' + token);
        // const md5 = Md5.hashStr(cod + '' + cnpj + '' + dma + '' + token);
        this.logger.info('md5: ' + md5);
        return md5;
    };
    ComunicacaoCentralProvider.prototype.putZero = function (val) {
        return val < 10 ? ('0' + val) : val;
    };
    ComunicacaoCentralProvider.APP_TIMEOUT = 15 * 1000; // 15 segundos (Tempo de Resposta)
    ComunicacaoCentralProvider.APP_ESPERA = 30 * 1000; // 30 segundos (Tempo de Espera)
    ComunicacaoCentralProvider = ComunicacaoCentralProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_11__firebase_logger_firebase_logger__["a" /* FirebaseLoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */]])
    ], ComunicacaoCentralProvider);
    return ComunicacaoCentralProvider;
    var ComunicacaoCentralProvider_1;
}());

//# sourceMappingURL=comunicacao-central.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadModel; });
/* unused harmony export InfoModel */
/* unused harmony export TempoModel */
/* unused harmony export EmpresaModel */
var CadModel = /** @class */ (function () {
    function CadModel(obj) {
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        this.qtd_por_usuario = obj && obj.qtd_por_usuario || 3;
        this.total = obj && obj.total || 200;
        this.valor_unitario = obj && obj.valor_unitario || 2;
        this.regras = obj && obj.regras || '';
        this.gateway = obj && obj.gateway || '';
        this.regras_comprovante = obj && obj.regras_comprovante || '';
        this.info = obj && obj.info || new InfoModel();
        this.empresa = obj && obj.empresa || new EmpresaModel();
        this.tempo_veiculo = obj && obj.tempo_veiculo || new TempoModel();
        this.tempo_caminhao = obj && obj.tempo_caminhao || new TempoModel();
    }
    return CadModel;
}());

var InfoModel = /** @class */ (function () {
    function InfoModel(obj) {
        this.email_comprovante = obj && obj.email_comprovante || '';
        this.email = obj && obj.email || '';
        this.fone = obj && obj.fone || '';
        this.site = obj && obj.site || '';
        this.facebook_url = obj && obj.facebook_url || '';
        this.google_url = obj && obj.google_url || '';
        this.google_store = obj && obj.google_store || '';
        this.apple_store = obj && obj.apple_store || '';
        this.twitter_url = obj && obj.twitter_url || '';
        this.info_page = obj && obj.info_page || '';
    }
    return InfoModel;
}());

var TempoModel = /** @class */ (function () {
    function TempoModel(obj) {
        this.qtdMinutos = obj && obj.qtdMinutos || 0;
    }
    return TempoModel;
}());

var EmpresaModel = /** @class */ (function () {
    function EmpresaModel(obj) {
        this.cnpj = obj && obj.cnpj || '';
        this.razao_social = obj && obj.razao_social || '';
        this.nome_fantasia = obj && obj.nome_fantasia || '';
        this.logradouro = obj && obj.logradouro || '';
        this.logradouro_numero = obj && obj.logradouro_numero || '';
        this.cep = obj && obj.cep || '';
    }
    return EmpresaModel;
}());

//# sourceMappingURL=cad.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoEstacionadoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TempoEstacionadoProvider = /** @class */ (function () {
    function TempoEstacionadoProvider(afd) {
        this.afd = afd;
    }
    /**
     * Retorna a hora agora do firebase
     *
     * incremento: corresponde aos acrescimos. Por padrao retorna a data e hora do firebase, mas para calcular o tempo futuro passa os acrescimos
     */
    TempoEstacionadoProvider.prototype.getHoraAtualFromFirebase = function (incremento) {
        if (incremento === void 0) { incremento = 0; }
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/.info/serverTimeOffset')
            .once('value')
            .then(function (data) {
            var timeinmilisNow = data.val() + Date.now();
            var timeinmilis = data.val() + Date.now() + incremento;
            return { now: timeinmilisNow, dateNow: new Date(timeinmilisNow), timeinmilis: timeinmilis, date: new Date(timeinmilis) };
        });
    };
    TempoEstacionadoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TempoEstacionadoProvider);
    return TempoEstacionadoProvider;
}());

//# sourceMappingURL=tempo-estacionado.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowserProvider = /** @class */ (function () {
    function BrowserProvider(iab, platform) {
        this.iab = iab;
        this.platform = platform;
    }
    BrowserProvider.prototype.openPdf = function (url) {
        if (this.platform.is('android')) {
            url = 'https://docs.google.com/gview?embedded=true&url=' + url;
        }
        this.iab.create(url, '_blank', { closebuttoncaption: 'Fechar', toolbarposition: 'top', clearcache: 'yes', location: 'yes', enableViewportScale: 'yes' });
    };
    BrowserProvider.prototype.openPage = function (url, type) {
        if (type === void 0) { type = undefined; }
        type = this.getType(type);
        if (type === 'external') {
            this.iab.create(url, '_blank', { closebuttoncaption: 'Fechar', toolbarposition: 'top', clearcache: 'yes', location: 'yes', enableViewportScale: 'yes' });
        }
        else if (type === 'external_system') {
            this.iab.create(url, '_system', { closebuttoncaption: 'Fechar', toolbarposition: 'top', clearcache: 'yes', location: 'yes', enableViewportScale: 'yes' });
        }
    };
    BrowserProvider.prototype.getType = function (type) {
        if (type === void 0) { type = undefined; }
        if (this.platform.is('android')) {
            if (type) {
                return type;
            }
            return 'external_system';
        }
        else {
            return 'external';
        }
    };
    BrowserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */]])
    ], BrowserProvider);
    return BrowserProvider;
}());

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_push__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logger_logger__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationProvider = /** @class */ (function () {
    function NotificationProvider(push, platform, app, logger, userService) {
        var _this = this;
        this.push = push;
        this.platform = platform;
        this.app = app;
        this.logger = logger;
        this.userService = userService;
        this.options = {
            android: {
                senderID: NotificationProvider_1.SENDER_ID,
                icon: 'logowhite'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_push__["a" /* Push */]['installed']()) {
            this.push.hasPermission().then(function (res) {
                if (res.isEnabled) {
                    _this.logger.error('We have permission to send push notifications');
                }
                else {
                    _this.logger.error('We do not have permission to send push notifications');
                }
            });
        }
    }
    NotificationProvider_1 = NotificationProvider;
    NotificationProvider.prototype.listenNotificacaoErro = function (pushObject) {
        var _this = this;
        if (!this.subscribe2) {
            this.subscribe2 = pushObject.on('error').subscribe(function (error) {
                return _this.logger.error('Error with Push plugin: ' + JSON.stringify(error));
            });
        }
    };
    NotificationProvider.prototype.listenNotificacao = function (pushObject) {
        var _this = this;
        if (!this.subscribe) {
            this.subscribe = pushObject.on('notification').subscribe(function (notification) {
                _this.logger.debug('Received a notification: ' + JSON.stringify(notification));
                if (!notification.additionalData.foreground) {
                    _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name);
                }
            });
        }
    };
    /**
     * Salva o 'registrationId' na entidade usuario para enviar Push do Firebase Functions
     */
    NotificationProvider.prototype.registrar = function (pushObject, idUser) {
        var _this = this;
        this.logger.info('[NotificationProvider-registrar]');
        return new Promise(function (resolve, reject) {
            pushObject.on('registration').take(1).subscribe(function (registration) {
                _this.logger.info('Device registered: ' + JSON.stringify(registration));
                _this.userService.updateUser(idUser, { notificationKey: registration.registrationId });
                // .then(_ => alert('ok'))
                // .catch(error => reject('Você precisa habilitar as permissões para utilizar o aplicativo!'));
                resolve('ok');
            }, function (error) {
                _this.logger.error('GPS desabilitado. Error: ' + JSON.stringify(error));
                reject('Você precisa habilitar as permissões para utilizar o aplicativo!');
            });
        });
    };
    /**
     * Inicia o servico de Push
     */
    NotificationProvider.prototype.inicialize = function (idUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.destroy();
            if ((_this.platform.is('android') || _this.platform.is('ios')) && __WEBPACK_IMPORTED_MODULE_3__ionic_native_push__["a" /* Push */]['installed']()) {
                _this.logger.info('[NotificationProvider-inicialize] - phonegap-plugin-push instalado com sucesso!');
                _this.pushObject = _this.push.init(_this.options);
                _this.listenNotificacao(_this.pushObject);
                _this.registrar(_this.pushObject, idUser)
                    .then(function (_data) {
                    resolve(_data);
                })
                    .catch(function (error) { return reject(error); });
                _this.listenNotificacaoErro(_this.pushObject);
            }
            else {
                _this.logger.error('[NotificationProvider-inicialize] phonegap-plugin-push NAO instalado corretamente!');
                resolve('[NotificationProvider-inicialize] phonegap-plugin-push NAO instalado corretamente!');
            }
        });
    };
    NotificationProvider.prototype.destroy = function () {
        this.logger.info('[NotificationProvider-destroy]');
        if (this.subscribe !== undefined)
            this.subscribe.unsubscribe();
        if (this.subscribe2 !== undefined)
            this.subscribe2.unsubscribe();
    };
    NotificationProvider.SENDER_ID = '722683236957';
    NotificationProvider = NotificationProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */]])
    ], NotificationProvider);
    return NotificationProvider;
    var NotificationProvider_1;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajuda/ajuda.module": [
		735,
		16
	],
	"../pages/areas-modal/areas-modal.module": [
		736,
		35
	],
	"../pages/cancelar-transacao/cancelar-transacao.module": [
		737,
		24
	],
	"../pages/compartilhar/compartilhar.module": [
		738,
		34
	],
	"../pages/comprar-creditos-pagamento/comprar-creditos-pagamento.module": [
		768,
		2
	],
	"../pages/comprar-creditos/comprar-creditos.module": [
		743,
		15
	],
	"../pages/comprovante/comprovante.module": [
		739,
		3
	],
	"../pages/configuracoes/configuracoes.module": [
		740,
		14
	],
	"../pages/confirmar-cpf-modal/confirmar-cpf-modal.module": [
		741,
		23
	],
	"../pages/estacionados-modal/estacionados-modal.module": [
		742,
		33
	],
	"../pages/estacionar/estacionar.module": [
		770,
		4
	],
	"../pages/filtro-modal/filtro-modal.module": [
		744,
		32
	],
	"../pages/filtro-pagamento/filtro-pagamento.module": [
		745,
		31
	],
	"../pages/historico/historico.module": [
		765,
		1
	],
	"../pages/home/home.module": [
		769,
		17
	],
	"../pages/initial/initial.module": [
		746,
		30
	],
	"../pages/login/login.module": [
		747,
		22
	],
	"../pages/pagamentos-form/pagamentos-form.module": [
		762,
		13
	],
	"../pages/pagamentos/pagamentos.module": [
		748,
		12
	],
	"../pages/pdv-empresa/pdv-empresa.module": [
		749,
		21
	],
	"../pages/permissions/permissions-screen.module": [
		750,
		29
	],
	"../pages/principal/principal.module": [
		766,
		20
	],
	"../pages/profile-edit/profile-edit.module": [
		764,
		11
	],
	"../pages/profile/profile.module": [
		751,
		10
	],
	"../pages/recovery-password/recovery-password.module": [
		752,
		28
	],
	"../pages/reportar-problema/reportar-problema.module": [
		753,
		27
	],
	"../pages/root/root.module": [
		755,
		19
	],
	"../pages/setores-modal/setores-modal.module": [
		754,
		9
	],
	"../pages/signup/signup.module": [
		756,
		18
	],
	"../pages/streat-view/streat-view.module": [
		757,
		8
	],
	"../pages/tempo-restante/tempo-restante.module": [
		767,
		0
	],
	"../pages/terms/terms.module": [
		758,
		26
	],
	"../pages/veiculo-estacionado/veiculo-estacionado.module": [
		759,
		7
	],
	"../pages/veiculos-form/veiculos-form.module": [
		763,
		6
	],
	"../pages/veiculos-modal/veiculos-modal.module": [
		760,
		25
	],
	"../pages/veiculos/veiculos.module": [
		761,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 322;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseLoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseLoggerProvider = /** @class */ (function () {
    function FirebaseLoggerProvider(afd, userProvider) {
        this.afd = afd;
        this.userProvider = userProvider;
    }
    FirebaseLoggerProvider.prototype.enviarFirebase = function (entity) {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userId) {
            _this.afd.list(__WEBPACK_IMPORTED_MODULE_3__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_LOGS + '/' + userId).push(entity);
        });
    };
    FirebaseLoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */]])
    ], FirebaseLoggerProvider);
    return FirebaseLoggerProvider;
}());

//# sourceMappingURL=firebase-logger.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isDebugMode */
/* unused harmony export Logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var isDebugMode = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].isDebugMode;
var noop = function () { return undefined; };
var Logger = /** @class */ (function () {
    function Logger() {
    }
    return Logger;
}());

var LoggerProvider = /** @class */ (function () {
    function LoggerProvider() {
    }
    Object.defineProperty(LoggerProvider.prototype, "debug", {
        get: function () {
            if (isDebugMode) {
                return console.info.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerProvider.prototype, "info", {
        get: function () {
            if (isDebugMode) {
                return console.info.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerProvider.prototype, "warn", {
        get: function () {
            if (isDebugMode) {
                return console.warn.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerProvider.prototype, "error", {
        get: function () {
            if (isDebugMode) {
                return console.error.bind(console);
            }
            else {
                return noop;
            }
        },
        enumerable: true,
        configurable: true
    });
    LoggerProvider.prototype.invokeConsoleMethod = function (type, args) {
        var logFn = (console)[type] || console.log || noop;
        logFn.apply(console, [args]);
    };
    LoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoggerProvider);
    return LoggerProvider;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_cad__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_browser_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_cads_user_cads_user__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = /** @class */ (function () {
    function MyApp(platform, modalCtrl, statusBar, splashScreen, alertCtrl, notificationProvider, menu, events, comunicacaoCentralProvider, authProvider, browserProvider, logger, userProvider, cadsUserProvider, cadsProvider, modalProvider) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.notificationProvider = notificationProvider;
        this.menu = menu;
        this.events = events;
        this.comunicacaoCentralProvider = comunicacaoCentralProvider;
        this.authProvider = authProvider;
        this.browserProvider = browserProvider;
        this.logger = logger;
        this.userProvider = userProvider;
        this.cadsUserProvider = cadsUserProvider;
        this.cadsProvider = cadsProvider;
        this.modalProvider = modalProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].INITIAL_PAGE.name;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
        this.cad = new __WEBPACK_IMPORTED_MODULE_7__models_cad__["a" /* CadModel */]();
        this.cads = 0;
        this.cadsUsados = 0;
        this.subscription = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this.versao = __WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].VERSAO;
        this.pdvReg = false;
        this.isnotPdv = false;
        this.userProvider.getUserLocal().then(function (userID) {
            _this.events.subscribe('update_saldo', function (value) {
                if (userID) {
                    _this.cadsUserProvider.getCads(userID).take(1).subscribe(function (value) {
                        _this.cadsUsados = 0;
                        _this.cads = 0;
                        value.map(function (value) {
                            if (value.key == "qtdCadsUsados") {
                                _this.cadsUsados = value.item;
                            }
                            else {
                                _this.cads += value.item.qtdCads;
                            }
                        });
                    });
                }
            });
            _this.events.subscribe('user', function (value) {
                if (value) {
                    _this.pdvReg = false;
                    _this.isnotPdv = false;
                    _this.user = value;
                    if ((value.profile != 'revendedor' && value.pdvReg == undefined) || (value.profile != 'revendedor' && value.pdvReg.cnpj == "")) {
                        _this.pdvReg = true;
                    }
                    if (value.uidPDV == '00000000000') {
                        _this.isnotPdv = true;
                    }
                }
                else {
                    _this.logout();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].LOGIN_PAGE.name;
                }
            });
            if (userID) {
                _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                    _this.events.publish('user', user);
                    _this.user = user;
                    console.log(_this.user);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].INITIAL_PAGE.name;
                    //this.setVisibleMenu(false);
                    // }
                });
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].LOGIN_PAGE.name;
            }
        }).catch(function (error) {
            _this.logger.info('Info: Usuário não logado. ' + JSON.stringify(error));
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].LOGIN_PAGE.name;
        });
        this.initializeApp();
    }
    MyApp.prototype.setVisibleMenu = function (status) {
        if (status === void 0) { status = false; }
        this.menu.enable(status);
        this.menu.swipeEnable(status);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.carregaUsuarioComCADs();
            _this.comunicacaoCentralProvider.setDMA_NTP();
            if (_this.platform.is('cordova')) {
                _this.userProvider.getUserLocal().then(function (_userId) {
                    if (_userId) {
                        setTimeout(function (_) {
                            _this.logger.info('NOTIFICATION APP COMPONENT. User: ' + _userId);
                            console.log(_userId);
                            _this.notificationProvider.inicialize(_userId)
                                .then(function (_data) { })
                                .catch(function (error) {
                                _this.logger.error('NOTIFICATION ERROR INIT. Error: ' + JSON.stringify(error));
                            });
                            _this.userProvider.updateUuidOrImei(_userId);
                        }, 1000);
                    }
                });
            }
            _this.cadsProvider.find().take(1).subscribe(function (value) {
                value.map(function (item) {
                    _this.cad = new __WEBPACK_IMPORTED_MODULE_7__models_cad__["a" /* CadModel */](item.cad);
                    _this.logger.info(_this.cad);
                });
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goEstacionamentosAtivos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goCreditos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goPagamentos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].PAGAMENTOS_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goHistorico = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].HISTORICO_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goVeiculos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].VEICULOS_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goProfile = function (user) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].PROFILE_EDIT_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goConfiguracoes = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].CONFIGURACOES_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goAjuda = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].AJUDA_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goCompartilhar = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].COMPARTILHAR_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goProblema = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].REPORTAR_PROBLEMA_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goAvaliar = function () {
        this.menu.close();
        var url = !this.platform.is('android') ? this.cad.info.apple_store : this.cad.info.google_store;
        this.browserProvider.openPage(url);
    };
    MyApp.prototype.goPdvCadastro = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].PDV_EMPRESA_PAGE.name);
        this.menu.close();
    };
    MyApp.prototype.goLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Sair',
            message: 'Tem certeza que deseja sair do aplicativo?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Sim', cssClass: 'btn btn-ok',
                    handler: function () {
                        _this.logout();
                    }
                },
                {
                    text: 'Não', cssClass: 'btn btn-cancel',
                }
            ]
        }).present();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.menu.close();
        this.authProvider.logout().then(function () {
            _this.userProvider.removeUserLocal();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__environments_constants__["a" /* Constants */].LOGIN_PAGE.name);
        });
    };
    MyApp.prototype.closeMenu = function () {
        this.menu.close();
    };
    MyApp.prototype.destroy = function () {
        if (this.subscribePush)
            this.subscribePush.unsubscribe();
    };
    MyApp.showLoading = function (loadingCtrl) {
        return loadingCtrl.create({ content: 'Aguarde...' });
    };
    MyApp.showAlert = function (alertCtrl, title, msg, type, callback) {
        var alert = alertCtrl.create({
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
    MyApp.showConfirm = function (alertCtrl, titulo, descricao, callback, callbackNo) {
        if (titulo === void 0) { titulo = 'Aviso'; }
        if (descricao === void 0) { descricao = ''; }
        if (callback === void 0) { callback = undefined; }
        if (callbackNo === void 0) { callbackNo = undefined; }
        return alertCtrl.create({
            title: titulo,
            subTitle: descricao,
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Sim',
                    cssClass: 'btn btn-ok',
                    handler: function (data) {
                        if (callback)
                            callback();
                    }
                },
                {
                    text: 'Não', cssClass: 'btn btn-cancel',
                    handler: function (data) {
                        if (callback)
                            callbackNo();
                    }
                }
            ]
        });
    };
    MyApp.prototype.namePattern = function (name) {
        var arr = name.split(' ');
        var keep = arr[1][0].toUpperCase() != arr[1][0];
        return arr.slice(0, keep ? 3 : 2).join(' ');
    };
    MyApp.prototype.carregaUsuarioComCADs = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                if (user) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */](user);
                    _this.logger.info('user: ' + JSON.stringify(_this.user));
                    _this.user = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */](user);
                    _this.name = _this.namePattern(_this.user.name.toString());
                    console.log(name);
                    _this.cadsUserProvider.getCads(_this.user.id).take(1).subscribe(function (value) {
                        _this.cadsUsados = 0;
                        _this.cads = 0;
                        value.map(function (value) {
                            if (value.key == "qtdCadsUsados") {
                                _this.cadsUsados = value.item;
                            }
                            else {
                                _this.cads += value.item.qtdCads;
                            }
                        });
                    });
                }
            });
        });
    };
    MyApp.prototype.ngOnDestroy = function () {
        this.subscription.add(this.subCadsUser);
        this.subscription.unsubscribe();
    };
    MyApp.prototype.camelize = function (str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    };
    MyApp.MAP_LOAD = true;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\app\app.html"*/'<ion-split-pane mode="ios">\n\n  <ion-menu [content]="content">\n\n    <ion-content class="menu">\n\n      <ion-list class="list" mode="ios">\n\n        \n\n        <ion-item class="user-menu-item" no-lines>\n\n          <ion-buttons start>\n\n            <button ion-button clear class="close-button" (click)="closeMenu()" icon-only color="white">\n\n              <span class="close-menu">X</span>\n\n            </button>\n\n          </ion-buttons>\n\n          <ion-buttons end>\n\n            <button ion-button clear class="edt-button" (click)="goProfile(user)" icon-only color="white">\n\n              <img class="ico" src="assets/icones/right-icon.svg"/>\n\n            </button>\n\n          </ion-buttons>\n\n          <div class="top-menu">\n\n            <!-- <img src="{{user?.photo}}" class="img" /> -->\n\n            <p class="name">{{name}}</p>\n\n            <p class="profile" text-lowercase>{{user?.email}}</p>\n\n            <p *ngIf="user?.profile !== \'user\'">{{user?.profile.toUpperCase()}}</p>\n\n            <!-- <p *ngIf="cads == null || cadsUsados == null || (cads - cadsUsados) == 0" class="cads-credits">Saldo: 0 CAD(s) | R$ 0,00</p> -->\n\n            <p class="cads-credits">Saldo: {{cads - cadsUsados}} CAD(s) | R$ {{(cads - cadsUsados) * cad.valor_unitario}},00</p>\n\n          </div>\n\n          \n\n          </ion-item>\n\n        <!-- <user-info></user-info> -->\n\n        \n\n          <button ion-button clear (click)="goHome()" mode="ios" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/pin-1.svg"/>\n\n              <ion-label class="text-menu">Início</ion-label>\n\n            \n\n          </button>\n\n\n\n          <button ion-button clear clear (click)="goVeiculos()" mode="ios" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/car.svg" />\n\n            <!--<ion-icon name="ios-car-outline" color="header" item-left></ion-icon>-->\n\n              <ion-label class="text-menu"> Meus Veículos</ion-label>\n\n            \n\n          </button>\n\n\n\n          <button ion-button clear clear (click)="goPagamentos()" mode="ios" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/wallet.svg"/>\n\n              <ion-label class="text-menu">Pagamento</ion-label>\n\n            \n\n          </button>\n\n\n\n          <button ion-button clear clear (click)="goHistorico()" mode="ios" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/history.svg"/>\n\n              <ion-label class="text-menu">Histórico</ion-label>\n\n            \n\n          </button>\n\n\n\n          <button ion-button clear clear (click)="goCreditos()" mode="ios" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/shopping-cart-1.svg"/>\n\n              <ion-label class="text-menu">Compra de Cads</ion-label>\n\n           \n\n          </button>\n\n\n\n          <button ion-button clear clear (click)="goConfiguracoes()" mode="ios" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/alarm.svg"/>\n\n              <ion-label class="text-menu">Alertas e Lembretes</ion-label>\n\n           \n\n          </button>\n\n        \n\n        \n\n         <!--  <button ion-button clear clear (click)="goEstacionamentosAtivos()" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/estacionamento.svg"/>\n\n              <ion-label class="text-menu">Estacionamentos Ativos</ion-label>\n\n            \n\n          </button>\n\n          \n\n          <button ion-button clear clear (click)="goProfile()" class="menu-item" no-lines>\n\n            <ion-icon name="icon-perfil" item-left>  </ion-icon>\n\n              <ion-label class="text-menu">Perfil</ion-label>\n\n          \n\n          </button>\n\n         \n\n\n\n        \n\n\n\n        \n\n\n\n        \n\n          <button ion-button clear clear (click)="goCompartilhar()" class="menu-item" no-lines>\n\n            <img class="ico" src="assets/icones/share.svg"/>\n\n              <ion-label class="text-menu">Compartilhe</ion-label>\n\n            \n\n          </button>\n\n        -->\n\n\n\n        \n\n      </ion-list>\n\n      <ion-list>\n\n        \n\n          <button ion-button clear (click)="goPdvCadastro()" *ngIf="pdvReg" mode="ios" class="menu-item">\n\n            <img class="ico" src="assets/icones/bookmark.svg"/>\n\n              <ion-label class="text-pdv"> Quero ser PDV </ion-label>\n\n            \n\n          </button>\n\n        \n\n      </ion-list>\n\n        <div class="footer">\n\n          <div class="footer-list">\n\n         \n\n            <button ion-button clear (click)="goAjuda()" class="footer-item" mode="ios"  no-lines>\n\n              <img class="ico" src="assets/icones/help (2).svg" />\n\n                <ion-label class="text-footer">Ajuda</ion-label>\n\n              \n\n            </button>\n\n          \n\n              <button ion-button clear (click)="goAvaliar()" class="footer-item" mode="ios"  no-lines>\n\n                  <img class="ico" src="assets/icones/favorite.svg" />\n\n                  <ion-label class="text-footer">Avalie o Zona Fácil</ion-label>\n\n              </button>\n\n           \n\n              <button ion-button clear (click)="goProblema()" class="footer-item"  mode="ios"  no-lines>\n\n                <img class="ico" src="assets/icones/feedback.svg" />\n\n                  <ion-label class="text-footer">Reportar problema</ion-label>\n\n                \n\n              </button>\n\n\n\n              <button ion-button clear (click)="goLogout()" class="footer-item" mode="ios"  no-lines>\n\n                <img class="ico" src="assets/icones/logout.svg" />\n\n                  <ion-label class="text-footer">Sair</ion-label>\n\n              </button>\n\n            </div>\n\n          \n\n          \n\n        \n\n          <div class="img-logo">\n\n            <img src="assets/imgs/logo-new.png" />\n\n            \n\n          </div>\n\n        \n\n    </div> \n\n    <div class="versao"><label>{{versao}}</label></div> \n\n    <div class="footer-bottom"></div>\n\n    </ion-content>\n\n    \n\n  </ion-menu>\n\n\n\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n  \n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_browser_browser__["a" /* BrowserProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_modal_modal__["a" /* ModalProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_veiculo__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VeiculosProvider = /** @class */ (function () {
    function VeiculosProvider(afd) {
        this.afd = afd;
    }
    VeiculosProvider.prototype.findByUser = function (userId) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_VEICULOS + userId, function (ref) { return ref.orderByKey(); }).snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, veiculo: new __WEBPACK_IMPORTED_MODULE_0__models_veiculo__["a" /* VeiculoModel */](c.payload.val()) }); }); });
    };
    VeiculosProvider.prototype.findByVeiculo = function (veiculoID, userID) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_VEICULOS + userID + '/' + veiculoID)
            .valueChanges();
        // .map(changes => changes.map(c => ({ key: c.payload.key, veiculo: c.payload.val() })));
    };
    VeiculosProvider.prototype.remove = function (userId, itemId) {
        this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_VEICULOS + '/' + userId + '/' + itemId).remove();
    };
    VeiculosProvider.prototype.save = function (userId, entity) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_VEICULOS + '/' + userId).push(entity);
    };
    VeiculosProvider.prototype.update = function (userId, entity) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_VEICULOS + '/' + userId + '/' + entity.id).set(entity);
    };
    VeiculosProvider.prototype.getTiposVeiculo = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_TIPO_VEICULO).snapshotChanges().
            map(function (snapshot) { return snapshot.map(function (tipo) { return ({ key: tipo.payload.key, tipo: tipo.payload.val() }); }); });
    };
    VeiculosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], VeiculosProvider);
    return VeiculosProvider;
}());

//# sourceMappingURL=veiculos.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetoresProvider = /** @class */ (function () {
    function SetoresProvider(afd) {
        this.afd = afd;
    }
    SetoresProvider.prototype.getSetoresByLocation = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_SETORES)
            .snapshotChanges()
            .map(function (snapshot) { return snapshot.map(function (setores) { return ({ key: setores.payload.key, setores: setores.payload.val() }); }); });
    };
    SetoresProvider.prototype.getSetoresByArea = function (areaCodigo) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_SETORES + areaCodigo)
            .snapshotChanges()
            .map(function (snapshot) { return snapshot.map(function (setor) { return ({ key: setor.payload.key, setor: setor.payload.val() }); }); });
        ;
    };
    SetoresProvider.prototype.byId = function (areaCodigo, setorCodigo) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_SETORES + areaCodigo + "/" + setorCodigo).valueChanges();
    };
    SetoresProvider.prototype.update = function (setor, areaCodigo) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_SETORES + areaCodigo + "/" + setor.codigo).update(setor);
    };
    SetoresProvider.prototype.getConfigQtdCadsSetor = function () {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CONFIG + "cads_setor").valueChanges();
    };
    SetoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SetoresProvider);
    return SetoresProvider;
}());

//# sourceMappingURL=setores.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaProvider = /** @class */ (function () {
    function AreaProvider(afd) {
        this.afd = afd;
    }
    AreaProvider.prototype.getAreas = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_AREAS)
            .snapshotChanges()
            .map(function (snapshot) { return snapshot.map(function (area) { return ({ key: area.payload.key, area: area.payload.val() }); }); });
    };
    AreaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AreaProvider);
    return AreaProvider;
}());

//# sourceMappingURL=area.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_spinner__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoadingSpinnerComponentModule = /** @class */ (function () {
    function LoadingSpinnerComponentModule() {
    }
    LoadingSpinnerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__loading_spinner__["a" /* LoadingSpinnerComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__["a" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__loading_spinner__["a" /* LoadingSpinnerComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_0__loading_spinner__["a" /* LoadingSpinnerComponent */]]
        })
    ], LoadingSpinnerComponentModule);
    return LoadingSpinnerComponentModule;
}());

//# sourceMappingURL=loading-spinner.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info_user_info__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timer_timer__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_card_custom_card__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_info_user_info__["a" /* UserInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__custom_card_custom_card__["a" /* CustomCardComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__user_info_user_info__["a" /* UserInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__custom_card_custom_card__["a" /* CustomCardComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoModel; });
var VeiculoModel = /** @class */ (function () {
    function VeiculoModel(obj) {
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        this.placa = obj && obj.placa || '';
        this.tipo_veiculo = obj && obj.tipo_veiculo || 'automovel';
        this.ano = obj && obj.ano || '';
        this.marca = obj && obj.marca || 'Sem marca';
        this.modelo = obj && obj.modelo || 'Sem modelo';
        this.tipo_placa = obj && obj.tipo_placa || 'Padrão';
    }
    VeiculoModel.getImage = function (tipo) {
        switch (tipo) {
            // case 'moto':
            //   return 'assets/imgs/moto.png';
            case 'caminhao_onibus':
                return 'assets/imgs/truck.png';
            default:
                return 'assets/imgs/car.png';
        }
    };
    VeiculoModel.prototype.getTipoVeiculoID = function () {
        var tipo = this.tipo_veiculo.toLowerCase();
        switch (tipo) {
            // case 'moto':
            //   return 3;
            case 'caminhao_onibus':
                return 2;
            default:
                return 1;
        }
    };
    VeiculoModel.prototype.getPlacaNaoFormatada = function () {
        return this.placa ? this.placa.toUpperCase().replace('-', '') : '';
    };
    return VeiculoModel;
}());

//# sourceMappingURL=veiculo.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EstacionarModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanceladoModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);

var EstacionarModel = /** @class */ (function () {
    function EstacionarModel(obj) {
        // let date = firebase.database.ServerValue.TIMESTAMP;
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        this.area_id = obj && obj.area_id || '';
        this.setor_id = obj && obj.setor_id || '';
        this.face_id = obj && obj.face_id || '';
        this.veiculo_id = obj && obj.veiculo_id || '';
        this.dataHoraRegistro = obj && obj.dataHoraRegistro || __WEBPACK_IMPORTED_MODULE_0_firebase_app__["database"].ServerValue.TIMESTAMP;
        this.qtd = obj && obj.qtd || 0;
        this.status = obj && obj.status || true;
        this.cancelado = (obj && obj.cancelado) ? obj.cancelado : false;
        this.cidade = obj && obj.cidade || 'Fortaleza';
        this.situacao = obj && obj.situacao || 'Ativação';
        this.categoria = obj && obj.categoria || '';
        this.codAuth = obj && obj.codAuth || '';
        this.uidAparelho = obj && obj.uidAparelho || '';
        this.comprovante = obj && obj.comprovante || {};
        this.dadosCancelamento = obj && obj.dadosCancelamento || {};
        this.tempoComprado = obj && obj.tempoComprado || 0;
        this.idTransacaoDistribuidor = obj && obj.idTransacaoDistribuidor || 1;
    }
    EstacionarModel.getHoraEmMilis = function (qtd, tempoCadMinutos) {
        if (qtd === void 0) { qtd = 1; }
        // return qtd*1200000;
        return qtd * tempoCadMinutos * EstacionarModel.UM_MINUTO_EM_MILIS;
    };
    EstacionarModel.prototype.resetDataHoraRegistro = function () {
        this.dataHoraRegistro = __WEBPACK_IMPORTED_MODULE_0_firebase_app__["database"].ServerValue.TIMESTAMP;
    };
    EstacionarModel.UM_MINUTO_EM_MILIS = 60000; // 1min = 60000 milisegundos
    return EstacionarModel;
}());

var CanceladoModel = /** @class */ (function () {
    function CanceladoModel(obj) {
        this.dataHoraRegistro = obj && obj.dataHoraRegistro || __WEBPACK_IMPORTED_MODULE_0_firebase_app__["database"].ServerValue.TIMESTAMP;
        this.motivoCancelamento = obj && obj.motivoCancelamento || '';
        this.autenticacao = obj && obj.autenticacao || '';
        this.idTransacaoDistribuidorCancelamento = obj && obj.idTransacaoDistribuidorCancelamento || 0;
    }
    return CanceladoModel;
}());

//# sourceMappingURL=estacionar.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_credito__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreditosProvider = /** @class */ (function () {
    function CreditosProvider(afd) {
        this.afd = afd;
    }
    CreditosProvider.prototype.countAll = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CREDITOS)
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, values: c.payload.val() }); }); })
            .map(function (changes) {
            var cont = 1;
            changes.forEach(function (_item) {
                cont += Object.keys(_item.values).length;
            });
            return cont;
        });
    };
    CreditosProvider.prototype.update = function (creditoId, userID, credito) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CREDITOS + userID + "/" + creditoId).update(credito);
    };
    CreditosProvider.prototype.findByUser = function (userID) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CREDITOS + userID, function (ref) { return ref.orderByChild('dataHoraRegistro'); })
            .snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, values: new __WEBPACK_IMPORTED_MODULE_3__models_credito__["a" /* CreditoModel */](c.payload.val()) }); }); })
            .map(function (changes) { return changes.reverse(); });
    };
    CreditosProvider.prototype.save = function (userID, entity) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_CREDITOS + userID + '/' + entity.id)
            .update(entity)
            .then(function (result) {
            return true;
        }).catch(function (result) {
            return false;
        });
    };
    CreditosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CreditosProvider);
    return CreditosProvider;
}());

//# sourceMappingURL=creditos.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_pagamento__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagamentosProvider = /** @class */ (function () {
    function PagamentosProvider(afd) {
        this.afd = afd;
    }
    PagamentosProvider.prototype.findByUser = function (userId) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_PAGAMENTOS + userId, function (ref) { return ref.orderByKey(); }).snapshotChanges()
            .map(function (changes) { return changes.map(function (c) {
            var pgto = new __WEBPACK_IMPORTED_MODULE_0__models_pagamento__["a" /* PagamentoModel */](c.payload.val());
            pgto.id = c.payload.key;
            return { key: pgto.id, values: pgto };
        }); });
    };
    PagamentosProvider.prototype.findByUserAndCartao = function (userId, cartaoId) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_PAGAMENTOS + userId + '/' + cartaoId, function (ref) { return ref.orderByKey(); }).snapshotChanges()
            .map(function (changes) { return changes.map(function (c) { return ({ key: c.payload.key, values: c.payload.val() }); }); });
    };
    PagamentosProvider.prototype.remove = function (userId, cartaoId) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_PAGAMENTOS + userId + '/' + cartaoId).remove();
    };
    PagamentosProvider.prototype.save = function (userId, entity) {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_PAGAMENTOS + userId).push(entity);
    };
    PagamentosProvider.prototype.update = function (userId, entityID, entity) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_PAGAMENTOS + userId + '/' + entityID).set(entity);
    };
    PagamentosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PagamentosProvider);
    return PagamentosProvider;
}());

//# sourceMappingURL=pagamentos.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagarmeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pagarme__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pagarme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pagarme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagarmeProvider = /** @class */ (function () {
    function PagarmeProvider(afd, logger) {
        this.afd = afd;
        this.logger = logger;
        PagarmeProvider_1.PAGARME_API = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production ? PagarmeProvider_1.PAGARME_API_PROD : PagarmeProvider_1.PAGARME_API_DEV;
    }
    PagarmeProvider_1 = PagarmeProvider;
    PagarmeProvider.prototype.pagar = function (card, comprador, venda) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('API Key', PagarmeProvider_1.PAGARME_API);
            // pega os erros de validação nos campos do form e a bandeira do cartão
            var cardValidations = __WEBPACK_IMPORTED_MODULE_2_pagarme___default.a.validate({ card: card });
            if (cardValidations.card.card_number) {
                _this.logger.debug('número de cartão correto');
                // console.log('número de cartão correto');
                var transaction_1 = _this.criaTransaction(card, comprador, venda);
                _this.logger.debug('transaction' + JSON.stringify(transaction_1));
                // console.log('transaction', transaction);
                __WEBPACK_IMPORTED_MODULE_2_pagarme___default.a.client.connect({ api_key: PagarmeProvider_1.PAGARME_API })
                    .then(function (client) { return client.transactions.create(transaction_1); })
                    .then(function (transaction) {
                    _this.logger.debug(JSON.stringify(transaction));
                    console.log(transaction.id);
                    //this.processaPgto(comprador.id, transaction, valor, type);
                    resolve(transaction);
                })
                    .catch(function (error) {
                    // console.log('error', error);
                    reject('Erro ao processar o pagamento! Verifique se seus dados foram preenchidos de forma correta.');
                });
            }
            else {
                reject('Número de cartão inválido! Confira se seus dados foram preenchidos de forma correta e tente novamente.');
            }
        });
    };
    PagarmeProvider.prototype.estorno = function (credito) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_pagarme___default.a.client.connect({ api_key: PagarmeProvider_1.PAGARME_API })
                .then(function (client) { return client.transactions.refund({
                id: credito.idCompra
            })
                .then(function (response) {
                resolve(response);
            })
                .catch(function (error) {
                reject('deu ruim');
            }); });
        });
    };
    PagarmeProvider.prototype.criaTransaction = function (card, comprador, venda) {
        return {
            // criar a transação/assinatura: https://pagarme.readme.io/reference#criar-transacao
            //Valor a ser cobrado
            amount: 100 * venda.price,
            // Informações do cartão do cliente criptografadas
            //Card Hash
            card_number: card.card_number,
            card_cvv: card.card_cvv,
            card_expiration_date: card.card_expiration_date,
            card_holder_name: card.card_holder_name,
            //Forma de Pagamento
            payment_method: "credit_card",
            // "installments": "1", // Número de parcelas da transação
            // dados do comprador
            customer: {
                external_id: comprador.id,
                name: comprador.name,
                type: "individual",
                country: "br",
                email: comprador.email,
                documents: [{ "type": "cpf", "number": comprador.cpf }],
                phone_numbers: [comprador.phone]
                // "birthday": comprador.birthday
            },
            // dados de cobrança
            billing: {
                name: "Zona Azul Fortaleza",
                address: {
                    country: "br",
                    state: "ce",
                    city: "Fortaleza",
                    neighborhood: "Papicu",
                    street: "R. Joaquim Lima",
                    street_number: "150",
                    zipcode: "60175005"
                }
            },
            items: [
                {
                    id: venda.id,
                    title: venda.name,
                    unit_price: venda.price,
                    quantity: venda.qtd,
                    tangible: true,
                    date: venda.date
                }
            ]
        };
    };
    PagarmeProvider.PAGARME_API_PROD = "ak_live_fWyQBJhrvLmRTbQSuESRpBKAOuXL3I";
    PagarmeProvider.PAGARME_API_DEV = "ak_test_KkXzbnmyssmGQC2Esx6Sq6J5KilA6g";
    // static PAGARME_API_DEV: string = "ek_test_8umHvRaF2G33u8FDlzuh64kMmUqjUZ";
    PagarmeProvider.PAGARME_API = PagarmeProvider_1.PAGARME_API_DEV;
    PagarmeProvider = PagarmeProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */]])
    ], PagarmeProvider);
    return PagarmeProvider;
    var PagarmeProvider_1;
}());

//# sourceMappingURL=pagarme.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__replace_replace__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__replace_replace__["a" /* ReplacePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__replace_replace__["a" /* ReplacePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera, logger) {
        this.camera = camera;
        this.logger = logger;
    }
    CameraProvider.prototype.openMedia = function (title, actionSheetCtrl, sucessCallback, showCamera, cameraOptions) {
        var _this = this;
        if (showCamera === void 0) { showCamera = true; }
        if (cameraOptions === void 0) { cameraOptions = undefined; }
        var buttonsArr = [];
        if (!cameraOptions) {
            cameraOptions = {
                quality: 50,
                allowEdit: true,
                targetWidth: 350,
                targetHeight: 350
            };
        }
        if (showCamera) {
            buttonsArr.push({ text: 'Da Câmera', handler: function () { return _this.getMediaBase64('camera', sucessCallback, cameraOptions); } });
        }
        buttonsArr.push({ text: 'Da Galeria', handler: function () { return _this.getMediaBase64('galeria', sucessCallback, cameraOptions); } });
        buttonsArr.push({ text: 'Cancelar', role: 'cancel', handler: function () { return console.log('Cancel clicked'); } });
        var action = actionSheetCtrl.create({ title: title, buttons: buttonsArr });
        action.present();
        return action;
    };
    /**
     * media: camera, foto (galeria), video (galeria), arquivo (galeria)
     */
    CameraProvider.prototype.getMediaBase64 = function (media, sucessCallback, cameraOptions) {
        var _this = this;
        this.getMedia(media, cameraOptions).then(function (imageData) {
            var base64 = 'data:image/jpeg;base64,' + imageData;
            _this.logger.debug('foto: ' + base64);
            //this.showAlert('Camera', 'foto: '+ base64, 'error', {});
            sucessCallback(base64);
        }, function (erro) {
            _this.logger.error('Erro ao obter imagem base64: ' + JSON.stringify(erro));
        });
    };
    CameraProvider.prototype.getMedia = function (media, cameraOptionsDef) {
        var cameraOptions = {};
        switch (media) {
            case 'camera':
                cameraOptions = {
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    saveToPhotoAlbum: true,
                    cameraDirection: this.camera.Direction.FRONT,
                    correctOrientation: true
                };
                break;
            case 'galeria':
                cameraOptions = {
                    mediaType: this.camera.MediaType.PICTURE,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                    correctOrientation: true
                };
                break;
            case 'video':
                cameraOptions = {
                    mediaType: this.camera.MediaType.VIDEO,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                };
                break;
            case 'arquivo':
                cameraOptions = {
                    mediaType: this.camera.MediaType.ALLMEDIA,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                };
                break;
        }
        cameraOptions['quality'] = cameraOptionsDef['quality'];
        cameraOptions['destinationType'] = this.camera.DestinationType.DATA_URL;
        //cameraOptions['destinationType'] = Camera.DestinationType.FILE_URI;
        cameraOptions['encodingType'] = this.camera.EncodingType.JPEG;
        cameraOptions['allowEdit'] = cameraOptionsDef['allowEdit'];
        cameraOptions['targetWidth'] = cameraOptionsDef['targetWidth'];
        cameraOptions['targetHeight'] = cameraOptionsDef['targetHeight'];
        return this.camera.getPicture(cameraOptions);
    };
    CameraProvider.prototype.processWebImage = function (event, sucessCallback) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            console.log('me ...' + readerEvent);
            var imageData = readerEvent.target.result;
            var image = new Image();
            image.src = imageData;
            console.log('image.data..' + imageData[0]);
            image.onload = function (data) {
                console.log('me data ...' + JSON.stringify(data));
                // const w = data['path'].naturalWidth;
                // const h = data['path'].naturalHeight;
                var w = 200;
                var h = 200;
                sucessCallback(imageData, w, h);
            };
        };
        // this.showAlert('Camera', 'No success calback...', '', {});
        reader.readAsDataURL(event.target.files[0]);
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_uid__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logger_logger__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var UserProvider = /** @class */ (function () {
    function UserProvider(afa, afd, platform, androidPermissions, uid, uniqueDeviceID, logger, storage) {
        this.afa = afa;
        this.afd = afd;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.uid = uid;
        this.uniqueDeviceID = uniqueDeviceID;
        this.logger = logger;
        this.storage = storage;
        this.listenAuthState();
    }
    UserProvider_1 = UserProvider;
    UserProvider.prototype.byId = function (id) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_USER + id).valueChanges();
    };
    UserProvider.prototype.listUsers = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_USER).valueChanges();
    };
    UserProvider.prototype.saveUser = function (user) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_USER + user.id).update(user);
    };
    UserProvider.prototype.updateUser = function (id, itemUpdate) {
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_USER + id).update(itemUpdate);
    };
    UserProvider.prototype.updateConfig = function (id, config, value) {
        var prop = (_a = {},
            _a[config] = value,
            _a);
        return this.afd.object(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_USER + id + '/configuracao').update(prop);
        var _a;
    };
    UserProvider.prototype.updateEmail = function (newEmail) {
        return this.afa.auth.currentUser.updateEmail(newEmail);
    };
    UserProvider.prototype.updateUuidOrImei = function (id, callback) {
        // if (this.platform.is('cordova')) {
        //     if (this.platform.is('android')) {
        var _this = this;
        if (callback === void 0) { callback = undefined; }
        //         this.getImei().then(_imei => {
        //             this.logger.info('MOBILE - IMEI [ANDROID]: ' + _imei);
        //             this.updateUser(id, { uidAparelho: _imei });
        //             if (callback) {
        //                 callback(_imei);
        //             }
        //         });
        // } else {
        this.uniqueDeviceID.get().then(function (uuid) {
            _this.logger.info('MOBILE - UUID [iOS]: ' + uuid);
            _this.updateUser(id, { uidAparelho: uuid });
            if (callback) {
                callback(uuid);
            }
        });
        // }
        // } else {
        //     callback('');
        // }
    };
    UserProvider.prototype.getUserLocal = function () {
        return this.storage.get(UserProvider_1.APP_NAME + 'user');
    };
    UserProvider.prototype.saveUserLocal = function (user) {
        return this.storage.set(UserProvider_1.APP_NAME + 'user', user);
    };
    UserProvider.prototype.removeUserLocal = function () {
        return this.storage.remove(UserProvider_1.APP_NAME + 'user');
    };
    UserProvider.prototype.listenAuthState = function () {
        var _this = this;
        this.afa.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = _this.afd.object(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_USER + user.uid).valueChanges();
            }
        });
    };
    UserProvider.prototype.getImei = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasPermission, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)];
                    case 1:
                        hasPermission = (_a.sent()).hasPermission;
                        if (!!hasPermission) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)];
                    case 2:
                        result = _a.sent();
                        if (!result.hasPermission) {
                            throw new Error('Permissions required');
                        }
                        // ok, a user gave us permission, we can get him identifiers after restart app
                        return [2 /*return*/];
                    case 3: return [2 /*return*/, this.uid.IMEI];
                }
            });
        });
    };
    UserProvider.APP_NAME = 'zonaazulfortaleza_';
    UserProvider = UserProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_uid__["a" /* Uid */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_9__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UserProvider);
    return UserProvider;
    var UserProvider_1;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracaoModel; });
var ConfiguracaoModel = /** @class */ (function () {
    function ConfiguracaoModel(obj) {
        this.alerta_30_minutos = obj && obj.alerta_30_minutos || false;
        this.alerta_25_minutos = obj && obj.alerta_25_minutos || false;
        this.alerta_20_minutos = obj && obj.alerta_20_minutos || false;
        this.alerta_15_minutos = obj && obj.alerta_15_minutos || true;
        this.alerta_10_minutos = obj && obj.alerta_10_minutos || true;
        this.alerta_5_minutos = obj && obj.alerta_5_minutos || true;
        this.ativacao_expiracao = obj && obj.ativacao_expiracao || true;
    }
    return ConfiguracaoModel;
}());

//# sourceMappingURL=configuracao.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pdv; });
var Pdv = /** @class */ (function () {
    function Pdv(obj) {
        this.modalidade = obj && obj.modalidade || '';
        this.rSocial = obj && obj.rSocial || '';
        this.cnpj = obj && obj.cnpj || '';
        this.insMun = obj && obj.insMun || '';
        this.endereco = obj && obj.endereco || '';
        this.cep = obj && obj.cep || '';
        this.empPhone = obj && obj.empPhone || '';
        this.empEmail = obj && obj.empEmail || '';
        this.documento = obj && obj.documento || '';
    }
    return Pdv;
}());

//# sourceMappingURL=pdv.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditoModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);

var CreditoModel = /** @class */ (function () {
    function CreditoModel(obj) {
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        this.pagamento_id = obj && obj.pagamento_id || '';
        this.dataHoraRegistro = obj && obj.dataHoraRegistro || __WEBPACK_IMPORTED_MODULE_0_firebase_app__["database"].ServerValue.TIMESTAMP;
        this.valor = obj && obj.valor || 0;
        this.valorSemDesconto = obj && obj.valorSemDesconto || 0;
        this.desconto = obj && obj.desconto || 0;
        this.descontoPercent = obj && obj.descontoPercent || 0;
        this.cartao = obj && obj.cartao || '';
        this.numero = obj && obj.numero || '';
        this.status = obj && obj.status || 'Aquisição';
        this.autenticacao = obj && obj.autenticacao || '';
        this.idTransacao = obj && obj.idTransacao || '';
        this.idCompra = obj && obj.idCompra || '';
        this.dadoCancelamento = obj && obj.dadoCancelamento || {};
    }
    return CreditoModel;
}());

//# sourceMappingURL=credito.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionComponent */]]
        })
    ], AccordionModule);
    return AccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentoModel; });
var PagamentoModel = /** @class */ (function () {
    function PagamentoModel(obj) {
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        this.nome = obj && obj.nome || '';
        this.numero = obj && obj.numero || '';
        this.mes = obj && obj.mes || '';
        this.ano = obj && obj.ano || '';
        this.cpf = obj && obj.cpf || '';
        this.ccv = obj && obj.ccv || '';
        this.data = obj && obj.data || new Date().toISOString();
    }
    return PagamentoModel;
}());

//# sourceMappingURL=pagamento.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarProblemaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportarProblemaProvider = /** @class */ (function () {
    function ReportarProblemaProvider(afd) {
        this.afd = afd;
    }
    ReportarProblemaProvider.prototype.getModel = function (data) {
        return {
            date: new Date().toISOString(),
            subject: data.subject,
            message: data.message
        };
    };
    ReportarProblemaProvider.prototype.save = function (userId, entity) {
        entity = this.getModel(entity);
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_RELATOS + userId).push(entity);
    };
    ReportarProblemaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ReportarProblemaProvider);
    return ReportarProblemaProvider;
}());

//# sourceMappingURL=reportar-problema.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoProvider = /** @class */ (function () {
    function InfoProvider(afd) {
        this.afd = afd;
    }
    InfoProvider.prototype.getTermos = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_0__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_TERMS + '/termos').snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ $key: c.payload.key }, c.payload.val())); });
        });
    };
    InfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], InfoProvider);
    return InfoProvider;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CieloProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cielo_helper__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CieloProvider = /** @class */ (function () {
    function CieloProvider(http) {
        this.http = http;
        this.cieloHelper = new __WEBPACK_IMPORTED_MODULE_3__cielo_helper__["a" /* CieloHelper */];
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloProd.apiUrl;
            this.apiQueryUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloProd.apiQueryUrl;
            this.hearders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'MerchantId': __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloProd.merchantId,
                'MerchantKey': __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloProd.merchantKey
            });
        }
        else {
            this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloDev.apiUrl;
            this.apiQueryUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloDev.apiQueryUrl;
            this.hearders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'MerchantId': __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloDev.merchantId,
                'MerchantKey': __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cieloDev.merchantKey
            });
        }
    }
    CieloProvider.prototype.buy = function (data) {
        return this.http.post(this.apiUrl + '/1/sales', data, { headers: this.hearders })
            .toPromise();
    };
    CieloProvider.prototype.resolver = function (type, data, card) {
        var _card;
        var brand = this.cieloHelper.getBrand(card ? card.numero : false);
        data.Payment.Amount = this.cieloHelper.getAmount(data.Payment.Amount);
        if (brand || !card) {
            if (card) {
                _card = {
                    CardNumber: card.numero,
                    Holder: card.nome,
                    ExpirationDate: this.cieloHelper.getDateFormat(card.data),
                    SecurityCode: card.ccv.toString(),
                    Brand: brand
                };
            }
            if (type === 'credit') {
                data.Payment.Type = 'CreditCard';
                return this.credit(data, _card);
            }
            else if (type === 'debit') {
                data.Payment.Type = 'DebitCard';
                data.Payment.Authenticate = true;
                return this.debit(data, _card);
            }
            else if (type === 'ticket') {
                data.Payment.Type = 'Boleto';
                return this.ticket(data);
            }
            else {
                return new Promise(function (resolve, reject) {
                    return reject('Tipo de operação inválida');
                });
            }
        }
        else {
            return new Promise(function (resolve, reject) {
                reject('Bandeira de cartão não suportada');
            });
        }
    };
    CieloProvider.prototype.credit = function (data, card) {
        data.Payment.CreditCard = card;
        return this.buy(data);
    };
    CieloProvider.prototype.debit = function (data, card) {
        data.Payment.DebitCard = card;
        data.Payment.ReturnUrl = 'https://google.com';
        return this.buy(data);
    };
    CieloProvider.prototype.ticket = function (data) {
        data.Payment.ExpirationDate = this.cieloHelper.getBoletoExpirationDate();
        return this.buy(data);
    };
    CieloProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CieloProvider);
    return CieloProvider;
}());

//# sourceMappingURL=cielo.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidaysProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HolidaysProvider = /** @class */ (function () {
    function HolidaysProvider(afd) {
        this.afd = afd;
    }
    /**
     * Lista todos os feriados no firebase
     * @returns return um objecto com os feriados e as chaves correspondentes
     */
    HolidaysProvider.prototype.listAll = function () {
        return this.afd.list(__WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].PATH_DOCUMENTS_HOLIDAYS)
            .snapshotChanges()
            .map(function (snapshots) { return snapshots.map(function (holidays) {
            return holidays.payload.val();
        }); });
    };
    HolidaysProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HolidaysProvider);
    return HolidaysProvider;
}());

//# sourceMappingURL=holidays.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(733);


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_uid__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_location_accuracy__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_http__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_card_io__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_opener__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_speech_recognition__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_clipboard__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_brmasker_ionic_3__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_name_pattern_name_pattern__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_pagamentos_pagamentos__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_estacionar_estacionar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_pagarme_pagarme__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_camera_camera__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_setores_setores__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_area_area__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_creditos_creditos__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_consultar_placa_consultar_placa__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_holidays_holidays__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_browser_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_notification_notification__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_cielo_cielo__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_info_info__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_reportar_problema_reportar_problema__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_firebase_logger_firebase_logger__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pipes_pipes_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_timer_timer_module__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_accordion_accordion_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_progress_bar_progress_bar_module__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR AND IONIC 




























// PROVIDERS
























// MODULES 








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_58__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_name_pattern_name_pattern__["a" /* NamePatternPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_58__app_component__["a" /* MyApp */], {
                    // mode: 'ios',
                    backButtonText: '',
                    platforms: {
                        ios: {
                            backButtonText: '',
                        }
                    },
                    monthNames: ['janeiro', 'fevereiro', 'mar\u00e7o', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
                    monthShortNames: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
                    dayNames: ['domingo', 'segunda-feira', 'ter\u00e7a-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 's\u00e1bado'],
                    dayShortNames: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
                }, {
                    links: [
                        { loadChildren: '../pages/ajuda/ajuda.module#AjudaPageModule', name: 'AjudaPage', segment: 'ajuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/areas-modal/areas-modal.module#SetoresModalPageModule', name: 'AreasModalPage', segment: 'areas-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancelar-transacao/cancelar-transacao.module#CancelarTransacaoPageModule', name: 'CancelarTransacaoPage', segment: 'cancelar-transacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compartilhar/compartilhar.module#CompartilharPageModule', name: 'CompartilharPage', segment: 'compartilhar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comprovante/comprovante.module#ComprovantePageModule', name: 'ComprovantePage', segment: 'comprovante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-cpf-modal/confirmar-cpf-modal.module#ConfirmarCpfModalPageModule', name: 'ConfirmarCpfModalPage', segment: 'confirmar-cpf-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estacionados-modal/estacionados-modal.module#EstacionadosModalPageModule', name: 'EstacionadosModalPage', segment: 'estacionados-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comprar-creditos/comprar-creditos.module#ComprarCreditosPageModule', name: 'ComprarCreditosPage', segment: 'comprar-creditos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filtro-modal/filtro-modal.module#FiltroModalPageModule', name: 'FiltroModalPage', segment: 'filtro-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filtro-pagamento/filtro-pagamento.module#FiltroPagamentoPageModule', name: 'FiltroPagamentoPage', segment: 'filtro-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial/initial.module#InitialPageModule', name: 'InitialPage', segment: 'initial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagamentos/pagamentos.module#PagamentosPageModule', name: 'PagamentosPage', segment: 'pagamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pdv-empresa/pdv-empresa.module#PdvEmpresaPageModule', name: 'PdvEmpresaPage', segment: 'pdv-empresa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permissions/permissions-screen.module#PermissionsModalPageModule', name: 'PermissionsModalPage', segment: 'permissions-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule', name: 'RecoveryPasswordPage', segment: 'recovery-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportar-problema/reportar-problema.module#ReportarProblemaPageModule', name: 'ReportarProblemaPage', segment: 'reportar-problema', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setores-modal/setores-modal.module#SetoresModalPageModule', name: 'SetoresModalPage', segment: 'setores-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/root/root.module#RootPageModule', name: 'RootPage', segment: 'root', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/streat-view/streat-view.module#StreatViewPageModule', name: 'StreatViewPage', segment: 'streat-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculo-estacionado/veiculo-estacionado.module#VeiculoEstacionadoPageModule', name: 'VeiculoEstacionadoPage', segment: 'veiculo-estacionado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculos-modal/veiculos-modal.module#VeiculosModalPageModule', name: 'VeiculosModalPage', segment: 'veiculos-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculos/veiculos.module#VeiculosPageModule', name: 'VeiculosPage', segment: 'veiculos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagamentos-form/pagamentos-form.module#PagamentosFormPageModule', name: 'PagamentosFormPage', segment: 'pagamentos-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculos-form/veiculos-form.module#VeiculosFormPageModule', name: 'VeiculosFormPage', segment: 'veiculos-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historico/historico.module#HistoricoPageModule', name: 'HistoricoPage', segment: 'historico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tempo-restante/tempo-restante.module#TempoRestantePageModule', name: 'TempoRestantePage', segment: 'tempo-restante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comprar-creditos-pagamento/comprar-creditos-pagamento.module#ComprarCreditosPagamentoPageModule', name: 'ComprarCreditosPagamentoPage', segment: 'comprar-creditos-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estacionar/estacionar.module#EstacionarPageModule', name: 'EstacionarPage', segment: 'estacionar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_59__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_59__environments_environment__["a" /* environment */].prod : __WEBPACK_IMPORTED_MODULE_59__environments_environment__["a" /* environment */].dev),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_54__components_timer_timer_module__["a" /* TimerModule */],
                __WEBPACK_IMPORTED_MODULE_57__components_progress_bar_progress_bar_module__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_53__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_56__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_55__components_accordion_accordion_module__["a" /* AccordionModule */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_52__pipes_pipes_module__["a" /* PipesModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__["TextMaskModule"], __WEBPACK_IMPORTED_MODULE_27__pipes_name_pattern_name_pattern__["a" /* NamePatternPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_26_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_58__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_26_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_45__providers_logger_logger__["a" /* LoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_uid__["a" /* Uid */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_32__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_pagamentos_pagamentos__["a" /* PagamentosProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_setores_setores__["a" /* SetoresProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_area_area__["a" /* AreaProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_estacionar_estacionar__["a" /* EstacionarProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_pagarme_pagarme__["a" /* PagarmeProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_creditos_creditos__["a" /* CreditosProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_cads_cads__["a" /* CadsProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_browser_browser__["a" /* BrowserProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_info_info__["a" /* InfoProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_51__providers_firebase_logger_firebase_logger__["a" /* FirebaseLoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_modal_modal__["a" /* ModalProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_reportar_problema_reportar_problema__["a" /* ReportarProblemaProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_card_io__["a" /* CardIO */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_47__providers_cielo_cielo__["a" /* CieloProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_40__providers_consultar_placa_consultar_placa__["a" /* ConsultarPlacaProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_holidays_holidays__["a" /* HolidaysProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MD5Util; });
var MD5Util = /** @class */ (function () {
    function MD5Util() {
    }
    MD5Util.hashStr = function (str) {
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        str = MD5Util.Utf8Encode(str);
        x = MD5Util.ConvertToWordArray(str);
        a = 0x67452301;
        b = 0xEFCDAB89;
        c = 0x98BADCFE;
        d = 0x10325476;
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = MD5Util.FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = MD5Util.FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = MD5Util.FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = MD5Util.FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = MD5Util.FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = MD5Util.FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = MD5Util.FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = MD5Util.FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = MD5Util.FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = MD5Util.FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = MD5Util.FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = MD5Util.FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = MD5Util.FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = MD5Util.FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = MD5Util.FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = MD5Util.FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = MD5Util.GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = MD5Util.GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = MD5Util.GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = MD5Util.GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = MD5Util.GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = MD5Util.GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = MD5Util.GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = MD5Util.GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = MD5Util.GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = MD5Util.GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = MD5Util.GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = MD5Util.GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = MD5Util.GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = MD5Util.GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = MD5Util.GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = MD5Util.GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = MD5Util.HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = MD5Util.HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = MD5Util.HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = MD5Util.HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = MD5Util.HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = MD5Util.HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = MD5Util.HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = MD5Util.HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = MD5Util.HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = MD5Util.HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = MD5Util.HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = MD5Util.HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = MD5Util.HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = MD5Util.HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = MD5Util.HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = MD5Util.HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = MD5Util.II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = MD5Util.II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = MD5Util.II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = MD5Util.II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = MD5Util.II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = MD5Util.II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = MD5Util.II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = MD5Util.II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = MD5Util.II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = MD5Util.II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = MD5Util.II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = MD5Util.II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = MD5Util.II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = MD5Util.II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = MD5Util.II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = MD5Util.II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = MD5Util.AddUnsigned(a, AA);
            b = MD5Util.AddUnsigned(b, BB);
            c = MD5Util.AddUnsigned(c, CC);
            d = MD5Util.AddUnsigned(d, DD);
        }
        var temp = MD5Util.WordToHex(a) + MD5Util.WordToHex(b) + MD5Util.WordToHex(c) + MD5Util.WordToHex(d);
        return temp.toLowerCase();
    };
    MD5Util.RotateLeft = function (lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    };
    MD5Util.AddUnsigned = function (lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    };
    MD5Util.F = function (x, y, z) {
        return (x & y) | ((~x) & z);
    };
    MD5Util.G = function (x, y, z) {
        return (x & z) | (y & (~z));
    };
    MD5Util.H = function (x, y, z) {
        return (x ^ y ^ z);
    };
    MD5Util.I = function (x, y, z) {
        return (y ^ (x | (~z)));
    };
    MD5Util.FF = function (a, b, c, d, x, s, ac) {
        a = MD5Util.AddUnsigned(a, MD5Util.AddUnsigned(MD5Util.AddUnsigned(MD5Util.F(b, c, d), x), ac));
        return MD5Util.AddUnsigned(MD5Util.RotateLeft(a, s), b);
    };
    ;
    MD5Util.GG = function (a, b, c, d, x, s, ac) {
        a = MD5Util.AddUnsigned(a, MD5Util.AddUnsigned(MD5Util.AddUnsigned(MD5Util.G(b, c, d), x), ac));
        return MD5Util.AddUnsigned(MD5Util.RotateLeft(a, s), b);
    };
    ;
    MD5Util.HH = function (a, b, c, d, x, s, ac) {
        a = MD5Util.AddUnsigned(a, MD5Util.AddUnsigned(MD5Util.AddUnsigned(MD5Util.H(b, c, d), x), ac));
        return MD5Util.AddUnsigned(MD5Util.RotateLeft(a, s), b);
    };
    ;
    MD5Util.II = function (a, b, c, d, x, s, ac) {
        a = MD5Util.AddUnsigned(a, MD5Util.AddUnsigned(MD5Util.AddUnsigned(MD5Util.I(b, c, d), x), ac));
        return MD5Util.AddUnsigned(MD5Util.RotateLeft(a, s), b);
    };
    ;
    MD5Util.ConvertToWordArray = function (string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };
    ;
    MD5Util.WordToHex = function (lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };
    ;
    MD5Util.Utf8Encode = function (str) {
        str = str.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < str.length; n++) {
            var c = str.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    ;
    return MD5Util;
}());

//# sourceMappingURL=md5.util.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XML2JSONUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xml_js__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xml_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xml_js__);

var XML2JSONUtil = /** @class */ (function () {
    function XML2JSONUtil() {
    }
    XML2JSONUtil.test = function (xml) {
        xml =
            '<?xml version="1.0" encoding="utf-8"?>' +
                '<note importance="high" logged="true">' +
                '    <title>Happy</title>' +
                '    <todo>Work</todo>' +
                '    <todo>Play</todo>' +
                '</note>';
        // var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
        // var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
        // console.log(result1, '\n', result2);
    };
    /**
     * Funcao usada na callback do HTTP POST
     */
    XML2JSONUtil.parseHttpXmlResponse = function (xml) {
        // console.log('RESP XML RAW', xml);
        var prettyXml = XML2JSONUtil.limpaCampos(xml);
        // console.log('RESP XML PRETTY', prettyXml);
        var rawJson = XML2JSONUtil.parse(prettyXml);
        // console.log('RESP JSON RAW', rawJson);
        var prettyJson = XML2JSONUtil.parseResponse(rawJson);
        console.log('RESP JSON PRETTY', prettyJson);
        return prettyJson;
    };
    /**
     * Converte de XML para JSON nao legivel
     */
    XML2JSONUtil.limpaCampos = function (xml, limitador) {
        if (limitador === void 0) { limitador = '</Resultado'; }
        return xml.substring(0, xml.indexOf(limitador));
    };
    /**
     * Converte de XML para JSON nao legivel
     */
    XML2JSONUtil.parse = function (xml) {
        // console.log('RESP JSON', xml);
        return __WEBPACK_IMPORTED_MODULE_0_xml_js__["xml2js"](xml);
    };
    /**
     * Converte o JSON do XML para o JSON mais legivel
     */
    XML2JSONUtil.parseResponse = function (json) {
        var result = {};
        console.log('Json', json.elements);
        json.elements.forEach(function (_element) {
            // const resultado = _element.name; // Tag Resultado
            // console.log('resultado',resultado);
            _element.elements.forEach(function (_subElement) {
                var tag = _subElement.name; // Tag atributo
                // console.log('tag',tag);
                if (_subElement.elements) {
                    var textArr = _subElement.elements.map(function (_item) { return _item ? _item.text : undefined; });
                    // console.log('textArr',textArr);
                    var text = textArr.length > 0 ? textArr[0].trim() : undefined;
                    if (XML2JSONUtil.isNumeric(text)) {
                        if (tag !== 'autenticacao') {
                            text = parseInt(text);
                        }
                    }
                    else if (text === 'true') {
                        text = true;
                    }
                    else if (text === 'false') {
                        text = false;
                    }
                    result[tag] = text;
                }
            });
        });
        return result;
    };
    XML2JSONUtil.isNumeric = function (num) {
        return !isNaN(num);
    };
    return XML2JSONUtil;
}());

//# sourceMappingURL=xml2json.util.js.map

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    cielo: false,
    production: false,
    simular_l2: false,
    isDebugMode: false,
    version: "2.0.0",
    middleware_cors: 'https://us-central1-zonaazulfortaleza-prod.cloudfunctions.net/requisicao_amc',
    dev: {
        apiKey: "AIzaSyD0LQ-V04mrcdgPfOzkd01vkUcEAzmgDBA",
        authDomain: "zonaazulfortaleza-temp.firebaseapp.com",
        databaseURL: "https://zonaazulfortaleza-temp.firebaseio.com",
        projectId: "zonaazulfortaleza-temp",
        storageBucket: "zonaazulfortaleza-temp.appspot.com",
        messagingSenderId: "699166518123"
    },
    prod: {
        apiKey: "AIzaSyBnFP7PFiWgUX3kKl5RBx6LGuaAGs4aRPc",
        authDomain: "zonaazulfortaleza-prod.firebaseapp.com",
        databaseURL: "https://zonaazulfortaleza-prod.firebaseio.com",
        projectId: "zonaazulfortaleza-prod",
        storageBucket: "zonaazulfortaleza-prod.appspot.com",
        messagingSenderId: "722683236957"
    },
    cieloDev: {
        merchantId: 'e0b693cf-4734-465e-bfc8-83b1985e1dcf',
        merchantKey: 'QFROPTJJCGHJNZTATOBLMVXQFUMKLRMUYWIDRFXN',
        apiUrl: 'https://apisandbox.cieloecommerce.cielo.com.br',
        apiQueryUrl: 'https://apiquerysandbox.cieloecommerce.cielo.com.br'
    },
    cieloProd: {
        merchantId: '5e15d350-7701-4bcc-b08e-72dc473686ce',
        merchantKey: 'n0kbhlvF92sj2vgtvJJUFHcUJOe5qnn0xgnvvNOy',
        apiUrl: 'https://api.cieloecommerce.cielo.com.br',
        apiQueryUrl: 'https://apiquery.cieloecommerce.cielo.com.br'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cad__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(43);
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










var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(userProvider, cadsUserProvider, cadsProvider, logger, modalCtrl, menu, events) {
        var _this = this;
        this.userProvider = userProvider;
        this.cadsUserProvider = cadsUserProvider;
        this.cadsProvider = cadsProvider;
        this.logger = logger;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.events = events;
        this.cads = 0;
        this.cadsUsados = 0;
        this.cad = new __WEBPACK_IMPORTED_MODULE_3__models_cad__["a" /* CadModel */]();
        this.name = '';
        this.subscription = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
        this.carregaUsuarioComCADs();
        // listen quando o usuário se logar
        this.events.subscribe('user:load', function (userId) {
            _this.logger.info('**user-info** user:load | userId: ' + userId);
            _this.userProvider.byId(userId).take(1).subscribe(function (user) {
                if (user) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](user);
                    console.log(_this.user.name);
                    _this.logger.info('user: ' + JSON.stringify(_this.user));
                    _this.name = JSON.stringify(_this.user);
                    _this.subCadsUser = _this.cadsUserProvider.getCads(_this.user.id).subscribe(function (value) {
                        _this.cadsUsados = 0;
                        _this.cads = 0;
                        value.map(function (value) {
                            if (value.key == "qtdCadsUsados") {
                                _this.cadsUsados = value.item;
                            }
                            else {
                                _this.cads += value.item.qtdCads;
                            }
                        });
                    });
                }
            });
        });
        this.cadsProvider.find().take(1).subscribe(function (item) {
            item.map(function (item) {
                _this.cad = new __WEBPACK_IMPORTED_MODULE_3__models_cad__["a" /* CadModel */](item.cad);
            });
        });
    }
    UserInfoComponent.prototype.namePattern = function (name) {
        var arr = name.split(' ');
        var keep = arr[1][0].toUpperCase() != arr[1][0];
        return arr.slice(0, keep ? 3 : 2).join(' ');
    };
    UserInfoComponent.prototype.carregaUsuarioComCADs = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                if (user) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](user);
                    _this.logger.info('user: ' + JSON.stringify(_this.user));
                    _this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */](user);
                    _this.name = _this.namePattern(_this.user.name.toString());
                    console.log(name);
                    _this.subCadsUser = _this.cadsUserProvider.getCads(_this.user.id).subscribe(function (value) {
                        _this.cadsUsados = 0;
                        _this.cads = 0;
                        value.map(function (value) {
                            if (value.key == "qtdCadsUsados") {
                                _this.cadsUsados = value.item;
                            }
                            else {
                                _this.cads += value.item.qtdCads;
                            }
                        });
                    });
                }
            });
        });
    };
    UserInfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.add(this.subCadsUser);
        this.subscription.unsubscribe();
    };
    UserInfoComponent.prototype.cadastrarPDV = function () {
        var page = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__environments_constants__["a" /* Constants */].ROOT_PAGE.name, { fromPage: "pdv", user: this.user, backoption: 'ok' });
        page.present();
        this.menu.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], UserInfoComponent.prototype, "nav", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-info',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\components\user-info\user-info.html"*/'<ion-item class="user-menu-item" no-lines>\n\n  <ion-buttons end>\n\n    <button ion-button clear class="edt-button" (click)="goProfile()" icon-only color="white">\n\n      <ion-icon ios="ios-create-outline"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  <img src="{{user?.photo}}" class="img" />\n\n  <p class="name">{{name}}</p>\n\n  <p class="profile" text-lowercase>{{user?.email}}</p>\n\n  <p *ngIf="user?.profile !== \'user\'">{{user?.profile.toUpperCase()}}</p>\n\n  <p *ngIf="cads == null || cadsUsados == null || (cads - cadsUsados) == 0" class="cads-credits">Saldo: 0 CAD | R$ 0,00\n\n  </p>\n\n  <p *ngIf="(cads - cadsUsados) > 0 && (cads - cadsUsados) % 2 == 0" class="cads-credits">Saldo: {{cads - cadsUsados}}\n\n    CADs | R$ {{(cads - cadsUsados) * cad.valor_unitario}},00</p>\n\n  <p *ngIf="(cads - cadsUsados) > 0 && (cads - cadsUsados) % 2 == 1" class="cads-credits">Saldo: {{cads - cadsUsados}}\n\n    CAD | R$ {{(cads - cadsUsados) * cad.valor_unitario}},00</p>\n\n</ion-item>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\components\user-info\user-info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cads_user_cads_user__["a" /* CadsUserProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacionar_estacionar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimerComponent = /** @class */ (function () {
    function TimerComponent(estacionarProvider, userProvider, logger) {
        this.estacionarProvider = estacionarProvider;
        this.userProvider = userProvider;
        this.logger = logger;
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            _this.userID = userID;
            _this.logger.info('time: ' + _this.time);
            _this.logger.info('now: ' + _this.now);
            _this.logger.info('user: ' + _this.userID);
            _this.logger.info('placa: ' + _this.placa);
            console.log(_this.userID + ' ' + _this.placa);
            if (_this.time) {
                _this.time = (_this.time - _this.now) / 1000;
                if (_this.time > 0.0) {
                    var interval_1 = setInterval(function () {
                        _this.time--;
                        //console.log(this.time)
                        if (_this.time <= 0.0) {
                            // TODO: break no setinterval! (pesquisar na internet)
                            _this.estacionarProvider.atualizaStatusPeloTempoExpirado(_this.userID, _this.placa, function () {
                                _this.status = false;
                            });
                            clearInterval(interval_1);
                        }
                    }, 1000);
                }
                else {
                    _this.estacionarProvider.atualizaStatusPeloTempoExpirado(_this.userID, _this.placa, function () {
                        _this.status = false;
                    });
                }
            }
            else if (_this.status && _this.decorrido) {
                _this.decorrido = (_this.now - _this.decorrido) / 1000;
                if (_this.decorrido) {
                    setInterval(function () {
                        _this.decorrido++;
                    }, 1000);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('decorrido'),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "decorrido", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('now'),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "now", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('placa'),
        __metadata("design:type", String)
    ], TimerComponent.prototype, "placa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
        __metadata("design:type", Boolean)
    ], TimerComponent.prototype, "status", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timer',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\components\timer\timer.html"*/'<ion-label *ngIf="time > 0" class="time">\n\n    <!--<p>\n\n        Restante\n\n    </p>-->\n\n    {{time * 1000 | date: \'HH:mm:ss\' : \'+0000\'}}\n\n</ion-label>\n\n\n\n<ion-label *ngIf="time === 0 || time < 0" class="time">\n\n    00:00:00\n\n</ion-label>\n\n\n\n<ion-label class="time" *ngIf="decorrido > 0">\n\n   <!-- <p>\n\n        Decorrido\n\n    </p>-->\n\n    {{decorrido * 1000 | date: \'HH:mm:ss\' : \'+0000\'}}\n\n</ion-label>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\components\timer\timer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_estacionar_estacionar__["a" /* EstacionarProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */]])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('percent'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "percent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "color", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\components\progress-bar\progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n\n<div class="clock">\n\n  <svg>\n\n    <circle cx="60" cy="60" r="60" [style.width]="value + \'%\'"></circle>\n\n    <circle cx="60" cy="60" r="60" [style.width]="percent + \'%\'" [style.background-color]="color"></circle>\n\n  </svg>\n\n  <label class="time">{{progress * 1000 | date: \'HH:mm:ss\' : \'+0000\'}}</label>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\components\progress-bar\progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CustomCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomCardComponent = /** @class */ (function () {
    function CustomCardComponent() {
        console.log('Hello CustomCardComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color'),
        __metadata("design:type", Object)
    ], CustomCardComponent.prototype, "color", void 0);
    CustomCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-card',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\components\custom-card\custom-card.html"*/'<!-- Generated template for the CustomCardComponent component -->\n\n<div class="card" [style.border-left-color]="color">\n\n  \n\n</div>\n\n'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\components\custom-card\custom-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CustomCardComponent);
    return CustomCardComponent;
}());

//# sourceMappingURL=custom-card.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
        this.text = 'Hello World';
    }
    LoadingSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading-spinner',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\components\loading-spinner\loading-spinner.html"*/'<div class="sk-circle">\n\n  <div class="sk-circle1 sk-child"></div>\n\n  <div class="sk-circle2 sk-child"></div>\n\n  <div class="sk-circle3 sk-child"></div>\n\n  <div class="sk-circle4 sk-child"></div>\n\n  <div class="sk-circle5 sk-child"></div>\n\n  <div class="sk-circle6 sk-child"></div>\n\n  <div class="sk-circle7 sk-child"></div>\n\n  <div class="sk-circle8 sk-child"></div>\n\n  <div class="sk-circle9 sk-child"></div>\n\n  <div class="sk-circle10 sk-child"></div>\n\n  <div class="sk-circle11 sk-child"></div>\n\n  <div class="sk-circle12 sk-child"></div>\n\n</div>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\components\loading-spinner\loading-spinner.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());

//# sourceMappingURL=loading-spinner.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(renderer, userProvider) {
        this.renderer = renderer;
        this.userProvider = userProvider;
        this.accordionExpanded = false;
        this.optionSelected = 'Sim';
        this.checkedSim = true;
        this.checkedNao = false;
    }
    AccordionComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.checkboxs.nativeElement, "webkitTransition", "max-height 100ms, padding 500ms");
        if (this.value) {
            this.optionSelected = 'Sim';
            this.checkedNao = false;
            this.checkedSim = true;
        }
        else {
            this.optionSelected = 'Não';
            this.checkedSim = false;
            this.checkedNao = true;
        }
    };
    AccordionComponent.prototype.toggleAccordion = function () {
        if (this.accordionExpanded) {
            this.renderer.setElementStyle(this.checkboxs.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.checkboxs.nativeElement, "display", "none");
        }
        else {
            this.renderer.setElementStyle(this.checkboxs.nativeElement, "max-height", "200px");
            this.renderer.setElementStyle(this.checkboxs.nativeElement, "display", "block");
        }
        this.accordionExpanded = !this.accordionExpanded;
    };
    AccordionComponent.prototype.configuracaoSelecionada = function (option) {
        if (option === 'Sim') {
            this.optionSelected = option;
            this.checkedNao = false;
            this.checkedSim = true;
            this.updateConfiguration(true);
        }
        else if (option === 'Não') {
            this.optionSelected = option;
            this.checkedSim = false;
            this.checkedNao = true;
            this.updateConfiguration(false);
        }
    };
    AccordionComponent.prototype.updateConfiguration = function (optionValue) {
        switch (this.configuration) {
            case __WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].ATIVATION_EXPIRATION:
                this.user.configuracao.ativacao_expiracao = optionValue;
                this.update(this.user);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].ALERT_FIVE_MINUTES:
                this.user.configuracao.alerta_5_minutos = optionValue;
                this.update(this.user);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].ALERT_TEN_MINUTES:
                this.user.configuracao.alerta_10_minutos = optionValue;
                this.update(this.user);
                break;
            case __WEBPACK_IMPORTED_MODULE_2__environments_constants__["a" /* Constants */].ALERT_FIVETEEN_MINUTES:
                this.user.configuracao.alerta_15_minutos = optionValue;
                break;
        }
    };
    AccordionComponent.prototype.update = function (user) {
        this.userProvider.saveUser(user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("title"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("configuration"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "configuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("value"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("user"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("checkboxs"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "checkboxs", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'accordion',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\components\accordion\accordion.html"*/'<ion-row class="row-items">\n\n  <ion-col class="col-items">\n\n    <ion-item class="item-info" no-lines>\n\n      <ion-icon name="ios-arrow-down" class="item-icon" (click)="toggleAccordion()"></ion-icon>\n\n      <h6>{{title}}</h6>\n\n      <h4>{{optionSelected}}</h4>\n\n    </ion-item>\n\n    <div #checkboxs class="checkboxs">\n\n      <ion-item no-lines class="item-checkboxs">\n\n        <ion-label>Sim</ion-label>\n\n        <ion-radio color="blue" [checked]="checkedSim" id="configuracao-sim" (click)="configuracaoSelecionada(\'Sim\')"\n\n          item-left mode="md"></ion-radio>\n\n      </ion-item>\n\n      <ion-item no-lines class="item-checkboxs">\n\n        <ion-label>Não</ion-label>\n\n        <ion-radio color="blue" [checked]="checkedNao" id="configuracao-nao" (click)="configuracaoSelecionada(\'Não\')"\n\n          item-left mode="md"></ion-radio>\n\n      </ion-item>\n\n    </div>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\components\accordion\accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__providers_user_user__["a" /* UserProvider */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (item, replace, replacement) {
        if (item == null)
            return "";
        item = item.replace(replace, replacement);
        return item;
    };
    ReplacePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replace',
        })
    ], ReplacePipe);
    return ReplacePipe;
}());

//# sourceMappingURL=replace.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CieloHelper; });
var CieloHelper = /** @class */ (function () {
    function CieloHelper() {
    }
    CieloHelper.prototype.getBrand = function (number) {
        if (number) {
            if (number[0] == "4") {
                return "Visa";
            }
            else if (number[0] == "3") {
                if (number[1] == "4" || number[1] == "7") {
                    return "Amex";
                }
                else if (number[1] == "8") {
                    return "Hipercard";
                }
            }
            else if (number[0] == "5") {
                if (number[1] == "1" || number[1] == "2" || number[1] == "3" || number[1] == "4" || number[1] == "5") {
                    return "Master";
                }
            }
            else if (number.substring(0, 1) == "60") {
                return "Hipercard";
            }
            else if (number.substring(0, 3) == "6011" || number.substring(0, 2) == "622" || number.substring(0, 1) == "64" || number.substring(0, 1) == "65") {
                return "Discover";
            }
            else if (number.substring(0, 3) == "2221" || number.substring(0, 3) == "2720") {
                return "Master";
            }
            else {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    };
    CieloHelper.prototype.getDateFormat = function (date) {
        var _date = new Date(date);
        var month = _date.getMonth() + 1;
        var year = _date.getFullYear();
        if (month < 10) {
            return "0" + month.toString() + '/' + year.toString();
        }
        else {
            return month.toString() + '/' + year.toString();
        }
    };
    CieloHelper.prototype.getBoletoExpirationDate = function () {
        var date = new Date();
        date.setDate(date.getDate() + 3);
        return date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString();
    };
    CieloHelper.prototype.getAmount = function (val) {
        return val * 100;
    };
    CieloHelper.types = {};
    return CieloHelper;
}());

//# sourceMappingURL=cielo-helper.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamePatternPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the NamePatternPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NamePatternPipe = /** @class */ (function () {
    function NamePatternPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    NamePatternPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var arr = value.split(' ');
        var keep = arr[1][0].toUpperCase() != arr[1][0];
        return arr.slice(0, keep ? 3 : 2).join(' ');
    };
    NamePatternPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'namePattern',
        })
    ], NamePatternPipe);
    return NamePatternPipe;
}());

//# sourceMappingURL=name-pattern.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultarPlacaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import *  as sinesp from "sinesp-nodejs" ;
/**
 * https://github.com/bbarreto/sinesp-nodejs
 * https://github.com/wgenial/consulta-placa-nodejs
 */
var ConsultarPlacaProvider = /** @class */ (function () {
    function ConsultarPlacaProvider(http) {
        this.http = http;
        console.log('ConsultarPlacaProvider Provider');
    }
    ConsultarPlacaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConsultarPlacaProvider);
    return ConsultarPlacaProvider;
}());

//# sourceMappingURL=consultar-placa.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimerModule = /** @class */ (function () {
    function TimerModule() {
    }
    TimerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]]
        })
    ], TimerModule);
    return TimerModule;
}());

//# sourceMappingURL=timer.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            exports: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());

//# sourceMappingURL=progress-bar.module.js.map

/***/ })

},[443]);
//# sourceMappingURL=main.js.map