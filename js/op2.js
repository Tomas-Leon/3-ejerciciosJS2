let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

let categoria;

switch (true) {
    case (edad >= 0 && edad <= 12):
        categoria = "Niño";
        break;
    case (edad >= 13 && edad <= 18):
        categoria = "Adolescente";
        break;
    case (edad >= 19 && edad <= 59):
        categoria = "Adulto";
        break;
    case (edad >= 60):
        categoria = "Adulto Mayor";
        break;
    default:
        categoria = "Edad no válida";
}

alert(`Tu categoría es: ${categoria}`);
