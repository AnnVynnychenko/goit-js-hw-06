let counterValue = 0;
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
btnDecrementEl.addEventListener('click', decrement);
function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
btnIncrementEl.addEventListener('click', increment);
function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

