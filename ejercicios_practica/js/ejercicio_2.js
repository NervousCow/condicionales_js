"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

if(texto1 > texto2) {
  console.log(texto1 + " es mayor alfabeticamente que " + texto2)
} else{
  console.log(texto2 + " es mayor alfabeticamente que " + texto1)
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda

if(copiaTexto1 === texto1){
  console.log("La variable 'copiaTexto1' es igual a la variable 'texto1'")
} else{
  console.log("La variable 'copiaTexto1' NO es igual a la variable 'texto1'")
}

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda

if(copiaTexto1 != texto2){
  console.log("La variable 'copiaTexto1' es distinta a la variable 'texto2'")
} else{
  console.log("La variable 'copiaTexto1' es igual a la variable 'texto2'")
}