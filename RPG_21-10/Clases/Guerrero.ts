import { Estandar } from './estandar';

export class Guerrero extends Estandar {
    constructor() {
        super(); // de aquí solo mantengo el nivel
        this.nombre = this.setNombre();
        this.vida = 200; 
        this.inteligencia = 5;
        this.fuerza = 10; 
        this.destreza = 7;
        this.clase = this.constructor.name;
    }

    // Ataque básico
    public ataqueBasico(): void {
        let daño = Math.round(this.fuerza * 1.5); 
        console.log('Usaste: Golpe Básico, Causaste ' + daño + ' Puntos de daño');
    }

    // Ataque secundario
    public ataqueSecundario(): void {
        let daño = Math.round(this.fuerza * 2); 
        console.log('Usaste: Carga, Causaste ' + daño + ' Puntos de daño');
    }

    // Habilidad ultimate
    public ultimate(): void {
        let daño = Math.round(this.fuerza * 3); 
        console.log('Usaste: Furia, Causaste ' + daño + ' Puntos de daño');
    }

    evolucionar(): void {
        if (this.vida > 150 && this.fuerza > 15 && this.clase != 'Berserk') {
            console.log('Felicitaciones ' + this.clase + ', has evolucionado a Berserk!');
            this.clase = 'Berserk'; 
            this.vida = this.vida * 1.5; 
            this.fuerza = this.fuerza * 2; 
            this.destreza = this.destreza * 1.2; 
        }
        else{
            if(this.clase == 'Berserk'){
                console.log('No puedes evolucionar mas que: ' + this.clase);
            }else{
                console.log('No puedes evolucionar aun');
            }
        }
    }
}
