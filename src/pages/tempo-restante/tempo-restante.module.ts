import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TempoRestantePage } from './tempo-restante';
import { ComponentsModule } from "../../components/components.module";
import { LoadingSpinnerComponentModule } from '../../components/loading-spinner/loading-spinner.module';

@NgModule({
    declarations: [
        TempoRestantePage,
    ],
    imports: [
        IonicPageModule.forChild(TempoRestantePage),
        LoadingSpinnerComponentModule,
        ComponentsModule
    ],
})
export class TempoRestantePageModule {
}
