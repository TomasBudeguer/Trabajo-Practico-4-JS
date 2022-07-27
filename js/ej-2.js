let cuenta = {
  propietario: "Alex",
  saldoInicial: 0,
  ingresar (agregarDinero) {
    document.write(`<p>Usted agrego $${agregar} a su cuenta</p>`);
  },
  extraer (extraerDinero) {
    if (extraer > agregar) {
      alert("No puede extraer mas dinero de lo que usted posee en su cuenta");
      document.write("No se efectuo la extraccion");
    } else {
      document.write(`<p>Usted retiro $${extraer} de su cuenta</p>`);
    }
  },
  informacion () {
    if (agregar >= extraer) {
      document.write(`<p>Estado de la cuenta: $${agregar - extraer}</p>`);
    } else {
      document.write(`<p>Estado de la cuenta: $${agregar}</p>`);
    }
  },
};

alert(`Saldo inicial: $0`)
let agregar = parseInt(prompt("Agregue la cantidad de dinero que desee"));
let extraer = parseInt(
  prompt(`Retire la cantidad de dinero que desee (Saldo actual: $${agregar})`)
);

document.write(`<p>Titular de la cuenta: ${cuenta.propietario}</p>`);
document.write(`<p>Saldo Inicial: ${cuenta.saldoInicial}</p>`);
cuenta.ingresar(agregar);
cuenta.extraer(extraer);
cuenta.informacion();
