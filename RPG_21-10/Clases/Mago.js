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
exports.Mago = void 0;
var estandar_1 = require("./estandar");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago() {
        var _this = _super.call(this) || this; // de aquí solo mantengo el nivel
        _this.nombre = _this.setNombre();
        _this.vida = 120; // Menos vida que el guerrero
        _this.inteligencia = 12; // Mayor inteligencia que el arquero
        _this.fuerza = 3;
        _this.destreza = 6;
        _this.clase = _this.constructor.name;
        return _this;
    }
    // Ataque básico
    Mago.prototype.ataqueBasico = function () {
        var daño = Math.round(this.inteligencia * 1.2); // Daño basado en inteligencia
        console.log('Usaste: Rayo Mágico, Causaste ' + daño + ' Puntos de daño');
    };
    // Ataque secundario
    Mago.prototype.ataqueSecundario = function () {
        var daño = Math.round(this.inteligencia * 1.5); // Mayor daño en ataque secundario
        console.log('Usaste: Bola de Fuego, Causaste ' + daño + ' Puntos de daño');
    };
    // Habilidad ultimate
    Mago.prototype.ultimate = function () {
        var daño = Math.round(this.inteligencia * 2.5); // Daño significativo en ultimate
        console.log('Usaste: Tormenta de Magia, Causaste ' + daño + ' Puntos de daño');
    };
    Mago.prototype.evolucionar = function () {
        if (this.inteligencia > 15 && this.clase != 'Arcanista') {
            console.log('Felicitaciones ' + this.clase + ', has evolucionado a Arcanista!');
            this.clase = 'Arcanista';
            this.inteligencia = this.inteligencia * 2;
            this.fuerza = this.fuerza * 0.8;
            this.destreza = this.destreza * 1.5;
        }
        else {
            if (this.clase == 'Arcanista') {
                console.log('No puedes evolucionar mas que: ' + this.clase);
            }
            else {
                console.log('No puedes evolucionar aun');
            }
        }
    };
    return Mago;
}(estandar_1.Estandar));
exports.Mago = Mago;
