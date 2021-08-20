// throw (lançar, disparar)

function sayMyName(name = '') {
  if (name === '') {
    throw new Error("Nome é obrigatório") // padrão
    // ou
    // throw 'Nome é obrigatório'
  }

  console.log('Depois do erro') // thorw para a execução dessa função
}

console.log('Apos o try/catch de erro')

// try...catch
try {
  sayMyName();
} catch(e) { // catch vai capturar o throw atráves do (e)
  console.log(e)
}