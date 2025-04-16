import { determinarDIM } from "./funciones/determinarDIM.js";
import { determinarSexo } from "./funciones/determinarSexo.js";
import { quitarBlancosYPonerEnMinusculas } from "./funciones/quitarBlancosYPonerEnMinusculas.js";

let fechaJS;
let diaCalendario;
let mesCalendario;

let sexoUsuario;
let importeCompra;

fechaJS = new Date();
diaCalendario = fechaJS.getDate();
mesCalendario = fechaJS.getMonth(); // 2 = marzo

console.log({fechaJS});
console.log({diaCalendario});
console.log({mesCalendario});

console.log("Dia y mes manual ----------------");
diaCalendario = 8;
mesCalendario = 2;
console.log({diaCalendario});
console.log({mesCalendario});

sexoUsuario = prompt("Eres mujer? [Si/No]");
console.log({sexoUsuario});

let resSexoUsuario = quitarBlancosYPonerEnMinusculas(sexoUsuario);
let sexoMujer = determinarSexo(resSexoUsuario);
console.log({sexoMujer});

let esDIM = determinarDIM(diaCalendario, mesCalendario);
//console.log({esDIM});

importeCompra = 100

if (esDIM && sexoMujer && importeCompra >= 100) {
  console.log("35%");
} else if (esDIM && !sexoMujer && importeCompra >= 100){
  console.log("15");
} else {
  console.log("10%");
}



