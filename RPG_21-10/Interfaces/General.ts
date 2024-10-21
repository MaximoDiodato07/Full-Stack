export interface General{
        // Estadisticas
        nombre:string;
        nivel:number;
        vida:number;
        inteligencia:number;
        fuerza:number;
        destreza:number;
        clase:string;
        
        // Movimientos
        ataqueBasico():void;
        ataqueSecundario():void;
        ultimate():void;
        evolucionar():void;
}