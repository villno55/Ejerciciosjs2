/*En este script debe pedir al usuario un número de dos dígitos y debe devolver el número de
unidades y de decenas, o sea, cada dígito del número. Usa solo operaciones aritméticas.
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto
es el número de unidades*/

let numero = parseInt(prompt("Ingresa un número de dos dígitos:"));
let decenas = Math.floor(numero / 10);
let unidades = numero % 10;
console.log("Decenas: " + decenas);
console.log("Unidades: " + unidades);