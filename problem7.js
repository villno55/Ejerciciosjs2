let ini = parseInt(prompt("Ingresa el primer número:"));
let fin = parseInt(prompt("Ingresa el otro número:"));

for (let i = ini; i <= fin; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
