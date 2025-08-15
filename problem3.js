
let edad = parseInt(prompt("Ingresa su edad:"));
let tieneCedula = prompt("¿Tenes cédula? (si/no)").toLowerCase();
let cedulaInscrita = prompt("¿Tiene inscrita la cédula? (si/no)").toLowerCase();

if (edad >= 18 && tieneCedula === "si" && cedulaInscrita === "si") {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}
