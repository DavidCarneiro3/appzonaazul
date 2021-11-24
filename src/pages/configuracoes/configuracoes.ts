import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user";

import { UserProvider } from "../../providers/user/user";

import { MapUtil } from "../../util/map.util";
import { MyApp } from "../../app/app.component";

@IonicPage()
@Component({
    selector: 'page-configuracoes',
    templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    title6: string;
    title7: string;

    user: User;
    userId: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private userProvider: UserProvider) {

        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();
    }

    ionViewCanEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                this.userProvider.byId(userID).subscribe((user: User) => {
                    this.user = user;
                    this.userId = user.id;
                });
                return true;
            }
        });
    }

    ionViewDidLoad() {
        this.title1 = "Ativação Expirada";
        this.title2 = "Faltando 5 minutos para encerrar a ativação";
        this.title3 = "Faltando 10 minutos para encerrar a ativação";
        this.title4 = "Faltando 15 minutos para encerrar a ativação";
        this.title5 = "Faltando 20 minutos para encerrar a ativação";
        this.title6 = "Faltando 25 minutos para encerrar a ativação";
        this.title7 = "Faltando 30 minutos para encerrar a ativação";
    }

    ionViewWillLeave() {
    }


    updateConfig(tempo, $event: any) {
        this.userProvider.updateConfig(this.userId, tempo, $event.value)
    }
}
