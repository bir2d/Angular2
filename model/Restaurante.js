"use strict";
var Restaurante = (function () {
    function Restaurante(id, nombre, direccion, descripcion, imagen, precio) {
        if (id === void 0) { id = null; }
        if (nombre === void 0) { nombre = null; }
        if (direccion === void 0) { direccion = null; }
        if (descripcion === void 0) { descripcion = null; }
        if (imagen === void 0) { imagen = null; }
        if (precio === void 0) { precio = null; }
        if (id !== null) {
            this.id = id;
        }
        if (nombre !== null) {
            this.nombre = nombre;
        }
        if (direccion !== null) {
            this.direccion = direccion;
        }
        if (imagen !== null) {
            this.imagen = imagen;
        }
        if (descripcion !== null) {
            this.descripcion = descripcion;
        }
        if (precio !== null) {
            this.precio = precio;
        }
    }
    Restaurante.prototype.getId = function () {
        return this.id;
    };
    Restaurante.prototype.setId = function (id) {
        this.id = id;
    };
    Restaurante.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Restaurante.prototype.getNombre = function () {
        return this.nombre;
    };
    Restaurante.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Restaurante.prototype.getDireccion = function () {
        return this.direccion;
    };
    Restaurante.prototype.setImagen = function (imagen) {
        this.imagen = imagen;
    };
    Restaurante.prototype.getImagen = function () {
        return this.imagen;
    };
    Restaurante.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Restaurante.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Restaurante.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Restaurante.prototype.getPrecio = function () {
        return this.precio;
    };
    return Restaurante;
}());
exports.Restaurante = Restaurante;
//# sourceMappingURL=Restaurante.js.map