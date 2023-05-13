const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMarkup = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  return ingredientsEl;
});
const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...ingredientsMarkup);

