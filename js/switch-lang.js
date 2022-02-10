import { intObj } from './int-data.js';

export const switchLang = () => {
  const langSwitches = document.querySelectorAll('.switch_lang');

  langSwitches.forEach((switchBtn) => {
    switchBtn.addEventListener('click', () => {
      const lang = switchBtn.dataset.lang;
      changeActiveElem(switchBtn);
      translateContent(lang);
      localStorage.setItem('lang', lang);
    });
  });

  window.addEventListener('load', () => {
    const lang = localStorage.getItem('lang') || 'en';
    const switchBtn = document.querySelector(`[data-lang=${lang}]`);
    changeActiveElem(switchBtn);
    translateContent(lang);
  });
};

const changeActiveElem = (curActiveElem) => {
  const prevActiveElem = document.querySelector('.switch_lang.active');
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
