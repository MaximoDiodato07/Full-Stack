import { General } from '../Interfaces/General';
import * as readlineSync from 'readline-sync';

export abstract class Estandar implements General{
    public read = readlineSync;


    public nombre:string;
    public nivel:number;
    public vida:number;
    public inteligencia:number;
    public fuerza:number;
    public destreza:number;
    public clase:string;

    // Inicializo cosas basicas.
    constructor(){
            this.nombre = ''; 
            this.nivel = 1;
            this.vida = 1;         
            this.inteligencia = 1;  
            this.fuerza = 1;        
            this.destreza = 1;    
            this.clase = this.constructor.name;
    }
    
    public setNombre():string{
        let nombrePersonaje = this.read.question('Ingrese un nombre para su '+this.clase+':');
        this.nombre = nombrePersonaje;
        return this.nombre;
    }

    // Métodos vacíos
    ataqueBasico(): void {}

    ataqueSecundario(): void {}

    ultimate(): void {}

    evolucionar(): void {}

    // Métodos generales.
    // Tirar cajita
    tirarCajita(): void {
        const bonusVida = Math.floor(Math.random() * 21); // Bonus entre 0 y 20
        const bonusInteligencia = Math.floor(Math.random() * 6); // Bonus entre 0 y 5
        const bonusFuerza = Math.floor(Math.random() * 6); // Bonus entre 0 y 5
        const bonusDestreza = Math.floor(Math.random() * 11); // Bonus entre 0 y 10

        // Sumar los bonus a las estadísticas actuales
        this.vida += bonusVida;
        this.inteligencia += bonusInteligencia;
        this.fuerza += bonusFuerza;
        this.destreza += bonusDestreza;

        console.log('Tu personaje ha obtenido un bonus de: ');
        console.log(bonusVida+' puntos de vida');
        console.log(bonusInteligencia+' puntos de inteligencia');
        console.log(bonusFuerza+' puntos de fuerza');
        console.log(bonusDestreza+' puntos de destreza');
    }

    // Método para mostrar estadísticas
    public mostrarEstadisticas(): void {
        console.log('Estadísticas de '+ this.nombre+':');
        console.log('------------------------')
        console.log('- Clase: '+this.clase);
        console.log('- Nivel: '+ this.nivel);
        console.log('- Vida: '+ this.vida);
        console.log('- Inteligencia: '+ this.inteligencia);
        console.log('- Fuerza: '+ this.fuerza);
        console.log('- Destreza: '+ this.destreza);
    }

}
    
