
let nombre1 = prompt("Ingrese el nombre 1:");
let edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}:`));

let nombre2 = prompt("Ingrese el nombre 2:");
let edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}:`));

let nombre3 = prompt("Ingrese el nombre 3:");
let edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}:`));

/*let mayorNombre = nombre1;
let mayorEdad = edad1;

if (edad2 > mayorEdad) {
    mayorNombre = nombre2;
    mayorEdad = edad2;
}
if (edad3 > mayorEdad) {
    mayorNombre = nombre3;
    mayorEdad = edad3;
}
alert(`La persona mayor es: ${mayorNombre} con ${mayorEdad} años.`);*/

let edades = [edad1, edad2, edad3];
let maxEdad = Math.max(...edades);

let mayorNombre = (maxEdad === edad1) ? nombre1 :
                  (maxEdad === edad2) ? nombre2 :
                  nombre3;

alert(`La persona mayor es: ${mayorNombre} con ${maxEdad} años.`);
