let a = 10;
let b = 15;
let c = 20;
let d = 25;

// Impresión individual de variable
console.log('console.log()');
console.info('console.info()');
console.warn('console.warn()');
console.error('console.error()');

// Impresión de diferentes objetos SEPARADOS por ","
// Al separar con comas se agrega un espacio en blanco entre elementos

console.log('a:', a);
console.info('b:', b);
console.warn('c:', c);
console.error('d:', d);

// Concatenación (+)
console.log('a:' + a); // -> a10 Conversión implícita de JS
console.log('a:' + String(a)); // -> a10


// Casting
console.log("typeof(b):", typeof(b), b);

b = String(b);  // <- Casting (cambio de tipo de dato de forma explícita)

console.log("typeof(b):", typeof(b), b);

// Ya que b ahora es string puedo concatenarlo con otro string - SIN la conversión automática (implícita) de Javascript
console.log("Concatenando:" + b + "Esta variable antes era numérica"); // Genera un string con todos los elementos a concatenar

console.log("Separando con ',':" , b , "Esta variable antes era numérica"); 


// Mostrar las variables como un objeto con su respectivo par "clave: valor"
console.log('%c Mis variables -> objeto', 'color: orange'); // %c indica que se va insertar CSS

console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });

// console.table([arreglo])
// Muesta el índice de cada elemento en la primera columna de la tabla
console.table([a, b, c, d]);

// console.table({objeto})
// Muesta la clave cada item del objeto en la primera columna de la tabla

// {clave: valor} <- item

console.table({a, b, c, d});


// Separadores de texto para concatenaciones:
// Ya que en JS se estila poner en mayúsculas las constantes de ENTORNO, creamos una nomenclatura propia:
//K_NOMBRECONSTANTE
let ciudad = "Vigo";
let provincia = "Pontevedra";
const K_SPC = " ";
const K_MDASH = "-";
const K_LDASH = "_";
const K_PIPE = "|";

console.log(ciudad + " " + provincia); // <- hard code
console.log(ciudad + K_SPC + provincia);
console.log(ciudad + K_MDASH + provincia);
console.log(ciudad + K_LDASH + provincia);
console.log(ciudad + K_PIPE + provincia);
