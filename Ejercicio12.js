let num1 = parseInt(prompt("Ingresa el número 1:"));
let num2 = parseInt(prompt("Ingresa el número 2:"));

let sumPares = 0;
let sumImpares = 0;
let contImpares = 0;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        sumPares += i;
    } else {
        sumImpares += i;
        contImpares++;
    }
}

let promedioImpares = contImpares > 0 ? sumImpares / contImpares : 0;

console.log(`Suma de pares: ${sumPares}`);
console.log(`Promedio de impares: ${promedioImpares}`);
