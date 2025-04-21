import { obtenerFecha } from "./funciones/obtenerFecha.js";
import { determinarDIM } from "./funciones/determinarDIM.js";
import { determinarSexo } from "./funciones/determinarSexo.js";
import { quitarBlancosYPonerEnMinusculas } from "./funciones/quitarBlancosYPonerEnMinusculas.js";
import { calcularDescuento } from "./funciones/calcularDescuento.js";
import { mostrarMensaje } from "./funciones/mostrarMensaje.js";

let fecha;
let diaCalendario;
let mesCalendario;

let sexoUsuario;
let sexoMujer;

let descuento;
let importeCompra;
let importeCompraMinimaEnDIM = 100;
let importeCompraMinima = 150;

fecha = obtenerFecha()
// fecha: {diaCalendario: 21, mesCalendario: 3}
diaCalendario = fecha.diaCalendario;
mesCalendario = fecha.mesCalendario;
console.log("Dia y mes manual ----------------");
// diaCalendario = 8;
// mesCalendario = 2;
console.log({diaCalendario});
console.log({mesCalendario});

let esDIM = determinarDIM(diaCalendario, mesCalendario);
//console.log({esDIM});

importeCompra = 150;

if (esDIM) {
  sexoUsuario = prompt("Eres mujer? [Si/No]");
  console.log({sexoUsuario});

  sexoUsuario = quitarBlancosYPonerEnMinusculas(sexoUsuario);
  sexoMujer = determinarSexo(sexoUsuario);
  console.log({sexoMujer});

  descuento = calcularDescuento(esDIM, sexoMujer, importeCompra, importeCompraMinimaEnDIM);
} else {
  descuento = calcularDescuento(esDIM, sexoMujer, importeCompra, importeCompraMinima);
}

mostrarMensaje(descuento, importeCompra);