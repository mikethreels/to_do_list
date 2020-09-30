/* eslint-disable no-restricted-globals */
import inputForms from './landing';
import StorageLogic from './form_submission';
import helper from './forms';

const forms = (() => {
  const project = (header) => {
    if (header === undefined) {
      header = localStorage.key(0);
    }
    const contentdiv = document.getElementById('project');
    while (contentdiv.firstChild) {
      contentdiv.removeChild(contentdiv.firstChild);
    }
    if (localStorage.length === 0) {
      StorageLogic.createProject('Create toDO list app', 'The goal of this project is to build a simple toDo list application with Javascript', true);
    }
    const head = document.createElement('h1');
    head.setAttribute('id', 'current_key');
    const text = document.createElement('p');
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('project_header');
    const object = localStorage.getItem(header);
    const retrieveObject = JSON.parse(object);
    const deleteButton = inputForms.deleteProject(header);
    head.innerHTML = header;
    text.innerHTML = retrieveObject.Description;
    headerDiv.append(head);
    headerDiv.append(deleteButton);
    contentdiv.append(headerDiv);
    contentdiv.append(text);

    const ul = document.createElement('ul');
    ul.classList.add('to_do_list');
    helper.toDoList(ul, header);

    contentdiv.append(ul);
  };

  const toDoForm = () => {
    const contentdiv = document.getElementById('to_do_container');
    const head = document.createElement('h1');
    head.innerHTML = 'Add or change your ToDoo';
    const button = document.getElementById('to_do_button');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const newTitle = document.getElementById('newToDoTitle');
      const Description = document.getElementById('newToDoDescription');
      const Date = document.getElementById('newDate');
      const Priority = document.getElementById('newPriority');
      const currentKeyName = document.getElementById('current_key');
      if (newTitle.value !== '' && Description.value !== '' && Date.value !== '' && Priority.value !== '') {
        StorageLogic.createToDo();
        location.reload();
        project(currentKeyName);
      }
      newTitle.value = '';
      Description.value = '';
      Date.value = '';
      Priority.value = '';
    });
    contentdiv.prepend(head);
  };

  return {
    toDoForm,
    project,
  };
})();

export default forms;