let num = parseInt(prompt("Ingrese un número:"));
let Primo = num > 1;

for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        Primo = false;
        break;
    }
}

if (Primo) {
    console.log(`El numero ${num} es primo`);
} else {
    console.log(`El numero ${num} no es primo`);
}
