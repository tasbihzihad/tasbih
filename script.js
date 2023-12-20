const heaser = document.querySelector("header");

window.addEventListener ("scroll", function() {
    Header.classList.toggle ("sticky", window.scrolly > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = ( => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
});