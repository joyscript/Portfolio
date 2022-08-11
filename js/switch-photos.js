export const switchPhotos = () => {
  const portfolioBtns = document.querySelector('.portfolio__buttons');
  const portfolioImages = document.querySelector('.portfolio__images');

  const seasonImages = { winter: [], spring: [], summer: [], autumn: [] };

  const changeActiveBtn = (curActiveBtn) => {
    portfolioBtns.querySelectorAll('.button').forEach((btn) => btn.classList.remove('button_colored'));
    curActiveBtn.classList.add('button_colored');
  };

  const loadImages = (season) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/portfolio/${season}/${i}.jpg`;
      img.classList.add('portfolio__img');
      seasonImages[season].push(img);
    }
  };

  const renderImages = (season) => {
    if (!seasonImages[season].length) loadImages(season);
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
    const curActiveBtn = portfolioBtns.querySelector(`[data-season=${season}]`);

    changeActiveBtn(curActiveBtn);
    renderImages(season);
  });
};
