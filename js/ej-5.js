class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGeneracion() {
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      document.write("<p>Generacion: Silent Generation</p>");
      document.write("<p>Rasgo caracteristico: Austeridad</p>");
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      document.write("<p>Generacion: Baby Boom</p>");
      document.write("<p>Rasgo caracteristico: Ambicion</p>");
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      document.write("<p>Generacion X</p>");
      document.write("<p>Rasgo caracteristico: Obsesion por el exito</p>");
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      document.write("<p>Generacion Y</p>");
      document.write("<p>Rasgo caracteristico: Frustacion</p>");
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      document.write("<p>Generacion Z</p>");
      document.write("<p>Rasgo caracteristico: Irreverencia</p>");
    } else {
      document.write("<p>Generacion no declarada</p>");
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`<p>${this.nombre} es mayor de edad</p>`);
    } else {
      document.write(`<p>${this.nombre} no es mayor de edad</p>`);
    }
    document.write('<hr>')
  }
  mostrarDatos() {
    document.write(`<p>Nombre: ${this.nombre}</p>`)
        document.write(`<p>Edad: ${this.edad}</p>`)
        document.write(`<p>DNI: ${this.dni}</p>`)
        document.write(`<p>Sexo: ${this.sexo}</p>`)
        document.write(`<p>Peso: ${this.peso} kg</p>`)
        document.write(`<p>Altura: ${this.altura} mts</p>`)
        document.write(`<p>Año de Nacimiento: ${this.añoNacimiento}</p>`);
  }
  generaDni() {
    this.dnialeatorio = Math.floor(
      Math.random() * (10000000 - 99999999) + 99999999
    );
    document.write(`<p>Dni Aleatorio: ${this.dnialeatorio}</p>`);
  }
  get mostrarNombre (){
    return this.nombre
  }
  get mostrarEdad (){
    return this.edad
  }
  get mostrarDNI (){
    return this.dni
  }
  get mostrarSexo (){
    return this.sexo
  }
  get mostrarPeso (){
    return this.peso
  }
  get mostrarAltura (){
    return this.altura
  }
  get mostrarAñoNacimiento (){
    return this.añoNacimiento
  }
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarEdad(nuevaEdad) {
    this.edad = nuevaEdad;
  }
  set modificarDNI(nuevoDNI) {
    this.dni = nuevoDNI;
  }
  set modificarSexo(nuevoSexo) {
    this.sexo = nuevoSexo;
  }
  set modificarPeso(nuevoPeso) {
    this.peso = nuevoPeso;
  }
  set modificarAltura(nuevaAltura) {
    this.altura = nuevaAltura;
  }
  set modificarAñoNacimiento(nuevoAñoNacimiento) {
    this.añoNacimiento = nuevoAñoNacimiento;
  }

}

let persona1 = new Persona("Tomas", 15, 98765432, "H", 67, 1.81, 2007);
let persona2 = new Persona("Francisco", 23, 12345678, "H", 80, 1.90, 1990);
let persona3 = new Persona("Monica", 50, 22334455, "M", 70, 1.60, 1971);

persona1.mostrarDatos();
persona1.generaDni();
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()

persona2.mostrarDatos();
persona2.generaDni();
persona2.mostrarGeneracion()
persona2.esMayorDeEdad()

persona3.mostrarDatos();
persona3.generaDni();
persona3.mostrarGeneracion()
persona3.esMayorDeEdad()


// class Persona {
//     constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.sexo = sexo;
//       this.peso = peso;
//       this.altura = altura;
//       this.añoNacimiento = añoNacimiento;
//     }
//     mostrarGeneracion() {
//       if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
//         document.write("<p>Generacion: Silent Generation</p>");
//         document.write("<p>Rasgo caracteristico: Austeridad</p>");
//       } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
//         document.write("<p>Generacion: Baby Boom</p>");
//         document.write("<p>Rasgo caracteristico: Ambicion</p>");
//       } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
//         document.write("<p>Generacion X</p>");
//         document.write("<p>Rasgo caracteristico: Obsesion por el exito</p>");
//       } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
//         document.write("<p>Generacion Y</p>");
//         document.write("<p>Rasgo caracteristico: Frustacion</p>");
//       } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
//         document.write("<p>Generacion Z</p>");
//         document.write("<p>Rasgo caracteristico: Irreverencia</p>");
//       } else {
//         document.write("<p>Generacion no declarada</p>");
//       }
//     }
//     esMayorDeEdad() {
//       if (this.edad >= 18) {
//         document.write(`<p>${this.nombre} es mayor de edad</p>`);
//       } else {
//         document.write(`<p>${this.nombre} no es mayor de edad</p>`);
//       }
//       document.write('<hr>')
//     }
//     mostrarDatos() {
//       document.write(`<p>Nombre: ${this.nombre}</p>`)
//           document.write(`<p>Edad: ${this.edad}</p>`)
//           document.write(`<p>DNI: ${this.dni}</p>`)
//           document.write(`<p>Sexo: ${this.sexo}</p>`)
//           document.write(`<p>Peso: ${this.peso} kg</p>`)
//           document.write(`<p>Altura: ${this.altura} mts</p>`)
//           document.write(`<p>Año de Nacimiento: ${this.añoNacimiento}</p>`);
//     }
//     generaDni() {
//       this.dnialeatorio = Math.floor(
//         Math.random() * (10000000 - 99999999) + 99999999
//       );
//       document.write(`<p>Dni Aleatorio:${this.dnialeatorio}</p>`);
//     }
//   }
  
//   let persona1 = new Persona("Pedro", 19, 44476172, "H", 70, 2, 1935);

//   persona1.mostrarDatos();
//   persona1.generaDni();
//   persona1.mostrarGeneracion()
//   persona1.esMayorDeEdad()
