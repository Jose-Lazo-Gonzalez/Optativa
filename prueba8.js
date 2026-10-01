var banca = 30
var dineroapuesta = 0
var apuesta 
var respuesta
while (apuesta !=0 && banca <120 && banca>0){
    dineroapuesta = prompt("cuanto dinero quieres apostar")
    apuesta = prompt ("que numero quieres apostar")
    respuesta = Math.random(1,6)
    if (apuesta==respuesta){
        alert("has ganado")
        banca = banca + (dineroapuesta + 10)
    }
    else{
        alert("has perdido")
        banca= banca-dineroapuesta
    }
    
}