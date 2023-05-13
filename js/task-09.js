function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const randomColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', onChangeBackgroundColor);
function onChangeBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  randomColorEl.textContent = getRandomHexColor();
}