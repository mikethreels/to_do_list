/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */

const helper = (() => {
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

  const editToDo = (currenttoDo) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      const newTitle = document.getElementById('newToDoTitle');
      newTitle.value = currenttoDo;
    });
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
      const editButton = editToDo(currenttoDo);
      editButton.classList.add('edit_button');
      delToDo.setAttribute('type', 'button');
      editButton.setAttribute('type', 'button');
      editButton.setAttribute('data-toggle', 'collapse');
      editButton.setAttribute('data-target', '#to_do_container');
      editButton.setAttribute('aria-expanded', 'false');
      editButton.setAttribute('aria-controls', 'addProject');
      button.append(`+ ${currenttoDo}`);
      delToDo.innerHTML = 'Delete toDo';
      editButton.innerHTML = 'Edit toDo';
      button.classList.add('collapsible');
      innerUl.append(toDoDescription);
      innerUl.append(toDoDate);
      innerUl.append(toDoPriority);
      innerUl.append(editButton);
      innerUl.append(delToDo);
      li.append(button);
      li.append(innerUl);
      ul.append(li);
    }
    return ul;
  };

  return {
    deleteToDo,
    collapseButton,
    toDoList,
    editToDo,
  };
})();

export default helper;