let numPiramide = parseInt(prompt('"Ingresa un número entre 1 y 50:"'))

if (numPiramide > 0 && numPiramide <= 50) {

    for (let i = 1; i <= numPiramide; i++) {
        let fila = '';
        for (let j = 1; j <= i; j++) {
            fila += j; // Concatenar el número j a la línea
        }
        console.log(fila);
    }
} else {
    alert("Por favor, ingresa un número válido entre 1 y 50.");
}


// el i va desde 1 hasta el numero ingresado y j va desde 1 hasta i