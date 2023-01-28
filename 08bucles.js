// Bucle while

let contador = 0;
let N = 10;
while (contador < N) {
    console.log(contador);
    contador += 1;
}

contador= 0;
// Bucle do while
do {
   console.log(contador);
    contador++;
} while(contador < N)


// Bucle for
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

let estudiantes = [
    {
        nombre: 'Estudiante 1',
        nota: 5
    },
    {
        nombre: 'Estudiante 2',
        nota: 8
    },
    {
        nombre: 'Estudiante 3',
        nota: 1
    }
]
for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    console.log(estudiante.nombre, estudiante.nota);
}

// Iterar sobre vectores y objetos
for (let estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}

for (let index in estudiantes) {
    console.log(index, estudiantes[index].nombre);
}

estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
});