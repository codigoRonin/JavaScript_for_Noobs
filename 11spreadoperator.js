let estudiantes = 
  {
    nombre: "Sergio",
    nota: 5
  };

let direcciones = {

    calle:"Avenida de la paz",
    pais: "España"

};

let unir = {
    ...estudiantes,
    ...direcciones
}

console.log(unir);
