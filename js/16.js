let texto = prompt("Por favor, ingresa una cadena de texto:");

let textoReverso = "";

// Iterar sobre la cadena desde el último carácter hasta el primero
for (let i = texto.length - 1; i >= 0; i--) {

    textoReverso += texto.charAt(i);
}

alert(`El texto al revés es: ${textoReverso}`);
