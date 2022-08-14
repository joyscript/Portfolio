export const videoplayer = () => {
  const playBtn = document.querySelector('.controls__btn.play');
  const volumeBtn = document.querySelector('.controls__btn.volume');

  const toggleAppearance = (btn, id1, id2) => {
    btn.classList.toggle('active');
    let id = btn.classList.contains('active') ? id1 : id2;
    btn.firstElementChild.src = `./assets/svg/sprite.svg#${id}`;
  };

  playBtn.addEventListener('click', () => {
    toggleAppearance(playBtn, 'pause', 'play');
  });

  volumeBtn.addEventListener('click', () => {
    toggleAppearance(volumeBtn, 'mute', 'volume');
  });
};
