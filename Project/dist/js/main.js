//Select DOM items
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-navigation');
const navItems = document.querySelectorAll('.navigation-item');

//Initial state of the menu
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

//Toggle between overlay sets.
function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    }else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}
