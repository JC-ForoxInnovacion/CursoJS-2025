// alert() retorna undefined

alert("Hola desde JS");
let resAlert = alert("Hola desde alert");
console.log({resAlert});

/* alert() retorna undefined
{resAlert: undefined}
  resAlert: undefined
  [[Prototype]]: Object
*/


// prompt()
//    Todo lo que se ingresa será almacenado en tipo string
//    Retorna:
//        a) Un string (vacío o no) -> Botón ACEPTAR
//        b) null                   -> Botón CANCELAR    

prompt("Dime tu nombre:")
resPrompt = prompt("Dime tu nombre desde prompt:")
console.log({resPrompt}, typeof(resPrompt));


// cofirm()
//    Retorna:
//        a) true  -> Botón ACEPTAR
//        b) false -> Botón CANCELAR    
confirm();
confirm("¿Confirmas?");
resConfirm = confirm("¿Confirmas de nuevo?");
console.log({resConfirm}, typeof(resConfirm), resConfirm.length);


// alert, prompt y confirm son métodos del objeto window

console.log("window.alert():", window.alert, typeof(window.alert))

console.log("window.prompt():", window.prompt, typeof(window.prompt))

console.log("window.confirm():", window.confirm, typeof(window.confirm))