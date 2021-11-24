import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { UserInfoComponent } from './user-info/user-info';
import { TimerComponent } from "./timer/timer";

@NgModule({
    declarations: [UserInfoComponent, TimerComponent],
    imports: [IonicModule],
    exports: [UserInfoComponent, TimerComponent]
})
export class ComponentsModule {
}
