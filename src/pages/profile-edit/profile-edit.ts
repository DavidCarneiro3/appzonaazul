import { Component, ViewChild } from '@angular/core';
import {
    AlertController,
    IonicPage,
    LoadingController,
    NavController,
    NavParams,
    ViewController,
    ActionSheetController,
    ModalController
} from 'ionic-angular';
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { Camera } from "@ionic-native/camera";

import { User } from "../../models/user";

import { CameraProvider } from "../../providers/camera/camera";
import { UserProvider } from "../../providers/user/user";
import { ModalProvider } from "../../providers/modal/modal";

import { Constants } from "../../environments/constants";
import { MyApp } from "../../app/app.component";
import { MapUtil } from "../../util/map.util";
import { FunctionsUtil } from "../../util/functions.util";

@IonicPage()
@Component({
    selector: 'page-profile-edit',
    templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

    @ViewChild('fileUserPhoto') fileUserPhoto;

    user: User = new User();

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public view: ViewController,
        public loadingCtrl: LoadingController,
        public modalProvider: ModalProvider,
        private androidPermissions: AndroidPermissions,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        private userProvider: UserProvider,
        public modalCtrl: ModalController,
        private cameraProvider: CameraProvider) {

        // this.checkPermission();
        MyApp.MAP_LOAD = false;
        MapUtil.circles.pop();
    }

    ionViewCanEnter() {
        this.userProvider.getUserLocal().then(userID => {
            if (userID) {
                return true;
            }
        });
    }

    ionViewDidLoad() {
        this.user = new User(this.navParams.get('user'));
    }

    ionViewWillLeave() {
    }

    selectPicture() {
        this.checkPermission()
        if (Camera['installed']()) {
            //this.showAlert('Sucesso!', 'camera installed...', '', () => {});
            this.cameraProvider.openMedia('Abrir', this.actionSheetCtrl, (imageBase64) => {
                this.user.photo = imageBase64;
            });
        } else {
            // this.showAlert('Sucesso!', 'Else native element...', '', () => {});
            this.fileUserPhoto.nativeElement.click();
        }
    }

    processWebImageUserPhoto($event) {
        this.cameraProvider.processWebImage($event, (imageBase64, w, h) => {
            this.user.photo = imageBase64;

        });
    }

    updateData() {
        let loader = this.loadingCtrl.create({ content: 'Aguarde....' });
        loader.present();

        this.user.phone = FunctionsUtil.cleanBRMask(this.user.phone);
        this.user.cpf = FunctionsUtil.cleanBRMask(this.user.cpf);

        FunctionsUtil.checkCPF(this.user.cpf) ?
            this.userProvider.updateEmail(this.user.email)
                .then(response => {
                    this.userProvider.saveUser(this.user)
                        .then(data => {
                            this.showAlert('Sucesso!', 'Seus Dados foram atualizados!', '', () => {
                                loader.dismiss();
                                this.closeProfileEdit();
                            });
                        }).catch(error => {
                            const message = error
                            console.log(message);
                            this.showAlert('Erro!', error, 'error', () => {
                                loader.dismiss();
                                this.closeProfileEdit();
                            });
                        })
                })
                .catch(error => {
                    console.log(error)
                    const message = Constants.FIREBASE_ERRORS[error.code]
                    this.showAlert('Erro!', message, 'error', () => {
                        loader.dismiss();
                    });
                }) : this.showAlert('Aviso!', 'Digite um CPF válido!', '', () => {
                    loader.dismiss();
                })
    }

    /**
     * Check if app have permission to acess camera and 
     */
    checkPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA && this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then((result) => {
                result.hasPermission ? '' : this.requestCameraPermission()
            })
            .catch(() => {
            })
    }

    /**
     * Open a Modal to Ask Permission , case does not have
     */
    requestCameraPermission() {
        const permissionModal = this.modalCtrl.create(Constants.PERMISSIONS_MODAL_PAGE.name, { fromPage: 'profile-edit' });
        permissionModal.present()
            .then(() => {
                this.modalProvider.setActive();
            })
            .catch((error) => {
                alert(error)
            });
    }

    closeProfileEdit() {
        this.view.dismiss();
    }

    showAlert(title: string, msg: string, type: string, callback) {
        this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [{
                text: 'OK',
                cssClass: 'btn-ok',
                handler: data => {
                    callback();
                }
            }]
        }).present();
    }
}
