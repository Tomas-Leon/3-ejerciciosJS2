let sumaTotal = 0; // Inicializamos la suma total
let entrada; // Variable para almacenar la entrada del usuario
while (true) {
  entrada = prompt("Introduce un número (o pulsa 'cancelar' para salir):");
  if (entrada === null) {
    break; // Salimos del bucle si se pulsa "cancelar" ya que el cancelar hace null a la entrada
  }
  // Convertimos la entrada a número
  let numero = parseFloat(entrada);
  
  if (isNaN(numero)) {
    alert("Por favor, introduce un número válido."); // Mensaje de alerta
  } else {
    sumaTotal += numero;
  }
}
alert("La suma total de los números introducidos es: " + sumaTotal);

//creando el while (true) estoy creando un bucle infinito, que solo se detiene si se ejecuta el break