
/*
Este tipo de dato primitivo hace referencia una cadena de texto que se utliza simplemente para
representar texto en los programas.
Puede ser declarado mediante:
-Comillas simples ( 'string' )
-Comillas dobles  ( "string" )
-Bactick o comilla invertida ( `string` ) -> permite interpolar una varibale o expresión dentro del string.
Se representa por una codificación UTF-16, el cual permite respresentar caracteres de varios alfabetos y
así como también emojis.

También encontramos el string vacio ( '' ), este nos permite darle un vaor inicial a una variable  
*/

let st_nombre = "Ulises"; //Ejemplo de declaración con comillas dobles
let st_apellido = 'Muñoz';//Ejemplo de declaración con comillas simples

//Ejemplo de declaración con comillas invertidas
let st_nombrecompleto = `Mi nombe completo es ${st_nombre} ${st_apellido}`;

//Ejemplo de una declaración de un string vacío y una muestra de como puede ser utilizado
let st_vacioexample = '';
st_vacioexample = `Mi nombre es Ulises ${ st_apellido }`;

//Imprime los valores en pantalla
console.log(st_nombre);
console.log(st_apellido);
console.log(st_nombrecompleto);
console.log(st_vacioexample);

//Metodo para poder revisar que tipo de dato es
typeof st_nombre;
typeof st_apellido;
typeof st_nombrecompleto;
typeof st_vacioexample;
