// Eventos parte 3
// argumento event
const input = document.querySelector('input')

input.onkeypress = function(event) {
    console.log(event.currentTarget.value)
}