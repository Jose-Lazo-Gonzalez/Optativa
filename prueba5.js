var nombreOrdenador = prompt("Introduce la marca del ordenador:");
var modeloOrdenador = prompt("Introduce el modelo del ordenador:");
var precioOrdenador = 1000
if (nombreOrdenador == "MSI" && modeloOrdenador == "PRESTIGE") {
    PrecioFinal = precioOrdenador * 0.95
}
else if (nombreOrdenador == "HP" && modeloOrdenador == "PAVILION") {
    PrecioFinal = precioOrdenador * 0.90
}
else {
    document.write("No hay descuento para el ordenador")
}
document.write("El precio del ordenador es: " + PrecioFinal)

