const humbergerWrapper = document.querySelector('.humberger-wrapper');
const huberger = document.querySelector('.humberger');

let menuIsOpen = false;

humbergerWrapper.addEventListener('click', () =>{
    if (!menuIsOpen) {
        menuIsOpen = true;
        humbergerWrapper.classList.add('menu-active');
    } else{
        menuIsOpen = false;
        humbergerWrapper.classList.remove('menu-active');
    }
});