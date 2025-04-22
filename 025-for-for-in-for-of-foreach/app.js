import { sepCorto, sepLargo } from "./separadores.js";

/**
 * Ciclos finitos
 * 
 * Recorren un rango o un objeto iterable
 * 
 * En JAVASCRIPT NO EXISTE el tipo de datos RANGE
 */

let i = 3;  // Este i tiene un ámbito diferente del
            // i del for()
let j = 0;

console.log("for tradicional");
/**
 * Iterar un número de veces definido/determinado.
 */
sepLargo();

console.log("Rango");
sepCorto();

for (let i = 0; i < 5; i++) {
  console.log({i});  
}

sepCorto();
/**
 * Range en Python 3
 * range(start, stop, step)  
 * step => incrementos (o decrementos)
 */

/**
 * Range en JavaScript
 * by: JC *<:p
 */

let range = [7, 10, 3];

for (let i = range[0]; i < range[1]; i = i + range[2]) {
  console.log({i});
}

sepCorto()

// Con arrays
let frutas = ['manzana', 'fresa', 'naranja'];

for (let i = 0; i < frutas.length; i++) {
console.log(frutas[i]);
}

sepCorto();

// Con strings
let frase = "Programador: Persona que tiene relaciones más duraderas y profundas con una computadora que con otra persona.";

for (let i = 0; i < frase.length; i++) {
console.log(frase[i]);
}

console.log("for in");
/**
 * Iterar sobre las propiedades enumerables de un objeto (las claves).
 */
sepCorto();

let persona = {
  nombre: 'Ana',
  edad: 30,
  ciudad: 'Madrid'
};

for (let clave in persona) {
  console.log(clave + ': ' + persona[clave]);
}


sepCorto();

/**
 * NOTA: También se puede usar con arrays, pero NO es recomendable, porque los
 * índices se tratan como strings y puede incluir propiedades añadidas 
 * manualmente.
 * 
 * for...in recorre todas las claves enumerables, incluidas esas que no son 
 * índices del array.
 */

frutas = ['manzana', 'banana'];
frutas.colorFavorito = 'rojo';

// frutas = [];

console.log("frutas.lengt:", frutas.length);

for (let clave in frutas) {
  console.log(clave, typeof clave); // ¡Sorpresa!
}

sepCorto();

/**
 * NOTA: Observa el if dentro del for..in
 * 
 * if (Object.prototype.hasOwnProperty.call(obj, key))
 * Este if es una verificación importante:
 * 
 * Usa hasOwnProperty para asegurarse de que la propiedad key pertenece
 * directamente al objeto obj y no es heredada de su prototipo.
 * 
 * Se usa de esta forma un poco larga (Object.prototype.hasOwnProperty.call) 
 * por seguridad, en caso de que el objeto obj tenga una propiedad llamada
 * hasOwnProperty que sobrescriba la original.
 */

let obj = {veh1: "Coche", veh2: "Tren"}
obj.vehiculoPreferido = "Moto"

// obj = {};

for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log('valor[key / clave]:', key, element)
  }
}

sepCorto()

let arr = ["Coche", "Moto", "Bici", "Barco", "Avión", "Tren", "Patinete"];

for (const i in arr) {
  console.log({i}, arr[i]);
}



console.log("for of");

/**
 * Iterar sobre valores de objetos iterables como arrays, 
 * strings, mapas, sets, ...
 */
sepCorto();

frutas = ['manzana', 'banana', {nombre: 'Qasem'}, 'naranja'];

for (let fruta of frutas) {
  console.log(fruta);
}

sepCorto();

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log(".foreach()");
sepLargo();
/**
 * .forEach()
 * Método de los arrays que ejecuta una función para cada elemento
 * 
 * Sintaxis:
 * 
 * array.forEach((elemento, índice, arrayCompleto) => {
 *       Aquí las sentencias de la función
 * });
 */

let nombres = ['Ana', 'Luis', 'Carlos'];

nombres.forEach((nombre) => {
  console.log(nombre + "'s");
});

sepCorto();

nombres.forEach((nombre, i) => {
  console.log(`${nombre} es el número ${i+1} de la lista`);
});

sepCorto();

nombres = ['Ana', 'Luis', 'Carlos'];

nombres.forEach((nombre, i, arrayCompleto) => {
  if (i === arrayCompleto.length - 1) {
    console.log(nombre, "es el último");
  } else {
    console.log(nombre, "no es el último");
  }
});

sepCorto();

frutas = ['manzana', 'banana', 'naranja'];

frutas.forEach((fruta, i) => {
  console.log(`${i}: ${fruta}`);
});

sepCorto();

let numeros = [3, 5, 7, 9, 11];

numeros.forEach((numero, i) => {
  console.log(`${i}: ${numero} x 2 = ${numero * 2}`);
});


sepLargo();
console.log("Diferencias al usar for...in y for...of con el mismo array");
sepLargo();


sepCorto();
console.log("for...in");
sepCorto();

frutas = ['manzana', 'banana', 'naranja'];
frutas.noMeGusta = "Melocotón"; 

console.log({frutas});

for (const key in frutas) {
  console.log(key, typeof(key), frutas[key]);
}

sepCorto();
console.log("for...of");
sepCorto();

console.log({frutas});

for (const fruta of frutas) {
  console.log(fruta);
}