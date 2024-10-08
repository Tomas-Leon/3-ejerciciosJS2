let cadenas = []; // Array para almacenar las cadenas
let entrada; // Variable para almacenar la entrada del usuario

// Bucle que solicita cadenas hasta que se cancele
do {
  entrada = prompt(
    "Introduce una cadena de texto (o pulsa 'cancelar' para salir):"
  );
  // Si la entrada no es nula, se agrega al array
  if (entrada !== null) {
    cadenas.push(entrada);
  }
} while (entrada !== null);
// Concatenar las cadenas con un guión
let resultado = cadenas.join("-");

alert("Cadenas concatenadas: " + resultado);

//join(): determina cual va a ser el separador de la cadena.