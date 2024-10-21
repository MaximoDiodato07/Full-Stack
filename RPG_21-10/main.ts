import * as readlineSync from 'readline-sync';
import { Arquero } from './Clases/Arquero'; 
import { Guerrero } from './Clases/Guerrero';
import { Mago } from './Clases/Mago';

// Inicializo el programa
main();

function main() {
    let personaje: any; // para poder tomar cualquier tipo de personaje

    // Menú para seleccionar la clase
    console.log('Selecciona una clase:');
    console.log('1. Arquero');
    console.log('2. Guerrero');
    console.log('3. Mago');

    let seleccionClase:number;

    do {
       seleccionClase = parseInt(readlineSync.question('Ingrese el numero de la clase que desea: '));
    }while(seleccionClase<1 || seleccionClase>3); // mientras que niguno de esos valores, este incluido en la cadena de
   

    switch (seleccionClase) {
        case 1:
            personaje = new Arquero();
            break;
        case 2:
            personaje = new Guerrero();
            break;
        case 3:
            personaje = new Mago();
            break;
        default:
            console.log('Selección no válida.');
            return;
    }

    console.log('Has elegido: ' + personaje.clase + ', Mostrando estadisticas: ');
    console.log(personaje.mostrarEstadisticas()); // Imprimo todo el objeto

    // Menú para atacar
    let continuar = true;

    while (continuar) {
        console.log('¿Qué deseas hacer?');
        console.log('1. Ataque Basico');
        console.log('2. Ataque Secundario');
        console.log('3. Ataque Definitivo');
        console.log('4. Tirar Cajita'); // Nueva opción
        console.log('5. Mostrar Estadisticas'); // Nueva opción
        console.log('6. Salir'); // Opción de salir
    
        let seleccionAtaque: number;
        do {
            seleccionAtaque = parseInt(readlineSync.question('Ingrese el numero de la accion que desea: '));
        } while (seleccionAtaque < 1 || seleccionAtaque > 6); // Asegúrate de que la selección esté entre 1 y 5
    
        switch (seleccionAtaque) {
            case 1:
                personaje.ataqueBasico();
                break;
            case 2:
                personaje.ataqueSecundario();
                break;
            case 3:
                personaje.ultimate();
                break;
            case 4:
                personaje.tirarCajita(); // Llamar al método para tirar cajita
                break;
            case 5: //   Mostrar estadisticas
                personaje.mostrarEstadisticas();
                break;
            case 6:
                continuar = false;
                console.log('Saliendo del juego...');
                continue; // Salir del bucle
            default:
                console.log('Seleccion no valida.'); // Esta línea puede ser redundante debido a la validación previa
                break; // Simplemente romper el ciclo
        }
    

        // Verifico si el personaje puede evolucionar
        console.log();
        personaje.evolucionar();
        console.log();
    }
}

