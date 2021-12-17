webpackJsonp([1],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoPageModule", function() { return HistoricoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historico__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HistoricoPageModule = /** @class */ (function () {
    function HistoricoPageModule() {
    }
    HistoricoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historico__["a" /* HistoricoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historico__["a" /* HistoricoPage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HistoricoPageModule);
    return HistoricoPageModule;
}());

//# sourceMappingURL=historico.module.js.map

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

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_cad__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_creditos_creditos__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_estacionar_estacionar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_setores_setores__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_map_util__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HistoricoPage = /** @class */ (function () {
    function HistoricoPage(navCtrl, navParams, modalCtrl, actionSheetCtrl, userProvider, estacionarProvider, loadingCtrl, creditosProvider, cadsProvider, veiculosProvider, tempoEstacionadoProvider, alertCtrl, setorProvider, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userProvider = userProvider;
        this.estacionarProvider = estacionarProvider;
        this.loadingCtrl = loadingCtrl;
        this.creditosProvider = creditosProvider;
        this.cadsProvider = cadsProvider;
        this.veiculosProvider = veiculosProvider;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        this.alertCtrl = alertCtrl;
        this.setorProvider = setorProvider;
        this.event = event;
        this.showSpinner1 = true;
        this.showSpinner2 = true;
        this.time15min = 900000;
        this.time60min = 3600000;
        this.placa = '';
        this.historico = "historico-estacionamentos";
        this.listEstacionamentos = [];
        this.listEstacionamentosView = [];
        this.listCreditos = [];
        this.listCreditosView = [];
        this.listVeiculos = [];
        this.cancelAttempt = false;
        this.timer = 0;
        this.timer_vetor = [];
        this.qtdCads = 0;
        this.valorTotal = 0;
        this.cad = new __WEBPACK_IMPORTED_MODULE_5__models_cad__["a" /* CadModel */]();
        this.itensPage = [];
        this.offset = 10;
        this.index = 0;
        this.cores = [
            '#000033',
            '#000066',
            '#000099',
            '#0000CC',
            '#0000FF',
            '#003300',
            '#003333',
            '#003366',
            '#003399',
            '#0033CC',
            '#0033FF',
            ' #006600',
            '#006633',
            ' #006666',
            '#006699',
            '#0066CC',
            '#0066FF',
            ' #009900',
            '#009933',
            '#009966',
            '#009999',
            '#0099CC',
            '#0099FF',
            '#00CC00',
            '#00CC33',
            '#00CC66',
            '#00CC99',
            '#00CCCC',
            '#00CCFF',
            '#00FF00',
            '#00FF33',
            '#00FF66',
            '#00FF99',
            '#00FFCC',
            '#00FFFF',
            '#330000',
            '#330033',
            '#330066',
            '#330099',
            '#3300CC',
            '#3300FF',
            '#333300',
            '#333333',
            '#333366',
            '#333399',
            '#3333CC',
            '#3333FF',
            '#336600',
            '#336633',
            '#336666',
            '#336699',
            '#3366CC',
            '#3366FF',
            '#339900',
            '#339933',
            '#339966',
            '#339999',
            '#3399CC',
            '#3399FF',
            '#33CC00',
            '#33CC33',
            '#33CC66',
            '#33CC99',
            '#33CCCC',
            '#33CCFF',
            '#33FF00',
            '#33FF33',
            '#33FF66',
            '#33FF99',
            '#33FFCC',
            '#33FFFF',
            '#660000',
            '#660033',
            '#660066',
            '#660099',
            '#6600CC',
            '#6600FF',
            '#663300',
            '#663333',
            '#663366',
            '#663399',
            '#6633CC',
            '#6633FF',
            '#666600',
            '#666633',
            '#666666',
            '#666699',
            '#6666CC',
            '#6666FF',
            '#669900',
            '#669933',
            '#669966',
            '#669999',
            '#6699CC',
            '#6699FF',
            '#66CC00',
            '#66CC33',
            '#66CC66',
            '#66CC99',
            '#66CCCC',
            '#66CCFF',
            '#66FF00',
            '#66FF33',
            '#66FF66',
            '#66FF99',
            '#66FFCC',
            '#66FFFF',
            '#990000',
            '#990033',
            '#990066',
            '#990099',
            '#9900CC',
            '#9900FF',
            '#993300',
            '#993333',
            '#993366',
            '#993399',
            '#9933CC',
            '#9933FF',
            '#996600',
            '#996633',
            '#996666',
            '#996699',
            '#9966CC',
            '#9966FF',
            '#999900',
            '#999933',
            '#999966',
            '#999999',
            '#9999CC',
            '#9999FF',
            '#99CC00',
            '#99CC33',
            '#99CC66',
            '#99CC99',
            '#99CCCC',
            '#99CCFF',
            '#99FF00',
            '#99FF33',
            '#99FF66',
            '#99FF99',
            '#99FFCC',
            '#99FFFF',
            '#CC0000',
            '#CC0033',
            '#CC0066',
            '#CC0099',
            '#CC00CC',
            '#CC00FF',
            '#CC3300',
            '#CC3333',
            '#CC3366',
            '#CC3399',
            '#CC33CC',
            '#CC33FF',
            '#CC6600',
            '#CC6633',
            '#CC6666',
            '#CC6699',
            '#CC66CC',
            '#CC66FF',
            '#CC9900',
            '#CC9933',
            '#CC9966',
            '#CC9999',
            '#CC99CC',
            '#CC99FF',
            '#CCCC00',
            '#CCCC33',
            '#CCCC66',
            '#CCCC99',
            '#CCCCCC',
            '#CCCCFF',
            '#CCFF00',
            '#CCFF33',
            '#CCFF66',
            '#CCFF99',
            '#CCFFCC',
            '#CCFFFF',
            '#FF0000',
            '#FF0033',
            '#FF0066',
            '#FF0099',
            '#FF00CC',
            '#FF00FF',
            '#FF3300',
            '#FF3333',
            '#FF3366',
            '#FF3399',
            '#FF33CC',
            '#FF33FF',
            '#FF6600',
            '#FF6633',
            '#FF6666',
            '#FF6699',
            '#FF66CC',
            '#FF66FF',
            '#FF9900',
            '#FF9933',
            '#FF9966',
            '#FF9999',
            '#FF99CC',
            '#FF99FF',
            '#FFCC00',
            '#FFCC33',
            '#FFCC66',
            '#FFCC99',
            '#FFCCCC',
            '#FFCCFF',
            '#FFFF00',
            '#FFFF33',
            '#FFFF66',
            '#FFFF99',
            '#FFFFCC'
        ];
        __WEBPACK_IMPORTED_MODULE_13__app_app_component__["a" /* MyApp */].MAP_LOAD = false;
        __WEBPACK_IMPORTED_MODULE_14__util_map_util__["a" /* MapUtil */].circles.pop();
        var tab = this.navParams.get('tab');
        if (tab) {
            this.historico = tab;
        }
    }
    HistoricoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.horaRegistro = Date.now();
        this.event.subscribe('cancel_list', function (value) {
            if (value.length > 0) {
                _this.cancelAttempt = true;
            }
            else {
                _this.cancelAttempt = false;
            }
        });
        this.event.subscribe('f_event', function (value) {
            var aux = value;
            _this.listEstacionamentosView = _this.listEstacionamentos;
            Object.keys(value).map(function (key) {
                if (value[key] == '') {
                    delete aux[key];
                }
            });
            var result = _this.listEstacionamentosView.filter(function (item) {
                return (Object.keys(aux)).every(function (key) {
                    if (key == 'qtdCads') {
                        return item.qtd.toString() == aux[key];
                    }
                    else if (key == 'valor') {
                        return item.comprovante.valor == aux[key];
                    }
                    return item.comprovante[key] == aux[key] || item[key] == aux[key];
                });
            });
            if (Object.keys(aux).length == 0) {
                _this.listEstacionamentosView = _this.listEstacionamentos;
            }
            else {
                _this.listEstacionamentosView = result;
            }
        });
        this.event.subscribe('pay_filter_event', function (value) {
            var aux = value;
            Object.keys(value).map(function (key) {
                if (value[key] == '') {
                    delete aux[key];
                }
            });
            var result = _this.listCreditos.filter(function (item) {
                var date = new Date(item.dataHoraRegistro).toDateString();
                return (Object.keys(aux).every(function (key) {
                    if (key == 'data') {
                        return new Date(item.dataHoraRegistro).toDateString() == aux[key];
                    }
                    else if (key == 'qtdCads') {
                        return (_this.getValor(item) / _this.cad.valor_unitario).toString() == aux[key];
                    }
                    return item[key] == aux[key];
                }));
            });
            if (Object.keys(aux).length == 0) {
                _this.listCreditosView = _this.listCreditos;
            }
            else {
                _this.listCreditosView = result;
            }
        });
    };
    HistoricoPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                _this.userProvider.byId(userID).subscribe(function (user) {
                    _this.user = user;
                    console.log('User', _this.user);
                });
                _this.veiculosProvider.findByUser(userID).subscribe(function (value) {
                    _this.listVeiculos.push(value);
                });
                return true;
            }
        });
    };
    HistoricoPage.prototype.defineMaxAndMinDate = function (data) {
        this.minDate = data.getTime() - 1000 * 60 * 60 * 24 * 365;
        this.maxDate = data.getTime();
        this.today = new Date(this.maxDate - (data.getTimezoneOffset() * 3 * 60000)).toISOString().substring(0, 10);
        this.limit = new Date(this.maxDate - 1000 * 60 * 60 * 24 * 4).toISOString().substring(0, 10);
        this.minlimit = new Date(this.minDate - 1000 * 60 * 60 * 24 * 1).toISOString().substring(0, 10);
    };
    HistoricoPage.prototype.getEstacionamentosByPlaca = function () {
        var _this = this;
        if (!this.placa || (this.placa && this.placa !== '')) {
            this.listEstacionamentosView = this.listEstacionamentos.filter(function (_item) { return _item.comprovante.placa.includes(_this.placa.toUpperCase()); });
        }
        else {
            this.listEstacionamentosView = this.listEstacionamentos;
        }
    };
    HistoricoPage.prototype.getEstacionamentos = function (userID) {
        var _this = this;
        this.estacionarProvider.find(userID).take(1).subscribe(function (items) {
            var dataConsulta = new Date(_this.today.split("-")[0], _this.today.split("-")[1] - 1, _this.today.split("-")[2]);
            dataConsulta.setHours(23);
            dataConsulta.setMinutes(0);
            dataConsulta.setSeconds(0);
            _this.defineMaxAndMinDate(dataConsulta);
            _this.showSpinner1 = false;
            _this.listEstacionamentos = items.map(function (item) {
                _this.qtdCads += Number(item.estacionar.qtd);
                if (item.estacionar.dataHoraRegistro > _this.minDate &&
                    item.estacionar.dataHoraRegistro <= _this.maxDate) {
                    return item.estacionar;
                }
            });
            _this.valorTotal = _this.qtdCads * 2;
            _this.qtdEstacionados = _this.listEstacionamentos.length;
            _this.listEstacionamentosView = [];
            (_a = _this.listEstacionamentosView).push.apply(_a, _this.listEstacionamentos);
            console.log('Estacionamentos', _this.listEstacionamentosView);
            var _a;
        });
    };
    HistoricoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
            _this.defineMaxAndMinDate(data.dateNow);
        });
        this.userProvider.getUserLocal().then(function (userID) {
            console.log('userID', userID);
            if (userID != null && _this.listEstacionamentosView.length == 0) {
                _this.userLocal = userID;
                _this.getEstacionamentos(_this.userLocal);
                _this.creditosProvider.findByUser(userID).take(1).subscribe(function (items) {
                    _this.showSpinner2 = false;
                    _this.listCreditos = items.map(function (item) {
                        if (_this.horaRegistro - item.values.dataHoraRegistro < 120000) {
                            var tempo = void 0;
                            _this.timer_vetor.push(_this.startTimer((_this.horaRegistro - item.values.dataHoraRegistro), tempo));
                        }
                        return item.values;
                    });
                    _this.listCreditosView = [];
                    (_a = _this.listCreditosView).push.apply(_a, _this.listCreditos);
                    _this.itensPage = _this.listEstacionamentosView.slice(_this.index, _this.offset + _this.index);
                    _this.index += _this.offset;
                    console.log('ItensPage', _this.itensPage);
                    var _a;
                });
                _this.cadsProvider.find().take(1).subscribe(function (value) {
                    value.map(function (item) {
                        _this.cad = new __WEBPACK_IMPORTED_MODULE_5__models_cad__["a" /* CadModel */](item.cad);
                    });
                });
            }
        });
    };
    HistoricoPage.prototype.ionViewWillLeave = function () {
        this.timer_vetor.map(function (item) {
            item.unsubscribe();
        });
    };
    HistoricoPage.prototype.segmentChanged = function (event) {
        switch (event.value) {
            case 'historico-estacionamentos':
                this.historico = "historico-estacionamentos";
                break;
            case 'historico-creditos':
                this.historico = "historico-creditos";
                break;
        }
    };
    HistoricoPage.prototype.getCartaoNumeroFormat = function (numero) {
        var quatro1 = '****'; //numero.substr(0,4);
        var quatro2 = '****'; //numero.substr(4,4);
        var quatro3 = '****'; //numero.substr(5,4);
        var quatro4 = numero.substr(12);
        return quatro1 + ' ' + quatro2 + ' ' + quatro3 + ' ' + quatro4;
    };
    HistoricoPage.prototype.getPlaca = function (veiculoID) {
        var placa = '';
        this.listVeiculos.forEach(function (value) {
            if (value[0].key === veiculoID) {
                placa = value[0].veiculo.placa;
            }
        });
        return placa;
    };
    HistoricoPage.prototype.openOpcoes = function (estacionar) {
        var _this = this;
        var opcoes = this.actionSheetCtrl.create({
            title: 'Escolha uma opção...',
            buttons: [
                {
                    text: 'Ver Recibo',
                    role: '',
                    handler: function () { return _this.openComprovante(estacionar); }
                }, {
                    text: 'Ver Local Estacionado',
                    role: '',
                    handler: function () { return _this.openVeiculoEstacionado(estacionar); }
                }
            ]
        });
        opcoes.present();
    };
    HistoricoPage.prototype.openOpcoesCred = function (credito) {
        var _this = this;
        var opcoes = this.actionSheetCtrl.create({
            title: 'Escolha uma opção...',
            buttons: [
                {
                    text: 'Cancelar Compra',
                    role: '',
                    handler: function () { return _this.cancelarTransacao(credito); }
                }
            ]
        });
        opcoes.present();
    };
    HistoricoPage.prototype.openVeiculoEstacionado = function (estacionar) {
        var _this = this;
        this.setorProvider.byId(estacionar.area_id, estacionar.setor_id).take(1).subscribe(function (value) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].VEICULO_ESTACIONADO_PAGE.name, { lat: value.latInicio, lng: value.lngInicio, estacionar: estacionar });
        });
    };
    HistoricoPage.prototype.getValor = function (credito) {
        if (!credito)
            return 0;
        return credito.valorSemDesconto ? credito.valorSemDesconto : credito.valor;
    };
    HistoricoPage.prototype.openComprovante = function (estacionamento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].COMPROVANTE_PAGE.name, {
            estacionar: estacionamento,
            forceDownload: false,
            from: 'historico',
            user: this.user
        }).then(function () {
            //this.showSpinner1 = false
        });
    };
    HistoricoPage.prototype.showAlertHelp = function (title, msg, type, callback) {
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
    HistoricoPage.prototype.startTimer = function (credito, tempo) {
        var _this = this;
        return tempo = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].interval(1000).subscribe(function (x) {
            if ((credito + (x * 1000)) > _this.time15min) {
                _this.horaRegistro = Date.now();
                tempo.unsubscribe();
            }
            else {
            }
        });
    };
    HistoricoPage.prototype.openHelp = function () {
        this.historico == 'historico-creditos' ? this.showAlertHelp('Ajuda', 'Histórico de compras de CADs efetuados, especificando forma de pagamento, data de cada compra e a quantidade de CADs comprado!', '', function () { }) :
            this.showAlertHelp('Ajuda', 'Histórico dos estacionamentos efetuados e quantidades de CADs utilizado em cada estacionamento.', '', function () { });
    };
    HistoricoPage.prototype.openModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].FILTER_MODAL_PAGE.name, { data: { today: this.today, min: this.minlimit, max: this.limit } }).present();
    };
    HistoricoPage.prototype.openFilterModal = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].FILTER_PAGAMENTO_PAGE.name, { data: { today: this.today, min: this.minlimit, max: this.limit } }).present();
    };
    HistoricoPage.prototype.limparFiltro = function () {
        this.listEstacionamentosView = this.listEstacionamentos;
    };
    HistoricoPage.prototype.limparFiltroPagamento = function () {
        this.listCreditosView = this.listCreditos;
    };
    HistoricoPage.prototype.cancelarTransacao = function (credito) {
        var _this = this;
        if (this.user.profile == 'revendedor') {
            this.showAlertHelp("Atenção", "Para realizar o cancelamento o PDV deve entrar em contato conosco por meio dos nossos canais de atendimento", '', function () { });
        }
        else {
            var cancel_list = this.listCreditosView.filter(function (item) {
                if (item.status == 'cancelado') {
                    _this.timer = Date.now();
                    if (_this.timer - new Date(item.dadoCancelamento.dataHoraRegistro).getTime() < _this.time60min) {
                        return new Date(item.dadoCancelamento.dataHoraRegistro).getTime();
                    }
                }
            });
            this.event.publish('cancel_list', cancel_list);
            if (this.cancelAttempt) {
                var update_timer = Math.trunc((this.timer - new Date(cancel_list[0].dadoCancelamento.dataHoraRegistro).getTime()) / (1000 * 60));
                if (update_timer >= 59) {
                    this.showAlertHelp("Atenção", "Uma solicitação de cancelamento ja foi realizada,Tente novamente em " + (60 - update_timer) + ' minuto', '', function () { });
                }
                else {
                    this.showAlertHelp("Atenção", "Uma solicitação de cancelamento ja foi realizada,Tente novamente em " + (60 - update_timer) + ' minutos', '', function () { });
                }
            }
            else {
                this.showAlertHelp("Atenção", "Ao realizar solicitação de cancelamento, só poderá realizar outra após 1 hora", '', function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].CANCELAR_TRANSACAO_PAGE.name, { credito: JSON.stringify(credito), cad: _this.cad });
                });
            }
        }
    };
    HistoricoPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            var news = _this.listEstacionamentosView.slice(_this.index, _this.offset + _this.index);
            _this.index += _this.offset;
            for (var i = 0; i < news.length; i++) {
                _this.itensPage.push(news[i]);
            }
            event.complete();
            if (_this.itensPage.length === _this.listEstacionamentosView.length) {
                event.disabled = true;
            }
            console.log(_this.listEstacionamentosView);
        }, 1200);
    };
    HistoricoPage.prototype.picColor = function () {
        return this.cores[0];
    };
    HistoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historico',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/historico/historico.html"*/'<ion-header no-border>\n    <ion-navbar color="header" no-margin no-padding>\n        <button ion-button icon-only menuToggle>\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n        </button>\n\n        <ion-title class="header-title">Histórico</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openHelp()">\n                <ion-icon name="help-circle" class="header-icon"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n    <ion-toolbar no-padding mode="ios">\n        <ion-segment no-padding no-lines no-border class="segments" [(ngModel)]="historico" mode="ios">\n            <ion-segment-button value="historico-estacionamentos" (ionSelect)="segmentChanged($event)">\n                <ion-label style="color: #333">Estacionamento</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value="historico-creditos" (ionSelect)="segmentChanged($event)">\n                <ion-label style="color: #333">Pagamento</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding class="content">\n    <ion-grid class="grid-historico-estacionamento"\n        [style.display]="historico == \'historico-estacionamentos\' ? \'block\' : \'none\'">\n        <loading-spinner *ngIf="showSpinner1"></loading-spinner>\n\n        <div *ngIf="!showSpinner1 && listEstacionamentos.length > 0">\n            <ion-item no-lines class="sum">\n\n                <p>CADS usados - {{ qtdCads }}</p>\n                <p>Valor Total - R$ {{valorTotal | number:\'1.2-2\' | replace:\'.\':\',\'}}</p>\n            </ion-item>\n\n            <ion-item no-lines class="placa-item">\n                <button ion-button (click)="openModal()" class="btn" style="height:35px;" block> Filtros </button>\n            </ion-item>\n        \n        <ion-row  *ngFor="let estacionamento of itensPage" [hidden]="estacionamento === false"\n                class="row" style="border-left: 6px solid #cccccc">\n                <div class="item-info">\n                    <button ion-button icon-only clear class="btn-options" (click)="openOpcoes(estacionamento)"><ion-icon name="ios-more"></ion-icon></button>\n                    <p>Placa: {{estacionamento?.comprovante?.placa}}</p>\n                    <p>CADs Usados: {{estacionamento?.qtd}}</p>\n                    <p>Tempo de {{estacionamento?.qtd}} CAD: {{estacionamento?.tempoComprado/60}} Hora(s)</p>\n                    <p>Valor: <span class="price-text"> R${{estacionamento?.comprovante?.valor}},00</span></p>\n                    <p>Data/Hora da ativação: {{estacionamento?.comprovante?.data+\' \'+  estacionamento?.comprovante?.horario}}</p>\n                    <p>Registro AMC: {{estacionamento?.comprovante?.numberAuth}}</p>\n                    <ion-badge class="status" item-end\n                        [style.background]="estacionamento?.situacao == \'Ativação\' ? \'#4cda64\' : \'#0690ce\'">\n                        {{estacionamento?.situacao}}</ion-badge>\n                </div>\n                <!--<ion-col col-7 class="col-info" >\n                    <h2 class="placa">{{estacionamento?.comprovante.placa}}</h2>\n                    <h6 class="data">{{estacionamento?.dataHoraRegistro | date: "dd/MM/yyyy \'às\' HH:mm"}}</h6>\n                    <h2 class="data">AMC: {{estacionamento?.comprovante.numberAuth}}</h2>\n                    <h4 class="cidade">{{estacionamento?.cidade}}</h4>\n                </ion-col>\n                <ion-col col-4 class="col-status">\n                    <ion-badge class="status" item-end\n                        [style.background]="estacionamento?.situacao == \'Ativação\' ? \'#4cda64\' : \'#0690ce\'">\n                        {{estacionamento?.situacao}}</ion-badge>\n                </ion-col>\n                <ion-col col-1></ion-col>\n\n                <ion-col col-12 class="line"></ion-col>\n                <ion-col col-9 class="col-rodape">\n                    <ion-label *ngIf="estacionamento?.qtd == 1" class="cads">{{estacionamento?.qtd}} CAD,\n                        {{estacionamento?.tempoComprado}} Minutos</ion-label>\n                    <ion-label *ngIf="estacionamento?.qtd > 1" class="cads">{{estacionamento?.qtd}} CADs,\n                        {{estacionamento?.tempoComprado}} Minutos</ion-label>\n                    <ion-label class="cads">R$\n                        {{(estacionamento?.comprovante.valor) | number:\'1.2-2\' | replace:\'.\':\',\'}}</ion-label>\n                </ion-col>\n\n                <ion-col col-3 class="col-rodape col-rodape-btn">\n                    <button ion-button small block class="recibo" (click)="openOpcoes(estacionamento)">Opções</button>\n                </ion-col> -->\n\n            </ion-row>\n            <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">\n                <ion-infinite-scroll-content\n                  loadingSpinner="bubbles"\n                  loadingText="Buscando itens...">\n                </ion-infinite-scroll-content>\n              </ion-infinite-scroll>\n\n            <ion-item no-lines class="placa-item"\n                *ngIf="this.listEstacionamentosView.length !== this.listEstacionamentos.length ">\n                <button ion-button (click)="limparFiltro()" style="height:35px;" block> Remover Filtro </button>\n            </ion-item>\n\n        </div>\n    </ion-grid>\n    <ion-grid [style.display]="historico == \'historico-estacionamentos\' ? \'block\' : \'none\'">\n        <div *ngIf="!showSpinner1 && (listEstacionamentos.length == 0 || !listEstacionamentos[0])">\n            <ion-row class="row-message">\n                <ion-col col-12 class="col-message">\n                    <ion-item no-lines class="item-message">\n                        <h2 class="message">Você não possui histórico de estacionamentos</h2>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n    <ion-grid [style.display]="historico == \'historico-creditos\' ? \'block\' : \'none\'" class="grid-historico-creditos">\n        <loading-spinner *ngIf="showSpinner2"></loading-spinner>\n\n        <div *ngIf="!showSpinner2 && listCreditos.length > 0">\n            <ion-item no-lines class="placa-item">\n                <button ion-button (click)="openFilterModal()" class="btn-cred" style="height:35px;" block> Filtros </button>\n            </ion-item>\n            <ion-row class="row" style=" border-left: 6px solid #27AE60" *ngFor="let credito of listCreditosView">\n                <div class="item-info">\n                    <button ion-button icon-only clear class="btn-options" *ngIf="(horaRegistro - credito.dataHoraRegistro < 900000) && (credito.status !== \'cancelado\')" (click)="openOpcoesCred(credito)"><ion-icon name="ios-more"></ion-icon></button>\n                    <p>Forma de Pagamento: <b>{{credito.numero.length > 0? \'Cartão de Crédito\': \'Boleto\'}}</b></p>\n                    <p *ngIf="credito.numero.length > 0">Numero Cartão: {{getCartaoNumeroFormat(credito.numero)}}</p>\n                    <p>CADs Comprados: {{getValor(credito) / cad?.valor_unitario}} CAD(s)</p>\n                    <p >Valor: <span class="desconto"\n                        *ngIf="(credito?.valorSemDesconto > 0) && (credito?.valorSemDesconto !== credito?.valor)">R$\n                        {{credito?.valorSemDesconto | number:\'1.2-2\' | replace:\'.\':\',\'}}</span>R$\n                    {{credito?.valor | number:\'1.2-2\' | replace:\'.\':\',\'}}</p>\n                    <p>Data/Hora da ativação: {{credito?.dataHoraRegistro | date: "dd/MM/yyyy \'às\' HH:mm"}}</p>\n                    <ion-badge class="status" item-end\n                        [style.background]="credito?.status == \'cancelado\' ? \'red\' : \'#4cda64\'">{{credito?.status}}\n                    </ion-badge>\n                </div>\n                <!--<ion-col col-6 class="col-info">\n                    <h2 class="numero-cartao" *ngIf="credito.numero.length > 0">\n                        {{getCartaoNumeroFormat(credito.numero)}}</h2>\n                    <h4 class="tipo-cartao" *ngIf="credito.numero.length > 0">Cartão de Crédito</h4>\n                    <h4 class="tipo-cartao" *ngIf="!(credito.numero.length > 0)">Boleto</h4>\n                    <h6 class="data">{{credito?.dataHoraRegistro | date: "dd/MM/yyyy \'às\' HH:mm"}}</h6>\n                </ion-col>\n                <ion-col col-5 class="col-status">\n                    <ion-badge class="status" item-end\n                        [style.background]="credito?.status == \'cancelado\' ? \'red\' : \'#4cda64\'">{{credito?.status}}\n                    </ion-badge>\n                </ion-col>\n                <ion-col col-1></ion-col>\n                <ion-col col-12 class="col-rodape">\n                    <ion-label *ngIf="getValor(credito) / cad?.valor_unitario == 1" class="cads">\n                        {{getValor(credito) / cad?.valor_unitario}} CAD</ion-label>\n                    <ion-label *ngIf="getValor(credito) / cad?.valor_unitario > 1" class="cads">\n                        {{getValor(credito) / cad?.valor_unitario}} CADs</ion-label>\n                    <ion-label class="price"><span class="desconto"\n                            *ngIf="(credito?.valorSemDesconto > 0) && (credito?.valorSemDesconto !== credito?.valor)">R$\n                            {{credito?.valorSemDesconto | number:\'1.2-2\' | replace:\'.\':\',\'}}</span>R$\n                        {{credito?.valor | number:\'1.2-2\' | replace:\'.\':\',\'}}</ion-label>\n                </ion-col>\n                <ion-col col-12 class="line"></ion-col>\n                <ion-col col-12>\n                    <ion-item class=\'placa-item\' no-padding no-lines>\n                        <button small clear ion-button style="height: 35px;"\n                            *ngIf="(horaRegistro - credito.dataHoraRegistro < 900000) && (credito.status !== \'cancelado\')"\n                            (click)=\'cancelarTransacao(credito)\' class="btn-cancel">\n                            <ion-icon style="margin-right: 5px;" name="ios-close-circle-outline"></ion-icon>\n                            Cancelar\n                        </button>\n                    </ion-item>\n                </ion-col> -->\n            </ion-row>\n            <ion-item no-lines class="placa-item" *ngIf="this.listCreditosView.length !== this.listCreditos.length ">\n\n                <button ion-button (click)="limparFiltroPagamento()" style="height:35px;" block> Remover Filtro\n                </button>\n            </ion-item>\n        </div>\n\n    </ion-grid>\n\n    <ion-grid [style.display]="historico == \'historico-creditos\' ? \'block\' : \'none\'">\n        <div *ngIf="!showSpinner2 && listCreditos.length == 0">\n            <ion-row class="row-message">\n                <ion-col col-12 class="col-message">\n                    <ion-item no-lines class="item-message">\n                        <h2 class="message">Você não possui histórico de créditos</h2>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/zonaazulfortaleza-develop/src/pages/historico/historico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_estacionar_estacionar__["a" /* EstacionarProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_creditos_creditos__["a" /* CreditosProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_setores_setores__["a" /* SetoresProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HistoricoPage);
    return HistoricoPage;
}());

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var timer_1 = __webpack_require__(807);
Observable_1.Observable.timer = timer_1.timer;
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TimerObservable_1 = __webpack_require__(808);
exports.timer = TimerObservable_1.TimerObservable.create;
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 808:
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
var isScheduler_1 = __webpack_require__(208);
var isDate_1 = __webpack_require__(114);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var TimerObservable = (function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === void 0) { dueTime = 0; }
        _super.call(this);
        this.period = -1;
        this.dueTime = 0;
        if (isNumeric_1.isNumeric(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
        }
        else if (isScheduler_1.isScheduler(period)) {
            scheduler = period;
        }
        if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
        }
        this.scheduler = scheduler;
        this.dueTime = isDate_1.isDate(dueTime) ?
            (+dueTime - this.scheduler.now()) :
            dueTime;
    }
    /**
     * Creates an Observable that starts emitting after an `initialDelay` and
     * emits ever increasing numbers after each `period` of time thereafter.
     *
     * <span class="informal">Its like {@link interval}, but you can specify when
     * should the emissions start.</span>
     *
     * <img src="./img/timer.png" width="100%">
     *
     * `timer` returns an Observable that emits an infinite sequence of ascending
     * integers, with a constant interval of time, `period` of your choosing
     * between those emissions. The first emission happens after the specified
     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
     * operator uses the `async` IScheduler to provide a notion of time, but you
     * may pass any IScheduler to it. If `period` is not specified, the output
     * Observable emits only one value, `0`. Otherwise, it emits an infinite
     * sequence.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
     * var numbers = Rx.Observable.timer(3000, 1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @example <caption>Emits one number after five seconds</caption>
     * var numbers = Rx.Observable.timer(5000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link interval}
     * @see {@link delay}
     *
     * @param {number|Date} initialDelay The initial delay time to wait before
     * emitting the first value of `0`.
     * @param {number} [period] The period of time between emissions of the
     * subsequent numbers.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a `0` after the
     * `initialDelay` and ever increasing numbers after each `period` of time
     * thereafter.
     * @static true
     * @name timer
     * @owner Observable
     */
    TimerObservable.create = function (initialDelay, period, scheduler) {
        if (initialDelay === void 0) { initialDelay = 0; }
        return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        var action = this;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
            index: index, period: period, subscriber: subscriber
        });
    };
    return TimerObservable;
}(Observable_1.Observable));
exports.TimerObservable = TimerObservable;
//# sourceMappingURL=TimerObservable.js.map

/***/ })

});
//# sourceMappingURL=1.js.map