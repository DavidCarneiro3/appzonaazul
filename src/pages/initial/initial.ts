import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../environments/constants';

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {
  city: any = 'Fortaleza';
  showSpinner: boolean = false;
  cadsUsados: number = 0;
  cads: number = 0;
  selectOptions = {
    title: 'Cidade',
    subTitle: 'Escolha sua cidade',
    mode: 'ios'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }
  goComprar(){
    this.navCtrl.push(Constants.CREDITOS_PAGE.name, {'fromPage': 'inicial'})
  }

  goPrincipal(){
    this.navCtrl.setRoot(Constants.PRINCIPAL_PAGE.name);
  }

  goVagas(){
    this.navCtrl.setRoot(Constants.VAGAS_PAGE.name);
  }
}
