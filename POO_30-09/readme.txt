TIPS:

CLASE "automovil":
    Nacio de tener la necesidad de crear varios tipos de vehiculos, que compartian atributos y 
    metodos en comun.

Clases "auto/moto":
    Clases hijas, en donde un atributo unico (ruedas), esta seteado en base a una constante (debido a 
    que todos los autos, tienen 4 ruedas, y todas las motos 2, respectivamente).

Clase "Camion"
    Clase hija, en donde creo un metodo unico "setRuedas" y le defino a ruedas, segun lo necesite }
    (a diferencia de los otros casos, hay mas o menos ruedas, dependiendo el modelo)

Clase registroAutomotor:
    Clase para poder definir objetos de tipo Automovil(sus hijos). y metodos genericos para obtener:
    Camion/Auto/Moto, y modificarlo en consecuencia.

Tips:
    - Recuerden que "super()" dentro de una clase sirve para que puedan acceder a atributos
    o metodos de la clase padre, estando en la clase hija (la clase, no es lo mismo que un objeto).
    - "super()" te trae el constructor de la clase padre, se pone antes de los "this.atributo".
    - sintaxis "if(parametro)", checkea que el parametro pasado este INICIALIZADO.

Casos de uso del encapsulamiento:
    - Protected, lo uso en los atributos del padre (automovil), dejandolo solo accesible para él 
      y sus hijos (auto/moto/camion).
    - Los atributos "Ruedas" que indica su cantidad, en las clases hijas, son atributos privados
      (Unicos de su clase).
    - Metodos que quiero acceder desde "registroAutomotor", sin hacer una herencia de automovil, los
      declare publicos, un ejemplo: "darDeBaja()"

Recuerden que si, no definen el tipo de metodo o atributo, por defecto es "publico".
Por ultimo, recuerden que pueden hacer el codigo mas robuto, aplicando validaciones segun lo requiera.

