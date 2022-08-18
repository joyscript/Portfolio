export const changeButtons = () => {
  const animateBtn = (btn) => {
    btn.classList.add('animated');
    btn.addEventListener('animationend', () => btn.classList.remove('animated'), { once: true });
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) animateBtn(e.target);
  });
};
