let texto = prompt("Por favor, ingrese el texto:");

let contadorVocales = 0;

const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

for (let i = 0; i < texto.length; i++) {
    
    if (vocales.includes(texto.charAt(i))) {
        contadorVocales++;
    }
}

alert(`El número de vocales en el texto es: ${contadorVocales}`);
