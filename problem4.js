/*Pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor
medio de los tres. Recuerda que la media de tres números se calcula sumando los tres y
dividiendo entre 3.*/

let num1 = parseInt(prompt("Ingresa el 1 número:"));
let num2 = parseInt(prompt("Ingresa el 2 número:"));
let num3 = parseInt(prompt("Ingresa el 3 número:"));
let media = (num1 + num2 + num3) / 3;
console.log("La media es: " + media);