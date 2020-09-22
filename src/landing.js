const landing = () => {
  const contentdiv = document.getElementById('content');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  contentdiv.className = '';
  contentdiv.classList.add('landing');

  const head = document.createElement('h1');
  const form = document.createElement('form');
  const titleLable = document.createElement('label');
  const titleInput = document.createElement('input');
  const submit = document.createElement('input');

  form.classList.add('form');
  titleLable.setAttribute('for', 'title');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'newTitle');
  titleInput.required = true;
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Create');
  submit.classList.add('submit_button');

  titleLable.innerHTML = 'Title';
  head.innerHTML = 'Create a Project';


  contentdiv.append(head);
  form.append(titleLable);
  form.append(titleInput);
  form.append(submit);
  contentdiv.append(form);
};

export default landing;