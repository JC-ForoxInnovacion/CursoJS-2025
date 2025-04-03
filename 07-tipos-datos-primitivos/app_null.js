function sep() {
  return "==============================="
}

console.log("******* Null");
console.log(sep());

let myNull = null;
console.log("typeof:", typeof myNull); // forma 1
console.log("typeof:", typeof(myNull)); // forma 2, como un método al que se le pasa como parámetro la variable myNull

let myRes = Boolean(myNull);
console.log("Boolean <= null:", myRes, "typeof:", typeof myRes);

myRes = Number(myNull);
console.log("Number <= null:", myRes, "typeof:", typeof myRes);

myRes = String(myNull);
console.log("String <= null:", myRes, "typeof:", typeof myRes);

myRes = Symbol(myNull);
console.log("Symbol <= null:", myRes, "typeof:", typeof myRes);

myRes = (0 == null)
console.log("0 == null:", myRes);

myRes = (0 === null)
console.log("0 === null:", myRes);


// ¿Cómo, dónde y cuándo usar null?
// Continuará ...