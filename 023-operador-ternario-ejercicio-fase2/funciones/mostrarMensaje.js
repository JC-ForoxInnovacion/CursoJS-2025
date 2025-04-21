export function mostrarMensaje(descuento, importeCompra){
  switch (descuento) {
    case 35:
      console.log(`Felicidades en Día Internacional de la mujer por tu compra de ${importeCompra} € has obtenido el ${descuento}% de descuento`);
      break;
    case 15:
      console.log(`Celebramos el Día Internacional de la mujer con un ${descuento}% de descuento por tu compra de ${importeCompra} €`);
      break;
    case 10:
      console.log(`Por tu compra de ${importeCompra} € has obtenido el ${descuento}% de descuento`);
      break;
    default:
      console.log(`Tu compra asciende a ${importeCompra} €`);
      break;
  }

}





