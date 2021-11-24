webpackJsonp([7],{

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculoEstacionadoPageModule", function() { return VeiculoEstacionadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculo_estacionado__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VeiculoEstacionadoPageModule = /** @class */ (function () {
    function VeiculoEstacionadoPageModule() {
    }
    VeiculoEstacionadoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__veiculo_estacionado__["a" /* VeiculoEstacionadoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__veiculo_estacionado__["a" /* VeiculoEstacionadoPage */]),
            ],
        })
    ], VeiculoEstacionadoPageModule);
    return VeiculoEstacionadoPageModule;
}());

//# sourceMappingURL=veiculo-estacionado.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_constants__ = __webpack_require__(20);


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
            zoomControl: true,
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
            var marker = void 0;
            var iconUrlGrenn = "assets/imgs/map-marker-green-4.png";
            var iconUrlRed = "assets/imgs/map-marker-red-4.png";
            var totalVagasUtilizadas = item.setor.qtd_deficiente_estacionados + item.setor.qtd_idoso_estacionados + item.setor.qtd_normal_estacionados;
            polyline = new google.maps.Polyline(this.createPolylineOptions(item.setor, totalVagasUtilizadas));
            polyline.setMap(map);
            MapUtil.polylines.push(polyline);
            marker = new google.maps.Marker({
                position: { lat: item.setor.latInicio, lng: item.setor.lngInicio },
                icon: {
                    url: (item.setor.total_vagas - totalVagasUtilizadas > 0) ? iconUrlGrenn : iconUrlRed,
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            // marker.
            marker.setMap(map);
            var infowindow_1 = new google.maps.InfoWindow({
                content: this.createInfoPolylines(item.setor, item.area, totalVagasUtilizadas),
            });
            /**
             * Abre as opções do estacionamento
             * polyline  item pressionado onde vai abrir o evento ( linha do inicio e final do Simbolo do carro)
             */
            google.maps.event.addListener(polyline, 'click', function (event) {
                infowindow_1.setPosition(event.latLng);
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
            /**
             * Abre as opções do estacionamento
             * marker  item pressionado onde vai abrir o evento ( Simbolo do carro verde)
             */
            google.maps.event.addListener(marker, 'click', function (event) {
                infowindow_1.setPosition(event.latLng);
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
        var iconUrlGrenn = "assets/imgs/map-marker-green-4.png";
        var iconUrlRed = "assets/imgs/map-marker-red-4.png";
        var marker;
        var latlng = new google.maps.LatLng(setor.latInicio, setor.lngInicio);
        map.setCenter(latlng);
        map.setZoom(17);
        var totalVagasUtilizadas = setor.qtd_deficiente_estacionados + setor.qtd_idoso_estacionados + setor.qtd_normal_estacionados;
        var infowindow = new google.maps.InfoWindow({
            content: this.createInfoPolylines(setor, area, totalVagasUtilizadas),
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
        var setorNome = (setor.nome.length < 3) ? ('Setor ' + setor.nome) : setor.nome;
        // console.log('ST', setorNome + " | " + setor.codigo);
        // console.log('AR', area);
        var h3 = document.createElement('h3');
        h3.className = "setor-codigo";
        h3.innerText = setorNome + " (" + setor.codigo + ")" + " | Área: " + area.endereco + " (" + area.codigo + ")";
        var h5vt = document.createElement('h4');
        h5vt.className = "setor-vagas";
        h5vt.innerText = "Vagas: " + setor.total_vagas;
        var h5vn = document.createElement('h4');
        h5vn.className = "setor-vagas-normal";
        // h5vn.innerText = "Vagas convencionais disponíveis: " + ((setor.total_vagas - (setor.vagas_idoso + setor.vagas_deficiente)) - setor.qtd_normal_estacionados);
        h5vn.innerText = "Vagas convencionais: " + (setor.total_vagas - setor.qtd_normal_estacionados);
        var h5vd = document.createElement('h4');
        h5vd.className = "setor-vagas-normal";
        h5vd.innerText = "Vagas de deficiente: " + (setor.vagas_deficiente - setor.qtd_deficiente_estacionados);
        var h5vi = document.createElement('h4');
        h5vi.className = "setor-vagas-normal";
        h5vi.innerText = "Vagas de idoso: " + (setor.vagas_idoso - setor.qtd_idoso_estacionados);
        var h5vc = document.createElement('h4');
        h5vc.className = "setor-vagas-normal";
        h5vc.innerText = "Vagas Carga/Descarga: " + (setor.vagas_carga_descarga - setor.qtd_carga_descarga_estacionados);
        var button = document.createElement('button');
        button.className = "btn-estacionar";
        button.innerText = "Estacionar";
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
        var buttonView = document.createElement('button');
        buttonView.className = "btn-ver";
        // buttonView.innerText = "Ver";
        var icon = document.createElement('img');
        icon.setAttribute("src", "assets/icon/streat_view.png");
        icon.className = "streat-view";
        buttonView.appendChild(icon);
        buttonView.addEventListener('click', function () {
            document.getElementById('btn-show-streat-view').setAttribute("setor", setor.codigo);
            document.getElementById('btn-show-streat-view').setAttribute("area", area.codigo);
            document.getElementById('btn-show-streat-view').click();
        });
        div.appendChild(h3);
        // div.appendChild(h5vt);
        div.appendChild(h5vn);
        div.appendChild(h5vd);
        div.appendChild(h5vi);
        div.appendChild(h5vc);
        div.appendChild(button);
        div.appendChild(buttonView);
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

/***/ 835:
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

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export LatLng */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_location_accuracy__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_setores_setores__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_veiculos_veiculos__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_cads_user_cads_user__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_comunicacao_central_comunicacao_central__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_modal_modal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_area_area__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_constants__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__util_map_util__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_functions_util__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_estacionar_estacionar__ = __webpack_require__(221);
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
        this.estacionar = [];
        this.setores = [];
        this.qtdCadsUser = 0;
        this.qtdCadsUSados = 0;
        this.mapUtil = new __WEBPACK_IMPORTED_MODULE_16__util_map_util__["a" /* MapUtil */]();
        this.allSetores = [];
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
                    console.log(val);
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
                                    qtdCads: (_this.qtdCadsUser - _this.qtdCadsUSados)
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
                                qtdCads: (_this.qtdCadsUser - _this.qtdCadsUSados)
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
    HomePage.prototype.showStreatView = function (event) {
        var _this = this;
        var wait = this.loadingCtrl.create({ content: 'Aguarde...' });
        wait.present();
        var button = document.getElementById('btn-show-streat-view');
        var codigoSetor = button.getAttribute("setor");
        var codigoArea = button.getAttribute("area");
        this.setoresProvider.byId(codigoArea, codigoSetor)
            .subscribe(function (data) {
            var streatViewPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__environments_constants__["a" /* Constants */].STREAT_VIEW_PAGE.name, { map: HomePage_1.map, data: data, wait: wait });
            streatViewPage.present().then(function () {
                _this.modalProvider.setActive();
            });
        }, function (error) {
            console.log(error);
            wait.dismiss();
        });
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/home/home.html"*/'<ion-header no-border>\n    <ion-navbar color="header">\n        <button ion-button icon-only menuToggle>\n            <ion-icon class="header-icon" name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <ion-label>Início</ion-label>\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openTempoRestantePage()">\n                <img src="assets/imgs/time.png" width="30px" height="30px" />\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content">\n    <div #map id="map"></div>\n    <input #search id="search" class="controls" type="text" placeholder="Buscar Local">\n\n    <button ion-button icon-only type="button" item-right clear (click)="listen()" id="mic" [style.display]="\'none\'">\n        <ion-icon name="mic" class="icon"></ion-icon>\n    </button>\n    <ion-fab id="help">\n        <button ion-fab icon-only (click)="openHelp()">\n            <ion-icon name="help"></ion-icon>\n        </button>\n    </ion-fab>\n\n    <ion-fab id="close" (click)="showCloseSetor()">\n        <button ion-fab>\n        </button>\n    </ion-fab>\n\n    <ion-fab>\n        <button ion-fab icon-only color="default" (click)="buscarSetores()" id="locate">\n            <ion-icon name="search" class="icon"></ion-icon>\n        </button>\n    </ion-fab>\n\n    <ion-icon #icon name="close" class="icon-clear" style="display: none" id="icon"></ion-icon>\n    <button ion-button id="btn-show-estacionar-page" (click)="openEstacionarPage($event)"\n        [style.display]="\'none\'"></button>\n    <button ion-button id="btn-show-streat-view" (click)="showStreatView($event)" [style.display]="\'none\'"></button>\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
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

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoEstacionadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_location_accuracy__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_modal_modal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_map_util__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VeiculoEstacionadoPage = /** @class */ (function () {
    function VeiculoEstacionadoPage(navCtrl, navParams, modalCtrl, userProvider, viewCtrl, locationAccuracy, modalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.viewCtrl = viewCtrl;
        this.locationAccuracy = locationAccuracy;
        this.modalProvider = modalProvider;
        this.mapUtil = new __WEBPACK_IMPORTED_MODULE_6__util_map_util__["a" /* MapUtil */]();
        __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */].MAP_LOAD = false;
        __WEBPACK_IMPORTED_MODULE_6__util_map_util__["a" /* MapUtil */].circles.pop();
    }
    VeiculoEstacionadoPage.prototype.ionViewCanEnter = function () {
        this.userProvider.getUserLocal().then(function (userID) {
            if (userID) {
                return true;
            }
        });
    };
    VeiculoEstacionadoPage.prototype.ionViewDidLoad = function () {
        this.lat = this.navParams.get('lat');
        this.lng = this.navParams.get('lng');
        this.estacionar = this.navParams.get('estacionar');
        this.initMap();
    };
    VeiculoEstacionadoPage.prototype.initMap = function () {
        var _this = this;
        if (this.mapElement != null && this.mapElement.nativeElement != null) {
            this.mapUtil.locationAccuracy = this.locationAccuracy;
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapUtil.mapOptions());
            this.map.setCenter({ lat: this.lat, lng: this.lng });
            this.map.setZoom(19);
            var marker = new google.maps.Marker({
                position: { lat: this.lat, lng: this.lng }
            });
            marker.setMap(this.map);
            var infowindow_1 = new google.maps.InfoWindow({
                content: "Seu veículo está estacionado aqui!"
            });
            google.maps.event.addListener(marker, 'click', function (event) {
                infowindow_1.setPosition(event.latLng);
                infowindow_1.open(_this.map);
            });
        }
    };
    VeiculoEstacionadoPage.prototype.closeVeiculoEstacionadoPage = function () {
        var _this = this;
        this.viewCtrl.dismiss().then(function () {
            _this.modalProvider.desactivate();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapVeiculoEstacionado'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VeiculoEstacionadoPage.prototype, "mapElement", void 0);
    VeiculoEstacionadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-veiculo-estacionado',template:/*ion-inline-start:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/veiculo-estacionado/veiculo-estacionado.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n\n    <ion-title>\n      <ion-label>Local Estacionado</ion-label>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div #mapVeiculoEstacionado id="mapVeiculoEstacionado"></div>\n</ion-content>'/*ion-inline-end:"/Users/desenvolvedor/Documents/appzonzazul/src/pages/veiculo-estacionado/veiculo-estacionado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_4__providers_modal_modal__["a" /* ModalProvider */]])
    ], VeiculoEstacionadoPage);
    return VeiculoEstacionadoPage;
}());

//# sourceMappingURL=veiculo-estacionado.js.map

/***/ })

});
//# sourceMappingURL=7.js.map