// Manipulando Arrays

let techs = ['html', 'css', 'javascript', 'react.js', 'react.js', 'angular'];

// Adicionar um item no fim
techs.push('vue.js');
// Adicionar no começo
techs.unshift('Lógica de Programação');
// Remover no fim
techs.pop();
// Remover do começo
techs.shift();
// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3));
console.log(techs.slice(0, 3));
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2);
techs.splice(1, 1);
// encontrar a posição de um elemento no array
console.log(techs.indexOf('angular'))

console.log(techs);