export const changeButtons = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      const btn = e.target;
      btn.classList.add('animated');
      btn.addEventListener('animationend', () => btn.classList.remove('animated'), { once: true });
    }
  });
};
