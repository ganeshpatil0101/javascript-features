// Import stylesheets
import './style.css';
// import { test, cal } from './objects-examples/object-ex1.js';
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

// test();

function ArrayTest(){
  var f = function() {
    var a = [];
    a[Array.prototype.pop.apply(arguments)] = 1;
    return a;
  }
  console.log(' 0 Len -> ', f(0).length)
  console.log(' 0 Len -> ', f(100).length)
  console.log(' 0 Len -> ', f(Infinity).length)
  console.log(' 0 Len -> ', f(NaN).length)
}
ArrayTest();
console.log('================================')
const arr = ['apple','banana','orange']
arr[6]= 'grapes'
for(var iOf of arr){​​ ​
  console.log(iOf)
}
for(var iIn in arr){
  ​​​console.log(iIn)
}
console.log('================================')
function User(name) {
  this.name = name || "Ganesh";
}
var p = new User("Patil")["Location"] = "India";
console.log(p)

console.log('================================')
// Output for this program is different on actual program or chrome dev tool
var name = "Sam"
var person = {
  name: 'TOM',
  getName: () => {
    console.log(this.name);
  }
};
person.getName()
var printName = person.getName;
printName();

console.log('================================')
var x1 = 0.5, x2 = 0.9, x3 = 0.2;
console.log(x1 + x2 > x3 - 0.001 && x1 + x2 < x3 + 0.001)
console.log('================================')

console.log([...'Ganesh'])
console.log('================================')

