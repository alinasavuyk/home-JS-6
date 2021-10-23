const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const onLinkToIngredients =document.querySelector('ul#ingredients')


const elementIngredient =ingredients.map( (ingredient) => {
  const navLinkItemIngredient = document.createElement('li');
  navLinkItemIngredient.textContent = ingredient;
  navLinkItemIngredient.classList.add("item")
  return navLinkItemIngredient;
})
onLinkToIngredients.append(...elementIngredient);
//console.log(elementIngredient)
console.log(onLinkToIngredients)
