import landing from './landing';

const aside = () => {
  const aside = document.getElementById('side_bar');
  const ul = document.createElement('ul');
  ul.classList.add('aside_list');

  const createTab = (tab, linkFunc) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('aside_link');
    link.innerHTML = tab;
    link.addEventListener('click', linkFunc);
    li.append(link);
    ul.append(li);
  };

  createTab('Project 1', landing);

  aside.append(ul);
};

export default aside;