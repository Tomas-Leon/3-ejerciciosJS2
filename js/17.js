let texto = prompt("Por favor, ingrese el texto:");

const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

let posicionVocal = -1;

for (let i = 0; i < texto.length; i++) {
    
    if (vocales.includes(texto.charAt(i))) {
        posicionVocal = i+1; 
        break; 
    }
}

if (posicionVocal !== -1) {
    alert(`La primer vocal está en la posición ${posicionVocal}`);
} else {
    alert("No se encontraron vocales en el texto.");
}
