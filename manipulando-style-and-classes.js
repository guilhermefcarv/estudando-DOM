// Alterando estilos
/*
const element = document.querySelector('body')
element.style.backgroundColor = "#f9f7f2"
*/

// classList

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active') 
element.classList.toggle('active') // se tiver ele tira, se não tiver ele remove