export function quitarBlancosYPonerEnMinusculas(texto) {
  texto = texto.trim().toLowerCase();
  texto = texto.slice(0,2);
  return texto;
}