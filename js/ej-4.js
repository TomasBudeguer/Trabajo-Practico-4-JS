class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimirDatos() {
    document.write(`<ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: $${this.precio}</li>
        </ul>`);
  }
  get mostrarCodigo(){
    return this.codigo
  }
  get mostrarNombre(){
    return this.nombre
  }
  get mostrarPrecio(){
    return this.precio
  }
  set modificarCodigo(nuevoCodigo){
    this.codigo = nuevoCodigo
  }
  set modificarNombre(nuevoNombre){
    this.nombre = nuevoNombre
  }
  set modificarPrecio(nuevoPrecio){
    this.precio = nuevoPrecio
  }
}

let producto1 = new Producto(194428, "Coca-Cola", 230);
let producto2 = new Producto(123456, "Oreo", 170);
let producto3 = new Producto(987123, "Papas Fritas Lays", 230);

let productos = [producto1, producto2, producto3];
console.log(productos);

productos[0].imprimirDatos();
productos[1].imprimirDatos();
productos[2].imprimirDatos();


