webpackJsonp([4],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstacionarPageModule", function() { return EstacionarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estacionar__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loading_spinner_loading_spinner_module__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EstacionarPageModule = /** @class */ (function () {
    function EstacionarPageModule() {
    }
    EstacionarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estacionar__["a" /* EstacionarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estacionar__["a" /* EstacionarPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_loading_spinner_loading_spinner_module__["a" /* LoadingSpinnerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], EstacionarPageModule);
    return EstacionarPageModule;
}());

//# sourceMappingURL=estacionar.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(777);
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

/***/ 776:
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

/***/ 777:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_map_util__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_functions_util__ = __webpack_require__(776);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\home\home.html"*/'<ion-header no-border>\n\n    <ion-navbar color="header">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="title-header">\n\n            <ion-select [(ngModel)]="city" class="select-city" cancelText="Cancelar" okText="Ok" [selectOptions]="selectOptions">\n\n                <ion-option value="Fortaleza">Fortaleza</ion-option>\n\n              </ion-select>\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="openTempoRestantePage()">\n\n                <img src="assets/icones/car-white.svg"  />\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n    <div #map id="map"></div>\n\n    <input #search id="search" class="controls" type="text" placeholder="Buscar">\n\n\n\n    <button ion-button icon-only type="button" item-right clear id="mic" >\n\n        <ion-icon color="gray" name="search" class="icon"></ion-icon>\n\n    </button>\n\n    <!--<ion-fab id="help">\n\n        <button ion-fab icon-only (click)="openHelp()">\n\n            <ion-icon name="help"></ion-icon>\n\n        </button>\n\n    </ion-fab> -->\n\n\n\n    <ion-fab id="close" (click)="showCloseSetor()">\n\n        <button ion-fab>\n\n        </button>\n\n    </ion-fab>\n\n\n\n   <!-- <ion-fab>\n\n        <button ion-fab icon-only color="default" (click)="buscarSetores()" id="locate">\n\n            <ion-icon name="search" class="icon"></ion-icon>\n\n        </button>\n\n    </ion-fab> -->\n\n\n\n    <ion-icon #icon name="close" class="icon-clear" style="display: none" id="icon"></ion-icon>\n\n    <button ion-button id="btn-show-estacionar-page" (click)="openEstacionarPage($event)"\n\n        [style.display]="\'none\'"></button>\n\n    <button ion-button id="btn-show-streat-view" (click)="showStreatView()" [style.display]="\'none\'"></button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\home\home.html"*/
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

/***/ 778:
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

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstacionarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tempo_estacionado_tempo_estacionado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_veiculos_veiculos__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_estacionar_estacionar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cads_user_cads_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_setores_setores__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_holidays_holidays__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cads_cads__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_estacionar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_agendamento__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_veiculo__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_map_util__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util_date_util__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_constants__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ANGULAR





// PROVIDERS












// UTILS


// ENVIROMENT AND CONSTANTS


var EstacionarPage = /** @class */ (function () {
    function EstacionarPage(navCtrl, platform, alertCtrl, navParams, loadingCtrl, comunicacaoCentralProvider, veiculoService, tempoEstacionadoProvider, http, estacionarProvider, userProvider, modalCtrl, cadsUserProvider, cadProvider, setorProvider, _holidayProvider, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.comunicacaoCentralProvider = comunicacaoCentralProvider;
        this.veiculoService = veiculoService;
        this.tempoEstacionadoProvider = tempoEstacionadoProvider;
        this.http = http;
        this.estacionarProvider = estacionarProvider;
        this.userProvider = userProvider;
        this.modalCtrl = modalCtrl;
        this.cadsUserProvider = cadsUserProvider;
        this.cadProvider = cadProvider;
        this.setorProvider = setorProvider;
        this._holidayProvider = _holidayProvider;
        this.viewCtrl = viewCtrl;
        this.seletor = true;
        this.selectOption = {
            title: 'Regra',
            subtitle: 'Escolha a regra',
            mode: 'md'
        };
        this.cadSelectd = 1;
        this.qtdCadsUser = 0;
        this.disabledIdoso = false;
        this.disabledDeficientes = false;
        this.disabledNormal = false;
        this.showSpinner = true;
        this.horarios = [];
        this.veiculos = [];
        this.cads_setor = [];
        this.enabled = true;
        this.fromRenovar = false;
        this.radio = 1;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        };
        // this.getHolidays();
        __WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */].MAP_LOAD = false;
        __WEBPACK_IMPORTED_MODULE_17__util_map_util__["a" /* MapUtil */].circles.pop();
        this.codigoSetor = this.navParams.get("setor");
        this.codigoArea = this.navParams.get("area");
        this.nomeSetor = this.navParams.get("setor-nome");
        this.nomeArea = this.navParams.get("area-nome");
        this.source = this.navParams.get('fromPage');
        this.comunicacaoCentralProvider.setDMA_NTP();
        this.cadProvider.find().take(1).subscribe(function (item) {
            item.map(function (item) {
                _this.cad = item.cad;
            });
        });
        this.setorProvider.byId(this.codigoArea, this.codigoSetor).take(1).subscribe(function (setor) {
            _this.setorModel = setor;
            console.log(_this.setorModel);
            if (_this.setorModel.total_vagas - _this.setorModel.qtd_normal_estacionados <= 0) {
                _this.showAlert("Aviso!", "Não há vagas convencionais disponíveis!", "alert", function () {
                    _this.disabledNormal = true;
                }, function () {
                    _this.disabledNormal = true;
                });
            }
            _this.latitude = _this.setorModel.latInicio.toString();
            _this.longitude = _this.setorModel.lngInicio.toString();
            _this.criarMap(_this.latitude, _this.longitude);
            console.log(_this.latitude + ' + ' + _this.longitude);
        });
    }
    EstacionarPage.prototype.updateQtdCadsSetor = function () {
        var _this = this;
        this.setorProvider.getConfigQtdCadsSetor().take(1).subscribe(function (cads_setor) {
            _this.cads_setor = cads_setor;
        });
    };
    EstacionarPage.prototype.getMinutos = function (item) {
        var minutos;
        //console.log('Tipo veiculo Selecionado',this.veiculoSelecionado.tipo_veiculo)
        if (this.veiculoSelecionado && this.veiculoSelecionado.tipo_veiculo == 'caminhao') {
            if (this.setorModel.cad_caminhao * item > 30) {
                if (this.setorModel.cad_caminhao * item == 60) {
                    minutos = (this.setorModel.cad_caminhao * item) / 60 + ' Hora';
                }
                else {
                    minutos = (this.setorModel.cad_caminhao * item) / 60 + ' Horas';
                }
            }
            else {
                minutos = (this.setorModel.cad_caminhao * item) + ' Minutos';
            }
        }
        else {
            if (this.setorModel.cad_veiculo * item == 60) {
                minutos = (this.setorModel.cad_veiculo * item) / 60 + ' Hora';
            }
            else {
                minutos = (this.setorModel.cad_veiculo * item) / 60 + ' Horas';
            }
        }
        return minutos;
    };
    EstacionarPage.prototype.updateCadsAndHorarios = function () {
        if (this.veiculoSelecionado && this.veiculoSelecionado.tipo_veiculo == 'caminhao') {
            this.tempoCadVeiculo = this.setorModel.cad_caminhao;
            this.check = 'carga_descarga';
            this.updateQtdCadsSetor();
        }
        else {
            this.tempoCadVeiculo = this.setorModel.cad_veiculo;
            if (this.tempoCadVeiculo == 300) {
                this.cads_setor = [1];
            }
            else {
                this.updateQtdCadsSetor();
            }
        }
        var array = [];
        for (var key in this.setorModel.horario) {
            array.push(this.setorModel.horario[key]);
        }
        this.horarios = array.sort(function (a, b) { return (a.sequencial - b.sequencial); });
    };
    EstacionarPage.prototype.ionViewCanEnter = function () {
        this.qtdCadsUser = this.navParams.get("qtdCads");
        console.log('qtdCads', this.qtdCadsUser);
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                return true;
            }
        });
    };
    // onCreate
    EstacionarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.qtdCadsUser = this.navParams.get("qtdCads");
        console.log(this.qtdCadsUser);
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID != null) {
                _this.userProvider.byId(userID).take(1).subscribe(function (user) {
                    _this.user = user;
                    _this.estacionarProvider.findByAreaAndSetor(_this.user.id, _this.codigoArea, _this.codigoSetor).take(1).subscribe(function (value) {
                        value.map(function (item) {
                            if (item) {
                                _this.estacionar = item.estacionar;
                            }
                        });
                    });
                    _this.getVeiculosUser(_this.user);
                });
                _this.updateCadsAndHorarios();
            }
        });
        this.check = 'normal';
        this.option = 'especial';
        //document.querySelector("#especial").className = 'option-text';
    };
    // Adiciona os feriados do firebase em uma lista a ser usada depois para a verificação do estacionamento 
    // getHolidays() {
    //     this._holidayProvider.listAll()
    //         .subscribe(holidays => {
    //             holidays.map(holiday => {
    //                 this.holidays.push(holiday.date)
    //             })
    //         })
    // }
    // onStart
    EstacionarPage.prototype.ionViewWillEnter = function () {
        var fromVeiculoForm = this.navParams.get('fromVeiculoForm') || null;
        if (this.user && this.user.profile === 'revendedor' && fromVeiculoForm === 'sim') {
            this.getVeiculosUser(this.user);
        }
    };
    // onResume
    EstacionarPage.prototype.ionViewDidEnter = function () {
    };
    // onPause
    EstacionarPage.prototype.ionViewWillLeave = function () {
    };
    // onStop
    EstacionarPage.prototype.ionViewDidLeave = function () {
    };
    // onDestroy
    EstacionarPage.prototype.ionViewWillUnload = function () {
    };
    EstacionarPage.prototype.addVeiculo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].VEICULOS_FORM_PAGE.name, { type: 'revendedor' });
    };
    EstacionarPage.prototype.getVeiculosUser = function (user) {
        // if (user.profile == "revendedor") {
        //     console.log('**********', this.veiculos);
        //     let _veiculo: any = this.veiculos[0];
        //     console.log(_veiculo)
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
        var _this = this;
        //     }
        //     this.showSpinner = false;
        // } else {
        if (this.source) {
            if (this.source === 'tempo_restante' || this.source === 'principal') {
                if (this.source === 'tempo_restante') {
                    this.fromRenovar = true;
                }
                var veiculo = this.navParams.get('veiculo');
                console.log('Veiculo', veiculo);
                this.veiculo_id = veiculo.key;
                this.placa = veiculo.veiculo.placa;
                this.veiculo_marca = veiculo.veiculo.marca;
                this.veiculo_modelo = veiculo.veiculo.modelo;
                this.veiculo_tipo = veiculo.veiculo.tipo_veiculo;
                console.log(this.veiculo_tipo);
                this.veiculoSelecionado = new __WEBPACK_IMPORTED_MODULE_16__models_veiculo__["a" /* VeiculoModel */](veiculo.veiculo);
                this.showSpinner = false;
                // para fazer getVeiculos funcionar ... e aparecer o veiculo nas opçoes :/
                this.veiculos.push({ key: veiculo.key, veiculo: veiculo.veiculo });
            }
            else {
                this.veiculoService.findByUser(user.id).take(1).subscribe(function (value) {
                    value.forEach(function (item) {
                        item.veiculo.id = item.key;
                        _this.veiculos.push({ key: item.key, veiculo: item.veiculo });
                    });
                    console.log('This.veiculos', _this.veiculos);
                    _this.veiculo_id = _this.veiculos[0].key;
                    _this.placa = _this.veiculos[0].veiculo.placa;
                    _this.veiculo_marca = _this.veiculos[0].veiculo.marca;
                    _this.veiculo_modelo = _this.veiculos[0].veiculo.modelo;
                    _this.veiculoSelecionado = _this.veiculos[0].veiculo;
                    _this.showSpinner = false;
                });
                this.updateCadsAndHorarios();
            }
        }
        else {
            this.veiculoService.findByUser(user.id).take(1).subscribe(function (value) {
                value.forEach(function (item) {
                    item.veiculo.id = item.key;
                    _this.veiculos.push({ key: item.key, veiculo: item.veiculo });
                });
                console.log('Veiculo', _this.veiculos);
                _this.veiculo_id = _this.veiculos[0].key;
                _this.placa = _this.veiculos[0].veiculo.placa;
                _this.veiculo_tipo = _this.veiculos[0].veiculo.tipo_veiculo;
                _this.veiculo_marca = _this.veiculos[0].veiculo.marca;
                _this.veiculo_modelo = _this.veiculos[0].veiculo.modelo;
                _this.veiculoSelecionado = _this.veiculos[0].veiculo;
                console.log(_this.veiculo_marca + ' + ' + _this.veiculo_modelo + ' ' + _this.placa + ' ' + _this.veiculo_tipo);
                _this.showSpinner = false;
            });
            this.updateCadsAndHorarios();
        }
        //}
        this.updateCadsAndHorarios();
    };
    EstacionarPage.prototype.getVeiculo = function (placa) {
        for (var i = 0; i < this.veiculos.length; i++) {
            var value = this.veiculos[i];
            if (value.veiculo.placa === placa) {
                //const veiculo_id = this.user.profile == 'revendedor' ? value.veiculo.id : value.key;
                var veiculo_id = value.key;
                return { veiculo_id: veiculo_id, veiculo: value.veiculo };
            }
        }
        ;
        return undefined;
    };
    EstacionarPage.prototype.selecionarVeiculo = function () {
        var _this = this;
        var veiculos = this.veiculos;
        var veiculoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].VEICULOS_MODAL_PAGE.name, { veiculos: veiculos });
        veiculoModal.present();
        veiculoModal.onDidDismiss(function (data) {
            if (data) {
                var veiculo = data;
                _this.veiculoSelecionado = veiculo.veiculo;
                _this.veiculo_id = veiculo.veiculo.id;
                _this.placa = veiculo.veiculo.placa;
                _this.veiculo_tipo = veiculo.veiculo.tipo_veiculo;
                _this.veiculo_marca = veiculo.veiculo.marca;
                _this.veiculo_modelo = veiculo.veiculo.modelo;
                console.log(_this.veiculoSelecionado);
                _this.updateCadsAndHorarios();
            }
        });
    };
    EstacionarPage.prototype.escolherVeiculo = function () {
        var _this = this;
        var veiculos = this.veiculos;
        var veiculoModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].VEICULOS_MODAL_PAGE.name, { veiculos: veiculos });
        veiculoModal.present();
        veiculoModal.onDidDismiss(function (data) {
            if (data) {
                var veiculo = data;
                _this.veiculoSelecionado = veiculo.veiculo;
                _this.veiculo_id = veiculo.veiculo.id;
                _this.placa = veiculo.veiculo.placa;
                _this.veiculo_marca = veiculo.veiculo.marca;
                _this.veiculo_modelo = veiculo.veiculo.modelo;
                _this.veiculo_tipo = veiculo.veiculo.tipo_veiculo;
                console.log(_this.veiculo_tipo);
                _this.updateCadsAndHorarios();
            }
        });
    };
    EstacionarPage.prototype.selectCad = function (value) {
        this.cadSelectd = value;
        console.log(this.cadSelectd);
    };
    EstacionarPage.prototype.salvaVeiculoNaoEstacionado = function (cad, estacionar, tempoEstacionadoEmMilis, dataEnvio) {
        var _this = this;
        console.log(cad);
        if (dataEnvio.getHours() >= 0 && dataEnvio.getHours() < 6) {
            this.loading.present();
            this.showAlert('Aviso!', 'A ativação do estacionamento será considerada apenas no próximo início do regulamento para o local! ', '', 
            //CallBack quando o usuário Confirmar
            function () {
                var estacionamentoAgendadoModel = new __WEBPACK_IMPORTED_MODULE_15__models_agendamento__["a" /* AgendarEstacionamentoModel */]();
                estacionamentoAgendadoModel.id = _this.transformingDate(new Date());
                estacionamentoAgendadoModel.userID = _this.user.id;
                estacionamentoAgendadoModel.lat = _this.setorModel.latInicio;
                estacionamentoAgendadoModel.long = _this.setorModel.latInicio;
                estacionamentoAgendadoModel.codigoArea = estacionar.area_id;
                estacionamentoAgendadoModel.codigoSetor = estacionar.setor_id;
                estacionamentoAgendadoModel.placa = _this.veiculoSelecionado.getPlacaNaoFormatada();
                estacionamentoAgendadoModel.categoria = _this.veiculoSelecionado.tipo_veiculo;
                estacionamentoAgendadoModel.tempoComprado = _this.tempoCadVeiculo * cad;
                estacionamentoAgendadoModel.quantidade = estacionar.qtd;
                estacionamentoAgendadoModel.idTransacaoDistribuidor = estacionar.idTransacaoDistribuidor;
                estacionamentoAgendadoModel.udid_imei = _this.user.uidAparelho;
                estacionamentoAgendadoModel.veiculo_id = estacionar.veiculo_id;
                estacionamentoAgendadoModel.time = parseInt(_this.horarios[dataEnvio.getDay()].hora_inicio);
                console.log('Uid', _this.user.id);
                _this.updateQtdCadsUsados(_this.user.id, estacionar.qtd);
                _this._agendarEstacionamento(estacionamentoAgendadoModel);
                _this.enabled = true;
            }, function () {
                _this.loading.dismiss();
                _this.enabled = true;
            }, 'Confirmar');
        }
        else {
            this.showAlert("Confirmação", 'Deseja estacionar seu veículo?', "alert", function () {
                var now = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].getCurrenteDateFormated();
                var data2 = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].convertDate(now);
                if ((data2.getTime() - dataEnvio.getTime()) > __WEBPACK_IMPORTED_MODULE_13__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */].APP_ESPERA) {
                    _this.showAlert('Ops', 'Não foi possível estacionar seu veículo. Seu tempo de espera durou mais de 30 segundos. Faça o processo novamente.', '', function () { }, function () { }, '', 'OK');
                    _this.loading.dismiss();
                }
                else {
                    _this.operacaoLinkL2(estacionar, cad, dataEnvio, function (dataProcessamento, autenticacao) {
                        console.log('Uid', _this.user.id);
                        _this.updateQtdCadsUsados(_this.user.id, cad);
                        var estacionarModel = new __WEBPACK_IMPORTED_MODULE_14__models_estacionar__["b" /* EstacionarModel */](estacionar);
                        estacionarModel.categoria = _this.check;
                        estacionarModel.tempoEstacionado = dataProcessamento.getTime() + tempoEstacionadoEmMilis;
                        estacionarModel.dataHoraRegistro = dataProcessamento.getTime();
                        estacionarModel.codAuth = autenticacao;
                        estacionarModel.tempoComprado = _this.tempoCadVeiculo * cad;
                        _this.saveEstacionar(estacionarModel, _this.user.id, cad, _this.veiculoSelecionado);
                    });
                }
            }, function () { _this.enabled = true; _this.loading.dismiss(); }, 'Sim');
            this.enabled = true;
            this.enabled = true;
            this.enabled = true;
        }
    };
    EstacionarPage.prototype.salvaVeiculoJaEstacionado = function (_veiculoEstacionado, cad, estacionar, tempoEstacionadoEmMilis, dataEnvio) {
        var _this = this;
        console.log(cad);
        _veiculoEstacionado.map(function (item) {
            var isVeiculoEstacionadoNesteLocal = (item &&
                item.estacionar.area_id === estacionar.area_id &&
                item.estacionar.setor_id === estacionar.setor_id);
            var renovarEstacionado = item.estacionar.veiculo_id === estacionar.veiculo_id;
            if (estacionar.qtd === 2 && renovarEstacionado) {
                _this.showAlert('Olá!', 'Você só pode renovar 1 CAD, pois já se encontra estacionado.', '', function () { }, function () { _this.loading.dismiss(); }, '');
            }
            else if (item.estacionar.qtd === 2 && isVeiculoEstacionadoNesteLocal) {
                _this.showAlert('Olá!', 'Você já ativou o limite total de CADs neste local, não é permitido renovar.', '', function () { }, function () { _this.loading.dismiss(); }, '');
            }
            else if (item.estacionar.tempoComprado === 300 && isVeiculoEstacionadoNesteLocal) {
                _this.showAlert('Olá!', 'Não é permitido renovar CAD com tempo de estacionamento de 300 minutos.', '', function () { }, function () { _this.loading.dismiss(); }, '');
            }
            else {
                var _estacionarTmp_1 = estacionar;
                var _estacionarTitle = 'Você já se encontra estacionado em outro local. Deseja estacionar neste local?';
                var tempoAnteriorEmMilis_1 = 0;
                var qtdAnterior_1 = 0;
                if (isVeiculoEstacionadoNesteLocal) {
                    _estacionarTmp_1 = item.estacionar;
                    _estacionarTitle = 'Você já se encontra estacionado neste local. Deseja renovar?';
                    // TODO: REGRA ACUMULATIVA PARA ATE 2! 
                    // TODO: MELHORAR PEGAR O TEMPO DE ESTACIONAMENTO 
                    var tempoCompradoEmMilis = _estacionarTmp_1.comprovante.tempoComprado * 60000;
                    tempoAnteriorEmMilis_1 = (_estacionarTmp_1.dataHoraRegistro + tempoCompradoEmMilis) - dataEnvio.getTime();
                    qtdAnterior_1 = _estacionarTmp_1.qtd ? (_estacionarTmp_1.qtd + cad) : cad;
                }
                // else if(!isVeiculoEstacionadoNesteLocal && naoEstacionarEmOutroLocal){
                //     return true;
                // }
                _this.showAlert("Aviso!", _estacionarTitle, "", function () {
                    var now = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].getCurrenteDateFormated();
                    var data2 = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].convertDate(now);
                    if ((data2.getTime() - dataEnvio.getTime()) > __WEBPACK_IMPORTED_MODULE_13__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */].APP_ESPERA) {
                        _this.showAlert('Ops', 'Não foi possível estacionar seu veículo. Seu tempo de espera durou mais de 30 segundos. Faça o processo novamente.', '', function () { }, function () { }, '', 'OK');
                        _this.loading.dismiss();
                    }
                    else {
                        _this.operacaoLinkL2(estacionar, cad, dataEnvio, function (dataProcessamento, autenticacao) {
                            console.log(dataProcessamento.getTime());
                            _estacionarTmp_1.tempoEstacionado = (dataProcessamento.getTime() + tempoEstacionadoEmMilis + tempoAnteriorEmMilis_1);
                            _estacionarTmp_1.dataHoraRegistro = dataProcessamento.getTime();
                            _estacionarTmp_1.codAuth = autenticacao;
                            item.estacionar.tempoComprado = _this.tempoCadVeiculo * cad;
                            item.estacionar.status = false;
                            _this.saveEstacionar(item.estacionar, _this.user.id, cad, _this.veiculoSelecionado);
                            _this.updateEstacionar(_estacionarTmp_1, _this.user.id, cad, _this.veiculoSelecionado, isVeiculoEstacionadoNesteLocal, dataProcessamento, tempoEstacionadoEmMilis, autenticacao, qtdAnterior_1);
                        });
                    }
                }, function () { _this.enabled = true; _this.loading.dismiss(); }, 'Confirmar');
            }
            _this.enabled = true;
        });
    };
    EstacionarPage.prototype.openComprovante = function (cad, placa) {
        var _this = this;
        console.log('Cads: ' + cad + ', Placa: ' + placa);
        var veiculo = this.getVeiculo(placa);
        this.veiculo_id = veiculo.veiculo_id;
        // this.veiculoSelecionado = this.source? new VeiculoModel(veiculo.veiculo): veiculo;
        this.enabled = false;
        this.loading = this.loadingCtrl.create({ content: 'Aguarde...' });
        this.loading.present();
        if (this.cadSelectd == 0) {
            this.showAlert('Aviso!', 'É preciso selecionar um veículo e um CAD', '', function () { }, function () { }, '');
            this.enabled = true;
            this.loading.dismiss();
        }
        else {
            this.tempoEstacionadoProvider.getHoraAtualFromFirebase().then(function (data) {
                // console.log(data);
                var estacionar = new __WEBPACK_IMPORTED_MODULE_14__models_estacionar__["b" /* EstacionarModel */]({
                    id: _this.transformingDate(data.dateNow),
                    area_id: _this.codigoArea,
                    setor_id: _this.codigoSetor,
                    veiculo_id: _this.veiculo_id,
                    codAuth: "000000000",
                    face_id: 'A',
                    qtd: cad,
                    uidAparelho: _this.user.uidAparelho,
                    status: true,
                });
                // else {
                // if (statusHorario === 'ok') {
                if (_this.qtdCadsUser >= cad) {
                    // this.estacionarProvider.countAll().take(1).subscribe(_qtd => {
                    var _qtd = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].uniqueID();
                    estacionar.idTransacaoDistribuidor = _qtd;
                    // console.log('estacionar_qtd', _qtd);
                    // const now = FunctionsUtil.foraHorarioPadrão(new Date(), this.holidays);
                    // // const message = this._getMensagemForaHorario(now);
                    // if (message) {
                    //     this.showAlert('Atenção!', message, '', () => {
                    //         this.estacionarProvider.isVeiculoEstacionado(this.user.id, this.veiculo_id, this.user.uidAparelho, this.user.profile)
                    //             .take(1)
                    //             .subscribe(_tempData => {
                    //                 const podeEstacionar = _tempData['podeEstacionar'] && (_tempData['cadsAtivos'] + cad) <= 3;
                    //                 const _veiculoEstacionado = _tempData['lista'];
                    //                 const temVeiculoEstacionado = _veiculoEstacionado && _veiculoEstacionado.length > 0;
                    //                 const naoTemVeiculoEstacionado = _veiculoEstacionado && _veiculoEstacionado.length === 0;
                    //                 const tempoEstacionadoEmMilis = EstacionarModel.getHoraEmMilis(cad, this.tempoCadVeiculo);
                    //                 // TODO: A regra do fucnionamento aos domingos e feriados , deve funcionar apenas para os pdv
                    //                 if (this.user.profile === 'revendedor') {
                    //                     if (temVeiculoEstacionado) {
                    //                         this.salvaVeiculoJaEstacionado(_veiculoEstacionado, cad, estacionar, tempoEstacionadoEmMilis, data.dateNow)
                    //                     } else if (naoTemVeiculoEstacionado) {
                    //                         this.salvaVeiculoNaoEstacionado(cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                    //                     }
                    //                 } else {
                    //                     if (podeEstacionar) {
                    //                         if (temVeiculoEstacionado) {
                    //                             this.salvaVeiculoJaEstacionado(_veiculoEstacionado, cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                    //                         } else if (naoTemVeiculoEstacionado) {
                    //                             this.salvaVeiculoNaoEstacionado(cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                    //                         }
                    //                     } else {
                    //                         this.showAlert('Atenção!', 'Você só pode ter no máximo 3 placas com CAD ativado por aparelho.', '', () => { }, () => { }, '', 'OK');
                    //                         this.loading.dismiss()
                    //                         this.enabled = true;
                    //                     }
                    //                 }
                    //             }, (error: Error) => {
                    //                 this.showAlert('Atenção!', error.message, '', () => { }, () => { }, '', 'OK');
                    //                 this.enabled = true;
                    //                 this.loading.dismiss();
                    //             });
                    //     }, () => {
                    //         this.loading.dismiss();
                    //         this.enabled = true;
                    //     });
                    // } else {
                    _this.estacionarProvider.isVeiculoEstacionado(_this.user.id, _this.veiculo_id, _this.user.uidAparelho, _this.user.profile)
                        .take(1)
                        .subscribe(function (_tempData) {
                        var podeEstacionar = _tempData['podeEstacionar'] && (_tempData['cadsAtivos'] + cad) <= 3;
                        var _veiculoEstacionado = _tempData['lista'];
                        var temVeiculoEstacionado = _veiculoEstacionado && _veiculoEstacionado.length > 0;
                        var naoTemVeiculoEstacionado = _veiculoEstacionado && _veiculoEstacionado.length === 0;
                        var tempoEstacionadoEmMilis = __WEBPACK_IMPORTED_MODULE_14__models_estacionar__["b" /* EstacionarModel */].getHoraEmMilis(cad, _this.tempoCadVeiculo);
                        // TODO: A regra do fucnionamento aos domingos e feriados , deve funcionar apenas para os pdv?
                        if (_this.user.profile === 'revendedor') {
                            if (temVeiculoEstacionado) {
                                _this.salvaVeiculoJaEstacionado(_veiculoEstacionado, cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                            }
                            else if (naoTemVeiculoEstacionado) {
                                _this.salvaVeiculoNaoEstacionado(cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                            }
                        }
                        else {
                            if (podeEstacionar) {
                                if (temVeiculoEstacionado) {
                                    _this.salvaVeiculoJaEstacionado(_veiculoEstacionado, cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                                }
                                else if (naoTemVeiculoEstacionado) {
                                    _this.salvaVeiculoNaoEstacionado(cad, estacionar, tempoEstacionadoEmMilis, data.dateNow);
                                }
                            }
                            else {
                                _this.showAlert('Atenção!', 'Você só pode ter no máximo 3 placas com CAD ativado por aparelho.', '', function () { }, function () { }, '', 'OK');
                                _this.loading.dismiss();
                                _this.enabled = true;
                            }
                        }
                    }, function (error) {
                        _this.showAlert('Atenção!', error.message, '', function () { }, function () { }, '', 'OK');
                        _this.enabled = true;
                        _this.loading.dismiss();
                    });
                    // }
                    // });
                }
                else {
                    _this.showAlert('Saldo Insuficiente', 'Você está sem CADs. Deseja comprar CADs para estacionar seu veículo?', '', function () { _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { fromPage: 'estacionar', setor: _this.setor, area: _this.nomeArea, qtdCads: _this.cad }); }, function () { }, 'COMPRAR');
                    _this.enabled = true;
                    _this.loading.dismiss();
                }
            });
        }
    };
    EstacionarPage.prototype.operacaoLinkL2 = function (estacionar, cad, dataEnvio, callback) {
        var _this = this;
        if (callback === void 0) { callback = undefined; }
        if (__WEBPACK_IMPORTED_MODULE_19__environments_environment__["a" /* environment */].simular_l2) {
            var now = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].getCurrenteDateFormated();
            var response = { dataProcessamento: now, autenticacao: '8903907809', sucesso: 'true' };
            var dataProcessamentoStr = response['dataProcessamento'];
            var dataProcessamento = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].convertDate(dataProcessamentoStr);
            var autenticacao = response['autenticacao'];
            if (response['sucesso'] || response['sucesso'] === 'true') {
                if (callback) {
                    callback(dataProcessamento, autenticacao);
                }
            }
            else {
                this.loading.dismiss();
                this.showAlert('Ops', 'Não foi possível estacionar seu veículo, uma vez que essa requisição não foi autorizada pela AMC. Para mais informações entre em contato com nosso canal de atendimento.', '', function () { }, function () { }, '', 'OK');
            }
            this.enabled = true;
        }
        else {
            this.verificaLinkL2(estacionar, cad, this.veiculoSelecionado, this.tempoCadVeiculo, this.setorModel, dataEnvio)
                .then(function (response) {
                // const response = { dataProcessamento: '2018-07-23T19:28:00', autenticacao: '8903907809', sucesso: 'true' }
                var dataProcessamentoStr = response['dataProcessamento'];
                var dataProcessamento = __WEBPACK_IMPORTED_MODULE_18__util_date_util__["a" /* DateUtil */].convertDate(dataProcessamentoStr);
                var autenticacao = response['autenticacao'];
                console.log('Resposta', response);
                if (response['sucesso'] || response['sucesso'] === 'true') {
                    if (callback) {
                        callback(dataProcessamento, autenticacao);
                    }
                }
                else {
                    _this.showAlert('Ops', 'Não foi possível estacionar seu veículo, uma vez que essa requisição não foi autorizada pela AMC. Para mais informações entre em contato com nosso canal de atendimento.', '', function () { }, function () { }, '', 'OK');
                    _this.loading.dismiss();
                }
                _this.enabled = true;
            }).catch(function (error) {
                var result = error.toString();
                result = result.split(':')[1];
                console.log('Resultado', result);
                _this.showAlert('Indisponível', result, '', function () { }, function () { }, '', 'OK');
                _this.enabled = true;
                _this.loading.dismiss();
            });
        }
    };
    EstacionarPage.prototype.verificaLinkL2 = function (estacionar, cad, veiculo, tempoCadVeiculo, setor, dataEnvio) {
        if (this.user.profile === 'revendedor') {
            return this.comunicacaoCentralProvider.desbloqueioAtivacaoPDV(estacionar.uidAparelho, estacionar.area_id, estacionar.setor_id, estacionar.face_id, setor.latInicio, setor.lngInicio, veiculo.getPlacaNaoFormatada(), veiculo.getTipoVeiculoID(), tempoCadVeiculo, cad, this.user.uidPDV, estacionar.idTransacaoDistribuidor, dataEnvio);
        }
        else {
            // return this.comunicacaoCentralProvider.desbloqueioAtivacaoApp(
            return this.comunicacaoCentralProvider.ativacaoApp(estacionar.uidAparelho, estacionar.area_id, estacionar.setor_id, estacionar.face_id, setor.latInicio, setor.lngInicio, veiculo.getPlacaNaoFormatada(), veiculo.getTipoVeiculoID(), tempoCadVeiculo, cad, estacionar.idTransacaoDistribuidor, dataEnvio);
            // return this.comunicacaoCentralProvider.consultaSaldoApp();
        }
    };
    EstacionarPage.prototype.verificaCancelamentoLinkL2 = function (idTransacaoDistribuidor, idTransacaoDistribuidorCancelamento, dataEnvio) {
        if (this.user.profile === 'revendedor') {
            return this.comunicacaoCentralProvider.cancelamentoPDV(idTransacaoDistribuidor, 'Tempo máximo de espera de 30 (trinta) segundos excedido', parseInt(this.user.uidPDV), idTransacaoDistribuidorCancelamento, dataEnvio)
                .then(function (response) {
                console.log('pdv', response);
            }).catch(function (err) {
                console.log('erro');
            });
        }
        else {
            return this.comunicacaoCentralProvider.cancelamentoApp(idTransacaoDistribuidor, 'Tempo máximo de espera de 30 (trinta) segundos excedido', idTransacaoDistribuidorCancelamento, dataEnvio)
                .then(function (response) {
                console.log('cancelamento da AMC', response);
            })
                .catch(function (err) {
                console.log(" Erro de cancelamento " + err);
            });
        }
    };
    EstacionarPage.prototype.saveEstacionar = function (estacionar, userID, cad, veiculo, fromUpdate) {
        var _this = this;
        var date = new Date(estacionar.dataHoraRegistro);
        var comprovante = {
            isPDV: (this.user.profile === 'revendedor'),
            numberPDV: this.user.uidPDV,
            numberAuth: estacionar.codAuth,
            tempoComprado: estacionar.tempoComprado,
            data: this.transformDate(date),
            horario: this.transformHour(date),
            placa: veiculo.getPlacaNaoFormatada(),
            tipo_veiculo: veiculo.tipo_veiculo,
            valor_unitario: this.cad.valor_unitario,
            valor: (cad * this.cad.valor_unitario),
            formaPagamento: "Cartão de Crédito",
            cads: cad,
            comprovanteEmail: this.cad.info.email_comprovante,
            userEmail: this.user.email,
            userCpf: this.user.cpf,
            userFone: this.user.phone,
            endereco: this.user.endereco,
            cep: this.user.cep,
            regras: this.cad.regras_comprovante,
            site: this.cad.info.site,
            situacao: estacionar.situacao,
            distribuidorCnpj: this.cad.empresa.cnpj,
            distribuidorRazaoSocial: this.cad.empresa.razao_social,
            distribuidorNomeFantasia: this.cad.empresa.nome_fantasia,
            distribuidorEndereco: this.cad.empresa.logradouro + ', ' + this.cad.empresa.logradouro_numero,
            distribuidorCep: this.cad.empresa.cep
        };
        estacionar.comprovante = comprovante;
        this.comprovanteEmail = {
            "from": 'estacionar',
            "numberAuth": "AUTENTICA\u00C7\u00C3O n\u00BA" + comprovante.numberAuth,
            "dateHour": "Data " + new Date(estacionar.dataHoraRegistro).toLocaleDateString('pt-BR') + " - HOR\u00C1RIO " + new Date(estacionar.dataHoraRegistro).toLocaleTimeString('pt-BR'),
            "placa": "PLACA: " + comprovante.placa,
            "value": "VALOR: R$ " + comprovante.valor + ",00",
            "cad": "CAD(s): " + comprovante.cads + " de 60 MINUTOS CADA",
            "email": "" + comprovante.userEmail,
            "userCpf": "" + comprovante.distribuidorCnpj,
            "userFone": "" + this.cad.info.fone,
            "formaPagamento": "" + comprovante.formaPagamento,
            "regras": "" + comprovante.regras,
            "comprovanteEmail": "" + comprovante.comprovanteEmail,
        };
        this.estacionarProvider.save(estacionar, this.user.id).then(function (result) {
            if (result) {
                //se n for update pode abrir comprovante, caso contrário abrira o comprovante 2x
                if (!fromUpdate) {
                    _this.http.get("https://us-central1-zonaazulfortaleza-temp.cloudfunctions.net/sendEmail?data=" + JSON.stringify(_this.comprovanteEmail), _this.httpOptions)
                        .subscribe(function (response) {
                        console.log("Resposta => " + response);
                    }, function (err) { return console.log('Algo deu errado =>', err); });
                    if (_this.source) {
                        if (_this.source == 'tempo_restante') {
                            _this.loading.dismiss();
                            console.log('aqui');
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name, {
                                user: _this.user,
                                estacionar: estacionar,
                                loading: _this.loading,
                            });
                            //this.viewCtrl.dismiss();
                        }
                        else {
                            _this.loading.dismiss();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name, {
                                user: _this.user,
                                estacionar: estacionar,
                                loading: _this.loading
                            });
                        }
                    }
                    else {
                        _this.loading.dismiss();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name, {
                            user: _this.user,
                            estacionar: estacionar,
                            loading: _this.loading
                        });
                    }
                }
            }
            else {
                _this.showAlert('Erro!', 'Houve um problema ao salvar o estacionamento.', 'error', function () { }, function () { }, '');
                _this.loading.dismiss();
            }
        });
    };
    EstacionarPage.prototype.updateEstacionar = function (estacionar, userID, cad, veiculo, isVeiculoEstacionadoNesteLocal, dataProcessamento, tempoEstacionadoEmMilis, autenticacao, qtdAnterior) {
        if (qtdAnterior === void 0) { qtdAnterior = 0; }
        this.updateQtdCadsUsados(this.user.id, cad);
        var estacionarModel = new __WEBPACK_IMPORTED_MODULE_14__models_estacionar__["b" /* EstacionarModel */](estacionar);
        estacionarModel.id = this.transformingDate(new Date());
        estacionarModel.situacao = isVeiculoEstacionadoNesteLocal ? 'Renovação' : 'Ativação';
        estacionarModel.categoria = this.check;
        estacionarModel.tempoEstacionado = dataProcessamento.getTime() + tempoEstacionadoEmMilis;
        estacionarModel.dataHoraRegistro = dataProcessamento.getTime();
        estacionarModel.codAuth = autenticacao;
        if (qtdAnterior === 0) {
            estacionarModel.qtd = cad;
        }
        else {
            estacionarModel.qtd = qtdAnterior;
        }
        estacionarModel.tempoComprado = this.tempoCadVeiculo * cad;
        estacionarModel.tempoEstacionado = estacionar.tempoEstacionado;
        this.saveEstacionar(estacionarModel, this.user.id, cad, veiculo, true);
    };
    EstacionarPage.prototype.updateQtdCadsUsados = function (userID, cads) {
        var _this = this;
        console.log('Uid User', userID);
        console.log('item cads', cads);
        this.cadsUserProvider.getQtdCadsUsados(this.user.id).take(1).subscribe(function (item) {
            var qtdCads = 0;
            if (item !== null) {
                qtdCads = parseInt(item);
            }
            console.log('item cads usados', item);
            _this.cadsUserProvider.updateQtdCadsUsadas(userID, (cads + qtdCads));
        });
    };
    EstacionarPage.prototype.activateOption = function (event) {
        var element;
        switch (event) {
            case "regra":
                element = document.querySelector("#regra");
                element.className = "option-text";
                document.querySelector("#horarios").className = "";
                document.querySelector("#especial").className = "";
                this.option = 'regra';
                break;
            case "horarios":
                element = document.querySelector("#horarios");
                element.className = "option-text";
                document.querySelector("#regra").className = "";
                document.querySelector("#especial").className = "";
                this.option = 'horarios';
                break;
            case "especial":
                element = document.querySelector("#especial");
                element.className = "option-text";
                document.querySelector("#regra").className = "";
                document.querySelector("#horarios").className = "";
                this.option = 'especial';
                break;
        }
    };
    EstacionarPage.prototype.checkCategoria = function (categoria) {
        var _this = this;
        switch (categoria) {
            case 'normal':
                this.check = 'normal';
                if (this.setorModel.total_vagas - this.setorModel.qtd_normal_estacionados <= 0) {
                    this.showAlert("Aviso!", "Não há vagas convencionais disponíveis!", "info", function () {
                        _this.disabledNormal = true;
                    }, function () {
                        _this.disabledNormal = true;
                    }, '');
                }
                break;
            case 'deficiente':
                this.check = 'deficiente';
                if (this.setorModel.vagas_deficiente - this.setorModel.qtd_deficiente_estacionados <= 0) {
                    this.showAlert("Aviso!", "Não há vagas disponíveis para deficientes!", "info", function () {
                        _this.disabledDeficientes = true;
                    }, function () {
                        _this.disabledDeficientes = true;
                    }, '');
                }
                break;
            case 'idoso':
                this.check = 'idoso';
                if (this.setorModel.vagas_idoso - this.setorModel.qtd_idoso_estacionados <= 0) {
                    this.showAlert("Aviso!", "Não há vagas disponíveis para idosos!", "info", function () {
                        _this.disabledIdoso = true;
                    }, function () {
                        _this.disabledIdoso = true;
                    }, '');
                }
                break;
            case 'carga_descarga':
                this.check = 'carga_descarga';
                if (this.setorModel.vagas_carga_descarga - this.setorModel.qtd_carga_descarga_estacionados <= 0) {
                    this.showAlert("Aviso!", "Não há vagas disponíveis para carga/descarga!", "info", function () {
                    }, function () {
                    }, '');
                }
                break;
        }
    };
    EstacionarPage.prototype.verifyTimeEstacionar = function (dateCurrent) {
        switch (dateCurrent.getDay()) {
            case 0:
                return this.verifyTime(this.horarios[0], dateCurrent);
            case 1:
                return this.verifyTime(this.horarios[1], dateCurrent);
            case 2:
                return this.verifyTime(this.horarios[2], dateCurrent);
            case 3:
                return this.verifyTime(this.horarios[3], dateCurrent);
            case 4:
                return this.verifyTime(this.horarios[4], dateCurrent);
            case 5:
                return this.verifyTime(this.horarios[5], dateCurrent);
            case 6:
                return this.verifyTime(this.horarios[6], dateCurrent);
        }
    };
    EstacionarPage.prototype.verifyTime = function (horario, dateCurrent) {
        // console.log(horario);
        if (horario.isDisponivel) {
            var indexTmpIni = horario.hora_inicio.indexOf(":");
            var indexTmpFim = horario.hora_fim.indexOf(":");
            var hourIni = parseInt(horario.hora_inicio.substring(0, indexTmpIni));
            var hourFim = parseInt(horario.hora_fim.substring(0, indexTmpFim));
            var minuteIni = parseInt(horario.hora_inicio.substring(indexTmpIni + 1, horario.hora_inicio.length));
            var minuteFim = parseInt(horario.hora_fim.substring(indexTmpFim + 1, horario.hora_fim.length));
            // if (horario.sequencial == 6 && dateCurrent.getHours() >= 13) {
            //     return 'alerta';
            // }
            if ((dateCurrent.getHours() >= hourIni &&
                ((dateCurrent.getMinutes() <= minuteIni || dateCurrent.getMinutes() >= minuteIni) ||
                    (dateCurrent.getHours() == hourIni && dateCurrent.getMinutes() >= minuteIni))) &&
                ((dateCurrent.getHours() < hourFim &&
                    (dateCurrent.getMinutes() <= minuteFim || dateCurrent.getMinutes() >= minuteFim)) ||
                    (dateCurrent.getHours() == hourFim && dateCurrent.getMinutes() <= minuteFim))) {
                return 'ok';
            }
        }
        return 'erro';
    };
    EstacionarPage.prototype.transformingDate = function (date) {
        var day;
        var month;
        var hour;
        var minutes;
        var seconds;
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
            hour = "0" + date.getHours();
        }
        else {
            hour = date.getHours();
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
        return date.getFullYear() + "-" + month + "-" + day + "_" + hour + "-" + minutes + "-" + seconds;
    };
    EstacionarPage.prototype.createMessage = function (cad) {
        switch (cad) {
            case 1:
                return "Só é permitido escolher 1 CAD neste setor por vez.";
            case 2:
                return "Só é permitido escolher 2 CADs neste setor por vez.";
            case 3:
                return "Só é permitido escolher 3 CADs neste setor por vez.";
        }
    };
    EstacionarPage.prototype.closeEstacionarPage = function () {
        if (this.source) {
            if (this.source == 'tempo_restante') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].TEMPO_RESTANTE_PAGE.name);
            }
            else if (this.source == 'principal') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
            }
            else if (this.source == 'mapa') {
                // this.navCtrl.pop();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].HOME_PAGE.name);
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].PRINCIPAL_PAGE.name);
        }
    };
    /**
     *
     */
    EstacionarPage.prototype._agendarEstacionamento = function (agenda) {
        var _this = this;
        this.estacionarProvider.agendarEstacionamento(agenda)
            .then(function (response) {
            _this.showAlert('Atencão', response, '', function () {
                _this.closeEstacionarPage();
            }, function () {
            }, 'OK', '');
            _this.loading.dismiss();
        })
            .catch(function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    /**
     *
     * @param title titulo da mensagem
     * @param msg mensagem a ser exebida
     * @param type
     * @param success callback a ser realizado quando o usuario confirmar
     * @param error callBack a ser executado quando o usurario clicar em cancelar
     * @param btnOk  mensagem no botão a ser exibida para confirmar, se não definido aparece o default "Confirmar"
     * @param btnCancelar  - opicionaal texto no botão a ser exebida para cancelar , caso não apareça vem o default "Cancelar"
     */
    EstacionarPage.prototype.showAlert = function (title, msg, type, success, error, btnOk, btnCancelar) {
        if (btnOk === void 0) { btnOk = "Confirmar"; }
        if (btnCancelar === void 0) { btnCancelar = 'Cancelar'; }
        var okBtn = {
            text: btnOk,
            cssClass: 'btn-ok',
            handler: function (data) {
                success();
            }
        };
        var cancelBtn = {
            text: btnCancelar,
            cssClass: 'btn-cancel',
            handler: function (data) {
                error();
            }
        };
        var btns = [];
        btns.push(cancelBtn);
        if (btnOk !== '')
            btns.push(okBtn);
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            cssClass: 'alert',
            buttons: btns,
            enableBackdropDismiss: false
        });
        alert.present();
    };
    EstacionarPage.prototype.transformDate = function (date) {
        return date.toLocaleDateString("pt-BR");
    };
    EstacionarPage.prototype.transformHour = function (date) {
        return date.toLocaleTimeString("pt-BR");
    };
    // private _getMensagemForaHorario(day: string): string {
    //     switch (day) {
    //         case 'Domingo':
    //             return 'Apenas alguns locais funcionam como Zona Azul no Domingo e feriados! Confira a sinalização!'
    //         case 'Sexta':
    //             return 'Apenas alguns locais funcionam como Zona Azul após 19h! Confira a sinalização!'
    //         case 'Sabado':
    //             return 'Apenas alguns locais funcionam como Zona Azul nos Sabádos após as 14h! Confira a sinalização!'
    //         default:
    //             return ''
    //     }
    // }
    EstacionarPage.prototype.showHelp = function (title, message, type, callback) {
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
    /**
     * Pop-out com as ajudas sobre as informações para o  usuário
     */
    //openHelp() {
    // this.showHelp('Ajuda', 'Verifique se os dados estão corretos e confirme o setor que deseja estacionar.', '', () => { })
    //}
    EstacionarPage.prototype.comprarCads = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__environments_constants__["a" /* Constants */].CREDITOS_PAGE.name, { fromPage: 'estacionar' });
    };
    EstacionarPage.prototype.criarMap = function (lat, lon) {
        var position = new google.maps.LatLng(lat, lon);
        function initialize() {
            var mapOptions = {
                zoom: 16,
                center: new google.maps.LatLng(lat + 30, lon + 30),
                panControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                rotateControl: false,
                zoomControl: false,
                disableDefaultUI: true
            };
            var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
            var marker = new google.maps.Marker({
                position: position,
                animation: google.maps.Animation.BOUNCE,
                icon: {
                    url: 'assets/icones/pin-dark.svg',
                    scaledSize: new google.maps.Size(55, 55),
                },
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize());
    };
    EstacionarPage.prototype.checkRadio = function (radio) {
        this.radio = radio;
        this.selectCad(radio);
        //this.getMinutos(radio)
        console.log(this.radio);
    };
    EstacionarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-estacionar',template:/*ion-inline-start:"C:\Users\ELIAS\Desktop\ZAD\src\pages\estacionar\estacionar.html"*/'<ion-header no-border>\n\n    <ion-navbar color="header">\n\n\n\n        <ion-buttons left>\n\n            <button color="white" ion-button icon-only (click)="closeEstacionarPage()">\n\n                <ion-icon name="arrow-back" class="header-icon"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            <ion-label *ngIf="qtdCadsUser < 1" class="qtd-cads">Saldo: 0 CADs</ion-label>\n\n                <ion-label *ngIf="qtdCadsUser > 1" class="qtd-cads">Saldo: {{qtdCadsUser}} CADs</ion-label>\n\n                <ion-label *ngIf="qtdCadsUser == 1" class="qtd-cads">Saldo: {{qtdCadsUser}} CAD</ion-label>\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="comprarCads()">\n\n                <img src="assets/icones/shopping-cart-white.svg"  />\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n    <div class="info"><p>Atenção esse aplicativo é válido somente</p><p>para a cidade de Fortaleza Ceará</p></div>\n\n    <div class="{{veiculo_tipo == \'caminhao\'? \'info-content-green\':\'info-content-pink\'}}">\n\n        <loading-spinner *ngIf="showSpinner"></loading-spinner>\n\n        <ion-item (click)="selecionarVeiculo()" class="item-select" no-lines mode="md" *ngIf="!showSpinner">\n\n            <ion-label text-left class="title-select" mode="md">\n\n                {{veiculoSelecionado?.placa || placa}}\n\n                <button ion-button small icon-only clear class="btn-arrow">\n\n                    <ion-icon name="ios-arrow-down"></ion-icon>\n\n                </button>\n\n                <p>\n\n                    {{veiculo_marca || veiculo_modelo | uppercase}}\n\n                </p>\n\n            </ion-label>\n\n            <ion-label text-center mode="md"><img class="thumb" src="assets/icones/{{veiculo_tipo == \'caminhao\'? \'caminhao-blue-dark.svg\': \'carro-white.svg\'}}" alt=""></ion-label>\n\n        </ion-item>\n\n        <!--\n\n            <ion-select [(ngModel)]="placa" mode="md" cancelText="Cancelar" okText="Ok" (ionChange)="selecionarVeiculo($event)" [disabled]="fromRenovar">\n\n            <ion-option *ngFor="let item of veiculos" value="{{item.veiculo.placa}}" (click)="selecionarVeiculo($event)">{{item?.veiculo?.placa}}</ion-option>\n\n        </ion-select> \n\n        -->\n\n    </div>\n\n    <div class="map_area">\n\n        <div id="googleMap"></div>\n\n    </div>\n\n    \n\n\n\n    <ion-grid class="grid">\n\n        <ion-label class="title"><p>Quantos cartões deseja usar?</p></ion-label>\n\n        <ion-row class="radio-row">\n\n            <div class="radio-master">\n\n                <div class="{{radio == 1?\'radio checked\':\'radio\'}}">\n\n                \n\n                    <div tappable (tap)="checkRadio(1)">\n\n                        <ion-icon name="{{radio == 1?\'radio-button-on\':\'radio-button-off\'}}"></ion-icon><ion-label class="title-cads">1 CAD</ion-label>\n\n                    </div>\n\n                    \n\n                </div>\n\n                <div class="{{radio == 2?\'radio checked\':\'radio\'}}">\n\n                    <div tappable (tap)="checkRadio(2)">\n\n                        <ion-icon name="{{radio == 2?\'radio-button-on\':\'radio-button-off\'}}"></ion-icon><ion-label class="title-cads">2 CADs</ion-label>\n\n                    </div>\n\n                    \n\n                </div>\n\n            </div>\n\n            \n\n        </ion-row>\n\n        <!--<ion-row class="row-header">\n\n            <ion-col col-12 class="col-title-setor" align="center">\n\n                \n\n            </ion-col>\n\n            <ion-col col-12 class="col-title" align="center">\n\n                <ion-label class="title">Prefeitura Municipal de Fortaleza</ion-label>\n\n            </ion-col>\n\n            <ion-col col-4 class="col-qtd-cads" align="center">\n\n                <ion-label *ngIf="qtdCadsUser < 1" class="qtd-cads">0 CADs</ion-label>\n\n                <ion-label *ngIf="qtdCadsUser > 1" class="qtd-cads">{{qtdCadsUser}} CADs</ion-label>\n\n                <ion-label *ngIf="qtdCadsUser == 1" class="qtd-cads">{{qtdCadsUser}} CAD</ion-label>\n\n            </ion-col>\n\n            <ion-col col-10 class="col-select" (click)="selecionarVeiculo()">\n\n                <loading-spinner *ngIf="showSpinner"></loading-spinner>\n\n                <ion-item class="item-select" no-lines mode="md" *ngIf="!showSpinner">\n\n                    <ion-label text-left class="title-select" mode="md">Veículo :</ion-label>\n\n                    <ion-label text-center mode="md">{{veiculoSelecionado?.placa || \'Selecione o veiculo\'}}</ion-label>\n\n                    <ion-label text-right class="search">\n\n                        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n\n                    </ion-label>\n\n                    \n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12 class="col-title" align="center" *ngIf="user?.profile === \'revendedor\'">\n\n                <ion-item class="item-btn" no-lines>\n\n                    <button ion-button block class="btn-button"  (click)="addVeiculo()" style="height:35px;" block> Inserir Veículo </button>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="row-options">\n\n            <ion-col class="col-rule" col-auto>\n\n                <ion-item class="item-rule" no-lines no-border>\n\n                    <label class="rule" (click)="activateOption(\'especial\')">\n\n                        <span id="especial">CATEGORIA</span>\n\n                    </label>\n\n                    <label class="rule" (click)="activateOption(\'horarios\')">\n\n                        <span id="horarios">HORÁRIOS</span>\n\n                    </label>\n\n                    <label class="rule" (click)="activateOption(\'regra\')">\n\n                        <span id="regra">REGRA</span>\n\n                    </label>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-col col-12 class="row-options-selected">\n\n            <ion-col col-12 class="col-options-selected-especial"\n\n                [style.display]="option === \'especial\' ? \'block\' : \'none\'">\n\n                <ion-list\n\n                    *ngIf="veiculoSelecionado && veiculoSelecionado.tipo_veiculo == \'caminhao_onibus\'; else cat_automovel"\n\n                    onshow="checkCategoria(\'carga_descarga\')">\n\n                    <ion-item class="item-options-selected-especial" no-lines>\n\n                        <ion-label class="especial-description">Carga/Descarga</ion-label>\n\n                        <ion-radio [checked]="true" [disabled]="true" item-left mode="md"></ion-radio>\n\n                    </ion-item>\n\n                </ion-list>\n\n                <ng-template #cat_automovel>\n\n                    <ion-list>\n\n                        <ion-item class="item-options-selected-especial" no-lines>\n\n                            <ion-label class="especial-description">Normal</ion-label>\n\n                            <ion-radio [checked]="check == \'normal\' ? true : false" [disabled]="disabledNormal"\n\n                                (click)="checkCategoria(\'normal\')" item-left mode="md"></ion-radio>\n\n                        </ion-item>\n\n                        <ion-item class="item-options-selected-especial" no-lines>\n\n                            <ion-label class="especial-description">Deficiente Físico</ion-label>\n\n                            <ion-radio [checked]="check == \'deficiente\' ? true : false" [disabled]="disabledDeficientes"\n\n                                (click)="checkCategoria(\'deficiente\')" item-left mode="md">\n\n                            </ion-radio>\n\n                        </ion-item>\n\n                        <ion-item class="item-options-selected-especial" no-lines>\n\n                            <ion-label class="especial-description">Idoso</ion-label>\n\n                            <ion-radio [checked]="check == \'idoso\' ? true : false" [disabled]="disabledIdoso"\n\n                                (click)="checkCategoria(\'idoso\')" item-left mode="md"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ng-template>\n\n            </ion-col>\n\n            <ion-col col-11 class="col-options-selected-horarios"\n\n                [style.display]="option === \'horarios\' ? \'block\' : \'none\'">\n\n                <ion-label class="cads-title" style="color: #8c8c8c;">Obrigatório o uso de CAD nos seguintes horários\n\n                </ion-label>\n\n                <ion-item *ngFor="let horario of horarios" class="item-options-selected-horarios" no-lines\n\n                    [hidden]="!horario?.isDisponivel">\n\n                    <p class="horarios-description">{{horario?.dia}}: {{horario?.hora_inicio}} às {{horario?.hora_fim}}\n\n                    </p>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-auto class="col-options-selected-regra"\n\n                [style.display]="option === \'regra\' ? \'block\' : \'none\'">\n\n                <ion-item class="item-options-selected-regra" no-lines no-border>\n\n                    <p class="regra-description">{{cad?.regras}}</p>\n\n                </ion-item>\n\n            </ion-col>\n\n        </ion-col>-->\n\n        <ion-row class="row-cads">\n\n            <ion-col col-8 class="col-cads">\n\n                <ion-label class="cads-title"><p>Escolha a regra de estacionamento abaixo</p> <p>e em seguida confirme a opção desejada:</p></ion-label>\n\n            </ion-col>\n\n            \n\n            <ion-col col-10>\n\n                <ion-item class="col-cad-select">\n\n                    \n\n                    <!--<ion-select style="color: #3F65FF;" [selectOptions]="selectOption" [(ngModel)]="setor_cads" (ionChange)="selectCad(setor_cads)" mode="md" cancelText="Cancelar">\n\n                        \n\n                        <ion-option *ngFor="let item of cads_setor" value="{{item}}" selected="{{item==1?\'true\':\'false\'}}" (click)="selectCad(item)">{{item}} CAD(s) = {{ getMinutos(item) }}</ion-option>\n\n\n\n                    </ion-select>-->\n\n                    <label *ngIf="setorModel">{{cadSelectd}} CAD(s) = {{ getMinutos(cadSelectd)}}</label>\n\n                </ion-item>\n\n                \n\n                <!--<ion-item no-lines>\n\n                    <ion-radio [checked]="cadSelectd == item ? true : false" (click)="selectCad(item)" class="checkbox"\n\n                        item-left mode="md"></ion-radio>\n\n                    <ion-label class="cads-hour">\n\n                    </ion-label>\n\n                </ion-item> -->\n\n            </ion-col>\n\n           <!-- <ion-col col-12 class="col-cads" *ngFor="let item of cads_setor">\n\n                <ion-item no-lines>\n\n                    <ion-radio [checked]="cadSelectd == item ? true : false" (click)="selectCad(item)" class="checkbox"\n\n                        item-left mode="md"></ion-radio>\n\n                    <ion-label class="cads-hour">\n\n                        <span>{{ getMinutos(item) }}</span>\n\n                        <span class="cads-qtd-2"> {{item}} CAD(s)</span>\n\n                    </ion-label>\n\n                    <ion-label class="cads-price">R$ {{cad?.valor_unitario * item}},00</ion-label>\n\n                </ion-item>\n\n            </ion-col> -->\n\n            <ion-item class="item-btn" no-lines>\n\n                <button ion-button block class="btn-button" (click)="openComprovante(cadSelectd, placa)"\n\n                    >Estacionar</button>\n\n            </ion-item>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ELIAS\Desktop\ZAD\src\pages\estacionar\estacionar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_comunicacao_central_comunicacao_central__["a" /* ComunicacaoCentralProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_veiculos_veiculos__["a" /* VeiculosProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tempo_estacionado_tempo_estacionado__["a" /* TempoEstacionadoProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__providers_estacionar_estacionar__["a" /* EstacionarProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_cads_user_cads_user__["a" /* CadsUserProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_cads_cads__["a" /* CadsProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_setores_setores__["a" /* SetoresProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_holidays_holidays__["a" /* HolidaysProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], EstacionarPage);
    return EstacionarPage;
}());

//# sourceMappingURL=estacionar.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendarEstacionamentoModel; });
var AgendarEstacionamentoModel = /** @class */ (function () {
    function AgendarEstacionamentoModel(obj) {
        if (obj && obj.id) {
            this.id = obj && obj.id || '';
        }
        else {
            this.id = obj && obj.$key || '';
        }
        this.userID = obj && obj.userID || '';
        this.lat = obj && obj.lat || 0;
        this.long = obj && obj.long || 0;
        this.codigoArea = obj && obj.codigoArea || 0;
        this.codigoSetor = obj && obj.codigoSetor || 0;
        this.placa = obj && obj.placa || '';
        this.categoria = obj && obj.categoria || 'normal';
        this.tempoComprado = obj && obj.tempoComprado || 0;
        this.quantidade = obj && obj.quantidade || 1;
        this.idTransacaoDistribuidor = obj && obj.idTransacaoDistribuidor || 0;
        this.udid_imei = obj && obj.udid_imei || '';
        this.veiculo_id = obj && obj.veiculo_id || '';
        this.sucess = obj && obj.sucess || false;
        // this.categoria = obj && obj.categoria || '';
        this.time = obj && obj.time || null;
    }
    return AgendarEstacionamentoModel;
}());

//# sourceMappingURL=agendamento.js.map

/***/ })

});
//# sourceMappingURL=4.js.map