import { auto } from "./auto";
import{ moto } from "./moto";
import{ camion } from "./camion";

class registroAutomor{

    private auto:auto;
    private moto:moto;
    private camion:camion;
    
    // Pide los 3 tipos de vehiculos.
    constructor(auto:auto,moto:moto,camion:camion){
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }

}

//--------- Variables esperadas (color, rodado, marca, modelo, vtv, estado)
const auto1 = new auto("Rojo",14,"Mercedez Benz",2020,true);

const moto1 = new moto ("Blanco",19, "Motomel Skua",2013, true);

//--------- Variables esperadas (color, rodado, marca, modelo, vtv, estado, ruedas)
const camion1 = new camion("Ocre", 295, "fiat 1114", 1986, true, true, 8);

console.log(camion1)
// Modifico un camion
camion1.setColor("Gris")
camion1.setRuedas(12)
console.log(camion1)
const registro = new registroAutomor(auto1,moto1,camion1);


console.log(registro);