const project = () => {
  const contentdiv = document.getElementById('project');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }

  const head = document.createElement('h1');
  const object = localStorage.getItem('project');
  const retrieveObject = JSON.parse(object);
  head.innerHTML = retrieveObject[0].title;
  contentdiv.append(head);
};

export default project;