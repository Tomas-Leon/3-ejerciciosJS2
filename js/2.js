const nota = parseFloat(prompt("ingrese su nota"));

if (isNaN(nota)) {
  alert("introduce un numero valido");
} else if (nota < 0 || nota > 10) {
  alert("numero erroneo");
} else {
  if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
  } else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
  } else if (nota === 7) {
    alert("Bien");
  } else if (nota >= 8 && nota <= 9) {
    alert("Notable");
  } else if (nota === 10) {
    alert("Sobresaliente");
  }
}
