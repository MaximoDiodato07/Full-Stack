import {automovil} from "./automovil"
import { auto } from "./auto";
import{ moto } from "./moto";
import{ camion } from "./camion";

class registroAutomor{

    private auto:auto;
    private moto:moto;
    private camion:camion;
    
    // Pide los 3 tipos de vehiculos. se podria hacer constructores distintos para c/u
    constructor(auto:auto,moto:moto,camion:camion){
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }

    public modificarVehiculo(automovil:automovil, color?:string,rodado?:number){
        // IF (variable) asegura que este inicializada
        if(color) automovil.setColor(color);
        if(rodado) automovil.setRodado(rodado);
        return "Vehículo modificado exitosamente";
    }

    public getAuto():automovil{
        return this.auto;
    }

    public getCamion():automovil{
        return this.camion;
    }

    public getMoto():automovil{
        return this.moto;
    }


}

//--------- Variables esperadas (color, rodado, marca, modelo, vtv, estado)
const auto1 = new auto("Rojo", 14,"Mercedez Benz", 2020, true, true);

const moto1 = new moto ("Blanco", 17, "Honda CB500X", 2023, false, true);

//--------- Variables esperadas (color, rodado, marca, modelo, vtv, ruedas)
const camion1 = new camion("Ocre", 22.5, "Volvo FH16", 2022, true, true, 6);

console.log("Sin VTV")
console.log(moto1);
// Modifico una moto desde su metodo de clase.
moto1.setVtv(true)
console.log(moto1)

// Creo registro.
const registro = new registroAutomor(auto1,moto1,camion1);


// Obtengo vehiculo a cambiar.
let vehiculoModificable = registro.getCamion();

console.log(vehiculoModificable); // Muestro estado incializado
// Modifico un camion, le cambio el color y el rodado.
registro.modificarVehiculo(vehiculoModificable, "Azul", 21)

// de esta manera, podria modificar el color o el rodado de cualquier vehiculo.
console.log("Vehiculos registrados:")
console.log(registro);