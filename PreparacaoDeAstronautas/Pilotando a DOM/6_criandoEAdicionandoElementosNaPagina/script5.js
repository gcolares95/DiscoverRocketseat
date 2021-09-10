// Criando e adicionando elementos

// createElement
const divAntes = document.createElement('div')
divAntes.innerHTML = 'Adicionado antes!'

const divDepois = document.createElement('div');
divDepois.innerHTML = 'Adicionado depois!'

// prepend append 
const body2 = document.querySelector('body')
body2.prepend(divAntes) // adiciona algo antes

const body = document.querySelector('body')
body.append(divDepois) // adiciona algo depois

// insertBefore
const div3 = document.createElement('div')
div3.innerHTML = 'Usando insertBefore antes do script'

const body3 = document.querySelector('body')
const script = body.querySelector('script')

body.insertBefore(div3, script) // div3 é o novo elemento, script nó de referência

// Simulando um "insertAfter"
const div4 = document.createElement('p')
div4.innerHTML = "Simulando um 'insertAfter"

const body4 = document.querySelector('body')
const header4 = body.querySelector('header')

body4.insertBefore(div4, header4.nextElementSibling)