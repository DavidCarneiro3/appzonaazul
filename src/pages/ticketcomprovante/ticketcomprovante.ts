import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../environments/constants';

@IonicPage()
@Component({
  selector: 'page-ticketcomprovante',
  templateUrl: 'ticketcomprovante.html',
})
export class TicketcomprovantePage {
  selectOptions = {
    title: 'Cidade',
    subTitle: 'Escolha sua cidade',
    mode: 'ios'
  };
  placa: string = 'ABC1234';
  cadsUsados: number = 2;
  valor: number = 10;
  data : string = '09/02/2022';
  hora : string = '05:02';
  city: any = 'Fortaleza';
  cads: number = 0;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHome() {
    this.navCtrl.push(Constants.HOME_PAGE.name);
  }
  goComprar(){
    this.navCtrl.push(Constants.CREDITOS_PAGE.name, {'fromPage': 'principal'})
  }
}
