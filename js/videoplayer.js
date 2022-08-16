export const videoplayer = () => {
  const videoplayer = document.querySelector('.videoplayer');
  const video = videoplayer.querySelector('.videoplayer__viewer');
  const poster = videoplayer.querySelector('.videoplayer__poster');
  const mainBtn = videoplayer.querySelector('.videoplayer__btn');
  const playBtn = videoplayer.querySelector('.play-btn');
  const volumeBtn = videoplayer.querySelector('.volume-btn');
  const progress = videoplayer.querySelector('.progress');
  const volume = videoplayer.querySelector('.volume');

  const defaultVolume = 40;
  progress.max = 10000;

  const playVideo = () => {
    video.play();
    updateBtns();
  };

  const pauseVideo = () => {
    video.pause();
    updateBtns();
  };

  const updateBtns = () => {
    if (video.paused) {
      mainBtn.classList.add('active');
      playBtn.classList.remove('active');
    } else {
      mainBtn.classList.remove('active');
      playBtn.classList.add('active');
    }
  };

  const toggleVideo = () => (video.paused ? playVideo() : pauseVideo());

  const updateRange = (range) => {
    const value = (range.value / range.max) * 100;
    range.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
  };

  const changeVolume = () => {
    video.volume = volume.value / volume.max;
    video.volume == 0 ? volumeBtn.classList.add('muted') : volumeBtn.classList.remove('muted');
    updateRange(volume);
  };

  const toggleSound = () => {
    volumeBtn.classList.contains('muted') ? (volume.value = defaultVolume) : (volume.value = 0);
    changeVolume();
  };

  const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * progress.max;
    updateRange(progress);
    if (progress.value == progress.max) updateBtns();
  };

  const changeProgress = () => {
    video.currentTime = video.duration * (progress.value / progress.max);
    updateRange(progress);
  };

  mainBtn.addEventListener('click', () => {
    poster.classList.remove('active');
    mainBtn.classList.add('onvideo');
    playVideo();
  });

  video.addEventListener('click', toggleVideo);
  video.addEventListener('timeupdate', updateProgress);

  playBtn.addEventListener('click', toggleVideo);
  volumeBtn.addEventListener('click', toggleSound);

  progress.addEventListener('input', changeProgress);
  volume.addEventListener('input', changeVolume);
};
