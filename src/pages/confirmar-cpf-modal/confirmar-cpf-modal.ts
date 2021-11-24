import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

import { UserProvider } from "../../providers/user/user";

import { FunctionsUtil } from "../../util/functions.util";

@IonicPage()
@Component({
  selector: 'page-confirmar-cpf-modal',
  templateUrl: 'confirmar-cpf-modal.html',
})
export class ConfirmarCpfModalPage {

  res: any;
  input: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
    public userProvider: UserProvider, public alertCtrl: AlertController) {
    this.res = this.navParams.get('res')
  }

  ionViewDidLoad() {
    this.userProvider.removeUserLocal()
  }

  teste() {

    if (this.input == "") {
      this.showAlert()
    }

    else {
      let result = FunctionsUtil.cleanBRMask(this.input)
      if (result.length == 11 && FunctionsUtil.checkCPF(result)) {
        this.res.logged.cpf = result
        this.events.publish('update', this.res)
        this.navCtrl.pop()

      }
      else if (result.length == 14 && FunctionsUtil.checkCNPJ(result)) {
        this.res.logged.cpf = result
        this.events.publish('update', this.res)
        this.navCtrl.pop()

      }
      else {
        this.showAlert()
      }
    }

  }

  showAlert() {
    this.alertCtrl.create(
      {
        title: "Invalido",
        message: "Insira um CPF ou CPNJ Valido",
        buttons: [{
          text: 'OK',
        }]
      }
    ).present()
  }

  closeModal() {
    this.navCtrl.pop()
  }

}
