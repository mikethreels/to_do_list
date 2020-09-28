import project from './project';

const asideMod = (() => {
  const asideList = (ul) => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      const head = localStorage.key(i);
      link.append(head);
      link.classList.add('aside_link');
      link.addEventListener('click', () => {
        project(localStorage.key(i));
      });
      li.append(link);
      ul.append(li);
    }
    return ul;
  };

  const aside = () => {
    const aside = document.getElementById('side_bar');
    const ul = document.createElement('ul');
    ul.classList.add('aside_list');

    asideList(ul);

    aside.append(ul);
  };

  return {
    asideList,
    aside,
  };
})();

export default asideMod;