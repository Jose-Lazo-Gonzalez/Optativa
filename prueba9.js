var nombrescadenas =prompt("dame una lista de nombres separados con coma")
var listanombres=nombrescadenas.split(",")
for (var i=0; i<listanombres.length; i++){
    document.write(listanombres[i] +" holaaa </br>")
}