import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

import { EstacionarProvider } from "../../providers/estacionar/estacionar";
import { UserProvider } from "../../providers/user/user";
import { LoggerProvider } from '../../providers/logger/logger';

@Component({
    selector: 'timer',
    templateUrl: 'timer.html',
})
export class TimerComponent implements OnInit {

    @Input('time') time: number;
    @Input('decorrido') decorrido: number;
    @Input('now') now: number;
    @Input('placa') placa: string;
    @Input('status') status: boolean;

    userID: string;

    constructor(private estacionarProvider: EstacionarProvider,
        private userProvider: UserProvider, private logger: LoggerProvider) {
    }

    ngOnInit() {

        this.userProvider.getUserLocal().then(userID => {
            this.userID = userID;

            this.logger.info('time: ' + this.time);
            this.logger.info('now: ' + this.now);
            this.logger.info('user: ' + this.userID);
            this.logger.info('placa: ' + this.placa);

            if (this.status && this.time) {
                if (this.time) {

                    this.time = (this.time - this.now) / 1000;
                    if (this.time > 0) {
                        setInterval(() => {
                            this.time--;
                        }, 1000);
                    }
                    else {
                        this.estacionarProvider.atualizaStatusPeloTempoExpirado(this.userID, this.placa, () => {
                            this.status = false;
                        });
                    }
                }
            }
            else if (this.status && this.decorrido) {
                this.decorrido = (this.now - this.decorrido) / 1000
                if (this.decorrido) {
                    setInterval(() => {
                        this.decorrido++;
                    }, 1000)
                }
            }
        }

        );
    }
}
