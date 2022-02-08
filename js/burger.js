export const addBurgerClickHandler = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  const toggleMenu = () => {
    burger.classList.toggle('burger_active');
    nav.classList.toggle('nav_active');

    if (nav.classList.contains('nav_active')) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }
  };

  const closeMenu = (e) => {
    if (e.target.classList.contains('nav__link') || !e.target.closest('.header__nav')) {
      toggleMenu();
    }
  };

  burger.addEventListener('click', toggleMenu);
};
