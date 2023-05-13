const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    if (formElements.email.value === '' || formElements.password.value === '') {
        return window.alert('Будь-ласка, заповніть всі поля форми!');
    } else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            console.log('name:', name);
            console.log('value:', value);
        });
        event.currentTarget.reset();
    };
}