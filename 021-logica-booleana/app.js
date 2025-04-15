const regresaTrue = () => {
  console.log("regresa true");
  return true
}

const regresaFalse = () => {
  console.log("regresa false");
  return false
}

console.warn('Not -> Negación');

console.log(true);
console.log(!true);

console.log(false);
console.log(!false);

console.log(!!true);      // Doble negación
console.log(!!!!!true);   // Negaciones impares -> false
console.log(!!!!!!true);  // Negaciones pares -> true

console.warn('And -> Y');

console.log(true && true); // true cuando TODOS true
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(false && !false);

console.log(1 && 1); // true cuando TODOS true
console.log(1 && 0);
console.log(0 && 1);
console.log(0 && 0);

console.log(2 + 2 && 1);  // true
console.log(2 + 2 && 0);  // false -> retorna el primer falso
console.log(2 + 2 && -5); // true -> retorna el ultimo true

console.log(2 - 2 && -5);

console.log(2 - 2 && true && false);
console.log(false && true && 2 -2 );

/**
 * Primero realiza el llamado a la función
 * La ejecuta
 * Luego evalúa el resto de la expresión con el
 * retorno de la primera función && y el retirno
 * de la segunda
 * 
 * El resultado lógico es falso y no continúa con
 * el console.log()
 */
console.log(regresaFalse() && regresaTrue()); // false 
                                              // (imprime solo la primera función)
console.log(regresaTrue() && regresaFalse()); // false 
                                              // (imprime ambas)

console.log(true && true && true);    // true 
console.log(true === true === true);  // true
console.log(true == true == 1);       // true
console.log(true === true === 1);     // false por la comparación 
                                      // estricta



console.warn("OR");

console.log(true || true); 
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(regresaFalse() || regresaTrue()); 
console.log(regresaTrue() || regresaFalse());

console.warn("Asignaciones con OR");

let soyUndefined = undefined;
let soyNUll = null;
let soyFalse = false;

/**
 * Si todo es true, devuelve el último elemento 
 * de la cadena de &&
 * 
 * Si exite algún false (no importa en qué posicón) devuelve 
 * false (revisa la tabla de la verdad del AND)
 */
let a1 = "Hola" && "clase"
console.log({a1});

a1 = "Hola" && "clase" && true
console.log({a1});

let a2 = "Luis" && "Mariano" && false
console.log({a2});

a2 = "Luis" && "Mariano" && false && "Pézez"
console.log({a2});


/**
 * Si todos son false (aplica también a null y undefined)
 * evalúa todos los OR y devolverá el último
 */
let a3 = soyFalse || soyNUll; 
console.log({a3});

a3 = soyFalse || soyNUll || soyUndefined; 
console.log({a3});

a3 = soyFalse || soyNUll || soyUndefined || false; 
console.log({a3});

/**
 * Si existe al menos un true
 * 
 * Se evalúa la expresión y devuelve el primer true que 
 * encuentre independientemente de su posición
 */

let a4 = soyFalse || "Ya no soy falso"; 
console.log({a4});

a4 = "Soy verdadero" || "Ya no soy falso"; 
console.log({a4});

a4 = soyFalse || "Ya no soy falso" || soyUndefined; 
console.log({a4});

a4 = soyFalse || soyNUll || soyUndefined || "Ya no soy falso"; 
console.log({a4});

a4 = "Ya no soy falso" || soyFalse || soyNUll || soyUndefined || true; 
console.log({a4});

a4 = regresaFalse() || soyFalse || soyNUll || soyUndefined || true; 
console.log({a4});

a4 = false || soyFalse || regresaTrue() || soyUndefined || true; 
console.log({a4});



console.warn("XOR");
console.warn("XOR con dos proposiciones");
let a = true;
let b = true;

console.log("(a || b) && !(a && b): ",(a || b) && !(a && b));

console.warn("XOR con tres proposiciones");
let c = true;

a = true;
b = true;
c = false;

console.log({a}, {b}, {c});

let aNoIgualb = a !== b;
console.log("(a !== b):", aNoIgualb );

let aNoIgualb_noIgualc = aNoIgualb !== c;

// console.log ("(a !== b) !== c:", (a !== b) !== c);
console.log ("(a !== b) !== c:", aNoIgualb_noIgualc);


