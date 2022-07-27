class Rectangulos{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    perimetro(){
        document.write(`<p>El perimetro de este rectangulo es: (2 * ${this.alto}) + (2 * ${this.ancho}) = ${(2*this.alto)+(2*this.ancho)}</p>`)
    }
    area(){
        document.write(`<p>El perimetro de este rectangulo es: (${this.alto} * ${this.ancho}) = ${this.alto*this.ancho}</p>`)
    }
    mostrarDatos(){
        document.write(`<ul>
        <li>Alto del triangulo: ${this.alto}</li>
        <li>Ancho del triangulo: ${this.ancho}</li>
        </ul>`)
    }
}

let rectanguloAl20An30 = new Rectangulos (20,30)
rectanguloAl20An30.mostrarDatos()
rectanguloAl20An30.perimetro()
rectanguloAl20An30.area()

let rectanguloAl50An73 = new Rectangulos (50,73)
rectanguloAl50An73.mostrarDatos()
rectanguloAl50An73.perimetro()
rectanguloAl50An73.area()

