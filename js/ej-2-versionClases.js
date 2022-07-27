class Cuenta {
  constructor(propietario, saldoInicial) {
    this.propietario = propietario;
    this.saldoInicial = saldoInicial;
  }
  ingresar(agregarDinero) {
    document.write(`<p>Titular de la cuenta: ${this.propietario}</p>`);
    document.write(`<p>Saldo Inicial: ${this.saldoInicial}</p>`);
    document.write(`<p>Usted agrego $${agregar} a su cuenta</p>`);
  }
  extraer(extraerDinero) {
    if (extraer > agregar) {
      alert("No puede extraer mas dinero de lo que usted posee en su cuenta");
      document.write("No se efectuo la extraccion");
    } else {
      document.write(`<p>Usted retiro $${extraer} de su cuenta</p>`);
    }
  }
  informacion() {
    if (agregar >= extraer) {
      document.write(`<p>Estado de la cuenta: $${agregar - extraer}</p>`);
    } else {
      document.write(`<p>Estado de la cuenta: $${agregar}</p>`);
    }
  }
}

let cuentaAlex = new Cuenta("Alex", 0);

alert(`Saldo inicial: $0`);
let agregar = parseInt(prompt("Agregue la cantidad de dinero que desee"));
let extraer = parseInt(
  prompt(`Retire la cantidad de dinero que desee (Saldo actual: $${agregar})`)
);

cuentaAlex.ingresar(agregar);
cuentaAlex.extraer(extraer);
cuentaAlex.informacion();
