import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io';

import { PagamentoModel } from './../../models/pagamento';

import { PagamentosProvider } from '../../providers/pagamentos/pagamentos';
import { UserProvider } from "../../providers/user/user";

import { MyApp } from "../../app/app.component";
import { FunctionsUtil } from "../../util/functions.util";
import { MapUtil } from "../../util/map.util";

@IonicPage()
@Component({
    selector: 'page-pagamentos-form',
    templateUrl: 'pagamentos-form.html',
})
export class PagamentosFormPage {

    userId;
    @ViewChild('numero') numero;

    public formGroup: FormGroup;

    item = new PagamentoModel();
    titulo = 'Adicionar';

    dataMin: string;
    dataMax: string;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public formBuilder: FormBuilder,
        private cardIO: CardIO,
        private userProvider: UserProvider,
        private pagamentosProvider: PagamentosProvider) {

        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();

        this.formGroup = formBuilder.group({
            numero: ['', Validators.compose([Validators.required])],
            data: ['', Validators.required],
            ccv: ['', Validators.required],
            nome: ['', Validators.required],
            cpf: ['', Validators.compose([Validators.minLength(14), Validators.required])],
        });

        let dataMaxDt = new Date();
        dataMaxDt.setDate(1);
        dataMaxDt.setMonth(0);
        this.dataMin = dataMaxDt.toISOString();

        dataMaxDt = new Date();
        dataMaxDt.setFullYear(dataMaxDt.getFullYear() + 8);
        this.dataMax = dataMaxDt.toISOString();
    }

    ionViewCanEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                return true;
            }
        });
    }

    ionViewDidEnter() {
    }

    ionViewDidLoad() {
        let itemTmp = this.navParams.get('item');
        this.userId = this.navParams.get('userId');

        if (itemTmp) {
            this.titulo = 'Detalhes';

            const parseTmp = (typeof itemTmp === "string") ? JSON.parse(itemTmp) : itemTmp;
            this.item = new PagamentoModel(parseTmp.values);
            this.item.id = parseTmp.key;
            this.item.ccv = '';
            this.item.numero = this.item.numero.replace(/^(\d{4})\D*(\d{4})\D*(\d{4})\D*(\d{4})$/g, '$1.$2.$3.$4');
            this.item.cpf = this.item.cpf.replace(/^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g, '$1.$2.$3-$4');

        }
    }

    ionViewWillLeave() {
    }

    scan() {
        this.cardIO.canScan()
            .then(
                (res: boolean) => {
                    if (res) {
                        let options = {
                            requireExpiry: true,
                            requireCVV: true,
                            requirePostalCode: false,
                            requireCardholderName: true,
                            hideCardIOLogo: true,
                        };
                        let loading = this.showLoading();

                        this.cardIO.scan(options)
                            .then(data => {
                                this.item.nome = data.cardholderName;
                                this.item.numero = data.cardNumber;
                                if (data.cvv) {
                                    this.item.ccv = data.cvv;
                                }

                                if (data.expiryMonth < 10) {
                                    this.item.data = data.expiryYear + '-' + '0' + data.expiryMonth;
                                } else {
                                    this.item.data = data.expiryYear + '-' + data.expiryMonth;
                                }

                                // this.showAlert('Sucesso', 'Dados do cartão obtidos com sucesso!', 'alert', () => {
                                this.numero.setFocus();
                                loading.dismiss();
                                // });
                            }).catch(error => {
                                //this.showAlert('Ops!', JSON.stringify(error), 'error', () => {
                                loading.dismiss();
                                //});
                            })
                    }
                }
            )
            .catch(error => {
                this.showAlert('Olá', 'Você precisa autorizar a aplicação para utilizar este recurso.', '', () => { });
            })
    }

    submit() {
        let itemTmp = this.navParams.get('item');
        if (!this.formGroup.valid) {
            this.showAlert('Aviso!', 'Você precisa inserir dados válidos para cadastrar seu cartão!', '', () => {
            });
            return;
        }

        let loading = this.showLoading();

        if (FunctionsUtil.checkCPF(this.formGroup.value.cpf)) {
            this.formGroup.value.cpf = FunctionsUtil.cleanBRMask(this.formGroup.value.cpf), this.formGroup.value.numero = FunctionsUtil.cleanBRMask(this.formGroup.value.numero)
            if (itemTmp == undefined || itemTmp.key == '') {
                this.pagamentosProvider.save(this.userId, this.formGroup.value).then(() => {
                    console.log('valor do form ', this.formGroup.value)
                    loading.dismiss();
                    this.navCtrl.pop();
                }, error => {
                    alert('Algo deu errado!')
                });

            } else {
                this.pagamentosProvider.update(this.userId, itemTmp.key, this.formGroup.value).then(() => {
                    loading.dismiss();
                    this.navCtrl.pop();
                }, error => {
                    alert('Algo deu errado!')
                });
            }
        } else {
            this.showAlert('Aviso!', 'Você precisa inserir um CPF válido!', '', () => loading.dismiss());
        }
    }

    showLoading() {
        let loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        return loading;
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
        }).present();
    }

    openHelp() {
        this.showAlert('Ajuda', 'Para cadastrar uma forma de pagamento, preencha o formulário conforme os campos solicitados.', '', () => { })
    }

}
