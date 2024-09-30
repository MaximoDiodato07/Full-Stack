import { automovil } from "./automovil";

const ruedasAuto = 4;

export class auto extends automovil{

private ruedas:number;
    
constructor(color: string,rodado:number,marca:string, modelo:number,vtv:boolean,estado:boolean) {
    super(color, rodado, marca, modelo, vtv, estado);
    this.ruedas = ruedasAuto; // inicializo siempre en 4
}


}