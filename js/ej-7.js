class Agenda {
  constructor(nombre, numTelefono) {
    this.nombre = nombre;
    this.numTelefono = numTelefono;
    this.contacto = [];
  }
  añadirContacto() {
    if (contador == 10) {
      document.write(
        `<p>Se llego al maximo de contactos, no se puede añadir mas</p>`
      );
    } else {
      this.contacto.push(this.nombre, this.numTelefono);
      document.write(`<p>Contacto: ${this.contacto}</p>`);
      contador++;
    }
  }
}

let contador = 0;

let tomas = new Agenda("Tomas ", 3812345678);
let jose = new Agenda("Jose ", 3815560024);
let fran = new Agenda("Fran ", 3815560024);
let belen = new Agenda("Belen ", 3815560024);
let nico = new Agenda("nico ", 3815560024);
let jaime = new Agenda("jaime ", 3815560024);
let facundo = new Agenda("facundo ", 3815560024);
let ale = new Agenda("ale ", 3815560024);
let marcos = new Agenda("marcos ", 3815560024);
let mauricio = new Agenda("mauricio ", 3815560024);
let lautaro = new Agenda("lautaro ", 3815560024);

tomas.añadirContacto();
jose.añadirContacto();
fran.añadirContacto();
belen.añadirContacto();
nico.añadirContacto();
jaime.añadirContacto();
facundo.añadirContacto();
ale.añadirContacto();
marcos.añadirContacto();
mauricio.añadirContacto();
lautaro.añadirContacto();
