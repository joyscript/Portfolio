export const videoplayer = () => {
  const playBtn = document.querySelector('.controls__btn.play');
  const volumeBtn = document.querySelector('.controls__btn.volume');

  const toggleAppearance = (btn, id1, id2) => {
    btn.classList.toggle('active');
  };

  playBtn.addEventListener('click', () => {
    toggleAppearance(playBtn, 'pause', 'play');
  });

  volumeBtn.addEventListener('click', () => {
    toggleAppearance(volumeBtn, 'mute', 'volume');
  });
};
