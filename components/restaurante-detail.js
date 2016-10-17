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
// Importar Component desde el núcleo de Angular
var core_1 = require('@angular/core');
var restaurante_service_1 = require('../service/restaurante.service');
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteDetailComponent = (function () {
    function RestauranteDetailComponent(restauranteService) {
        this.restauranteService = restauranteService;
        this.titulo = "Detalle Restaurante";
    }
    RestauranteDetailComponent.prototype.ngOnInit = function () {
        console.log("Cargando..");
    };
    RestauranteDetailComponent.prototype.getRestaurantes = function () {
        var _this = this;
        var box_restaurantes = document.querySelector("#restaurantes-list .loading");
        box_restaurantes.style.visibility = "visible";
        this.restauranteService.getRestaurantes().subscribe(function (result) {
            _this.Restaurantes = result.data,
                _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            box_restaurantes.style.display = "none";
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    RestauranteDetailComponent = __decorate([
        core_1.Component({
            selector: 'restaurante-list',
            templateUrl: 'app/views/restaurante-detail.html',
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService])
    ], RestauranteDetailComponent);
    return RestauranteDetailComponent;
}());
exports.RestauranteDetailComponent = RestauranteDetailComponent;
//# sourceMappingURL=restaurante-detail.js.map