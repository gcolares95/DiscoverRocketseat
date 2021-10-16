// Manipulando Strings

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram os espaços, coloque _

let phrase = 'Eu quero viajar pelo mundo';
let array = phrase.split(' ');
console.log(array);
let phraseWithUnderscore = array.join('_');
console.log(phraseWithUnderscore);