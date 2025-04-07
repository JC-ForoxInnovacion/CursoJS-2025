// Declaración de arrays

const myArr = new Array(10);

console.log(myArr);

/**
 * (10) [vacío × 10]
 * length : 10
 */

let myNewEmptyArray = [];
console.log(myNewEmptyArray);

let elem = 333;
let arrNum = Array(elem); //Casting num -> array
console.log("elem:", elem);
console.log("arrNum:", arrNum, "arrNum.length", arrNum.length);

/**
 * elem: 333
 *
 * arrNum: (333) [vacío × 333]
 */

elem = "Esto es un string";
let arrStr = Array(elem); //Casting string -> array
console.log("elem:", elem);
console.log("arrStr:", arrStr, "arrStr.length", arrStr.length);

/**
 * elem: Esto es un string
 *
 * arrStr: ['Esto es un string'] length 1
 */

elem = true;
let arrBool = Array(elem); //Casting booleano -> array
console.log("elem:", elem);
console.log("arrBool:", arrBool, "arrBool.length", arrBool.length);

/**
 * elem: true
 *
 * arrBool: [true] arrBool.length 1
 */

elem = [
  0,
  true,
  "patata",
  null,
  undefined,
  ["x", "y", "z"],
  { clave: "Valor" },
];

let arrArray = Array(elem); //Casting booleano -> array
console.log("elem:", elem);
console.log("arrArray:", arrArray, "arrArray.length", arrArray.length);

/**
 * elem: (7) [0, true, 'patata', null, undefined, Array(3), {…}]
 *
 * arrArray: [Array(7)] 0: (7) [0, true, 'patata', null, undefined, Array(3), {…}],  * arrArray.length 1
 */

elem = { claveX: "ValorY" };
let arrObj = Array(elem); //Casting booleano -> array
console.log("elem:", elem);
console.log("arrObj:", arrObj, "arrObj.length", arrObj.length);

/**
 * elem: {claveX: 'ValorY'}
 *
 * arrObj: [{…}] arrObj.length 1
 */

/**
 * Crea una matrz de 4 x 4
 * Muestra:
 *  f2c2
 *  f4c1
 *  f3c3
 *  f1c4
 */

let myMatrix = [
  ["A0", "A1", "A2", "A3"],
  ["B0", "B1", "B2", "B3"],
  ["C0", "C1", "C2", "C3"],
  ["D0", "D1", "D2", "D3"],
];
console.log({ myMatrix });
console.log("f2c2:", myMatrix[1][1]);
console.log("f4c1:", myMatrix[3][0]);
console.log("f3c3:", myMatrix[2][2]);
console.log("f1c4:", myMatrix[0][3]);

let myMatrix2 = [
  [[[["A0000", "A0001"], "A001"], "A01"], "A1", "A2", "A3"],
  ["B0", "B1", "B2", "B3"],
  ["C0", "C1", "C2", "C3"],
  ["D0", "D1", "D2", "D3"],
];

console.log(myMatrix2[0]);
console.log(myMatrix2[0][0]);
console.log(myMatrix2[0][0][0]);
console.log(myMatrix2[0][0][0][0]);
console.log(myMatrix2[0][0][0][0][1]);
