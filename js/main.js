const orderButton = document.querySelector('#order-btn');
const formButton = document.querySelector('#form-btnn');
const zacButton = document.querySelector('#zac');
const moreButton = document.querySelector('#more');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const okClose = document.querySelector('.btn-modal-footer');

function toggleModal(){
    modal.classList.toggle('active');
}

orderButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
okClose.addEventListener('click', toggleModal);