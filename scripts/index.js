const hamburgerMenu = document.querySelector('.hamburger-menu')
const mainHeader = document.querySelector('.main-header')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    mainHeader.classList.toggle('active')
    overlay.classList.toggle('active')
})

const overlay = document.querySelector('.overlay')

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    mainHeader.classList.remove('active')
    overlay.classList.remove('active')
})

const menuOptions = document.querySelectorAll('.menuOption')

menuOptions.forEach((menu) => {
    menu.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active')
        mainHeader.classList.remove('active')
        overlay.classList.remove('active')
    })
})