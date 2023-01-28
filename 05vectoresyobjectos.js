let array = ["aa", "bb", 3, [1, 2], {nombre: 'Nombre', apellido: 'Apellido'}];
let objeto = {
    nombre: 'Michel', 
    apellido: 'Cuartero',
    edad: 47,
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        calle: 'texto de la calle',
        numero: 4
    }
}

let item0 = array[0];
let item1 = array[1];

let indice = 4;
let item4 = array[indice].nombre;

let nombreObjeto = objeto.nombre;


let item50 = array[50];
console.log(item50); // undefined

let longitud = array.length;

