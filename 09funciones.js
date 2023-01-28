
function suma(num1, num2) {
    return num1 + num2;
}

console.log(suma(1,3));

// arrow function

let sumaLambda = (num1,num2) => num1 + num2;

console.log(sumaLambda(7,3));

// Podria tambien inicializar valores en los parametro para pasarselos
function suma2(num1, num2=12) {
    return num1 + num2;
}

console.log(suma2(3));
console.log(suma2(10, 3));

// Las funciones son un tipo de dato, por lo que podemos utilizarlo como letiable

let logicaSaludar = function(nombre) {console.log('Hola, mi nombre es ' + nombre)};
let logicaSaludarMaleducado = function(nombre) {console.log('Hola, no me gustas pero mi nombre es ' + nombre)};

// En logicaSaludar tenemos la referencia a la funcion
// Podemos hacer algo tan loco como pasar una funciona a otra:
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre) {
    console.log('Disculpe, perdone que le moleste, pero ');
    // Ejecutamos la funcion que hemos recibido
    funcionPasadaPorParametro(nombre);
    console.log('Espero pasar una muy buena velada con usted.');
}

// Si lo ejecutamos todo:
saludarSuperEducadamente(logicaSaludarMaleducado, 'Martin');

