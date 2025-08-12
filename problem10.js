/* Escriba un script que dado un número nos devuelva true si es un número par y false si es un
número impar. No usar condiconales.*/ 

let numero = parseInt(prompt("Ingrese un número:"));
let esPar = numero % 2 === 0;
console.log(esPar);
