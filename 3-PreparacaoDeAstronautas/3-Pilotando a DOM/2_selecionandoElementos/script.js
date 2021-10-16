/* Qual usar?

    getElementById (element)
    getElementByClassName (HTMLCollection)
    getElementByTagName (HTMLCollection)
    querySelector (element)
    querySelectorAll (Nodelist)

*/
// getElementById()
const elementId = document.getElementById('blog-title')
console.log(elementId)

// getElementByClassName()
const elementClass = document.getElementsByClassName('one')
console.log(elementClass)

// getElementsByTagName()
const elementTag = document.getElementsByTagName('meta')
console.log(elementTag)

// querySelector()
const elementSelector = document.querySelector('.one')
console.log(elementSelector)

// querySelectorAll()
const elementsSelector = document.querySelectorAll('#title-sec')
console.log(elementsSelector)