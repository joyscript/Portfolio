export const switchTheme = () => {
  const themeBtn = document.querySelector('.switch-theme');
  const themeImg = themeBtn.querySelector('.switch-theme__img');

  const switchTheme = (theme) => {
    if (theme === 'light') {
      themeImg.src = './assets/svg/moon.svg';
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      themeImg.src = './assets/svg/sun.svg';
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
