/* eslint-disable no-restricted-globals */
import StorageLogic from './form_submission';

const inputForms = (() => {
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

  const deleteProject = (head) => {
    const button = document.createElement('button');
    button.append('X');
    button.addEventListener('click', () => {
      localStorage.removeItem(head);
      location.reload();
    });
    return button;
  };

  return {
    landing,
    deleteProject,
    toDo,
  };
})();

export default inputForms;