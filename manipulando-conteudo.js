
// Manipulando conteúdo


// textContent
//muda o conteudo de texto 
/*
const element = document.querySelector('h1')

element.textContent = "Olá Devs!"

console.log(element.textContent)
*/


// innerText
// troca o texto interno do seu HTML
/*
const element = document.querySelector('h1')

element.innerText = "ola Devs!"
*/


// innerHTML
// troca o conteudo HTML interno
/*
const element = document.querySelector('h1')

element.innerHTML = "ola Devs! <small>!!!</small>"
*/


// value
/*
const element = document.querySelector('input')

element.value = "Valor que eu quiser"
*/


// atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header-id')
console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')