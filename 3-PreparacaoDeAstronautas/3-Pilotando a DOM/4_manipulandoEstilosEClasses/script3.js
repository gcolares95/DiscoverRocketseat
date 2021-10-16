// Alterando estilos
const element = document.querySelector('body')
element.style.backgroundColor = '#f9f3D2'
console.log(element.style.backgroundColor)

const element2 = document.getElementById('titulo')
element2.style.color = '#7FFF00'
console.log(element2.style.color)


// classList
const element3 = document.querySelector('h2')

element3.classList.add('active', 'green')

element3.classList.remove('active')

element3.classList.toggle('active') // toggle() vai adicionar, caso não tenha e remover caso já exista

console.log(element3.classList)

