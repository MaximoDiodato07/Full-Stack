import {Estandar} from './estandar';

export class Arquero extends Estandar{
    // "this.constructor.name" esto me devuelve el nombre de la clase
    constructor(){
        super(); // de aqui solo mantengo el nivel
        this.nombre = this.setNombre();
        this.vida = 150;
        this.inteligencia = 8;
        this.fuerza = 5;
        this.destreza = 10;
        this.clase = this.constructor.name;
    }
   
    // Ataque básico
    ataqueBasico(): void {
        let daño =  Math.round(this.destreza * 1.3) // sin decimales
        console.log('Usaste: Tiro Basico, Causaste ' + daño +' Puntos de daño')
    }

    // Ataque secundario
    public ataqueSecundario(): void {
        let daño = Math.round(this.destreza * 1.5); 
        console.log('Usaste: Disparo Rápido, Causaste ' + daño + ' Puntos de daño'); 
    }

    // Habilidad ultimate
    public ultimate(): void {
        let daño = Math.round((this.destreza * 2) + (this.inteligencia * 0.5)); 
        console.log('Usaste: Tiro Certero, Causaste ' + daño + ' Puntos de daño'); 
    }

    evolucionar(): void {
        if(this.destreza > 15 && this.inteligencia > 10 && this.clase != 'Arquero Místico'){
            console.log('Felicitaciones ' + this.clase +', has evolucionado a Arquero Místico!');
            this.clase = 'Arquero Místico'; 
            this.vida = this.vida * 2;
            this.inteligencia = this.inteligencia * 1.5;
            this.fuerza = this.fuerza * 1.3; 
            this.destreza = this.destreza * 2;
        }
        else{
            if(this.clase == 'Arquero Místico'){
                console.log('No puedes evolucionar mas que: ' + this.clase);
            }else{
                console.log('No puedes evolucionar aun');
            }
        }
    }

}