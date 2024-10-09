let numeroPiramide = parseInt(prompt("Ingresa un número entre 1 y 50:"));

if (numeroPiramide > 0 && numeroPiramide <= 50) {
    for (let i = numeroPiramide; i >= 1; i--) {
        let linea = i.toString().repeat(i);
        console.log(linea);
    }
} else {
    alert("Por favor, ingresa un número válido entre 1 y 50.");
}
