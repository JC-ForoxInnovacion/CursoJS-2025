export function obtenerFecha() {
  let fechaJS = new Date();
  return {
    diaCalendario: fechaJS.getDate(),
    mesCalendario: fechaJS.getMonth() // 2 = marzo
  }

  // console.log({fechaJS});
  // console.log({diaCalendario});
  // console.log({mesCalendario});
  
}
