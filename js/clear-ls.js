export const clearLS = () => {
  if (!localStorage.getItem('new-user-portfolio')) {
    localStorage.clear();
    localStorage.setItem('new-user-portfolio', 'hello!');
  }
};
