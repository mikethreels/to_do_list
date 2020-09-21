const aside = () => {
  const aside = document.getElementById('side_bar');
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

  createTab('Project 1', aside);

  aside.append(ul);
};

export default aside;