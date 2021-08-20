// practicing

function sayMyNumber(number = '') {
  if (number == '') {
    throw new Error('Faltou um numero ai filhão')
  }
  console.log(number) // não executou pois o erro interrompe a função
}

try {
  sayMyNumber(323)
} catch(e) {
  console.log(e)
}