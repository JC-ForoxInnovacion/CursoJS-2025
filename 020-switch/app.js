function sep() {
  console.log("===============================");
}

console.log("SOLUCION con IF");
sep()

let fecha = new Date;
console.log(fecha);

let dia = fecha.getDate();
console.log(dia);

let mes = fecha.getMonth(); // 0 - Enero
console.log(mes);

let anho1 = fecha.getYear(); // Resuelve el problema del año 2000
                             // investiga un poco más :)
console.log(anho1);

let anho2 = fecha.getFullYear();
console.log(anho2);

console.log("SOLUCION con IF");
sep();

let diaSem = fecha.getDay(); // 0 - Domingo
console.log(diaSem);

// diaSem = 1000;  // Simula una posicón fuera del arreglo de días de la semana 
                  // (salida por el ELSE)

const arrDiasSem = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function mensajeOK(dia, arrDias) {
  console.log({dia}, arrDias[dia]);
}

const mensajeERROR = (dia, arrDias) => {
  console.log({dia}, arrDias[dia], "Este valor no es válido ");
}

if (diaSem === 0) {
    mensajeOK(diaSem, arrDiasSem);
} else if (diaSem === 1) {
    mensajeOK(diaSem, arrDiasSem);
} else if (diaSem === 2) {
    mensajeOK(diaSem, arrDiasSem);
} else if (diaSem === 3) {
    mensajeOK(diaSem, arrDiasSem);
} else if (diaSem === 4) {
    mensajeOK(diaSem, arrDiasSem);
} else if (diaSem === 5) {
    mensajeOK(diaSem, arrDiasSem);
} else if (diaSem === 6) {
    mensajeOK(diaSem, arrDiasSem);
} else {
    mensajeERROR(diaSem, arrDiasSem);;
}



console.log("SOLUCIÓN con SWITCH");
sep();

// diaSem = 1000;  // Simula una posicón fuera del arreglo de días de la semana 
                  // (salida por el DEFAULT)


switch (diaSem) {
  case 0:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  case 1:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  case 2:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  case 3:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  case 4:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  case 5:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  case 6:
    console.log({diaSem}, arrDiasSem[diaSem]);
    break;
  default:
    console.log("Esto es el default");
    break;
}


const miNum = 5; // CASO 7 IF - anidado

/**
 * ! Según JC este es el camino del NO
 * - Se esperan datos numéricos
 * - ¿Por qué empezar a evaluar si NO son numéricos?
 * Propuesta ChatGPT: 
 */

if (typeof miNum !== 'number') {
  console.log(`${miNum} NO es un número`);
} else {
  console.log("Evaluado en el ELSE");
  switch (true) {
    case miNum < 5:
      console.log(`${miNum} < 5`);
      break;
    case miNum > 5:
      console.log(`${miNum} > 5`);
      break;
    case miNum === 5:
      console.log(`${miNum} = 5`);
      break;
  }
}

/**
 * ~ Según JC este es el camino del SI
 * La propuesta de JC:
 */

if (typeof miNum === 'number') {
  console.log("Evaluado en el IF");
  switch (true) {
    case miNum < 5:
      console.log(`${miNum} < 5`);
      break;
    case miNum > 5:
      console.log(`${miNum} > 5`);
      break;
    case miNum === 5:
      console.log(`${miNum} = 5`);
      break;
  }
} else {
  console.log(`${miNum} NO es un número`);
}

/**
 * Al preguntar a la IA acerca del por qué de su 
 * respuesta y tras efectuar la comparación de 
 * ambas, concluye:
 * 
 * ¡Tienes toda la razón!
 * Esa versión que propones es más limpia, más lógica y sigue el orden natural 
 * de evaluación: "Si es un número, evalúalo; si no, lanza error".
 *
 * Mi versión anterior, que primero verifica typeof !== 'number' 
 * y mete el switch en el else, es funcional pero:
 * 
 *    Introduce negación lógica innecesaria (!== en vez de ===)
 *
 *    Mete la lógica principal dentro de un else, lo cual añade 
 *    anidación innecesaria
 * 
 *    Hace que el lector tenga que “desenrollar” mentalmente la lógica
 */


console.log("SOLUCIÓN con OBJETOS");
sep();

diaSem = fecha.getDay(); // 0 - Domingo
// diaSem = 1000;  // Simula una posicón fuera del arreglo de días de la semana 

const miObj = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado"
};

// el OR SI funciona.
console.log( miObj[diaSem] || "Este día no existe" );

// el OR no funciona, por qué???
console.log(`Hoy es ${miObj[diaSem]}` || "Este día no existe" );

