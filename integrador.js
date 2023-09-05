alert("Bienvenidos a la pollería Corralito");
var entrada=parseInt(prompt("Ingrese el precio de la entrada:"))
var segundo=parseInt(prompt("Ingrese el precio del segundo:"))
var postre=parseInt(prompt("Ingrese el precio del poste:"))
var total=entrada+segundo+postre
var igv=(total*18/100)+total
console.log("El precio de la entrada es", entrada)
console.log("El precio del segundo es", segundo)
console.log("El precio del postre", postre)
console.log("La cuenta es de", total)
console.log("El cuanta total con IGV es", igv)
  