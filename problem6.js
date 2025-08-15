let salario = parseFloat(prompt("Ingresa tu salario mensual:"));
let imp = 0;

if (salario <= 2000000) {
    imp = 0;
} else if (salario <= 5000000) {
    imp = salario * 0.10;
} else {
    imp = salario * 0.20;
}

console.log(`El impuesto a pagar es: ${imp} pesos`);
