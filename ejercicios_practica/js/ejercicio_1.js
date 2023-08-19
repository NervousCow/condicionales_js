"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
let numero_mayor = numero1 * (numero1 >= numero2) + numero2 * (numero1 < numero2)

console.log("El número mayor es: " + numero_mayor)

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
if (numero1 > 0) {
    console.log("El primer número es positivo");
}


if (numero1 === 0) {
    console.log("El primer número es cero");
}


if (numero1 < 0) {
    console.log("El primer número es negativo");
}



// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
// if (numero1 > 0 && numero1 < 100);
console.log((numero1 > 0 && numero1 < 100))

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

console.log((numero1 < 10 || numero2 > -2))