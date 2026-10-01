var nombrescadenas =prompt("dame una lista de nombres separados con coma")
var listanombres=nombrescadenas.split(",")
for (var i=0; i<listanombres.length; i++){
    document.write(listanombres[i] +" holaaa </br>")
}
document.write("Hay un total de "+listanombres.length+" personas </br>")
document.write("la primera posicion es "+listanombres[0]+"</br>")
document.write("la ultima posicion es "+listanombres[listanombres.length-1]+"</br>")
document.write("la lista en orden alfabetico normal es "+listanombres.sort()+"</br>")
document.write("la lista en orden alfabetico al reves es "+listanombres.reverse()+"</br>")