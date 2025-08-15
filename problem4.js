let dia = parseInt(prompt("Ingresa un número entre 1 y 7:"));
let diaSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

if (dia >= 1 && dia <= 7) {
    console.log(`El día es: ${diasSemana[dia - 1]}`);
} else {
    console.log("Número fuera de rango");
}
