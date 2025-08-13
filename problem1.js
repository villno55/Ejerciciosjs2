/*Escribir un script que diga si un número es par o es impar. Recordemos que un número es par
si al dividirlo por 2 da como resto 0.*/

// Verificar si un número es par o impar

const prompt = require('prompt-sync')();  

let numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {
  console.log("Eso no es un número válido.");
} else if (numero % 2 === 0) {
  console.log(numero + " es par.");
} else {
  console.log(numero + " es impar.");
}
