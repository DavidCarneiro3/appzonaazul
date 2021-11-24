import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesPage } from './configuracoes';
import { AccordionModule } from "../../components/accordion/accordion.module";

@NgModule({
  declarations: [
    ConfiguracoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracoesPage),
    AccordionModule
  ],
})
export class ConfiguracoesPageModule { }
