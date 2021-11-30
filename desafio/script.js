
const openModalButton = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function(){
    modalWrapper.classList.remove('invisible') //modalWrapper é o nome da classe
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})