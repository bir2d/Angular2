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
var http_1 = require('@angular/http');
require("rxjs/add/operator/map");
var core_1 = require('@angular/core');
var RestauranteService = (function () {
    function RestauranteService(_http) {
        this._http = _http;
    }
    RestauranteService.prototype.getRestaurantes = function () {
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurantes")
            .map(function (res) { return res; });
    };
    RestauranteService.prototype.getRestaurante = function (id) {
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurante/" + id)
            .map(function (res) { return res; });
    };
    RestauranteService.prototype.deleteRestaurante = function (id) {
        return this._http.get("http://localhost:8080/api_res_angular2/restaurantes-api.php/delete-restaurante/" + id)
            .map(function (res) { return res; });
    };
    RestauranteService.prototype.addRestaurante = function (restaurante) {
        var body = JSON.stringify(restaurante);
        body = "json=" + body;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost:8080/api_res_angular2/restaurantes-api.php/restaurantes", body, options).map(function (res) { return res; });
    };
    RestauranteService.prototype.editRestaurante = function (restaurante) {
        var body = JSON.stringify(restaurante);
        body = "json=" + body;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post("http://localhost:8080/api_res_angular2/restaurantes-api.php/update-restaurante/" + restaurante.id, body, options).map(function (res) { return res; });
    };
    RestauranteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestauranteService);
    return RestauranteService;
}());
exports.RestauranteService = RestauranteService;
//# sourceMappingURL=restaurante.service.js.map