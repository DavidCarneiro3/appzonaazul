import { Component } from '@angular/core'
import {
    IonicPage,
    NavController,
    NavParams,
    ModalController,
    AlertController,
    LoadingController,
    ActionSheetController,
    Events
} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

import { CadModel } from './../../models/cad';
import { User } from './../../models/user';
import { EstacionarModel } from "../../models/estacionar";
import { CreditoModel } from "../../models/credito";
import { SetorModel } from '../../models/setor';

import { CadsProvider } from './../../providers/cads/cads';
import { UserProvider } from "../../providers/user/user";
import { CreditosProvider } from "../../providers/creditos/creditos";
import { EstacionarProvider } from "../../providers/estacionar/estacionar";
import { VeiculosProvider } from "../../providers/veiculos/veiculos";
import { SetoresProvider } from '../../providers/setores/setores';
import { TempoEstacionadoProvider } from './../../providers/tempo-estacionado/tempo-estacionado';

import { MyApp } from "../../app/app.component";
import { MapUtil } from "../../util/map.util";
import { Constants } from '../../environments/constants';


@IonicPage()
@Component({
    selector: 'page-historico',
    templateUrl: 'historico.html',
})
export class HistoricoPage {

    showSpinner1 = true;
    showSpinner2 = true;

    time15min = 900000;
    time60min = 3600000;

    placa = '';
    historico = "historico-estacionamentos";

    listEstacionamentos: EstacionarModel[] = [];
    listEstacionamentosView: EstacionarModel[] = [];

    listCreditos: CreditoModel[] = [];
    listCreditosView: CreditoModel[] = [];
    listVeiculos: any[] = [];
    minDate: number;
    maxDate: number;
    cancelAttempt: boolean = false;
    horaRegistro;
    horaTentativaCancelamento;
    timer = 0;
    timer_vetor = [];
    today
    limit
    minlimit
    userLocal
    qtdEstacionados
    qtdCreditos
    qtdCads: number = 0;
    valorTotal: number = 0;
    user: User;

    cad = new CadModel(); 

