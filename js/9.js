for (let i = 1; i <= 500; i++) {
  let salida = i.toString(); // Convertir el número a string para la salida

  if (i % 4 === 0) {
    salida += " (Múltiplo de 4)";
  }

  if (i % 9 === 0) {
    salida += " (Múltiplo de 9)";
  }

  console.log(salida);

  if (i % 5 === 0) {
    console.log("—————————————————————");
  }
}
