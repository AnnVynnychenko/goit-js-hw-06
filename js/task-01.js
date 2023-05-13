const categoriesEl = document.querySelectorAll('.item');
const numberOfCategories = categoriesEl.length;
console.log('Number of categories:', numberOfCategories);
let categoryNameAndNumberOfElem = categoriesEl.forEach(category => {
    console.log('Category:', category.firstElementChild.textContent);
    let elem = category.lastElementChild.querySelectorAll('li')
    console.log('Elements:', elem.length)
})



