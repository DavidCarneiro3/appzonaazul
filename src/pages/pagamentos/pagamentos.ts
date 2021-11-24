import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { PagamentosProvider } from './../../providers/pagamentos/pagamentos';
import { UserProvider } from "../../providers/user/user";

import { MyApp } from "../../app/app.component";
import { MapUtil } from "../../util/map.util";

@IonicPage()
@Component({
    selector: 'page-pagamentos',
    templateUrl: 'pagamentos.html',
})
export class PagamentosPage {

    public user: User;
    list;
    showSpinner: boolean = true;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private userProvider: UserProvider,
        private pagamentosProvider: PagamentosProvider) {

        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();
    }

    ionViewCanEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                return true;
            }
        });
    }

    ionViewDidLoad() {
    }

    ionViewWillEnter() {
    }

    ionViewDidEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID != null) {
                this.userProvider.byId(userID).take(1).subscribe((user: User) => {
                    this.user = user;
                    this.list = this.pagamentosProvider.findByUser(this.user.id);
                    this.showSpinner = false;
                });
            }
        });

    }

    ionViewWillLeave() {
    }

    ionViewDidLeave() {
    }

    ionViewWillUnload() {
    }

    ionViewCanLeave() {
    }

    openPage(event, item, key) {
        event.preventDefault();
        this.navCtrl.push('PagamentosFormPage', { 'item': item, 'userId': this.user.id });
    }

    getCartaoNumeroFormat(numero: string) {
        const quatro1 = '****'; //numero.substr(0,4);
        const quatro2 = '****'; //numero.substr(4,4);
        const quatro3 = '****'; //numero.substr(5,4);
        const quatro4 = numero.substr(12);

        return quatro1 + ' ' + quatro2 + ' ' + quatro3 + ' ' + quatro4;
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

    showAlert(title: string, msg: string, type: string, callback) {
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

    openHelp() {
        this.showAlert('Ajuda', 'Clique na forma de pagamento para ver e editar as informações ou adicione uma nova.', '', () => { })
    }

}
