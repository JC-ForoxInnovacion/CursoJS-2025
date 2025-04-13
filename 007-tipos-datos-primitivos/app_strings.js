function sep() {
  return "==============================="
}

console.log("******* Strings");
console.log(sep());

// Entre comillas dobles
console.log("Texto entre comillas dobles -> No ves las comillas");

// Entre comillas simples
console.log('Texto entre comillas simples -> No ves las comillas');

// Entre comillas comillas invertidas (acento grave `)
console.log(`Texto entre comillas invertidas -> No ves las comillas`);

// Entre comillas anidadas (nested)
console.log("Texto entre 'comillas simples' anidado entre comillas dobles");

console.log('Texto entre "comillas dobles" anidado entre comillas simples');

console.log(`Texto entre "comillas dobles" anidado entre comillas invertidas`);

console.log(`Texto entre 'comillas simples' anidado entre comillas invertidas`);

console.log("Texto entre `comillas invertidas` anidado entre comillas dobles");

console.log('Texto entre `comillas invertidas` anidado entre comillas simples');


// Interpolación de variables ENTRE comillas invertidas

let nombre = "Maria Carolina de las Blancas Nieves"
let myMsg = `Hola ${nombre}, ¿cómo estás hoy?`;
let res = prompt(myMsg);

// Los strings poseen métodos para manipularlos
// Continuará ... 