    itensPage: any = [];
    private readonly offset: number = 10;
    private index: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        private actionSheetCtrl: ActionSheetController,
        private userProvider: UserProvider,
        private estacionarProvider: EstacionarProvider,
        private loadingCtrl: LoadingController,
        private creditosProvider: CreditosProvider,
        private cadsProvider: CadsProvider,
        private veiculosProvider: VeiculosProvider,
        private tempoEstacionadoProvider: TempoEstacionadoProvider,
        private alertCtrl: AlertController,
        private setorProvider: SetoresProvider,
        public event: Events) {

        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();

        const tab = this.navParams.get('tab');

        if (tab) {
            this.historico = tab;
        }
    }


    ionViewDidLoad() {
        this.horaRegistro = Date.now()
        this.event.subscribe('cancel_list', value => {
            if (value.length > 0) {
                this.cancelAttempt = true
            }
            else {
                this.cancelAttempt = false
            }
        })
        this.event.subscribe('f_event', value => {
            let aux = value
            this.listEstacionamentosView = this.listEstacionamentos

            Object.keys(value).map(key => {
                if (value[key] == '') {
                    delete aux[key]
                }
            })

            let result = this.listEstacionamentosView.filter(item => {
                return (Object.keys(aux)).every(key => {
                    if (key == 'qtdCads') {
                        return item.qtd.toString() == aux[key]
                    }
                    else if (key == 'valor') {
                        return item.comprovante.valor == aux[key]
                    }
                    return item.comprovante[key] == aux[key] || item[key] == aux[key]
                })
            })
            if (Object.keys(aux).length == 0) {
                this.listEstacionamentosView = this.listEstacionamentos
            }
            else {
                this.listEstacionamentosView = result

            }

        })

        this.event.subscribe('pay_filter_event', value => {
            let aux = value
            Object.keys(value).map(key => {
                if (value[key] == '') {
                    delete aux[key]
                }
            })
            let result = this.listCreditos.filter(item => {
                let date = new Date(item.dataHoraRegistro).toDateString()
                return (Object.keys(aux).every(key => {
                    if (key == 'data') {
                        return new Date(item.dataHoraRegistro).toDateString() == aux[key]
                    }
                    else if (key == 'qtdCads') {
                        return (this.getValor(item) / this.cad.valor_unitario).toString() == aux[key]
                    }
                    return item[key] == aux[key]
                }))
            })
            if (Object.keys(aux).length == 0) {
                this.listCreditosView = this.listCreditos
            }
            else {
                this.listCreditosView = result
            }
        })
    }

    ionViewCanEnter() {

        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                this.userProvider.byId(userID).subscribe((user: User) => {
                    this.user = user;


                })
                this.veiculosProvider.findByUser(userID).subscribe(value => {
                    this.listVeiculos.push(value);
                });

                return true;
            }
        });


    }



    defineMaxAndMinDate(data: any) {
        this.minDate = data.getTime() - 1000 * 60 * 60 * 24 * 365;
        this.maxDate = data.getTime();
        this.today = new Date(this.maxDate - (data.getTimezoneOffset() * 3 * 60000)).toISOString().substring(0, 10);
        this.limit = new Date(this.maxDate - 1000 * 60 * 60 * 24 * 4).toISOString().substring(0, 10)
        this.minlimit = new Date(this.minDate - 1000 * 60 * 60 * 24 * 1).toISOString().substring(0, 10)
    }

    getEstacionamentosByPlaca() {
        if (!this.placa || (this.placa && this.placa !== '')) {
            this.listEstacionamentosView = this.listEstacionamentos.filter(_item => _item.comprovante.placa.includes(this.placa.toUpperCase()));

        } else {
            this.listEstacionamentosView = this.listEstacionamentos;

        }
    }





    getEstacionamentos(userID: any) {
        this.estacionarProvider.find(userID).take(1).subscribe(items => {
            let dataConsulta = new Date(this.today.split("-")[0], this.today.split("-")[1] - 1, this.today.split("-")[2]);
            dataConsulta.setHours(23);
            dataConsulta.setMinutes(0);
            dataConsulta.setSeconds(0);
            this.defineMaxAndMinDate(dataConsulta);
            this.showSpinner1 = false;
            this.listEstacionamentos = items.map(item => {
                this.qtdCads += item.estacionar.qtd;
                if (item.estacionar.dataHoraRegistro > this.minDate &&
                    item.estacionar.dataHoraRegistro <= this.maxDate) {
                    return item.estacionar;
                }
            });
            this.valorTotal = this.qtdCads * 2;
            this.qtdEstacionados = this.listEstacionamentos.length;

            this.listEstacionamentosView = [];
            this.listEstacionamentosView.push(...this.listEstacionamentos);
        });
    }

    ionViewDidEnter() {
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(data => {
            this.defineMaxAndMinDate(data.dateNow);
        });
        this.userProvider.getUserLocal().then(userID => {
            if (userID != null) {
                this.userLocal = userID;
                this.getEstacionamentos(this.userLocal);

                this.creditosProvider.findByUser(userID).take(1).subscribe(items => {
                    this.showSpinner2 = false;

                    this.listCreditos = items.map(item => {

                        if (this.horaRegistro - item.values.dataHoraRegistro < 120000) {
                            let tempo;
                            this.timer_vetor.push(this.startTimer((this.horaRegistro - item.values.dataHoraRegistro), tempo))
                        }
                        return item.values
                    });
                    this.listCreditosView = []
                    this.listCreditosView.push(...this.listCreditos)

                    this.itensPage = this.listEstacionamentosView.slice(this.index, this.offset+this.index)
                    this.index += this.offset;
                    console.log(this.itensPage)

                });

                this.cadsProvider.find().take(1).subscribe(value => {
                    value.map(item => {
                        this.cad = new CadModel(item.cad);

                    });
                });
            }
        })


    }

    ionViewWillLeave() {
        this.timer_vetor.map(item => {
            item.unsubscribe()
        })
    }



    segmentChanged(event) {
        switch (event.value) {
            case 'historico-estacionamentos':
                this.historico = "historico-estacionamentos";
                break;
            case 'historico-creditos':
                this.historico = "historico-creditos";
                break;
        }
    }

    getCartaoNumeroFormat(numero: string) {

        const quatro1 = '****'; //numero.substr(0,4);
        const quatro2 = '****'; //numero.substr(4,4);
        const quatro3 = '****'; //numero.substr(5,4);
        const quatro4 = numero.substr(12);

        return quatro1 + ' ' + quatro2 + ' ' + quatro3 + ' ' + quatro4;
    }

    getPlaca(veiculoID: string): string {
        let placa = '';

        this.listVeiculos.forEach(value => {
            if (value[0].key === veiculoID) {
                placa = value[0].veiculo.placa;
            }
        });

        return placa;
    }

    openOpcoes(estacionar) {
        const opcoes = this.actionSheetCtrl.create({
            title: 'Escolha uma opção...',
            buttons: [
                {
                    text: 'Ver Recibo',
                    role: '',
                    handler: () => this.openComprovante(estacionar)
                }, {
                    text: 'Ver Local Estacionado',
                    role: '',
                    handler: () => this.openVeiculoEstacionado(estacionar)
                }
            ]
        })

        opcoes.present();
    }

    openVeiculoEstacionado(estacionar) {
        this.setorProvider.byId(estacionar.area_id, estacionar.setor_id).take(1).subscribe((value: SetorModel) => {
            this.navCtrl.push(Constants.VEICULO_ESTACIONADO_PAGE.name, { lat: value.latInicio, lng: value.lngInicio, estacionar: estacionar });
        });
    }

    getValor(credito: CreditoModel) {
        if (!credito)
            return 0;

        return credito.valorSemDesconto ? credito.valorSemDesconto : credito.valor;
    }

    openComprovante(estacionamento) {
        let loading = this.loadingCtrl.create({ content: 'Aguarde...' })
        loading.present();
        this.navCtrl.push(Constants.COMPROVANTE_PAGE.name, {
            estacionar: estacionamento,
            forceDownload: true,
            from: 'historico',
            user: this.user
        }).then(() => {
            loading.dismiss();
        });
    }

    showAlertHelp(title: string, msg: string, type: string, callback) {
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
                },
                {
                    text: 'Cancelar',
                    cssClass: 'btn-ok',
                    handler: data => {

                    }
                }

            ]
        });
        alert.present();
    }

    startTimer(credito, tempo) {
        return tempo = Observable.interval(1000).subscribe(x => {
            if ((credito + (x * 1000)) > this.time15min) {
                this.horaRegistro = Date.now()
                tempo.unsubscribe()
            }
            else {

            }
        })
    }

    openHelp() {
        this.historico == 'historico-creditos' ? this.showAlertHelp('Ajuda', 'Histórico de compras de CAD\'s efetuados, especificando forma de pagamento, data de cada compra e a quantidade de CAD\'s comprado!', '', () => { }) :
            this.showAlertHelp('Ajuda', 'Histórico dos estacionamentos efectuados e quantidades de CAD\'s utilizado em cada estacionamento.', '', () => { })
    }

    openModal() {
        this.modalCtrl.create(Constants.FILTER_MODAL_PAGE.name, { data: { today: this.today, min: this.minlimit, max: this.limit } }).present()
    }

    openFilterModal() {
        this.modalCtrl.create(Constants.FILTER_PAGAMENTO_PAGE.name, { data: { today: this.today, min: this.minlimit, max: this.limit } }).present()
    }

    limparFiltro() {
        this.listEstacionamentosView = this.listEstacionamentos
    }

    limparFiltroPagamento() {
        this.listCreditosView = this.listCreditos
    }



    cancelarTransacao(credito) {
        if (this.user.profile == 'revendedor') {
            this.showAlertHelp("Atenção", "Para realizar o cancelamento o PDV deve entrar em contato conosco por meio dos nossos canais de atendimento", '', () => { })
        }

        else {
            let cancel_list = this.listCreditosView.filter(item => {
                if (item.status == 'cancelado') {
                    this.timer = Date.now()
                    if (this.timer - new Date(item.dadoCancelamento.dataHoraRegistro).getTime() < this.time60min) {
                        return new Date(item.dadoCancelamento.dataHoraRegistro).getTime()
                    }

                }
            })
            this.event.publish('cancel_list', cancel_list)
            if (this.cancelAttempt) {
                let update_timer = Math.trunc((this.timer - new Date(cancel_list[0].dadoCancelamento.dataHoraRegistro).getTime()) / (1000 * 60))
                if (update_timer >= 59) {
                    this.showAlertHelp("Atenção", "Uma solicitação de cancelamento ja foi realizada,Tente novamente em " + (60 - update_timer) + ' minuto', '', () => { })
                }
                else {
                    this.showAlertHelp("Atenção", "Uma solicitação de cancelamento ja foi realizada,Tente novamente em " + (60 - update_timer) + ' minutos', '', () => { })
                }

            }
            else {
                this.showAlertHelp("Atenção", "Ao realizar solicitação de cancelamento, só poderá realizar outra após 1 hora", '', () => {
                    this.navCtrl.setRoot(Constants.CANCELAR_TRANSACAO_PAGE.name, { credito: JSON.stringify(credito), cad: this.cad })
                })

            }
        }
    }

    loadData(event){
        setTimeout(() => {
            let news = this.listEstacionamentosView.slice(this.index, this.offset+this.index)
            this.index += this.offset;


            for(let i = 0; i < news.length; i++){
                this.itensPage.push(news[i]);
            }
            
            event.complete();

            if(this.itensPage.length === this.listEstacionamentosView.length){
                event.disabled = true;
            }
            console.log(this.listEstacionamentosView)
        }, 1200);
    }
}
