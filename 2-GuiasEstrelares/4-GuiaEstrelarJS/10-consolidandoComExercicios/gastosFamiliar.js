/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array.
  * receitas: []
  * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

// objeto com rendimentos e despesas
let family = {
  incomes: [1000, 2000, 3000],
  expenses: [500, 1000, 1500, 5000]
}

// função para somar
function sum(arrayFamily) {
  let total = 0

  for(let value of arrayFamily) {
    total += value;
  }

  return total
}

function calculateBalance() {
  let calculateIcomes = sum(family.incomes)
  let calculateExpenses = sum(family.expenses)

  let total = calculateIcomes - calculateExpenses

  let balanceText = 'Saldo Negativo'

  let itsOk = total >= 0

  if(itsOk) {
    balanceText = 'saldo Positivo'
  }

  console.log(`${balanceText}: ${total.toFixed(2)}R$.`)
}

calculateBalance()