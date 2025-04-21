export function calcularDescuento(esDIM, sexoMujer, importeCompra, importeMinimo) {
  if (esDIM && sexoMujer && importeCompra >= importeMinimo) {
    return 35;
  } else if (esDIM && !sexoMujer && importeCompra >= importeMinimo){
    return 15;
  } else if (!esDIM && importeCompra >= importeMinimo) {
    return 10;
  } else {
    return 0;
  }
}