// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika menu diklik
document.querySelector('#hamburger-menu').addEventListener('click', function () {
    navbarNav.classList.toggle('active');
});


//tutup sidebar ketika klik diluar content sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});