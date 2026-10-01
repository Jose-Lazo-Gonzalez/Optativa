
var contador =0
var acerto = false
while (contador<3 && acerto == false){
    var pintor = prompt("Dime quien pinto las meninas");
    if(pintor=="velazquez"){
        acerto=true
    }
    contador++
}
if (acerto==true){
    document.write("Enhorabuena has acertado")
}
else{
    document.write("Lo siento, has fallado")
}
