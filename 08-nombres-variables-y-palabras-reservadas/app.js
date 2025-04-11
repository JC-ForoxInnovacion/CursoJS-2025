let reservedWords = `
 Palabras reservadas del lenguaje.
 =================================

Todas aquella palabras PROPIAS del lenguaje
  - let
  - const
  - function
  - class
  - async
  - await
  - ...

! NO UTILIZAR en nombres de variables y clases.
`;

console.log(reservedWords);

let variablesName = `
Reglas para nombres de variables
================================

1) PREFERENTEMENTE en Inglés
    nombre -> name

2) NO PUEDEN comenzar por un número
    1var = 30; (mal)

3) NO PUEDEN contener espacios en blanco
    mi nombre = "JC"; (mal)

4) NO PUEDEN/DEBEN contener un punto entre caracteres
    my.data = 30; (mal)

5) NO PUEDEN comenzar por un operador básico matemático (+, -, *, /)
    -data = 30; (mal)

6) NO DEBEN contener caracteres especiales, incluyendo acentos y eñe
    ñandú@Sexo? = 30; (mal)


7) NO DEBEN utizarse palabras reservadas del lenguaje
    await = 30;

8) PUEDEN ser creadas con cada una de las siguientes notaciones:
    - Snake case -> Guiones bajos
      my_fullname = "Juan Carlos Varela Iglesias"
    
    - Kebab case -> Guiones medios
      my-fullname = "Juan Carlos Varela Iglesias"

    - Camel case o Lower camel case:
       Primera palabra en minúsculas, todas las demás con primera letra en mayúsculas
        myFullname = "Juan Carlos Varela Iglesias"

    - Pascal case o Upper camel case:
       Todas las primeras letras de cada palabra en mayúsculas
        MyFullname = "Juan Carlos Varela Iglesias"

9) PUEDEN comenzar con guión bajo "_" (Underscore o Low dash)
    _data = 30;

10) PUEDEN CONTENER (después del primer caracter) un número
      my30data = 30;

11) PUEDEN estar declaradas CON TODAS LAS LETRAS EN MAYÚSCULAS
      En otros lenguajes de programación significa que es una CONSTANTE,
      en JS no es así.
        DATA = 30;
`;

console.log(variablesName);
