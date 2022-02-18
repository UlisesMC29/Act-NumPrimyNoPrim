/*
Este es un dato recién implementado, el cual es dato primitivo que puede representar números enteros 
con precisión arbitraria, la cual puede uede almacenar y operar de manera segura con números enteros 
grandes, incluso más allá del límite seguro de números enteros para Números.

Este se declara como un dato núemerico normal pero se le agrega una "n" al final del dato númerico.
Y también se pueden crear a partir de números o strings.
Pero su uso implica no poder hacer cálculos de ningún tipo.
*/

let big_datoexample = 352325645321345n;//Ejemplo de declaración de una dato BigInt.

let big_datostring = BigInt('352325645321345');//Ejemplo de una declaración de un dato BigInt a partir de un string.

//Imprime los valores en pantalla.
console.log(big_datoexample);
console.log(big_datostring);

Number.MAX_SAFE_INTEGER//Método para obtener el valor seguro más grande que se puede incrementar con números.
