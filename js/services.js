export const clearLS = () => {
  if (!localStorage.getItem('new-user-portfolio')) {
    localStorage.clear();
    localStorage.setItem('new-user-portfolio', 'hello!');
  }
};

// ---------------------------------------
export const checkWebp = () => {
  const isWebp = () => {
    const webpImg = new Image();
    webpImg.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webpImg.onload = webpImg.onerror = () => document.body.classList.add(webpImg.height === 2 ? 'webp' : 'no-webp');
  };

  isWebp();

  document.addEventListener('DOMContentLoaded', isWebp);
};
// ---------------------------------------

export const fetchData = async (url, method, data) => {
  let res;

  if (method == 'POST') {
    res = await fetch(url, {
      method: method,
      body: data,
      headers: { 'Content-type': 'application/json' },
    });
  } else {
    res = await fetch(url);
  }

  if (!res.ok) throw new Error(`Ошибка запроса по адресу ${url}, статус: ${res.status}`);

  return await res.json();
};
