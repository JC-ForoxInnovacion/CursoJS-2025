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



console.log("Desestructuración del arreglo arguments <- en funciones tradicionales / ...args <- funciones flecha");
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

// NOTA: comentamos este let porque más abajo en la desesctructuración de objetos
//       pretendemos utilizar las mismas variables. EVIDENTEMENTE no puedes 
//       redeclarar con let y el MISMO NOMBRE
//       let { nombre, apellidos, edad, ciudad } = desestructurar("Juan Carlos", "Varela Iglesias", 53)


// let [ nombre, apellidos, edad, ciudad ] = desestructurar("Juan Carlos", "Varela Iglesias", 53)

// console.log({nombre});
// console.log({apellidos});
// console.log({edad});
// console.log({ciudad});


console.log("Desestructuración de un objeto literal");
sep();

function crearPersona2 (nombre, apellidos, edad) {
  return {nombre, apellidos, edad}
}

res = crearPersona2("Juan Carlos", "Varela Iglesias", 53);
console.log({res});

//SOLUCION: Utiliza un par clave: valor para renombrar la variable independiente 
// en el objeto de desestructuración tal como se hace en siguiente ejemplo.

let { nombre: nombrePersona, apellidos: apellidosPersona, edad: edadPersona, ciudad: ciudadPersona } = crearPersona2("Juan Carlos", "Varela Iglesias", 53);

console.log({nombrePersona});
console.log({apellidosPersona});
console.log({edadPersona});
console.log({ciudadPersona});

console.log("Desestructuración de argumentos");
sep();

let persona = {
  nombre: "Manuel",
  apellidos: "Pérez Gómez",
  edad: 30,
  hijos: ["Manolito", "Manuelita"],
  poseeCoche: true,
  coche: {
    marca: "Ferrari",
    modelo: "F-350",
    matricula: "PO-3640-M"
  }
}

console.log("SIN desestructurar");
sep();
function imprimirPersona ( persona ) {
  console.log("matricula:", persona.coche.matricula);
  console.log("hijos:", persona.hijos);
  console.log("apellidos:", persona.apellidos);
}

imprimirPersona(persona);

console.log("Desestructurado");
sep();

function imprimirPersona2 ( {nombre, apellidos, edad, hijos: descendientes, hijos: [hijo, hija], poseeCoche: tieneCoche, coche: {marca,modelo, matricula} } ) {

  /**
   * nombre
   * apellidos
   * edad, 
   * hijos: descendientes <- se renombra la propiedad
   * hijos: [hijo, hija] <- se desestructura el array hijos
   * poseeCoche: tieneCoche <- se renombra la propiedad
   * coche: {marca,modelo, matricula} } <- se desestructura el objeto coche
   */
  console.log({nombre});
  console.log({apellidos});
  console.log({edad});
  console.log({descendientes});
  console.log({hijo});
  console.log({hija});
  console.log({tieneCoche});
  console.log({marca});
  console.log({modelo});
  console.log({matricula});

}

imprimirPersona2(persona);

console.log(persona);

console.log("Desestructurando... ando");
sep();

let nivel0 = {
  prop_nivel0: "Nivel 0",
  otra_prop_nivel0: true,

  nivel1:{
    prop_nivel1: "Nivel 1",
    otra_prop_nivel1: "Propiedad interna del nivel 1",

    nivel2: {
      prop_nivel2: "Nivel 2",
      otra_prop_nivel2: 1 * 2,
    }
  }
}

console.log({nivel0});

// 1) Desestructurar las propiedades que no son objeto
let { prop_nivel0: pN0, otra_prop_nivel0: oPN0} = nivel0
console.log({pN0});
console.log({oPN0});

// 2) Almacenar el objeto nivel1 en una variable
// 3 Desestructurar las propiedades que no son objeto

let n1 = nivel0.nivel1;
console.log(n1);
let {prop_nivel1: pN1, otra_prop_nivel1: oPN1} = n1;
console.log({pN1});
console.log({oPN1});

// 4) Almacenar el objeto nivel2 en una variable
// 5) Desestructurar las propiedades que no son objeto
let n2 = nivel0.nivel1.nivel2;
console.log({n2})

let {prop_nivel2: pN2, otra_prop_nivel2: oPN2} = n2;
console.log({pN2});
console.log({oPN2});
