// * 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let respuesta = prompt('¿Eres bellisimo/a?');
let resultado = document.getElementById('resultado');

if (respuesta.toLowerCase().trim() === 'si') {
  alert('Ciertamente');
  resultado.innerHTML = 'Ciertamente';
} else if (respuesta.toLowerCase().trim() === 'no') {
  alert('No te creo');
  resultado.innerHTML = 'No te creo';
}

// * 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let numero = parseInt(prompt('Ingrese un número'));
let numResult = document.getElementById('numero');

if (isNaN(numero)) {
  alert('No ingresaste un número');
  numero = parseInt(prompt('Ingrese un número '));
}

if (numero % 2 === 0) {
  alert(`${numero} es divisible entre 2`);
  numResult.innerHTML = `${numero} es divisible entre 2`;
} else {
  alert(`${numero} no es divisible entre 2`);
  numResult.innerHTML = `${numero} no es divisible entre 2`;
}

// * 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let esPar = parseInt(prompt('Ingrese un número'));
let parResult = document.getElementById('par');

if (isNaN(esPar)) {
  alert('No ingresaste un número Ingresa un número válido ');
  esPar = parseInt(prompt('Ingrese un número'));
}

if (esPar % 2 === 0) {
  alert(`${esPar} es par`);
  parResult.innerHTML = `${esPar} es par`;
} else {
  alert(`${esPar} es impar`);
  parResult.innerHTML = `${esPar} es impar`;
}

// * 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let numCliente = parseInt(prompt('Ingrese su número de cliente'));
let clienteResult = document.getElementById('cliente');

if (isNaN(numCliente)) {
  alert('No ingresaste un número Ingresa un número válido ');
  numCliente = parseInt(prompt('Ingrese un número'));
}

if (numCliente === 1000) {
  alert('Ganaste un premio');
  clienteResult.innerHTML = 'Ganaste un premio';
} else {
  alert(`Lo sentimos, sigue participando ${numCliente}`);
  clienteResult.innerHTML = `Lo sentimos, sigue participando ${numCliente}`;
}

//* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let num1 = parseInt(prompt('Ingrese un número'));
let num2 = parseInt(prompt('Ingrese otro número'));

let menor = document.getElementById('menor');

if (isNaN(num1) || isNaN(num2)) {
  alert('No ingresaste un número Ingresa un número válido ');
  num1 = parseInt(prompt('Ingrese un número'));
  num2 = parseInt(prompt('Ingrese otro número'));
}

if (num1 < num2) {
  alert(`${num1} es menor que ${num2}`);
  menor.innerHTML = `${num1} es menor que ${num2}`;
} else if (num1 > num2) {
  alert(`${num2} es menor que ${num1}`);
  menor.innerHTML = `${num2} es menor que ${num1}`;
}

// * 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let number1 = parseFloat(prompt('Ingrese el primer número:'));
let number2 = parseFloat(prompt('Ingrese el segundo número:'));
let number3 = parseFloat(prompt('Ingrese el tercer número:'));

let numMayor = document.getElementById('numMayor');

let mayor = Math.max(number1, number2, number3);

if (number1 === number2 || number1 === number3 || number2 === number3) {
  alert(`Dos números son iguales y el número mayor es: ${mayor}`);
  numMayor.innerHTML = `Dos números son iguales y el número mayor es: ${mayor}`;
} else {
  alert(`El número mayor es: ${mayor}`);
  numMayor.innerHTML = `El número mayor es: ${mayor}`;
}

//* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt('Ingrese un día de la semana');
let diaResult = document.getElementById('dia');

const mostrarResultado = (mensaje) => {
  alert(mensaje);
  diaResult.innerHTML = mensaje;
};

let diaLowerCase = dia.toLowerCase().trim();

if (diaLowerCase === 'lunes') {
  mostrarResultado('Hoy es lunes');
} else if (diaLowerCase === 'viernes') {
  mostrarResultado('Hoy es viernes');
} else if (diaLowerCase === 'sabado' || diaLowerCase === 'domingo') {
  mostrarResultado('Hoy es fin de semana');
} else {
  mostrarResultado('No ingresaste un día válido');
}

//* 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion = parseFloat(prompt('Ingrese una calificación entre 1 y 10'));
let calificacionResult = document.getElementById('calificacion');

const mostrarCalificacion = (mensaje) => {
  alert(mensaje);
  calificacionResult.innerHTML = mensaje;
};

if (calificacion >= 1 && calificacion <= 10) {
  if (calificacion < 6) {
    mostrarCalificacion('Reprobado');
  } else if (calificacion >= 6 && calificacion <= 8) {
    mostrarCalificacion('Regular');
  } else if (calificacion === 9) {
    mostrarCalificacion('Bien');
  } else if (calificacion === 10) {
    mostrarCalificacion('Excelente');
  }
} else {
  mostrarCalificacion('No ingresaste una calificación válida');
}

//* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// *   El helado sin topping cuesta 50 MXN.
// *   El topping de oreo cuesta 10 MXN.
// *   El topping de KitKat cuesta 15 MXN.
// *   El topping de brownie cuesta 20 MXN.
// *   En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

let helado = prompt('¿Qué topping desea?');
let heladoResult = document.getElementById('helado');

const toppings = {
  oreo: 10,
  kitkat: 15,
  brownie: 20,
  sinTopping: 0,
};

const precio = (mensaje) => {
  alert(mensaje);
  heladoResult.innerHTML = mensaje;
};

const calcularPrecio = (topping) => {
  if (toppings[topping]) {
    precio(
      `El precio del helado con topping de ${topping} es de ${
        toppings[topping] + 50
      } MXN`
    );
  } else {
    precio(
      `No tenemos este topping, lo sentimos. El precio del helado sin topping es de 50 MXN`
    );
  }
};

calcularPrecio(helado.toLowerCase().trim());

//  *10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
//  *   El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
//  *   Carrera $3999 MXN
//  *   Master: $2999 MXN
//  *   Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
//  *   Beca Facebook: 20% de descuento.
//  *   Beca Google: 15% de descuento.
//  *   Beca Jesua: 50% de descuento.
//  *   Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
//   *  Course: 2 meses
//   *  Carrera 6 meses
//   *  Master: 12 meses

let curso = prompt('¿Qué curso desea?');
