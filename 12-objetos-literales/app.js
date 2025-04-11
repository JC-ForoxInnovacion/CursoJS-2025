function sep() {
  console.log("===============================");
}

console.log("Objeto literal en JS");
sep();

let obj = {
  clave: "Valor"
}

console.log({obj});

console.log(obj.clave);



console.log("La familia de JC");
sep();

let familiaJC = {
  yo: {
    estaVivo: true,
    sexo: "M",
    nombre: "Juan Carlos",
    primerApellido: "Varela",
    segundoApellido: "Iglesias"
  },

  tieneProgenitores: true,

  progenitores: {
    tienePadre: true,
    tieneMadre: true,
    personas: [
      {
        parentesco: "padre",
        biologico: true,
        estaVivo: false,
        sexo: "M",
        nombre: "Carlos",
        primerApellido: "Varela",
        segundoApellido: "González"
      }, 
      
      {
        parentesco: "madre",
        biologico: true,
        estaVivo: false,
        sexo: "F",
        nombre: "Olga",
        primerApellido: "Iglesias",
        segundoApellido: "Ferreiro"
      }  
    ],
  },

  tieneHermanos: true,

  hermanos: {

    personas: [
      {
        parentesco: "hermano",
        biologico: true,
        estaVivo: false,
        sexo: "F",
        nombre: "Tita",
        primerApellido: "Varela",
        segundoApellido: "Iglesias",
        estaSoltero: false,
        conyuge: [
          {
            parentesco: "conyuge",
            enActivo: true,
            biologico: true,
            estaVivo: false,
            sexo: "M",
            nombre: "Nelson",
            primerApellido: "Añez",
            segundoApellido: "Arellano"
          }
        ],
        tieneHijos: true,
        hijos: [
          {
            parentesco: "sobrino",
            biologico: true,
            estaVivo: true,
            sexo: "M",
            nombre: "Nelson",
            primerApellido: "Añez",
            segundoApellido: "Varela",
            estaSoltero: false,
            conyuge: [
              {
                parentesco: "conyuge",
                enActivo: false,
                biologico: true,
                estaVivo: true,
                sexo: "F",
                nombre: "Chica",
                primerApellido: "X",
                segundoApellido: "Y",
                // ...
              },
              {
                parentesco: "conyuge",
                enActivo: true,
                biologico: true,
                estaVivo: true,
                sexo: "F",
                nombre: "Diana",
                primerApellido: "Lugo",
                segundoApellido: "Contreras"
              }
            ],
          }, 
          {
            // Erick
          }
        ]
      },
      {
        parentesco: "yo",
        biologico: true,
        estaVivo: false,
        sexo: "M",
        nombre: "Juan Carlos",
        primerApellido: "Varela",
        segundoApellido: "Iglesias",
        estaSoltero: false,
        conyuge: [
          {
            parentesco: "conyuge",
            enActivo: true,
            biologico: true,
            estaVivo: false,
            sexo: "F",
            nombre: "Carmen",
            primerApellido: "Díaz",
            segundoApellido: "Aponte"
          }
        ],
        tieneHijos: false,
        hijos: []
      }
    ]
  }
}

console.log(familiaJC);
console.log(familiaJC.yo); // <- notación de puntos
console.log(familiaJC['yo']); // <- notación de corchetes
console.log(familiaJC['hermanos'].personas[1]); // <- notación mixta


console.log("Más acerca de objetos");
sep();

let persona = {
  nombre: "María del Rosario Cayetana Paloma Alfonsa Victoria Eugenia Fernanda Teresa Francisca de Paula Lourdes Antonia Josefa Fausta Rita Castor Dorotea Santa Esperanza", 
  apellidos: "Fitz-James Stuart y de Silva",
  fecNac : {
    dia: 28,
    mes: 3, 
    anho: 1926
  },
  ciudadNac: "Madrid",
  provinciaNac: "Madrid"
}

console.log(persona);


console.log("Crear una dinámicamente una propiedad en el objeto");
sep();

ciuNac = 'Madrid';
provNac = 'Madrid';
ccAANac = 'Madrid';


persona.lugarNac = {}; // Crear la nueva propiedad (en este caso un objeto)
persona.lugarNac.ciudadNac = ciuNac,    // Crear la nueva propiedad
persona.lugarNac.provinciaNac = provNac, // Crear la nueva propiedad
persona.lugarNac.ccAANac = ccAANac,      // Crear la nueva propiedad

console.log(persona);


console.log("Eliminar una propiedad (existentes)");
sep();

delete persona.ciudadNac;

console.log(persona);


console.log("Transformar un objeto en arreglos clave: Valor");

entriesPares = Object.entries(persona);
console.log(entriesPares);


console.log(`Si defines un objeto con const, el objeto como tal no puede
ser modificado`);
sep();

const miObj = {
  edad: 25
}
console.log(miObj);

// miObj = {
  // nombre: "Luis"
// }


console.log(`Es posible modificar una propiedad aunque sea declarado
el objeto como una constante`);

miObj.edad = 28;
console.log(miObj);



console.log(`Podemos crear un objeto en el método .freeze() o pasar como 
parámetro un objeto existente`);

let animal = Object.freeze({
  nombre: "Firulais",
  colorPelo: ["negro", "blanco", "marrón"]
})
console.log(animal);

animal.nombre = "Félix";

console.log(animal);



console.log('.freeze "congela" las propiedades de primer nivel');
console.log("cambiamos propiedades del arreglo");
sep();


animal.colorPelo[0] = "verde";
animal.colorPelo.push("violeta")
console.log(animal);



console.log("Para congelar una propiedad en especial .freeze(objeto.propiedad)");
sep();

Object.freeze(animal.colorPelo);
animal.colorPelo[0] = "lila";
console.log(animal);


console.log("Listar las propiedades de un objeto.");
sep();

const tiposDeDatos = {
  numero: 42,                 // Número (tipo primitivo)
  texto: "Hola, mundo",       // Cadena de texto (string)
  booleano: true,             // Booleano (true o false)
  arreglo: [1, 2, 3, 4],      // Arreglo (array)
  objeto: { clave: "valor" }, // Objeto (puede tener otras propiedades dentro)
  funcion: function() {      // Función (puede ser una función anónima o nombrada)
    return "Soy una función";
  },
  nulo: null,                 // Nulo (representa la ausencia de valor)
  indefinido: undefined,      // Indefinido (variable no inicializada)
  simbolo: Symbol('simbolo'), // Símbolo (único e inmutable)
  fecha: new Date()           // Fecha (instancia de Date)
};

console.log(tiposDeDatos);

let objPropiedades = Object.getOwnPropertyNames(tiposDeDatos)
console.log(objPropiedades);

let objDescripciones = Object.getOwnPropertyDescriptors(tiposDeDatos)
console.log(objDescripciones);

let objDescripcion = Object.getOwnPropertyDescriptor(tiposDeDatos, 'booleano')
console.log({objDescripcion});

let res =  objPropiedades.indexOf('booleano');
console.log(res);

let objValores = Object.values(tiposDeDatos)
console.log(objValores);
