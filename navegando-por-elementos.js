// Navegando por elementos

// parentNode parentElement 
/*
const body = document.querySelector('body')

console.log(body.parentNode) 
*/

// childNodes children
/*
const el = document.querySelector('body')

console.log(el.childNodes) // não elimina os espaços em branco
console.log(el.children) // elimina os espaços em branco, trazendo em HTMLCollection
*/


//firstChild firstElementChild
/*
const el = document.querySelector('body')

console.log(el.firstChild) // não elimina os espaços em branco
console.log(el.firstElementChild) // elimina os espaços em branco, trazendo em HTMLCollection
*/

//lastChild lastElementChild
/*
const el = document.querySelector('body')

console.log(el.lastChild) // não elimina os espaços em branco
console.log(el.lastElementChild) // elimina os espaços em branco, trazendo em HTMLCollection
*/


// nextSibling nextElementSibling
/*
const el = document.querySelector('header')

console.log(el.nextSibling) // não elimina os espaços em branco
console.log(el.nextElementSibling) // elimina os espaços em branco, trazendo em HTMLCollection
*/

// previousSibling previousElementSibling
/*
const el = document.querySelector('header')

console.log(el.previousSibling) // não elimina os espaços em branco
console.log(el.previousElementSibling) // elimina os espaços em branco, trazendo em HTMLCollection
*/