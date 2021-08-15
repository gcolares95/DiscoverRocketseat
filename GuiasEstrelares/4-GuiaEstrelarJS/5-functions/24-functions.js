// Function expression
// function anonymous

// parâmentros (parameters)
const sum = function(number1, number2) {
  let total = number1 + number2;
  return total;
}

// sum(2, 3); // arguments- arugumentos
// sum(2323, 512321);
// sum(3233,)

let number1 = 32; // essas duas variáveis são diferentes dos parameters da function
let number2 = 3;
// sum(number1, number2);

console.log(`O numero 1 é: ${number1}`);
console.log(`O numero 2 é: ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);