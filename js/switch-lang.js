import { intObj } from './int-data.js';

export const switchLang = () => {
  const langElems = document.querySelectorAll('.switch-lng__elem');

  langElems.forEach((elem) => {
    elem.addEventListener('click', () => {
      const lang = elem.dataset.lang;
      changeActiveElem(elem);
      translateContent(lang);
      localStorage.setItem('lang', lang);
    });
  });

  window.addEventListener('load', () => {
    const lang = localStorage.getItem('lang') || 'en';
    const elem = document.querySelector(`[data-lang=${lang}]`);
    changeActiveElem(elem);
    translateContent(lang);
  });
};

const changeActiveElem = (curActiveElem) => {
  const prevActiveElem = document.querySelector('.switch-lng__elem.active');
  if (prevActiveElem) prevActiveElem.classList.remove('active');
  curActiveElem.classList.add('active');
};

const translateContent = (lang) => {
  const elems = document.querySelectorAll('[data-int]');

  elems.forEach((elem) => {
    const key = elem.dataset.int;
    const value = intObj[lang][key];

    if (value) {
      if (elem.placeholder) {
        elem.textContent = '';
        elem.placeholder = value;
      } else {
        elem.textContent = value;
      }
    }
  });
};
