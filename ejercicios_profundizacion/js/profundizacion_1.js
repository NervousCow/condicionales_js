"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

const numero1 = prompt('Ingrese un primer número:');

const numero2 = prompt('Ingrese un segundo número:');

let diferencia = numero1 - numero2;

if(diferencia === 0){
  console.log("La diferencia entre el primer número y el segundo es cero")
} else{
  if(diferencia > 0){
    console.log("La diferencia entre el primer número y el segundo es positiva")
  } else{
    console.log("La diferencia entre el primer número y el segundo es negativa")
  }
}
