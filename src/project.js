
const project = (header = localStorage.key(0)) => {
  const contentdiv = document.getElementById('project');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  const head = document.createElement('h1');
  head.setAttribute('id', 'current_key');
  const text = document.createElement('p');
  const object = localStorage.getItem(header);
  const retrieveObject = JSON.parse(object);
  head.innerHTML = header;
  text.innerHTML = retrieveObject.Description;
  contentdiv.append(head);
  contentdiv.append(text);
};

export default project;