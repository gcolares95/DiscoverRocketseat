// Eventos

// adicionando eventos via HTML
// function print() {
//     console.log('mostrando evento via html')
// }

// Eventos de teclado
const input = document.querySelector('input')

input.onkeyup = function() { // onkeydown, onkeyup, onkeypress
    console.log('rodei')
}

// Eventos via JavaScript
const h2 = document.querySelector('h2');

h2.addEventListener('click', print) // 'click' o tipo do evento, 'print' a funcao

function print() {
    console.log('mostrando evento via js')
}