export const switchPhotos = () => {
  const portfolioBtns = document.querySelector('.portfolio__buttons');
  const gallery = document.querySelector('.portfolio__gallery');
  const seasonPics = { winter: [], spring: [], summer: [], autumn: [] };

  const changeActiveBtn = (curActiveBtn) => {
    portfolioBtns.querySelectorAll('.button').forEach((btn) => btn.classList.remove('button_colored'));
    curActiveBtn.classList.add('button_colored');
  };

  const createGrid = () => {
    for (let i = 1; i <= 6; i++) {
      const picWrapper = document.createElement('div');
      picWrapper.classList.add('picture-wrapper');
      gallery.append(picWrapper);
    }
  };

  const createPictures = (season) => {
    for (let i = 1; i <= 6; i++) {
      const picture = document.createElement('picture');
      const src = `./assets/img/portfolio/${season}/${i}.jpg`;

      picture.innerHTML = `
        <source srcset=${src.slice(0, -3)}webp type="image/webp" />
        <source srcset=${src} type="image/jpeg" />
        <img src=${src} alt="Foto ${season}" />`;

      seasonPics[season].push(picture);
    }
  };

  const renderImages = (season) => {
    if (!seasonPics[season].length) createPictures(season);
    gallery.querySelectorAll('.picture-wrapper').forEach((elem, ind) => elem.append(seasonPics[season][ind]));
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
    createGrid();
    changeActiveBtn(curActiveBtn);
    renderImages(season);
  });
};
