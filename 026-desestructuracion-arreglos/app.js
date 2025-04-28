import { sepCorto, sepLargo } from "./separadores.js";

/**
 * Desestructuración y/o Desempaquetado de arreglos 
 * en JavaScript
 */

console.log("Sintaxis básica");
sepCorto();

let numeros = [10, 20, 30];
let [a, b, c] = numeros;

console.log({a}); // 10
console.log({b}); // 20
console.log({c}); // 30

console.log("Omitiendo elementos");
sepCorto();

numeros = [10, 20, 30];

let [ , segundo, ] = numeros;
console.log({segundo}); // 20

let tercero = numeros[2];
console.log({tercero}); // 30

console.log("Valores por defecto");
sepCorto();

let colores = ['rojo'];

let [color1, color2 = 'verde'] = colores;

console.log({color1}); // 'rojo'
console.log({color2}); // 'verde'


console.log("Desestructuración en funciones");
sepCorto();

function mostrar([nombre, edad]) { // Aquí, en los parámetros, es dónde y
                                   // cuándo se realiza la desestructuración
  console.log({nombre}, {edad});
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}


let persona = ['Ana', 28];
mostrar(persona); // Nombre: Ana, Edad: 28


// Otra forma de hacerlo desestructurando PREVIO al 
// llamado de función.
// ESTO NO ES desestrcturación en funciones

function mostrar2(nombre, edad) { // Aquí, en los parámetros, es dónde y
  // cuándo se realiza la desestructuración
console.log({nombre}, {edad});
console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}


persona = ['Pedro', 30];
let [nombre, edad] = persona;
mostrar2(nombre, edad); // Nombre: Pedro, Edad: 30


console.log("Desestructuración con el operador rest");
sepCorto();

let frutas = ['manzana', 'banana', 'kiwi', 'pera'];
let [primera, segunda, ...otrasFrutas] = frutas;

console.log({primera}); // 'manzana'
console.log({segunda}); // 'banana'
console.log({otrasFrutas}); // ['banana', 'kiwi', 'pera']