import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../environments/constants';

@IonicPage()
@Component({
  selector: 'page-timerparapagar',
  templateUrl: 'timerparapagar.html',
})
export class TimerparapagarPage {
  selectOptions = {
    title: 'Cidade',
    subTitle: 'Escolha sua cidade',
    mode: 'ios'
  };
  custo: number = 10000;
  city: any = 'Fortaleza';
  tempofim: boolean = false;
  cads: number = 0;
  cadsUsados: number = 0;

  tempoMaximo = 15;
  tempoAtual = this.tempoMaximo;
  tempoNoDisplay = this.displayTime(this.tempoAtual);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.tempoAtual = this.tempoMaximo;
    this.tempoNoDisplay = this.displayTime(this.tempoAtual);
    this.passarTempo();
  }

  displayTime(tempo:number){
    var minutos = Math.floor(tempo/60);
    var segundos = Math.floor(tempo-(minutos*60));
    var minutosString = '';
    var segundosString = '';
    minutosString = minutos.toString();
    segundosString = (segundos < 10) ? "0" + segundos : segundos.toString();
    return minutosString + ':' + segundosString;
  }

  passarTempo(){
    setTimeout(() => {
      this.tempoAtual--;
      this.tempoNoDisplay = this.displayTime(this.tempoAtual);
      console.log(this.tempoNoDisplay);
      console.log(this.tempoAtual);
      if (this.tempoAtual > 0){
        this.passarTempo();
      }else{
        this.tempofim=true;
        //document.getElementById("botao").style.color = "#ea1d25";
        //document.getElementById("botao").style.border = "2px solid #ea1d25";
        //document.getElementById("botao").textContent = "Refazer Calculo do Valor";
      }
    }, 1000);
  }

  goHome() {
    this.navCtrl.push(Constants.HOME_PAGE.name);
  }
  goComprar(){
    this.navCtrl.push(Constants.CREDITOS_PAGE.name, {'fromPage': 'principal'})
  }
  go2(){
    this.navCtrl.push(Constants.TICKETCOMPROVANTE_PAGE.name);
  }
}
