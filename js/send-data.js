import { fetchData } from './services.js';
import { Modal } from './Modal.js';

export const sendData = () => {
  const form = document.querySelector('.contacts__form');

  const tnanksModal = new Modal('.modal', '.modal__close');
  tnanksModal.closeTimeout = () => setTimeout(() => tnanksModal.closeModal(), 3000);

  const messages = {
    success: {
      en: `THANK YOU FOR&nbsp;YOUR&nbsp;MESSAGE! <br />I'll contact you as&nbsp;soon&nbsp;as&nbsp;possible.`,
      ru: `СПАСИБО ЗА ВАШЕ СООБЩЕНИЕ! <br />Я свяжусь с&nbsp;вами в&nbsp;ближайшее&nbsp;время.`,
    },
    failed: {
      en: `Sorry, something went&nbsp;wrong. Failed&nbsp;to&nbsp;send&nbsp;data. Try&nbsp;again&nbsp;later`,
      ru: `Извините, что-то пошло не&nbsp;так. Не&nbsp;удалось отправить данные. Попробуйте позже.`,
    },
  };

  const showThanksModal = (message) => {
    const mess = localStorage.getItem('lang') === 'ru' ? message.ru : message.en;
    tnanksModal.modal.querySelector('.modal__text').innerHTML = mess;
    tnanksModal.openModal();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

    fetchData('https://jsonplaceholder.typicode.com/posts', 'POST', jsonData)
      .then((data) => {
        console.log(data);
        showThanksModal(messages.success);
      })
      .catch((err) => {
        console.log(err.message);
        showThanksModal(messages.failed);
      })
      .finally(() => {
        form.reset();
      });
  });

  document.querySelector('.hero .button').addEventListener('click', () => {
    window.location = './index.html#contacts';
  });
};
