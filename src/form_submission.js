/* eslint-disable no-unused-vars */
const StorageLogic = (() => {
  const createProject = (newTitle, Description, empty = false) => {
    if (empty !== true) {
      newTitle = document.getElementById('newTitle').value;
      Description = document.getElementById('newDescription').value;
    }
    const object = { Description };

    localStorage.setItem(newTitle, JSON.stringify(object));
    if (empty) {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  };

  const createToDo = () => {
    const currentKeyName = document.getElementById('current_key').innerHTML;
    const newTitle = document.getElementById('newToDoTitle').value;
    const Description = document.getElementById('newToDoDescription').value;
    const Date = document.getElementById('newDate').value;
    const Priority = document.getElementById('newPriority').value;
    const currentKey = JSON.parse(localStorage.getItem(currentKeyName));
    currentKey[newTitle] = [newTitle, Description, Date, Priority];

    localStorage.setItem(currentKeyName, JSON.stringify(currentKey));
  };

  return {
    createProject,
    createToDo,
  };
})();


export default StorageLogic;