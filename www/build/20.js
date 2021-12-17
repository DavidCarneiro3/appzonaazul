webpackJsonp([20],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal__ = __webpack_require__(814);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__principal__["a" /* PrincipalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__principal__["a" /* PrincipalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());

//# sourceMappingURL=principal.module.js.map

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

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* unused harmony export LatLng */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cad__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_setores_setores__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_area_area__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_functions_util__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_estacionar_estacionar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(200);
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
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams, alertCtrl, loadingCtrl, estacionarProvider, androidPermission, tempoEstacionadoProvider, userProvider, cadsUserProvider, cadProvider, veiculoProvider, logger, veiculosProvider, setoresProvider, areaProvider, geolocation, menu, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.estacionarProvider = estacionarProvider;
        this.androidPermission = androidPermission;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        this.userProvider = userProvider;
        this.cadsUserProvider = cadsUserProvider;
        this.cadProvider = cadProvider;
        this.veiculoProvider = veiculoProvider;
        this.logger = logger;
        this.veiculosProvider = veiculosProvider;
        this.setoresProvider = setoresProvider;
        this.areaProvider = areaProvider;
        this.geolocation = geolocation;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.tempoCurrent = Date.now();
        this._estacionados = [];
        this.loadObj = true;
        this.city = 'Fortaleza';
        this.price = 0;
        this.cads = 0;
        this.cad = new __WEBPACK_IMPORTED_MODULE_2__models_cad__["a" /* CadModel */]();
        this.qtdCadsUser = 0;
        this.qtdCadsUsados = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.desconto = 0;
        this.cielo = true;
        this.classes = [{ class1: 'class1', class2: 'class2', class3: 'class3', class4: 'class4', class5: 'class5' }];
        this.allSetores = [];
        this.cadsUsados = 0;
        this.showSpinner = true;
        this.selectOptions = {
            title: 'Cidade',
            subTitle: 'Escolha sua cidade',
            mode: 'ios'
        };
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
            _this.showSpinner = false;
            //console.log(resp.coords)
            //console.log(nearSetor)
            //this.navCtrl.setRoot(Constants.ESTACIONAR_PAGE.name,{area: nearSetor[0].area, codigo: nearSetor[0].codigo});
        });
        this.getAllSetores();
        this.carregaUsuarioComCADs();
        this.events.publish('update_saldo', 'update');
        this.horaRegistro = Date.now();
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
            // console.log('now firebase: ' + JSON.stringify(data));
            // console.log('now local: ' + this.tempoCurrent);
            if (data && data.now) {
                _this.tempoCurrent = data.now;
            }
            _this.userProvider.getUserLocal().then(function (userID) {
                if (userID) {
                    _this.cadsUserProvider.findQtdCads(userID).take(1).subscribe(function (value) {
                        value.map(function (cads) {
                            if (cads.key == "qtdCadsUsados") {
                                _this.qtdCadsUsados = cads.item;
                            }
                            else {
                                _this.qtdCadsUser += cads.item.qtdCads;
                            }
                        });
                    });
                    _this.estacionarProvider.findByUser(userID).subscribe(function (_values) {
                        console.log(_values);
                        _this._estacionados = [];
                        if (_values.length > 0) {
                            console.log('aqui entrou');
                            _values.map(function (_item) {
                                console.log(_item);
                                _this.logger.info('estacionado: ' + _item.estacionar.tempoEstacionado + ' | ' + new Date(_item.estacionar.tempoEstacionado));
                                _this.validaRenovar(_item.estacionar);
                                if (_item.estacionar.tempoEstacionado - _this.tempoCurrent >= 0) {
                                    console.log('entrou');
                                    _this._estacionados = [];
                                    _this.getVeiculo(_item.estacionar.veiculo_id, userID)
                                        .take(1).subscribe(function (_veiculo) {
                                        _this.loadObj = false;
                                        _this.showSpinner = false;
                                        _item.estacionar.veiculo = _veiculo;
                                        _this.estacionar = _item.estacionar;
                                        /*this.veiculoSelecionado = _item.estacionar.veiculo;
                                        this.veiculo_id = _item.estacionar.veiculo.id;
                                        this.placa = _item.estacionar.veiculo.placa;
                                        this.veiculo_tipo = _item.estacionar.veiculo.tipo_veiculo;
                                        this.veiculo_marca = _item.estacionar.veiculo.marca;
                                        this.veiculo_modelo = _item.estacionar.veiculo.modelo;
                                        this.dataHoraRegistro = _item.estacionar.dataHoraRegistro;
                                        this.horario = _item.estacionar.comprovante.horario;
                                        this.tempoComprado = _item.estacionar.tempoComprado;
                                        this.qtd = _item.estacionar.qtd;
                                        this.valor = _item.estacionar.comprovante.valor;
                                        this.amc = _item.estacionar.comprovante.numberAuth;*/
                                        _this.logger.info(_item);
                                        console.log(_this.estacionar);
                                        _this._estacionados.push(_item);
                                    });
                                }
                                else {
                                    _this.loadObj = false;
                                    _this.showSpinner = false;
                                }
                            });
                            // this.loadObj = false;
                            //  this.showSpinner1 = false;
                            console.log(_this._estacionados);
                        }
                        else {
                            _this.loadObj = false;
                            _this.showSpinner = false;
                        }
                    }, function (error) {
                        _this.showSpinner = false;
                        _this.loadObj = false;
                    });
                }
            });
        });
    };
    PrincipalPage.prototype.checaEstacionado = function (item) {
        //console.log(this._estacionados)
        return this._estacionados.find(function (x) {
            if (x.estacionar.veiculo.placa == item) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    PrincipalPage.prototype.validaRenovar = function (estacionar) {
        estacionar.renovar = true;
        if (estacionar.qtd === 2) {
            estacionar.renovar = false;
        }
        else if (estacionar.tempoComprado === 300) {
            estacionar.renovar = false;
        }
    };
    PrincipalPage.prototype.getVeiculo = function (veiculo_id, userID) {
        return this.veiculoProvider.findByVeiculo(veiculo_id, userID);
    };
    PrincipalPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.showSpinner = true;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.userProvider.byId(userID).take(1).subscribe(function (_user) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](_user);
                    _this.veiculosProvider.findByUser(_this.user.id).take(1).subscribe(function (_data) {
                        _this.list = _data;
                    });
                    // console.log(this.list)
                    _this.showSpinner = false;
                    _this.checkPermission();
                    _this.showPopupCpf();
                });
                return true;
            }
        });
    };
    PrincipalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // console.log('ionViewDidEnter - principal')
        // this.events.publish('update_saldo', 'update');
        this.tempoCurrent = Date.now();
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
            // console.log('now firebase: ' + JSON.stringify(data));
            // console.log('now local: ' + this.tempoCurrent);
            if (data && data.now) {
                _this.tempoCurrent = data.now;
            }
        });
    };
    // VERIFICA SE O APP POSSUI AUTORIZAÇÃO PARA A LEITURA DO TELEFONE E PEGA O IMEI DO CELULAR
    PrincipalPage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermission.checkPermission(this.androidPermission.PERMISSION.READ_PHONE_STATE)
            .then(function (result) {
            if (!result.hasPermission) {
                var modalPermission_1 = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'phone' });
                modalPermission_1.present().then(function () {
                    modalPermission_1.onWillDismiss(function () {
                        _this.androidPermission.checkPermission(_this.androidPermission.PERMISSION.ACESS_COARSE_LOCATION
                            && _this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION)
                            .then(function (result) {
                            if (!(result.hasPermission)) {
                                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'home-page' });
                                modal.present();
                            }
                        });
                    });
                });
            }
            else {
                _this.userProvider.updateUuidOrImei(_this.useID, function (uuid) {
                });
                _this.androidPermission.checkPermission(_this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION)
                    .then(function (location) {
                    if (!location.hasPermission) {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'home-page' });
                        modal.present();
                    }
                });
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    PrincipalPage.prototype.askPermission = function () {
        var permissionModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'phone' });
        permissionModal.present()
            .then(function () { })
            .catch(function (err) { });
    };
    PrincipalPage.prototype.showPopupCpf = function () {
        //   console.log('cpf', this.user);
        if (this.user && ((this.user.cpf === undefined) || (this.user.cpf !== undefined && this.user.cpf === ""))) {
            this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].CONFIRMA_CPF_PAGE.name, { 'user': this.user }, { cssClass: 'modal-alert' })
                .present();
        }
    };
    PrincipalPage.prototype.carregaUsuarioComCADs = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                if (user) {
                    _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](user);
                    _this.logger.info('user: ' + JSON.stringify(_this.user));
                    _this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](user);
                    //this.name = this.namePattern(this.user.name.toString())
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
                                //this.price += (value.item.qtdCads*2);
                            }
                        });
                        _this.price = (_this.cads - _this.cadsUsados) * 2;
                    });
                }
            });
        });
    };
    PrincipalPage.prototype.showCloseSetor = function (item) {
        console.log('Item', item);
        var nearSetor = this.calculaDistancia(this.lat, this.long);
        nearSetor.sort(function (a, b) { return a.distance - b.distance; });
        this.showSetor(nearSetor[0].area, nearSetor[0].codigo, item);
        //console.log(item)
    };
    /**
         * Adiciona todos os setores em uma lista , de modo a ter a coordenadas para abrir o mais próximo
         */
    PrincipalPage.prototype.getAllSetores = function () {
        var _this = this;
        this.areaProvider.getAreas().take(1).subscribe(function (_areas) {
            _this.setoresProvider.getSetoresByLocation().subscribe(function (_setores) {
                _setores.forEach(function (setor) {
                    for (var _setor in setor.setores) {
                        var area = _areas.find(function (item) { return item.area.codigo == setor.key; });
                        //console.log(area.area)
                        if (area.area) { }
                        var set = {
                            "area": area.area,
                            "setor": setor.setores[_setor]
                        };
                        _this.allSetores.push(set);
                    }
                });
            });
        });
    };
    /**
         * Calcula a distancia de um ponto indicado com todos os setores
         * @param lat latitude do ponto a ser calculado a distancia  do setor
         * @param long  longitude do ponto a ser calculado a distancia do setor
         * @returns lista de objectos contendo a distancia , area e o codigo do setor
         */
    PrincipalPage.prototype.calculaDistancia = function (lat, long) {
        var myPosition = new LatLng(lat, long);
        var setores = [];
        this.allSetores.forEach(function (setor) {
            var _setor = new LatLng(setor.setor.latInicio, setor.setor.lngInicio);
            var distance = __WEBPACK_IMPORTED_MODULE_12__util_functions_util__["a" /* FunctionsUtil */].getDistanceBetweenPoints(myPosition, _setor, 'km').toFixed(3);
            var open = {
                "distance": "" + distance,
                "area": setor.area,
                "codigo": setor.setor.codigo
            };
            setores.push(open);
        });
        return setores;
    };
    PrincipalPage.prototype.showSetor = function (area, setor, veiculo) {
        var _this = this;
        this.setoresProvider.byId(area.codigo, setor)
            .subscribe(function (data) {
            //this.mapUtil.findSetor(HomePage.map, data, area);
            _this.setorNome = data;
            console.log(data);
            console.log('Area código: ' + area.codigo);
            console.log('Area nome: ' + area.endereco);
            console.log('Setor código: ' + setor);
            console.log('Setor nome: ' + _this.setorNome.nome);
            console.log(veiculo);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].ESTACIONAR_PAGE.name, { 'area': area.codigo, 'setor': setor, 'area-nome': area.codigo, 'setor-nome': _this.setorNome.nome, 'fromPage': 'principal', 'veiculo': veiculo, qtdCads: (_this.cads - _this.cadsUsados) });
        }, function (error) {
        });
        //this.navCtrl.setRoot(Constants.ESTACIONAR_PAGE.name,{area};
    };
    PrincipalPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].HOME_PAGE.name);
    };
    PrincipalPage.prototype.goTempoRest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name);
    };
    PrincipalPage.prototype.goVeiculos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].VEICULOS_FORM_PAGE.name, { userId: this.user.id, 'veiculoAllArr': this.list });
    };
    PrincipalPage.prototype.goComprar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { 'fromPage': 'principal' });
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-principal',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/principal/principal.html"*/'<ion-header no-border>\n  <ion-navbar color="header" no-border>\n      \n      <button ion-button icon-only menuToggle>\n          <ion-icon class="header-icon" name="menu"></ion-icon>\n      </button>\n      <ion-title class="title-header">\n       \n        <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n          <ion-option value="Fortaleza">Fortaleza</ion-option>\n        </ion-select>\n      </ion-title>\n\n      <ion-buttons end>\n          <button class="pin-icon" ion-button icon-only (click)="goHome()">\n              <img src="assets/icones/pin-white.svg" alt="">\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <loading-spinner *ngIf="showSpinner"></loading-spinner> \n  <div class="img-top"  *ngIf="!showSpinner">\n    <img src="assets/imgs/default.png" alt="" class="nav-img">\n    <h2 class="title">{{(cads-cadsUsados)}} CADS</h2>\n    <p class="price">R${{(cads-cadsUsados)*2}},00</p>\n    <button ion-button class="btn-comprar" (click)="goComprar()"><img src="assets/icones/shopping-cart-white.svg"></button>\n  </div>\n  <div class="content">\n    <div></div>\n    <div class="{{\'class\'+i}}" *ngFor="let item of list; let i = index">\n      \n      <ion-item no-lines mode="md" class="list-item">\n        <loading-spinner *ngIf="showSpinner"></loading-spinner> \n          <ion-label text-left class="title-select" mode="md">{{item?.veiculo.placa || placa}}\n            <button ion-button small icon-end *ngIf="!checaEstacionado(item?.veiculo.placa)" class="btn-estacionar" (click)="showCloseSetor(item)">Estacionar <img src="assets/icones/estacionamento-white.svg" alt="">\n            </button>\n            <button ion-button small style="background-color: #27AE60;" icon-end *ngIf="checaEstacionado(item?.veiculo.placa)" class="btn-estacionar" (click)="goTempoRest()">\n              <div class="timer"> \n                <!-- <timer [decorrido]="estacionar?.dataHoraRegistro" \n                [now]="tempoCurrent"\n                [placa]="estacionar?.veiculo_id" \n                [status]="estacionar?.status"></timer>  -->\n                Estacionado\n              </div>\n              <img style="margin-top: 3px; left: -2px; width: 14px; height: 14px;" src="assets/icones/arrow-fwd-white.svg" alt="">\n            </button>\n            <p>{{item.veiculo.marca || item.veiculo.nodelo | uppercase}}</p>\n          </ion-label>\n          \n      </ion-item>\n      <!--\n          <ion-select [(ngModel)]="placa" mode="md" cancelText="Cancelar" okText="Ok" (ionChange)="selecionarVeiculo($event)" [disabled]="fromRenovar">\n          <ion-option *ngFor="let item of veiculos" value="{{item.veiculo.placa}}" (click)="selecionarVeiculo($event)">{{item?.veiculo?.placa}}</ion-option>\n      </ion-select> \n      -->\n    </div>\n    <button ion-button clear class="btn-add" (click)="goVeiculos()">Adicionar Veiculos <ion-icon name="add"></ion-icon></button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_15__providers_estacionar_estacionar__["a" /* EstacionarProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_14__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_setores_setores__["a" /* SetoresProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_area_area__["a" /* AreaProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return LatLng;
}());

//# sourceMappingURL=principal.js.map

/***/ })

});
//# sourceMappingURL=20.js.map