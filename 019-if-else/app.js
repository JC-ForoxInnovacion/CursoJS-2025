function sep() {
  console.log("===============================");
}

console.log("CASO 1:");
console.log("IF simple (sin ELSE)");
sep();

// let miVar1 = "Lunes";
let miVar = 7;

if (typeof(miVar) === 'string') {
  console.log(`${miVar} <- es de tipo String`);
}


console.log("CASO 2:");
console.log("IF - ELSE)");
sep();

let miNum = 7;

if (miNum === 5) {
  console.log(`${miNum} es igual a 5`);
} else {
  console.log(`${miNum} no es igual a 5`);
}


console.log("CASO 3:");
console.log("IF - ELSE IF - ELSE");
sep();

/**
 * IF - ELSE IF - ELSE
 * 
 * if (condición 1) {
 *    Ejecuta algo
 * } else if (condición 2) {
 *    Ejecuta otra cosa
 * } else if (condición 3) {
 *    Ejecuta otra cosa diferente
 * } else {
 *    si no se cumple alguna de las condiones
 *    anteriores se ejecutan las instrucciones
 *    de este bloque.
 * 
 *    El uso de else es totalmete opcional
 * }
 */

/**
 * ! En este caso si miNum = true/false será interpretado como 1 ó 0
 * ~ SOLUCION:
 *    Existen varias, una de ellas puede ser un if anidado (CASO 7)
 */

miNum = 'perro';

if (miNum < 5 ) {
    console.log(`${miNum} < 5`);
} else if (miNum === 5) {
    console.log(`${miNum} = 5`);
} else if (miNum > 5) {
  console.log(`${miNum} > 5`);
} else {
  console.log(`${miNum} NO es un número`);
}



console.log("CASO 4:");
console.log("IF (true)");
sep();

if (true) {
  console.log('Verdadero');
} else {
  // NUNCA entrará por el ELSE
  console.log('Falso');
}

console.log("CASO 5:");
console.log("IF (false)");
sep();

if (false) {
  // NUNCA entrará por el IF
  console.log('Verdadero');
} else {
  console.log('Falso');
}

console.log("CASO 6:");
console.log("IF (false)");
sep();

miVar = 5; // true → cualquier valor ≠ 0
miVar = 0;  

miVar = true; // true es true !!!
miVar = false;

miVar = 'Un string'; // true → una cadena NO vacía
miVar = '';

miVar = null;      // false
miVar = undefined; // false


miVar = [0, 1, 2]; // true → una array NO vacío
miVar = [];
miVar = [].length

miVar = {prop: "Valor"}; // true → una array NO vacío
miVar = {};
miVar = (Object.keys(miVar)).length;

if (miVar) {
  console.log(`${miVar} <- Verdadero`);
} else {
  console.log(`${miVar} <- Falso`);
}



console.log("CASO 7");
console.log("IF anidado");
sep();

miNum = 5;

if (typeof(miNum) === 'number') {
  if (miNum < 5 ) {
    console.log(`${miNum} < 5`);
  } else if (miNum === 5) {
    console.log(`${miNum} = 5`);
  } else if (miNum > 5) {
    console.log(`${miNum} > 5`);
  }
} else {
  console.log(`${miNum} NO es un número`);
}
