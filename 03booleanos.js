let booleanoCierto = true;
let booleanoFalso = false;

let a = "10";
let b = 10;

let aMayorQueb = a > b;

// > < >= <= == === != !==

console.log(a === b); //false

let rangoInicio = 0;
let rangoFinal = 100;
let numeroAComparar = 101;

let mayorQueInicio = numeroAComparar > rangoInicio;
let menorQueFinal = numeroAComparar < rangoFinal;
let dentroDeRango = mayorQueInicio && menorQueFinal;
console.log(dentroDeRango);  // false

/* AND (&&) Tabla de verdad booleana && -> Es cierto si todas son ciertas
1 && 1 : 1
1 && 0 : 0
0 && 1 : 0
0 && 0 : 0
*/

/* OR (||) Tabla de verdad booleana || -> Es cierto si al menos hay un cierto
1 || 1 : 1
1 || 0 : 1
0 || 1 : 1
0 || 0 : 0
*/

/* NOT (!) Tabla de verdad booleana ! -> Invierte el valor booleano
1 : 0
0 : 1
*/

let haHechoTrabajo = true;
let notaExamenFinal = 10;
let tieneFaltaTécnica = true;
let aprobadoElCurso =
  (haHechoTrabajo || notaExamenFinal >= 5) && !tieneFaltaTécnica;
console.log(aprobadoElCurso);


