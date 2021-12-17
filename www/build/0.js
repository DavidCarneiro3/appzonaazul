webpackJsonp([0],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempoRestantePageModule", function() { return TempoRestantePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tempo_restante__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TempoRestantePageModule = /** @class */ (function () {
    function TempoRestantePageModule() {
    }
    TempoRestantePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tempo_restante__["a" /* TempoRestantePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tempo_restante__["a" /* TempoRestantePage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__["RoundProgressModule"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], TempoRestantePageModule);
    return TempoRestantePageModule;
}());

//# sourceMappingURL=tempo-restante.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_constants__ = __webpack_require__(19);


var MapUtil = /** @class */ (function () {
    function MapUtil() {
    }
    // constructor(private locationAccuracy: LocationAccuracy) { }
    MapUtil.prototype.mapOptions = function () {
        return {
            zoom: 17,
            mapTypeControl: false,
            clickableIcons: false,
            fullscreenControl: false,
            zoomControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            streetViewControl: false,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            styles: this.getStyles()['hide']
        };
    };
    MapUtil.prototype.getStyles = function () {
        return {
            default: null,
            hide: [
                {
                    featureType: 'poi.business',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'labels.icon',
                    stylers: [{ visibility: 'off' }]
                }
            ]
        };
    };
    MapUtil.prototype.searchAddress = function (input) {
        if (input) {
            // https://maps.googleapis.com/maps/api/geocode/json?address=Brazil
            // https://maps.googleapis.com/maps/api/geocode/json?address=Fortaleza
            // https://console.firebase.google.com/u/0/project/zonaazulfortaleza-temp/database/zonaazulfortaleza-temp/data/cads/ce/fortaleza/2018/ABY1x0M2qQgUhhXze1fqQ937JbG22/bounds
            var sw = new google.maps.LatLng(-3.8881764, -38.6365725);
            var ne = new google.maps.LatLng(-3.692025, -38.4013209);
            // pesquisar apenas numa regiao especifica
            var defaultBounds = new google.maps.LatLngBounds(sw, ne);
            var searchBox_1 = new google.maps.places.SearchBox(input, { types: ['(cities)'], bounds: defaultBounds });
            __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
            searchBox_1.addListener('places_changed', function () {
                var places = searchBox_1.getPlaces();
                if (places.length == 0) {
                    return;
                }
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                        __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].map.setZoom(25);
                        __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].bounds = bounds;
                        MapUtil.circles.pop();
                    }
                    else {
                        bounds.extend(place.geometry.location);
                        __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].latitude = place.geometry.location.lat;
                        __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].longitude = place.geometry.location.lng;
                        MapUtil.circles.pop();
                        __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].map.setZoom(25);
                    }
                });
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].map.fitBounds(bounds);
            });
        }
    };
    MapUtil.prototype.addPolyline = function (item, map) {
        if (item != null && item.setor != null) {
            var polyline = void 0;
            var marker_1;
            var iconUrlGrenn = "assets/imgs/map-marker-blue-4.svg";
            var iconUrlRed = "assets/imgs/map-marker-red-4.svg";
            var totalVagasUtilizadas = item.setor.qtd_deficiente_estacionados + item.setor.qtd_idoso_estacionados + item.setor.qtd_normal_estacionados;
            //polyline = new google.maps.Polyline(this.createPolylineOptions(item.setor, totalVagasUtilizadas));
            //polyline.setMap(map);
            //MapUtil.polylines.push(polyline);
            marker_1 = new google.maps.Marker({
                position: { lat: item.setor.latInicio, lng: item.setor.lngInicio },
                icon: {
                    url: (item.setor.total_vagas - totalVagasUtilizadas > 0) ? iconUrlGrenn : iconUrlRed,
                    scaledSize: new google.maps.Size(122, 122)
                }
            });
            // marker.
            marker_1.setMap(map);
            var infowindow_1 = new google.maps.InfoWindow({
                content: this.createInfoPolylines(item.setor, item.area, totalVagasUtilizadas),
            });
            /**
             * Abre as opções do estacionamento
             * polyline  item pressionado onde vai abrir o evento ( linha do inicio e final do Simbolo do carro)
             
            google.maps.event.addListener(polyline, 'click', event => {

                infowindow.setPosition(event.latLng);
                infowindow.open(HomePage.map);
                MapUtil.infoWindows.push(infowindow);

                if (MapUtil.infoWindows.length > 1) {
                    MapUtil.infoWindows.forEach(value => {
                        if (value != infowindow) {
                            value.close();
                        }
                    })
                }
            });

            
             * Abre as opções do estacionamento
             * marker  item pressionado onde vai abrir o evento ( Simbolo do carro verde)
             */
            google.maps.event.addListener(marker_1, 'click', function (event) {
                // let latLng = event.latLng;
                var latLng = marker_1.position;
                console.log('marker', marker_1);
                console.log('event', event);
                infowindow_1.setPosition(latLng);
                infowindow_1.open(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].map);
                MapUtil.infoWindows.push(infowindow_1);
                if (MapUtil.infoWindows.length > 1) {
                    MapUtil.infoWindows.forEach(function (value) {
                        if (value != infowindow_1) {
                            value.close();
                        }
                    });
                }
            });
        }
    };
    MapUtil.prototype.findSetor = function (map, setor, area) {
        var iconUrlGrenn = "assets/imgs/map-marker-blue-4.svg";
        var iconUrlRed = "assets/imgs/map-marker-red-4.svg";
        var marker;
        var latlng = new google.maps.LatLng(setor.latInicio, setor.lngInicio);
        map.setCenter(latlng);
        map.setZoom(17);
        var totalVagasUtilizadas = setor.qtd_deficiente_estacionados + setor.qtd_idoso_estacionados + setor.qtd_normal_estacionados;
        var infowindow = new google.maps.InfoWindow({
            content: this.createInfoPolylines(setor, area, totalVagasUtilizadas),
        });
        google.maps.event.addListener(infowindow, 'domready', function () {
            // Referência ao DIV que recebe o conteúdo da infowindow recorrendo ao jQuery
            //var iwOuter = this.getElementByClassName('.gm-style-iw');
            /* Uma vez que o div pretendido está numa posição anterior ao div .gm-style-iw.
             * Recorremos ao jQuery e criamos uma variável iwBackground,
             * e aproveitamos a referência já existente do .gm-style-iw para obter o div anterior com .prev().
             */
            //var iwBackground = iwOuter.prev();
            // Remover o div da sombra do fundo
            //iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            // Remover o div de fundo branco
            //iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        });
        marker = new google.maps.Marker({
            position: { lat: setor.latInicio, lng: setor.lngInicio },
            icon: {
                url: (setor.total_vagas - totalVagasUtilizadas > 0) ? iconUrlGrenn : iconUrlRed,
                scaledSize: new google.maps.Size(32, 32)
            }
        });
        marker.setMap(map);
        infowindow.setPosition(latlng);
        infowindow.open(map, marker);
        MapUtil.infoWindows.push(infowindow);
        if (MapUtil.infoWindows.length > 1) {
            MapUtil.infoWindows.forEach(function (value) {
                if (value != infowindow) {
                    value.close();
                }
            });
        }
    };
    MapUtil.prototype.findArea = function (map, area) {
        var latlng = new google.maps.LatLng(area.latCenter, area.lngCenter);
        map.setCenter(latlng);
        map.setZoom(17);
    };
    MapUtil.prototype.streatView = function (map, setor) {
        var latlng = new google.maps.LatLng(setor.latInicio, setor.lngInicio);
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('streat-view'), {
            position: latlng,
            pov: {
                heading: 34,
                pitch: 10
            },
            panControl: false,
            linksControl: false,
            rotateControl: false,
            motionTracking: false,
            motionTrackingControl: false
        });
        map.setStreetView(panorama);
    };
    MapUtil.prototype.createPolylineOptions = function (setor, totalVagasUtilizadas) {
        return ({
            path: [{ lat: setor.latInicio, lng: setor.lngInicio }, { lat: setor.latFim, lng: setor.lngFim }],
            geodesic: true,
            strokeColor: this.determineColor(setor.total_vagas - totalVagasUtilizadas),
            strokeOpacity: 1,
            strokeWeight: 5,
            id: setor.codigo
        });
    };
    MapUtil.prototype.createInfoPolylines = function (setor, area, totalVagasUtilizadas) {
        var div = document.createElement('div');
        div.className = "gm-style gm-style-iw";
        var divl = document.createElement('div');
        divl.className = "style-left";
        var divr = document.createElement('div');
        divr.className = "style-right";
        //const setorNome = (setor?.nome.toString().length < 3) ? ('Setor ' + setor.nome) : setor.nome;
        var setorNome = setor.nome;
        // console.log('ST', setorNome + " | " + setor.codigo);
        // console.log('AR', area);
        var h3 = document.createElement('h3');
        h3.className = "setor-codigo";
        //h3.innerText = setorNome + " (" + setor.codigo + ")" + " | Área: " + area.endereco + " (" + area.codigo + ")";
        // h3.innerText = area.endereco + " (" + area.codigo + ")" + " - " +setorNome;
        h3.innerText = setorNome + " - " + area.endereco;
        var h5vt = document.createElement('p');
        h5vt.className = "setor-vagas";
        h5vt.innerText = "Vagas: " + setor.total_vagas;
        var h5vn = document.createElement('p');
        h5vn.className = "setor-vagas-normal";
        // h5vn.innerText = "Vagas convencionais disponíveis: " + ((setor.total_vagas - (setor.vagas_idoso + setor.vagas_deficiente)) - setor.qtd_normal_estacionados);
        h5vn.innerText = "Vagas convencionais: " + (setor.total_vagas - setor.qtd_normal_estacionados);
        var h5vd = document.createElement('p');
        h5vd.className = "setor-vagas-pcd";
        h5vd.innerText = "Vagas de PCD: " + (setor.vagas_deficiente - setor.qtd_deficiente_estacionados);
        var h5vi = document.createElement('p');
        h5vi.className = "setor-vagas-i";
        h5vi.innerText = "Vagas de idoso: " + (setor.vagas_idoso - setor.qtd_idoso_estacionados);
        var h5vc = document.createElement('p');
        h5vc.className = "setor-vagas-cd";
        h5vc.innerText = "Vagas Carga/Descarga: " + (setor.vagas_carga_descarga - setor.qtd_carga_descarga_estacionados);
        var button = document.createElement('button');
        button.className = "btn-estacionar";
        button.innerText = "ESTACIONAR";
        var ico = document.createElement('img');
        ico.setAttribute("src", "assets/icones/estacionamento-white.svg");
        ico.className = "pin-view";
        button.appendChild(ico);
        button.addEventListener('click', function () {
            document.getElementById('btn-show-estacionar-page').setAttribute("setor", setor.codigo);
            document.getElementById('btn-show-estacionar-page').setAttribute("area", area.codigo);
            document.getElementById('btn-show-estacionar-page').setAttribute("setor-nome", setorNome);
            document.getElementById('btn-show-estacionar-page').setAttribute("area-nome", area.endereco);
            document.getElementById('btn-show-estacionar-page').click();
        });
        if ((setor.total_vagas - totalVagasUtilizadas) <= 0) {
            button.disabled = true;
        }
        var divpin = document.createElement('div');
        divpin.className = "btn-pin";
        // buttonView.innerText = "Ver";
        var iconpin = document.createElement('img');
        iconpin.setAttribute("src", "assets/icones/pin-dark.svg");
        iconpin.className = "pin-btn";
        divpin.appendChild(iconpin);
        var buttonView = document.createElement('button');
        buttonView.className = "btn-ver";
        // buttonView.innerText = "Ver";
        var icon = document.createElement('img');
        icon.setAttribute("src", "assets/icones/shopping-cart-white.svg");
        icon.className = "streat-view";
        buttonView.appendChild(icon);
        buttonView.addEventListener('click', function () {
            document.getElementById('btn-show-streat-view').setAttribute("setor", setor.codigo);
            document.getElementById('btn-show-streat-view').setAttribute("area", area.codigo);
            document.getElementById('btn-show-streat-view').click();
        });
        divl.appendChild(h3);
        // div.appendChild(h5vt);
        divr.appendChild(h5vn);
        divr.appendChild(h5vi);
        divr.appendChild(h5vd);
        divr.appendChild(h5vc);
        divr.appendChild(button);
        divl.appendChild(buttonView);
        div.appendChild(divl);
        div.appendChild(divr);
        div.appendChild(divpin);
        return div;
    };
    MapUtil.prototype.determineColor = function (vagas) {
        if (vagas > 0) {
            return __WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].SETOR_COLOR_GREEN;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1__environments_constants__["a" /* Constants */].SETOR_COLOR_RED;
        }
    };
    MapUtil.prototype.cleanPolylines = function () {
        for (var i = 0; i < MapUtil.polylines.length; i++) {
            MapUtil.polylines[i].setMap(null);
        }
    };
    MapUtil.prototype.cleanInfoWindows = function () {
        for (var i = 0; i < MapUtil.infoWindows.length; i++) {
            document.getElementById(MapUtil.infoWindows[i]).remove();
        }
        MapUtil.infoWindows = [];
    };
    MapUtil.prototype.addYourLocationButton = function (map, platform) {
        var _this = this;
        var controlDiv = document.createElement('div');
        controlDiv.setAttribute("id", "control_left");
        var firstChild = document.createElement('button');
        firstChild.id = 'you_location_button';
        firstChild.style.backgroundColor = '#fff';
        firstChild.style.border = 'none';
        firstChild.style.outline = 'none';
        firstChild.style.width = '28px';
        firstChild.style.height = '28px';
        firstChild.style.borderRadius = '2px';
        firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
        firstChild.style.cursor = 'pointer';
        firstChild.style.marginRight = '10px';
        firstChild.style.padding = '0px';
        firstChild.title = 'Your Location';
        controlDiv.appendChild(firstChild);
        var secondChild = document.createElement('div');
        secondChild.style.margin = '5px';
        secondChild.style.width = '18px';
        secondChild.style.height = '18px';
        secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
        // secondChild.style.backgroundImage = 'url("../assets/icon/mylocation-sprite-1x.png")';
        secondChild.style.backgroundSize = '180px 18px';
        secondChild.style.backgroundPosition = '0px 0px';
        secondChild.style.backgroundRepeat = 'no-repeat';
        secondChild.id = 'you_location_img';
        firstChild.appendChild(secondChild);
        firstChild.addEventListener('click', function () {
            //disable button for click
            var button = document.querySelector('#you_location_button');
            button.setAttribute("disabled", "disabled");
            // document.getElementById('you_location_button').setAttribute("disabled", "disabled");
            console.log('GPS');
            if (MapUtil.circles.length == 0) {
                // if (navigator.geolocation) {
                if (_this.geolocation) {
                    // navigator.geolocation.getCurrentPosition(function (position) {
                    console.log('Platform: ' + platform);
                    console.log('iOS: ' + platform.is('ios'));
                    _this.locationAccuracy.canRequest().then(function (canRequest) {
                        if (canRequest || (!canRequest && platform.is("ios"))) {
                            // this.showToast("Can request ...");
                            _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
                                .then(function () {
                                var options = {
                                    enableHighAccuracy: true,
                                    timeout: 20000,
                                    maximumAge: 5000
                                };
                                _this.geolocation.getCurrentPosition(options)
                                    .then(function (position) {
                                    console.log('position: ' + JSON.stringify(position.coords));
                                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                    __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].bounds = 0;
                                    __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].latitude = position.coords.latitude;
                                    __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].longitude = position.coords.longitude;
                                    map.setCenter(latlng);
                                    map.setZoom(17);
                                    var element = document.querySelector('#you_location_img');
                                    if (element)
                                        element.style.backgroundPosition = '-144px 0px';
                                    //removing previous marker on map
                                    if (_this.userLocationMarker) {
                                        _this.userLocationMarker.setMap(null);
                                    }
                                    //add the new marker
                                    _this.userLocationMarker = new google.maps.Marker({
                                        position: latlng,
                                        icon: {
                                            url: "assets/icon/icon-map.svg",
                                            scaledSize: new google.maps.Size(64, 64)
                                        }
                                        //map: HomePage.map
                                    });
                                    _this.userLocationMarker.setMap(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */].map);
                                    // let circle = new google.maps.Circle({
                                    //     strokeColor: '#1E90FF',
                                    //     strokeOpacity: 0.2,
                                    //     strokeWeight: 2,
                                    //     fillColor: '#00BFFF',
                                    //     fillOpacity: 0.2,
                                    //     radius: 100,
                                    //     center: latlng
                                    // });
                                    // circle.setMap(HomePage.map);
                                    // MapUtil.circles.push(circle);
                                    button.removeAttribute("disabled");
                                }).catch(function (error) {
                                    console.log('.getCurrentPosition: ', error);
                                    // this.showAlert('Localização', 'Para obter um melhor aproveitamento do Zona Fácil, recomendamos que ative o GPS do seu telefone', '', () => {});
                                    _this.showToast("Sinal de GPS fraco ou desligado. Para obter um melhor aproveitamento, verifique se o GPS do seu telefone está ativado");
                                    button.removeAttribute("disabled");
                                });
                            }, function (error) {
                                console.log(".request: ", error.message);
                                // this.showAlert('Localização', error.message, '', () => {});
                                _this.showToast("Sinal de GPS fraco ou desligado. Para obter um melhor aproveitamento, verifique se o GPS do seu telefone está ativado");
                                console.log('gps not active by user ...');
                                button.removeAttribute("disabled");
                            });
                        }
                        else {
                            // this.showToast("Can t request ...");
                            console.log('can`t request ........');
                            button.removeAttribute("disabled");
                        }
                    });
                    //
                }
                else {
                    var element = document.querySelector('#you_location_img');
                    element.style.backgroundPosition = '-144px 0px';
                }
            }
        });
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
    };
    MapUtil.prototype.showAlert = function (title, msg, type, callback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        callback();
                    }
                }
            ]
        });
        alert.present();
    };
    MapUtil.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.present();
    };
    MapUtil.polylines = [];
    MapUtil.infoWindows = [];
    MapUtil.circles = [];
    return MapUtil;
}());

