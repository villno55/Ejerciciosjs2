let edadCliente = parseInt(prompt("Ingresa tu edad:"));
if (edadCliente < 5) {
    console.log("Entras gratis");
} else if (edadCliente <= 18) {
    console.log("El precio de la entrada es de 5 mil pesos");
} else {
    console.log("El preci de la entrada es de 10 mil pesos");
}
