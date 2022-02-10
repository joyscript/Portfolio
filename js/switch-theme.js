export const switchTheme = () => {
  const themeBtn = document.querySelector('.switch-theme');
  const themeIcon = themeBtn.querySelector('.switch-theme__icon');

  const switchTheme = (theme) => {
    if (theme === 'light') {
      themeIcon.setAttribute('href', './assets/svg/sprite.svg#moon');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.setAttribute('href', './assets/svg/sprite.svg#sun');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  themeBtn.addEventListener('click', () => {
    document.body.classList.contains('light-theme') ? switchTheme('dark') : switchTheme('light');
  });

  window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'light') switchTheme('light');
  });
};
