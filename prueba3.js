var numero1 = prompt("dame un primer numero") 
var numero2 = prompt("dame un segundo numero")
if (numero1==0 || numero2 ==0){
    document.write("No se puede  0")
}
else{document.write("suma " ,numero1 + numero2 + "</br>")
document.write("resta ", numero1- numero2 + "</br>")
document.write("multiplicacion ", numero1*numero2 + "</br>")   
document.write("division ", numero1 / numero2 + "</br>") 
}
