/**
 Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32
 */

// transform('50F')
 function transformDegreee(degree) {
    const fahrenheitExists = degree.toUpperCase().includes('F')
    const celsiusExists = degree.toUpperCase().includes('C')

    // fluxo de erro
    if (!fahrenheitExists && !celsiusExists) {
      throw new Error('Grau inválido!')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C' // degreeSign -> sinal novo

    // fluxo alternativo, C -> F
    if(celsiusExists) {
      updateDegree = Number(degree.toUpperCase().replace('C', ''))
      formula = celsius => celsius * 9/5 + 32
      degreeSign = 'F' // degreeSign -> sinal novo
    }


    return formula(updateDegree) + degreeSign

 }

 try {
    console.log(transformDegreee('10C'))
    console.log(transformDegreee('50F'))
 } catch (e) {
    console.log(e)
 }