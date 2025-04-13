// Características:
//    - NO son objetos
//    - SON inmutables


// Tipos

// Booleanos
//    true  -> Cualquier cosa que no sea 0
//    false -> 0

function sep() {
  return "==============================="
}

console.log("******* Booleanos");
console.log(sep());

//true
let myBool = true;
console.log("myBool:", myBool, "typeof:", typeof(myBool)); 

myBool = Number(myBool);
console.log("Number(myBool):", myBool, "typeof:", typeof(myBool));

// false
myBool = false;
console.log("myBool:", myBool, "typeof:", typeof(myBool)); 

myBool = Number(myBool);
console.log("Number(myBool):", myBool, "typeof:", typeof(myBool));


// Números
console.log("******* Booleanos <= Números");
console.log(sep());

// Número positivo
let myVar = 34;
console.log("myVar:", myVar, "typeof:", typeof(myVar)); 

myBool = Boolean(myVar);
console.log("Boolean(myVar):", myBool, "typeof:", typeof(myBool));

// Número negativo
myVar = -101;
console.log("myVar:", myVar, "typeof:", typeof(myVar)); 

myBool = Boolean(myVar);
console.log("Boolean(myVar):", myBool, "typeof:", typeof(myBool));

// Cero
myVar = 0;
console.log("myVar:", myVar, "typeof:", typeof(myVar)); 

myBool = Boolean(myVar);
console.log("Boolean(myVar):", myBool, "typeof:", typeof(myBool));

// Strings
console.log("******* Booleanos <= Cadenas");
console.log(sep());

// Cadena con longitud
myVar = "Mi String";
console.log("myVar:", myVar, "typeof:", typeof(myVar)); 

myBool = Boolean(myVar);
console.log("Boolean(myVar):", myBool, "typeof:", typeof(myBool));

// Cadena vacía
myVar = "";
console.log("myVar:", myVar, "typeof:", typeof(myVar)); 

myBool = Boolean(myVar);
console.log("Boolean(myVar):", myBool, "typeof:", typeof(myBool));

// Array
console.log("******* Booleanos <= Arreglos");
console.log(sep());

// Array con longitud
let myArr = [0, 90];
console.log("myArr:", myArr, "typeof:", typeof(myArr), "longitud:", myArr.length); 

myBool = Boolean(myArr);
console.log("Boolean(myArr):", myBool, "typeof:", typeof(myBool));

// Array vacío
myArr = [];
console.log("myArr:", myArr, "typeof:", typeof(myArr), "longitud:", myArr.length); 

myBool = Boolean(myArr); // true porque el array existe
console.log("Boolean(myArr):", myBool, "typeof:", typeof(myBool));

console.log("myArr.length:", myArr.length);
myBool = Boolean(myArr.length); // Convierte a booleano la longitud del array y de esta forma obtendrás el false
console.log("Boolean(myArr.length):", myBool, "typeof:", typeof(myBool));


// Object
console.log("******* Booleanos <= Objetos");
console.log(sep());

// Object con longitud (propiedades)
let myObj = {nombre: "JC"};
console.log("myObj:", myObj, "typeof:", typeof(myObj)); 

myBool = Boolean(myObj); 
console.log("Boolean(myObj):", myBool, "typeof:", typeof(myBool));

let myObjLength = myObj.length;
console.log("Longitud:", myObjLength); // undefined porque el object no tiene la propiedad length
console.log(myObj.nombre);


// Object vacío
myObj = {};
console.log("myObj:", myObj, "typeof:", typeof(myObj)); 

myBool = Boolean(myObj); // true porque el objeto existe
console.log("Boolean(myObj):", myBool, "typeof:", typeof(myBool));

myObjLength = myObj.length;
console.log("Longitud:", myObjLength); // undefined porque el object no tiene la propiedad length

let myObjKeys = Object.keys(myObj); // retorna un arreglo con las claves
console.log("myObjKeys:", myObjKeys, "typeof:", typeof(myObjKeys), "longitud:", myObjKeys.length); 

myObjLength = myObjKeys.length;
console.log("myObjLength:", myObjLength, "typeof:", typeof(myObjLength));

myBool = Boolean(myObjLength)
console.log("myBool:", myBool, "typeof:", typeof(myBool));

// null
console.log("******* Booleanos <= null");
console.log(sep());

let myNull = null;
console.log("myNull:", myNull, "typeof:", typeof(myNull)); 

myBool = Boolean(myNull); 
console.log("Boolean(myNull):", myBool, "typeof:", typeof(myBool));

// undefined
// NO USAR (manualmente) undefined como valor para tus variables
console.log("******* Booleanos <= undefined");
console.log(sep());

let myUndefined = undefined;
console.log("myUndefined:", myUndefined, "typeof:", typeof(myUndefined)); 

myBool = Boolean(myUndefined); 
console.log("Boolean(myUndefined):", myBool, "typeof:", typeof(myBool));

