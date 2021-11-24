import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user";
import { VeiculoModel } from './../../models/veiculo';

import { VeiculosProvider } from './../../providers/veiculos/veiculos';
import { UserProvider } from "../../providers/user/user";

import { MyApp } from "../../app/app.component";
import { MapUtil } from "../../util/map.util";

@IonicPage()
@Component({
    selector: 'page-veiculos',
    templateUrl: 'veiculos.html',
})
export class VeiculosPage {
    user: User;
    list;
    showSpinner: boolean = true;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        private userProvider: UserProvider,
        private veiculosProvider: VeiculosProvider) {

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

    ionViewDidEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID != null) {
                this.userProvider.byId(userID).subscribe((user: User) => {
                    this.user = user;
                    this.list = this.veiculosProvider.findByUser(user.id);
                    this.showSpinner = false;
                });
            }
        });
    }

    ionViewWillLeave() { }

    openPage(event, item = undefined) {
        this.navCtrl.push('VeiculosFormPage', { 'item': item, 'userId': this.user.id });
    }

    getImage(tipo) {
        return VeiculoModel.getImage(tipo);
    }

    excluir(event, veiculoId) {
        event.stopPropagation();
        this.onConfirm(() => {
            this.veiculosProvider.remove(this.user.id, veiculoId);
        })
    }

    onConfirm(success) {
        this.alertCtrl.create({
            message: 'Tem certeza que deseja remover este veículo?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Sim',
                    cssClass: 'btn btn-ok',
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

    showHelp(title: string, message: string, type: string, callback): void {
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

    /**
     * 
     */
    openHelp() {
        this.showHelp('Ajuda', 'Clique no veículo desejado para ver as informações ou adicione um novo.', '', () => { })
    }
}
