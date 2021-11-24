import { Component } from '@angular/core';
import {
    AlertController,
    IonicPage,
    Loading,
    LoadingController,
    MenuController,
    NavController,
    NavParams,
    ViewController,
    ToastController
} from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { Clipboard } from '@ionic-native/clipboard';
import 'rxjs/add/operator/take';

import { PagamentoModel } from "../../models/pagamento";
import { UserPagarmeModel } from "../../models/pagarme/user-pagarme";
import { VendaPagarmeModel } from "../../models/pagarme/venda-pagarme";
import { CardPagarmeModel } from "../../models/pagarme/card-pagarme";
import { CreditoModel } from "../../models/credito";
import { CadModel } from "../../models/cad";
import { CadUserModel } from "../../models/cad-user";
import { User } from "../../models/user";
import { Payment, Address } from '../../models/cielo/boleto';

import { PagamentosProvider } from "../../providers/pagamentos/pagamentos";
import { UserProvider } from "../../providers/user/user";
import { VeiculosProvider } from '../../providers/veiculos/veiculos';
import { PagarmeProvider } from "../../providers/pagarme/pagarme";
import { CreditosProvider } from "../../providers/creditos/creditos";
import { CadsUserProvider } from "../../providers/cads-user/cads-user";
import { DateUtil } from "../../util/date.util";
import { CadsProvider } from "../../providers/cads/cads";
import { Constants } from "../../environments/constants";
import { environment } from "../../environments/environment";
import { ComunicacaoCentralProvider } from '../../providers/comunicacao-central/comunicacao-central';
import { TempoEstacionadoProvider } from '../../providers/tempo-estacionado/tempo-estacionado';
import { LoggerProvider } from '../../providers/logger/logger';
import { CieloProvider } from '../../providers/cielo/cielo';

import { MyApp } from "../../app/app.component";
import { MapUtil } from "../../util/map.util";


@IonicPage()
@Component({
    selector: 'page-comprar-creditos-pagamento',
    templateUrl: 'comprar-creditos-pagamento.html',
})
export class ComprarCreditosPagamentoPage {

