/*
 Este es un tipo de dato muy similar al NULL, y significa tipo de dato desconocido. Y es el valor que se le 
 asignan a las variables cuando las declaramos y no las inincializamos.
 También se puede observar cuando una función se ejecuta hasta el final sin hacer un return o cuando no enviamos
 un parámetro a una función, en estos dos casos se recibirá un valor undefined
 Finalmente, undefined debe dejarse patra que el motor de javascript lo asigne automáticamente, un mejor uso sería
 con el NULL.
*/

//Ejemplo demostrativo del undefined
function saludar(nombre) {
    console.log(typeof nombre);
}

saludar();

//Método para saber si una variable es undefined, el cual sería el caso de que no se leyerá ningún valor.
typeof Variable === 'undefined'