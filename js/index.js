const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const toggleMenu = () => {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('nav_active');
};

const closeMenu = () => {
  burger.classList.remove('burger_active');
  nav.classList.remove('nav_active');
};

burger.addEventListener('click', toggleMenu);

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link') || !e.target.closest('.header__nav')) {
    closeMenu();
  }
});
