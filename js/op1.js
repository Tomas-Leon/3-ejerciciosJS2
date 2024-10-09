let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let operacion = prompt(
  "Elige una operación: + (suma), - (resta), * (multiplicación), / (división)"
);

// Variable para almacenar el resultado
let resultado;

// Usar switch para realizar la operación correspondiente
switch (operacion) {
  case "+":
    resultado = num1 + num2;
    alert(`El resultado de ${num1} + ${num2} es: ${resultado}`);
    break;
  case "-":
    resultado = num1 - num2;
    alert(`El resultado de ${num1} - ${num2} es: ${resultado}`);
    break;
  case "*":
    resultado = num1 * num2;
    alert(`El resultado de ${num1} * ${num2} es: ${resultado}`);
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
      alert(`El resultado de ${num1} / ${num2} es: ${resultado}`);
    } else {
      alert("Error: No se puede dividir por cero.");
    }
    break;
  default:
    alert(
      "Operación no válida. Por favor, elige una de las operaciones: +, -, *, /."
    );
    break;
}