//# sourceMappingURL=map.util.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsUtil; });
var FunctionsUtil = /** @class */ (function () {
    function FunctionsUtil() {
    }
    FunctionsUtil.checkCPF = function (cpf) {
        var soma = 0;
        var resto = 0;
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        if (cpf.length != 11) {
            return false;
        }
        if (cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||
            cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||
            cpf == '88888888888' || cpf == '99999999999') {
            return false;
        }
        else {
            for (var i = 1; i <= 9; i++) {
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            resto = (soma * 10) % 11;
            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }
            if (resto != parseInt(cpf.substring(9, 10))) {
                return false;
            }
            soma = 0;
            for (var i = 1; i <= 10; i++) {
                soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;
            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }
            if (resto != parseInt(cpf.substring(10, 11))) {
                return false;
            }
            return true;
        }
    };
    FunctionsUtil.checkCNPJ = function (cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');
        if (cnpj == '')
            return false;
        if (cnpj.length != 14)
            return false;
        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
        // Valida DVs
        var tamanho = cnpj.length - 2;
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    };
    FunctionsUtil.cleanBRMask = function (value) {
        return value.replace(/[^\d]+/g, '');
    };
    /**
     *  Retorna a distancia entre dois pontos
     *  @param start Objecto contento a latitude e a longitude do ponto inicial
     *  @param end Objecto contendo a latitude e a longitude do ponto final
     *  @returns Distancia entre o ponto inicial e o ponto final em KM
     *  https://www.joshmorony.com/create-a-nearby-places-list-with-google-maps-in-ionic-2-part-2/
    */
    FunctionsUtil.getDistanceBetweenPoints = function (start, end, units) {
        if (start != 0 && end != 0) {
            var earthRadius = {
                miles: 3958.8,
                km: 6371
            };
            var R = earthRadius[units || 'km'];
            var startLatitude = start.lat;
            var startLongitude = start.lng;
            var endLatitude = end.lat;
            var endLongitude = end.lng;
            var dLat = this.toRadiano((endLatitude - startLatitude));
            var dLon = this.toRadiano((endLongitude - startLongitude));
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.toRadiano(startLatitude)) * Math.cos(this.toRadiano(endLatitude)) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var distance = R * c;
            return distance;
        }
        return undefined;
    };
    /**
     *  Converte graus para Radiano
     * @param x numero a ser convertido para o Radiano
     * @returns numero de entrada em Radianos
     */
    FunctionsUtil.toRadiano = function (x) {
        return x * Math.PI / 180;
    };
    /**
     * Verfica qual horario padrão o usuário deseja estacionar
     * @param horario horario em que vai acontecer o estacionamento
     * @param holidays lista com todos os feriados
     * @returns String informando em qual caso ele deseja estacionar fora do horario padrão
     */
    FunctionsUtil.foraHorarioPadrão = function (horario, holidays) {
        var date = horario.toLocaleDateString();
        if (horario.getDay() === 0 || holidays.indexOf(date) > -1)
            return 'Domingo';
        if (horario.getDay() === 5 && horario.getHours() > 18)
            return 'Sexta';
        if (horario.getDay() === 6 && horario.getHours() > 13)
            return 'Sabado';
        return;
    };
    return FunctionsUtil;
}());

