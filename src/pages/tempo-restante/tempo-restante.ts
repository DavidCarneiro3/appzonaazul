import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Platform } from 'ionic-angular'
import { EstacionarProvider } from "../../providers/estacionar/estacionar";
import { VeiculosProvider } from "../../providers/veiculos/veiculos";
import { UserProvider } from "../../providers/user/user";
import { TempoEstacionadoProvider } from './../../providers/tempo-estacionado/tempo-estacionado';
import { CadsUserProvider } from "../../providers/cads-user/cads-user";
import { VeiculoModel } from './../../models/veiculo';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import { SetoresProvider } from "../../providers/setores/setores";
import { Constants } from "../../environments/constants";
import { SetorModel } from "../../models/setor";
import { MyApp } from "../../app/app.component";
import { MapUtil } from "../../util/map.util";
import { LoggerProvider } from '../../providers/logger/logger';
import { ModalProvider } from '../../providers/modal/modal';

@IonicPage()
@Component({
    selector: 'page-tempo-restante',
    templateUrl: 'tempo-restante.html',
})
export class TempoRestantePage {

    showSpinner1 = true;

    // user: User;
    loadObj = true;
    tempoCurrent = Date.now();
    _estacionados = [];
    qtdCadsUser: number = 0;
    qtdCadsUsados: number = 0;
    user_id: any;
    fromPage: string = '';
    canCancel = false;
    horaRegistro;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        private userProvider: UserProvider,
        private estacionarProvider: EstacionarProvider,
        private tempoEstacionadoProvider: TempoEstacionadoProvider,
        private veiculoProvider: VeiculosProvider,
        private setorProvider: SetoresProvider,
        private logger: LoggerProvider,
        private cadsUserProvider: CadsUserProvider,
        private alertCtrl: AlertController,
        private platform: Platform,
        private modalProvider: ModalProvider) {

        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();

        this.platform.resume.subscribe(event => {
            this.navCtrl.setRoot(Constants.TEMPO_RESTANTE_PAGE.name)
        })


    }

    ionViewCanEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                this.user_id = userID;
                return true;
            }
        });
    }

    getVeiculo(veiculo_id, userID) {
        return this.veiculoProvider.findByVeiculo(veiculo_id, userID);
    }

    renovarEstacionar(estacionar) {
        const profile = localStorage.getItem('userProfile')
        if (!estacionar.veiculo_id || profile === 'revendedor') {
            this.navCtrl.setRoot(Constants.VEICULOS_FORM_PAGE.name, {
                withMenu: true,
                userId: this.user_id,
                fromPage: 'renovar',
                area: estacionar.area_id,
                setor: estacionar.setor_id,
                cad: 1,
                qtdCads: (this.qtdCadsUser - this.qtdCadsUsados),
                placa: estacionar.comprovante.placa,
                tipo_veiculo:estacionar.comprovante.tipo_veiculo,
                veiculo_id: estacionar.veiculo_id
            });
        } else {
           
            for (let estacionado of this._estacionados) {

                if (estacionado.estacionar.veiculo.placa == estacionar.veiculo.placa) {
                    let veiculo = {
                        key: estacionado.estacionar.veiculo_id,
                        veiculo: estacionado.estacionar.veiculo
                    }
                    this.navCtrl.setRoot(Constants.ESTACIONAR_PAGE.name, {
                        setor: estacionar.setor_id,
                        area: estacionar.area_id,
                        fromPage: 'tempo_restante',
                        cad: 1,
                        veiculo: veiculo,
                        qtdCads: (this.qtdCadsUser - this.qtdCadsUsados),
                    });
                    break;
                }
            }
        }
    }


    validaRenovar(estacionar) {
        estacionar.renovar = true;
        if (estacionar.qtd === 2) {
            estacionar.renovar = false;
        } else if (estacionar.tempoComprado === 300) {
            estacionar.renovar = false;
        }
    }

    ionViewWillEnter() {

        //atualizar tempo restante se o usuário vier de comprvante(renovação)
        let last = this.navParams.get('fromPage');
        this.fromPage = last;
        if (last) {
            if (last == 'comprovante') {
                // this.ionViewDidLoad();
            }
        }
    }



    ionViewDidLoad() {

        this.horaRegistro = Date.now();
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(data => {
            this.logger.info('now: ' + JSON.stringify(data));

            this.userProvider.getUserLocal().then(userID => {
                if (userID) {

                    this.cadsUserProvider.findQtdCads(userID).take(1).subscribe(value => {
                        value.map(cads => {
                            if (cads.key == "qtdCadsUsados") {
                                this.qtdCadsUsados = cads.item;
                            } else {
                                this.qtdCadsUser += cads.item.qtdCads;
                            }
                        });
                    });

                    this.estacionarProvider.findByUser(userID).take(1).subscribe(_values => {
                        this._estacionados = []
                        if (_values.length > 0) {
                            _values.map(_item => {
                                this.logger.info('estacionado: ' + _item.estacionar.tempoEstacionado + ' | ' + new Date(_item.estacionar.tempoEstacionado));
                                this.validaRenovar(_item.estacionar);
                                if (_item.estacionar.tempoEstacionado - this.tempoCurrent >= 0) {
                                    this._estacionados = []
                                    this.getVeiculo(_item.estacionar.veiculo_id, userID)
                                        .take(1).subscribe(_veiculo => {
                                            this.loadObj = false;
                                            this.showSpinner1 = false;
                                            _item.estacionar.veiculo = _veiculo;
                                            this.logger.info(_item);
                                            this._estacionados.push(_item);
                                        });
                                } else {
                                    this.loadObj = false;
                                    this.showSpinner1 = false;
                                }
                            });
                            // this.loadObj = false;
                            //  this.showSpinner1 = false;
                        } else {
                            this.loadObj = false;
                            this.showSpinner1 = false;
                        }
                    }, error => {
                        this.showSpinner1 = false;
                        this.loadObj = false;
                    })
                }
            });
        })
    }

    openVeiculoEstacionado(obj) {
        this.setorProvider.byId(obj.estacionar.area_id, obj.estacionar.setor_id).take(1).subscribe((value: SetorModel) => {
            this.navCtrl.push(Constants.VEICULO_ESTACIONADO_PAGE.name, { lat: value.latInicio, lng: value.lngInicio });
        });
    }

    closeTempoRestantePage() {
        this.viewCtrl.dismiss()
            .then(() => {
                this.modalProvider.desactivate();
            });
    }

    getImage(tipo) {
        return VeiculoModel.getImage(tipo);
    }

    showAlert(title: string, message: string, type: string, callback): void {
        this.alertCtrl.create({
            title: title,
            message: message,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: data => callback()
                }
            ]
        }).present()
    }

    openHelp() {
        this.showAlert('Ajuda', 'Aqui você verá seus veículos estacionados e seu tempo restante.', '', () => { })
    }
    cancelaEstacionamento(veiculo) {
        this.navCtrl.setRoot(Constants.CANCELAR_TRANSACAO_PAGE.name, {
            estacionar: JSON.stringify(veiculo.estacionar)
        })
    }
}
