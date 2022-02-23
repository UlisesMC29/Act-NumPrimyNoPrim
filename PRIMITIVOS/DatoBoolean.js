/*
Este tipo de dato cuenta con solo dos valores: True o False.
Para declararlo solo basta con escribir cualquiera de las dos opciones sin ningún carácter en especial.
Estos se pueden utilizar para aginarle un valor boolean a una variable e inicializar o se puede obtener un valor
boolean a partir de una comparación. 

Suelen ser utilizados con mayor frecuencia en las condicionales IF, o en ciclos FOR o WHILE.
En este tipo de dato existen valores falsos, los cuales van a ser evaluados como FALSE, como:
'' (string vacio), undefined y NaN, y cualquier otro valor diferente sera TRUE
*/

let bool_mayoredad = false;//Ejemplo de declaración boolean a una variable.

let bool_examplecompar = num_edad > 18;//Ejemplo de comparación y definir si una variable es T o F.

!bool_examplecompar//Método para obtener un valor opuesto. Se utiliza el signo " ! ".

bool_mayoredad && bool_examplecompar //Método para obtener múltiples valores al mismo tiempo. Se utiliza el signo " && ".

bool_examplecompar || bool_mayoredad //Método para saber si uno de ellos es verdadero, Se utiliza el " || ".

let bool_valorfalso = '';//Ejemplo de declaración de un valor falso

!!num_edad //Método para convertir un valor en boolean dependiendo de cual sea su valor, en este caso TRUE, ya que no es valor falso.

//Imprime los valores en pantalla.
console.log(bool_mayoredad);
console.log(bool_examplecompar);
console.log(bool_valorfalso);
