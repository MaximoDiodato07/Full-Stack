export class automovil {
    // para acceder desde los hijos, no son privadas
    protected color:string;
    protected rodado:number;
    protected marca:string;
    protected modelo:number;
    protected vtv:boolean;
    protected estado:boolean;

    constructor(color: string,rodado:number,marca:string, modelo:number,vtv:boolean,estado:boolean) {
        this.color = color;
        this.rodado = rodado;
        this.marca = marca;
        this.modelo = modelo;
        this.vtv = vtv;
        this.estado = estado;
    }

    // Metodos get
    getColor():string{
        return this.color;
    }
    
    getRodado():number{
        return this.rodado;
    }
    
    getMarca():string{
        return this.marca;
    }
    
    getModelo():number{
        return this.modelo;
    }
    
    getVtv():boolean{
        return this.vtv;
    }

    getEstado():boolean{
        return this.estado;
    }
    
    // Metodos set
    setColor(color:string):void{
        this.color = color;
    }
    
    setRodado(rodado:number):void{
        this.rodado = rodado;
    }

    setVtv(vtv:boolean):void{
        this.vtv = vtv;
    }

    setEstado(estado:boolean):void{
        this.estado = estado;
    }

    //Los seteos de Marca, y Modelo no existen porque osn cosas que no se cambiarian


    // Metodos Generales.
    // dar de baja desde registro Automotor
    public darDeBaja(){
        this.setEstado(false)
        return "Vehículo dado de baja";
    }

    public darDeAlta(){
        this.setEstado(true)
        return "Vehículo dado de alta";
    }

}