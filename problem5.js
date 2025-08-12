/* Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos por su
carro y el número de litros consumidos . El script debe mostrar el consumo de combustible por
kilómetro. Un problema matemático muy simple numero de litros dividido por número de
kilómetros.*/

let kilometros = parseFloat(prompt("Ingresa los km recorridos:"));
let litros = parseFloat(prompt("Ingresa los litros consumidos:"));
let consumo = litros / kilometros;
console.log(" El Consumo de combustible por cada  kilómetro es: " + consumo.toFixed(2));