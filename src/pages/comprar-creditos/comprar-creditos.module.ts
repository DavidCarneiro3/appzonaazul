import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComprarCreditosPage } from './comprar-creditos';

@NgModule({
  declarations: [
    ComprarCreditosPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ComprarCreditosPage),
  ],
})
export class ComprarCreditosPageModule { }
