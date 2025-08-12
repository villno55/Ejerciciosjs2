/*Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro:
entiendes las variables. Escribir un programa que intercambie el valor de dos variables. Al final
la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. No
vale usar arrays ni asignación múltiple */ 

let i = prompt("Ingrese el valor de la variable i:");
let j = prompt("Ingrese el valor de la variable j:");
let temp = i;
i = j;
j = temp;
console.log("Nuevo valor de A: " + i);
console.log("Nuevo valor de B: " + j);