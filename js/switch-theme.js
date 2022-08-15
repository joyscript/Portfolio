export const switchTheme = () => {
  const themeBtn = document.querySelector('.switch_theme');
  const themeIcon = themeBtn.querySelector('.icon');

  const switchTheme = (theme) => {
    if (theme === 'light') {
      themeIcon.src = './assets/svg/moon.svg';
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      themeIcon.src = './assets/svg/sun.svg';
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
