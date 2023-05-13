const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', onRangeChange);
function onRangeChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}