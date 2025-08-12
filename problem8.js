/*Una torta de papa lleva 200 gramos de papa por persona. Por cada kilo de papa se necesitan 5
huevos y 300 gramos de cebolla. Escribe un script que dado el número de personas calcule las
cantidades de ingredientes necesarias */ 

let personas = parseInt(prompt("Ingrese el número de personas:"));
let PapaGramos = personas * 200;
let kiPapa = PapaGramos / 1000;
let huevos = kiPapa * 5;
let gramosCebolla = kiPapa * 300;
console.log("Papa: " + PapaGramos + " gramos");
console.log("Huevos: " + Math.ceil(huevos));
console.log("Cebolla: " + gramosCebolla + " gramos");