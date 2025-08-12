/*1.Usted ha realizado una compra y conoce el precio del producto y su iva. Haga un script que
calcule el precio total que va a pagar por la compra. Para calcular el total debe sumar al precio
el resultado de multiplicar precio por el iva y dividir por 100.*/

let productPrecio = 20000;
let iva = 19;

let total = productPrecio + (productPrecio * iva / 100);

console.log("El precio total es: " + total);