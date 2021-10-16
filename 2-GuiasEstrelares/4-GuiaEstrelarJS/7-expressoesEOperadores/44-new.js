/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Guilherme'); // cria um objeto do tipo String
name.surName = 'Colares'
let number = new Number(10);        // cria um objeto do tipo Number
let date = new Date('2020-12-01')

console.log(name, number);
console.log(name.surName);
console.log(`tipo de name: ${typeof name}, tipo de number: ${typeof number}`);
console.log(date, typeof date);

