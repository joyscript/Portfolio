export const changeHeader = () => {
  const header = document.querySelector('.header');

  const changeHeaderOnScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', changeHeaderOnScroll);
  window.addEventListener('load', changeHeaderOnScroll);
};
