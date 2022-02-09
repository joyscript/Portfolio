export const switchPhotos = () => {
  const portfolioBtns = document.querySelector('.portfolio__buttons');
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

  const changeActiveBtn = (curActiveBtn) => {
    const prevActiveBtn = document.querySelector('.portfolio__buttons .button_colored');
    if (prevActiveBtn) prevActiveBtn.classList.remove('button_colored');
    curActiveBtn.classList.add('button_colored');
  };

  const renderImages = (season) => {
    portfolioImages.innerHTML = '';
    seasonImages[season].forEach((img) => portfolioImages.append(img));
  };

  portfolioBtns.addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
      const clickedBtn = e.target;
      const season = clickedBtn.dataset.season;

      changeActiveBtn(clickedBtn);
      renderImages(season);
      localStorage.setItem('season', season);
    }
  });

  window.addEventListener('load', () => {
    const season = localStorage.getItem('season') || 'autumn';
    const curActiveBtn = document.querySelector(`.button[data-season=${season}]`);

    preloadImages();
    changeActiveBtn(curActiveBtn);
    renderImages(season);
  });
};
