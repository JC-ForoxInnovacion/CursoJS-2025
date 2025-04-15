let fecha, dia, horaActual, horaApertura, mensaje;

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
horaActual = 11;

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
  console.log("Días de semana");
  horaApertura = 11;
} else if (dia === 6 || dia === 0) {
  console.log("Días de fin de semana");
  horaApertura = 9;
} else {
  console.log("Ese dia vienes tú (fuera de rango)");
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



