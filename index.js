// Import stylesheets
import './style.css';
import { test } from './objects-examples/object-ex1.js';
// Write Javascript code!
const target = document.getElementById('app');
target.innerHTML = `<h1>Mutation Observer</h1>`;

const log = document.querySelector('#log');

function changeDom() {
  const s = document.createElement('span');
  s.innerHTML = ' Child El ';
  target.appendChild(s);
}

function changeAttribute() {
  target.style.color =
    target.style.color == 'yellow'
      ? 'red'
      : target.style.color == 'red'
      ? 'blue'
      : 'yellow';
}

document.querySelector('#changeDom').addEventListener('click', changeDom);

document
  .querySelector('#changeAttribute')
  .addEventListener('click', changeAttribute);

const config = { attributes: true, childList: true };
const callBack = (mutationList) => {
  for (const m of mutationList) {
    if (m.type === 'childList') {
      log.innerHTML += ' Child List Updated \n';
    } else if (m.type === 'attributes') {
      log.innerHTML += ' Attribute Updated \n';
    }
  }
};

const observer = new MutationObserver(callBack);
observer.observe(target, config);

// console.log('======>>>>> ');
// let c = cal.add(10).add(10).multi(10).sub(90).div(10);
// console.log('====>>> c ', c.total);

test();
