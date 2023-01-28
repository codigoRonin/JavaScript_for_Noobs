// Qué son los tipos
let suma = 2 + "2"; //'22'

// Los tipos de javascript:
let numero = 2;
let string = "Soy un texto";
let booleano = true;

let array = ["aa", "bb", 3, [1, 2]];
let objeto = {
  nombre: "Michel",
  apellido: "Cuartero",
  edad: 13
};


// null y undefined
// null NO tiene un valor
// undefined no esta definido

let valorNulo = null;
let valorUndefined;
console.log(valorNulo == valorUndefined);
console.log(valorNulo === valorUndefined);
console.log(typeof valorNulo, typeof valorUndefined);

valorUndefined = 5;

// typeof
console.log(typeof booleano);

let vector = [];
vector.push(3);
vector.push(4);
vector.pop();

console.log(vector); // [3]

let objetoParaProbar = { nombre: "Michel" };
objetoParaProbar.nombre = "Cristobal";
console.log (objetoParaProbar);