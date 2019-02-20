//CLASE 17 - funciones y expresiones de funciones
                                      //funciones
function saludar(){
  console.log("Hi")
}

saludar();
//las funciones son objetos, un tipo especial. Por lo cual asi como se pasan
//variables por funciones como parametros, tambien se pueden pasar funciones:

function logSaludo(fn){
  fn();
}

logSaludo(saludar); //paso una funcion como parametro y con fn(); la ejecuto.
                                      //funcions expressions
var miSaludo = function(){
  console.log("Hola Nico");
}
miSaludo(); //aca estoy invocando mi funcion expresion
logSaludo(miSaludo)


//otro ejemplo de function expression. Callback
logSaludo(function(){
  console.log("Hola Lucas");
})

