function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('Não implementando')
      break
  }

  return result;
} 

console.log(calculate(4, '+', 8))
console.log(calculate(9, '/', 3))
console.log(calculate(9, '%', 2))