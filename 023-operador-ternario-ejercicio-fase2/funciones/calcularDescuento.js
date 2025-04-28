export function calcularDescuento(esDIM, sexoMujer, requisitoImporteMinimo) {
  if (esDIM && sexoMujer && requisitoImporteMinimo) {
    return 35;
  } else if (esDIM && !sexoMujer && requisitoImporteMinimo){
    return 15;
  } else if (!esDIM && requisitoImporteMinimo) {
    return 10;
  } else {
    return 0;
  }
}