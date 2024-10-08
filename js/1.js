const edad = parseInt(prompt("Ingrese su edad"));

if (edad > 0 && edad < 130) {
  if (edad >= 18) {
    document.write("usted es mayor de edad");
  } else {
    document.write("usted es menor de edad");
  }
} else {
  alert("usted ingreso una edad invalida");
}
