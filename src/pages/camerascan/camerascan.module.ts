import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamerascanPage } from './camerascan';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    CamerascanPage,
  ],
  imports: [
    IonicPageModule.forChild(CamerascanPage),
  ],
  providers: [
    BarcodeScanner,
  ]
})
export class CamerascanPageModule {}
