import { intObj } from './int-data.js';

export const addTranslateHandler = () => {
  const langElems = document.querySelectorAll('.switch-lng__elem');

  langElems.forEach((elem) => {
    elem.addEventListener('click', () => {
      const lang = elem.dataset.lang;
      changeActiveElem(elem);
      getTranslated(lang);
      localStorage.setItem('lang', lang);
    });
  });

  window.addEventListener('load', () => {
    const lang = localStorage.getItem('lang') || 'en';
    const elem = document.querySelector(`[data-lang=${lang}]`);
    changeActiveElem(elem);
    getTranslated(lang);
  });
};

const changeActiveElem = (clickedElem) => {
  const activeElem = document.querySelector('.switch-lng__elem.active');
  if (activeElem) activeElem.classList.remove('active');
  clickedElem.classList.add('active');
};

const getTranslated = (lang) => {
  const elements = document.querySelectorAll('[data-int]');

  elements.forEach((element) => {
    const key = element.dataset.int;
    const value = intObj[lang][key];

    if (value) {
      if (element.placeholder) {
        element.textContent = '';
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    }
  });
};
