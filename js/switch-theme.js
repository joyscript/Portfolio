export const switchTheme = () => {
  const themeBtn = document.querySelector('.switch-theme');
  const themeIcon = themeBtn.querySelector('.switch-theme__icon');

  const switchTheme = (theme) => {
    if (theme === 'light') {
      themeIcon.setAttribute('href', './assets/svg/sprite.svg#moon');
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      themeIcon.setAttribute('href', './assets/svg/sprite.svg#sun');
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }

    localStorage.setItem('theme', theme);
  };

  themeBtn.addEventListener('click', () => {
    localStorage.getItem('theme') === 'light' ? switchTheme('dark') : switchTheme('light');
  });

  window.addEventListener('load', () => {
    localStorage.getItem('theme') === 'light' ? switchTheme('light') : switchTheme('dark');
  });
};
