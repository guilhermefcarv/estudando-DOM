// {mostra o que retorna em cada caso aqui dentro}

// getElementByID() {element}
/*
const element = document.getElementById('blog-title')

console.log(element)
*/


//getElementsByClassName(){HTMLCollection}
/*
const element = document.getElementsByClassName('one')

console.log(element)
*/


// getElementsByTagName() HTMLCollection}
/*
const element = document.getElementsByTagName('meta')

console.log(element)
*/

// querySelector() {element}
// procura da mesma maneira que o CSS faz
// procura só primeiro caso seja pelo TagName declarado. Ex: querySelector('[meta]')
/*
const element = document.querySelector('.one')

console.log(element)
*/

// querySelector() {NodeList}
// procura todos os nós pelo TagName declarado. Ex: querySelectorAll('[meta]')
/*
const elements = document.querySelectorAll('.one')

elements.forEach(el => console.log(el))
*/