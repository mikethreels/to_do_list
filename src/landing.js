import aside from './aside';

const landing = () => {
  const contentdiv = document.getElementById('content');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  contentdiv.className = '';
  contentdiv.classList.add('landing');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const head = document.createElement('h1');
  const text = document.createElement('p');
  const div = document.createElement('div');
  img1.setAttribute('src', '../src/images/load1.jpg');
  img2.setAttribute('src', '../src/images/load2.jpg');
  head.innerHTML = 'Breakfast and Brunch';
  text.innerHTML = 'because we always use fresh ingredients our products will taste the best!';
  div.className = 'loadpage_img_container';
  div.append(img1);
  div.append(img2);
  contentdiv.append(head);
  contentdiv.append(text);
  contentdiv.append(div);
};

export default landing;