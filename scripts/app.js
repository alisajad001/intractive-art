const humbergerWrapper = document.querySelector('.humberger-wrapper');
const menu = document.querySelector('.menu');

let menuIsOpen = false;

humbergerWrapper.addEventListener('click', () =>{
    if (!menuIsOpen) {
        menuIsOpen = true;
        humbergerWrapper.classList.add('menu-active');
        menu.style.right = '0';
    } else{
        menuIsOpen = false;
        humbergerWrapper.classList.remove('menu-active');
        menu.style.right = '-450px';
    }
});