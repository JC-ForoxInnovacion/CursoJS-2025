import { sepCorto, sepLargo } from "./separadores.js";

/**
 * Desestructuración y/o Desempaquetado de objetos 
 * literales en JavaScript
 */

console.log("Sintaxis básica");
sepCorto();

let persona = {
  nombre: 'Ana',
  edad: 30,
  profesion: 'Ingeniero'
};

let { nombre, edad } = persona;

console.log({persona}, typeof persona); // "Ana"
console.log({nombre}, typeof(nombre)); // "Ana"
console.log({edad}, typeof(edad)); // 30

console.log("Cambio de nombre de variables (Alias)");
sepCorto()
let { nombre: nombrePersona, edad: anhos } = persona;
//    nombre : nombre variable
//  propiedad

console.log({nombrePersona}); // "Ana"
console.log({anhos}); // 30

console.log("Valores por defecto");
sepCorto();

let person = {
  name: 'Ana',
  age: 30,
  career: 'Ingeniero'
};

let { name , city = 'Desconocida' } = person;
console.log({city}); // "Desconocida"

console.log("Desestructuración en funciones");
sepCorto();

function saludar({ nombre, edad }) { // Aquí, en los parámetros, es dónde y
                                     // cuándo se realiza la desestructuración
  
  console.log({nombre});
  console.log({edad});
  console.log(`Hola ${nombre}, tienes ${edad} años.`);
}

saludar(persona); // Hola Ana, tienes 30 años.

console.log("Desestructuración con el operador rest");
sepCorto();

let { nombre: nombreIndividuo, ...resto } = persona;

console.log({nombreIndividuo}); // "Ana"
console.log({resto}); // { edad: 30, profesion: 'Ingeniero' }


console.log("Desestructuración anidada");
sepCorto();

let usuario = {
  id: 1,
  info: {
    login: 'Luis',
    correo: 'luis@email.com'
  }
};

let { info: { login, correo } } = usuario;
console.log({login}); // "Luis"

console.log("Desestructuración de array de objetos");
sepCorto();

let usuarios = [
  { id: 1, nombre: 'Alicia', rol: 'admin' },
  { id: 2, nombre: 'Roberto', rol: 'user' }
];

let [ { id, nombre: nombreObj1, rol }, { rol: rolObj2 } ] = usuarios;

console.log({nombreObj1}); // "Alicia"
console.log({rolObj2}); // "user"


console.log("Objeto con array y desestructuración interna");
sepCorto();

let producto = {
  nombre: 'Camiseta',
  tallas: ['S', 'M', 'L'],
  precio: 20
};

let { tallas: [primeraTalla, , terceraTalla] } = producto;
console.log({primeraTalla}); // "S"
console.log({terceraTalla}); // "L"


console.log("Desestructuración anidada profunda");
sepCorto()

let app = {
    config: {
      theme: {
        darkMode: true,
        colores: {
          fondo: '#000',
          texto: '#fff'
        }
      },
      version: '1.0.0'
    }
  };

let { config: { theme: { colores: { texto } } } } = app;
console.log(texto); // "#fff"

sepCorto();

for (const key in app.config.theme.colores) {
  console.log(key);
  if (key === "texto") {
    console.log(app.config.theme.colores[key]);
    break;
  }
}

sepCorto()
let colores = app.config.theme.colores;
console.log({colores});

for (const key in colores) {
  console.log(key);
  if (key === "texto") {
    console.log(app.config.theme.colores[key]);
    break;
  }
}


console.log("Desestructuración en parámetros de funciones + alias + valores por defecto");
sepCorto();

usuario = {
  id: 1,
  nombre: 'Luis',
  correo: 'luis@email.com',
  ciudad: 'Sevilla'
};

function mostrarUsuario({ nombre, edad = 18, ciudad: ciudadResidencia = 'Madrid' }) {
console.log(`${nombre} tiene ${edad} años y vive en ${ciudadResidencia}`);
}
mostrarUsuario(usuario);
// Luis tiene 18 años y vive en Sevilla


console.log("Desestructuración con objetos dentro de arrays y arrays dentro de objetos");
sepCorto();

let tienda = {
  nombre: 'TechShop',
  categorias: [
    {
      nombre: 'Electrónica',

      productos: [
        {
          nombre: 'TV',
          precio: 500
        },

        {
          nombre: 'Auriculares',
          precio: 80
        }
      ]
    },
    {
      nombre: 'Ferretería',

      productos: [
        {
          nombre: 'Martillo',
          precio: 10
        },

        {
          nombre: 'Destornillador',
          precio: 5
        }
      ]
    },
  ]
};

// let { categorias: [ { productos: [ , { nombre: segundoProducto, precio } ] }, ] } = tienda;

let { 
  categorias: [ 
    { 
      productos: [ 
        , 
        { nombre: segundoProducto, precio } 
      ] 
    }, 
  ] 
} = tienda;


console.log(segundoProducto, precio); // "Auriculares"


let {nombre: nombreProducto, precio: precioProducto} = tienda.categorias[0].productos[1];

console.log({nombreProducto});
console.log({precioProducto});