function sep() {
  console.log("===============================");
}

console.log("Longitud de un arreglo");
console.log("arr.length");
sep();

let arr = ["e1", "e2", "e3"];
console.log("arr:", arr, "arr.length:", arr.length);

console.log("Primer y último elemento del arr");
sep();

let primero = arr[0];
let ultimo = arr[arr.length - 1];

// Observa el comportamiento con los booleanos
// ultimo = arr[true];
// ultimo = arr[Number(true)];

// num = 555;
// ultimo = arr[Number(Boolean(num))];

console.log({ primero, ultimo });

console.log("Recorriendo el arreglo con .forEach()");
sep();

arr = [0, 1, 2, 3];

arr.forEach((element, index, array) => {
  console.log({ element, index, array });
});

// Recorrer el array con .forEach() y una función nombrada
// Crear un nuevo arreglo con el cálculo del doble de cada
// elemento del arreglo original

let arrDoble = [];

arr.forEach(function funcionCallback(element, index, array) {
  console.log({ element, index, array });

  arrDoble.push(element * 2);
});

console.log({ arrDoble });

// Recorrer un arreglo y calcular el triple de cada uno de sus
// elementos y almacenarlos en un nuevo arreglo

arr = [3, 6, 9, 12, 15];

arrTriple = new Array(0);

console.log({ arrTriple });

console.log("ACULULADOR con .forEach()");
sep();
// Sumar los elementos de una array reorriéndolo con.forEach() y
// utilizando un ACUMULADOR

// let acum = null; <- otra posibilidad de inicialización
let acum = 0;
arr.forEach((e, i, arr) => {
  acum = acum + e;
});
let suma = acum;
console.log(suma);

console.log("Añadir elementos al final de un array .push()");
sep();
// Añadir elementos a un array .push()
// (method) Array<string>.push(...items: string[]): number
//                                ↑
//                         operador rest y puede recibir uno o más
//                         elementos

arr = [];
console.log({ arr });
arr.push(7);
console.log({ arr });

arr.push(11, true, "manzana", ["a", 123, false], { clave: "Valor" });
console.log({ arr });



console.log("Añadir elementos al inicio de un array .unshift()");
sep();
// Añadir elementos a un array .unshift()
// (method) Array<string>.unshift(...items: string[]): number
//                                 ↑
//                    operador rest y puede recibir uno o más
//                    elementos

arr = [0];
console.log({ arr });
arr.unshift(-1);
console.log({ arr });

arr.unshift(-5, -4, -3, -2);
console.log({ arr });



console.log("Eliminar el último elemento de un array .pop()");
sep();

arr = [1, 2, 3, 4];
console.log({ arr });

arr.pop();
console.log({ arr });

let popElement = arr.pop();
console.log({ arr });
console.log({ popElement });



console.log(
  "Eliminar el último elemento de un array .pop(), almacenando valores eliminados"
);
sep();

arr = [1, 18, 37, 42, 52, 61, 93];
console.log({ arr });

let arrLength = arr.length;
console.log({ arrLength });



console.log("Eliminar el primer elemento de un arreglo");
sep();

arr = [0, 1, 2, 3];
console.log("arr:", arr);

let elemEliminado = arr.shift();
console.log("arr:", arr);
console.log({ elemEliminado });



console.log("Recorriendo el arreglo desde el primer elemento hasta el último");
for (let index = 0; index < arrLength; index++) {
  console.log(index, ":", arr[index]);
}



console.log("Recorriendo el arreglo desde el último elemento hasta el primero");
let arrPar = [];
let arrImpar = [];

for (let index = arrLength - 1; index >= 0; index--) {
  console.log(index, ":", arr[index]);

  if (arr[index] % 2 == 0) {
    // Es par
    arrPar.push(arr.pop());
  } else {
    // Impar
    arrImpar.push(arr.pop());
  }
}

console.log({ arr, arrPar, arrImpar });



console.log(
  "Eliminar uno o varios elementos a partir de un índice determinado"
);
sep();

arr = ["cero", "primero", "segundo", "tercero", "cuarto", "quinto"];
console.log("arr:", arr);

let index = 1;
let cantidad = 2;

let elementosEliminados = arr.splice(index, cantidad);
console.log("arr:", arr);

console.log({ elementosEliminados });



console.log("Obtener el índice de un elemento");
sep();

arr = ["A Coruña", "Lugo", "Ourense", "Pontevedra", null];

let elem = "Pontevedra";
let elemIndex = arr.indexOf(elem);

console.log({ elemIndex });

elem = "Madrid";
elemIndex = arr.indexOf(elem); // <- -1 porque no existe
console.log({ elemIndex });

elem = arr[7];
console.log({ elem });
elemIndex = arr.indexOf(elem); // <- -1 porque no existe
console.log({ elemIndex });


console.log("Extraer elementos de un array a otro array .slice()");

arr = ['Ana', 'Laura', 'Maria', 'Carmen', 'Lucía', 'Elena', 'Marta', 'Sofía', 'Raquel', 'Isabel'];
console.log({arr});

let newArr = arr.slice(0, 3); // <- desde el 0 hasta el 2 (no se incluye el 3)

newArr = arr.slice(0); // <- Todo el array ya que no se especifica el fin

// Puedes utilizar índices negativos
// El último elemento del array será -1, 
// El primer elemento del array  será 0 ó -X 
//                              X será la longitud del arreglo

newArr = arr.slice(0, -9);    //
newArr = arr.slice(-10, -9);  //

console.log({newArr});

console.log("Convertir un string en array para utilizar índices negativos con .slice()");
sep();

let quixote = `Capítulo I
Que trata de la condición y ejercicio del famoso hidalgo don Quijote de la Mancha

En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que deste caso escriben; aunque por conjeturas verosímiles se deja entender que se llamaba Quijana. Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad.`

console.log({quixote});

let quixoteLength = quixote.length;

console.log({quixoteLength});

let quixoteArr = [];

for (let i = 0; i < quixoteLength; i++) {
  quixoteArr.push(quixote[i])
}

console.log({quixoteArr});

let subArr = quixoteArr.slice(-128-1, -1);

console.log({subArr});


