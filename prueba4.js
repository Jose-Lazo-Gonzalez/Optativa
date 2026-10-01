var practica = Number( prompt("dame el numero de nota de practicas"))
var examen = Number(prompt(" dame la nota media del examen"))
var actitud = Number(prompt ("dame la nota media de la actitud"))
var notafinal = practica + examen+ actitud
notafinal= notafinal/3
if (notafinal <5){
    document.write("estas suspenso")
}
else{
    document.write("estas aprobado")
}