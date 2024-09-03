const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')

burger.onclick = () => {
    menu.classList.toggle('open')
}


const btnOpen = document.querySelector('.btn')
const btnClose = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')

btnOpen.onclick = () => {
    modal.classList.add('open-modal')
}
btnClose.onclick = () => {
    modal.classList.remove('open-modal')
}
