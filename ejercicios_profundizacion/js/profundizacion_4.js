"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Investigación y desarrollo.
// Busque en la red qué es y cómo utilizar el método .length 
// Realice un programa que solicite por consola 3 palabras cualesquiera
// Luego el programa debe imprimir la cantidad de caracteres de cada palabra
// ingresada utilizando .length 


alert("A constinuación ingrese tres palabras cualquiera")

const palabra1 = String(prompt('Ingrese la primer palabra:'));
const palabra2 = String(prompt('Ingrese la segunda palabra:'));
const palabra3 = String(prompt('Ingrese la tercer palabra:'));

console.log(palabra1 + " tiene una longitud de " + palabra1.length + " caracteres.")
console.log(palabra2 + " tiene una longitud de " + palabra2.length + " caracteres.")
console.log(palabra3 + " tiene una longitud de " + palabra3.length + " caracteres.")