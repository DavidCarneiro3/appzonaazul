import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../environments/constants';

/**
 * Generated class for the VagaslivresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vagaslivres',
  templateUrl: 'vagaslivres.html',
})
export class VagaslivresPage {

  selectOptions = {
    title: 'Cidade',
    subTitle: 'Escolha sua cidade',
    mode: 'ios'
  };
  city: any = 'Fortaleza';
  cads: number = 0;
  cadsUsados: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VagaslivresPage');
  }

  goHome() {
    this.navCtrl.push(Constants.HOME_PAGE.name);
  }
  goComprar(){
    this.navCtrl.push(Constants.CREDITOS_PAGE.name, {'fromPage': 'principal'})
  }

  go1(){
    this.navCtrl.push(Constants.TIMER_PAGE.name);
  }
}
