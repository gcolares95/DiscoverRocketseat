/* 
  ### Transformar notas escolares
  
  Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

  * de 90 para cima - A
  * entre 80 - 89 - B
  * entre 70 e 79 - C
  * entre 60 - 69 - D
  * menor que 60 - F

*/

let getScore = (score) => {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score < 90
  let scoreC = score >= 70 && score < 80
  let scoreD = score >= 60 && score < 70
  let scoreF = score < 60 && score >= 0

  let scoreFinal;

  if(scoreA) {
    scoreFinal = 'A'
  } else if(scoreB) {
    scoreFinal = 'B'
  } else if(scoreC) {
    scoreFinal = 'C'
  } else if(scoreD) {
    scoreFinal = 'D'
  } else if(scoreF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Nota invalida'
  }

  console.log(scoreFinal)
}

getScore(100)
getScore(14)
getScore(-1)
getScore(10)
getScore(45)
getScore(81)