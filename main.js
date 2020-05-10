const button = document.querySelector(".nav__hamburger-menu");
const menu = document.querySelector(".nav__list")

const toggleClass = () => {
    menu.classList.toggle("nav__list--open");
};

button.addEventListener("click", toggleClass);
menu.addEventListener("click", toggleClass);
