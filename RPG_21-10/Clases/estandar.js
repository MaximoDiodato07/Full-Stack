"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estandar = void 0;
var readlineSync = require("readline-sync");
var Estandar = /** @class */ (function () {
    // Inicializo cosas basicas.
    function Estandar() {
        this.read = readlineSync;
        this.nombre = '';
        this.nivel = 1;
        this.vida = 1;
        this.inteligencia = 1;
        this.fuerza = 1;
        this.destreza = 1;
        this.clase = this.constructor.name;
    }
    Estandar.prototype.setNombre = function () {
        var nombrePersonaje = this.read.question('Ingrese un nombre para su ' + this.clase + ':');
        this.nombre = nombrePersonaje;
        return this.nombre;
    };
    // Métodos vacíos
    Estandar.prototype.ataqueBasico = function () { };
    Estandar.prototype.ataqueSecundario = function () { };
    Estandar.prototype.ultimate = function () { };
    Estandar.prototype.evolucionar = function () { };
    // Métodos generales.
    // Tirar cajita
    Estandar.prototype.tirarCajita = function () {
        var bonusVida = Math.floor(Math.random() * 21); // Bonus entre 0 y 20
        var bonusInteligencia = Math.floor(Math.random() * 6); // Bonus entre 0 y 5
        var bonusFuerza = Math.floor(Math.random() * 6); // Bonus entre 0 y 5
        var bonusDestreza = Math.floor(Math.random() * 11); // Bonus entre 0 y 10
        // Sumar los bonus a las estadísticas actuales
        this.vida += bonusVida;
        this.inteligencia += bonusInteligencia;
        this.fuerza += bonusFuerza;
        this.destreza += bonusDestreza;
        console.log('Tu personaje ha obtenido un bonus de: ');
        console.log(bonusVida + ' puntos de vida');
        console.log(bonusInteligencia + ' puntos de inteligencia');
        console.log(bonusFuerza + ' puntos de fuerza');
        console.log(bonusDestreza + ' puntos de destreza');
    };
    // Método para mostrar estadísticas
    Estandar.prototype.mostrarEstadisticas = function () {
        console.log('Estadísticas de ' + this.nombre + ':');
        console.log('------------------------');
        console.log('- Clase: ' + this.clase);
        console.log('- Nivel: ' + this.nivel);
        console.log('- Vida: ' + this.vida);
        console.log('- Inteligencia: ' + this.inteligencia);
        console.log('- Fuerza: ' + this.fuerza);
        console.log('- Destreza: ' + this.destreza);
    };
    return Estandar;
}());
exports.Estandar = Estandar;
