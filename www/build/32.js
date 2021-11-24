webpackJsonp([32],{

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetoresModalPageModule", function() { return SetoresModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__areas_modal__ = __webpack_require__(843);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetoresModalPageModule = /** @class */ (function () {
    function SetoresModalPageModule() {
    }
    SetoresModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__areas_modal__["a" /* AreasModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__areas_modal__["a" /* AreasModalPage */]),
            ],
        })
    ], SetoresModalPageModule);
    return SetoresModalPageModule;
}());

//# sourceMappingURL=areas-modal.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreasModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreasModalPage = /** @class */ (function () {
    function AreasModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.areas = [];
        this.copiaAreas = [];
        this.codigoArea = '';
    }
    AreasModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AreasModalPage.prototype.ionViewWillLoad = function () {
        this.getAreas();
    };
    AreasModalPage.prototype.getAreas = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var areas = _this.navParams.get('datas');
            _this.areas = areas ? areas : [];
            _this.copiaAreas = areas ? areas : [];
            resolve(true);
        });
    };
    AreasModalPage.prototype.confirmar = function () {
        this.viewCtrl.dismiss(this.codigoArea);
    };
    AreasModalPage.prototype.selectArea = function (codigo) {
        this.codigoArea = codigo;
    };
    AreasModalPage.prototype.procurarBairro = function (event) {
        var area = '';
        area = event.target.value;
        if (area) {
            if (area.trim() === '') {
                this.areas = this.copiaAreas;
            }
            else {
                this.areas = this.copiaAreas.filter(function (areas) {
                    return (areas.endereco && areas.endereco.toUpperCase().indexOf(area.toUpperCase()) > -1);
                });
            }
        }
        else {
            this.areas = this.copiaAreas;
        }
    };
    AreasModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'areas-modal',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/areas-modal/areas-modal.html"*/'<ion-header no-border text-center>\n  <ion-navbar color="header" text-center>\n\n    <ion-title>\n      <ion-label>Selecione o bairro</ion-label>\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close" class="header-icon"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar placeholder="Buscar Bairro" color="secondary" (ionInput)="procurarBairro($event)"></ion-searchbar>\n  <ion-list radio-group>\n    <ion-item *ngFor="let area of areas" text-warp>\n      <ion-label>{{ area.codigo }} - {{area.endereco}}</ion-label>\n      <ion-radio item-left slot="start" (ionSelect)="selectArea(area.codigo)" mode="md"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="footer">\n  <ion-toolbar>\n    <ion-title>\n      <ion-row class="btn-rows">\n        <ion-col>\n          <button ion-button block (click)="dismiss()" mode="md">Cancelar</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block (click)="confirmar()" color="default" [disabled]="codigoArea.length <= 0"\n            mode="md">OK</button>\n        </ion-col>\n      </ion-row>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/areas-modal/areas-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], AreasModalPage);
    return AreasModalPage;
}());

//# sourceMappingURL=areas-modal.js.map

/***/ })

});
//# sourceMappingURL=32.js.map