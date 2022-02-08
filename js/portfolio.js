export const renderPortfolioImages = () => {
  const portfolioBtns = document.querySelectorAll('.portfolio__buttons .button');
  const portfolioImages = document.querySelector('.portfolio__images');

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const seasonImages = { winter: [], spring: [], summer: [], autumn: [] };

  const preloadImages = () => {
    seasons.forEach((season) => {
      for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/portfolio/${season}/${i}.jpg`;
        seasonImages[season].push(img);
      }
    });
  };

  const changeActiveBtn = (clickedBtn) => {
    const activeBtn = document.querySelector('.portfolio__buttons .button_colored');
    if (activeBtn) activeBtn.classList.remove('button_colored');
    clickedBtn.classList.add('button_colored');
  };

  const renderImages = (season) => {
    portfolioImages.innerHTML = '';
    seasonImages[season].forEach((img) => portfolioImages.append(img));
  };

  preloadImages();

  portfolioBtns.forEach((btn) =>
    btn.addEventListener('click', () => {
      const season = btn.dataset.season;

      changeActiveBtn(btn);
      renderImages(season);
      localStorage.setItem('season', season);
    })
  );

  window.addEventListener('load', () => {
    const season = localStorage.getItem('season') || 'autumn';
    const clickedBtn = document.querySelector(`.portfolio__buttons .button[data-season=${season}]`);

    changeActiveBtn(clickedBtn);
    renderImages(season);
  });
};
