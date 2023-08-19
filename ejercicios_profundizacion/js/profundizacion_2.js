"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

alert("Ahora le vamos a solicitar tres números enteros")

const numero1 = parseInt(prompt('Ingrese un primer número entero:'));
const numero2 = parseInt(prompt('Ingrese un segundo número entero:'));
const numero3 = parseInt(prompt('Ingrese un tercer número entero:'));

const control = Number.isInteger(numero1 + numero2 + numero3)

if(control){
  if(numero1 % 2 === 0){
    console.log(numero1 + " es par.")
  } else{
    console.log(numero1 + " es impar.")
  }
  if(numero2 % 2 === 0){
    console.log(numero2 + " es par.")
  } else{
    console.log(numero2 + " es impar.")
  }
  if(numero3 % 2 === 0){
    console.log(numero3 + " es par.")
  } else{
    console.log(numero3 + " es impar.")
  }
} else{
  alert("Uno de los números ingresados no es entero.")
}
