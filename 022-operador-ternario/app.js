let fecha;
let dia;
let horaActual;
let horaApertura;
let mensaje;;

const miObj = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado"
};

fecha = new Date();
console.log({fecha});

dia = fecha.getDay()  // 0: Domingo, 1: Lunes ...
console.log({dia});

horaActual = fecha.getHours();
console.log({horaActual});

/**
 * Forzando el día y hora
 */
dia = 4;
horaActual = 9;

/**
 * Determinar la hora apertura en función
 * de las reglas de negocio aplicadas a
 * los días de semana o de fin de semana
 */

/**
 * El siguiente ejemplo NO optimiza el proceso,
 * se pesigue dejar de forma explícita lo aprendido
 * hasta ahora
 * 
 * NOTA: El ELSE es totalmente innecesario ya que 
 *       los datos de día y hora se toman del 
 *       objeto de tipo DATE y no debe tener
 *       valores fuera de ramgo
 */

if (dia >= 1 && dia <= 5) {
  horaApertura = 11;
  console.log(`Día de semana ${miObj[dia]}`);

} else if (dia === 6 || dia === 0) {
  horaApertura = 9;
  console.log(`Día de fin de semana ${miObj[dia]}`);

} else {
  console.log("Ese día vienes tú (fuera de rango)");
}

/**
 * Establecer mensaje al usuario en función
 * de la hora de consulta y la hora de apertura
 * del día
 */
if (horaActual >= horaApertura) {
  console.log("Está abierto");
} else {
  console.log(`Hoy es ${miObj[dia]} y aún está cerrado, abrimos a las ${horaApertura}`);
}


/**
 * Optimizando la lógica
 */

dia = 5;
horaActual = 9;

//if ([0,6].includes(dia)) {
if (dia === 0 || dia === 6) {
  horaApertura = 9;
  console.log(`Día de fin de semana ${miObj[dia]}`);
} else {
  horaApertura = 11;
  console.log(`Día de semana ${miObj[dia]}`);
}

// Operador ternario con arreglos de días
horaApertura = ([0,6].includes(dia)) ? 9 : 11;
//                                   true false
//                                   (if) (else)

horaApertura = ([1,2,3,4,5].includes(dia)) ? 11 : 9;


/**
 * Operador ternario usando variables
 * para los días de semana y los de
 * fin de semana
 */
let diasSemana = [1,2,3,4,5];
let diasFinDeSemana = [6,0];

horaApertura = (diasSemana.includes(dia)) ? 11 : 9;
horaApertura = (diasFinDeSemana.includes(dia)) ? 9 : 11;

if (horaActual >= horaApertura) {
  console.log("Está abierto");
} else {
  console.log(`Hoy es ${miObj[dia]} y aún está cerrado, abrimos a las ${horaApertura}`);
}


/**
 * Operador ternario no almacenado en variable
 * ya que usa console.log() como sentencias tanto
 * en true como en false
 */

(horaActual >= horaApertura) ? console.log("Está abierto") : console.log(`Hoy es ${miObj[dia]} y aún está cerrado, abrimos a las ${horaApertura}`)


/**
 * Operador ternario  almacenado en variable
 */

mensaje = (horaActual >= horaApertura) ?  "Está abierto" : `Hoy es ${miObj[dia]} y aún está cerrado, abrimos a las ${horaApertura}`;

console.log({mensaje});


/**
 * Operador ternario almacenado en variable
 * utilizando mensajes en variables para simplificar
 * la lectura de códig
 */

let mensajeAbierto = "Está abierto";
let mensajeCerrado = `Hoy es ${miObj[dia]} y aún está cerrado, abrimos a las ${horaApertura}`;

mensaje = (horaActual >= horaApertura) ? mensajeAbierto : mensajeCerrado;

console.log(mensaje);

