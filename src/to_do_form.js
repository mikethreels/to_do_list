const toDo = () => {
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
  const descriptionLabel = document.createElement('label');
  const description = document.createElement('input');
  const dateLabel = document.createElement('label');
  const date = document.createElement('input');
  const prioLabel = document.createElement('label');
  const priority = document.createElement('select');
  const prioHigh = document.createElement('option');
  const prioMed = document.createElement('option');
  const prioLow = document.createElement('option');
  const submit = document.createElement('input');

  form.classList.add('form');
  form.setAttribute('id', 'to_do');

  titleLable.setAttribute('for', 'title');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'newTitle');
  titleInput.required = true;

  descriptionLabel.setAttribute('for', 'description');
  description.setAttribute('type', 'text');
  description.setAttribute('name', 'description');
  description.setAttribute('id', 'newDescription');
  titleInput.required = true;

  dateLabel.setAttribute('for', 'date');
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('id', 'newDate');
  titleInput.required = true;

  prioLabel.setAttribute('for', 'priority');
  priority.setAttribute('name', 'priority');
  priority.setAttribute('id', 'newPriority');
  titleInput.required = true;
  prioHigh.setAttribute('value', 'high');
  prioMed.setAttribute('value', 'medium');
  prioLow.setAttribute('value', 'low');
  priority.append(prioHigh);
  priority.append(prioMed);
  priority.append(prioLow);

  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Add To Do');
  submit.classList.add('submit_button');

  head.innerHTML = 'Add a To Do';
  titleLable.innerHTML = 'Title';
  descriptionLabel.innerHTML = 'Description';
  dateLabel.innerHTML = 'Due Date';
  prioLabel.innerHTML = 'Priority';
  prioHigh.innerHTML = 'High';
  prioMed.innerHTML = 'Medium';
  prioLow.innerHTML = 'Low';

  contentdiv.append(head);
  form.append(titleLable);
  form.append(titleInput);
  form.append(descriptionLabel);
  form.append(description);
  form.append(dateLabel);
  form.append(date);
  form.append(prioLabel);
  form.append(priority);
  form.append(submit);
  contentdiv.append(form);
};

export default toDo;