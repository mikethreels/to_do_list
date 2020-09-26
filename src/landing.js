import StorageLogic from './form_submission';
import project from './project';

const inputForms = (() => {
  const visibility = () => {
    const form = document.getElementById('content');
    if (form.attributes.class.value === 'landing') {
      form.attributes.class.value = 'landing hidden';
    } else {
      form.attributes.class.value = 'landing';
    }
  };

  const toDo = () => {
    const form = document.getElementById('to_do_container');
    if (form.attributes.class.value === 'to_do_container') {
      form.attributes.class.value = 'to_do_container hidden';
    } else {
      form.attributes.class.value = 'to_do_container';
    }
  };

  const landing = () => {
    const contentdiv = document.getElementById('content');
    const head = document.createElement('h1');
    head.innerHTML = 'Create a Project';
    const button = document.getElementById('project_button');
    button.addEventListener('click', StorageLogic.createProject);
    contentdiv.prepend(head);
  };

  const toDoForm = () => {
    const contentdiv = document.getElementById('to_do_container');
    const head = document.createElement('h1');
    head.innerHTML = 'Add a To Do';
    const button = document.getElementById('to_do_button');
    button.addEventListener('click', StorageLogic.createToDo);
    contentdiv.prepend(head);
  };

  const asideList = (ul) => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      const head = localStorage.key(i);
      link.append(head);
      link.classList.add('aside_link');
      link.addEventListener('click', () => {
        project(localStorage.key(i));
      });
      li.append(link);
      ul.append(li);
    }
    return ul;
  };

  return {
    landing,
    visibility,
    toDo,
    toDoForm,
    asideList,
  };
})();

export default inputForms;