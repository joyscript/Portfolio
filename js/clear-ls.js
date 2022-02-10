export const clearLS = () => {
  if (!localStorage.getItem('new-user777')) {
    localStorage.clear();
  }
  localStorage.setItem('new-user777', 'hello!');
};
