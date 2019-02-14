/*												SECCION 2


												CLASE 6
Jerarquia de lenguajes que hubieron. Lenguaje de maquina --> languaje assembler --> C/C++ --> Javascript

C/C++(tienen un control inferior a javascript, mas cerca del microprocesador)
Con javascript(nivel alto de programacion) estas lejos del microprocesador no manejas cosas como 
donde esta la memoria y que esta haciendo, tenemos un motor entre el programador y el procesador 
que hace estas cosas por nosotros. 
NodeJS es escrito en C++, pero dentro de node se programa en javascript. Esto es porque V8 el motor de 
javascript esta escrito en C++(V8 convierte de javaScript a codigo de maquina)
*/


/*
												CLASE 7
ECMASCRIPT: Estandar en e que se basa javascript. Es un estandar para una forma de trabajo en la que se
basa javascript.(V8 es uno de los tantos motores que hay pero todos se basan en el estandard de ecmascript)
Muchas empresas empezaron a crear sus propios motores y con ecmascript se llego a un estandard de javascript
entre todos esos motores.

Motor javascript --> convierte JV en codigo que la maquina entiende y respeta ecmascript. V8 es uno de los
motores de node js.
*/



/*
												CLASE 8
V8 es usado en google chrome. Es software abierto que se puede clonar.		

*/

/*												CLASE 9

puedo poner V8 dentro de mi programa C++ y usarlo. Puedo escribir codigo en C++, que tome javascript de otros desarrolladres y ejecutarloa  traves de V8.
V* crea para mi codigo que ejecutara en el procesador. V8 toma JS, lo interpreta, lo compila. Javascript fue disenado para trabajar en el navegador, 
c++ tiene muchas mas caracteristicas que javascript, C++ lidea con operaciones de bajo nive como archivos y carpetas del disco rigido, o conexiones 
con la base de datos(operaciones mas cerca del procesador.)

shell --print_code --> Comando para ver ese codigo de maquina de la linea de JS que escribiste
Ejemplo practico: Escribo var a = 1: y lo reconoce este JS porque lo ejecuta a traves del motor V8.  Si pongo print('hello') v8 no lo conoce
asique estoy mandando este print a c++ que luego ira al V8. En C++ he definido una funcion de impresion y le dije a v8 cuando veas un print ejecuta 
este pedazo de codigo de c++(que no era de v8)

*/

/*												CLASE 9
Sección 3

Clase 10

cliente y servidor

NodeJS trabaja del lado del servidor


Servidor: brinda servicios

Cliente: solicita servicios



Cuadro genérico

______ Request     ______
Client| --------> |Server|
______| <-------- |______|
       Response

Las comunicaciones se hacen en formato estándar


Cuadro de internet

_________  HTTP Request     ____________
Navegador| --------------> |Servidor Web|
_________| <-------------- |____________|
           HTTP Response



La idea de crear NodeJS surgio para permitir que
el código ejecutado en el navegador y en el servidor
se puede escribir usando un solo lenguaje (JavaScript).

JavaScript se basa en la especificación ECMAScript.
Hay que tener en cuenta que a JavaScript se le agregaron
funcionalidades que no pertencen al estándar para
facilitar la programación en el navegador (por ejemplo,
editar el DOM).


Clase 11

Funcionalidades agregadas a JavaScript en NodeJS (no
están presentes en ECMAScript):
-Mejores maneras de organizar el código en piezas reutilizables
-Trabajar con archivos
-Trabajar con bases de datos
-La habilidad de comunicarse a través de internet
-La habilidad de recibir y responder request en el
formato estándar
-Lidiar con trabajos que llevan mucho tiempo, sin
bloquear el servidor



*/