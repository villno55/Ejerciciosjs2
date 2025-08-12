/* Cambio de unidades. en este ejercicio se solicita convertir a segundos una medida de tiempo
dada en horas y minutos. Recuerda una hora son 60 minutos y cada minuto son 60 segundos.*/

let h = parseInt(prompt("Ingrese la cantidad de horas:"));
let min = parseInt(prompt("Ingrese la cantidad de minutos:"));
let totalSegundos = (h * 3600) + (min * 60);
console.log("EL Tiempo total en segundos es: " + totalSegundos);