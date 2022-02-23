/*
Este tipo de dato primitivo permite representar cualquier número, ya sea enteros, decimales o negativos.
Este tipo de dato no tiene forma de decararlo, con solo escribir el número es suficiente.

 Para representar los números se utiliza el formato EEE754, lo que significa que cada número ocupa 64bits en la memoria.
 Provocando que a la hora de representar números decimales no sea muy preciso.
 En solución a lo anterior se utiliza el método "toFixed(<number>)" para poder asignar el número de la cantidad
 de dígitos que se desea observar después de la coma.

 Para los números tambiéne existen un rango de valor máximo (2^53) y un valor mínimo (-2^53), después de estas numeraciones
 solo se consiguen aproximaciones.

 También existe un valor númerico que se puede encontrar y es el NaN (Not a Number), que es el resultados de cómputos inválidos.
*/

let num_edad = 21; //Ejemplo de declaración de un valor number.

let st_usodedatosexamp = `Mi edad es ${num_edad}`; //Ejemplo del uso de un valor Number y un String

let num_exampleDecimales = 0.1 + 0.3;//Ejemplo del uso de decimales.

//Ejemplo de mal uso el método toFixed(), debido a que este arroja un valor string.
let num_example2Decimales = (0.2 + 0.5).toFixed(2);

//Manera correcta de usar el método toFixed(), este arroja un valor númerico, se agrega "+" al inicio.
let num_example3Decimales = +(0.3 + 0.6).toFixed(2);

//Ejemplos de un resultado NaN.
let num_usodelNaN = 0 / 0;
let num_uso2delNaN = "Ulises" / 0.2;
let num_uso3delNaN = NaN + 15;

//Imprime los valores en pantalla.
console.log(num_edad);
console.log(st_usodedatosexamp);
console.log(num_exampleDecimales);
console.log(num_example2Decimales);
console.log(num_example3Decimales);
console.log(num_usodelNaN);
console.log(num_uso2delNaN);
console.log(num_uso3delNaN);

//Método para poder validar si un dato es de tipo NaN.
isNaN(20)

//Los números más grandes y más pequeños que se podrán ver representados con los 64Bits.
Number.MAX_VALUE

Number.MIN_VALUE