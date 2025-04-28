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

function determinarDIM(dia, mes) {
  // if (dia === 8 && mes === 2) {
  //   // console.log("DIM");
  //   return true
  // } else {
  //   // console.log("No es el DIM");
  //   return false
  // }

  return (dia === 8 && mes === 2) ? true : false;
  //return (condición) ? true : false;
}

function quitarBlancosYPonerEnMinusculas(texto) {
    texto = texto.trim().toLowerCase();
    texto = texto.slice(0,2);
    return texto;
}

function determinarSexo(sexo) {
  // if (sexo === 'si') {
  //   // console.log("Presuntamente es mujer");
  //   return true;
  // } else {
  //   // console.log("Presuntamente NO es mujer");
  //   return false;
  // }
  return (sexo === 'si') ? true : false; 
  //return (condición) ? true : false;
}

sexoUsuario = prompt("Eres mujer? [Si/No]");
console.log({sexoUsuario});

let resSexoUsuario = quitarBlancosYPonerEnMinusculas(sexoUsuario);
sexoMujer = determinarSexo(resSexoUsuario);
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



