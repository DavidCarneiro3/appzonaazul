import { Component, ViewChild } from "@angular/core";
import { AlertController, MenuController, ModalController, Nav, Platform, Events } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';

import { User } from "../models/user";
import { CadModel } from '../models/cad';

import { NotificationProvider } from './../providers/notification/notification';
import { AuthProvider } from "../providers/auth/auth";
import { UserProvider } from "../providers/user/user";
import { ComunicacaoCentralProvider } from '../providers/comunicacao-central/comunicacao-central';
import { BrowserProvider } from '../providers/browser/browser';
import { LoggerProvider } from '../providers/logger/logger';
import { ModalProvider } from '../providers/modal/modal';
import { CadsProvider } from '../providers/cads/cads';

import { Constants } from "../environments/constants";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;
    public static MAP_LOAD = true;
    rootPage: any;
    user = new User();
    cads: number;
    cad = new CadModel();

    subscribePush: Subscription;

    versao = Constants.VERSAO;
    pdvReg: boolean = false;
    isnotPdv: boolean = false;
    constructor(public platform: Platform,
        public modalCtrl: ModalController,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public alertCtrl: AlertController,
        private notificationProvider: NotificationProvider,
        public menu: MenuController,
        private events: Events,
        private comunicacaoCentralProvider: ComunicacaoCentralProvider,
        private authProvider: AuthProvider,
        private browserProvider: BrowserProvider,
        private logger: LoggerProvider,
        public userProvider: UserProvider,
        private cadsProvider: CadsProvider,
        public modalProvider: ModalProvider,
    ) {

        this.userProvider.getUserLocal().then(userID => {

            this.events.subscribe('user', (value) => {
                this.pdvReg = false
                this.isnotPdv = false

                if ((value.profile != 'revendedor' && value.pdvReg == undefined) || (value.profile != 'revendedor' && value.pdvReg.cnpj == "")) {
                    this.pdvReg = true
                }
                if (value.uidPDV == '00000000000') {
                    this.isnotPdv = true
                }
            })
            if (userID) {
                this.userProvider.byId(userID).take(1).subscribe((user: User) => {

                    this.events.publish('user', user)
                    this.user = user
                    this.rootPage = Constants.HOME_PAGE.name;
                    // }
                });
            } else {
                this.rootPage = Constants.LOGIN_PAGE.name;
            }
        }).catch(error => {
            this.logger.info('Info: Usuário não logado. ' + JSON.stringify(error));
            this.rootPage = Constants.LOGIN_PAGE.name;
        });

        this.initializeApp();
    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.comunicacaoCentralProvider.setDMA_NTP();

            if (this.platform.is('cordova')) {
                this.userProvider.getUserLocal().then(_userId => {

                    if (_userId) {
                        setTimeout(_ => {
                            this.logger.info('NOTIFICATION APP COMPONENT. User: ' + _userId);
                            console.log(_userId)

                            this.notificationProvider.inicialize(_userId)
                                .then(_data => { })
                                .catch(error => {
                                    this.logger.error('NOTIFICATION ERROR INIT. Error: ' + JSON.stringify(error));
                                });

                            this.userProvider.updateUuidOrImei(_userId);
                        }, 1000);
                    }
                })
            }

            this.cadsProvider.find().take(1).subscribe(value => {
                value.map(item => {
                    this.cad = new CadModel(item.cad);
                    this.logger.info(this.cad);
                });
            });
        });
    }



    openPage(page) {
        this.nav.setRoot(page.component);
    }

    goHome() {
        this.nav.setRoot(Constants.HOME_PAGE.name);
        this.menu.close();
    }

    goEstacionamentosAtivos() {
        this.nav.setRoot(Constants.TEMPO_RESTANTE_PAGE.name)
        this.menu.close();
    }

    goCreditos() {
        this.nav.setRoot(Constants.CREDITOS_PAGE.name);
        this.menu.close();
    }

    goPagamentos() {
        this.nav.setRoot(Constants.PAGAMENTOS_PAGE.name);
        this.menu.close();
    }

    goHistorico() {
        this.nav.setRoot(Constants.HISTORICO_PAGE.name);
        this.menu.close();
    }

    goVeiculos() {
        this.nav.setRoot(Constants.VEICULOS_PAGE.name);
        this.menu.close();
    }

    goProfile() {
        this.nav.setRoot(Constants.PROFILE_PAGE.name);
        this.menu.close();
    }

    goConfiguracoes() {
        this.nav.setRoot(Constants.CONFIGURACOES_PAGE.name);
        this.menu.close();
    }

    goAjuda() {
        this.nav.setRoot(Constants.AJUDA_PAGE.name);
        this.menu.close();
    }

    goCompartilhar() {
        this.nav.setRoot(Constants.COMPARTILHAR_PAGE.name);
        this.menu.close();
    }

    goProblema() {
        this.nav.setRoot(Constants.REPORTAR_PROBLEMA_PAGE.name);
        this.menu.close();
    }



    goAvaliar() {
        this.menu.close();

        const url = !this.platform.is('android') ? this.cad.info.apple_store : this.cad.info.google_store;

        this.browserProvider.openPage(url);
    }

    goPdvCadastro() {
        this.nav.setRoot(Constants.PDV_EMPRESA_PAGE.name)
        this.menu.close()
    }

    goLogout() {
        this.alertCtrl.create({
            title: 'Sair',
            message: 'Tem certeza que deseja sair do aplicativo?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Sim', cssClass: 'btn btn-ok',
                    handler: () => {
                        this.menu.close();
                        this.authProvider.logout().then(() => {
                            this.userProvider.removeUserLocal();
                            this.nav.setRoot(Constants.LOGIN_PAGE.name);
                        });
                    }
                },
                {
                    text: 'Não', cssClass: 'btn btn-cancel',
                }
            ]
        }).present();
    }

    destroy() {
        if (this.subscribePush)
            this.subscribePush.unsubscribe();
    }

    static showLoading(loadingCtrl) {
        return loadingCtrl.create({ content: 'Aguarde...' });
    }

    static showAlert(alertCtrl, title: string, msg: string, type: string, callback) {
        let alert = alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: data => {
                        callback();
                    }
                }
            ]
        });
        alert.present();
    }

    static showConfirm(alertCtrl, titulo = 'Aviso', descricao = '', callback = undefined) {
        return alertCtrl.create({
            title: titulo,
            subTitle: descricao,
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Sim',
                    cssClass: 'btn btn-ok',
                    handler: data => {
                        if (callback)
                            callback();
                    }
                },
                {
                    text: 'Não', cssClass: 'btn btn-cancel',
                }
            ]
        });
    }

}
