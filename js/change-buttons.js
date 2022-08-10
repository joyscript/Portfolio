export const changeButtons = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      e.target.classList.add('active');
      e.target.addEventListener('animationend', () => e.target.classList.remove('active'), { once: true });
    }
  });
};
