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
var router_1 = require('@angular/router');
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var RestauranteListComponent = (function () {
    function RestauranteListComponent(restauranteService, router) {
        this.restauranteService = restauranteService;
        this.router = router;
        this.titulo = "Listado de Restaurantes";
    }
    RestauranteListComponent.prototype.ngOnInit = function () {
        console.log("Cargando..");
        this.getRestaurantes();
    };
    RestauranteListComponent.prototype.onSelectVer = function (id) {
        console.log("hola");
        console.log(id);
        this.router.navigate(['/restaurante', { id: id }]);
    };
    RestauranteListComponent.prototype.getRestaurantes = function () {
        var _this = this;
        var box_restaurantes = document.querySelector("#restaurantes-list .loading");
        box_restaurantes.style.visibility = "visible";
        this.restauranteService.getRestaurantes().subscribe(function (result) {
            _this.Restaurantes = result.data;
            _this.status = result.status + "";
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
    RestauranteListComponent = __decorate([
        core_1.Component({
            selector: 'restaurante-list',
            templateUrl: 'app/views/restaurante-list.html',
            providers: [restaurante_service_1.RestauranteService]
        }), 
        __metadata('design:paramtypes', [restaurante_service_1.RestauranteService, router_1.Router])
    ], RestauranteListComponent);
    return RestauranteListComponent;
}());
exports.RestauranteListComponent = RestauranteListComponent;
//# sourceMappingURL=restaurantes-list.js.map