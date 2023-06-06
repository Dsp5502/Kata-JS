//* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100));
}

const ejercicio1 = document.getElementById('ejer1');
ejercicio1.innerHTML = `Array: ${array}`;

//* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let string = prompt('Ingrese un string con varias palabras separadas por coma');
let arraySplit = string.split(',');
const ejercicio2String = document.getElementById('ejer2-string');
const ejercicio2 = document.getElementById('ejer2');
ejercicio2.innerHTML = `De String a Array: ${JSON.stringify(arraySplit)}`;
ejercicio2String.innerHTML = `${string}`;

//* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let arrayOrder = [10, 40, 30, 20, 15, 5];
arrayOrder.sort((a, b) => a - b);
const ejercicio3 = document.getElementById('ejer3');
ejercicio3.innerHTML = `Array ordenado de menor a mayor: ${arrayOrder} <br> El número menor es: ${
  arrayOrder[0]
} <br> El número mayor es: ${arrayOrder[arrayOrder.length - 1]}`;
