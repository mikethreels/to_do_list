const create = (evt) => {
  evt.preventDefault();
  const newTitle = document.getElementById('newTitle');
  const newObject = [{ title: newTitle.value }];
  localStorage.setItem('project', JSON.stringify(newObject));
};

export default create;