function sep() {
  console.log("===========================");
}

console.log("Forma Tradicional y Explícita");
sep();

function crearPersona (nombre, apellidos) {
  return {
    nombre: nombre,
    apellidos : apellidos
  }
}

res = crearPersona("Gumersindo", "Peláez")
console.log(res);



console.log(`Forma Tradicional, Explícita y utilizando el nombre de
  los parámetros de la función como nombre de las propiedades
  del objeto`);

 // Se utiliza el literal "nombre" como el nombre de la propiedad
 // Se utliliza el valor de la variable (parámetro nombre) como valor en el
 // objeto
sep();

function crearPersona2 (nombre, apellidos) {
  return {
    nombre,
    apellidos
  }
}

res = crearPersona2("Nicomedes", "Ortuñez")
console.log(res);



console.log("Función con UNA SOLA línea en cuerpo de la función");

// Se necesita una función de flecha
// Se eliminan las {}
// Se elimina el return
// Para devolver un objeto literal {} hay que devolverlo entre ()
//    Independientemente de que este objeto literal esté completamente 
//    definido en cuanto a propiedades y valores o se utilice por comprensión
//    a través del nombre de los parámetros (el caso anterior a este)
sep();

console.log("clave: Valor <- implícito");
sep();

const crearPersona4 = (nombre, apellidos) => ({ nombre, apellidos })

res = crearPersona4("Onorato", "Umpierrez")
console.log(res);




console.log("clave: Valor <- explícito");
sep();
const crearPersona3 = (nombre, apellidos) => ({ nombre: nombre, apellidos: apellidos })

res = crearPersona3("Eufrasio", "Cantimpalos")
console.log(res);



console.log("Argumentos, desestructuración/propagación (...rest <- spread operator") ;
sep();

console.log("Funciones tradicionales, poseen una propiedad arguments (array)");
 
console.log("Función SIN argumentos/parámetros");
sep();


function sinArgumentos () {
  console.log("Soy una función que no recibe argumentos");
  console.log("arguments:", arguments, "length:", arguments.length);
}

sinArgumentos();




console.log("Función SIN argumentos/parámetros");
sep();


function conArgumentos (a, b, c) {
  console.log("Soy una función que recibe argumentos");
  console.log("arguments:", arguments, "length:", arguments.length);
}

conArgumentos(1, true, 'abc');




console.log("Función con n argumentos/parámetros");
sep();


function conNArgumentos (...args) {
  console.log("Soy una función que recibe N argumentos");
  console.log("args:", args, "length:", args.length);
}

conNArgumentos(1, true, 'abc', [0,1,2], { prop11: true, prop2: false});




console.log("Función con aridad fija y variable");
sep();

function conNArgumentos2 (nombre, apellidos, ...args) {
  console.log({nombre});
  console.log({apellidos});
  console.log("args:", args, "length:", args.length);
}

conNArgumentos2("Teófilo", "Brazoduro", 73, "Vigo");



console.log("Desestructuración del arreglo arguments/...args");
sep();

function desestructurar(...args) {
  return args
}

res = desestructurar("Juan Carlos", "Varela Iglesias", 53)

console.log(res);
// Consiste en almacenar en variables independientes valores que
// provienen de una estructura de datos

// Para desestructurar args, crea un arreglo con los nombres de las
// variables que quieras e invoca la función
// Si hay MENOS variables que elementos en el array, todo ok
// Si hay MÁS variables que elementos en el array el valor almacenado
// será undefined

let [ nombre, apellidos, edad, ciudad ] = desestructurar("Juan Carlos", "Varela Iglesias", 53)

console.log({nombre});
console.log({apellidos});
console.log({edad});
console.log({ciudad});


console.log("Desestructuración de un objeto literal");
sep();

function crearPersona2 (nombre, apellidos, edad) {
  return {nombre, apellidos, edad}
}

res = crearPersona2("Juan Carlos", "Varela Iglesias", 53);
console.log({res});


//{ nombre, apellidos, edad } = crearObjeto("Juan Carlos", "Varela Iglesias", 53);

// console.log({nombrePersona});
// console.log({apellidosPersona});
// console.log({edadPersona});
// console.log({ciudad});
