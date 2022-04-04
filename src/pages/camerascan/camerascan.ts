import { Component } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-camerascan',
  templateUrl: 'camerascan.html',
})

export class CamerascanPage {
  options: BarcodeScannerOptions;
  textoFinal: string = '';
  scannedData: any = {};
  platform: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
  }

  scan() {
    this.options = {
      prompt: 'Escaneie o seu código de barras ou QR.'
    };
    this.scanner.scan().then((data) => {
      this.scannedData = data;
      console.log(this.scannedData);
    }, (err) => {
      console.log('Erro :', err);
    })
  }
  ionViewDidEnter() {
    this.scan();
  }
}
