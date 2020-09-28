/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import StorageLogic from './form_submission';

const forms = (() => {
  const deleteToDo = (currenttoDo, currentKey, head) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      delete currentKey[currenttoDo];
      currentKey = JSON.stringify(currentKey);
      localStorage.setItem(head, currentKey);
      location.reload();
    });
    return button;
  };

  const collapseButton = (innerUl, currentKey, currenttoDo) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      if (innerUl.attributes.class.value === 'none') {
        innerUl.attributes.class.value = 'to_do_specs';
      } else {
        innerUl.attributes.class.value = 'none';
      }
    });

    if (currentKey[currenttoDo][3] === 'high') {
      button.classList.add('high');
    } else if (currentKey[currenttoDo][3] === 'medium') {
      button.classList.add('medium');
    } else {
      button.classList.add('low');
    }
    return button;
  };

  const toDoList = (ul, head) => {
    const currentKey = JSON.parse(localStorage.getItem(head));

    for (let i = 1; i < Object.keys(currentKey).length; i += 1) {
      const currenttoDo = Object.keys(currentKey)[i];
      const li = document.createElement('li');
      const innerUl = document.createElement('ul');
      const toDoDescription = document.createElement('li');
      const toDoDate = document.createElement('li');
      const toDoPriority = document.createElement('li');
      innerUl.classList.add('none');
      toDoDescription.innerHTML = `<b>Description:</b> ${currentKey[currenttoDo][1]}`;
      toDoDate.innerHTML = `<b>Due Date:</b> ${currentKey[currenttoDo][2]}`;
      toDoPriority.innerHTML = `<b>Priority:</b> ${currentKey[currenttoDo][3]}`;

      const button = collapseButton(innerUl, currentKey, currenttoDo);
      const delToDo = deleteToDo(currenttoDo, currentKey, head);
      delToDo.setAttribute('type', 'button');
      button.append(`+ ${currenttoDo}`);
      delToDo.innerHTML = 'Delete toDo';
      button.classList.add('collapsible');
      innerUl.append(toDoDescription);
      innerUl.append(toDoDate);
      innerUl.append(toDoPriority);
      innerUl.append(delToDo);
      li.append(button);
      li.append(innerUl);
      ul.append(li);
    }
    return ul;
  };

  const toDoForm = () => {
    const contentdiv = document.getElementById('to_do_container');
    const head = document.createElement('h1');
    head.innerHTML = 'Add or change your ToDoo';
    const button = document.getElementById('to_do_button');
    button.addEventListener('click', (e) => {
      const newTitle = document.getElementById('newToDoTitle');
      const Description = document.getElementById('newToDoDescription');
      const Date = document.getElementById('newDate');
      const Priority = document.getElementById('newPriority');
      if (newTitle.value !== '') {
        StorageLogic.createToDo();
        e.preventDefault();
        location.reload();
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
    deleteToDo,
    collapseButton,
    toDoList,
  };
})();

export default forms;