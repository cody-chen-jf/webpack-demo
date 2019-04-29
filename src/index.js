import _ from 'lodash';
import './style.css'
import printMe from './print'

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  var btn = document.createElement('button')

  btn.innerHTML = 'Click me and check the console !'
  btn.onclick = printMe.printMe

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());

if(module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting new change ...')
    printMe.printMe()
  })
}
