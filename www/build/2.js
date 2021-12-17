webpackJsonp([2],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprarCreditosPagamentoPageModule", function() { return ComprarCreditosPagamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprar_creditos_pagamento__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComprarCreditosPagamentoPageModule = /** @class */ (function () {
    function ComprarCreditosPagamentoPageModule() {
    }
    ComprarCreditosPagamentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__comprar_creditos_pagamento__["a" /* ComprarCreditosPagamentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__comprar_creditos_pagamento__["a" /* ComprarCreditosPagamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
            ],
        })
    ], ComprarCreditosPagamentoPageModule);
    return ComprarCreditosPagamentoPageModule;
}());

//# sourceMappingURL=comprar-creditos-pagamento.module.js.map

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

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateUtil; });
var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    DateUtil.formatDate = function (date) {
        var dateRoute = date.substring(0, date.indexOf('_'));
        dateRoute = dateRoute.replace('-', '.').replace('-', '.');
        var year = dateRoute.substring(0, 4);
        var month = dateRoute.substring(5, 6);
        var day = dateRoute.substring(7, 8);
        return day + "." + month + "." + year;
    };
    DateUtil.formatHour = function (date) {
        var hourRoute = date.substring(date.indexOf('_') + 1, date.length);
        return hourRoute.replace('-', ':').replace('-', ':').substring(0, 5);
    };
    DateUtil.formatDateWithHour = function (date) {
        return this.formatDate(date) + " " + this.formatHour(date);
    };
    DateUtil.formatDateForID = function (date) {
        var day, month, year, hours, minutes, seconds;
        if (date.getMonth() < 9) {
            month = "0" + (date.getMonth() + 1);
        }
        else {
            month = "" + (date.getMonth() + 1);
        }
        if (date.getDate() < 10) {
            day = "0" + date.getDate();
        }
        else {
            day = date.getDate();
        }
        if (date.getHours() < 10) {
            hours = "0" + date.getHours();
        }
        else {
            hours = date.getHours();
        }
        if (date.getMinutes() < 10) {
            minutes = "0" + date.getMinutes();
        }
        else {
            minutes = date.getMinutes();
        }
        if (date.getSeconds() < 10) {
            seconds = "0" + date.getSeconds();
        }
        else {
            seconds = date.getSeconds();
        }
        year = date.getFullYear();
        return day + "" + month + "" + year + "_" + hours + "" + minutes + "" + seconds;
    };
    DateUtil.convertDate = function (isoDateStr) {
        // 2018-06-22T11:11:54
        var split = isoDateStr.split('T');
        var dateStr = split[0];
        var hourStr = split[1];
        var dateArr = dateStr.split('-');
        var hourArr = hourStr.split(':');
        var dt = new Date();
        dt.setFullYear(parseInt(dateArr[0]));
        dt.setMonth(parseInt(dateArr[1]) - 1);
        dt.setDate(parseInt(dateArr[2]));
        dt.setHours(parseInt(hourArr[0]));
        dt.setMinutes(parseInt(hourArr[1]));
        dt.setSeconds(parseInt(hourArr[2]));
        return dt;
    };
    /**
     * Pega a Data atual e formata YY-MM-DDTHH:MM:SS
     * Usado nas simulações da AMC
     */
    DateUtil.getCurrenteDateFormated = function () {
        var currentDate = new Date().toISOString().slice(0, 10);
        var currentTime = new Date().toLocaleTimeString();
        return currentDate + 'T' + currentTime;
    };
    /**
     * Gera um número único para utilização no ID da Transação
     * https://stackoverflow.com/questions/16176757/generate-unique-id-with-javascript-not-exceeding-an-integer
     */
    DateUtil.uniqueID = function () {
        var timeinmilis = new Date().getTime();
        var unique = timeinmilis & 0xffffffff;
        return unique < 0 ? (unique * -1) : unique;
    };
    return DateUtil;
}());

