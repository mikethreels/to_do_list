/* eslint-disable no-unused-vars */
const StorageLogic = (() => {
  const createProject = () => {
    const newTitle = document.getElementById('newTitle').value;
    const Description = document.getElementById('newDescription').value;
    const object = { Description };

    localStorage.setItem(newTitle, JSON.stringify(object));
  };

  const createToDo = () => {
    const currentKeyName = document.getElementById('current_key').innerHTML;
    const newTitle = document.getElementById('newToDoTitle').value;
    const Description = document.getElementById('newToDoDescription').value;
    const Date = document.getElementById('newDate').value;
    const Priority = document.getElementById('newPriority').value;
    const currentKey = JSON.parse(localStorage.getItem(currentKeyName));
    currentKey.toDo = [newTitle, Description, Date, Priority];

    localStorage.setItem(currentKeyName, JSON.stringify(currentKey));
  };

  return {
    createProject,
    createToDo,
  };
})();


export default StorageLogic;