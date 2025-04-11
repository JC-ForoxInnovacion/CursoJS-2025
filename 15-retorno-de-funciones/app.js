function funcionNoRetorna () {
  console.log("Esta función 'no' retorna (retorna undefined automático porque no existe el return)");
}

let res = funcionNoRetorna() // undefined porque la función NO RETORNA
console.log({res});



function funcionRetorna1() {
  console.log("Esta función retorna undefined porque no se define que otra cosa retornar");
  return;
}

res = funcionRetorna1() // undefined porque no está definido que retorna
console.log({res});



function funcionRetorna2() {
  console.log("Esta función retorna algo");
  return "ok";

  // Después del return nada se ejecuta
  console.log("Estoy después del return");
}

res = funcionRetorna2() // retorna "ok"
console.log({res});


// Función tradicional

function sumar(x, y) {
  return x + y
}

res = sumar(3,5);
console.log({res});

// Función tradicional almacenada
// ¿Por qué?, Porque puedo hacerlo ya que las 
// funciones en JS son ciudadanos de 1º case/categoría

let fTradicAlmacenada = function sumar2(x, y) {
  return x + y
}

// res = sumar2(3,5); // <- Error
                      // Could not find name 'sumar2'. 
                      // Did you mean 'sumar'?
                      // Por qué no???
                      // Porque la función está asignada
                      // a una variable

console.log("fTradicAlmacenada:"); 
console.log(fTradicAlmacenada); 

res = fTradicAlmacenada(10, 558)
console.log({res});


// Función anónima
let fAnonima = function (miString) {
  return `Hola ${miString}, te saludo desde una función anónima almacenada en una variable`
}

res = fAnonima("Miguel");
console.log({res});


// Función flecha

// a. Almacenada en una variable e invocada posteriormente

let fFlecha = (num1, num2, num3) => {

  return ` El 1er número es ${num1}, El 2do número es ${num2}
  El 3er número es ${num3}`
}

res = fFlecha(1000, 1001, 1002);
console.log({res});



// NOTA: No importa como se declare, inclusive en el ámbito
//       global, si no se pasa como parámetro
//       no será alcazada desde la función

// nombre = prompt('Dime tu nombre');
// var  nombre = prompt('Dime tu nombre');
// let nombre = prompt('Dime tu nombre');
// const nombre = prompt('Dime tu nombre');


// b.1 Auto-invocada y no almacenada

((nombre, apellido) => {
  console.log(`${nombre} ${apellido}`)
})(  "JC", ("Varela Iglesias") ); // prompt('Dime tu nombre')


// b.2 Auto-invocada y almacenada

res = ((n, texto) => {
  return ((texto + " ") * n);
})(3, "función");

console.log({res});


// ===================

// Aleatorio función tradicional
function getAleatorio() {
  return Math.random();
}

res = getAleatorio()

console.log({res});

// Aleatorio función flecha y bloque delimitado por {}
(() => {
  console.log("Aleatorio:", Math.random())
})();


// Aleatorio función flecha SIN {}
// ¿Por qué?
// Cuando existe una sola instrucción podemos eliminar
// las {} y el "return"

(() => console.log("Aleatorio2:", Math.random()))();
