/**
 * ~ Función:
 * Fragmento de código que debe "devolver" algo, que está
 * contenido en bloque que puede tener nombre o no y 
 * que puedes invocar la cantidad de veces que quieras
 */

function saludarAlUsuario( usuario ){
  // Procedimiento implícito (tienes que pensar)
  return 'Hola' + " " + usuario;
}

function saludarAlUsuario2( usuario ){
  // Procedimiento explícito (tienes que leer)
  const textoConst = 'Hola' + " ";
  let saludo = textoConst + usuario
  return saludo
}

// let nombre = prompt('Dime tu nombre:');
let nombre = null;

// Muestra de resultados y llamado a la función (IMPLICITAMENTE)
console.log(saludarAlUsuario(nombre));

// Obtención de resuldos de la funcióon y muestra de dichos 
// resultado (EXPLICITAMENTE)
let resSaludo = saludarAlUsuario2(nombre);
console.log(resSaludo);

// Funciones como ciudados de 1ª Clase / Categoría
// 1) Pueden ser asignadas a variables

let myFunc = function sumar(a, b) {
  return a + b
}

let res = myFunc(2, 3);
console.log({res});

// 2) Pasar funciones como argumentos a otras funciones

function imprimirResultado(res) {
  return `El resultado es ${res}`;
}

function restar(a,b){
  return a - b;
}

// Paso a paso
res = restar(7, 3)
console.log("función restar() ->", {res});

let res2 = imprimirResultado(res)
console.log("función imprimirResultado() ->", {res2});

// Pasando una función como argumento de otra función
res = imprimirResultado(restar(7,3))

console.log("función imprimirResultado( función restar()) ->", {res});

// 3) Retornar una función desde otra función

/**
 * 1. Closures (Clausuras)
 * Una función interna puede "recordar" el entorno donde fue 
 * creada, incluso después de que la función externa termine.
 * 
 * ¿Para qué sirve?
 * Te permite crear funciones con valores "preconfigurados" que 
 * permanecen en memoria.
 */

function saludar(nombre) {

  console.log({nombre} );

  return function() {
    console.log(`Hola, ${nombre}`);
  };
}

const saludarAJuan = saludar("Juan");
console.log(saludarAJuan);

saludarAJuan(); // "Hola, Juan"


/**
 * 2. Funciones fábrica (Factory Functions)
 * Puedes crear funciones que generen otras funciones con un 
 * comportamiento determinado.
 * 
 * ¿Para qué sirve?
 * Para construir comportamientos personalizados sin repetir 
 * lógica.
 */


function multiplicador(factor) {

  console.log({factor});

  return function(x) {

    console.log({x});

    return x * factor;
  };
}

const duplicar = multiplicador(2);
console.log(duplicar);
console.log(duplicar(7)); // 14

const triplicar = multiplicador(3);
console.log(triplicar);
console.log(triplicar(11)); // 33

/**
 * 3. Currying
 * Es el proceso de convertir una función con múltiples argumentos 
 * en una secuencia de funciones que toman un argumento a la vez. 
 */

// Función tradicional
function sumarTradicional(a, b) {
  return a + b;
}

// Función curryficada
function sumar(a) {
  console.log({a});

  return function(b) {
    console.log({b});

    return a + b;
  };
}

const sumar5 = sumar(5);
console.log({sumar5});

console.log(sumar5(10)); // 15

// IMPORTANTE: El resto de los casos los veremos más adelante

// 4) Se puede almacenar en estructuras de datos
let myArr = [
  0,
  true,
  function multiplicar(a, b){
    return a *b
  },
  "Un string"
]

console.log({myArr});

res = myArr[2](3, 3)
console.log({res});


let myObj = {
  numero: 0,
  booleano: true,
  miFuncion: function multiplicar(a, b){
    return a *b
  },
  cadenaCaracteres: "Un string"
}

console.log({myObj});

console.log(myObj.miFuncion);

res = myObj.miFuncion(4, 5);
console.log({res});

// Funciones anónimas

const myFunct = function(x){
  return `Encantado de conocerte ${x}`
}

res = myFunct("Petra");
console.log({res});

// Arguments en FUNCIONES TRADICIONALES
// OJO: Solo en FUNCIONES TRADICIONALES (con function)

const myFunct2 = function(nombre, apellidos){
  console.log( arguments);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }

  return `Encantado de conocerte ${nombre} ${apellidos}`
}

res = myFunct2("Petra", "Petropolis", 36, "Rubia", {ojos: {cantidad: 1, color: "Negro"}});
console.log({res});

// Funciones de flecha, funciones Lambda
function mult(a, b){
  return a * b
}

res = mult(3, 4);
console.log("Función tradicional",{res});

let mult2 = (a, b) => {
    return a *b
}

res = mult2(3, 4)
console.log("Función =>", {res});


// Función de flecha con autoejecución
((a, b) => {
  a = 20;
  b = 30;
  return console.log(a + b)
})();