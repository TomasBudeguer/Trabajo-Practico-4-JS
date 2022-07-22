let auto = {
    color: 'Rojo',
    marca: 'Fiat',
    modelo: 'Mobi',
    encender: ()=>{
        document.write('<p>Encendiendo el auto... el vehiculo está encendido</p>')
    },
    apagar: ()=>{
        document.write('<p>Apagadno el auto...el vehiculo está apagado</p>')
    }
}
document.write(`<p>El color del auto es: ${auto.color}</p>`)
document.write(`<p>La marca del auto es: ${auto.marca}</p>`)
document.write(`<p>El modelo del auto es: ${auto.modelo}</p>`)
auto.encender()
auto.apagar()