function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesForEl = document.querySelector('#boxes');
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes() {
  const amount = Number(inputEl.value);
  let boxesMarkup = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxesMarkup.push(boxEl);
  }
  boxesMarkup = boxesMarkup.map((boxMarkup, index) => {
    if (index === 0) {
      boxMarkup.style.width = '30px';
      boxMarkup.style.height = '30px';
      boxMarkup.style.backgroundColor = getRandomHexColor();
    } else {
      boxMarkup.style.width = parseInt(boxesMarkup[index-1].style.width) + parseInt('10px') + 'px';
      boxMarkup.style.height = parseInt(boxesMarkup[index - 1].style.height) + parseInt('10px') + 'px';
      boxMarkup.style.backgroundColor = getRandomHexColor();
    }
    return boxMarkup;
  })
  boxesForEl.append(...boxesMarkup);
};
function destroyBoxes() {
  boxesForEl.remove();
  inputEl.value = '';
}



