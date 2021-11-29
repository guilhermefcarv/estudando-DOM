// Criando e adicionando elementos


// createElement
/*
const div = document.createElement('div');
div.innerText = "Macacos me mordam!"
*/

// append prepend
/*
const body = document.querySelector('body');

body.append(div) //append adiciona algo depois
body.prepend(div) //prepend adiciona algo antes
*/



// Adicionando elementos
const div = document.createElement('div');
div.innerText = "Macacos me mordam!"

// insertBefore
const body = document.querySelector('body');
const script = body.queryElement('script');

body.insertBefore(div, script) // coloca o que vai ser inserido, antes de que

// não existe um insertAfter, sendo assim, basta colocar assim:
/*
// Adicionando elementos
const div = document.createElement('div');
div.innerText = "Macacos me mordam!"

// insertBefore
const body = document.querySelector('body');
const header = body.queryElement('header');
body.insertBefore(div, header.nextSibling)
*/