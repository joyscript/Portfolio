export const changeButtons = () => {
  const heroBtn = document.querySelector('.hero .button');

  const animateBtn = (btn) => {
    btn.classList.add('animated');
    btn.addEventListener('animationend', () => btn.classList.remove('animated'), { once: true });
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('button') && e.target !== heroBtn) animateBtn(e.target);
  });

  heroBtn.addEventListener('click', () => (window.location = './index.html#contacts'));
};
