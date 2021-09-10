// Eventos parte 2

// obs: nesse modo de adicionar evento, considera a ultima que encontrar.
// Não recomendada
const h1 = document.querySelector('h1');

h1.onclick = print

function print() {
    console.log('print')
}

h1.onclick = function() {
    console.log('outro momento')
}

// recomendada
const h2 = document.querySelector('h2');

h2.addEventListener('click', function() {
    console.log('momento 1')
})

h2.addEventListener('click', function() {
    console.log('momento 2')    
})