export const clearLS = () => {
  if (!localStorage.getItem('user777')) {
    localStorage.clear();
    localStorage.setItem('user777', 'hello!');
  }
};
