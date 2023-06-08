//* 1. Crea un programa que imprima en consola los números impares del 1 al 50.

const impares = document.getElementById('practice1');

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    impares.innerHTML += `<span>${i}</span>`;
  }
}

//* Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

let pokemons = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb',
];

let number = parseInt(prompt('Ingrese un número'));
const pokemos = document.getElementById('practice2');

for (let i = 1; i <= number; i++) {
  if (i % 5 === 0) {
    console.log(pokemons[i - 1]);
    pokemos.innerHTML += `<p><b>${pokemons[i - 1]}</b></p>`;
  }
}

//* 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let array = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero'];
const onlyNumbers = document.getElementById('practice3');

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number') {
    console.log(array[i]);
    onlyNumbers.innerHTML += `<span>${array[i]}</span>`;
  }
}
