export const switchMenu = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  const toggleMenu = () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
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
