const roja = document.querySelector('.rojo');
const amarilla = document.querySelector('.amarillo');
const verde = document.querySelector('.verde');

const semaforo = [roja, amarilla, verde];
let indice = 0;

const cambiarColor = () => {
  const colorActual = semaforo[indice];
  const colorAnterior =
    semaforo[(indice + semaforo.length - 1) % semaforo.length];

  colorAnterior.classList.remove('mostrar');
  colorActual.classList.add('mostrar');

  indice = (indice + 1) % semaforo.length;
};

setInterval(cambiarColor, 2000);