//# sourceMappingURL=date.util.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprarCreditosPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagarme_user_pagarme__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_pagarme_venda_pagarme__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_pagarme_card_pagarme__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_credito__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_cad__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_cad_user__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_cielo_boleto__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_pagamentos_pagamentos__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_pagarme_pagarme__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_creditos_creditos__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util_date_util__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_logger_logger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_cielo_cielo__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__util_map_util__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var ComprarCreditosPagamentoPage = /** @class */ (function () {
    function ComprarCreditosPagamentoPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl, menuCtrl, comunicacaoCentralProvider, userProvider, veiculosProvider, pagamentosProvider, pagarmeProvider, tempoEstacionadoProvider, creditosProvider, cadsUserProvider, logger, cadsProvider, cieloProvider, http, clipboard, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.comunicacaoCentralProvider = comunicacaoCentralProvider;
        this.userProvider = userProvider;
        this.veiculosProvider = veiculosProvider;
        this.pagamentosProvider = pagamentosProvider;
        this.pagarmeProvider = pagarmeProvider;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        this.creditosProvider = creditosProvider;
        this.cadsUserProvider = cadsUserProvider;
        this.logger = logger;
        this.cadsProvider = cadsProvider;
        this.cieloProvider = cieloProvider;
        this.http = http;
        this.clipboard = clipboard;
        this.toastCtrl = toastCtrl;
        this.price = 0;
        this.payMethod = '';
        this.showSpinner = true;
        this.hasCard = 0;
        __WEBPACK_IMPORTED_MODULE_26__app_app_component__["a" /* MyApp */].MAP_LOAD = false;
        __WEBPACK_IMPORTED_MODULE_27__util_map_util__["a" /* MapUtil */].circles.pop();
        this.comunicacaoCentralProvider.setDMA_NTP();
    }
    ComprarCreditosPagamentoPage.prototype.ionViewCanEnter = function () {
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                console.log(userID);
                return true;
            }
        });
    };
    ComprarCreditosPagamentoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        //loading.present();
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                    // this.showSpinner = false;
                    _this.showSpinner = false;
                    _this.user = user;
                    _this.pagamentosProvider.findByUser(_this.user.id).take(1).subscribe(function (_data) {
                        _this.list = _data;
                        if (_this.list['length'] > 0) {
                            _this.hasCard = 1;
                            _this.card = _this.list[0].key;
                        }
                        else {
                            _this.hasCard = 2;
                        }
                        console.log('List', _this.list);
                    });
                    _this.cadsProvider.find().take(1).subscribe(function (value) {
                        value.map(function (item) { return _this.cad = new __WEBPACK_IMPORTED_MODULE_9__models_cad__["a" /* CadModel */](item.cad); });
                    });
                    if (_this.payMethod == 'ticket') {
                        var payment = new __WEBPACK_IMPORTED_MODULE_11__models_cielo_boleto__["b" /* Payment */];
                        payment.Amount = _this.price;
                        payment.Provider = 'Simulado';
                        var data = {
                            MerchantOrderId: __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].uniqueID(),
                            Customer: {
                                Name: _this.user.name,
                                Identity: _this.user.cpf,
                                Address: new __WEBPACK_IMPORTED_MODULE_11__models_cielo_boleto__["a" /* Address */]
                            },
                            Payment: payment,
                        };
                        _this.cieloProvider.resolver('ticket', data)
                            .then(function (data) {
                            _this.showSpinner = false;
                            _this.showBoletoOptions(data.Payment.BarCodeNumber, data.Payment.Url);
                        })
                            .catch(function (error) {
                            _this.showAlert('Ops!', error, 'error', function () {
                                _this.showSpinner = false;
                            });
                        });
                    }
                    else {
                        _this.showSpinner = false;
                    }
                }, function (error) { return loading.dismiss(); });
            }
            else {
                // this.showSpinner = false;
            }
        });
        this.price = (this.navParams.get('priceNormal'));
        //console.log(this.price)
        this.cads = this.navParams.get('cads');
        //console.log(this.cads)
        this.price = Number(this.cads) * 2;
        this.fromPage = this.navParams.get('fromPage');
        this.payMethod = this.navParams.get('paymentMethod');
        this.desconto = this.navParams.get('desconto');
        this.descontoPercent = this.navParams.get('descontoPercent');
        this.priceNormal = this.navParams.get('priceNormal');
        console.log('FromPage', this.fromPage);
        if (this.fromPage == 'estacionar') {
            this.area = this.navParams.get('area');
            this.setor = this.navParams.get('setor');
            this.qtdCads = this.navParams.get('qtdCads');
        }
    };
    ComprarCreditosPagamentoPage.prototype.ionViewWillLeave = function () {
    };
    ComprarCreditosPagamentoPage.prototype.getCartaoNumeroFormat = function (numero) {
        var quatro1 = 'xxxx'; //numero.substr(0,4);
        var quatro2 = 'xxxx'; //numero.substr(4,4);
        var quatro3 = 'xxxx'; //numero.substr(5,4);
        var quatro4 = numero.substr(12);
        return quatro1 + ' ' + quatro2 + ' ' + quatro3 + ' ' + quatro4;
    };
    ComprarCreditosPagamentoPage.prototype.getCard = function (pagtoID) {
        if (pagtoID) {
            console.log('CARD ID', pagtoID);
            var cardObj = this.list.find(function (item) { return item.key === pagtoID; });
            var cardModel = cardObj.values;
            console.log('CARD', cardModel);
            this.openSenhaSeguranca(pagtoID, cardModel);
        }
        else {
            this.showAlert('AVISO', "\u00C9 preciso selecionar um cart\u00E3o!.", '', function () { });
        }
    };
    ComprarCreditosPagamentoPage.prototype.openSenhaSeguranca = function (key, pagamento) {
        var _this = this;
        var start = new Date().getTime();
        var alerts = this.alertCtrl.create({
            title: 'Digite os 3 números da parte de trás do seu cartão.',
            inputs: [
                {
                    name: 'ccv',
                    id: 'ccv',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'CANCELAR',
                    cssClass: 'btn-cancelar'
                },
                {
                    text: 'OK',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        var dataOp = {
                            MerchantOrderId: __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].uniqueID(),
                            Customer: {
                                Name: _this.user.name
                            },
                            Payment: {
                                Type: '',
                                Amount: _this.price,
                                Installments: 1,
                                DebitCard: {},
                                CreditCard: {},
                                Provider: 'Simulado'
                            }
                        };
                        pagamento.ccv = data.ccv;
                        var now = new Date().getTime();
                        var _qtd = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].uniqueID();
                        var idTransacaoDistribuidor = _qtd;
                        console.log('UniqId', _qtd);
                        _this.logger.info('creditos_qtd: ' + _qtd);
                        if (now - start > __WEBPACK_IMPORTED_MODULE_22__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */].APP_ESPERA) {
                            _this.showAlert('Ops', "N\u00E3o foi poss\u00EDvel estacionar seu ve\u00EDculo. Seu tempo de espera durou mais de " + __WEBPACK_IMPORTED_MODULE_22__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */].APP_ESPERA / 1000 + " segundos. Fa\u00E7a o processo novamente.", '', function () { });
                        }
                        else {
                            _this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (_data) {
                                var loading = _this.loadingCtrl.create({ content: 'Aguarde...' });
                                loading.present();
                                if (__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].simular_l2) {
                                    var now_1 = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].getCurrenteDateFormated();
                                    console.log('Simular_l2', __WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].simular_l2);
                                    var response = { dataProcessamento: now_1, autenticacao: '8903907809', sucesso: 'true' };
                                    _this.logger.info('AMC - OK. Response: ' + JSON.stringify(response));
                                    var dataProcessamentoStr = response['dataProcessamento'];
                                    var dataProcessamento_1 = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].convertDate(dataProcessamentoStr);
                                    var autenticacao_1 = response['autenticacao'];
                                    _this.logger.info('dt: ' + dataProcessamento_1);
                                    if (response['sucesso'] || response['sucesso'] === 'true') {
                                        pagamento.id = key;
                                        console.log('Pagamento ', pagamento.id);
                                        if (__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].cielo) {
                                            _this.cieloProvider.resolver(_this.payMethod, dataOp, pagamento)
                                                .then(function (data) {
                                                if (data.Payment.Status === 1) {
                                                    console.log(data);
                                                    _this.saveCredito(pagamento, _this.price, _this.user.id, dataProcessamento_1, autenticacao_1, _this.priceNormal, _this.desconto, _this.descontoPercent, idTransacaoDistribuidor, 0);
                                                    _this.saveCadsUser(_this.cads, _this.user.id, _this.cad.id);
                                                    _this.goHome();
                                                    loading.dismiss();
                                                    // OK --- GOOD
                                                }
                                                else {
                                                    var status_1 = __WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].CieloProductionCodes[data.Payment.ReturnCode] : __WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].CieloSandboxCodes[data.Payment.ReturnCode];
                                                    _this.showAlert('Ops', status_1, 'error', function () {
                                                        loading.dismiss();
                                                    });
                                                }
                                                // alert(data);
                                            }).catch(function (error) {
                                                _this.showAlert('Ops!', JSON.stringify(error), 'error', function () {
                                                    loading.dismiss();
                                                });
                                            });
                                        }
                                        else {
                                            loading.dismiss();
                                            _this.efetuarPagamento(pagamento, data.ccv, dataProcessamento_1, autenticacao_1, _this.priceNormal, _this.desconto, _this.descontoPercent, idTransacaoDistribuidor);
                                        }
                                    }
                                    else {
                                        loading.dismiss();
                                        _this.showAlert("Ops", "Não foi possível finalizar operação. Para mais informações entre em contato com nosso canal de atendimento.", "success", function () { });
                                    }
                                }
                                else {
                                    _this.verificaLinkL2(_this.cads, idTransacaoDistribuidor, _data.dateNow)
                                        .then(function (response) {
                                        console.log('Resposta VerificaLink2 sem formato', response);
                                        console.log('Resposta VerificaLink2', JSON.stringify(response));
                                        _this.logger.info('AMC - OK. Response: ' + JSON.stringify(response));
                                        var dataProcessamentoStr = response['dataProcessamento'];
                                        var dataProcessamento = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].convertDate(dataProcessamentoStr);
                                        var autenticacao = response['autenticacao'];
                                        _this.logger.info('dt: ' + dataProcessamento);
                                        if (response['sucesso'] || response['sucesso'] === 'true') {
                                            pagamento.id = key;
                                            console.log('pagamento ', pagamento.id);
                                            if (__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].cielo) {
                                                _this.cieloProvider.resolver(_this.payMethod, dataOp, pagamento)
                                                    .then(function (data) {
                                                    if (data.Payment.Status === 1) {
                                                        console.log(data);
                                                        _this.saveCredito(pagamento, _this.price, _this.user.id, dataProcessamento, autenticacao, _this.priceNormal, _this.desconto, _this.descontoPercent, idTransacaoDistribuidor, 0);
                                                        _this.saveCadsUser(_this.cads, _this.user.id, _this.cad.id);
                                                        _this.goHome();
                                                        loading.dismiss();
                                                        // OK --- GOOD
                                                    }
                                                    else {
                                                        var status_2 = __WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].CieloProductionCodes[data.Payment.ReturnCode] : __WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].CieloSandboxCodes[data.Payment.ReturnCode];
                                                        _this.showAlert('Ops', status_2, 'error', function () {
                                                            loading.dismiss();
                                                        });
                                                    }
                                                    // alert(data);
                                                }).catch(function (error) {
                                                    _this.showAlert('Ops', JSON.stringify(error), 'error', function () {
                                                        loading.dismiss();
                                                    });
                                                });
                                            }
                                            else {
                                                loading.dismiss();
                                                _this.efetuarPagamento(pagamento, data.ccv, dataProcessamento, autenticacao, _this.priceNormal, _this.desconto, _this.descontoPercent, idTransacaoDistribuidor);
                                            }
                                        }
                                        else {
                                            loading.dismiss();
                                            // this.showAlert('Ops', 'Não foi possível estacionar seu veículo. Para mais informações entre em contato com nosso canal de atendimento.', '', () => {}, () => {}, '','OK');
                                            _this.showAlert("Ops", "Não foi possível finalizar operação. Para mais informações entre em contato com nosso canal de atendimento.", "success", function () { });
                                        }
                                    }).catch(function (error) {
                                        console.log('Erro', error);
                                        loading.dismiss();
                                        _this.logger.info('AMC - ERROR. Response: ' + JSON.stringify(error));
                                        _this.showAlert('Indisponível', 'Não foi possível estabelecer uma comunicação com o serviço da AMC. Para mais informações entre em contato com nosso canal de atendimento.', "info", function () {
                                        });
                                    });
                                }
                            });
                        }
                    }
                }
            ],
            cssClass: 'alert-custom'
        });
        alerts.present();
        this.addImage();
    };
    ComprarCreditosPagamentoPage.prototype.addImage = function () {
        setTimeout(function () {
            var alert = document.querySelector('div.alert-button-group');
            var img = document.createElement("img");
            img.src = "assets/imgs/ccv.png";
            img.className = 'img-ccv';
            alert.appendChild(img);
        }, 100);
    };
    ComprarCreditosPagamentoPage.prototype.getFlag = function (cardnumber) {
        var cardnumber = cardnumber.replace(/[^0-9]+/g, '');
        var cards = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            mastercard: /^5[1-5][0-9]{14}/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
            amex: /^3[47][0-9]{13}/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
            hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
            elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}/,
        };
        for (var flag in cards) {
            if (cards[flag].test(cardnumber)) {
                console.log(flag);
                return flag;
            }
        }
        return false;
    };
    ComprarCreditosPagamentoPage.prototype.verificaLinkL2 = function (cads, idTransacaoDistribuidor, dataEnvio) {
        console.log('Cards', cads);
        console.log('Id', idTransacaoDistribuidor);
        console.log('Data', dataEnvio);
        //console.log('Verificalink2',this.comunicacaoCentralProvider.desbloqueioApp(cads, idTransacaoDistribuidor, dataEnvio))
        return this.comunicacaoCentralProvider.desbloqueioApp(cads, idTransacaoDistribuidor, dataEnvio);
    };
    ComprarCreditosPagamentoPage.prototype.efetuarPagamento = function (pagamento, ccv, date, autenticacao, valorSemDesconto, desconto, descontoPercent, idTransacaoDistribuidor) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        loading.present();
        console.log('Pagamento Model ', pagamento);
        pagamento.ccv = ccv;
        this.user.cpf = pagamento.cpf;
        var comprador = __WEBPACK_IMPORTED_MODULE_5__models_pagarme_user_pagarme__["a" /* UserPagarmeModel */].fromUserModel(this.user);
        var venda = new __WEBPACK_IMPORTED_MODULE_6__models_pagarme_venda_pagarme__["a" /* VendaPagarmeModel */]();
        venda.id = "1";
        venda.name = "Compra de " + this.cads + " CADs";
        venda.qtd = this.cads;
        venda.price = this.price;
        venda.date = this.transformingDate(date);
        var card = __WEBPACK_IMPORTED_MODULE_7__models_pagarme_card_pagarme__["a" /* CardPagarmeModel */].fromCardModel(pagamento);
        console.log('Cartão Model', card);
        var comprovante = {
            "from": "credito",
            "email": this.user.email,
            "numberAuth": "AUTENTICA\u00C7\u00C3O n\u00BA " + autenticacao,
            "value": "CART\u00C3O: **** **** **** " + card.card_number.substr(-4) + " - VALOR: R$" + this.price + ",00",
            "cads": "QUANTIDADE: " + this.cads + " CAD(s)",
            "datehour": "HOR\u00C1RIO: " + new Date(date).toLocaleDateString('pt-BR') + " \u00E0s " + new Date(date).toLocaleTimeString('pt-BR'),
            "formaPagamento": " FORMA DE PAGAMENTO: " + (card.card_number ? 'CARTÃO DE CRÉDITO' : 'DÉBITO')
        };
        this.pagarmeProvider.pagar(card, comprador, venda).then(function (value) {
            console.log(value);
            if (value.status != 'refused') {
                _this.http.get("https://us-central1-zonaazulfortaleza-prod.cloudfunctions.net/sendEmail?data=" + JSON.stringify(comprovante)).subscribe(function (data) { return console.log("sera?", data); });
                _this.saveCredito(pagamento, _this.price, _this.user.id, date, autenticacao, valorSemDesconto, desconto, descontoPercent, idTransacaoDistribuidor, value.id);
                _this.saveCadsUser(_this.cads, _this.user.id, _this.cad.id);
                loading.dismiss();
                _this.goHome();
            }
            else {
                loading.dismiss();
                _this.showAlert("Aviso!", "A operadora não autorizou a compra, tente novamente utilizando outro cartão de crédito.", "info", function () {
                });
            }
        }).catch(function (_error) {
            console.log(JSON.stringify(_error));
            loading.dismiss();
            _this.showAlert("Ops", _error, "error", function () {
            });
        });
    };
    ComprarCreditosPagamentoPage.prototype.closeComprarCreditosPagamento = function () {
        this.navCtrl.pop();
    };
    ComprarCreditosPagamentoPage.prototype.loadImageCartao = function (numero) {
        switch (numero.substring(0, 1)) {
            case "4":
                return "assets/imgs/visa.png";
            case "5":
                return "assets/imgs/mastercard.png";
            default:
                return "assets/imgs/creditcard.ico";
        }
    };
    ComprarCreditosPagamentoPage.prototype.openPage = function (event, item) {
        if (item === void 0) { item = undefined; }
        event.preventDefault();
        this.navCtrl.push('PagamentosFormPage', { 'item': item, 'userId': this.user.id });
    };
    ComprarCreditosPagamentoPage.prototype.saveCredito = function (pagamento, valor, userID, date, autenticacao, valorSemDesconto, desconto, descontoPercent, idTransacaoDistribuidor, idCompra) {
        var credito = new __WEBPACK_IMPORTED_MODULE_8__models_credito__["a" /* CreditoModel */]();
        credito.id = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].formatDateForID(date);
        credito.pagamento_id = pagamento.id;
        credito.valor = valor;
        credito.valorSemDesconto = valorSemDesconto;
        credito.desconto = desconto;
        credito.descontoPercent = descontoPercent;
        credito.numero = pagamento.numero;
        credito.status = 'Aquisição';
        credito.autenticacao = autenticacao;
        credito.idTransacao = idTransacaoDistribuidor;
        credito.idCompra = idCompra;
        this.creditosProvider.save(userID, credito);
    };
    ComprarCreditosPagamentoPage.prototype.saveCadsUser = function (qtdCads, userID, cadID) {
        var cadUser = new __WEBPACK_IMPORTED_MODULE_10__models_cad_user__["a" /* CadUserModel */]();
        cadUser.qtdCads = qtdCads;
        this.cadsUserProvider.save(userID, cadID, cadUser);
    };
    ComprarCreditosPagamentoPage.prototype.transformingDate = function (date) {
        var day;
        var month;
        if (date.getMonth() < 9) {
            month = "0" + (date.getMonth() + 1);
        }
        else {
            month = "" + (date.getMonth() + 1);
        }
        if (date.getDate() < 10) {
            day = "0" + date.getDate();
        }
        else {
            day = date.getDate();
        }
        return date.getFullYear() + "-" + month + "-" + day;
    };
    ComprarCreditosPagamentoPage.prototype.showAlert = function (title, msg, type, callback) {
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
    ComprarCreditosPagamentoPage.prototype.showBoletoOptions = function (number, url) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Boleto gerado com sucesso!',
            message: number,
            cssClass: 'default',
            buttons: [
                {
                    text: 'Copiar',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        _this.clipboard.copy(number);
                        _this.showToast('Código de barras copiado para área de transferência');
                    }
                },
                {
                    text: 'Ver Boleto',
                    cssClass: 'btn-ok',
                    handler: function (data) {
                        window.open(url, '_system');
                    }
                }
            ]
        });
        alert.present();
    };
    ComprarCreditosPagamentoPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    ComprarCreditosPagamentoPage.prototype.goHome = function () {
        if (this.fromPage == 'estacionar') {
            this.viewCtrl.dismiss({ 'gotopage': 'estacionar', 'qtdCads': this.cads });
        }
        else {
            this.viewCtrl.dismiss({ 'gotopage': 'historico' });
        }
        this.menuCtrl.close();
    };
    ComprarCreditosPagamentoPage.prototype.excluir = function (event, cartaoId) {
        var _this = this;
        event.stopPropagation();
        this.onConfirm(function () {
            _this.pagamentosProvider.remove(_this.user.id, cartaoId);
        });
    };
    ComprarCreditosPagamentoPage.prototype.onConfirm = function (success) {
        this.alertCtrl.create({
            message: 'Tem certeza que deseja remover este cartão?',
            cssClass: '',
            buttons: [
                {
                    text: 'Sim',
                    cssClass: 'btn-ok',
                    handler: function () {
                        success();
                    }
                },
                {
                    text: 'Não',
                    cssClass: 'btn btn-cancel',
                }
            ]
        }).present();
    };
    ComprarCreditosPagamentoPage.prototype.goPagamentos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].PAGAMENTOS_PAGE.name, { 'fromPage': this.fromPage });
    };
    ComprarCreditosPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comprar-creditos-pagamento',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/comprar-creditos-pagamento/comprar-creditos-pagamento.html"*/'<!--<ion-header no-border>\n    <ion-navbar color="header">\n        <ion-buttons left>\n            <button ion-button icon-only (click)="closeComprarCreditosPagamento()">\n                <span color="light" class="header-text" showWhen="ios">Fechar</span>\n                <ion-icon name="md-arrow-back" class="header-icon" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n            <ion-label>Pagamentos</ion-label>\n        </ion-title>\n    </ion-navbar>\n</ion-header>-->\n\n<ion-content padding class="content">\n    <div class="info" *ngIf="hasCard === 1">\n        <h2 class="title">ATENÇÃO</h2>\n        <p class="desc">Você está comprando R${{price}},00 que equivale à {{cads}} CAD(s). Confirme para realizar sua compra.</p>\n        <loading-spinner *ngIf="showSpinner"></loading-spinner>\n        <ion-list *ngIf="!showSpinner" radio-group [(ngModel)]="card">\n            <ion-item class="route-item" *ngFor="let pagamento of list">\n                <ion-radio value="{{pagamento.key}}" item-start mode="md"></ion-radio>\n                <ion-label class="information-date">{{getCartaoNumeroFormat(pagamento?.values?.numero)}}</ion-label>\n                <ion-thumbnail item-start class="thumbnail-icon">\n                    <img src="{{loadImageCartao(pagamento?.values?.numero)}}" />\n                </ion-thumbnail>   \n            </ion-item>\n        </ion-list>\n        <button class="btn-confirma" (click)="getCard(card)" ion-button small>CONFIRMAR</button>\n        <button ion-button clear class="btn-add" (click)="closeComprarCreditosPagamento()">Cancelar</button>\n    </div>\n    <div class="info" *ngIf="hasCard === 2">\n        <loading-spinner *ngIf="showSpinner"></loading-spinner>\n        <div *ngIf="!showSpinner">\n            <p class="title">Olá</p>\n            <p class="information-date-2">Insira seu cartão para comprar seus créditos de estacionamento.</p>\n            <button class="btn-confirma" (click)="goPagamentos()" ion-button small>INSERIR</button>\n            <button ion-button clear class="btn-add" (click)="closeComprarCreditosPagamento()">Cancelar</button>\n        </div>\n        \n    </div>\n    <!--<button ion-button (click)="openPage($event)" class="btn" block>+ Adicionar Cartão</button>\n\n    <ion-list>\n        <ion-item detail-none *ngFor="let pagamento of list | async"\n            (click)="openSenhaSeguranca(pagamento?.key, pagamento?.values)" class="route-item">\n            <ion-thumbnail item-start class="thumbnail-icon">\n                <img src="{{loadImageCartao(pagamento?.values?.numero)}}" />\n            </ion-thumbnail>\n            <h2 class="information-date">{{getCartaoNumeroFormat(pagamento?.values?.numero)}}</h2>\n            <p class="information-hour">{{pagamento?.values?.data | date: \'MM/yyyy\'}} </p>\n            <button ion-button color="grey" outline item-end (click)="excluir($event,pagamento?.key)">Excluir</button>\n        </ion-item>\n    </ion-list> -->\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/comprar-creditos-pagamento/comprar-creditos-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_22__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_pagamentos_pagamentos__["a" /* PagamentosProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_pagarme_pagarme__["a" /* PagarmeProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_creditos_creditos__["a" /* CreditosProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_cielo_cielo__["a" /* CieloProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ComprarCreditosPagamentoPage);
    return ComprarCreditosPagamentoPage;
}());

