/**
 * Una función que recibe dos funciones como argumento y 
 * las multipliplica
 */

// Solución tradicional con un lenguaje en el cual
// las funciones no son ciudadaos de 1ª categoría

function sumar(a, b) {
  return a + b;
}

function restar(c, d) {
  return c - d;
}


function multiplicar(num1, num2) {
  return num1 * num2
}

let resSuma = sumar(10, 10);
console.log({resSuma});

let resRestar = restar (15, 5);
console.log({resRestar});

let resMultiplicar = multiplicar(resSuma, resRestar);
console.log({resMultiplicar});

// Solución pasando funciones como argumentos 

let numASumar = 10;
let numBSumar = 10;
let numCRestar = 15;
let numDRestar = 5;

//                    retorna ->    20             retorna ->       10
let res = multiplicar(sumar(numASumar, numBSumar), restar(numCRestar, numDRestar))
console.log({res});

res = multiplicar(sumar(100, 50), restar(80, 79));
console.log({res});