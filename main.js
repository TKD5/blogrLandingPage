const headerMobileMenu = document.querySelector('.header-mobile-menu');
const hamburgerButton = document.querySelector('.header-hamburger-btn');

hamburgerButton.addEventListener('click', function() {
    headerMobileMenu.classList.toggle('show');
})