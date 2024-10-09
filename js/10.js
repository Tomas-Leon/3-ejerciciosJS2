let filas = parseInt(prompt("Ingresa el número de filas:"));
let columnas = parseInt(prompt("Ingresa el número de columnas:"));
let totalCeldas = filas * columnas;
let tabla = "";

for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    // Calcular el número que debe ir en la celda
    let numeroCelda = totalCeldas - (i * columnas + j);
    if (numeroCelda > 0) {
      tabla += numeroCelda.toString().padStart(2, " ") + " "; // Alinear los números en las celdas
    }
  }
  tabla += "\n"; // Nueva línea al final de cada fila
}

// Mostrar la tabla en la consola
console.log(tabla);
