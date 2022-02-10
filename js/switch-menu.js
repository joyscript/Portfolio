export const switchMenu = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.overlay');

  const toggleMenu = () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');

    if (nav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('click', closeMenu);
    } else {
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('click', closeMenu);
    }
  };

  const closeMenu = (e) => {
    if (e.target.classList.contains('nav__link') || !e.target.closest('.header__nav')) {
      toggleMenu();
    }
  };

  burger.addEventListener('click', toggleMenu);
};
