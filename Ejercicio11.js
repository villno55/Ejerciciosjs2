let repet = parseInt(prompt("Ingresa un número entre 1 y 20:"));
let frase = prompt("Ingresa una frase:");

if (repet >= 1 && repet <= 20) {
    for (let i = 0; i < repet; i++) {
        console.log(frase);
    }
} else {
    console.log("Número fuera de rango");
}
