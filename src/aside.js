import inputForms from './landing';


const aside = () => {
  const aside = document.getElementById('side_bar');
  const ul = document.createElement('ul');
  ul.classList.add('aside_list');

  inputForms.asideList(ul);

  aside.append(ul);
};

export default aside;