// Navegando pelos elementos
// parentNode parentElement

const body = document.querySelector('body')
// console.log(body.parentNode)
// console.log(body.parentElement)

const h1 = document.querySelector('h1')
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// ---------------------------------------------------
// childNodes children
const el = document.querySelector('body')
// console.log(el.childNodes) // nodeList
// console.log(el.children) // HTMLCollection

// firstChild firstElementChild
// console.log(el.firstChild)
// console.log(el.firstElementChild)

// lastChild lastElementChild
// console.log(el.lastChild)
// console.log(el.lastElementChild)

// ---------------------------------------------------
// nextSibing nextElementSibling
const element = document.querySelector('ol')
console.log(element.nextSibling)
console.log(element.nextElementSibling)

// previousSibling previusElementSibling
console.log(element.previousSibling)
console.log(element.previousElementSibling)