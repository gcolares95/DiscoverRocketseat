// meu código
const buttonOpenModal = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

buttonOpenModal.addEventListener('click', function() {
    modalWrapper.classList.remove('invisible');
})

document.addEventListener('keydown', function(event) {
    const isEscapeKey = event.key == 'Escape';

    if(isEscapeKey) {
        modalWrapper.classList.add('invisible')
    }
})

// código do mayk brito
// const buttonOpenModal = document.getElementById('openModal');

// const modalWrapper = document.querySelector('.modal-wrapper');

// buttonOpenModal.onclick = function() {
//     modalWrapper.classList.remove('invisible');
// }

// document.onkeydown = function(event) {
//     const isEscapeKey = event.key == 'Escape';

//     if(isEscapeKey) {
//         modalWrapper.classList.add('invisible');
//     }
// }