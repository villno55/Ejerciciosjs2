let num = parseInt(prompt("Ingresa un número entero:"));
let sum = 0;
let temp = num;

while (temp !== 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
}
console.log(`La suma de los dígitos de ${num} es: ${sum}`);