//# sourceMappingURL=comprar-creditos-pagamento.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPagarmeModel; });
var UserPagarmeModel = /** @class */ (function () {
    function UserPagarmeModel() {
    }
    UserPagarmeModel.getPhone = function (phone) {
        return phone.startsWith('+55') ? phone : ('+55' + phone);
    };
    UserPagarmeModel.fromUserModel = function (user) {
        var comprador = new UserPagarmeModel();
        comprador.id = user.id;
        comprador.name = user.name;
        comprador.email = user.email;
        comprador.phone = user.phone ? UserPagarmeModel.getPhone(user.phone) : "";
        comprador.cpf = user.cpf;
        return comprador;
    };
    return UserPagarmeModel;
}());

//# sourceMappingURL=user-pagarme.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendaPagarmeModel; });
var VendaPagarmeModel = /** @class */ (function () {
    function VendaPagarmeModel() {
        this.qtd = 1;
        this.category = '';
        this.date = '';
    }
    VendaPagarmeModel.validateCardNumber = function (card_number) {
        var regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(card_number))
            return false;
        return this.luhnCheck(card_number);
    };
    /**
     * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
     * @author ShirtlessKirk. Copyright (c) 2012.
     * @license WTFPL (http://www.wtfpl.net/txt/copying)
     */
    VendaPagarmeModel.luhnCheck = function (val) {
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            var intVal = parseInt(val.substr(i, 1));
            if (i % 2 == 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return (sum % 10) === 0;
    };
    return VendaPagarmeModel;
}());

