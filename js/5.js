const letras = "TRWAGMYFPDXBNJZSQVHLCKE"; 
let dni; // Variable para almacenar la entrada del usuario
while (true) {
    dni = prompt("Introduce un número de DNI (0-99999999) o pulsa 'cancelar' para salir:");
    if (dni === null) {
        break; 
    }
    let numero = parseInt(dni);
    if (isNaN(numero) || numero < 0 || numero > 99999999) {
        alert("Por favor, introduce un número válido entre 0 y 99999999.");
    } else {
        let resto = numero % 23; // calculo el resto de dividir por 23
        let letra = letras[resto];
        alert("La letra correspondiente al DNI " + dni + " es: " + letra);
    }
}
