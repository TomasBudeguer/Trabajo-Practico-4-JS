class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.listaProductos = []
  }
  imprimirDatos() {
    document.write(`<ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: $${this.precio}</li>
        </ul>`);
  }
  agregarProducto(){
    this.listaProductos.push(this.codigo, this.nombre, this.precio)
    console.log(this.listaProductos)
  }
  mostrarArray(){
    document.write(`${this.listaProductos} <hr>`)
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

producto1.imprimirDatos();
producto2.imprimirDatos();
producto3.imprimirDatos();

producto1.agregarProducto()
producto2.agregarProducto()
producto3.agregarProducto()


producto1.mostrarArray()
producto2.mostrarArray()
producto3.mostrarArray()