//# sourceMappingURL=venda-pagarme.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPagarmeModel; });
var CardPagarmeModel = /** @class */ (function () {
    function CardPagarmeModel() {
    }
    CardPagarmeModel.fromCardModel = function (pagamento) {
        // let split = pagamento.data.split('/');
        // let mes = Number(split[0]);
        // let ano = split[1];
        var _data = new Date(pagamento.data);
        var card = new CardPagarmeModel();
        card.card_number = pagamento.numero;
        // card.card_expiration_date = this.putZero(mes) + '' + ano;
        card.card_expiration_date = this.putZero(_data.getMonth() + 1) + '' + _data.getFullYear();
        card.card_cvv = pagamento.ccv;
        card.card_holder_name = pagamento.nome;
        card.cpf = pagamento.cpf;
        return card;
    };
    CardPagarmeModel.putZero = function (mes) {
        // mes += 1;
        if (mes < 10)
            return '0' + mes;
        return '' + mes;
    };
    return CardPagarmeModel;
}());

//# sourceMappingURL=card-pagarme.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadUserModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);

var CadUserModel = /** @class */ (function () {
    function CadUserModel(obj) {
        this.dataHoraCompra = obj && obj.dataHoraCompra || __WEBPACK_IMPORTED_MODULE_0_firebase_app__["database"].ServerValue.TIMESTAMP;
        this.qtdCads = obj && obj.qtdCads || 0;
    }
    return CadUserModel;
}());

//# sourceMappingURL=cad-user.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Payment; });
// import { DateUtil } from "../../util/date.util";
var Address = /** @class */ (function () {
    function Address() {
        this.Country = 'BRA';
    }
    return Address;
}());

var Payment = /** @class */ (function () {
    function Payment() {
        this.Type = "Boleto";
        this.Instructions = "Qualquer instrução";
        this.Identification = '11884926754';
        this.Demonstrative = 'Demonstrative';
    }
    return Payment;
}());

//# sourceMappingURL=boleto.js.map

/***/ })

});
//# sourceMappingURL=2.js.map