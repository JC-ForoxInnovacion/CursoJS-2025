function sep() {
  return "==============================="
}

console.log("******* Numbers");
console.log(sep());

// Cero
let myNumber = 0
console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

// - Cero
// Standars IEEE 754 para representar números de punto flotante en el rango de los positivos y negativos.

myNumber = -0
console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

// Positivos
myNumber = 7;
console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

myNumber = 700.700007;
console.log("myNumber:", myNumber, "typeof:", typeof myNumber);


// Negativos
myNumber = -5005;
console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

myNumber = -5.5;
console.log("myNumber:", myNumber, "typeof:", typeof myNumber);

// binarios
myNumber = 0b1010;
console.log("myNumber (binario):", myNumber, "typeof:", typeof myNumber);

myNumber = 33 + 0b1; // puede realizar suma directamente de un decimales con binarios

myNumber = parseInt(myNumber)
console.log("myNumber (binario):", myNumber, "typeof:", typeof myNumber);

myNumber = 0b1010 + "mamá";
console.log("myNumber (binario):", myNumber, "typeof:", typeof myNumber);

myNumber = 0b1010 + null;
console.log("myNumber (binario):", myNumber, "typeof:", typeof myNumber);

myNumber = 0b1010 + undefined;
console.log("myNumber (binario):", myNumber, "typeof:", typeof myNumber);

// octal
myNumber = 0o12;
console.log("myNumber (octal):", myNumber, "typeof:", typeof myNumber);

// hexadecimal

myNumber = 0x000000;
console.log("myNumber (hexadecimal):", myNumber, "typeof:", typeof myNumber);