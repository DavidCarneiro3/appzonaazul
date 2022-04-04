webpackJsonp([25],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamerascanPageModule", function() { return CamerascanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camerascan__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CamerascanPageModule = /** @class */ (function () {
    function CamerascanPageModule() {
    }
    CamerascanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camerascan__["a" /* CamerascanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camerascan__["a" /* CamerascanPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            ]
        })
    ], CamerascanPageModule);
    return CamerascanPageModule;
}());

//# sourceMappingURL=camerascan.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```typescript
 * import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 *
 * constructor(private barcodeScanner: BarcodeScanner) { }
 *
 * ...
 *
 *
 * this.barcodeScanner.scan().then(barcodeData => {
 *  console.log('Barcode data', barcodeData);
 * }).catch(err => {
 * 	console.log('Error', err);
 * });
 * ```
 * @interfaces
 * BarcodeScannerOptions
 * BarcodeScanResult
 */
var BarcodeScanner = (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE'
        };
        return _this;
    }
    /**
     * Open the barcode scanner.
     * @param {BarcodeScannerOptions} [options] Optional options to pass to the scanner
     * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
     */
    /**
       * Open the barcode scanner.
       * @param {BarcodeScannerOptions} [options] Optional options to pass to the scanner
       * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
       */
    BarcodeScanner.prototype.scan = /**
       * Open the barcode scanner.
       * @param {BarcodeScannerOptions} [options] Optional options to pass to the scanner
       * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
       */
    function (options) {
        return;
    };
    /**
     * Encodes data into a barcode.
     * NOTE: not well supported on Android
     * @param {string} type Type of encoding
     * @param {any} data Data to encode
     * @returns {Promise<any>}
     */
    /**
       * Encodes data into a barcode.
       * NOTE: not well supported on Android
       * @param {string} type Type of encoding
       * @param {any} data Data to encode
       * @returns {Promise<any>}
       */
    BarcodeScanner.prototype.encode = /**
       * Encodes data into a barcode.
       * NOTE: not well supported on Android
       * @param {string} type Type of encoding
       * @param {any} data Data to encode
       * @returns {Promise<any>}
       */
    function (type, data) {
        return;
    };
    BarcodeScanner.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BarcodeScanner.prototype, "scan", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], BarcodeScanner.prototype, "encode", null);
    /**
     * @name Barcode Scanner
     * @description
     * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
     *
     * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
     *
     * @usage
     * ```typescript
     * import { BarcodeScanner } from '@ionic-native/barcode-scanner';
     *
     * constructor(private barcodeScanner: BarcodeScanner) { }
     *
     * ...
     *
     *
     * this.barcodeScanner.scan().then(barcodeData => {
     *  console.log('Barcode data', barcodeData);
     * }).catch(err => {
     * 	console.log('Error', err);
     * });
     * ```
     * @interfaces
     * BarcodeScannerOptions
     * BarcodeScanResult
     */
    BarcodeScanner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'BarcodeScanner',
            plugin: 'phonegap-plugin-barcodescanner',
            pluginRef: 'cordova.plugins.barcodeScanner',
            repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'Windows']
        })
    ], BarcodeScanner);
    return BarcodeScanner;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerascanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CamerascanPage = /** @class */ (function () {
    function CamerascanPage(navCtrl, navParams, scanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scanner = scanner;
        this.textoFinal = '';
        this.scannedData = {};
    }
    CamerascanPage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: 'Escaneie o seu código de barras ou QR.'
        };
        this.scanner.scan().then(function (data) {
            _this.scannedData = data;
            console.log(_this.scannedData);
        }, function (err) {
            console.log('Erro :', err);
        });
    };
    CamerascanPage.prototype.ionViewDidEnter = function () {
        this.scan();
    };
    CamerascanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-camerascan',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\camerascan\camerascan.html"*/'<ion-content class="backg" padding></ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\camerascan\camerascan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], CamerascanPage);
    return CamerascanPage;
}());

//# sourceMappingURL=camerascan.js.map

/***/ })

});
//# sourceMappingURL=25.js.map