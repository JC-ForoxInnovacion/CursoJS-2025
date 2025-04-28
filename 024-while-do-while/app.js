import { sepCorto, sepLargo } from "./separadores.js";

console.log("While");
sepLargo();

/**
 * Ciclos indeterminados
 */

/**
 * while (condición/es)
 *           true
 */


/**
 * Mientras i <= 7 
 */

let i = 0;

while (true) {
  console.log({i});
  i++;

  if ( i > 7) {
    break;
  }
}


sepLargo();

/**
 * Mientras edad sea <= 24
 */
let edad = 18;
let color = "verde";

while (edad <= 24 && color === "verde") {
  console.log({edad}, {color});
  edad++;
}

sepLargo()

/**
 * Imprimir par o impar mientras num <= 50
 */

let num = 1;
while (num <= 50) {
  if (num % 2 === 0) {
    console.log(`${num} es par`);
  } else {
    num++;
    // continue;
    break;
    console.log(`${num} es impar`);
  }
  num++;
}

/**
 * Imprimir mientras exista un coche en la 
 * posición i del arreglo
 */

let coches = ["Ford", "Audi", "BMW", "Fiat", "Volvo"];
// let coches = [];

i = 0;

while (i <= coches.length) { // (i <= coches.length) // imprime undefined cuando i === 5 porque la posición no existe en el arreglo
  console.log({i}, coches[i]);
  console.log(Boolean(coches[i]));
  i++;
}

i = 0;

while (coches[i]) {  // recorre estrictamente el arreglo
  console.log({i}, coches[i]);
  console.log(Boolean(coches[i]));
  i++;
}

console.log("Do While");
sepLargo();

/**
 * NOTA: La primera vez se ejecuta SIEMPRE ya que no existe
 *       una condición de entrada como en el while().
 * 
 * Hacer
 *  ...
 *  ...
 * mientras (condición/es)
 *              true
 */

num = 1;

do {
  console.log({num});
  num++;
} while (num % 2 === 0 && num < 5);

sepCorto();


i = -2;
do {
  console.log({i});
  
  i++;
  if (i === 2) {
    break;
  }
  
} while (true);