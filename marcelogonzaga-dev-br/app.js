const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar__menu')

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLink.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);