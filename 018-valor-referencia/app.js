// OJO QUE ESTO NO ha terminado aquí
// Ni se ha visto TODO
// Ni TODO está demostrado
// NI TODO está debidamente justificado
//
// 
//  Feliz fin de semana :)




function sep() {
  console.log("===========================");
}
console.log("números (primitivo), por valor")
sep()

let num1 = 10;
let num2 = num1;
let num3 = num2;
let num4 = num1;

console.log({num1, num2, num3, num4});

// Comparar referencias
console.log("num1 === num3:", num1 === num3); // true -> porque el PRIMITIVO 10 es 10
                                              // independientemente de dónde esté
                                              // almacenado

console.log("Object.is(num1, num2): ", Object.is(num1, num2))

num1 = 100;
num3 = 1000;
console.log({num1, num2, num3, num4});


// Comparar referencias
console.log("num1 === num3:", num1 === num3); // false, 100 no es igual a 1000
console.log("num2 === num4:", num2 === num4); // 




console.log("strings (primitivo), por valor (explicación en números)")
sep();

let str1 = "qué tal?";
let str2 = str1;

console.log({str1, str2});

console.log("str1 === str2:", str1 === str2);

str1 = "Hola"
console.log({str1, str2});

console.log("str1 === str2:", str1 === str2);




console.log("booleanos (primitivo), por valor");
sep();

let bool1 = false;
let bool2 = bool1;

console.log({bool1, bool2});

bool1 = true;
console.log({bool1, bool2});




console.log("null (primitivo), por valor");
sep();

let null1 = null;
let null2 = null1;
console.log({null1, null2});

null1 = 777;
console.log({null1, null2});




console.log("undefined (primitivo), por valor");
sep();

let undef1 = undefined;
let undef2 = undef1;
console.log({undef1, undef2});

undef1 = true;
console.log({undef1, undef2});



console.log("Estructuras Tipos y Subtipos de Objetos / NO primitivos, por referencia");
console.log("Funciones, por refencia")
sep();

/**
 * A diferencia de funcionamiento en tipos de datos primitivos
 * el comparador estricto "===", que devuelve true cuando el tipo de dato
 * y su valor son iguales, en datos estructurales u objetos
 * devuelve true cuando comparten referencia
 */


let func1 = (nombre) => console.log(`Adiós ${nombre}`);

let func2 = func1;

console.log({func1});
console.log({func2});


// Comparar referencias
console.log("func1 === func2:", func1 === func2);
console.log("Object.is(func1, func2): ",Object.is(func1, func2))


func1 = (nombre) => console.log(`Hola ${nombre}`); // SE ROMPE la refencia

console.log({func1});
console.log({func2});

console.log("func1 === func2:", func1 === func2); // SE HA ROTO la referencia
console.log("Object.is(func1, func2): ",Object.is(func1, func2))




console.log("Arreglos");
console.log("Arreglos 1, por referencia. UTILIZANDO TODO el arreglo");
sep();

let arr1 = [0,1,2,3];
let arr2 = arr1;

console.log("arr1:", arr1, "arr2:", arr2);
console.log("Object.is(arr1, arr2:", Object.is(arr1, arr2));

arr1 = [4,5,6,7]; // SE ROMPE la referencia al redefinir el arreglo
console.log("arr1:", arr1, "arr2:", arr2);
console.log("Object.is(arr1, arr2):", Object.is(arr1, arr2));



console.log("Arreglos 2, por referencia UTILIZANDO ELEMENTOS del arreglo")
sep();

let arrNum1 = [0,1,2,3];
let arrNum2 = arrNum1;

console.log("arrNum1:", arrNum1, "arrNum2", arrNum2);

arrNum1[1] = 101;

console.log("arrNum1:", arrNum1, "arrNum2", arrNum2);




console.log("OBJETOS, idem a funciones y arreglos");
console.log("Objetos 1");
sep();

let obj1 = {
  nombre: "Juan Carlos",
  apellidos: "Varela Iglesias"
}

let obj2 = obj1;
console.log("obj1:", obj1);
console.log("obj2", obj2);

obj1 = {
  nombre: "Tita",
  apellidos: "Varela Iglesias"
}

console.log("obj1:", obj1);
console.log("obj2", obj2);

// Objetos 2
console.log("Objetos 2");

let objNew1 = {
  ciudad: "Vigo",
  provincia: "Pontevedra"
}

let objNew2 = objNew1;
console.log("objNew1:", objNew1)
console.log("objNew2", objNew2);

objNew1.ciudad = 'Pontevedra';

console.log("objNew1:", objNew1)
console.log("objNew2", objNew2);




console.log("Instanciando objetos con new");
console.log(
`VER 002-Uso-de-new-en-arreglos-y-objetos-literales.pdf
en directorio 999-notas-apuntes-documentos-de-interes/`)
sep();

let arrNew1 = [1,2,3];
let arrNew2 = new Array(arrNew1);

console.log("arrNew1 === arrNew2:", arrNew1 === arrNew2);


let objStr1 = {nombre: "Carlos", apellidos: "Varela González"};
let objStr2 = new Object(objStr1);

console.log("objStr1 === objStr2:", objStr1 === objStr2);

objStr2.nombre = "Olga";
objStr2.apellidos = "Iglesias Ferreiro";

console.log({ objStr1 });
console.log({ objStr2 });

console.log("objStr1 === objStr2:", objStr1 === objStr2);
