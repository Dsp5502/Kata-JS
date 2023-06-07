//* 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let number = parseInt(prompt('Introduce un número'));
let i = 1;
let multiplos = [];

while (i <= number) {
  if (i % 5 === 0) {
    console.log(i);
    multiplos.push(i);
  }
  i++;
}

document.write(`<h1> Estos sonlos multiplos de 5 del numero ${number}</h1>`);
document.write(`<p> ${multiplos}</p>`);

//* 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let number1 = parseInt(prompt('Introduce un número entre 1 y 50'));
let number2 = parseInt(prompt('Introduce otro número entre 1 y 50'));
let x = 1;
let loteria = [];

document.write(`<h1> Estos son los numeros del 1 al 50</h1>`);
while (x <= 50) {
  if (x === number1 || x === number2) {
    console.log(`${x} ¡Lotería!`);
    document.write(`<p> ${x} ¡Lotería!</p>`);
  } else {
    console.log(x);
    document.write(`<p> ${x}</p>`);
  }
  x++;
}

// * 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

let number3 = parseInt(prompt('Introduce un número'));
let numbers = [];

while (number3 !== 0) {
  if (isNaN(number3)) {
    alert('No has introducido un número');
    number3 = parseInt(prompt('Introduce otro número'));
  } else {
    numbers.push(number3);
    number3 = parseInt(prompt('Introduce otro número'));
  }
}

document.write(`<h1> Estos son los numeros que has introducido</h1>`);
document.write(`<p> ${numbers}</p>`);
console.log(numbers);

//* 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let word = prompt('Introduce una palabra');
let words = [];

while (word.toLocaleLowerCase() !== 'alguno') {
  if (word === '' || word === ' ' || !isNaN(word)) {
    alert('No has introducido una palabra valida');
    word = prompt('Introduce otra palabra');
  } else {
    words.push(word);
    word = prompt('Introduce otra palabra');
  }
}

document.write(`<h1> Estas son las palabras que has introducido</h1>`);
document.write(`<p>${words.join(' ')}</p>`);

//* 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let day = prompt('Introduce un día de la semana');

while (day.toLocaleLowerCase() !== 'domingo') {
  switch (day.toLocaleLowerCase()) {
    case 'lunes':
      alert('Hoy es lunes');
      day = prompt('Introduce otro día');
      break;
    case 'martes':
      alert('Hoy es martes');
      day = prompt('Introduce otro día');
      break;
    case 'miercoles':
      alert('Hoy es miercoles');
      day = prompt('Introduce otro día');
      break;
    case 'jueves':
      alert('Hoy es jueves');
      day = prompt('Introduce otro día');
      break;
    case 'viernes':
      alert('Hoy es viernes');
      day = prompt('Introduce otro día');
      break;
    case 'sabado':
      alert('Hoy es sabado');
      day = prompt('Introduce otro día');
      break;
    default:
      alert('No has introducido un día de la semana');
      day = prompt('Introduce otro día');
      break;
  }
}
alert('Ve a descansar');

document.write(`<h1>Ve a descansar</h1>`);