//# sourceMappingURL=functions.util.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export LatLng */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_location_accuracy__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_setores_setores__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_area_area__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_map_util__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_functions_util__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_estacionar_estacionar__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, modalCtrl, alertCtrl, toastCtrl, loadingCtrl, navParams, geolocation, locationAccuracy, androidPermission, veiculosProvider, userProvider, setoresProvider, authProvider, cadsUserProvider, modalProvider, speechRecognition, comunicacaoCentralProvider, areaProvider, events, estacionarProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.androidPermission = androidPermission;
        this.veiculosProvider = veiculosProvider;
        this.userProvider = userProvider;
        this.setoresProvider = setoresProvider;
        this.authProvider = authProvider;
        this.cadsUserProvider = cadsUserProvider;
        this.modalProvider = modalProvider;
        this.speechRecognition = speechRecognition;
        this.comunicacaoCentralProvider = comunicacaoCentralProvider;
        this.areaProvider = areaProvider;
        this.events = events;
        this.estacionarProvider = estacionarProvider;
        this.city = 'Fortaleza';
        this.estacionar = [];
        this.setores = [];
        this.qtdCadsUser = 0;
        this.qtdCadsUSados = 0;
        this.mapUtil = new __WEBPACK_IMPORTED_MODULE_16__util_map_util__["a" /* MapUtil */]();
        this.allSetores = [];
        this.selectOptions = {
            title: 'Cidade',
            subTitle: 'Escolha sua cidade',
            mode: 'ios'
        };
        this.getAllSetores();
        platform.registerBackButtonAction(function () {
            if (_this.navCtrl.getActive().name == 'HomePage') {
                if (!_this.modalProvider.isActive()) {
                    _this.goLogoutFromHome();
                }
            }
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.checkPermission();
        this.userProvider.getUserLocal().then(function (userID) {
            _this.fromPage = _this.navParams.get('fromPage');
            if (_this.fromPage == 'comprovante') {
                _this.navParams.data = null;
                _this.openTempoRestantePage();
            }
            if (userID) {
                return true;
            }
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            _this.useID = userID;
            if (userID != null) {
                var tmpid = "3KIogxCKR8hbQJrfI80449xlvtv1";
                console.log(userID);
                _this.estacionarProvider.countCadsById(userID)
                    .subscribe(function (val) {
                    // console.log(val)
                });
                _this.cadsUserProvider.findQtdCads(userID).take(1).subscribe(function (value) {
                    value.map(function (cads) {
                        if (cads.key == "qtdCadsUsados") {
                            _this.qtdCadsUSados = cads.item;
                        }
                        else {
                            _this.qtdCadsUser += cads.item.qtdCads;
                        }
                    });
                });
                _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                    _this.user = user;
                    localStorage.setItem('userProfile', _this.user.profile);
                });
            }
        });
        this.getSetores();
        this.initMap();
        setTimeout(function () {
            _this.searcElement.nativeElement.addEventListener('click', function () {
                var span = document.getElementById('icon');
                var mic = document.getElementById('mic');
                mic.style.display = 'none';
                if (_this.platform.is('android')) {
                    span.style.display = 'block';
                }
                else {
                    span.style.display = 'none';
                }
                span.addEventListener('click', function () {
                    _this.searcElement.nativeElement.value = '';
                });
            });
            _this.searcElement.nativeElement.addEventListener('focusout', function () {
                var span = document.getElementById('icon');
                var mic = document.getElementById('mic');
                span.style.display = 'none';
                if (_this.platform.is('android')) {
                    mic.style.display = 'block';
                }
                else {
                    mic.style.display = 'none';
                }
            });
        }, 2000);
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.ionViewWillLeave = function () {
    };
    HomePage.prototype.ionViewDidLeave = function () {
    };
    HomePage.prototype.ionViewWillUnload = function () {
        if (this.subscribeSetores)
            this.subscribeSetores.unsubscribe();
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
        if (this.mapElement != null && this.mapElement.nativeElement != null) {
            this.mapUtil.geolocation = this.geolocation;
            this.mapUtil.locationAccuracy = this.locationAccuracy;
            this.mapUtil.alertCtrl = this.alertCtrl;
            this.mapUtil.toastCtrl = this.toastCtrl;
            HomePage_1.map = new google.maps.Map(this.mapElement.nativeElement, this.mapUtil.mapOptions());
            var input = document.getElementById('search');
            if (HomePage_1.latitude == 0 && HomePage_1.longitude == 0) {
                HomePage_1.longitude = -38.522980;
                HomePage_1.latitude = -3.731397;
                HomePage_1.map.setCenter({ lat: HomePage_1.latitude, lng: HomePage_1.longitude });
            }
            if (__WEBPACK_IMPORTED_MODULE_18__app_app_component__["a" /* MyApp */].MAP_LOAD) {
                if (this.platform.is('cordova')) {
                    // 
                    this.locationAccuracy.canRequest().then(function (canRequest) {
                        if (canRequest || (!canRequest && _this.platform.is('ios'))) {
                            // the accuracy option will be ignored by iOS
                            _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                                var options = {
                                    enableHighAccuracy: true,
                                    timeout: 20000,
                                    maximumAge: 5000
                                };
                                _this.geolocation.getCurrentPosition(options)
                                    .then(function (position) {
                                    if (position.coords != null &&
                                        position.coords.latitude != null &&
                                        position.coords.longitude != null) {
                                        HomePage_1.bounds = 0;
                                        HomePage_1.latitude = position.coords.latitude;
                                        HomePage_1.longitude = position.coords.longitude;
                                        var latlng = { lat: position.coords.latitude, lng: position.coords.longitude };
                                        HomePage_1.map.setCenter(latlng);
                                        _this.mapUtil.userLocationMarker = new google.maps.Marker({
                                            position: latlng,
                                            icon: {
                                                url: "assets/icon/icon-map.svg",
                                                scaledSize: new google.maps.Size(64, 64)
                                            },
                                        });
                                        var object = _this.calculaDistancia(HomePage_1.latitude, HomePage_1.longitude);
                                        object.sort(function (a, b) { return a.distance - b.distance; });
                                        _this.showSetor(object[0].area, object[0].codigo);
                                    }
                                    else {
                                        _this.showToast("Sinal de GPS fraco ou desligado. Para obter um melhor aproveitamento, verifique se o GPS do seu telefone está ativado");
                                        HomePage_1.longitude = -38.522980;
                                        HomePage_1.latitude = -3.731397;
                                        HomePage_1.map.setCenter({ lat: HomePage_1.latitude, lng: HomePage_1.longitude });
                                    }
                                })
                                    .catch(function (error) {
                                    var localizacao = _this.localizacaoPadraoSemGPS();
                                    HomePage_1.latitude = localizacao.latitude;
                                    HomePage_1.longitude = localizacao.longitude;
                                    HomePage_1.map.setCenter({ lat: HomePage_1.latitude, lng: HomePage_1.longitude });
                                    _this.showToast("Sinal de GPS fraco ou desligado. Para obter um melhor aproveitamento, verifique se o GPS do seu telefone está ativado");
                                    // console.log('error GPS', error);
                                });
                            }, function (error) {
                                _this.showToast("Sinal de GPS fraco ou desligado. Para obter um melhor aproveitamento, verifique se o GPS do seu telefone está ativado");
                            });
                        }
                        else {
                            console.log(' not can request ...........');
                        }
                    }).catch(function (error) {
                        console.log('Deu erro', error);
                        var localizacao = _this.localizacaoPadraoSemGPS();
                        HomePage_1.latitude = localizacao.latitude;
                        HomePage_1.longitude = localizacao.longitude;
                        HomePage_1.map.setCenter({ lat: HomePage_1.latitude, lng: HomePage_1.longitude });
                        _this.showToast("Sinal de GPS fraco ou desligado. Para obter um melhor aproveitamento, verifique se o GPS do seu telefone está ativado");
                    });
                }
                else {
                    var localizacao = this.localizacaoPadraoSemGPS();
                    HomePage_1.latitude = localizacao.latitude;
                    HomePage_1.longitude = localizacao.longitude;
                    HomePage_1.map.setCenter({ lat: HomePage_1.latitude, lng: HomePage_1.longitude });
                }
            }
            else {
                if (HomePage_1.bounds != 0) {
                    HomePage_1.map.fitBounds(HomePage_1.bounds);
                }
                else {
                    HomePage_1.map.setCenter({ lat: HomePage_1.latitude, lng: HomePage_1.longitude });
                }
            }
            this.mapUtil.searchAddress(input);
            this.mapUtil.addYourLocationButton(HomePage_1.map, this.platform);
            input.onblur;
        }
    };
    HomePage.prototype.localizacaoPadraoSemGPS = function () {
        return { latitude: -3.731397, longitude: -38.522980 };
    };
    HomePage.prototype.showCloseSetor = function () {
        var nearSetor = this.calculaDistancia(HomePage_1.latitude, HomePage_1.longitude);
        nearSetor.sort(function (a, b) { return a.distance - b.distance; });
        this.showSetor(nearSetor[0].area, nearSetor[0].codigo);
    };
    HomePage.prototype.getSetores = function () {
        var _this = this;
        this.areaProvider.getAreas().take(1).subscribe(function (_areas) {
            _this.subscribeSetores = _this.setoresProvider.getSetoresByLocation().subscribe(function (value) {
                _this.mapUtil.cleanPolylines();
                value.map(function (value) {
                    for (var key in value.setores) {
                        var _area = _areas.find(function (_item) { return _item.key === value.key; });
                        _this.mapUtil.addPolyline({ key: value.key, setor: value.setores[key], area: _area.area }, HomePage_1.map);
                    }
                    var mic = document.getElementById('mic');
                    if (_this.platform.is('android')) {
                        mic.style.display = 'block';
                    }
                    else {
                        mic.style.display = 'none';
                    }
                });
            });
        });
    };
    // VERIFICA SE O APP POSSUI AUTORIZAÇÃO PARA A LEITURA DO TELEFONE E PEGA O IMEI DO CELULAR
    HomePage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermission.checkPermission(this.androidPermission.PERMISSION.READ_PHONE_STATE)
            .then(function (result) {
            if (!result.hasPermission) {
                var modalPermission_1 = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'phone' });
                modalPermission_1.present().then(function () {
                    modalPermission_1.onWillDismiss(function () {
                        _this.androidPermission.checkPermission(_this.androidPermission.PERMISSION.ACESS_COARSE_LOCATION
                            && _this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION)
                            .then(function (result) {
                            if (!(result.hasPermission)) {
                                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'home-page' });
                                modal.present();
                            }
                        });
                    });
                });
            }
            else {
                _this.userProvider.updateUuidOrImei(_this.useID, function (uuid) {
                });
                _this.androidPermission.checkPermission(_this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION)
                    .then(function (location) {
                    if (!location.hasPermission) {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'home-page' });
                        modal.present();
                    }
                });
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.askPermission = function () {
        var permissionModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].PERMISSIONS_MODAL_PAGE.name, { fromPage: 'phone' });
        permissionModal.present()
            .then(function () { })
            .catch(function (err) { });
    };
    HomePage.prototype.openEstacionarPage = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        var button = document.getElementById('btn-show-estacionar-page');
        var codigoSetor = button.getAttribute("setor");
        var codigoArea = button.getAttribute("area");
        var nomeSetor = button.getAttribute("setor-nome");
        var nomeArea = button.getAttribute("area-nome");
        if ((this.qtdCadsUser - this.qtdCadsUSados) > 0) {
            this.userProvider.getUserLocal().then(function (userID) {
                _this.veiculosProvider.findByUser(userID).take(1).subscribe(function (_item) {
                    loading.dismiss();
                    if (_item.length > 0) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].ESTACIONAR_PAGE.name, {
                            fromPage: 'mapa',
                            setor: codigoSetor,
                            area: codigoArea,
                            'setor-nome': nomeSetor,
                            'area-nome': nomeArea,
                            cad: _this.cad,
                            qtdCads: (_this.qtdCadsUser - _this.qtdCadsUSados)
                        });
                    }
                    else {
                        if (_this.user.profile != "revendedor") {
                            _this.showConditions("Olá!", "Você não possui veículos cadastrados. Deseja cadastrá-lo?", "info", "Não", "Sim", function () {
                            }, function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].VEICULOS_FORM_PAGE.name, {
                                    withMenu: true,
                                    userId: userID,
                                    fromPage: 'estacionar',
                                    area: codigoArea,
                                    setor: codigoSetor,
                                    cad: _this.cad,
                                    qtdCads: (_this.qtdCadsUser - _this.qtdCadsUSados),
                                    veiculoAllArr: _item
                                });
                            });
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].VEICULOS_FORM_PAGE.name, {
                                withMenu: true,
                                userId: userID,
                                fromPage: 'estacionar',
                                area: codigoArea,
                                setor: codigoSetor,
                                cad: _this.cad,
                                qtdCads: (_this.qtdCadsUser - _this.qtdCadsUSados),
                                veiculoAllArr: _item
                            });
                        }
                    }
                }, function (error) { return loading.dismiss(); });
            });
        }
        else {
            loading.dismiss();
            this.showConditions("Olá!", "Você não possui CADs no momento. Compre agora e estacione seu veículo.", "info", "Não", "COMPRAR", function () {
            }, function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, {
                    fromPage: 'estacionar',
                    area: codigoArea,
                    setor: codigoSetor,
                    qtdCads: (_this.qtdCadsUser - _this.qtdCadsUSados)
                });
            });
        }
    };
    HomePage.prototype.openTempoRestantePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name, {
            withMenu: true
        });
    };
    /**
     * Adiciona todos os setores em uma lista , de modo a ter a coordenadas para abrir o mais próximo
     */
    HomePage.prototype.getAllSetores = function () {
        var _this = this;
        this.areaProvider.getAreas().take(1).subscribe(function (_areas) {
            _this.setoresProvider.getSetoresByLocation().subscribe(function (_setores) {
                _setores.forEach(function (setor) {
                    for (var _setor in setor.setores) {
                        var area = _areas.find(function (item) { return item.area.codigo == setor.key; });
                        var set = {
                            "area": area.area,
                            "setor": setor.setores[_setor]
                        };
                        _this.allSetores.push(set);
                    }
                });
            });
        });
    };
    /**
     * Calcula a distancia de um ponto indicado com todos os setores
     * @param lat latitude do ponto a ser calculado a distancia  do setor
     * @param long  longitude do ponto a ser calculado a distancia do setor
     * @returns lista de objectos contendo a distancia , area e o codigo do setor
     */
    HomePage.prototype.calculaDistancia = function (lat, long) {
        var myPosition = new LatLng(lat, long);
        var setores = [];
        this.allSetores.forEach(function (setor) {
            var _setor = new LatLng(setor.setor.latInicio, setor.setor.lngInicio);
            var distance = __WEBPACK_IMPORTED_MODULE_17__util_functions_util__["a" /* FunctionsUtil */].getDistanceBetweenPoints(myPosition, _setor, 'km').toFixed(3);
            var open = {
                "distance": "" + distance,
                "area": setor.area,
                "codigo": setor.setor.codigo
            };
            setores.push(open);
        });
        return setores;
    };
    HomePage.prototype.showAlert = function (title, msg, type, callback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        callback();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.showConditions = function (title, msg, type, btnName1, btnName2, callback, callback2) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            // cssClass: type,
            buttons: [
                {
                    text: btnName1,
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        callback();
                    }
                },
                {
                    text: btnName2,
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        callback2();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.buscarSetores = function () {
        var _this = this;
        var wait = this.loadingCtrl.create({ content: 'Aguarde...' });
        wait.present();
        var zonas = [];
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.areaProvider.getAreas().take(1).subscribe(function (_areas) {
                    _this.setoresProvider.getSetoresByLocation().subscribe(function (_setores) {
                        _setores.map(function (value) {
                            for (var key in value.setores) {
                                var _area = _areas.find(function (_item) { return _item.key === value.key; });
                                if (_area.key == value.key) {
                                    zonas.push({ 'area': _area.area, 'setor': value.setores[key].nome, 'setorCodigo': value.setores[key].codigo });
                                }
                            }
                        });
                        wait.dismiss();
                        var setoresModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].SETORES_MODAL_PAGE.name, { setores: zonas });
                        setoresModal.present().then(function () {
                            _this.modalProvider.setActive();
                        });
                        setoresModal.onDidDismiss(function (data) {
                            if (data) {
                                var setor = String(data.setorCodigo);
                                _this.showSetor(data.area, setor);
                            }
                        });
                    });
                });
            }
        });
    };
    HomePage.prototype.showSetor = function (area, setor) {
        var _this = this;
        this.setoresProvider.byId(area.codigo, setor)
            .subscribe(function (data) {
            _this.mapUtil.findSetor(HomePage_1.map, data, area);
        }, function (error) {
        });
    };
    HomePage.prototype.showStreatView = function () {
        /*let wait = this.loadingCtrl.create({ content: 'Aguarde...' });
        wait.present();
        let button = document.getElementById('btn-show-streat-view');
        let codigoSetor = button.getAttribute("setor");
        let codigoArea = button.getAttribute("area");

        this.setoresProvider.byId(codigoArea, codigoSetor)
            .subscribe(data => {
                const streatViewPage = this.modalCtrl.create(Constants.STREAT_VIEW_PAGE.name, { map: HomePage.map, data: data, wait: wait });
                streatViewPage.present().then(() => {
                    this.modalProvider.setActive();
                });
            },
                (error) => {
                    console.log(error);
                    wait.dismiss();
                })*/
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].PAGAMENTOS_PAGE.name);
    };
    HomePage.prototype.showToast = function (msg, time) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time ? time : 6000,
            position: 'bottom'
        });
        toast.present();
    };
    HomePage.prototype.goLogoutFromHome = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Sair',
            message: 'Deseja sair do aplicativo?',
            cssClass: 'alert',
            buttons: [
                {
                    text: 'Sim', cssClass: 'btn btn-ok',
                    handler: function () {
                        // this.menu.close();
                        _this.authProvider.logout().then(function () {
                            _this.userProvider.removeUserLocal();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].LOGIN_PAGE.name);
                        });
                    }
                },
                {
                    text: 'Não', cssClass: 'btn btn-cancel',
                }
            ]
        }).present();
    };
    HomePage.prototype.listen = function () {
        var _this = this;
        this.speechRecognition.requestPermission()
            .then(function () {
            var options = {};
            _this.speechRecognition.startListening(options)
                .subscribe(function (matches) {
                _this.searcElement.nativeElement.value = matches[0];
                _this.searcElement.nativeElement.focus();
            }, function (error) {
                console.log('error', error);
            });
        }, function () {
            // alert('Denied')
            console.log('Você precisa permitir a ação de reconhecimento de voz.');
        });
    };
    HomePage.prototype.openHelp = function () {
        this.showAlert('Ajuda', 'Para estacionar clique no ícone ou na linha verde exibido no mapa referente ao estacionamento pretendido. Será aberto uma nova tela, onde você irá confirmar seu estacionamento.', '', function () { });
    };
    HomePage.latitude = 0;
    HomePage.longitude = 0;
    HomePage.bounds = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "searcElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('icon'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "iconElement", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/home/home.html"*/'<ion-header no-border>\n    <ion-navbar color="header">\n        <button ion-button icon-only menuToggle>\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-header">\n            <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n                <ion-option value="Fortaleza">Fortaleza</ion-option>\n              </ion-select>\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openTempoRestantePage()">\n                <img src="assets/icones/car-white.svg"  />\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content">\n    <div #map id="map"></div>\n    <input #search id="search" class="controls" type="text" placeholder="Buscar">\n\n    <button ion-button icon-only type="button" item-right clear id="mic" >\n        <ion-icon color="gray" name="search" class="icon"></ion-icon>\n    </button>\n    <!--<ion-fab id="help">\n        <button ion-fab icon-only (click)="openHelp()">\n            <ion-icon name="help"></ion-icon>\n        </button>\n    </ion-fab> -->\n\n    <ion-fab id="close" (click)="showCloseSetor()">\n        <button ion-fab>\n        </button>\n    </ion-fab>\n\n   <!-- <ion-fab>\n        <button ion-fab icon-only color="default" (click)="buscarSetores()" id="locate">\n            <ion-icon name="search" class="icon"></ion-icon>\n        </button>\n    </ion-fab> -->\n\n    <ion-icon #icon name="close" class="icon-clear" style="display: none" id="icon"></ion-icon>\n    <button ion-button id="btn-show-estacionar-page" (click)="openEstacionarPage($event)"\n        [style.display]="\'none\'"></button>\n    <button ion-button id="btn-show-streat-view" (click)="showStreatView()" [style.display]="\'none\'"></button>\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_8__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_setores_setores__["a" /* SetoresProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_modal_modal__["a" /* ModalProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_12__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_area_area__["a" /* AreaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_19__providers_estacionar_estacionar__["a" /* EstacionarProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    return LatLng;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(205);
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var interval_1 = __webpack_require__(776);
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__(777);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(774);
var Observable_1 = __webpack_require__(4);
var async_1 = __webpack_require__(58);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(50);
var DEGREE_IN_RADIANS = Math.PI / 180;
var RoundProgressService = (function () {
    function RoundProgressService(document) {
        this.supportsSvg = !!(document &&
            document.createElementNS &&
            document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
        this._base = document && document.head.querySelector('base');
        this._hasPerf = typeof window !== 'undefined' &&
            window.performance &&
            window.performance.now &&
            typeof window.performance.now() === 'number';
    }
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    RoundProgressService.prototype.resolveColor = function (color) {
        if (this._base && this._base.href) {
            var hashIndex = color.indexOf('#');
            if (hashIndex > -1 && color.indexOf('url') > -1) {
                return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
            }
        }
        return color;
    };
    /**
     * Generates a timestamp.
     */
    RoundProgressService.prototype.getTimestamp = function () {
        return this._hasPerf ? window.performance.now() : Date.now();
    };
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    RoundProgressService.prototype.getArc = function (current, total, pathRadius, elementRadius, isSemicircle) {
        if (isSemicircle === void 0) { isSemicircle = false; }
        var value = Math.max(0, Math.min(current || 0, total));
        var maxAngle = isSemicircle ? 180 : 359.9999;
        var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
        var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
        var end = this._polarToCartesian(elementRadius, pathRadius, 0);
        var arcSweep = (percentage <= 180 ? 0 : 1);
        return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
    };
    ;
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    RoundProgressService.prototype._polarToCartesian = function (elementRadius, pathRadius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
        var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
        var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
        return x + ' ' + y;
    };
    return RoundProgressService;
}());
RoundProgressService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], RoundProgressService);
exports.RoundProgressService = RoundProgressService;
;
//# sourceMappingURL=round-progress.service.js.map

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var RoundProgressConfig = (function () {
    function RoundProgressConfig() {
        this._options = {
            radius: 125,
            animation: 'easeOutCubic',
            animationDelay: null,
            duration: 500,
            stroke: 15,
            color: '#45CCCE',
            background: '#EAEAEA',
            responsive: false,
            clockwise: true,
            semicircle: false,
            rounded: false
        };
    }
    /** Configures the defaults. */
    RoundProgressConfig.prototype.setDefaults = function (config) {
        return Object.assign(this._options, config);
    };
    /** Fetches a value from the defaults. */
    RoundProgressConfig.prototype.get = function (key) {
        return this._options[key];
    };
    return RoundProgressConfig;
}());
RoundProgressConfig = __decorate([
    core_1.Injectable()
], RoundProgressConfig);
exports.RoundProgressConfig = RoundProgressConfig;
//# sourceMappingURL=round-progress.config.js.map

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var RoundProgressEase = (function () {
    function RoundProgressEase() {
    }
    // t: current time (or position) of the neonate. This can be seconds or frames, steps,
    // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
    // b: beginning value of the property.
    // c: change between the beginning and destination value of the property.
    // d: total time of the neonate.
    RoundProgressEase.prototype.linearEase = function (t, b, c, d) {
        return c * t / d + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    ;
    RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        ;
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    ;
    RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    ;
    RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    ;
    RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    ;
    RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    ;
    return RoundProgressEase;
}());
RoundProgressEase = __decorate([
    core_1.Injectable()
], RoundProgressEase);
exports.RoundProgressEase = RoundProgressEase;
/**
 * TERMS OF USE - EASING EQUATIONS
 * Open source under the BSD License.

 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted
 * provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions
 * and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
 * and the following disclaimer in the documentation and/or other materials provided with the
 * distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
//# sourceMappingURL=round-progress.ease.js.map

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var round_progress_service_1 = __webpack_require__(778);
var round_progress_config_1 = __webpack_require__(779);
var round_progress_ease_1 = __webpack_require__(780);
var RoundProgressComponent = (function () {
    function RoundProgressComponent(_service, _easing, _defaults, _ngZone, _renderer) {
        this._service = _service;
        this._easing = _easing;
        this._defaults = _defaults;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._lastAnimationId = 0;
        this.radius = this._defaults.get('radius');
        this.animation = this._defaults.get('animation');
        this.animationDelay = this._defaults.get('animationDelay');
        this.duration = this._defaults.get('duration');
        this.stroke = this._defaults.get('stroke');
        this.color = this._defaults.get('color');
        this.background = this._defaults.get('background');
        this.responsive = this._defaults.get('responsive');
        this.clockwise = this._defaults.get('clockwise');
        this.semicircle = this._defaults.get('semicircle');
        this.rounded = this._defaults.get('rounded');
        this.onRender = new core_1.EventEmitter();
    }
    /** Animates a change in the current value. */
    RoundProgressComponent.prototype._animateChange = function (from, to) {
        var _this = this;
        if (typeof from !== 'number') {
            from = 0;
        }
        to = this._clamp(to);
        from = this._clamp(from);
        var self = this;
        var changeInValue = to - from;
        var duration = self.duration;
        // Avoid firing change detection for each of the animation frames.
        self._ngZone.runOutsideAngular(function () {
            var start = function () {
                var startTime = self._service.getTimestamp();
                var id = ++self._lastAnimationId;
                requestAnimationFrame(function animation() {
                    var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                    var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                    self._setPath(value);
                    self.onRender.emit(value);
                    if (id === self._lastAnimationId && currentTime < duration) {
                        requestAnimationFrame(animation);
                    }
                });
            };
            if (_this.animationDelay > 0) {
                setTimeout(start, _this.animationDelay);
            }
            else {
                start();
            }
        });
    };
    /** Sets the path dimensions. */
    RoundProgressComponent.prototype._setPath = function (value) {
        if (this._path) {
            this._renderer.setElementAttribute(this._path.nativeElement, 'd', this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle));
        }
    };
    /** Clamps a value between the maximum and 0. */
    RoundProgressComponent.prototype._clamp = function (value) {
        return Math.max(0, Math.min(value || 0, this.max));
    };
    /** Determines the SVG transforms for the <path> node. */
    RoundProgressComponent.prototype.getPathTransform = function () {
        var diameter = this._diameter;
        if (this.semicircle) {
            return this.clockwise ?
                "translate(0, " + diameter + ") rotate(-90)" :
                "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
        }
        else if (!this.clockwise) {
            return "scale(-1, 1) translate(-" + diameter + " 0)";
        }
    };
    /** Resolves a color through the service. */
    RoundProgressComponent.prototype.resolveColor = function (color) {
        return this._service.resolveColor(color);
    };
    /** Change detection callback. */
    RoundProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes.current) {
            this._animateChange(changes.current.previousValue, changes.current.currentValue);
        }
        else {
            this._setPath(this.current);
        }
    };
    Object.defineProperty(RoundProgressComponent.prototype, "_diameter", {
        /** Diameter of the circle. */
        get: function () {
            return this.radius * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_elementHeight", {
        /** The CSS height of the wrapper element. */
        get: function () {
            if (!this.responsive) {
                return (this.semicircle ? this.radius : this._diameter) + 'px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_viewBox", {
        /** Viewbox for the SVG element. */
        get: function () {
            var diameter = this._diameter;
            return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoundProgressComponent.prototype, "_paddingBottom", {
        /** Bottom padding for the wrapper element. */
        get: function () {
            if (this.responsive) {
                return this.semicircle ? '50%' : '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    return RoundProgressComponent;
}());
__decorate([
    core_1.ViewChild('path'),
    __metadata("design:type", Object)
], RoundProgressComponent.prototype, "_path", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "current", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "radius", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RoundProgressComponent.prototype, "animation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "animationDelay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "duration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RoundProgressComponent.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RoundProgressComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RoundProgressComponent.prototype, "background", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "responsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "clockwise", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "semicircle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RoundProgressComponent.prototype, "rounded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RoundProgressComponent.prototype, "onRender", void 0);
RoundProgressComponent = __decorate([
    core_1.Component({
        selector: 'round-progress',
        template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_viewBox\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
        host: {
            'role': 'progressbar',
            '[attr.aria-valuemin]': 'current',
            '[attr.aria-valuemax]': 'max',
            '[style.width]': "responsive ? '' : _diameter + 'px'",
            '[style.height]': '_elementHeight',
            '[style.padding-bottom]': '_paddingBottom',
            '[class.responsive]': 'responsive'
        },
        styles: [
            ":host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }",
            ":host.responsive {\n      width: 100%;\n      padding-bottom: 100%;\n    }",
            ":host.responsive > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
        round_progress_ease_1.RoundProgressEase,
        round_progress_config_1.RoundProgressConfig,
        core_1.NgZone,
        core_1.Renderer])
], RoundProgressComponent);
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoRestantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estacionar_estacionar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_veiculo__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_setores_setores__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_map_util__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_modal_modal__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var TempoRestantePage = /** @class */ (function () {
    function TempoRestantePage(navCtrl, navParams, viewCtrl, userProvider, estacionarProvider, tempoEstacionadoProvider, veiculoProvider, setorProvider, logger, cadsUserProvider, alertCtrl, platform, modalProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userProvider = userProvider;
        this.estacionarProvider = estacionarProvider;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        this.veiculoProvider = veiculoProvider;
        this.setorProvider = setorProvider;
        this.logger = logger;
        this.cadsUserProvider = cadsUserProvider;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.modalProvider = modalProvider;
        this.modalCtrl = modalCtrl;
        this.showSpinner1 = true;
        // user: User;
        this.loadObj = true;
        this.tempoCurrent = Date.now();
        this._estacionados = [];
        this.qtdCadsUser = 0;
        this.qtdCadsUsados = 0;
        this.fromPage = '';
        this.canCancel = false;
        this.veiculos = [];
        __WEBPACK_IMPORTED_MODULE_12__app_app_component__["a" /* MyApp */].MAP_LOAD = false;
        __WEBPACK_IMPORTED_MODULE_13__util_map_util__["a" /* MapUtil */].circles.pop();
        // this.platform.resume.subscribe(event => {
        //     this.navCtrl.setRoot(Constants.TEMPO_RESTANTE_PAGE.name)
        // })
    }
    TempoRestantePage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.user_id = userID;
                return true;
            }
        });
    };
    TempoRestantePage.prototype.getVeiculo = function (veiculo_id, userID) {
        return this.veiculoProvider.findByVeiculo(veiculo_id, userID);
    };
    TempoRestantePage.prototype.renovarEstacionar = function (estacionar) {
        var profile = localStorage.getItem('userProfile');
        if (!estacionar.veiculo_id || profile === 'revendedor') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].VEICULOS_FORM_PAGE.name, {
                withMenu: true,
                userId: this.user_id,
                fromPage: 'renovar',
                area: estacionar.area_id,
                setor: estacionar.setor_id,
                cad: 1,
                qtdCads: (this.qtdCadsUser - this.qtdCadsUsados),
                placa: estacionar.comprovante.placa,
                tipo_veiculo: estacionar.comprovante.tipo_veiculo,
                veiculo_id: estacionar.veiculo_id
            });
        }
        else {
            for (var _i = 0, _a = this._estacionados; _i < _a.length; _i++) {
                var estacionado = _a[_i];
                if (estacionado.estacionar.veiculo.placa == estacionar.veiculo.placa) {
                    var veiculo = {
                        key: estacionado.estacionar.veiculo_id,
                        veiculo: estacionado.estacionar.veiculo
                    };
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].ESTACIONAR_PAGE.name, {
                        setor: estacionar.setor_id,
                        area: estacionar.area_id,
                        fromPage: 'tempo_restante',
                        cad: 1,
                        veiculo: veiculo,
                        qtdCads: (this.qtdCadsUser - this.qtdCadsUsados),
                    });
                    break;
                }
            }
        }
    };
    TempoRestantePage.prototype.validaRenovar = function (estacionar) {
        estacionar.renovar = true;
        if (estacionar.qtd === 2) {
            estacionar.renovar = false;
        }
        else if (estacionar.tempoComprado === 300) {
            estacionar.renovar = false;
        }
    };
    TempoRestantePage.prototype.ionViewWillEnter = function () {
        //atualizar tempo restante se o usuário vier de comprvante(renovação)
        var last = this.navParams.get('fromPage');
        this.fromPage = last;
        if (last) {
            if (last == 'comprovante') {
                // this.ionViewDidLoad();
            }
        }
    };
    TempoRestantePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.horaRegistro = Date.now();
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
            // console.log('now firebase: ' + JSON.stringify(data));
            // console.log('now local: ' + this.tempoCurrent);
            if (data && data.now) {
                _this.tempoCurrent = data.now;
            }
            _this.userProvider.getUserLocal().then(function (userID) {
                if (userID) {
                    _this.cadsUserProvider.findQtdCads(userID).take(1).subscribe(function (value) {
                        value.map(function (cads) {
                            if (cads.key == "qtdCadsUsados") {
                                _this.qtdCadsUsados = cads.item;
                            }
                            else {
                                _this.qtdCadsUser += cads.item.qtdCads;
                            }
                        });
                    });
                    _this.estacionarProvider.findByUser(userID).subscribe(function (_values) {
                        _this._estacionados = [];
                        if (_values.length > 0) {
                            _values.map(function (_item) {
                                _this.logger.info('estacionado: ' + _item.estacionar.tempoEstacionado + ' | ' + new Date(_item.estacionar.tempoEstacionado));
                                _this.validaRenovar(_item.estacionar);
                                if (_item.estacionar.tempoEstacionado - _this.tempoCurrent >= 0) {
                                    _this._estacionados = [];
                                    _this.getVeiculo(_item.estacionar.veiculo_id, userID)
                                        .take(1).subscribe(function (_veiculo) {
                                        _this.loadObj = false;
                                        _this.showSpinner1 = false;
                                        _item.estacionar.veiculo = _veiculo;
                                        _this.estacionar = _item.estacionar;
                                        /*this.veiculoSelecionado = _item.estacionar.veiculo;
                                        this.veiculo_id = _item.estacionar.veiculo.id;
                                        this.placa = _item.estacionar.veiculo.placa;
                                        this.veiculo_tipo = _item.estacionar.veiculo.tipo_veiculo;
                                        this.veiculo_marca = _item.estacionar.veiculo.marca;
                                        this.veiculo_modelo = _item.estacionar.veiculo.modelo;
                                        this.dataHoraRegistro = _item.estacionar.dataHoraRegistro;
                                        this.horario = _item.estacionar.comprovante.horario;
                                        this.tempoComprado = _item.estacionar.tempoComprado;
                                        this.qtd = _item.estacionar.qtd;
                                        this.valor = _item.estacionar.comprovante.valor;
                                        this.amc = _item.estacionar.comprovante.numberAuth;*/
                                        _this.logger.info(_item);
                                        console.log(_this.estacionar);
                                        _this._estacionados.push(_item);
                                    });
                                }
                                else {
                                    _this.loadObj = false;
                                    _this.showSpinner1 = false;
                                }
                            });
                            // this.loadObj = false;
                            //  this.showSpinner1 = false;
                            console.log(_this._estacionados);
                        }
                        else {
                            _this.loadObj = false;
                            _this.showSpinner1 = false;
                        }
                    }, function (error) {
                        _this.showSpinner1 = false;
                        _this.loadObj = false;
                    });
                }
            });
        });
    };
    TempoRestantePage.prototype.openVeiculoEstacionado = function (obj) {
        var _this = this;
        this.setorProvider.byId(obj.estacionar.area_id, obj.estacionar.setor_id).take(1).subscribe(function (value) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].VEICULO_ESTACIONADO_PAGE.name, { lat: value.latInicio, lng: value.lngInicio });
        });
    };
    TempoRestantePage.prototype.closeTempoRestantePage = function () {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name)
            .then(function () {
            _this.modalProvider.desactivate();
        });
    };
    TempoRestantePage.prototype.getImage = function (tipo) {
        return __WEBPACK_IMPORTED_MODULE_7__models_veiculo__["a" /* VeiculoModel */].getImage(tipo);
    };
    TempoRestantePage.prototype.selecionarVeiculo = function () {
        var _this = this;
        var veiculos = this._estacionados;
        console.log(veiculos);
        var veiculoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].ESTACIONADOS_MODAL_PAGE.name, { veiculos: veiculos, fromPage: "tempo_restante" });
        veiculoModal.present();
        veiculoModal.onDidDismiss(function (data) {
            if (data) {
                var veiculo = data;
                //veiculo.estacionar.veiculo = veiculo;
                _this.estacionar = veiculo.estacionar;
                _this.veiculoSelecionado = veiculo.estacionar.veiculo;
                _this.veiculo_id = veiculo.estacionar.veiculo.id;
                _this.placa = veiculo.estacionar.veiculo.placa;
                _this.veiculo_tipo = veiculo.estacionar.veiculo.tipo_veiculo;
                _this.veiculo_marca = veiculo.estacionar.veiculo.marca;
                _this.veiculo_modelo = veiculo.estacionar.veiculo.modelo;
                console.log(_this.estacionar);
                //this._estacionados.push(veiculo);
            }
        });
    };
    TempoRestantePage.prototype.getVeiculosUser = function (user) {
        // if (user.profile == "revendedor") {
        //     // console.log('**********', this.veiculos);
        //     const _veiculo = this.navParams.get('veiculo') || null;
        var _this = this;
        //     if(_veiculo) {
        //         this.veiculos.push({ key: new Date().valueOf(), veiculo: _veiculo });
        //         console.log(this.veiculos)
        //         const _idx = this.veiculos.length-1;
        //         const _vTmp = this.veiculos[_idx];
        //         this.veiculo_id = _vTmp.veiculo.id || _vTmp.key;
        //         this.placa = _vTmp.veiculo.placa;
        //         this.veiculo_tipo = _vTmp.veiculo.tipo_veiculo;
        //         console.log(this.placa)
        //         this.veiculos[_idx].veiculo.id = this.veiculo_id
        //         this.veiculoSelecionado = this.veiculos[_idx].veiculo;
        //     }
        //     this.showSpinner1 = false;
        // } else {
        if (this.fromPage) {
            if (this.fromPage === 'tempo_restante') {
                //this.fromRenovar = true;
                var veiculo = this.navParams.get('veiculo');
                this.veiculo_id = veiculo.key;
                this.placa = veiculo.veiculo.placa;
                this.veiculoSelecionado = new __WEBPACK_IMPORTED_MODULE_7__models_veiculo__["a" /* VeiculoModel */](veiculo.veiculo);
                this.showSpinner1 = false;
                // para fazer getVeiculos funcionar ... e aparecer o veiculo nas opçoes :/
                this.veiculos.push({ key: veiculo.key, veiculo: veiculo.veiculo });
            }
            else {
                this.veiculoProvider.findByUser(user.id).take(1).subscribe(function (value) {
                    value.forEach(function (item) {
                        item.veiculo.id = item.key;
                        _this.veiculos.push({ key: item.key, veiculo: item.veiculo });
                    });
                    _this.veiculo_id = _this.veiculos[0].key;
                    _this.placa = _this.veiculos[0].veiculo.placa;
                    _this.veiculoSelecionado = _this.veiculos[0].veiculo;
                    _this.showSpinner1 = false;
                });
            }
        }
        else {
            this.veiculoProvider.findByUser(user.id).take(1).subscribe(function (value) {
                value.forEach(function (item) {
                    item.veiculo.id = item.key;
                    _this.veiculos.push({ key: item.key, veiculo: item.veiculo });
                });
                _this.veiculo_id = _this.veiculos[0].key;
                _this.placa = _this.veiculos[0].veiculo.placa;
                _this.veiculo_tipo = _this.veiculos[0].veiculo.tipo_veiculo;
                _this.veiculo_marca = _this.veiculos[0].veiculo.marca;
                _this.veiculo_modelo = _this.veiculos[0].veiculo.modelo;
                _this.veiculoSelecionado = _this.veiculos[0].veiculo;
                console.log(_this.veiculo_marca + ' + ' + _this.veiculo_modelo + ' ' + _this.placa + ' ' + _this.veiculo_tipo);
                _this.showSpinner1 = false;
            });
        }
        //}
    };
    TempoRestantePage.prototype.percent = function (time) {
        var init;
        var final;
        init = new Date(time).getTime();
        final = new Date(this.tempoCurrent).getTime();
        var hourDiff = final - init; //in ms
        var secDiff = hourDiff / 1000; //in s
        var minDiff = hourDiff / 60 / 1000; //in minutes
        var hDiff = hourDiff / 3600 / 1000; //in hours
        var humanReadable = { hours: 0, minutes: 0 };
        humanReadable.hours = Math.floor(hDiff);
        humanReadable.minutes = Math.floor(minDiff - 60 * humanReadable.hours);
        //console.log(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())
        time = Number(humanReadable.hours * 60) + Number(humanReadable.minutes);
        //console.log(humanReadable)
        //console.log(time)
        return time;
    };
    TempoRestantePage.prototype.toTimestamp = function (horario) {
        var aux = horario.split(':'), dt = new Date();
        dt.setHours(aux[0]);
        dt.setMinutes(aux[1]);
        dt.setSeconds(0);
        return dt.getTime();
    };
    TempoRestantePage.prototype.somaHora = function (hora, minutes) {
        var minutosAdd = minutes * 60 * 1000;
        var timeHoraFinal = this.toTimestamp(hora) + minutosAdd;
        var dt = new Date(timeHoraFinal);
        var horaRetorno = ((dt.getHours() < 10) ? '0' + dt.getHours() : dt.getHours()) + ':' + ((dt.getMinutes() < 10) ? '0' + dt.getMinutes() : dt.getMinutes());
        //horaRetorno += (dt.getMinutes() < 10) ? '0'+dt.getMinutes(): dt.getMinutes();
        return horaRetorno;
    };
    TempoRestantePage.prototype.showAlert = function (title, message, type, callback) {
        this.alertCtrl.create({
            title: title,
            message: message,
            cssClass: type,
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) { return callback(); }
                }
            ]
        }).present();
    };
    TempoRestantePage.prototype.openHelp = function () {
        this.showAlert('Ajuda', 'Aqui você verá seus veículos estacionados e seu tempo restante.', '', function () { });
    };
    TempoRestantePage.prototype.cancelaEstacionamento = function (veiculo) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].CANCELAR_TRANSACAO_PAGE.name, {
            estacionar: JSON.stringify(veiculo.estacionar)
        });
    };
    TempoRestantePage.prototype.goComprar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name);
    };
    TempoRestantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tempo-restante',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/tempo-restante/tempo-restante.html"*/'<ion-header no-border>\n    <ion-navbar color="header">\n\n        <ion-title style="width: 26em;">\n            <ion-label class="header-title">Saldo: {{qtdCadsUser - qtdCadsUsados}} CADs</ion-label>\n        </ion-title>\n\n        <button ion-button icon-only menuToggle *ngIf="!(fromPage === \'comprovante\')">\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n        </button>\n\n        <ion-buttons left *ngIf="fromPage == \'comprovante\' ">\n            <button ion-button (click)="closeTempoRestantePage()">\n                <span color="light" class="header-text" showWhen="ios">Fechar</span>\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows,core"></ion-icon>\n            </button>\n        </ion-buttons>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="goComprar()">\n                <img src="assets/icones/shopping-cart-white.svg" alt="" class="header-img">\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content">\n    \n\n    <div *ngIf="!showSpinner1">\n        <div class=\'time-master\' *ngIf="estacionar">\n            <div class="{{estacionar?.veiculo?.tipo_veiculo == \'caminhao\'? \'info-content-green\':\'info-content-pink\'}}">\n                <loading-spinner *ngIf="showSpinner"></loading-spinner>\n                <ion-item class="item-select" no-lines mode="md" *ngIf="!showSpinner">\n                    <ion-label text-left class="title-select" mode="md">{{estacionar?.veiculo?.placa}}<p>{{estacionar?.veiculo?.marca || estacionar?.veiculo.modelo | uppercase}}</p></ion-label>\n                    <ion-label text-center mode="md"><img class="thumb" src="assets/icones/{{estacionar?.veiculo.tipo_veiculo == \'caminhao\'? \'caminhao-blue-dark.svg\': \'carro-white.svg\'}}" alt=""></ion-label>\n                </ion-item>\n              \n            </div>\n            \n            <div>\n                <div class="time">\n                    <timer [decorrido]="estacionar?.dataHoraRegistro" \n                           [now]="tempoCurrent"\n                           [placa]="estacionar?.veiculo_id" \n                           [status]="estacionar?.status"></timer>\n                    <p><ion-label class="clock-text">Até {{somaHora(estacionar?.comprovante?.horario,estacionar?.tempoComprado)}} </ion-label></p>\n                </div>        \n                        \n                <round-progress\n                    [current]="percent(estacionar?.dataHoraRegistro)"\n                    [max]="estacionar?.tempoComprado"\n                    [color]="\'#3F65FF\'"\n                    [background]="\'#E0E0E0\'"\n                    [radius]="65"\n                    [stroke]="10"\n                    [semicircle]="false"\n                    [rounded]="true"\n                    [clockwise]="true"\n                    [responsive]="false"\n                    [duration]="800"\n                    [animation]="\'easeInOutQuart\'"\n                    [animationDelay]="0">\n                        <timer [time]="estacionar?.tempoEstacionado" \n                               [now]="tempoCurrent"\n                               [placa]="estacionar?.veiculo_id" \n                               [status]="estacionar?.status"></timer>\n                </round-progress>   \n            </div>\n            <div class="item-info">\n                <p>Placa: {{estacionar?.veiculo?.placa}}</p>\n                <p>CADs Usados: {{estacionar?.qtd}}</p>\n                <p>Tempo de {{estacionar?.qtd}} CAD: {{estacionar?.tempoComprado/60}} Hora(s)</p>\n                <p>Valor: <span class="price-text"> R${{estacionar?.comprovante?.valor}},00</span></p>\n                <p>Data/Hora da ativação: {{estacionar?.comprovante?.data+\' \'+  estacionar?.comprovante?.horario}}</p>\n                <p>Registro AMC: {{estacionar?.comprovante?.numberAuth}}</p>\n            </div>\n            <button ion-button small  mode="ios" type="button" (click)="renovarEstacionar(estacionar)"\n                    class="btn-renovar" icon-end>ESTENDER <ion-icon name="md-time"></ion-icon></button>\n            <button ion-button small clear mode="ios" type="button" (click)="closeTempoRestantePage()"\n                    class="btn-plus" icon-end>ESTACIONAR EM OUTRO LOCAL <ion-icon name="ios-add-outline"></ion-icon></button>       \n                     \n        </div>\n        \n         <!--<ion-row *ngFor="let _estacionados[0] of _estacionados;">\n            \n           <ion-col col-3 class="col-img">\n                <ion-item class="item-img" no-lines no-padding>\n                    <ion-thumbnail item-start class="thumbnail-icon">\n                        <img src="{{getImage(comprovante?.tipo_veiculo)}}" />\n                    </ion-thumbnail>\n                </ion-item>\n            </ion-col>-->\n           <!-- <ion-col col-4 class="col-details">\n                <p class="item-details-board">{{ comprovante?.placa }}</p>\n                <p *ngIf="veiculo" class="item-details-mark">{{veiculo?.marca}}\n                    {{veiculo?.modelo}}</p>\n                <p *ngIf="!veiculo" class="item-details-mark">Setor {{setor_id}}</p>\n                <p class="item-details-city">{{ cidade }}</p>\n                <ion-row>\n                    \n                    <ion-col col-5 class="item-info" >\n                        \n                           \n                        \n                    </ion-col>\n                </ion-row>\n                    <ion-col>\n                        \n                    </ion-col>\n            </ion-col>\n            <ion-col col-1 class="col-details renovar" *ngIf="renovar">\n                <ion-row></ion-row>\n                <button ion-button small mode="ios" type="button" (click)="renovarEstacionar(_estacionados[0].estacionar)"\n                    class="btn-renovar">Renovar</button>\n            </ion-col>\n            <ion-col col-12 class="col-message">\n                <ion-item class="item-messagem" no-lines no-padding>\n\n                    <ion-label *ngIf="qtd == 1" class="message">* Esta ativação possui\n                        {{qtd}} CAD ativo</ion-label>\n                    <ion-label *ngIf="qtd > 1" class="message">* Esta ativação possui\n                        {{qtd}} CADs ativos</ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col col-12 class="col-message">\n                <ion-item class="item-btn-rodape" no-lines no-padding>\n                    <button ion-button clear small color="blue2" icon-start (click)="openVeiculoEstacionado(_estacionados[0])">\n                        <ion-icon name=\'ios-pin-outline\'></ion-icon>Ver Localização\n                    </button>\n                </ion-item>\n            </ion-col>\n        </ion-row>-->\n        <div *ngIf="!estacionar" class="row-info">\n            <ion-col col-12>\n                <ion-item no-lines>\n                    <h2>Não há nenhum veículo estacionado</h2>\n                </ion-item>\n                \n            </ion-col>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/tempo-restante/tempo-restante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estacionar_estacionar__["a" /* EstacionarProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_setores_setores__["a" /* SetoresProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_15__providers_modal_modal__["a" /* ModalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], TempoRestantePage);
    return TempoRestantePage;
}());

//# sourceMappingURL=tempo-restante.js.map

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(44);
var round_progress_component_1 = __webpack_require__(781);
var round_progress_service_1 = __webpack_require__(778);
var round_progress_ease_1 = __webpack_require__(780);
var round_progress_config_1 = __webpack_require__(779);
var RoundProgressModule = (function () {
    function RoundProgressModule() {
    }
    return RoundProgressModule;
}());
RoundProgressModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [round_progress_component_1.RoundProgressComponent],
        exports: [round_progress_component_1.RoundProgressComponent],
        providers: [round_progress_service_1.RoundProgressService, round_progress_ease_1.RoundProgressEase, round_progress_config_1.RoundProgressConfig]
    })
], RoundProgressModule);
exports.RoundProgressModule = RoundProgressModule;
;
__export(__webpack_require__(781));
__export(__webpack_require__(778));
__export(__webpack_require__(780));
__export(__webpack_require__(779));
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map