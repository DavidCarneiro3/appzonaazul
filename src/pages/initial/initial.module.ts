import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { LoadingSpinnerComponentModule } from '../../components/loading-spinner/loading-spinner.module';
import { InitialPage } from './initial';

@NgModule({
  declarations: [
    InitialPage,
  ],
  imports: [
    IonicPageModule.forChild(InitialPage),
    LoadingSpinnerComponentModule,
    ComponentsModule
  ],
})
export class InitialPageModule {}
