import { Estandar } from './estandar';

export class Mago extends Estandar {
    constructor() {
        super(); // de aquí solo mantengo el nivel
        this.nombre = this.setNombre();
        this.vida = 120; // Menos vida que el guerrero
        this.inteligencia = 12; // Mayor inteligencia que el arquero
        this.fuerza = 3;
        this.destreza = 6;
        this.clase = this.constructor.name;
    }

    // Ataque básico
    public ataqueBasico(): void {
        let daño = Math.round(this.inteligencia * 1.2); // Daño basado en inteligencia
        console.log('Usaste: Rayo Mágico, Causaste ' + daño + ' Puntos de daño');
    }

    // Ataque secundario
    public ataqueSecundario(): void {
        let daño = Math.round(this.inteligencia * 1.5); // Mayor daño en ataque secundario
        console.log('Usaste: Bola de Fuego, Causaste ' + daño + ' Puntos de daño');
    }

    // Habilidad ultimate
    public ultimate(): void {
        let daño = Math.round(this.inteligencia * 2.5); // Daño significativo en ultimate
        console.log('Usaste: Tormenta de Magia, Causaste ' + daño + ' Puntos de daño');
    }

    evolucionar(): void {
        if (this.inteligencia > 15 && this.clase != 'Arcanista') {
            console.log('Felicitaciones ' + this.clase + ', has evolucionado a Arcanista!');
            this.clase = 'Arcanista'; 
            this.inteligencia = this.inteligencia * 2; 
            this.fuerza = this.fuerza * 0.8; 
            this.destreza = this.destreza * 1.5; 
        }else{
            if(this.clase == 'Arcanista'){
                console.log('No puedes evolucionar mas que: ' + this.clase);
            }else{
                console.log('No puedes evolucionar aun');
            }
        }
    }
}
