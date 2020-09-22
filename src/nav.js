import landing from './landing';
import toDo from './add_to_do';

const nav = () => {
  const nav = document.getElementById('navbar');
  const ul = document.createElement('ul');
  ul.classList.add('nav_list');

  const createTab = (tab, linkFunc) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('nav_link');
    link.innerHTML = tab;
    link.addEventListener('click', linkFunc);
    li.append(link);
    ul.append(li);
  };

  createTab('+ Create project', landing);
  createTab('add to do', toDo);

  nav.append(ul);
};

export default nav;