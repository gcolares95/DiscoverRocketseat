// Manipulando conteúdo

// textContent

const element = document.querySelector('h1')

element.textContent += ' manipulando'

console.log(element.textContent)

// innerText
const element2 = document.querySelector('h1')

element2.innerText = 'Coelho <smal>!!!</small>'

// innerHTML
const element3 = document.querySelector('h1')

element3.innerHTML = 'ola mundo!!<small>!!!</small>'

// value
const element4 = document.querySelector('input')

console.log(element4.value)
element4.value = 'outro valor'

// Atributos (adicionando atributos)
const element5 = document.querySelector('header')
element5.setAttribute('id', 'header-1')

const headerID = document.querySelector('#header-1')
console.log(headerID)

// Atributos (pegando atributos)
console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))

// Atributos (removendo atributos)
headerID.removeAttribute('id')
headerID.removeAttribute('class')