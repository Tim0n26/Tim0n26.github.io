const redB = document.getElementById('redButton');
const greenB = document.getElementById('greenButton');
const body = document.querySelector('body');

redB.addEventListener('click', () => {
  body.classList.add('red');
  body.classList.remove('green');
})

greenB.addEventListener('click', () => {
  body.classList.add('green');
  body.classList.remove('red');
})