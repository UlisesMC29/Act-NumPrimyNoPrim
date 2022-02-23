/*
 Este se puede definir como un una entidad independiente con tipos y propiedades que definan sus características.
 Contiene propiedades que se puede explicar como una variabla djunta al proyecto, siendo básicamente lo mismo que las variables comunes 
 pero con un nexo al objeto. Este a diferencia de un dato primitivo, puede tener varias variables que lo definan (propiedades).
 Para definir un objeto y sus variables basta con definir la variable objeto y después asignarle un valor.
 Una forma de definir las propiedas o valores de un objeto es con un "Iniciador de un objeto", que consta de  lista delimitada por comas
 de cero o más pares de nombres de propiedad y valores asociados de un objeto, encerrados entre llaves ({})
*/


var MyCar = new Object();//Ejemplo de declaración de una variable como objeto.

//Ejemplo de asignación de valores (propiedades al objeto). 
MyCar.make = 'Ford';
MyCar.model = 'Mustang';
MyCar.year = 2000;
MyCar.cylinder = 'V8';

//Ejemplo asignación de valores de un objeto con el "Iniciador de un objeto".
var MyCar2 = {
    make: 'Dodge',
    model: 'Challenger SRT Demon',
    year: '2018',
    cylinder: 'V8'

};

