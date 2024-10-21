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
exports.Arquero = void 0;
var estandar_1 = require("./estandar");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    // "this.constructor.name" esto me devuelve el nombre de la clase
    function Arquero() {
        var _this = _super.call(this) || this; // de aqui solo mantengo el nivel
        _this.nombre = _this.setNombre();
        _this.vida = 150;
        _this.inteligencia = 8;
        _this.fuerza = 5;
        _this.destreza = 10;
        _this.clase = _this.constructor.name;
        return _this;
    }
    // Ataque básico
    Arquero.prototype.ataqueBasico = function () {
        var daño = Math.round(this.destreza * 1.3); // sin decimales
        console.log('Usaste: Tiro Basico, Causaste ' + daño + ' Puntos de daño');
    };
    // Ataque secundario
    Arquero.prototype.ataqueSecundario = function () {
        var daño = Math.round(this.destreza * 1.5);
        console.log('Usaste: Disparo Rápido, Causaste ' + daño + ' Puntos de daño');
    };
    // Habilidad ultimate
    Arquero.prototype.ultimate = function () {
        var daño = Math.round((this.destreza * 2) + (this.inteligencia * 0.5));
        console.log('Usaste: Tiro Certero, Causaste ' + daño + ' Puntos de daño');
    };
    Arquero.prototype.evolucionar = function () {
        if (this.destreza > 15 && this.inteligencia > 10 && this.clase != 'Arquero Místico') {
            console.log('Felicitaciones ' + this.clase + ', has evolucionado a Arquero Místico!');
            this.clase = 'Arquero Místico';
            this.vida = this.vida * 2;
            this.inteligencia = this.inteligencia * 1.5;
            this.fuerza = this.fuerza * 1.3;
            this.destreza = this.destreza * 2;
        }
        else {
            if (this.clase == 'Arquero Místico') {
                console.log('No puedes evolucionar mas que: ' + this.clase);
            }
            else {
                console.log('No puedes evolucionar aun');
            }
        }
    };
    return Arquero;
}(estandar_1.Estandar));
exports.Arquero = Arquero;
