const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onRemoveFocusFromInput);
function onRemoveFocusFromInput(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}