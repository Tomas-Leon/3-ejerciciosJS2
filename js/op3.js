const metros = parseFloat(prompt("Ingrese la cantidad en metros:"));

const opcion = parseInt(
  prompt(
    "Seleccione la unidad a la que desea convertir: \n1. Kilómetros \n2. Centímetros \n3. Milímetros \n4. Pulgadas"
  )
);

let resultado;
let unidad;

switch (opcion) {
  case 1:
    resultado = metros / 1000;
    unidad = "kilómetros";
    break;
  case 2:
    resultado = metros * 100;
    unidad = "centímetros";
    break;
  case 3:
    resultado = metros * 1000;
    unidad = "milímetros";
    break;
  case 4:
    resultado = metros * 39.3701;
    unidad = "pulgadas";
    break;
  default:
    alert("Opción no válida. Por favor, elija una opción entre 1 y 4.");
}

alert(`${metros} metros son ${resultado} ${unidad}.`);
