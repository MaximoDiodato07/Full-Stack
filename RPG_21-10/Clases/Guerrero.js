"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerrero = void 0;
var estandar_1 = require("./estandar");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero() {
        var _this = _super.call(this) || this; // de aquí solo mantengo el nivel
        _this.nombre = _this.setNombre();
        _this.vida = 200;
        _this.inteligencia = 5;
        _this.fuerza = 10;
        _this.destreza = 7;
        _this.clase = _this.constructor.name;
        return _this;
    }
    // Ataque básico
    Guerrero.prototype.ataqueBasico = function () {
        var daño = Math.round(this.fuerza * 1.5);
        console.log('Usaste: Golpe Básico, Causaste ' + daño + ' Puntos de daño');
    };
    // Ataque secundario
    Guerrero.prototype.ataqueSecundario = function () {
        var daño = Math.round(this.fuerza * 2);
        console.log('Usaste: Carga, Causaste ' + daño + ' Puntos de daño');
    };
    // Habilidad ultimate
    Guerrero.prototype.ultimate = function () {
        var daño = Math.round(this.fuerza * 3);
        console.log('Usaste: Furia, Causaste ' + daño + ' Puntos de daño');
    };
    Guerrero.prototype.evolucionar = function () {
        if (this.vida > 150 && this.fuerza > 15 && this.clase != 'Berserk') {
            console.log('Felicitaciones ' + this.clase + ', has evolucionado a Berserk!');
            this.clase = 'Berserk';
            this.vida = this.vida * 1.5;
            this.fuerza = this.fuerza * 2;
            this.destreza = this.destreza * 1.2;
        }
        else {
            if (this.clase == 'Berserk') {
                console.log('No puedes evolucionar mas que: ' + this.clase);
            }
            else {
                console.log('No puedes evolucionar aun');
            }
        }
    };
    return Guerrero;
}(estandar_1.Estandar));
exports.Guerrero = Guerrero;
