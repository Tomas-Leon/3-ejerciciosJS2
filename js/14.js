let texto = prompt("Por favor, ingresa una cadena de texto:");

let resultado = "";

// Iterar sobre cada carácter de la cadena utilizando String
for (let i = 0; i < texto.length; i++) {
    
    resultado += texto.charAt(i);
    
    // Si no es el último carácter, añadir el signo '-'
    if (i < texto.length - 1) {
        resultado += "-";
    }
}

// Mostrar el resultado
alert(`El resultado es: ${resultado}`);