    user: User;
    list;
    cads: number;
    price: number;
    cad: CadModel;
    fromPage;
    payMethod: string = '';
    area;
    setor;
    qtdCads;
    desconto;
    descontoPercent;
    priceNormal;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private menuCtrl: MenuController,
        private comunicacaoCentralProvider: ComunicacaoCentralProvider,
        private userProvider: UserProvider,
        private veiculosProvider: VeiculosProvider,
        private pagamentosProvider: PagamentosProvider,
        private pagarmeProvider: PagarmeProvider,
        private tempoEstacionadoProvider: TempoEstacionadoProvider,
        private creditosProvider: CreditosProvider,
        private cadsUserProvider: CadsUserProvider,
        private logger: LoggerProvider,
        private cadsProvider: CadsProvider,
        private cieloProvider: CieloProvider,
        private http: HttpClient,
        private clipboard: Clipboard,
        private toastCtrl: ToastController) {

        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();

        this.comunicacaoCentralProvider.setDMA_NTP();
    }

    ionViewCanEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                return true;
            }
        });
    }



    ionViewDidEnter() {
        let loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();

        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                this.userProvider.byId(userID).take(1).subscribe((user: User) => {
                    // loading.dismiss();

                    this.user = user;
                    this.list = this.pagamentosProvider.findByUser(this.user.id);
                    this.cadsProvider.find().take(1).subscribe(value => {
                        value.map(item => this.cad = new CadModel(item.cad));
                    });

                    if (this.payMethod == 'ticket') {
                        let payment = new Payment;
                        payment.Amount = this.price
                        payment.Provider = 'Simulado';

                        let data = {
                            MerchantOrderId: DateUtil.uniqueID(),
                            Customer: {
                                Name: this.user.name,
                                Identity: this.user.cpf,
                                Address: new Address
                            },
                            Payment: payment,
                        }

                        this.cieloProvider.resolver('ticket', data)
                            .then(data => {
                                loading.dismiss();
                                this.showBoletoOptions(data.Payment.BarCodeNumber, data.Payment.Url)
                            })
                            .catch(error => {
                                this.showAlert('Ops!', error, 'error', () => {
                                    loading.dismiss();
                                })
                            })
                    } else {
                        loading.dismiss();
                    }
                }, error => loading.dismiss());
            } else {
                // loading.dismiss();
            }
        });

        this.price = this.navParams.get('price');
        this.cads = this.navParams.get('cads');
        this.fromPage = this.navParams.get('fromPage');
        this.payMethod = this.navParams.get('paymentMethod');
        this.desconto = this.navParams.get('desconto');
        this.descontoPercent = this.navParams.get('descontoPercent');
        this.priceNormal = this.navParams.get('priceNormal');

        if (this.fromPage == 'estacionar') {
            this.area = this.navParams.get('area');
            this.setor = this.navParams.get('setor');
            this.qtdCads = this.navParams.get('qtdCads');
        }

    }

    ionViewWillLeave() {
    }

    getCartaoNumeroFormat(numero: string) {
        const quatro1 = '****'; //numero.substr(0,4);
        const quatro2 = '****'; //numero.substr(4,4);
        const quatro3 = '****'; //numero.substr(5,4);
        const quatro4 = numero.substr(12);

        return quatro1 + ' ' + quatro2 + ' ' + quatro3 + ' ' + quatro4;
    }

    openSenhaSeguranca(key: string, pagamento: PagamentoModel) {
        const start = new Date().getTime();
        let alerts = this.alertCtrl.create({
            title: 'Digite os 3 números da parte de trás do seu cartão.',
            inputs: [
                {
                    name: 'ccv',
                    id: 'ccv',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                    cssClass: 'btn-cancelar'
                },
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: data => {
                        let dataOp = {
                            MerchantOrderId: DateUtil.uniqueID(),
                            Customer: {
                                Name: this.user.name
                            },
                            Payment: {
                                Type: '',
                                Amount: this.price,
                                Installments: 1,
                                DebitCard: {},
                                CreditCard: {},
                                Provider: 'Simulado'
                            }
                        }
                        pagamento.ccv = data.ccv
                        const now = new Date().getTime();

                        const _qtd = DateUtil.uniqueID();
                        const idTransacaoDistribuidor = _qtd;
                        this.logger.info('creditos_qtd: ' + _qtd);

                        if (now - start > ComunicacaoCentralProvider.APP_ESPERA) {
                            this.showAlert('Ops', `Não foi possível estacionar seu veículo. Seu tempo de espera durou mais de ${ComunicacaoCentralProvider.APP_ESPERA / 1000} segundos. Faça o processo novamente.`, '', () => { });
                        } else {



                            this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(_data => {

                                let loading: Loading = this.loadingCtrl.create({ content: 'Aguarde...' });
                                loading.present();

                                if (environment.simular_l2) {
                                    const now = DateUtil.getCurrenteDateFormated()

                                    const response = { dataProcessamento: now, autenticacao: '8903907809', sucesso: 'true' }
                                    this.logger.info('AMC - OK. Response: ' + JSON.stringify(response));

                                    const dataProcessamentoStr = response['dataProcessamento'];
                                    const dataProcessamento = DateUtil.convertDate(dataProcessamentoStr);
                                    const autenticacao = response['autenticacao'];

                                    this.logger.info('dt: ' + dataProcessamento);

                                    if (response['sucesso'] || response['sucesso'] === 'true') {
                                        pagamento.id = key;

                                        if (environment.cielo) {

                                            this.cieloProvider.resolver(this.payMethod, dataOp, pagamento)
                                                .then(data => {

                                                    if (data.Payment.Status === 1) {
                                                        console.log(data);

                                                        this.saveCredito(pagamento, this.price, this.user.id, dataProcessamento, autenticacao,
                                                            this.priceNormal, this.desconto, this.descontoPercent, idTransacaoDistribuidor, 0);
                                                        this.saveCadsUser(this.cads, this.user.id, this.cad.id);
                                                        this.goHome();

                                                        loading.dismiss();
                                                        // OK --- GOOD
                                                    } else {
                                                        let status = environment.production ? Constants.CieloProductionCodes[data.Payment.ReturnCode] : Constants.CieloSandboxCodes[data.Payment.ReturnCode]
                                                        this.showAlert('Ops', status, 'error', () => {
                                                            loading.dismiss();
                                                        })
                                                    }
                                                    // alert(data);

                                                }).catch(error => {
                                                    this.showAlert('Ops!', JSON.stringify(error), 'error', () => {
                                                        loading.dismiss();
                                                    })
                                                });

                                        } else {
                                            loading.dismiss();
                                            this.efetuarPagamento(pagamento, data.ccv, dataProcessamento, autenticacao, this.priceNormal, this.desconto, this.descontoPercent, idTransacaoDistribuidor);
                                        }
                                    } else {
                                        loading.dismiss();
                                        this.showAlert("Ops", "Não foi possível estacionar seu veículo. Para mais informações entre em contato com nosso canal de atendimento.", "success", () => { });
                                    }

                                } else {

                                    this.verificaLinkL2(this.cads, idTransacaoDistribuidor, _data.dateNow)
                                        .then(response => {
                                            this.logger.info('AMC - OK. Response: ' + JSON.stringify(response));

                                            const dataProcessamentoStr = response['dataProcessamento'];
                                            const dataProcessamento = DateUtil.convertDate(dataProcessamentoStr);
                                            const autenticacao = response['autenticacao'];

                                            this.logger.info('dt: ' + dataProcessamento);

                                            if (response['sucesso'] || response['sucesso'] === 'true') {
                                                pagamento.id = key;

                                                if (environment.cielo) {

                                                    this.cieloProvider.resolver(this.payMethod, dataOp, pagamento)
                                                        .then(data => {

                                                            if (data.Payment.Status === 1) {
                                                                console.log(data);

                                                                this.saveCredito(pagamento, this.price, this.user.id, dataProcessamento, autenticacao,
                                                                    this.priceNormal, this.desconto, this.descontoPercent, idTransacaoDistribuidor, 0);
                                                                this.saveCadsUser(this.cads, this.user.id, this.cad.id);
                                                                this.goHome();

                                                                loading.dismiss();
                                                                // OK --- GOOD
                                                            } else {
                                                                let status = environment.production ? Constants.CieloProductionCodes[data.Payment.ReturnCode] : Constants.CieloSandboxCodes[data.Payment.ReturnCode]
                                                                this.showAlert('Ops', status, 'error', () => {
                                                                    loading.dismiss();
                                                                })
                                                            }
                                                            // alert(data);

                                                        }).catch(error => {
                                                            this.showAlert('Ops', JSON.stringify(error), 'error', () => {
                                                                loading.dismiss();
                                                            })
                                                        });

                                                } else {

                                                    loading.dismiss();
                                                    this.efetuarPagamento(pagamento, data.ccv, dataProcessamento, autenticacao, this.priceNormal, this.desconto, this.descontoPercent, idTransacaoDistribuidor);
                                                }
                                            } else {
                                                loading.dismiss();
                                                // this.showAlert('Ops', 'Não foi possível estacionar seu veículo. Para mais informações entre em contato com nosso canal de atendimento.', '', () => {}, () => {}, '','OK');
                                                this.showAlert("Ops", "Não foi possível estacionar seu veículo. Para mais informações entre em contato com nosso canal de atendimento.", "success", () => { });
                                            }

                                        }).catch(error => {
                                            loading.dismiss();
                                            this.logger.info('AMC - ERROR. Response: ' + JSON.stringify(error));
                                            this.showAlert('Indisponível', 'Não foi possível estabelecer uma comunicação com o serviço da AMC. Para mais informações entre em contato com nosso canal de atendimento.', "info", () => {
                                            });
                                        });
                                }
                            });

                        }
                    }
                }
            ],
            cssClass: 'alert-custom'
        });
        alerts.present();
        this.addImage();
    }

    addImage() {
        setTimeout(() => {
            let alert = document.querySelector('div.alert-button-group');
            let img = document.createElement("img");
            img.src = "assets/imgs/ccv.png";
            img.className = 'img-ccv';

            alert.appendChild(img);
        }, 100);
    }

    verificaLinkL2(cads: number, idTransacaoDistribuidor: number, dataEnvio: Date) {
        return this.comunicacaoCentralProvider.desbloqueioApp(cads, idTransacaoDistribuidor, dataEnvio);
    }

    efetuarPagamento(pagamento: PagamentoModel, ccv: string, date, autenticacao, valorSemDesconto: number, desconto: number, descontoPercent: number, idTransacaoDistribuidor: number) {
        let loading: Loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();


        pagamento.ccv = ccv;
        this.user.cpf = pagamento.cpf;
        let comprador = UserPagarmeModel.fromUserModel(this.user);
        let venda = new VendaPagarmeModel();
        venda.id = "1";
        venda.name = "Compra de " + this.cads + " CADs";
        venda.qtd = this.cads;
        venda.price = this.price;
        venda.date = this.transformingDate(date);
        let card = CardPagarmeModel.fromCardModel(pagamento);

        const comprovante = {
            "from": "credito",
            "email": this.user.email,
            "numberAuth": `AUTENTICAÇÃO nº ${autenticacao}`,
            "value": `CARTÃO: **** **** **** ${card.card_number.substr(-4)} - VALOR: R$${this.price},00`,
            "cads": `QUANTIDADE: ${this.cads} CAD(s)`,
            "datehour": `HORÁRIO: ${new Date(date).toLocaleDateString('pt-BR')} às ${new Date(date).toLocaleTimeString('pt-BR')}`,
            "formaPagamento": ` FORMA DE PAGAMENTO: ${card.card_number ? 'CARTÃO DE CRÉDITO' : 'DÉBITO'}`

        }

        this.pagarmeProvider.pagar(card, comprador, venda).then(value => {
            if (value.status != 'refused') {
                this.http.get(`https://us-central1-zonaazulfortaleza-prod.cloudfunctions.net/sendEmail?data=${JSON.stringify(comprovante)}`).subscribe(data => console.log("sera?", data))
                this.saveCredito(pagamento, this.price, this.user.id, date, autenticacao, valorSemDesconto, desconto, descontoPercent, idTransacaoDistribuidor, value.id);
                this.saveCadsUser(this.cads, this.user.id, this.cad.id);
                loading.dismiss();
                this.goHome();
            } else {
                loading.dismiss();
                this.showAlert("Aviso!", "Código de segurança incorreto. Tente novamente.", "info", () => {
                });
            }
        }).catch(_error => {
            console.log(JSON.stringify(_error));
            loading.dismiss();
            this.showAlert("Ops", _error, "error", () => {
            });
        });
    }

    closeComprarCreditosPagamento() {
        this.navCtrl.setRoot(Constants.CREDITOS_PAGE.name);
    }

    loadImageCartao(numero: string) {

        switch (numero.substring(0, 1)) {
            case "4":
                return "assets/imgs/visa.png";
            case "5":
                return "assets/imgs/mastercard.png";
            default:
                return "assets/imgs/creditcard.png";
        }

    }

    openPage(event, item = undefined) {
        event.preventDefault();
        this.navCtrl.push('PagamentosFormPage', { 'item': item, 'userId': this.user.id });
    }

    private saveCredito(pagamento: PagamentoModel, valor: number, userID: string, date, autenticacao, valorSemDesconto: number, desconto: number, descontoPercent: number, idTransacaoDistribuidor: number, idCompra: number) {
        let credito = new CreditoModel();
        credito.id = DateUtil.formatDateForID(date);
        credito.pagamento_id = pagamento.id;
        credito.valor = valor;
        credito.valorSemDesconto = valorSemDesconto;
        credito.desconto = desconto;
        credito.descontoPercent = descontoPercent;
        credito.numero = pagamento.numero;
        credito.status = 'Aquisição';
        credito.autenticacao = autenticacao;
        credito.idTransacao = idTransacaoDistribuidor;
        credito.idCompra = idCompra;
        this.creditosProvider.save(userID, credito);
    }

    private saveCadsUser(qtdCads: number, userID: string, cadID: string) {
        let cadUser = new CadUserModel();
        cadUser.qtdCads = qtdCads;
        this.cadsUserProvider.save(userID, cadID, cadUser);
    }

    private transformingDate(date: Date) {
        let day;
        let month;
        if (date.getMonth() < 9) {
            month = "0" + (date.getMonth() + 1);
        } else {
            month = "" + (date.getMonth() + 1);
        }

        if (date.getDate() < 10) {
            day = "0" + date.getDate();
        } else {
            day = date.getDate();
        }
        return date.getFullYear() + "-" + month + "-" + day;
    }

    private showAlert(title: string, msg: string, type: string, callback) {
        let alert = this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: data => {
                        callback();
                    }
                }
            ]
        });
        alert.present();
    }

    private showBoletoOptions(number, url) {
        let alert = this.alertCtrl.create({
            title: 'Boleto gerado com sucesso!',
            message: number,
            cssClass: 'default',
            buttons: [
                {
                    text: 'Copiar',
                    cssClass: 'btn-ok',
                    handler: data => {
                        this.clipboard.copy(number);
                        this.showToast('Código de barras copiado para área de transferência');
                    }
                },
                {
                    text: 'Ver Boleto',
                    cssClass: 'btn-ok',
                    handler: data => {
                        window.open(url, '_system');
                    }
                }

            ]
        });
        alert.present();
    }

    showToast(msg: string) {
        const toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    }

    private goHome() {
        if (this.fromPage == 'estacionar') {
            this.veiculosProvider.findByUser(this.user.id).take(1).subscribe(_item => {
                if (_item.length > 0) {
                    this.navCtrl.setRoot(Constants.ESTACIONAR_PAGE.name, {
                        setor: this.setor,
                        area: this.area,
                        cad: this.cad,
                        qtdCads: this.qtdCads
                    });
                } else {
                    this.navCtrl.setRoot(Constants.VEICULOS_FORM_PAGE.name, {
                        withMenu: true,
                        userId: this.user.id,
                        fromPage: 'estacionar',
                        area: this.area,
                        setor: this.setor,
                        cad: this.cad,
                        qtdCads: this.qtdCads
                    });
                }
            });
        } else {
            this.navCtrl.setRoot(Constants.HISTORICO_PAGE.name, { tab: 'historico-creditos' }).then(() => {
                this.showAlert("Sucesso!", "Transação realizada com sucesso!", "success", () => {
                    this.viewCtrl.dismiss();
                });
            });
        }
        this.menuCtrl.close();
    }

    excluir(event, cartaoId) {
        event.stopPropagation();
        this.onConfirm(() => {
            this.pagamentosProvider.remove(this.user.id, cartaoId);
        })
    }

    onConfirm(success) {
        this.alertCtrl.create({
            message: 'Tem certeza que deseja remover este cartão?',
            cssClass: '',
            buttons: [
                {
                    text: 'Sim',
                    cssClass: 'btn-ok',
                    handler: () => {
                        success();
                    }
                },
                {
                    text: 'Não',
                    cssClass: 'btn btn-cancel',
                }
            ]
        }).present();
    }

}
