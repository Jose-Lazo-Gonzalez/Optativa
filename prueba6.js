var nivel = prompt("Dame un nivel");
var nivelNum = Number(nivel); 
for (let i = 1; i <= nivelNum; i++) { 
    document.write("<h" + i + ">Encabezado nivel " + i + "</h" + i + ">")
}   