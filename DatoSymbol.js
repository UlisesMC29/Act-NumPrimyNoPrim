/*
Este tipo de dato es de los relativamente nuevos, y se usa para crear valores únicos e irrepetibles.
Este se declara creando una variable y asignandole la funcion Symbol(), y se le puede poner una descripción, la cual 
va dentro de la función entrecomillada. 
También existe algo llamado "Registro Global de Símbolos", lo cual nos permite acceder a un mismo simbolo desde distintos
lugares de nuestro programa a partir de su descripción. 

Se suelen utilizar para reemplazar valores constantes que podrían llegar a ser strings. También se utilizan para identificar 
propiedades únicas de los objetos y evitar coalisiciones en los nombres de las propiedades de los objetos.
Estos también permiten agregar propiedades ocultas alos objetos
*/

let sym1 = Symbol();//Ejemplo de declaración de un valor Symbol.

let sym2 = Symbol('descripción');//Ejemplo de declaración de un valor Symbol y agregando una descripción.

let symGlobal = Symbol.for('símbolo global');//Ejemplo de declaración de un símbolo global.

let desc = Symbol.keyFor(symGlobal);//Método utilizando una función que nos permite obtener la descripción que describe a ese símbolo.
